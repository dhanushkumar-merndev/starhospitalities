export interface SegmentInfo {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  description: string;
  cardImage: string;
  mobileThumb: string;
  heroImage: string;
  link: string;
  subcategories: string[];
  keyHighlights: { title: string; desc: string }[];
}

export interface PropertyItem {
  id: string;
  name: string;
  segmentId: string;
  segmentTitle: string;
  location: string;
  stateCountry: string;
  category: string;
  heroImage: string;
  gallery: string[];
  tagline: string;
  description: string;
  startingPrice: string;
  rating: number;
  features: string[];
}

export const SEGMENTS: SegmentInfo[] = [
  {
    id: "star-stays",
    title: "Stays",
    shortTitle: "Stays",
    subtitle: "Hotels, Villas & Homestays",
    tagline: "Refined Sanctuaries for the Modern Traveler",
    description: "From cosmopolitan boutique retreats to secluded luxury villas, Stays curates bespoke accommodations that blend intuitive hospitality, architectural elegance, and residential comfort.",
    cardImage: "/images/ai-star-stays.jpg",
    mobileThumb: "/images/ai-star-stays.jpg",
    heroImage: "/images/ai-star-stays.jpg",
    link: "/segments/stays",
    subcategories: [
      "Luxury Hotels",
      "Boutique Hotels",
      "Business Hotels",
      "Serviced Apartments",
      "Private Villas",
      "Homestays & Estates",
      "Holiday Homes"
    ],
    keyHighlights: [
      { title: "Bespoke Suites", desc: "Artisan-crafted furnishings, floor-to-ceiling vistas, and plush residential comfort." },
      { title: "Intuitive Butler Service", desc: "Discreet, anticipatory hospitality catering to your every preference." },
      { title: "Prime Locations", desc: "Situated in prestigious urban enclaves and serene holiday enclaves." }
    ]
  },
  {
    id: "star-resorts",
    title: "Resorts",
    shortTitle: "Resorts",
    subtitle: "Luxury Resorts & Retreats",
    tagline: "Immersive Escapes in Nature's Grandest Landscapes",
    description: "Panoramic highland sanctuaries, oceanfront havens, and rainforest pavilions harmoniously woven into untouched natural topography for unhurried restoration.",
    cardImage: "/images/ai-star-resorts.jpg",
    mobileThumb: "/images/ai-star-resorts.jpg",
    heroImage: "/images/ai-star-resorts.jpg",
    link: "/segments/resorts",
    subcategories: [
      "Luxury Resorts",
      "Nature Resorts",
      "Eco Resorts",
      "Destination Resorts",
      "Farm Stays",
      "Plantation Retreats"
    ],
    keyHighlights: [
      { title: "Infinity Edges", desc: "Cantilevered infinity pools seamlessly merging with misty mountain valleys." },
      { title: "Eco-Conscious Architecture", desc: "Locally sourced stone, reclaimed teak, and zero-carbon bioclimatic design." },
      { title: "Total Seclusion", desc: "Expansive private decks, outdoor sunken tubs, and pristine forest tranquility." }
    ]
  },
  {
    id: "star-dining",
    title: "Dining",
    shortTitle: "Dining",
    subtitle: "Restaurants, Cafés & Lounges",
    tagline: "Sensory Gastronomy Rooted in Provenance",
    description: "Culinary artistry elevated by master chefs, seasonal regional harvests, and evocative atmospheres that elevate every meal into a memorable sensory journey.",
    cardImage: "/images/ai-star-dining.jpg",
    mobileThumb: "/images/ai-star-dining.jpg",
    heroImage: "/images/ai-star-dining.jpg",
    link: "/segments/dining",
    subcategories: [
      "Fine Dining",
      "Signature Restaurants",
      "Artisanal Cafés",
      "Rooftop & Sunset Lounges",
      "Specialty Cuisine",
      "Bespoke Catering & Banquets"
    ],
    keyHighlights: [
      { title: "Master Chefs", desc: "Globally acclaimed culinary directors blending classic technique with regional flair." },
      { title: "Farm-to-Fork Provenance", desc: "Organic produce nurtured on our own estate gardens and artisanal partners." },
      { title: "Curated Sommelier Cellars", desc: "Rare international vintages, craft mixology, and bespoke pairing menus." }
    ]
  },
  {
    id: "star-events",
    title: "Events",
    shortTitle: "Events",
    subtitle: "Weddings & Event Venues",
    tagline: "Moments of Grandeur, Celebrations of Distinction",
    description: "Spectacular venues, flawless orchestration, and bespoke event styling for fairytale destination weddings, executive conventions, and milestone celebrations.",
    cardImage: "/images/ai-star-events.jpg",
    mobileThumb: "/images/ai-star-events.jpg",
    heroImage: "/images/ai-star-events.jpg",
    link: "/segments/events",
    subcategories: [
      "Fairytale Weddings",
      "Banquet Venues",
      "Destination Weddings",
      "Corporate Summits",
      "Private Celebrations",
      "Convention & Exhibition Facilities"
    ],
    keyHighlights: [
      { title: "Iconic Venues", desc: "Cliffside amphitheaters, open-air mountain lawns, and crystal-lit ballrooms." },
      { title: "Dedicated Concierge", desc: "Turnkey planning encompassing decor, guest logistics, gastronomy, and entertainment." },
      { title: "Capacity Flexibility", desc: "Seamless configurations accommodating intimate gatherings of 20 to galas of 1,200+." }
    ]
  },
  {
    id: "star-wellness",
    title: "Wellness",
    shortTitle: "Wellness",
    subtitle: "Spa & Wellness Experiences",
    tagline: "Holistic Harmony for Mind, Body, and Spirit",
    description: "Deep rejuvenation rooted in authentic Ayurvedic wisdom, bespoke therapeutic rituals, tranquil open-air yoga shalas, and natural thermal healing.",
    cardImage: "/images/ai-star-wellness.jpg",
    mobileThumb: "/images/ai-star-wellness.jpg",
    heroImage: "/images/ai-star-wellness.jpg",
    link: "/segments/wellness",
    subcategories: [
      "Wellness Retreats",
      "Luxury Spas",
      "Ayurveda Sanctuaries",
      "Yoga & Meditation Shalas",
      "Sound Healing & Breathwork",
      "Holistic Longevity Programs"
    ],
    keyHighlights: [
      { title: "Ayurvedic Doctors", desc: "Personalized dosha consultations, customized botanical oils, and diet regimens." },
      { title: "Forest Sanctuary Spas", desc: "Private treatment suites nestled among fragrant flora with hydrotherapy plunge pools." },
      { title: "Mindfulness Masterclasses", desc: "Guided dawn meditation, Tibetan sound baths, and pranayama workshops." }
    ]
  },
  {
    id: "star-experiences",
    title: "Experiences",
    shortTitle: "Experiences",
    subtitle: "Adventure & Nature Stays",
    tagline: "Curated Journeys Beyond the Ordinary",
    description: "Pioneering luxury glamping under star-studded skies, guided wilderness safaris, and authentic cultural immersion designed for adventurous souls.",
    cardImage: "/images/ai-star-experiences.jpg",
    mobileThumb: "/images/ai-star-experiences.jpg",
    heroImage: "/images/ai-star-experiences.jpg",
    link: "/segments/experiences",
    subcategories: [
      "Adventure Expeditions",
      "Luxury Glamping",
      "Nature Immersion",
      "Curated Cultural Tours",
      "Destination Activities",
      "Experiential Eco Stays"
    ],
    keyHighlights: [
      { title: "Glamping Sanctuaries", desc: "Architectural safari canvas suites with king beds, en-suite baths, and private campfire decks." },
      { title: "Naturalist-Led Safaris", desc: "Deep forest tracking, nocturnal wildlife trails, and birding expeditions." },
      { title: "Indigenous Storytelling", desc: "Fireside tribal acoustics, local craft workshops, and estate tea-tasting journeys." }
    ]
  },
  {
    id: "hospitality-solutions",
    title: "Hospitality Solutions",
    shortTitle: "Solutions",
    subtitle: "B2B Advisory & Management",
    tagline: "End-to-End Asset Value Creation",
    description: "Empowering hotel owners, developers, and institutional investors with comprehensive operational leadership, revenue growth strategies, and visionary development execution.",
    cardImage: "/images/ai-hospitality-solutions.jpg",
    mobileThumb: "/images/ai-hospitality-solutions.jpg",
    heroImage: "/images/ai-hospitality-solutions.jpg",
    link: "/solutions",
    subcategories: [
      "Hospitality Management",
      "Operations Management",
      "Hospitality Development",
      "Hospitality Consulting",
      "Revenue Management & Optimization",
      "Pre-opening Services",
      "Branding & Marketing Strategy"
    ],
    keyHighlights: [
      { title: "Yield Maximization", desc: "Proprietary algorithmic pricing, direct channel growth, and dynamic RevPAR enhancement." },
      { title: "Turnkey Pre-Opening", desc: "Technical architectural reviews, OS&E procurement, team hiring, and brand positioning." },
      { title: "Owner Alignment", desc: "Transparent reporting, rigorous cost stewardship, and sustained asset appreciation." }
    ]
  }
];

