/**
 * Star Aqua Villas - Resort & Venue Data
 * Extracted directly from official resort brochure (SVA final new.pdf)
 * Location: Kumbalagodu, Mysore Road, South West Bengaluru
 */

export interface ResortHeroScene {
  id: string;
  index: number;
  startTime: number;
  endTime: number;
  title: string;
  subtitle: string;
  primaryTag: "LAKESIDE" | "POOL" | "TREE HOUSE" | "TWO LAWNS";
  tags: string[];
  capacity?: string;
  venueKey: string;
}

export const RESORT_HERO_SCENES: ResortHeroScene[] = [
  {
    id: "aquavilla-main",
    index: 0,
    startTime: 0.0,
    endTime: 11.0,
    title: "Star Aquavillas",
    subtitle: "Private lakeside estate for grand weddings and celebrations. Kumbalagodu, Mysore Road, South West Bengaluru.",
    primaryTag: "LAKESIDE",
    tags: ["Lakeside Sanctuary", "Private Estate", "Two Lawns", "Kumbalagodu"],
    capacity: "Up to 750 guests",
    venueKey: "both-lawns"
  },
  {
    id: "lakeside-gazebo",
    index: 1,
    startTime: 11.0,
    endTime: 19.5,
    title: "Lakeside Gazebo",
    subtitle: "Serene waterside gazebo extending over the lake for sunset vows and photography.",
    primaryTag: "LAKESIDE",
    tags: ["Waterside Gazebo", "Lake Frontage", "Sunset Vantage", "Mandap by the Water"],
    capacity: "Waterfront Feature",
    venueKey: "open-lawn"
  },
  {
    id: "tree-house",
    index: 2,
    startTime: 19.5,
    endTime: 27.0,
    title: "Tree House Venue",
    subtitle: "A handcrafted timber canopy hideaway suspended in the trees. Sleep in the canopies, wake up by the lake.",
    primaryTag: "TREE HOUSE",
    tags: ["Tree Canopy Hideaway", "Overnight Stays", "Treetop Balcony", "Pre-Wedding Shoots"],
    capacity: "Up to 60 guests",
    venueKey: "tree-house"
  },
  {
    id: "swimming-pool",
    index: 3,
    startTime: 27.0,
    endTime: 33.0,
    title: "Swimming Pool & Lawns",
    subtitle: "Sparkling private pool flanked by a cascading stone water wall, open lawns, and outdoor relaxation zones.",
    primaryTag: "POOL",
    tags: ["Private Swimming Pool", "Stone Water Wall", "Cocktail Lawns", "Pool Deck Lounges"],
    capacity: "Poolside Lawn",
    venueKey: "both-lawns"
  },
  {
    id: "woodland-retreat",
    index: 4,
    startTime: 33.0,
    endTime: 41.0,
    title: "Woodland Retreat",
    subtitle: "A landscaped garden lawn among tall palms with multi-tiered stepped stone terraces and sheltered pavilion.",
    primaryTag: "TWO LAWNS",
    tags: ["Stepped Terraces", "Tall Palm Groves", "Natural Amphitheater", "Sangeet & Mehendi"],
    capacity: "Up to 320 guests",
    venueKey: "woodland-retreat"
  },
  {
    id: "open-lawn",
    index: 5,
    startTime: 41.0,
    endTime: 48.5,
    title: "Open Lawn & Alfresco Lounge",
    subtitle: "A wide celebration lawn with covered outdoor bar counter, patio seating, and direct villa access.",
    primaryTag: "TWO LAWNS",
    tags: ["Open Celebration Lawn", "Covered Bar Counter", "Alfresco Seating", "3 Villa Rooms Included"],
    capacity: "Up to 320 guests",
    venueKey: "open-lawn"
  },
  {
    id: "villa-suites",
    index: 6,
    startTime: 48.5,
    endTime: 72.7,
    title: "Luxury Villa Suites & Stay",
    subtitle: "Three air-conditioned luxury suites with four-poster canopy beds, private jacuzzi, and grand dining lounge.",
    primaryTag: "TWO LAWNS",
    tags: ["3 Luxury Suites", "Canopy Bedroom", "Private Jacuzzi", "Included with Bookings"],
    capacity: "3 Suites + Jacuzzi",
    venueKey: "both-lawns"
  }
];

export function getResortSceneForTime(currentTime: number): ResortHeroScene {
  for (let i = RESORT_HERO_SCENES.length - 1; i >= 0; i--) {
    if (currentTime >= RESORT_HERO_SCENES[i].startTime) {
      return RESORT_HERO_SCENES[i];
    }
  }
  return RESORT_HERO_SCENES[0];
}

export const MAIN_TAGS = ["LAKESIDE", "POOL", "TREE HOUSE", "TWO LAWNS"] as const;

