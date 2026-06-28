/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Campus, Building, PathwayNode, PathwayEdge } from "../types";

export const CAMPUSES: Campus[] = [
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    aliases: ["IITB", "IIT Bombay", "Indian Institute of Technology Bombay", "Powai"],
    lat: 19.1334,
    lng: 72.9133,
    zoom: 16,
    description: "Established in 1958, IIT Bombay is a premier engineering and research institution located in Powai, Mumbai. Renowned globally for its academic excellence, research contributions, and vibrant campus life framed by Sanjay Gandhi National Park and Powai Lake.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitb.ac.in",
    type: "IIT"
  },
  {
    id: "iit-delhi",
    name: "IIT Delhi",
    aliases: ["IITD", "IIT Delhi", "Indian Institute of Technology Delhi", "Hauz Khas"],
    lat: 28.5450,
    lng: 77.1888,
    zoom: 16,
    description: "Located in Hauz Khas, New Delhi, IIT Delhi is a public research university and Institute of Eminence. Known for its iconic architecture, state-of-the-art labs, and strong industry partnerships, it stands at the forefront of scientific education in India.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "https://home.iitd.ac.in",
    type: "IIT"
  },
  {
    id: "iit-hyderabad",
    name: "IIT Hyderabad",
    aliases: ["IITH", "IIT Hyderabad", "Indian Institute of Technology Hyderabad", "Kandi"],
    lat: 17.5947,
    lng: 78.1230,
    zoom: 16,
    description: "A second-generation IIT located in Kandi, Sangareddy, IITH is celebrated for its cutting-edge Japanese-collaborative architecture, strong research focus in advanced communications, materials science, and AI, and highly vibrant student innovation hubs.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iith.ac.in",
    type: "IIT"
  },
  {
    id: "iit-madras",
    name: "IIT Madras",
    aliases: ["IITM", "IIT Madras", "Indian Institute of Technology Madras", "Chennai"],
    lat: 12.9915,
    lng: 80.2336,
    zoom: 16,
    description: "Consistently ranked as the #1 Engineering institution in India by NIRF. Situated in a lush, wooded campus in Chennai that was formerly part of the Guindy National Park, home to spotted deer, blackbucks, and rich natural biodiversity.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitm.ac.in",
    type: "IIT"
  },
  {
    id: "iit-kharagpur",
    name: "IIT Kharagpur",
    aliases: ["IITKGP", "IIT Kharagpur", "Indian Institute of Technology Kharagpur"],
    lat: 22.3149,
    lng: 87.3105,
    zoom: 16,
    description: "The oldest and largest of the IITs, established in 1951 in West Bengal. Known for its extensive 2,100-acre campus, rich academic history, and highly accomplished global alumni base.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitkgp.ac.in",
    type: "IIT"
  },
  {
    id: "iit-kanpur",
    name: "IIT Kanpur",
    aliases: ["IITK", "IIT Kanpur", "Indian Institute of Technology Kanpur"],
    lat: 26.5123,
    lng: 80.2329,
    zoom: 16,
    description: "Established in 1959, IIT Kanpur is renowned for its state-of-the-art research facilities, national wind tunnel, superb computer science legacy, and a beautiful green campus.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitk.ac.in",
    type: "IIT"
  },
  {
    id: "iit-guwahati",
    name: "IIT Guwahati",
    aliases: ["IITG", "IIT Guwahati", "Indian Institute of Technology Guwahati"],
    lat: 26.1859,
    lng: 91.6916,
    zoom: 16,
    description: "Nestled on the banks of the majestic Brahmaputra River, IIT Guwahati possesses one of the most stunningly scenic, lake-filled campuses in northeastern India.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitg.ac.in",
    type: "IIT"
  },
  {
    id: "iit-roorkee",
    name: "IIT Roorkee",
    aliases: ["IITR", "IIT Roorkee", "Indian Institute of Technology Roorkee"],
    lat: 29.8649,
    lng: 77.8964,
    zoom: 16,
    description: "Established in 1847 as the Thomason College of Civil Engineering, it is the oldest technical institution in Asia, transitioning into an IIT in 2001.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitr.ac.in",
    type: "IIT"
  },
  {
    id: "iit-ropar",
    name: "IIT Ropar",
    aliases: ["IITRPR", "IIT Ropar", "Indian Institute of Technology Ropar"],
    lat: 30.9678,
    lng: 76.5273,
    zoom: 16,
    description: "A second-generation IIT located in Rupnagar, Punjab. Renowned for its sustainable green design campus on the banks of the Sutlej River.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitrpr.ac.in",
    type: "IIT"
  },
  {
    id: "iit-bhubaneswar",
    name: "IIT Bhubaneswar",
    aliases: ["IITBBS", "IIT Bhubaneswar", "Indian Institute of Technology Bhubaneswar"],
    lat: 20.1484,
    lng: 85.6712,
    zoom: 16,
    description: "Located in the foothills of the Barunei hills, IIT Bhubaneswar is celebrated for its specialized high-performance labs and clean eco-campus.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitbbs.ac.in",
    type: "IIT"
  },
  {
    id: "iit-gandhinagar",
    name: "IIT Gandhinagar",
    aliases: ["IITGN", "IIT Gandhinagar", "Indian Institute of Technology Gandhinagar"],
    lat: 23.2114,
    lng: 72.6841,
    zoom: 16,
    description: "Located on the banks of the Sabarmati River, IIT Gandhinagar is highly recognized for its innovative interdisciplinary curriculum, 5-star green rating, and stellar global partnerships.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "https://iitgn.ac.in",
    type: "IIT"
  },
  {
    id: "iit-patna",
    name: "IIT Patna",
    aliases: ["IITP", "IIT Patna", "Indian Institute of Technology Patna"],
    lat: 25.5357,
    lng: 84.8512,
    zoom: 16,
    description: "Established in 2008 in Bihta, IIT Patna is a rapidly growing center for computer science and advanced communications engineering research.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitp.ac.in",
    type: "IIT"
  },
  {
    id: "iit-jodhpur",
    name: "IIT Jodhpur",
    aliases: ["IITJ", "IIT Jodhpur", "Indian Institute of Technology Jodhpur"],
    lat: 26.4710,
    lng: 73.1134,
    zoom: 16,
    description: "Located in Rajasthan, IIT Jodhpur specializes in AI, internet of things, cyber-physical systems, and high-tech multidisciplinary fields.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    website: "https://iitj.ac.in",
    type: "IIT"
  },
  {
    id: "iit-mandi",
    name: "IIT Mandi",
    aliases: ["IITMND", "IIT Mandi", "Indian Institute of Technology Mandi"],
    lat: 31.7754,
    lng: 76.9858,
    zoom: 16,
    description: "Situated in the scenic Uhl River valley in Kamand, Himachal Pradesh. Known for its environment-friendly mountain campus and specialized computing curriculum.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitmandi.ac.in",
    type: "IIT"
  },
  {
    id: "iit-indore",
    name: "IIT Indore",
    aliases: ["IITI", "IIT Indore", "Indian Institute of Technology Indore"],
    lat: 22.5204,
    lng: 75.9207,
    zoom: 16,
    description: "Located in Simrol, Madhya Pradesh, IIT Indore is recognized for its extensive research outputs, world-class astrophysics systems, and top engineering ranks.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iiti.ac.in",
    type: "IIT"
  },
  {
    id: "iit-bhu-varanasi",
    name: "IIT BHU Varanasi",
    aliases: ["IITBHU", "IIT BHU", "Indian Institute of Technology BHU Varanasi"],
    lat: 25.2677,
    lng: 82.9913,
    zoom: 16,
    description: "Founded as the Banaras Engineering College in 1919, it transitioned into an IIT in 2012. It resides inside the beautiful, historic Banaras Hindu University campus.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitbhu.ac.in",
    type: "IIT"
  },
  {
    id: "iit-palakkad",
    name: "IIT Palakkad",
    aliases: ["IITPKD", "IIT Palakkad", "Indian Institute of Technology Palakkad"],
    lat: 10.8143,
    lng: 76.8115,
    zoom: 16,
    description: "Established in 2015 at the foothills of the Western Ghats in Kerala, IIT Palakkad has advanced scientific infrastructure and high-ranking research centers.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "https://iitpkd.ac.in",
    type: "IIT"
  },
  {
    id: "iit-tirupati",
    name: "IIT Tirupati",
    aliases: ["IITTPT", "IIT Tirupati", "Indian Institute of Technology Tirupati"],
    lat: 13.6231,
    lng: 79.5442,
    zoom: 16,
    description: "Located near the temple city of Tirupati, this campus boasts excellent state-of-the-art building design and dedicated learning networks.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "https://iittp.ac.in",
    type: "IIT"
  },
  {
    id: "iit-dhanbad",
    name: "IIT Dhanbad (ISM)",
    aliases: ["IITISM", "IIT Dhanbad", "Indian Institute of Technology Dhanbad", "ISM Dhanbad"],
    lat: 23.8143,
    lng: 86.4412,
    zoom: 16,
    description: "Formerly the Indian School of Mines (established in 1926), it is famous for its earth sciences, petroleum engineering, and mineral resource research.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitism.ac.in",
    type: "IIT"
  },
  {
    id: "iit-bhilai",
    name: "IIT Bhilai",
    aliases: ["IITBHL", "IIT Bhilai", "Indian Institute of Technology Bhilai"],
    lat: 21.1340,
    lng: 81.4284,
    zoom: 16,
    description: "An innovative third-generation IIT located in Chhattisgarh, focused on electronic materials, structural design, and smart grids.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitbhilai.ac.in",
    type: "IIT"
  },
  {
    id: "iit-goa",
    name: "IIT Goa",
    aliases: ["IITGOA", "IIT Goa", "Indian Institute of Technology Goa"],
    lat: 15.4243,
    lng: 73.9782,
    zoom: 16,
    description: "Established in 2016, IIT Goa offers premium academic programs with state-of-the-art computational systems, set on a beautiful coastal plateau.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitgoa.ac.in",
    type: "IIT"
  },
  {
    id: "iit-jammu",
    name: "IIT Jammu",
    aliases: ["IITJMU", "IIT Jammu", "Indian Institute of Technology Jammu"],
    lat: 32.8021,
    lng: 74.8943,
    zoom: 16,
    description: "Situated in Jammu, near the breathtaking Himalayas, this institute offers world-class research facilities in structural and mountain hazard engineering.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitjammu.ac.in",
    type: "IIT"
  },
  {
    id: "iit-dharwad",
    name: "IIT Dharwad",
    aliases: ["IITDWD", "IIT Dharwad", "Indian Institute of Technology Dharwad"],
    lat: 15.4892,
    lng: 74.9248,
    zoom: 16,
    description: "Located in Hubballi-Dharwad, Karnataka. Renowned for its highly active research programs and excellent coding student bodies.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "https://www.iitdh.ac.in",
    type: "IIT"
  },
  
  // NITs
  {
    id: "nit-trichy",
    name: "NIT Trichy",
    aliases: ["NITT", "NIT Trichy", "National Institute of Technology Tiruchirappalli"],
    lat: 10.7589,
    lng: 78.8132,
    zoom: 15,
    description: "The top-ranked National Institute of Technology in India, spanning over 800 acres on the Tanjore highway in Tiruchirappalli. Known for its robust technical infrastructure, strong placements, and high academic rigor.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "https://www.nitt.edu",
    type: "NIT"
  },
  {
    id: "nit-silchar",
    name: "NIT Silchar",
    aliases: ["NITS", "NIT Silchar", "National Institute of Technology Silchar", "Assam"],
    lat: 24.7575,
    lng: 92.7885,
    zoom: 16,
    description: "Located amidst the serene hills and tea gardens of Assam, NIT Silchar boasts one of the most beautiful, green campuses in the country, featuring a series of lakes and the largest digital library in Asia.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nits.ac.in",
    type: "NIT"
  },
  {
    id: "nit-warangal",
    name: "NIT Warangal",
    aliases: ["NITW", "NIT Warangal", "National Institute of Technology Warangal"],
    lat: 17.9765,
    lng: 79.5310,
    zoom: 15,
    description: "The first in the chain of 31 NITs, established in 1959 by PM Jawaharlal Nehru. Located in the historic city of Warangal, it is highly respected for its outstanding engineering research and rich athletic history.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    website: "https://www.nitw.ac.in",
    type: "NIT"
  },
  {
    id: "nit-surathkal",
    name: "NIT Surathkal",
    aliases: ["NITK", "NITK Surathkal", "National Institute of Technology Karnataka"],
    lat: 13.0108,
    lng: 74.7943,
    zoom: 15,
    description: "Situated beautifully on the Arabian Sea coast of Karnataka. Possesses a private beach and is widely renowned for high-impact technical education and global research projects.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    website: "https://www.nitk.ac.in",
    type: "NIT"
  },
  {
    id: "nit-allahabad",
    name: "MNNIT Allahabad",
    aliases: ["MNNIT", "MNNIT Allahabad", "Motilal Nehru National Institute of Technology"],
    lat: 25.4913,
    lng: 81.8665,
    zoom: 15,
    description: "A prestigious NIT located in Prayagraj, Uttar Pradesh. Famed for its highly selective CS/IT cutoff ranks, massive placement records, and historic innovation centers.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.mnnit.ac.in",
    type: "NIT"
  },
  {
    id: "nit-nagpur",
    name: "VNIT Nagpur",
    aliases: ["VNIT", "VNIT Nagpur", "Visvesvaraya National Institute of Technology"],
    lat: 21.1231,
    lng: 79.0514,
    zoom: 15,
    description: "Located in Nagpur, Maharashtra, VNIT is named after engineer M. Visvesvaraya. Features extensive research grids, sports facilities, and high global standing.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://www.vnit.ac.in",
    type: "NIT"
  },
  {
    id: "nit-calicut",
    name: "NIT Calicut",
    aliases: ["NITC", "NIT Calicut", "National Institute of Technology Calicut"],
    lat: 11.3216,
    lng: 75.9336,
    zoom: 15,
    description: "Set in a scenic, lush green campus in Kerala, NIT Calicut offers rich technical courses, excellent research labs, and highly selective placements.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitc.ac.in",
    type: "NIT"
  },
  {
    id: "nit-rourkela",
    name: "NIT Rourkela",
    aliases: ["NITRKL", "NIT Rourkela", "National Institute of Technology Rourkela"],
    lat: 22.2531,
    lng: 84.9011,
    zoom: 15,
    description: "Spanning across a huge 650-acre green campus in Odisha. Features extensive laboratories, high research publishing records, and an exceptional student life.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitrkl.ac.in",
    type: "NIT"
  },
  {
    id: "nit-jaipur",
    name: "MNIT Jaipur",
    aliases: ["MNIT", "MNIT Jaipur", "Malaviya National Institute of Technology"],
    lat: 26.8631,
    lng: 75.8115,
    zoom: 15,
    description: "Located in the heritage pink city of Jaipur, Rajasthan. Celebrated for its outstanding architecture, creative design, and technical engineering center.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.mnit.ac.in",
    type: "NIT"
  },
  {
    id: "nit-bhopal",
    name: "MANIT Bhopal",
    aliases: ["MANIT", "MANIT Bhopal", "Maulana Azad National Institute of Technology"],
    lat: 23.2178,
    lng: 77.4082,
    zoom: 15,
    description: "Located in Bhopal, Madhya Pradesh, it hosts magnificent academic layouts, massive sports grounds, and top-tier computer facilities.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.manit.ac.in",
    type: "NIT"
  },
  {
    id: "nit-surat",
    name: "SVNIT Surat",
    aliases: ["SVNIT", "SVNIT Surat", "Sardar Vallabhbhai National Institute of Technology"],
    lat: 21.1643,
    lng: 72.7831,
    zoom: 15,
    description: "Situated in Surat, Gujarat. Recognized for its excellent chemistry, environmental, and structural engineering research centers.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://www.svnit.ac.in",
    type: "NIT"
  },
  {
    id: "nit-kurukshetra",
    name: "NIT Kurukshetra",
    aliases: ["NITKKR", "NIT Kurukshetra", "National Institute of Technology Kurukshetra"],
    lat: 29.9531,
    lng: 76.8142,
    zoom: 15,
    description: "Located in the historic land of Kurukshetra, Haryana, this institute is a highly respected node for computing and material physics labs.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitkkr.ac.in",
    type: "NIT"
  },
  {
    id: "nit-jalandhar",
    name: "NIT Jalandhar",
    aliases: ["NITJ", "NIT Jalandhar", "Dr. B. R. Ambedkar National Institute of Technology"],
    lat: 31.3951,
    lng: 75.5358,
    zoom: 15,
    description: "Dr. B. R. Ambedkar NIT Jalandhar is highly regarded for its industrial science partnerships, advanced polymers, and computing sections.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitj.ac.in",
    type: "NIT"
  },
  {
    id: "nit-durgapur",
    name: "NIT Durgapur",
    aliases: ["NITDGP", "NIT Durgapur", "National Institute of Technology Durgapur"],
    lat: 23.5413,
    lng: 87.2913,
    zoom: 15,
    description: "One of the older regional engineering colleges in West Bengal, NIT Durgapur boasts great high-voltage electrical grids and high research outputs.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitdgp.ac.in",
    type: "NIT"
  },
  {
    id: "nit-jamshedpur",
    name: "NIT Jamshedpur",
    aliases: ["NITJSR", "NIT Jamshedpur", "National Institute of Technology Jamshedpur"],
    lat: 22.7531,
    lng: 86.1412,
    zoom: 15,
    description: "Set in the steel hub of Jamshedpur, Jharkhand. Houses excellent metallurgy, material testing, and advanced manufacturing systems.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitjsr.ac.in",
    type: "NIT"
  },
  {
    id: "nit-patna",
    name: "NIT Patna",
    aliases: ["NITP", "NIT Patna", "National Institute of Technology Patna"],
    lat: 25.6208,
    lng: 85.1713,
    zoom: 15,
    description: "Located on the banks of the sacred Ganges River, this institute possesses historical heritage and a fast-developing technology infrastructure.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitp.ac.in",
    type: "NIT"
  },
  {
    id: "nit-raipur",
    name: "NIT Raipur",
    aliases: ["NITRPR", "NIT Raipur", "National Institute of Technology Raipur"],
    lat: 21.2497,
    lng: 81.6053,
    zoom: 15,
    description: "A prominent tech institute in Chhattisgarh. Widely respected for its mining, biomedical engineering, and coding communities.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitrr.ac.in",
    type: "NIT"
  },
  {
    id: "nit-srinagar",
    name: "NIT Srinagar",
    aliases: ["NITSGR", "NIT Srinagar", "National Institute of Technology Srinagar"],
    lat: 34.1251,
    lng: 74.8413,
    zoom: 15,
    description: "Nestled beautifully next to the Hazratbal Shrine and the fabled Dal Lake in Srinagar, Kashmir, it has a highly scenic and historic campus.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitsri.ac.in",
    type: "NIT"
  },
  {
    id: "nit-hamirpur",
    name: "NIT Hamirpur",
    aliases: ["NITH", "NIT Hamirpur", "National Institute of Technology Hamirpur"],
    lat: 31.7103,
    lng: 76.5274,
    zoom: 15,
    description: "Resides amidst pine trees in Himachal Pradesh, offering stunning views of snow-clad Dhauladhar mountain ranges.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nith.ac.in",
    type: "NIT"
  },
  {
    id: "nit-agartala",
    name: "NIT Agartala",
    aliases: ["NITA", "NIT Agartala", "National Institute of Technology Agartala"],
    lat: 23.8412,
    lng: 91.4213,
    zoom: 15,
    description: "A modern state-of-the-art campus in Tripura. Possesses great computing facilities and highly progressive curriculum nodes.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nita.ac.in",
    type: "NIT"
  },
  {
    id: "nit-meghalaya",
    name: "NIT Meghalaya",
    aliases: ["NITM", "NIT Meghalaya", "National Institute of Technology Meghalaya"],
    lat: 25.5788,
    lng: 91.8931,
    zoom: 15,
    description: "Located in Shillong, the 'Scotland of the East'. Known for its amazing pleasant climate and solid theoretical sciences departments.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://nitmeghalaya.in",
    type: "NIT"
  },
  {
    id: "nit-manipur",
    name: "NIT Manipur",
    aliases: ["NITMN", "NIT Manipur", "National Institute of Technology Manipur"],
    lat: 24.8165,
    lng: 93.9412,
    zoom: 15,
    description: "Located in Langol, Imphal. High focus on advanced computational systems, green power grids, and local innovation clusters.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitmanipur.ac.in",
    type: "NIT"
  },
  {
    id: "nit-mizoram",
    name: "NIT Mizoram",
    aliases: ["NITMZ", "NIT Mizoram", "National Institute of Technology Mizoram"],
    lat: 23.7271,
    lng: 92.7174,
    zoom: 15,
    description: "Set in Aizawl, Mizoram, offering a picturesque study environment with high quality computing labs.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitmz.ac.in",
    type: "NIT"
  },
  {
    id: "nit-nagaland",
    name: "NIT Nagaland",
    aliases: ["NITNGL", "NIT Nagaland", "National Institute of Technology Nagaland"],
    lat: 25.7513,
    lng: 93.7412,
    zoom: 15,
    description: "Located in Chumukedima, Nagaland. Fosters progressive research in communication architectures and local digital ecosystems.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitnagaland.ac.in",
    type: "NIT"
  },
  {
    id: "nit-sikkim",
    name: "NIT Sikkim",
    aliases: ["NITSkm", "NIT Sikkim", "National Institute of Technology Sikkim"],
    lat: 27.2014,
    lng: 88.3512,
    zoom: 15,
    description: "Situated amidst the majestic peaks of Ravangla, Sikkim. Possesses excellent mountain-hazard civil grids and coding teams.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitsikkim.ac.in",
    type: "NIT"
  },
  {
    id: "nit-arunachal",
    name: "NIT Arunachal Pradesh",
    aliases: ["NITAP", "NIT Arunachal", "National Institute of Technology Arunachal Pradesh"],
    lat: 27.1004,
    lng: 93.6165,
    zoom: 15,
    description: "Set in the pristine, green surroundings of Yupia, Arunachal Pradesh, specializing in solar energy and communication tech.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitap.ac.in",
    type: "NIT"
  },
  {
    id: "nit-goa",
    name: "NIT Goa",
    aliases: ["NITGOA", "NIT Goa", "National Institute of Technology Goa"],
    lat: 15.3912,
    lng: 73.9743,
    zoom: 15,
    description: "Established in 2010 in Farmagudi, Ponda. Known for highly integrated systems labs and premium coastal student research culture.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitgoa.ac.in",
    type: "NIT"
  },
  {
    id: "nit-delhi",
    name: "NIT Delhi",
    aliases: ["NITD", "NIT Delhi", "National Institute of Technology Delhi"],
    lat: 28.8412,
    lng: 77.1051,
    zoom: 15,
    description: "Located in the national capital territory of Delhi. Focuses heavily on power grids, microelectronics, and advanced algorithms.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitdelhi.ac.in",
    type: "NIT"
  },
  {
    id: "nit-uttarakhand",
    name: "NIT Uttarakhand",
    aliases: ["NITUK", "NIT Uttarakhand", "National Institute of Technology Uttarakhand"],
    lat: 30.1513,
    lng: 78.7892,
    zoom: 15,
    description: "Set in Srinagar, Pauri Garhwal. Offers highly active computing hubs with picturesque mountain trails nearby.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nituk.ac.in",
    type: "NIT"
  },
  {
    id: "nit-puducherry",
    name: "NIT Puducherry",
    aliases: ["NITPY", "NIT Puducherry", "National Institute of Technology Puducherry"],
    lat: 10.9248,
    lng: 79.8512,
    zoom: 15,
    description: "Located in Karaikal, a coastal territory of Puducherry, known for its focus on marine technology and high computational systems research.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitpy.ac.in",
    type: "NIT"
  },
  {
    id: "nit-andhra-pradesh",
    name: "NIT Andhra Pradesh",
    aliases: ["NITANP", "NIT Andhra", "National Institute of Technology Andhra Pradesh"],
    lat: 16.8143,
    lng: 81.5289,
    zoom: 15,
    description: "The youngest NIT, established in Tadepalligudem. Houses a rapidly growing computing infrastructure and beautiful, spacious lecture theatres.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    website: "http://www.nitandhra.ac.in",
    type: "NIT"
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani (Pilani Campus)",
    aliases: ["BITS", "BITSP", "BITS Pilani", "Birla Institute of Technology and Science"],
    lat: 28.3639,
    lng: 75.5873,
    zoom: 16,
    description: "A world-renowned private university established in association with MIT, located in Pilani, Rajasthan. Known for its highly selective admissions, zero-attendance policy, and powerful global alumni startup network.",
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=600",
    website: "https://www.bits-pilani.ac.in/pilani",
    type: "BITS"
  }
];