export const SOLUTIONS_PILLARS = [
  {
    title: "Management",
    subtitle: "Property & brand management",
    desc: "Professional property and brand management, maximizing long-term asset value and operational reputation.",
    icon: "Layers"
  },
  {
    title: "Operations",
    subtitle: "End-to-end hotel & resort operations",
    desc: "Comprehensive day-to-day hospitality operations, staffing excellence, and strict quality control.",
    icon: "Cog"
  },
  {
    title: "Development",
    subtitle: "Concept, planning & project execution",
    desc: "Concept development, architectural advisory, space planning, and timely project delivery.",
    icon: "Building"
  },
  {
    title: "Consulting",
    subtitle: "Strategic advisory for hospitality ventures",
    desc: "Feasibility analysis, business modeling, brand positioning, and capital investment advisory.",
    icon: "TrendingUp"
  }
];

export const PROPERTIES: PropertyItem[] = [
  {
    id: "aethelgard-pavilion",
    name: "Aethelgard Mountain Pavilion & Spa",
    segmentId: "star-resorts",
    segmentTitle: "Resorts",
    location: "Coorg Highland Ridge",
    stateCountry: "Karnataka, India",
    category: "Luxury Highland Resort",
    heroImage: "/images/resorts-hero.jpg",
    gallery: [
      "/images/resorts-hero.jpg",
      "/images/resorts-pool.jpg",
      "/images/resorts-eco.jpg"
    ],
    tagline: "Perched Above the Clouds, Embraced by Emerald Mist",
    description: "Nestled high amidst rolling misty tea estates, Aethelgard features teak cantilevered pavilions, heated infinity plunge pools, and open-hearth fires overlooking dramatic mountain valleys.",
    startingPrice: "$450 / night",
    rating: 4.95,
    features: ["Infinity Mountain Pool", "Ayurvedic Forest Spa", "Estate Tea Tasting", "Floor-to-Ceiling Glass Suites"]
  },
  {
    id: "star-metropolitan",
    name: "The Grand Metropolitan",
    segmentId: "star-stays",
    segmentTitle: "Stays",
    location: "Colaba & Marine Enclave",
    stateCountry: "Mumbai, India",
    category: "Boutique Heritage Hotel",
    heroImage: "/images/stays-hero.jpg",
    gallery: [
      "/images/stays-hero.jpg",
      "/images/stays-suite.jpg",
      "/images/stays-boutique.jpg"
    ],
    tagline: "Contemporary Art Deco Grandeur in the Financial Capital",
    description: "An oasis of tranquility in the bustling metropolis, offering 84 bespoke suites, curated private art galleries, an exclusive rooftop cigar lounge, and Michelin-inspired dining.",
    startingPrice: "$380 / night",
    rating: 4.9,
    features: ["Private Butler Service", "Rooftop Sky Lounge", "Curated Art Gallery", "Executive Boardrooms"]
  },
  {
    id: "vanya-eco-sanctuary",
    name: "Vanya Rainforest Treehouse Sanctuary",
    segmentId: "star-resorts",
    segmentTitle: "Resorts",
    location: "Wayanad Biosphere",
    stateCountry: "Kerala, India",
    category: "Eco-Luxury Retreat",
    heroImage: "/images/resorts-eco.jpg",
    gallery: [
      "/images/resorts-eco.jpg",
      "/images/resorts-pool.jpg",
      "/images/experiences-glamping.jpg"
    ],
    tagline: "Elevated Living in the Heart of the Ancient Canopy",
    description: "Architectural timber treehouses suspended 60 feet above the forest floor, crafted using eco-certified timber with panoramic glass canopy showers and private suspension bridge access.",
    startingPrice: "$420 / night",
    rating: 4.98,
    features: ["Solar-Powered Luxury", "Canopy Suspension Bridges", "Guided Night Safari", "Organic Foraged Dining"]
  },
  {
    id: "aurum-ocean-villas",
    name: "Aurum Coastal Cliff Villas",
    segmentId: "star-stays",
    segmentTitle: "Stays",
    location: "Vagator Cliffside",
    stateCountry: "Goa, India",
    category: "Private Luxury Villas",
    heroImage: "/images/stays-villa.jpg",
    gallery: [
      "/images/stays-villa.jpg",
      "/images/stays-suite.jpg",
      "/images/resorts-pool.jpg"
    ],
    tagline: "Private Ocean Terraces Where Sunsets Touch the Arabian Sea",
    description: "A private collection of four-bedroom cliff villas featuring limestone sun terraces, private salt-water lap pools, private chefs, and direct secluded beach pathway access.",
    startingPrice: "$650 / night",
    rating: 4.92,
    features: ["Private Chef & Butler", "Direct Cove Access", "Private Lap Pool", "Sunset Cocktail Gazebo"]
  },
  {
    id: "saffron-and-stone",
    name: "Saffron & Stone Fine Dining & Cellar",
    segmentId: "star-dining",
    segmentTitle: "Dining",
    location: "Lavelle Road",
    stateCountry: "Bengaluru, India",
    category: "Progressive Indian & French Bistro",
    heroImage: "/images/dining-hero.jpg",
    gallery: [
      "/images/dining-hero.jpg",
      "/images/dining-dish.jpg",
      "/images/dining-cocktail.jpg"
    ],
    tagline: "Heritage Spices Reimagined Through Modern Culinary Architecture",
    description: "An intimate 45-seat culinary atelier featuring an open theatrical kitchen, a temperature-controlled subterranean 1,200-bottle wine vault, and a 9-course seasonal tasting menu.",
    startingPrice: "$120 / tasting menu",
    rating: 4.96,
    features: ["Chef's Tasting Table", "Subterranean Wine Vault", "Open Hearth Kitchen", "Sommelier Pairing"]
  },
  {
    id: "celestial-lawn-ballroom",
    name: "The Celestial Lawn & Glass Ballroom",
    segmentId: "star-events",
    segmentTitle: "Events",
    location: "Aravalli Foothills",
    stateCountry: "Udaipur, India",
    category: "Destination Wedding & Gala Estate",
    heroImage: "/images/events-hero.jpg",
    gallery: [
      "/images/events-hero.jpg",
      "/images/events-wedding.jpg",
      "/images/events-banquet.jpg"
    ],
    tagline: "Royalty Reimagined for Unforgettable Fairytale Vows",
    description: "Spread over 12 acres of manicured terraces and reflecting lotus fountains, the estate hosts up to 1,500 guests with an all-glass climate-controlled conservatory ballroom.",
    startingPrice: "Custom Proposal",
    rating: 4.99,
    features: ["1,500 Guest Capacity", "All-Glass Conservatory", "Bridal Luxury Villas", "Helipad Access"]
  },
  {
    id: "nirvana-ayurveda-sanctuary",
    name: "Nirvana Ayurvedic Wellness Sanctuary",
    segmentId: "star-wellness",
    segmentTitle: "Wellness",
    location: "Upper Ganges Valley",
    stateCountry: "Rishikesh, India",
    category: "Holistic Health Retreat",
    heroImage: "/images/wellness-hero.jpg",
    gallery: [
      "/images/wellness-hero.jpg",
      "/images/wellness-spa.jpg",
      "/images/wellness-yoga.jpg"
    ],
    tagline: "Sacred Rejuvenation Along the Flow of the Holy River",
    description: "Dedicated to complete physiological restoration, Nirvana offers 7 to 21-day doctor-guided Panchakarma programs, silent meditation pavilions, and Himalayan mineral hydrotherapy.",
    startingPrice: "$500 / night (all-inclusive)",
    rating: 4.97,
    features: ["Vaidya Doctor Consults", "Panchakarma Suites", "Ganges Sunrise Yoga", "Ayurvedic Sattvic Cuisine"]
  },
  {
    id: "nomad-glamping-trails",
    name: "Nomad Canvas Glamping & Stargazing",
    segmentId: "star-experiences",
    segmentTitle: "Experiences",
    location: "Thar Golden Desert",
    stateCountry: "Rajasthan, India",
    category: "Desert Luxury Glamping",
    heroImage: "/images/experiences-glamping.jpg",
    gallery: [
      "/images/experiences-glamping.jpg",
      "/images/experiences-safari.jpg",
      "/images/experiences-hero.jpg"
    ],
    tagline: "Bedouin Splendor Under a Canopy of Billions of Stars",
    description: "Handcrafted nomadic canvas suites with brass four-poster beds, hand-knotted Persian carpets, private dune terraces, camel safaris, and astronomy telescope dinners.",
    startingPrice: "$340 / night",
    rating: 4.94,
    features: ["Astronomy Telescopes", "Private Dune Dining", "Camel & 4x4 Safaris", "Live Folk Performances"]
  }
];