export const RESORT_VENUES = [
  {
    id: "open-lawn",
    name: "Open Lawn Venue",
    capacity: "Up to 320 guests",
    tagline: "Wide, manicured lawn opening straight towards the lake",
    description: "Edged with planters and palms, opening straight towards the lake. Made for evening ceremonies, cocktail evenings and long open-air dinners.",
    included: "3 rooms of the villa are included with every booking",
    features: [
      "Open-air & covered areas",
      "Stage & mandap space",
      "Dance floor",
      "Lake views"
    ],
    image: "/images/resorts-hero.jpg"
  },
  {
    id: "woodland-retreat",
    name: "Woodland Retreat",
    capacity: "Up to 320 guests",
    tagline: "Landscaped garden lawn among tall palms & pavilion",
    description: "A landscaped garden lawn among tall palms, with stepped terraces and a timber-and-concrete pavilion. Ideal for receptions, mehendi and intimate celebrations.",
    included: "3 rooms of the villa are included with every booking",
    features: [
      "Open-air & covered areas",
      "Stage & mandap space",
      "Dance floor",
      "Palms & pavilion backdrop"
    ],
    image: "/images/resorts-eco.jpg"
  },
  {
    id: "tree-house",
    name: "Tree House Venue",
    capacity: "Up to 60 guests",
    tagline: "Nature hideaway for stays, intimate parties & shoots",
    description: "Sleep in the trees, wake up by the lake. A secluded architectural canopy retreat perfect for romantic stays, small celebrations, and high-production pre-wedding or film shoots.",
    included: "Overnight stays & private event slots available",
    features: [
      "Overnight stays",
      "Intimate parties",
      "Pre-wedding shoots",
      "Film & content shoots"
    ],
    image: "/images/experiences-glamping.jpg"
  },
  {
    id: "both-lawns",
    name: "One Celebration, Two Venues",
    capacity: "Up to 750 guests",
    tagline: "Open Lawn + Woodland Retreat together",
    description: "Take both lawns together for a larger gathering. Together they host up to 750 guests, with 3 villa suites and tree house included, lakefrontage with gazebo, and evening lighting.",
    included: "3 villa rooms + Tree House included",
    features: [
      "Both lawns combined",
      "Lakefrontage & gazebo",
      "Evening lighting for photography",
      "One team, everything in-house"
    ],
    image: "/images/events-hero.jpg"
  }
];

export const RESORT_OCCASIONS = [
  "Weddings",
  "Sangeet & Mehendi",
  "Receptions",
  "Engagements",
  "Cocktail Evenings",
  "Birthdays",
  "Corporate Events",
  "Shoots & Stays"
];

export const RESORT_SERVICES = [
  {
    title: "One Team, Everything In-House",
    desc: "Catering, decor and event services are all arranged by Star Aqua Villas — one dedicated team from the first visit to the last guest."
  },
  {
    title: "Lakeside Gazebo",
    desc: "Direct lakefrontage and an illuminated waterside gazebo create stunning photography backdrops."
  },
  {
    title: "Luxury Villa Rooms Included",
    desc: "Included with bookings — a serene, air-conditioned sanctuary for family to stay and the bridal party to get ready."
  },
  {
    title: "Sunset Viewing & Evening Lighting",
    desc: "The lawns look best in the evening light. Specially designed ambient illuminations elevate night celebrations."
  }
];

export interface ResortFacility {
  title: string;
  desc: string;
  iconName: "MapPin" | "Waves" | "Zap" | "Car" | "Sparkles" | "UtensilsCrossed" | "ShieldCheck" | "Wifi" | "CalendarCheck" | "Temple";
}

export const RESORT_FACILITIES: ResortFacility[] = [
  {
    title: "Prime location",
    desc: "Located on Mysore Road, Kumbalagodu in South West Bengaluru, easily accessible for all of your guests.",
    iconName: "MapPin"
  },
  {
    title: "Swimming Pool",
    desc: "A spacious pool for leisure as well as themed poolside celebrations.",
    iconName: "Waves"
  },
  {
    title: "Power backup",
    desc: "24/7 generator backup so that your events are uninterrupted.",
    iconName: "Zap"
  },
  {
    title: "Spacious Parking",
    desc: "Parking for 600+ cars and 300+ bikes with 24x7 security",
    iconName: "Car"
  },
  {
    title: "Temple",
    desc: "An on-site Temple to invoke divine blessings for your special occasions.",
    iconName: "Temple"
  },
  {
    title: "Modern Kitchen",
    desc: "A fully equipped modern kitchen for large-scale events.",
    iconName: "UtensilsCrossed"
  },
  {
    title: "CCTV Security",
    desc: "Covers the entire premises for your safety & peace of mind.",
    iconName: "ShieldCheck"
  },
  {
    title: "Wi-Fi Connectivity",
    desc: "For you to easily post your memorable moments online.",
    iconName: "Wifi"
  },
  {
    title: "On-Site Event Planning",
    desc: "Event planners, photographers, decorators, caterers, makeup & mehndi artists are available on site.",
    iconName: "CalendarCheck"
  }
];

