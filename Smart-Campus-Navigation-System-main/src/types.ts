/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Campus {
  id: string;
  name: string;
  aliases: string[];
  lat: number;
  lng: number;
  zoom: number;
  description: string;
  image: string;
  website: string;
  type: string;
}

export type BuildingCategory =
  | "academic"
  | "hostel"
  | "dining"
  | "sports"
  | "library"
  | "medical"
  | "admin"
  | "gate"
  | "parking"
  | "atm"
  | "lab"
  | "auditorium";

export interface Building {
  id: string;
  name: string;
  category: BuildingCategory;
  lat: number;
  lng: number;
  description: string;
  tags?: string[];
  accessibility: {
    wheelchairFriendly: boolean;
    rampAvailable: boolean;
    elevatorAvailable: boolean;
    accessibleEntrance: boolean;
  };
  openingHours?: string;
  contact?: string;
  image?: string;
  floorCount?: number;
  polygonPoints?: [number, number][]; // coordinates of footprint polygon
  nearbyPlaces?: string[]; // IDs of nearby buildings
}

export interface PathwayNode {
  id: string;
  lat: number;
  lng: number;
  isAccessible: boolean;
}

export interface PathwayEdge {
  from: string;
  to: string;
  distance: number; // in meters
  type: "road" | "walkway" | "shortcut";
}

export interface RouteStep {
  instruction: string;
  distance: number; // in meters
  landmark?: string;
}

export interface NavigationRoute {
  id: string;
  name: string; // e.g., "Best Route", "Alternative Route", "Longer Route"
  color: string; // hex or tailwind text class
  points: [number, number][]; // path coordinates
  distance: number; // in meters
  duration: number; // in minutes
  steps: RouteStep[];
  type: "best" | "alternative" | "longer";
}

export interface SavedPlace {
  id: string;
  name: string;
  category: string;
  campusId: string;
}

export interface SavedRoute {
  id: string;
  campusId: string;
  fromName: string;
  toName: string;
  fromId: string;
  toId: string;
  date: string;
}

export interface ActivityHistory {
  id: string;
  type: "search" | "route";
  title: string;
  subtitle: string;
  timestamp: string;
}