// Helper to generate polygon footprints relative to center coordinates
function makeFootprint(centerLat: number, centerLng: number, width: number = 0.0003, height: number = 0.0003): [number, number][] {
  const dLat = height / 2;
  const dLng = width / 2;
  return [
    [centerLat - dLat, centerLng - dLng],
    [centerLat + dLat, centerLng - dLng],
    [centerLat + dLat, centerLng + dLng],
    [centerLat - dLat, centerLng + dLng]
  ];
}

// Complete Digital Twin buildings database for each campus
export const CAMPUS_BUILDINGS: Record<string, Building[]> = {
  "iit-bombay": [
    {
      id: "iitb-admin",
      name: "Main Administrative Building",
      category: "admin",
      lat: 19.1334,
      lng: 72.9133,
      description: "The heart of administrative operations. Houses the Director's Office, Dean offices, Academic Section, Accounts, and Main Boardrooms. Beautiful classic stone facade with iconic pillars.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM (Mon-Fri)",
      contact: "+91-22-25767001",
      floorCount: 3,
      polygonPoints: makeFootprint(19.1334, 72.9133, 0.0004, 0.0004),
      nearbyPlaces: ["iitb-library", "iitb-atm-sbi"]
    },
    {
      id: "iitb-library",
      name: "Central Library",
      category: "library",
      lat: 19.1338,
      lng: 72.9142,
      description: "A massive learning resources facility containing over 250,000 books, journals, and a high-speed digital research zone. Offers silent reading rooms, discussion pods, and access to world journals.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:00 AM - 11:00 PM (Daily)",
      contact: "+91-22-25768921",
      floorCount: 4,
      polygonPoints: makeFootprint(19.1338, 72.9142, 0.0003, 0.0004),
      nearbyPlaces: ["iitb-admin", "iitb-cse"]
    },
    {
      id: "iitb-cse",
      name: "Kanwal Rekhi Building (CSE Dept)",
      category: "academic",
      lat: 19.1342,
      lng: 72.9150,
      description: "State-of-the-art Computer Science & Engineering department. Features top research labs in AI, Machine Learning, Systems, Security, and Computer Networks. Named after alumnus Kanwal Rekhi.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "24x7 for Research Scholars",
      contact: "+91-22-25767901",
      floorCount: 4,
      polygonPoints: makeFootprint(19.1342, 72.9150, 0.0003, 0.0003),
      nearbyPlaces: ["iitb-library", "iitb-ee"]
    },
    {
      id: "iitb-ee",
      name: "Department of Electrical Engineering",
      category: "academic",
      lat: 19.1348,
      lng: 72.9156,
      description: "One of the largest departments on campus. Includes Microelectronics, VLSI, Communication Systems, Power Electronics, and Control systems laboratories.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:30 AM - 06:30 PM",
      contact: "+91-22-25767401",
      floorCount: 5,
      polygonPoints: makeFootprint(19.1348, 72.9156, 0.0004, 0.0003),
      nearbyPlaces: ["iitb-cse", "iitb-hostel12"]
    },
    {
      id: "iitb-vmcc",
      name: "Victor Menezes Convention Centre (VMCC)",
      category: "auditorium",
      lat: 19.1325,
      lng: 72.9125,
      description: "Premium convention centre with multiple high-tech auditoriums, seminar halls, and exhibition galleries. Hosts national and international academic conferences, Techfest, and Mood Indigo events.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:00 AM - 09:00 PM",
      floorCount: 3,
      polygonPoints: makeFootprint(19.1325, 72.9125, 0.0004, 0.0004),
      nearbyPlaces: ["iitb-admin", "iitb-canteen"]
    },
    {
      id: "iitb-hostel5",
      name: "Hostel 5 (The Royals)",
      category: "hostel",
      lat: 19.1310,
      lng: 72.9110,
      description: "An iconic residential hostel for boys. Renowned for its rich culture, excellent mess, and competitive athletic spirit in inter-hostel GCs.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "24x7 for Residents",
      contact: "+91-22-25765005",
      floorCount: 4,
      polygonPoints: makeFootprint(19.1310, 72.9110, 0.0003, 0.0003),
      nearbyPlaces: ["iitb-canteen", "iitb-gymkhana"]
    },
    {
      id: "iitb-hostel12",
      name: "Hostel 12 & 13 Complex",
      category: "hostel",
      lat: 19.1360,
      lng: 72.9170,
      description: "A modern high-rise multi-wing hostel complex with excellent rooms, internet access, study areas, gym facilities, and multi-cuisine mess options.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "24x7 for Residents",
      floorCount: 10,
      polygonPoints: makeFootprint(19.1360, 72.9170, 0.0005, 0.0004),
      nearbyPlaces: ["iitb-ee"]
    },
    {
      id: "iitb-gymkhana",
      name: "Gymkhana Ground & Sports Complex",
      category: "sports",
      lat: 19.1305,
      lng: 72.9120,
      description: "Lush multi-sports complex. Includes an Olympic-sized swimming pool, football/cricket grounds, tennis courts, and indoor squash & badminton halls.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "06:00 AM - 09:00 AM, 04:00 PM - 09:00 PM",
      polygonPoints: makeFootprint(19.1305, 72.9120, 0.0005, 0.0005),
      nearbyPlaces: ["iitb-hostel5", "iitb-vmcc"]
    },
    {
      id: "iitb-canteen",
      name: "Brewberrys & Staff Canteen",
      category: "dining",
      lat: 19.1318,
      lng: 72.9122,
      description: "A popular hangout spot for students and faculty, serving hot snacks, tea, premium coffees, South Indian meals, and continental lunch options.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "08:00 AM - 10:30 PM",
      polygonPoints: makeFootprint(19.1318, 72.9122, 0.0002, 0.0002),
      nearbyPlaces: ["iitb-vmcc", "iitb-hostel5"]
    },
    {
      id: "iitb-hospital",
      name: "IITB Medical Center & Hospital",
      category: "medical",
      lat: 19.1320,
      lng: 72.9145,
      description: "A 24x7 medical clinic with regular visiting doctors, emergency wards, ICU support, pharmacy, pathology lab, and ambulance service.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "24x7 Emergency",
      contact: "+91-22-25767010",
      polygonPoints: makeFootprint(19.1320, 72.9145, 0.0003, 0.0003),
      nearbyPlaces: ["iitb-admin", "iitb-library"]
    },
    {
      id: "iitb-maingate",
      name: "Main Gate (Y-Point Gate)",
      category: "gate",
      lat: 19.1292,
      lng: 72.9115,
      description: "The primary entrance/exit gate of IIT Bombay at Powai. Security verification required for outside vehicles. Direct connectivity to Powai Lake road.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "24x7",
      polygonPoints: makeFootprint(19.1292, 72.9115, 0.0002, 0.0002),
      nearbyPlaces: ["iitb-gymkhana"]
    },
    {
      id: "iitb-atm-sbi",
      name: "SBI Bank & ATM Complex",
      category: "atm",
      lat: 19.1330,
      lng: 72.9137,
      description: "Provides full-service banking facilities, multi-machine ATMs, passbook printing, and student account desks.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "09:00 AM - 04:00 PM (Bank), 24x7 (ATM)",
      polygonPoints: makeFootprint(19.1330, 72.9137, 0.0002, 0.0002),
      nearbyPlaces: ["iitb-admin", "iitb-hospital"]
    }
  ],
  "iit-delhi": [
    {
      id: "iitd-admin",
      name: "IITD Main Academic & Admin Block",
      category: "admin",
      lat: 28.5450,
      lng: 77.1888,
      description: "Main multi-floor administrative building with unique concrete architecture, housing director offices, classrooms, administrative registrar desks, and core departments.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(28.5450, 77.1888, 0.0004, 0.0004),
      nearbyPlaces: ["iitd-library", "iitd-dogra"]
    },
    {
      id: "iitd-library",
      name: "IITD Central Library",
      category: "library",
      lat: 28.5453,
      lng: 77.1896,
      description: "State of the art learning facility with over 3 lakh volumes, online access, study spaces, computer sections, and deep research archives.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:00 AM - 12:00 AM",
      polygonPoints: makeFootprint(28.5453, 77.1896, 0.0003, 0.0003),
      nearbyPlaces: ["iitd-admin", "iitd-bharti"]
    },
    {
      id: "iitd-dogra",
      name: "Dogra Hall",
      category: "auditorium",
      lat: 28.5446,
      lng: 77.1882,
      description: "Iconic hyperbolic paraboloid shell structure, serving as the main auditorium for Convocation, tech events, and annual cultural fest Rendezvous.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.5446, 77.1882, 0.0003, 0.0003),
      nearbyPlaces: ["iitd-admin"]
    },
    {
      id: "iitd-bharti",
      name: "Bharti School of IT",
      category: "academic",
      lat: 28.5458,
      lng: 77.1905,
      description: "Dedicated block for advanced computing, telecommunications, VLSI design, and collaborative research with industrial partners.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.5458, 77.1905, 0.0003, 0.0003),
      nearbyPlaces: ["iitd-library"]
    },
    {
      id: "iitd-shivalik",
      name: "Shivalik Hostel",
      category: "hostel",
      lat: 28.5430,
      lng: 77.1870,
      description: "One of the older and highly prestigious boys' hostels, known for sports accomplishments and outstanding indoor recreational facilities.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.5430, 77.1870, 0.0003, 0.0003),
      nearbyPlaces: ["iitd-canteen"]
    },
    {
      id: "iitd-hospital",
      name: "IITD Hospital & Clinic",
      category: "medical",
      lat: 28.5460,
      lng: 77.1865,
      description: "Comprehensive medical center with full-time consulting doctors, pathological lab, pharmacy, and rapid emergency assistance.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "24x7 Emergency",
      polygonPoints: makeFootprint(28.5460, 77.1865, 0.0003, 0.0003)
    },
    {
      id: "iitd-maingate",
      name: "Main Gate (SDA Gate)",
      category: "gate",
      lat: 28.5475,
      lng: 77.1895,
      description: "The primary point of access directly opposite the popular SDA Market. Fully secured under 24x7 security monitoring.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.5475, 77.1895, 0.0002, 0.0002)
    },
    {
      id: "iitd-canteen",
      name: "Central Staff Canteen & Cafe",
      category: "dining",
      lat: 28.5438,
      lng: 77.1875,
      description: "Comfortable eatery offering affordable breakfast, meals, hot tea, samosas, and Chinese dishes for campus members.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "08:30 AM - 09:30 PM",
      polygonPoints: makeFootprint(28.5438, 77.1875, 0.0002, 0.0002),
      nearbyPlaces: ["iitd-shivalik"]
    }
  ],
  "iit-hyderabad": [
    {
      id: "iith-admin",
      name: "Main Administrative & Academic Block A",
      category: "admin",
      lat: 17.5947,
      lng: 78.1230,
      description: "Architectural masterpiece with louvers, designed in collaboration with Japanese architects. Houses director offices, administrative services, and main classrooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(17.5947, 78.1230, 0.0004, 0.0004),
      nearbyPlaces: ["iith-library", "iith-cse"]
    },
    {
      id: "iith-library",
      name: "IITH Central Library",
      category: "library",
      lat: 17.5950,
      lng: 78.1240,
      description: "Highly digitized visual library containing lakhs of textbooks, digital e-resource access points, collaborative study circles, and design galleries.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:00 AM - 11:00 PM",
      polygonPoints: makeFootprint(17.5950, 78.1240, 0.0003, 0.0003),
      nearbyPlaces: ["iith-admin", "iith-cse"]
    },
    {
      id: "iith-cse",
      name: "Department of CSE Block",
      category: "academic",
      lat: 17.5955,
      lng: 78.1248,
      description: "Houses computing labs, specialized hardware AI development zones, data science research groups, and smart grids classrooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.5955, 78.1248, 0.0003, 0.0003),
      nearbyPlaces: ["iith-library"]
    },
    {
      id: "iith-hostel",
      name: "Pod Hostel Complex (Block A)",
      category: "hostel",
      lat: 17.5925,
      lng: 78.1215,
      description: "State-of-the-art radiant cooling single-occupancy hostels. Incorporates thermal-insulated modular technology for year-round eco-friendly cooling.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.5925, 78.1215, 0.0004, 0.0003),
      nearbyPlaces: ["iith-canteen"]
    },
    {
      id: "iith-canteen",
      name: "Main Dining Hall & Canteen",
      category: "dining",
      lat: 17.5920,
      lng: 78.1220,
      description: "Massive modern dining facility serving nutritious multi-state meals, juices, fast food, and regional specials.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "07:30 AM - 10:30 PM",
      polygonPoints: makeFootprint(17.5920, 78.1220, 0.0003, 0.0003),
      nearbyPlaces: ["iith-hostel"]
    },
    {
      id: "iith-medical",
      name: "Primary Health & Medical Centre",
      category: "medical",
      lat: 17.5935,
      lng: 78.1225,
      description: "Provides diagnostic assistance, specialized medical counseling, regular checks, basic wards, and 24x7 ambulance access.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.5935, 78.1225, 0.0002, 0.0002)
    },
    {
      id: "iith-maingate",
      name: "Main Gate (Kandi Highway entrance)",
      category: "gate",
      lat: 17.5905,
      lng: 78.1210,
      description: "Main entryway to the expansive IIT Hyderabad campus along the NH-65 Mumbai highway. Fully gated and guarded.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.5905, 78.1210, 0.0002, 0.0002)
    }
  ],
  "iit-madras": [
    {
      id: "iitm-admin",
      name: "Administrative Building",
      category: "admin",
      lat: 12.9915,
      lng: 80.2336,
      description: "Central administrative headquarters of IIT Madras, facing the iconic Gajendra Circle. Houses key deans and central offices.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(12.9915, 80.2336, 0.0004, 0.0004),
      nearbyPlaces: ["iitm-library"]
    },
    {
      id: "iitm-library",
      name: "Central Library",
      category: "library",
      lat: 12.9920,
      lng: 80.2345,
      description: "Beautiful modern multi-level library with an outstanding collection of books, computing nodes, online journal portals, and academic resources.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:00 AM - 11:30 PM",
      polygonPoints: makeFootprint(12.9920, 80.2345, 0.0003, 0.0003),
      nearbyPlaces: ["iitm-admin", "iitm-cse"]
    },
    {
      id: "iitm-cse",
      name: "CSE & Humanities Block",
      category: "academic",
      lat: 12.9926,
      lng: 80.2355,
      description: "Academic facility for Computer Science & Engineering research, featuring multi-gigabit connectivity, security labs, and lecture classrooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(12.9926, 80.2355, 0.0003, 0.0003),
      nearbyPlaces: ["iitm-library"]
    },
    {
      id: "iitm-hostel",
      name: "Alakananda Hostel Complex",
      category: "hostel",
      lat: 12.9890,
      lng: 80.2315,
      description: "Spacious residential hostel. Surrounded by forest areas where deer can regularly be spotted roaming peacefully near student blocks.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(12.9890, 80.2315, 0.0004, 0.0003),
      nearbyPlaces: ["iitm-dining"]
    },
    {
      id: "iitm-dining",
      name: "Quark Food Court & Canteen",
      category: "dining",
      lat: 12.9885,
      lng: 80.2320,
      description: "A multi-vendor dining square offering various cuisines, snacks, fresh fruit juices, and meals till late at night.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "07:30 AM - 11:59 PM",
      polygonPoints: makeFootprint(12.9885, 80.2320, 0.0003, 0.0002),
      nearbyPlaces: ["iitm-hostel"]
    },
    {
      id: "iitm-hospital",
      name: "IITM Hospital",
      category: "medical",
      lat: 12.9902,
      lng: 80.2328,
      description: "Fully staffed medical unit catering to student and staff health requirements. Includes basic wards and rapid response vehicles.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(12.9902, 80.2328, 0.0002, 0.0002)
    },
    {
      id: "iitm-maingate",
      name: "Main Gate (Inidranagar/Guindy entrance)",
      category: "gate",
      lat: 12.9950,
      lng: 80.2375,
      description: "Primary secured entrance to IIT Madras, with security checks and shuttle bus services inside the campus.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(12.9950, 80.2375, 0.0002, 0.0002)
    }
  ],
  "nit-trichy": [
    {
      id: "nitt-admin",
      name: "NITT Admin Block",
      category: "admin",
      lat: 10.7589,
      lng: 78.8132,
      description: "Central administrative building of NIT Trichy, directing registrar portals, admissions, finance departments, and executive board rooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(10.7589, 78.8132, 0.0004, 0.0004),
      nearbyPlaces: ["nitt-library", "nitt-octagon"]
    },
    {
      id: "nitt-library",
      name: "Central Library",
      category: "library",
      lat: 10.7595,
      lng: 78.8140,
      description: "Three-tier fully computerized library providing research paper resources, core journals, and isolated study cells for over 6,000 students.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:30 AM - 10:00 PM",
      polygonPoints: makeFootprint(10.7595, 78.8140, 0.0003, 0.0003),
      nearbyPlaces: ["nitt-admin", "nitt-octagon"]
    },
    {
      id: "nitt-octagon",
      name: "Octagon Computer Center",
      category: "academic",
      lat: 10.7602,
      lng: 78.8145,
      description: "Iconic eight-sided computer center of NIT Trichy, featuring high-speed supercomputing servers, digital work areas, and round-the-clock labs.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "24x7 for students",
      polygonPoints: makeFootprint(10.7602, 78.8145, 0.0004, 0.0004),
      nearbyPlaces: ["nitt-library", "nitt-admin"]
    },
    {
      id: "nitt-hostel",
      name: "Coral & Garnet Hostel Complex",
      category: "hostel",
      lat: 10.7565,
      lng: 78.8115,
      description: "Vast residential area hosting second and third year students, equipped with study halls, badmiton courts, and high speed WiFi.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(10.7565, 78.8115, 0.0004, 0.0004),
      nearbyPlaces: ["nitt-canteen"]
    },
    {
      id: "nitt-canteen",
      name: "Mega Mess & Food Court",
      category: "dining",
      lat: 10.7560,
      lng: 78.8120,
      description: "Massive dining pavilion catering delicious North and South Indian food options to multiple hostel residents.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "07:00 AM - 10:00 PM",
      polygonPoints: makeFootprint(10.7560, 78.8120, 0.0003, 0.0003),
      nearbyPlaces: ["nitt-hostel"]
    },
    {
      id: "nitt-medical",
      name: "NITT Health Centre",
      category: "medical",
      lat: 10.7575,
      lng: 78.8125,
      description: "Equipped diagnostic health center with full-time resident physicians, dispensary, emergency observation room, and nursing staff.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(10.7575, 78.8125, 0.0002, 0.0002)
    },
    {
      id: "nitt-maingate",
      name: "Main Entrance Gate",
      category: "gate",
      lat: 10.7545,
      lng: 78.8110,
      description: "Primary secure access gate along the Tiruchirappalli - Thanjavur Highway. Guards ensure campus entry verification.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(10.7545, 78.8110, 0.0002, 0.0002)
    }
  ],
  "nit-silchar": [
    {
      id: "nits-admin",
      name: "Administrative Building",
      category: "admin",
      lat: 24.75900,
      lng: 92.79420,
      description: "Central administrative offices directing NIT Silchar operations, including dynamic registrar blocks, conference rooms, and financial depts.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(24.75900, 92.79420, 0.0006, 0.0006),
      nearbyPlaces: ["nits-library"]
    },
    {
      id: "nits-library",
      name: "BHARAT RATNA DR. APJ ABDUL KALAM LEARNING RESOURCE CENTRE",
      category: "library",
      lat: 24.75785,
      lng: 92.78880,
      description: "One of the largest digital libraries in Asia, featuring over 150,000 volumes, high-speed computer terminals, reading sections, and seminar spaces.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:00 AM - 11:00 PM",
      polygonPoints: makeFootprint(24.75785, 92.78880, 0.0006, 0.0006),
      nearbyPlaces: ["nits-admin"]
    },
    {
      id: "nits-cse",
      name: "Central Computer Center",
      category: "academic",
      lat: 24.75720,
      lng: 92.78980,
      description: "Main computer science department with dedicated high speed research servers, coding hubs, and high-tech instruction classrooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(24.75720, 92.78980, 0.0005, 0.0005),
      nearbyPlaces: ["nits-library"]
    },
    {
      id: "nits-hostel",
      name: "Hostel Kiran (Boys Hostel 7)",
      category: "hostel",
      lat: 24.75880,
      lng: 92.78200,
      description: "Kiran Hall of Residence (Boys Hostel 7), famous for its robust community life, study halls, and extensive lawn spaces.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(24.75880, 92.78200, 0.0006, 0.0006),
      nearbyPlaces: ["nits-canteen"]
    },
    {
      id: "nits-canteen",
      name: "NIT's Cafe",
      category: "dining",
      lat: 24.75940,
      lng: 92.79250,
      description: "Scenic dining spot serving freshly cooked Assamese tea, samosas, momos, and traditional lunch packages.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "08:00 AM - 10:30 PM",
      polygonPoints: makeFootprint(24.75940, 92.79250, 0.0003, 0.0004),
      nearbyPlaces: ["nits-hostel"]
    },
    {
      id: "nits-medical",
      name: "NIT Health Center",
      category: "medical",
      lat: 24.75510,
      lng: 92.78850,
      description: "Provides medical treatment, clinical support, pharmacy, 24x7 nurse presence, and diagnostic checkups.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(24.75510, 92.78850, 0.0004, 0.0004)
    },
    {
      id: "nits-maingate",
      name: "Main Entrance Gate",
      category: "gate",
      lat: 24.75920,
      lng: 92.79600,
      description: "Secured checkpoint for access control at the main Silchar town road connecting directly to the campus area.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(24.75920, 92.79600, 0.0003, 0.0003)
    }
  ],
  "nit-warangal": [
    {
      id: "nitw-admin",
      name: "Administrative Building",
      category: "admin",
      lat: 17.9765,
      lng: 79.5310,
      description: "Central administrative headquarters of NITW, managing registrar offices, finance decks, student support, and dean operations.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:30 AM - 05:30 PM",
      polygonPoints: makeFootprint(17.9765, 79.5310, 0.0004, 0.0004),
      nearbyPlaces: ["nitw-library"]
    },
    {
      id: "nitw-library",
      name: "Central Library",
      category: "library",
      lat: 17.9770,
      lng: 79.5320,
      description: "Highly rich knowledge bank featuring computer networks for research, spacious reading rooms, and a massive physical stack area.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:30 AM - 10:00 PM",
      polygonPoints: makeFootprint(17.9770, 79.5320, 0.0003, 0.0003),
      nearbyPlaces: ["nitw-admin"]
    },
    {
      id: "nitw-hostel",
      name: "Ultra Mega Hostel (1.8K Complex)",
      category: "hostel",
      lat: 17.9740,
      lng: 79.5290,
      description: "One of the largest student hostels in Asia, housing 1,800 students. Modern design with multiple dining halls, study areas, and gym rooms.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.9740, 79.5290, 0.0005, 0.0005),
      nearbyPlaces: ["nitw-canteen"]
    },
    {
      id: "nitw-canteen",
      name: "Staff & Student Canteen",
      category: "dining",
      lat: 17.9745,
      lng: 79.5298,
      description: "Eatery serving delicious Andhra specialties, south meals, snacks, fruit shakes, and tea.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "07:30 AM - 10:30 PM",
      polygonPoints: makeFootprint(17.9745, 79.5298, 0.0003, 0.0002),
      nearbyPlaces: ["nitw-hostel"]
    },
    {
      id: "nitw-maingate",
      name: "Main Entrance Gate",
      category: "gate",
      lat: 17.9780,
      lng: 79.5335,
      description: "Main security gateway situated on Kazipet Highway, facilitating student and vehicle authorization.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(17.9780, 79.5335, 0.0002, 0.0002)
    }
  ],
  "bits-pilani": [
    {
      id: "bits-admin",
      name: "Main Academic Block (Clock Tower)",
      category: "admin",
      lat: 28.3639,
      lng: 75.5873,
      description: "Iconic Clock Tower academic block of BITS Pilani. Features lecture theaters, director offices, admissions rooms, and administrative desks.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "09:00 AM - 05:30 PM",
      polygonPoints: makeFootprint(28.3639, 75.5873, 0.0004, 0.0004),
      nearbyPlaces: ["bits-library", "bits-temple"]
    },
    {
      id: "bits-library",
      name: "Central Library",
      category: "library",
      lat: 28.3645,
      lng: 75.5880,
      description: "State-of-the-art building with an elegant dome structure. Housing thousands of books, computational zones, and collaborative study halls.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
      openingHours: "08:00 AM - 12:00 AM",
      polygonPoints: makeFootprint(28.3645, 75.5880, 0.0004, 0.0003),
      nearbyPlaces: ["bits-admin"]
    },
    {
      id: "bits-temple",
      name: "Sharda Peeth (Saraswati Temple)",
      category: "academic", // wait, using academic or landmark, but categorized under academic as major visual center
      lat: 28.3630,
      lng: 75.5865,
      description: "Famous grand white marble temple dedicated to Goddess Saraswati. Exceptional Indo-Aryan architecture and peaceful surrounding gardens.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "06:00 AM - 09:00 PM",
      polygonPoints: makeFootprint(28.3630, 75.5865, 0.0003, 0.0003),
      nearbyPlaces: ["bits-admin"]
    },
    {
      id: "bits-hostel",
      name: "Ram Bhawan & Gandhi Bhawan",
      category: "hostel",
      lat: 28.3615,
      lng: 75.5855,
      description: "Traditional student residential halls, hosting BITS freshers and seniors. Features internal athletic courtyards and common rooms.",
      accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.3615, 75.5855, 0.0004, 0.0004),
      nearbyPlaces: ["bits-canteen"]
    },
    {
      id: "bits-canteen",
      name: "All-Night Canteen & ANC",
      category: "dining",
      lat: 28.3610,
      lng: 75.5860,
      description: "Fabled student food spot operating until 2:00 AM. Serving hot rolls, milkshakes, noodles, and sandwiches to fuel night study sessions.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      openingHours: "04:00 PM - 02:00 AM",
      polygonPoints: makeFootprint(28.3610, 75.5860, 0.0002, 0.0002),
      nearbyPlaces: ["bits-hostel"]
    },
    {
      id: "bits-medical",
      name: "Medical Centre",
      category: "medical",
      lat: 28.3625,
      lng: 75.5885,
      description: "Health center offering medical care, laboratory diagnostic help, regular health monitoring, and dispensary access.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.3625, 75.5885, 0.0002, 0.0002)
    },
    {
      id: "bits-maingate",
      name: "Main Entry Gate",
      category: "gate",
      lat: 28.3660,
      lng: 75.5890,
      description: "Fully guarded entrance checkpoint leading to the main avenue, lined with beautiful trees and pathways.",
      accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
      polygonPoints: makeFootprint(28.3660, 75.5890, 0.0002, 0.0002)
    }
  ]
};

