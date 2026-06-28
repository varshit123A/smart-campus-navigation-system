/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { Campus, Building, NavigationRoute } from "../types";

// Standard icon fixing for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface CampusMapProps {
  activeCampus: Campus;
  buildings: Building[];
  selectedBuilding: Building | null;
  activeRoute: NavigationRoute | null;
  routesList: NavigationRoute[];
  onSelectRoute: (routeId: string) => void;
  selectedRouteId: string;
  mapLayer: "street" | "satellite" | "terrain" | "dark" | "heatmap" | "3d";
  simulationIndex: number;
  isSimulating: boolean;
  onSelectBuilding: (building: Building) => void;
  accessibilityMode: boolean;
  crowdSystemEnabled: boolean;
  roads?: any[];
  walkways?: any[];
  boundary?: [number, number][];
}

export default function CampusMap({
  activeCampus,
  buildings,
  selectedBuilding,
  activeRoute,
  routesList,
  onSelectRoute,
  selectedRouteId,
  mapLayer,
  simulationIndex,
  isSimulating,
  onSelectBuilding,
  accessibilityMode,
  crowdSystemEnabled,
  roads = [],
  walkways = [],
  boundary = [],
}: CampusMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const routeLinesGroupRef = useRef<L.FeatureGroup | null>(null);
  const polygonsGroupRef = useRef<L.LayerGroup | null>(null);
  const backgroundGroupRef = useRef<L.LayerGroup | null>(null);
  const simMarkerRef = useRef<L.Marker | null>(null);
  const activeTileLayerRef = useRef<L.TileLayer | null>(null);

  // State to trigger recalculating collision-detected labels on map move/zoom
  const [mapChangeTrigger, setMapChangeTrigger] = useState(0);

  // Map rotation/bearing state (in degrees)
  const [mapRotation, setMapRotation] = useState(0);

  // Helper to convert rotation to human-readable cardinal bearing string
  const getCardinalDirection = (deg: number) => {
    const normalized = ((deg % 360) + 360) % 360;
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(normalized / 45) % 8;
    return `${normalized}° ${directions[index]}`;
  };

  // Define tile URLs
  const TILE_LAYERS = {
    street: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    terrain: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    heatmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "3d": "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
  };

  // 1. Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map(mapContainerRef.current, {
      center: [activeCampus.lat, activeCampus.lng],
      zoom: activeCampus.zoom,
      zoomControl: false, // will build custom overlay buttons for clean SaaS look
    });

    mapRef.current = map;

    // Create custom panes for strict layering (GIS standard)
    const boundaryPane = map.createPane("boundaryPane");
    boundaryPane.style.zIndex = "350";

    const roadsPane = map.createPane("roadsPane");
    roadsPane.style.zIndex = "360";

    const walkwaysPane = map.createPane("walkwaysPane");
    walkwaysPane.style.zIndex = "370";

    const buildingsPane = map.createPane("buildingsPane");
    buildingsPane.style.zIndex = "450";

    const routePane = map.createPane("routePane");
    routePane.style.zIndex = "500";

    // Layer Groups
    backgroundGroupRef.current = L.layerGroup().addTo(map);
    polygonsGroupRef.current = L.layerGroup().addTo(map);
    markersGroupRef.current = L.layerGroup().addTo(map);
    routeLinesGroupRef.current = L.featureGroup().addTo(map);

    // Dynamic label collision recalculator
    map.on("zoomend moveend viewreset resize", () => {
      setMapChangeTrigger((prev) => prev + 1);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [activeCampus.id]);

  // 2. Sync Map Layer Type
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (activeTileLayerRef.current) {
      map.removeLayer(activeTileLayerRef.current);
    }

    const tileUrl = TILE_LAYERS[mapLayer];
    const maxZoom = mapLayer === "satellite" ? 19 : 18;
    const tileLayer = L.tileLayer(tileUrl, {
      attribution: "© OpenStreetMap contributors, Esri, CartoDB",
      maxZoom,
    }).addTo(map);

    activeTileLayerRef.current = tileLayer;
  }, [mapLayer, activeCampus.id]);

  // 2.5 Render Official Campus Boundary, Roads, and Walkways (OSM Digital Twin Layers)
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !backgroundGroupRef.current) return;

    backgroundGroupRef.current.clearLayers();

    // Render boundary if available
    if (boundary && boundary.length >= 3) {
      const boundaryPoly = L.polygon(boundary, {
        pane: "boundaryPane",
        color: "#10b981", // Emerald verified border
        weight: 2.5,
        dashArray: "8, 8",
        fillColor: "#10b981",
        fillOpacity: 0.04,
        interactive: false
      }).addTo(backgroundGroupRef.current);

      // Auto-fit to the full campus extent!
      try {
        const bounds = boundaryPoly.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
        }
      } catch (e) {
        console.warn("Error fitting boundary bounds:", e);
      }
    } else {
      // Fallback zoom to campus center
      map.setView([activeCampus.lat, activeCampus.lng], activeCampus.zoom || 15);
    }

    // Render verified roads
    if (roads && roads.length > 0) {
      roads.forEach((road) => {
        if (road.points && road.points.length >= 2) {
          L.polyline(road.points, {
            pane: "roadsPane",
            color: mapLayer === "dark" ? "#475569" : "#cbd5e1",
            weight: 4,
            opacity: 0.7,
            interactive: true
          })
          .addTo(backgroundGroupRef.current!)
          .bindTooltip(road.name || "Campus Road", { sticky: true, className: "text-[10px] font-semibold bg-white px-1.5 py-0.5 rounded shadow-sm" });
        }
      });
    }

    // Render verified walkways
    if (walkways && walkways.length > 0) {
      walkways.forEach((walkway) => {
        if (walkway.points && walkway.points.length >= 2) {
          L.polyline(walkway.points, {
            pane: "walkwaysPane",
            color: "#60a5fa", // dynamic light blue walkway path
            weight: 2,
            dashArray: "4, 6",
            opacity: 0.8,
            interactive: true
          })
          .addTo(backgroundGroupRef.current!)
          .bindTooltip(walkway.name || "Campus Walkway", { sticky: true, className: "text-[10px] font-semibold bg-white px-1.5 py-0.5 rounded shadow-sm" });
        }
      });
    }
  }, [boundary, roads, walkways, activeCampus.id, mapLayer]);

  // 3. Render Building Footprints and Markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !markersGroupRef.current || !polygonsGroupRef.current) return;

    markersGroupRef.current.clearLayers();
    polygonsGroupRef.current.clearLayers();

    const labelBoxes: { x1: number; y1: number; x2: number; y2: number }[] = [];

    // Sort buildings so the selected building is processed first and always gets its label shown
    const sortedBuildings = [...buildings].sort((a, b) => {
      const aSel = selectedBuilding?.id === a.id;
      const bSel = selectedBuilding?.id === b.id;
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return 0;
    });

    sortedBuildings.forEach((building) => {
      const isSelected = selectedBuilding?.id === building.id;

      // Category specific Google Maps styling and SVG Icons
      let color = "#1a73e8"; // Default Blue
      let iconSvg = ""; // Standard SVG Paths
      let emojiFallback = "🏢";

      switch (building.category) {
        case "admin":
          color = "#8e24aa"; // Purple (Admin / Offices)
          emojiFallback = "🏛️";
          iconSvg = `
            <path d="M12 2L2 7h20L12 2zM4 10v10h16V10H4zm4 8H6v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6z" fill="currentColor"/>
          `;
          break;
        case "academic":
        case "lab":
          color = "#1a73e8"; // Blue (Academic blocks)
          emojiFallback = "🎓";
          iconSvg = `
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13a4.5 4.5 0 01-4-2.5V18a4 4 0 008 0v-4.5c-.8 1.5-2.3 2.5-4 2.5z" fill="currentColor"/>
          `;
          break;
        case "hostel":
          color = "#ff4081"; // Salmon Pink / Coral (Lodging / Hostels)
          emojiFallback = "🏠";
          iconSvg = `
            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" fill="currentColor"/>
          `;
          break;
        case "dining":
          color = "#ff5722"; // Bright Orange (Food / Dining / Cafe)
          emojiFallback = "🍔";
          iconSvg = `
            <path d="M11.5 10H13v1.5c0 .83.67 1.5 1.5 1.5H16v2.5c0 .83-.67 1.5-1.5 1.5h-1V17c1.1 0 2-.9 2-2v-3H9V3H7v7H5V3H3v7c0 2.76 2.24 5 5 5h3v4h2V3h-2v7z" fill="currentColor"/>
          `;
          break;
        case "library":
          color = "#00796b"; // Teal (Library / Knowledge centers)
          emojiFallback = "📚";
          iconSvg = `
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" fill="currentColor"/>
          `;
          break;
        case "sports":
          color = "#2e7d32"; // Green (Sports field / Cricket arena)
          emojiFallback = "⚽";
          iconSvg = `
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15a7 7 0 100 14 7 7 0 000-14z" fill="currentColor"/>
          `;
          break;
        case "medical":
          color = "#d32f2f"; // Emergency Red (Medical / Clinic / Hospital)
          emojiFallback = "🏥";
          iconSvg = `
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
          `;
          break;
        case "gate":
          color = "#455a64"; // Blue-gray (Gateways / Entrance)
          emojiFallback = "🚪";
          iconSvg = `
            <path d="M19 19h-2v-8c0-.55-.45-1-1-1h-4v9H9V6L4 8v11H2v2h20v-2h-3zm-7-17C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
          `;
          break;
        case "atm":
          color = "#00c853"; // Money Green (ATM / Banks)
          emojiFallback = "💵";
          iconSvg = `
            <path d="M21 4H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 14H3V6h18v12zm-9-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
          `;
          break;
        case "auditorium":
          color = "#795548"; // Brown (Convocation / Auditorium)
          emojiFallback = "🏛️";
          iconSvg = `
            <path d="M22 2H2v20h20V2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm6-5h-2c0-2.21-1.79-4-4-4V6c3.31 0 6 2.69 6 6z" fill="currentColor"/>
          `;
          break;
      }

      // Draw Footprint Polygons (True Digital Twin effect - strict pane, absolutely NO offsets or artificial structures)
      if (building.polygonPoints) {
        let polyColor = color;
        let polyFillOpacity = isSelected ? 0.6 : 0.25;
        let polyWeight = isSelected ? 3 : 1.5;

        // Render EXACT boundary geometry from dataset, with zero procedural offsets
        L.polygon(building.polygonPoints, {
          pane: "buildingsPane",
          color: polyColor,
          weight: polyWeight,
          fillColor: polyColor,
          fillOpacity: polyFillOpacity,
        }).addTo(polygonsGroupRef.current!);
      }

      // Accessibility highlight
      if (accessibilityMode && building.accessibility.wheelchairFriendly) {
        L.circle([building.lat, building.lng], {
          pane: "buildingsPane",
          radius: 15,
          color: "#059669",
          weight: 2,
          fillColor: "#34d399",
          fillOpacity: 0.4
        }).addTo(polygonsGroupRef.current!);
      }

      // Add clickable marker styled EXACTLY like Google Maps!
      const customIcon = L.divIcon({
        className: "custom-google-marker",
        html: `
          <div class="flex flex-col items-center justify-center relative select-none cursor-pointer" style="width: 140px;">
            <!-- Outer circular drop shadow pin -->
            <div class="relative flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? "w-9 h-9 scale-120 z-40"
                : "w-7.5 h-7.5 hover:scale-110 hover:z-30"
            }">
              
              <!-- Map pin circle teardrop outer frame -->
              <div class="absolute inset-0 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center" style="box-shadow: 0 2px 4px rgba(0,0,0,0.25);">
                <!-- Colored circle inside -->
                <div class="w-6 h-6 rounded-full flex items-center justify-center text-white" style="background-color: ${color};">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="none">
                    ${iconSvg ? iconSvg : `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>`}
                  </svg>
                </div>
              </div>
              
              <!-- Pin tail downward pointer -->
              <div class="absolute -bottom-1 w-2.5 h-2.5 rotate-45 bg-white border-r border-b border-slate-300 shadow-sm" style="margin-bottom: 0.5px;"></div>
            </div>

            <!-- Persistent Text Label BELOW the Pin (Google Maps Style!) -->
            <div class="mt-1.5 px-2 py-0.5 rounded shadow-sm border border-slate-200/80 text-center transition-all duration-300 max-w-[130px] overflow-hidden text-ellipsis ${
              isSelected
                ? "bg-slate-900 text-white font-extrabold scale-102 border-slate-950 z-40"
                : "bg-white/95 text-slate-800 font-bold"
            }" style="font-size: 9px; line-height: 1.2; letter-spacing: -0.015em; box-shadow: 0 1px 3px rgba(0,0,0,0.12); ${
              (() => {
                let showLabel = true;
                try {
                  const pt = map.latLngToContainerPoint([building.lat, building.lng]);
                  const labelWidth = 120;
                  const labelHeight = 22;
                  const box = {
                    x1: pt.x - labelWidth / 2,
                    y1: pt.y + 15,
                    x2: pt.x + labelWidth / 2,
                    y2: pt.y + 15 + labelHeight,
                  };

                  if (isSelected) {
                    labelBoxes.push(box);
                  } else {
                    let collided = false;
                    for (const other of labelBoxes) {
                      const overlapX = box.x1 < other.x2 && box.x2 > other.x1;
                      const overlapY = box.y1 < other.y2 && box.y2 > other.y1;
                      if (overlapX && overlapY) {
                        collided = true;
                        break;
                      }
                    }
                    if (collided) {
                      showLabel = false;
                    } else {
                      labelBoxes.push(box);
                    }
                  }
                } catch (e) {
                  showLabel = true;
                }
                return showLabel ? "" : "display: none;";
              })()
            }">
              ${building.name}
            </div>
          </div>
        `,
        iconSize: [140, 60],
        iconAnchor: [70, 15], // Perfect anchor point centered horizontally and anchored at pin's center-y
      });

      const marker = L.marker([building.lat, building.lng], { icon: customIcon });
      
      // Bind descriptive popup as an additional fallback
      marker.bindPopup(`
        <div class="p-2 max-w-xs">
          <div class="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
            <span class="w-2 h-2 rounded-full" style="background-color: ${color};"></span>
            <span>${building.name}</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">${building.description.substring(0, 100)}...</p>
          <div class="flex items-center gap-2 mt-2 pt-1 border-t border-slate-100 text-[10px] text-slate-400">
            <span>♿ ${building.accessibility.wheelchairFriendly ? "Wheelchair Accessible" : "Standard Entrance"}</span>
          </div>
        </div>
      `);

      marker.on("click", () => {
        onSelectBuilding(building);
      });

      markersGroupRef.current.addLayer(marker);
    });
  }, [buildings, selectedBuilding, mapLayer, accessibilityMode, crowdSystemEnabled, activeCampus.id, mapChangeTrigger]);

  // 4. Highlight Routes (Dijkstra route presentation)
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !routeLinesGroupRef.current) return;

    routeLinesGroupRef.current.clearLayers();

    if (activeRoute) {
      // Draw all available route options (Best, Alternative, Longer) to satisfy multi-route display
      routesList.forEach((r) => {
        const isSelected = r.id === selectedRouteId;
        const color = isSelected ? r.color : "#94a3b8"; // Gray if not selected
        const opacity = isSelected ? 0.85 : 0.4;
        const weight = isSelected ? 6 : 4;
        const dashArray = r.type === "longer" ? "10, 10" : undefined;

        const polyline = L.polyline(r.points, {
          pane: "routePane",
          color,
          weight,
          opacity,
          dashArray: isSelected ? undefined : dashArray,
          className: isSelected ? "route-animate-active" : undefined,
          lineJoin: "round",
          lineCap: "round",
        });

        // Click to switch active route options
        polyline.on("click", () => {
          onSelectRoute(r.id);
        });

        routeLinesGroupRef.current?.addLayer(polyline);

        // Bind quick details to line
        polyline.bindTooltip(`<b>${r.name}</b><br>${r.distance}m | ${r.duration} mins`, {
          sticky: true,
          className: "text-xs rounded shadow-lg border border-slate-200 bg-white p-1"
        });
      });

      // Fit map bounds to show full route nicely
      try {
        const bounds = routeLinesGroupRef.current.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      } catch (err) {
        console.warn("Could not fit route bounds:", err);
      }
    }
  }, [activeRoute, routesList, selectedRouteId, activeCampus.id]);

  // 5. Simulate Live Marker Movement with Direction Rotating Arrow
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !activeRoute) {
      if (simMarkerRef.current) {
        simMarkerRef.current.remove();
        simMarkerRef.current = null;
      }
      return;
    }

    if (isSimulating && simulationIndex < activeRoute.points.length) {
      const currentPos = activeRoute.points[simulationIndex];

      // Calculate direction heading to rotate the navigation arrow
      let angle = 0;
      if (simulationIndex > 0) {
        const prevPos = activeRoute.points[simulationIndex - 1];
        const dLat = currentPos[0] - prevPos[0];
        const dLng = currentPos[1] - prevPos[1];
        angle = Math.atan2(dLng, dLat) * (180 / Math.PI); // heading angle
      }

      const navigationArrowIcon = L.divIcon({
        className: "nav-arrow-div",
        html: `
          <div class="relative flex items-center justify-center w-10 h-10">
            <!-- Pulsing outer circle -->
            <div class="absolute inset-0 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
            <!-- Solid ring -->
            <div class="absolute inset-1 border-2 border-white bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
              <!-- Directional triangle rotating based on heading -->
              <svg style="transform: rotate(${angle}deg); transition: transform 0.2s ease;" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      if (!simMarkerRef.current) {
        simMarkerRef.current = L.marker(currentPos, { icon: navigationArrowIcon }).addTo(map);
      } else {
        simMarkerRef.current.setLatLng(currentPos);
        simMarkerRef.current.setIcon(navigationArrowIcon);
      }

      // Auto Recenter exactly like Google Maps
      map.setView(currentPos, 17, { animate: true, duration: 0.5 });
    } else {
      if (simMarkerRef.current) {
        simMarkerRef.current.remove();
        simMarkerRef.current = null;
      }
    }
  }, [isSimulating, simulationIndex, activeRoute, activeCampus.id]);

  // 6. Recenter to Selected Building
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedBuilding) return;

    map.setView([selectedBuilding.lat, selectedBuilding.lng], 17, {
      animate: true,
      duration: 1.2,
    });
  }, [selectedBuilding]);

  // Recenter to Campus
  const handleRecenterCampus = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setView([activeCampus.lat, activeCampus.lng], activeCampus.zoom, {
      animate: true,
      duration: 1.0,
    });
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-100">
      {/* Map Element with scale & rotation transform */}
      <div
        ref={mapContainerRef}
        className="w-full h-full z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `scale(${mapRotation === 0 ? 1 : 1.25}) rotate(${mapRotation}deg)`,
          transformOrigin: "center center",
        }}
      />

      {/* Floating Map Controls - SaaS inspired UI */}
      <div className="absolute right-4 top-4 flex flex-col gap-3.5 z-10 items-end">
        {/* Interactive compass dial instrument */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={() => {
              setMapRotation(0);
            }}
            title="Click to re-align map to True North"
            className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-200 hover:scale-105 active:scale-95 transition-all cursor-pointer group overflow-hidden"
          >
            {/* Rotating Dial Plate */}
            <div
              className="w-10 h-10 rounded-full relative flex items-center justify-center transition-transform duration-500 ease-out"
              style={{ transform: `rotate(${mapRotation}deg)` }}
            >
              {/* Outer Cardinal Markers */}
              <span className="absolute top-0 text-[7px] font-black text-rose-600">N</span>
              <span className="absolute right-0 text-[7px] font-bold text-slate-500">E</span>
              <span className="absolute bottom-0 text-[7px] font-bold text-slate-500">S</span>
              <span className="absolute left-0 text-[7px] font-bold text-slate-500">W</span>

              {/* Subtle ticks / inner design */}
              <div className="absolute inset-1.5 border border-slate-100 rounded-full border-dashed"></div>

              {/* Needle */}
              <div className="absolute w-1 h-8 flex flex-col items-center justify-between">
                {/* North Arrow (Red) */}
                <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] border-r-transparent border-b-[14px] border-b-rose-500"></div>
                {/* Center Pivot */}
                <div className="w-1 h-1 bg-slate-700 rounded-full z-10 shadow-xs"></div>
                {/* South Arrow (Slate) */}
                <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] border-r-transparent border-t-[14px] border-t-slate-400"></div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-full bg-blue-50/0 group-hover:bg-blue-50/10 transition-colors pointer-events-none"></div>
          </button>

          {/* Compass bearing indicator & rotation adjustments */}
          <div className="flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200">
            <div className="flex gap-0.5">
              <button
                onClick={() => setMapRotation(prev => prev - 15)}
                title="Rotate 15° Counter-Clockwise"
                className="w-5 h-5 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer text-[10px]"
              >
                ↺
              </button>
              <button
                onClick={() => setMapRotation(prev => prev + 15)}
                title="Rotate 15° Clockwise"
                className="w-5 h-5 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer text-[10px]"
              >
                ↻
              </button>
            </div>
            <div className="text-[7.5px] font-mono font-bold text-slate-500 bg-slate-50 px-1 py-0.5 rounded border border-slate-100 select-none whitespace-nowrap">
              {getCardinalDirection(mapRotation)}
            </div>
          </div>
        </div>

        {/* Unified Map Controls (Recenter + Zoom) */}
        <div className="flex flex-col bg-white/95 backdrop-blur-md rounded-2xl p-1 shadow-lg border border-slate-200">
          <button
            onClick={handleRecenterCampus}
            title="Recenter Campus"
            className="w-8 h-8 rounded-xl bg-transparent flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <span className="text-base font-bold">⌖</span>
          </button>
          
          <div className="w-6 h-[1px] bg-slate-100 mx-auto" />

          <button
            onClick={() => mapRef.current?.zoomIn()}
            title="Zoom In"
            className="w-8 h-8 rounded-xl bg-transparent flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer text-base font-bold"
          >
            ＋
          </button>

          <div className="w-6 h-[1px] bg-slate-100 mx-auto" />

          <button
            onClick={() => mapRef.current?.zoomOut()}
            title="Zoom Out"
            className="w-8 h-8 rounded-xl bg-transparent flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer text-base font-bold"
          >
            －
          </button>
        </div>
      </div>

      {/* Dynamic compass and scale overlays */}
      <div className="absolute left-4 bottom-4 glass rounded-lg px-2.5 py-1 text-[10px] text-slate-600 font-mono shadow border border-slate-200 z-10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>OSM DIGITAL TWIN ENGINE V2.4</span>
      </div>
    </div>
  );
}