export interface ResortSolutionItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  capacity: string;
  deliverables: string[];
  timingSnippet: string;
  image: string;
  anchor: string;
}

export const RESORT_SOLUTIONS: ResortSolutionItem[] = [
  {
    id: "weddings-marriages",
    title: "Weddings, Sangeet & Receptions",
    badge: "GRAND MARITAL CELEBRATIONS",
    tagline: "Lakeside Mandap, Two Lawns & Complete Turnkey Orchestration",
    description: "Host up to 750 guests across Open Lawn and Woodland Retreat. Exchange vows overlooking the shimmering lake at sunset, host a vibrant Sangeet in the tree-lined amphitheater, and give your guests a celebration they will remember forever.",
    capacity: "Up to 750 guests (Two Lawns Combined)",
    deliverables: [
      "Lakeside Mandap Staging with Natural Sunset Reflections",
      "Both Lawns Combined (Open Lawn + Woodland Retreat)",
      "3 Villa Rooms + Tree House Included for Family Stay & Bridal Prep",
      "One Dedicated In-House Team for Catering, Decor & Flow",
      "Dedicated Baraat Entry Corridor & Red-Carpet Arrivals",
      "Professional Ambient & Architectural Lighting for Evening Photography"
    ],
    timingSnippet: "Full Event Day (12h) or 24-Hour Celebration with Villa Stay",
    image: "/images/solutions/solution-weddings.jpg",
    anchor: "weddings"
  },
  {
    id: "pre-wedding-shoots",
    title: "Pre-Wedding & Cinematography Shoots",
    badge: "FILM & VISUAL PRODUCTIONS",
    tagline: "6+ Scenic Landscapes in One Location: Lake, Tree House, Pool & Lawns",
    description: "A photographer and filmmaker's paradise. Capture stunning couple portraits, cinematic drone frames, song sequences, and editorial campaigns across waterfront gazebo, elevated treehouse canopy, limestone swimming pool deck, and manicured lawns.",
    capacity: "Production Crews & Intimate Cast",
    deliverables: [
      "4-Hour & Full-Day Flexible Slot Bookings",
      "Lakefront Illuminated Waterfront Gazebo",
      "Architectural Wooden Tree House with Canopy Walkways",
      "Private Swimming Pool & Sunken Sundeck Views",
      "Air-Conditioned Green Room with Vanity Mirrors & Wardrobe Storage",
      "Clear Aerial Airspace for 4K Drone Filming"
    ],
    timingSnippet: "4-Hour & Full-Day Slot Bookings Available",
    image: "/images/solutions/solution-shoots.jpg",
    anchor: "shoots"
  },
  {
    id: "cocktails-birthdays",
    title: "Cocktail Evenings & Birthday Galas",
    badge: "EVENING ENTERTAINMENT & PARTIES",
    tagline: "Sunset Lake Views, Live Barbecue & Built-In Dance Floors",
    description: "Celebrate milestones, birthdays, anniversaries, and cocktail soirees in style. Watch the sky turn gold over the lake while enjoying signature cocktails, live grills, and DJ acoustics on the outdoor timber dance floor.",
    capacity: "Up to 150 guests (Golden-Hour) or 320 guests (Open Lawn)",
    deliverables: [
      "Golden-Hour Sunset Timing Transitioning into Night Illumination",
      "Built-in Wooden Dance Floor & Acoustic Staging Space",
      "Open-Air Waterfront Bar Stations & Live Grill Corners",
      "3 Villa Rooms Included to Refresh and Rest",
      "Customizable Cocktail Banqueting by Our In-House Chefs",
      "Valet Parking & High-Capacity Sound Infrastructure"
    ],
    timingSnippet: "6-Hour Golden-Hour Slot (Up to 150 Guests)",
    image: "/images/solutions/solution-parties.jpg",
    anchor: "parties"
  },
  {
    id: "corporate-offsites",
    title: "Corporate Retreats & Offsites",
    badge: "EXECUTIVE GETAWAYS & SUMMITS",
    tagline: "Productive Strategy by Day, Unhurried Lakeside Bonding by Sunset",
    description: "Recharge your team just outside the city. Our open lawns provide ample space for team building activities and games, while the shaded concrete-and-timber pavilion serves as an inspiring boardroom.",
    capacity: "30 to 750 participants",
    deliverables: [
      "Expansive Manicured Lawns for Team Games & Outdoor Workshops",
      "Covered Pavilion for Presentations, Awards & Keynotes",
      "High-Speed Wi-Fi, Projector & Professional Sound Integration",
      "All-Day Executive Catering (Breakfast, Lunch Buffet & High-Tea)",
      "Peaceful Lakeside Environment Away from Traffic & Noise",
      "Spacious Parking for 600+ Cars & 300+ Bikes with 24x7 Security"
    ],
    timingSnippet: "Full-Day & Multi-Day Retreat Formats",
    image: "/images/solutions/solution-corporate.jpg",
    anchor: "corporate"
  },
  {
    id: "treehouse-stays",
    title: "Tree House Hideaways & Stays",
    badge: "NATURE RETREAT & LODGING",
    tagline: "Sleep in the Trees, Wake Up by the Lake",
    description: "A unique nature hideaway for couples and small families. Suspended amidst the lush canopy, the Tree House features a brass four-poster bed, private deck with panoramic lake vistas, and immediate access to the swimming pool.",
    capacity: "Couples & Small Families (Up to 60 guests)",
    deliverables: [
      "Authentic Teak & Glass Architectural Tree House Structure",
      "Four-Poster Canopy Bed with En-Suite Modern Bathroom",
      "Private Balcony overlooking Lake & Waterfront Palms",
      "Access to Swimming Pool & Limestone Sundecks",
      "Intimate Gathering Option for Small Celebrations (up to 60 guests)",
      "Weekend Combo Savings When Booked with Star Aqua Villas"
    ],
    timingSnippet: "Overnight Stays & 4-Hour Gathering Slots",
    image: "/images/solutions/solution-stays.jpg",
    anchor: "stays"
  },
  {
    id: "inhouse-services",
    title: "One Team, Everything In-House",
    badge: "TURNKEY EVENT EXECUTION",
    tagline: "Zero Vendor Friction · One Team from First Visit to Last Guest",
    description: "Unlike venues that leave you to coordinate dozens of outside vendors, Star Hospitalities arranges your entire experience in-house. Our culinary chefs, floral stylists, and venue managers orchestrate every single detail.",
    capacity: "Included with every event solution",
    deliverables: [
      "Bespoke Gourmet Catering (South Indian, North Indian & Continental Menus)",
      "Floral Architecture, Mandap Styling & Entrance Arches",
      "Professional Photography & Cinematography Coordination",
      "Acoustic Sound Engineering, Ambient Fairy Lights & Mood Lighting",
      "24/7 Power Backup & Generous Parking with 24x7 Security",
      "Dedicated Single Point of Contact Throughout Planning & Execution"
    ],
    timingSnippet: "Tailored to Your Celebration Schedule",
    image: "/images/solutions/solution-inhouse.jpg",
    anchor: "turnkey"
  }
];