// Dynamically generate default premium structures for any newly added IITs and NITs to make them fully functional twins
CAMPUSES.forEach((campus) => {
  return; // Procedural building generation disabled to enforce strict GIS-grade accuracy.
  if (!CAMPUS_BUILDINGS[campus.id]) {
    const lat = campus.lat;
    const lng = campus.lng;
    const alias = campus.aliases ? campus.aliases[0] : campus.name;
    
    CAMPUS_BUILDINGS[campus.id] = [
      {
        id: `${campus.id}-admin`,
        name: `${alias} Main Admin Block`,
        category: "admin",
        lat: lat,
        lng: lng,
        description: `Central administrative building of ${campus.name}, directing admission registers, director offices, and administrative departments.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "09:30 AM - 05:30 PM (Mon-Fri)",
        contact: "+91-22-55551212",
        floorCount: 3,
        polygonPoints: makeFootprint(lat, lng, 0.0004, 0.0004),
        nearbyPlaces: [`${campus.id}-library`, `${campus.id}-cse`]
      },
      {
        id: `${campus.id}-library`,
        name: `${alias} Central Library`,
        category: "library",
        lat: lat + 0.0011,
        lng: lng + 0.0009,
        description: `A world-class computerized learning resources facility containing engineering text reserves, deep research journals, and high-speed silent reading bays.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "08:00 AM - 10:00 PM (Daily)",
        floorCount: 4,
        polygonPoints: makeFootprint(lat + 0.0011, lng + 0.0009, 0.0003, 0.0004),
        nearbyPlaces: [`${campus.id}-admin`, `${campus.id}-cse`]
      },
      {
        id: `${campus.id}-cse`,
        name: `${alias} Kanwal Rekhi CSE Building`,
        category: "academic",
        lat: lat + 0.0016,
        lng: lng - 0.0015,
        description: `State-of-the-art Computer Science & Engineering block housing top AI research centers, coding labs, systems and cybersecurity groups.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "24x7 for Research Scholars",
        floorCount: 4,
        polygonPoints: makeFootprint(lat + 0.0016, lng - 0.0015, 0.0003, 0.0003),
        nearbyPlaces: [`${campus.id}-library`, `${campus.id}-ece`]
      },
      {
        id: `${campus.id}-ece`,
        name: `${alias} Department of ECE & EE`,
        category: "academic",
        lat: lat + 0.0022,
        lng: lng + 0.0003,
        description: `Dedicated labs for Electronics, VLSI systems design, Communication networks, and robotic research groups.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "08:30 AM - 06:30 PM",
        floorCount: 5,
        polygonPoints: makeFootprint(lat + 0.0022, lng + 0.0003, 0.0004, 0.0003),
        nearbyPlaces: [`${campus.id}-cse`, `${campus.id}-hostel1`]
      },
      {
        id: `${campus.id}-auditorium`,
        name: `${alias} Main Convocation Hall`,
        category: "auditorium",
        lat: lat + 0.0001,
        lng: lng - 0.0019,
        description: `Massive, high-tech auditorium hosting prestigious guest lectures, dynamic graduation ceremonies, and student cultural events.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "09:00 AM - 09:00 PM",
        floorCount: 2,
        polygonPoints: makeFootprint(lat + 0.0001, lng - 0.0019, 0.0004, 0.0004),
        nearbyPlaces: [`${campus.id}-admin`, `${campus.id}-canteen`]
      },
      {
        id: `${campus.id}-hostel1`,
        name: `${alias} Hostel 1 (Alpha Royals)`,
        category: "hostel",
        lat: lat - 0.0015,
        lng: lng - 0.0022,
        description: `Modern multi-story boys' residential hostel wing with high-speed internet, athletic courtyard, and excellent mess.`,
        accessibility: { wheelchairFriendly: false, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "24x7 for Residents",
        floorCount: 4,
        polygonPoints: makeFootprint(lat - 0.0015, lng - 0.0022, 0.0003, 0.0003),
        nearbyPlaces: [`${campus.id}-canteen`, `${campus.id}-sports`]
      },
      {
        id: `${campus.id}-hostel2`,
        name: `${alias} Hostel 2 (Omega Wings)`,
        category: "hostel",
        lat: lat - 0.0025,
        lng: lng - 0.0001,
        description: `Modern high-rise hostel towers offering spacious single/double occupancy rooms, computing study halls, and laundry facilities.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "24x7 for Residents",
        floorCount: 8,
        polygonPoints: makeFootprint(lat - 0.0025, lng - 0.0001, 0.0004, 0.0004),
        nearbyPlaces: [`${campus.id}-ece`]
      },
      {
        id: `${campus.id}-sports`,
        name: `${alias} Sports & Olympic Swimming Arena`,
        category: "sports",
        lat: lat - 0.0003,
        lng: lng + 0.0025,
        description: `Full athletic amenities including running tracks, football pitch, indoor badminton courts, and an Olympic-sized swimming arena.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "06:00 AM - 09:00 AM, 04:00 PM - 09:00 PM",
        polygonPoints: makeFootprint(lat - 0.0003, lng + 0.0025, 0.0005, 0.0005),
        nearbyPlaces: [`${campus.id}-hostel1`, `${campus.id}-auditorium`]
      },
      {
        id: `${campus.id}-canteen`,
        name: `${alias} Mega Mess & Student Food Court`,
        category: "dining",
        lat: lat - 0.0011,
        lng: lng + 0.0016,
        description: `A highly popular food center offering delicious South/North Indian cuisines, continental snack options, fresh juices, and coffees.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "08:00 AM - 11:00 PM",
        polygonPoints: makeFootprint(lat - 0.0011, lng + 0.0016, 0.0002, 0.0002),
        nearbyPlaces: [`${campus.id}-auditorium`, `${campus.id}-hostel1`]
      },
      {
        id: `${campus.id}-hospital`,
        name: `${alias} Campus Health & Welfare Hospital`,
        category: "medical",
        lat: lat + 0.0018,
        lng: lng - 0.0005,
        description: `24x7 health center with general medical care, emergency consultation beds, pharmacy, and an on-call ambulance.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: true, accessibleEntrance: true },
        openingHours: "24x7 Emergency",
        polygonPoints: makeFootprint(lat + 0.0018, lng - 0.0005, 0.0003, 0.0003),
        nearbyPlaces: [`${campus.id}-admin`, `${campus.id}-library`]
      },
      {
        id: `${campus.id}-maingate`,
        name: `${alias} Main Entrance & Security Arch`,
        category: "gate",
        lat: lat - 0.0035,
        lng: lng - 0.0015,
        description: `Primary grand security gateway for entering the serene, secured ${alias} campus. Direct shuttle transport starts from here.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "24x7",
        polygonPoints: makeFootprint(lat - 0.0035, lng - 0.0015, 0.0002, 0.0002),
        nearbyPlaces: [`${campus.id}-sports`]
      },
      {
        id: `${campus.id}-atm`,
        name: `${alias} SBI Bank, Post Office & ATM Hub`,
        category: "atm",
        lat: lat - 0.0004,
        lng: lng + 0.0007,
        description: `Provides convenient banking services, student educational account facilities, card services, and continuous ATM support.`,
        accessibility: { wheelchairFriendly: true, rampAvailable: true, elevatorAvailable: false, accessibleEntrance: true },
        openingHours: "09:00 AM - 04:00 PM (Bank), 24x7 (ATM)",
        polygonPoints: makeFootprint(lat - 0.0004, lng + 0.0007, 0.0002, 0.0002),
        nearbyPlaces: [`${campus.id}-admin`, `${campus.id}-hospital`]
      }
    ];
  }
});

// Generates dynamic road and path networks for a campus to enable high-quality Dijkstra pathfinding
export function getCampusPathways(campusId: string): { nodes: PathwayNode[]; edges: PathwayEdge[] } {
  const buildings = CAMPUS_BUILDINGS[campusId] || [];
  const nodes: PathwayNode[] = [];
  const edges: PathwayEdge[] = [];

  // 1. Create a node for each building
  buildings.forEach((b) => {
    nodes.push({
      id: `node-${b.id}`,
      lat: b.lat,
      lng: b.lng,
      isAccessible: b.accessibility.wheelchairFriendly
    });
  });

  // 2. Create intersection/road junction nodes to act as path segments
  // Let's create a central ring and interconnecting avenues between buildings
  const centerNodeId = "node-center-junction";
  const campus = CAMPUSES.find((c) => c.id === campusId);
  const centerLat = campus ? campus.lat : 19.1334;
  const centerLng = campus ? campus.lng : 72.9133;

  nodes.push({
    id: centerNodeId,
    lat: centerLat,
    lng: centerLng,
    isAccessible: true
  });

  // Intermediate helper junctions
  const northJunctionId = "node-north-junction";
  const southJunctionId = "node-south-junction";
  const eastJunctionId = "node-east-junction";
  const westJunctionId = "node-west-junction";

  nodes.push(
    { id: northJunctionId, lat: centerLat + 0.002, lng: centerLng, isAccessible: true },
    { id: southJunctionId, lat: centerLat - 0.002, lng: centerLng, isAccessible: true },
    { id: eastJunctionId, lat: centerLat, lng: centerLng + 0.002, isAccessible: true },
    { id: westJunctionId, lat: centerLat, lng: centerLng - 0.002, isAccessible: true }
  );

  // Connect junctions together (the primary main roads of the campus)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // Earth's radius in meters
    const phi1 = (lat1 * Math.PI) / 180;
    const phi2 = (lat2 * Math.PI) / 180;
    const dPhi = ((lat2 - lat1) * Math.PI) / 180;
    const dLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dPhi / 2) * Math.sin(dPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) * Math.sin(dLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // meters
  };

  const addEdge = (fromId: string, toId: string, type: "road" | "walkway" | "shortcut") => {
    const fromNode = nodes.find((n) => n.id === fromId);
    const toNode = nodes.find((n) => n.id === toId);
    if (fromNode && toNode) {
      const distance = calculateDistance(fromNode.lat, fromNode.lng, toNode.lat, toNode.lng);
      edges.push({ from: fromId, to: toId, distance, type });
      edges.push({ from: toId, to: fromId, distance, type }); // undirected graph
    }
  };

  // Connect the junctions ring
  addEdge(centerNodeId, northJunctionId, "road");
  addEdge(centerNodeId, southJunctionId, "road");
  addEdge(centerNodeId, eastJunctionId, "road");
  addEdge(centerNodeId, westJunctionId, "road");
  addEdge(northJunctionId, eastJunctionId, "road");
  addEdge(eastJunctionId, southJunctionId, "road");
  addEdge(southJunctionId, westJunctionId, "road");
  addEdge(westJunctionId, northJunctionId, "road");

  // Connect buildings to the closest junction or center node based on proximity
  buildings.forEach((b) => {
    const buildingNodeId = `node-${b.id}`;
    let closestJunctionId = centerNodeId;
    let minDistance = calculateDistance(b.lat, b.lng, centerLat, centerLng);

    const candidates = [northJunctionId, southJunctionId, eastJunctionId, westJunctionId];
    candidates.forEach((candId) => {
      const candNode = nodes.find((n) => n.id === candId);
      if (candNode) {
        const d = calculateDistance(b.lat, b.lng, candNode.lat, candNode.lng);
        if (d < minDistance) {
          minDistance = d;
          closestJunctionId = candId;
        }
      }
    });

    // Add main road connection
    addEdge(buildingNodeId, closestJunctionId, "road");

    // Add a couple of pathways/shortcuts to neighboring buildings for richer routing
    if (b.nearbyPlaces && b.nearbyPlaces.length > 0) {
      b.nearbyPlaces.forEach((nearbyId) => {
        const targetBNodeId = `node-${nearbyId}`;
        const hasNode = nodes.some((n) => n.id === targetBNodeId);
        if (hasNode) {
          // Connect directly as shortcut/walkway
          addEdge(buildingNodeId, targetBNodeId, "walkway");
        }
      });
    }
  });

  return { nodes, edges };
}

// Highly optimized Dijkstra Algorithm implementation for real-world pathfinding
export function calculateDijkstraRoute(
  campusId: string,
  startBuildingId: string,
  endBuildingId: string,
  mode: "walk" | "accessible" | "cycle" = "walk"
): { points: [number, number][]; distance: number; duration: number } | null {
  const { nodes, edges } = getCampusPathways(campusId);

  const startNodeId = `node-${startBuildingId}`;
  const endNodeId = `node-${endBuildingId}`;

  // If start and end are the same
  if (startNodeId === endNodeId) {
    const startB = CAMPUS_BUILDINGS[campusId]?.find((b) => b.id === startBuildingId);
    if (startB) {
      return { points: [[startB.lat, startB.lng]], distance: 0, duration: 0 };
    }
    return null;
  }

  // Filter edges/nodes based on accessibility / route type
  let validEdges = edges;
  let validNodes = nodes;

  if (mode === "accessible") {
    // Accessible routing: Only use accessible nodes and standard roads/walkways, avoid shortcuts that might have stairs
    validNodes = nodes.filter((n) => n.isAccessible !== false);
    const validNodeIds = new Set(validNodes.map((n) => n.id));
    validEdges = edges.filter(
      (e) => validNodeIds.has(e.from) && validNodeIds.has(e.to) && e.type !== "shortcut"
    );
  }

  // Dijkstra state
  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const unvisited = new Set<string>();

  validNodes.forEach((node) => {
    distances[node.id] = Infinity;
    previous[node.id] = null;
    unvisited.add(node.id);
  });

  if (!(startNodeId in distances) || !(endNodeId in distances)) {
    // If start or end nodes were filtered out, fallback to unfiltered graph
    if (mode === "walk") {
      return null;
    }
    return calculateDijkstraRoute(campusId, startBuildingId, endBuildingId, "walk");
  }

  distances[startNodeId] = 0;

  while (unvisited.size > 0) {
    // Find node with minimum distance
    let currentNodeId: string | null = null;
    let minDistance = Infinity;

    unvisited.forEach((nodeId) => {
      if (distances[nodeId] < minDistance) {
        minDistance = distances[nodeId];
        currentNodeId = nodeId;
      }
    });

    if (currentNodeId === null || currentNodeId === endNodeId) {
      break;
    }

    unvisited.delete(currentNodeId);

    // Get outgoing edges for current node
    const neighbors = validEdges.filter((e) => e.from === currentNodeId);

    neighbors.forEach((edge) => {
      if (unvisited.has(edge.to)) {
        // Adjust speed multiplier based on mode
        let speedMultiplier = 1.0;
        if (mode === "cycle" && edge.type === "road") {
          speedMultiplier = 0.4; // cycling is faster on roads
        } else if (mode === "cycle" && edge.type === "walkway") {
          speedMultiplier = 0.8;
        }

        const alt = distances[currentNodeId!] + edge.distance * speedMultiplier;
        if (alt < distances[edge.to]) {
          distances[edge.to] = alt;
          previous[edge.to] = currentNodeId;
        }
      }
    });
  }

  // Reconstruct path
  const pathNodeIds: string[] = [];
  let u: string | null = endNodeId;

  if (previous[u] === null && u !== startNodeId) {
    const startB = CAMPUS_BUILDINGS[campusId]?.find((b) => b.id === startBuildingId);
    const endB = CAMPUS_BUILDINGS[campusId]?.find((b) => b.id === endBuildingId);
    if (startB && endB) {
      const points: [number, number][] = [[startB.lat, startB.lng], [endB.lat, endB.lng]];
      const R = 6371e3; // meters
      const phi1 = (startB.lat * Math.PI) / 180;
      const phi2 = (endB.lat * Math.PI) / 180;
      const dPhi = ((endB.lat - startB.lat) * Math.PI) / 180;
      const dLambda = ((endB.lng - startB.lng) * Math.PI) / 180;
      const a =
        Math.sin(dPhi / 2) * Math.sin(dPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) * Math.sin(dLambda / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const dist = R * c;
      const speed = mode === "cycle" ? 4.5 : mode === "accessible" ? 1.1 : 1.4;
      return {
        points,
        distance: Math.round(dist),
        duration: Math.max(1, Math.round(dist / speed / 60))
      };
    }
    return null; // Path not found and no coordinate lookup
  }

  while (u !== null) {
    pathNodeIds.unshift(u);
    u = previous[u];
  }

  // Map node IDs back to coordinates
  const points: [number, number][] = [];
  let totalDistance = 0;

  for (let i = 0; i < pathNodeIds.length; i++) {
    const node = nodes.find((n) => n.id === pathNodeIds[i]);
    if (node) {
      points.push([node.lat, node.lng]);
    }

    if (i > 0) {
      const fromNode = nodes.find((n) => n.id === pathNodeIds[i - 1]);
      const toNode = nodes.find((n) => n.id === pathNodeIds[i]);
      if (fromNode && toNode) {
        const d = edges.find((e) => e.from === fromNode.id && e.to === toNode.id)?.distance || 0;
        totalDistance += d;
      }
    }
  }

  // Calculate speed: 1.4 m/s for walking, 4.5 m/s for cycling, 1.1 m/s for wheelchair
  let speed = 1.4;
  if (mode === "cycle") speed = 4.5;
  if (mode === "accessible") speed = 1.1;

  const durationSec = totalDistance / speed;
  const durationMin = Math.max(1, Math.round(durationSec / 60));

  return {
    points,
    distance: Math.round(totalDistance),
    duration: durationMin
  };
}