export const RESORT_PACKAGES = [
  {
    category: "Lawn Celebration Packages (Open Lawn or Woodland Retreat)",
    note: "Villa rooms included with every booking",
    packages: [
      {
        name: "Golden-Hour Cocktail",
        duration: "6 hours",
        capacity: "Up to 150 guests",
        features: ["Choice of Open Lawn or Woodland Retreat", "Lake views & sunset timing", "Villa rooms to get ready", "Evening lighting included"]
      },
      {
        name: "Full Event Day",
        duration: "12 hours",
        capacity: "Up to 320 guests",
        features: ["Day & night access", "3 villa rooms included", "Stage, mandap & dance floor areas", "Covered & open-air zones"]
      },
      {
        name: "24-Hour Celebration & Stay",
        duration: "24 hours",
        capacity: "Event + Overnight Stay",
        features: ["Full day event celebration", "Overnight stay in luxury villa", "Next-morning breakfast on the lawn", "Complete property privacy"]
      },
      {
        name: "Photo or Film Shoot Slot",
        duration: "4 hours",
        capacity: "Cast & Crew",
        features: ["Full access to lawns, lake & pool", "Air-conditioned green room", "Gazebo & lakefront photography", "Morning or golden-hour slots"]
      }
    ]
  },
  {
    category: "Tree House Venue Packages",
    note: "Special canopy retreat",
    packages: [
      {
        name: "Tree House Night Stay",
        duration: "Overnight",
        capacity: "Couples & small families",
        features: ["Four-poster canopy bed", "Balcony lake view", "Access to swimming pool", "Tranquil nature immersion"]
      },
      {
        name: "Intimate Party",
        duration: "4 hours",
        capacity: "Up to 60 guests",
        features: ["Canopy deck & lower lawns", "Private celebration space", "Poolside access", "Music & catering friendly"]
      },
      {
        name: "Pre-Wedding / Content Shoot",
        duration: "4 hours",
        capacity: "Photo & Video Team",
        features: ["Elevated canopy shots", "Lakefront backdrop", "Changing & makeup suite", "Drone clearance"]
      }
    ]
  }
];
