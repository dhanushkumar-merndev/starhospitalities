"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Users,
  ArrowRight,
  X,
  Check,
  Calendar,
  Sunset,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export interface VenueDetail {
  id: string;
  name: string;
  shortName?: string;
  badge: string;
  capacity: string;
  shortDesc: string;
  oneLineDesc: string;
  fullDesc: string;
  heroImage: string;
  galleryImages: { src: string; caption: string }[];
  inclusions: string[];
  keyHighlights: string[];
  idealFor: string[];
  timingOptions: string[];
}

export const AQUAVILLA_VENUES: VenueDetail[] = [
  {
    id: "open-lawn",
    name: "Open Lawn Venue",
    shortName: "Open Lawn",
    badge: "LAKESIDE LAWN",
    capacity: "Up to 320 Guests",
    shortDesc:
      "A wide, manicured lawn edged with planters and palms, opening straight towards the lake. Made for evening ceremonies, cocktail evenings and long open-air dinners.",
    oneLineDesc:
      "Wide, manicured lakeside lawn opening straight towards the water for sunset ceremonies and open-air banquets.",
    fullDesc:
      "The Open Lawn Venue is the premier lakefront setting at Star Aqua Villas. With unobstructed panoramic vistas across the water and towering palm trees flanking the periphery, this venue creates an unforgettable open-air sanctuary for weddings, twilight receptions, and celebratory banquets. Three luxury rooms of the villa are included with every booking, providing complete comfort for the host family and bridal prep.",
    heroImage: "/images/aquavilla/venue_open_lawn.jpg",
    galleryImages: [
      {
        src: "/images/aquavilla/04_open_lawn_lake_view.jpg",
        caption: "Open Lawn opening straight towards the serene lake frontage"
      },
      {
        src: "/images/aquavilla/15_dual_lawns_panorama.jpg",
        caption: "Golden-hour sunset illumination across the waterfront lawn"
      },
      {
        src: "/images/aquavilla/12_lakefront_gazebo.jpg",
        caption: "Private waterside gazebo extending over the lake"
      },
      {
        src: "/images/aquavilla/13_evening_ambient_lighting.jpg",
        caption: "Warm architectural lighting and festoons for night ceremonies"
      },
      {
        src: "/images/aquavilla/09_villa_luxury_suite_interior.jpg",
        caption: "One of three luxury villa suites included with the booking"
      }
    ],
    inclusions: [
      "3 Private Villa Rooms included with booking",
      "Dedicated dance floor area",
      "Stage and mandap space layout",
      "Lake frontage and open lawn panorama",
      "Covered and open-air seating flexibility",
      "Private waterside gazebo access for photography"
    ],
    keyHighlights: [
      "Up to 320 guests capacity",
      "3 rooms of the villa included",
      "Open-air & covered areas",
      "Lake views & sunset frontage",
      "Stage & mandap space",
      "Dance floor zone"
    ],
    idealFor: [
      "Evening Wedding Ceremonies",
      "Cocktail Evenings",
      "Open-Air Banquets",
      "Receptions & Sangeet",
      "Pre-Wedding Celebrations"
    ],
    timingOptions: [
      "Full Event Day (12 hours)",
      "Golden-Hour Cocktail (6 hours · up to 150 guests)",
      "24-Hour Celebration and Stay (Event + Villa Overnight)",
      "Photo or Film Shoot (4-hour slot)"
    ]
  },
  {
    id: "woodland-retreat",
    name: "Woodland Retreat",
    shortName: "Woodland",
    badge: "GARDEN & PAVILION",
    capacity: "Up to 320 Guests",
    shortDesc:
      "A landscaped garden lawn among tall palms, with stepped terraces and a timber-and-concrete pavilion. Ideal for receptions, mehendi and intimate celebrations.",
    oneLineDesc:
      "Landscaped garden lawn framed by tall palms, stepped terraces, and a contemporary covered timber pavilion.",
    fullDesc:
      "Tucked amidst dense palm canopies and architectural flora, the Woodland Retreat pairs lush greenery with a contemporary timber-and-concrete covered pavilion. Stepped landscape terraces provide natural amphitheater seating and intimate gathering pockets, while the weather-sheltered pavilion serves as a stunning backdrop for mandap ceremonies, acoustic music, and royal dining banquets. Three luxury villa rooms are included.",
    heroImage: "/images/aquavilla/venue_woodland_retreat.jpg",
    galleryImages: [
      {
        src: "/images/aquavilla/05_woodland_retreat_terrace.jpg",
        caption: "Landscaped garden lawn with stepped stone terraces and tall palms"
      },
      {
        src: "/images/aquavilla/06_timber_concrete_pavilion.jpg",
        caption: "Architectural timber-and-concrete covered pavilion"
      },
      {
        src: "/images/aquavilla/14_dance_floor_celebration_zone.jpg",
        caption: "Spacious central dance floor setup for sangeet & mehendi"
      },
      {
        src: "/images/aquavilla/03_lakeside_infinity_pool.jpg",
        caption: "Private swimming pool adjacent to the celebration lawns"
      },
      {
        src: "/images/aquavilla/10_private_bedroom_suite.jpg",
        caption: "Elegantly furnished guest suite inside the villa"
      }
    ],
    inclusions: [
      "3 Private Villa Rooms included with booking",
      "Contemporary timber-and-concrete pavilion",
      "Stepped garden terraces with ambient uplighting",
      "Dedicated dance floor setup",
      "Stage and mandap placement",
      "Palms and architectural backdrop for photography"
    ],
    keyHighlights: [
      "Up to 320 guests capacity",
      "3 rooms of the villa included",
      "Timber & concrete pavilion",
      "Stepped garden terraces",
      "Dance floor & staging zone",
      "Open-air & sheltered spaces"
    ],
    idealFor: [
      "Mehendi & Sangeet Soirées",
      "Intimate Wedding Receptions",
      "Boutique Corporate Celebrations",
      "Milestone Birthdays & Anniversaries",
      "Private Acoustic Gatherings"
    ],
    timingOptions: [
      "Full Event Day (12 hours)",
      "Golden-Hour Cocktail (6 hours · up to 150 guests)",
      "24-Hour Celebration and Stay (Event + Villa Overnight)",
      "Photo or Film Shoot (4-hour slot)"
    ]
  },
  {
    id: "tree-house",
    name: "Tree House Venue",
    shortName: "Treehouse",
    badge: "CANOPY RETREAT",
    capacity: "Up to 60 Guests",
    shortDesc:
      "A nature hideaway for stays, small parties and shoots. Sleep in the trees, wake up by the lake.",
    oneLineDesc:
      "Handcrafted timber canopy hideaway suspended among trees for intimate gatherings and romantic overnight stays.",
    fullDesc:
      "Suspended within towering tree canopies overlooking the lake, the Tree House Venue at Star Aqua Villas is an authentic, handcrafted wooden sanctuary. Designed for romantic overnight stays, intimate family parties, and editorial film/pre-wedding photography shoots, it offers private deck seating, birdsong mornings, and complete serenity secluded from the main lawns.",
    heroImage: "/images/aquavilla/venue_treehouse.jpg",
    galleryImages: [
      {
        src: "/images/aquavilla/07_tree_house_exterior.jpg",
        caption: "Handcrafted timber tree house nestled in forest canopies"
      },
      {
        src: "/images/aquavilla/08_tree_house_balcony_view.jpg",
        caption: "Private balcony deck opening to treetop foliage and lake breeze"
      },
      {
        src: "/images/aquavilla/12_lakefront_gazebo.jpg",
        caption: "Waterfront access right by the treehouse pathway"
      },
      {
        src: "/images/aquavilla/01_intro_lakeside_aerial.jpg",
        caption: "Aerial vantage of the treehouse and surrounding nature hideaway"
      }
    ],
    inclusions: [
      "Exclusive access to the elevated Tree House sanctuary",
      "Panoramic tree-canopy balcony deck",
      "Ensuite bedroom and private bathroom",
      "Direct pathway to lakefront and garden grounds",
      "Flexible slot booking (night stays or daytime gatherings)",
      "Weekend combo option with main Star Aqua Villas"
    ],
    keyHighlights: [
      "Up to 60 guests for gatherings",
      "Overnight stays for couples & small families",
      "Sleep in the trees, wake up by the lake",
      "Pre-wedding & content shoot backdrop",
      "4-hour event or overnight formats",
      "Weekend combo savings with Star Aqua Villas"
    ],
    idealFor: [
      "Romantic Couple & Small Family Stays",
      "Pre-Wedding & Editorial Shoots",
      "Intimate Day Parties & Baby Showers",
      "Creative Content & Film Productions",
      "Private Lakeside Getaways"
    ],
    timingOptions: [
      "Tree House Night Stay (Overnight for couples/families)",
      "Intimate Party (4-hour slot · up to 60 guests)",
      "Pre-Wedding or Content Shoot (4-hour slot)",
      "Weekend Combo (Booked together with Star Aqua Villas)"
    ]
  },
  {
    id: "both-lawns",
    name: "Both Lawns Together",
    shortName: "Both Lawns",
    badge: "ONE CELEBRATION, TWO VENUES",
    capacity: "Up to 750 Guests",
    shortDesc:
      "Take both lawns together for a larger gathering. Together they host up to 750 guests, with 3 villa suites and tree house included.",
    oneLineDesc:
      "Exclusive combination of both lawns with 3 villa suites and the tree house included for grand celebrations up to 750 guests.",
    fullDesc:
      "For grand weddings and large celebrations, Star Aqua Villas offers the entire estate exclusively. Combining the lake-facing Open Lawn Venue and the pavilion-centered Woodland Retreat, you get a seamless dual-venue flow across the lakeside frontage, garden terraces, and timber pavilion. All 3 luxury rooms of the villa and the elevated tree house retreat are included for the family and bridal party, with full access to the lakefront gazebo, and our single dedicated in-house catering and decor team.",
    heroImage: "/images/aquavilla/venue_combined_lawns.jpg",
    galleryImages: [
      {
        src: "/images/aquavilla/15_dual_lawns_panorama.jpg",
        caption: "Panoramic expanse showcasing both lawns unified for grand gatherings"
      },
      {
        src: "/images/aquavilla/02_villa_architecture_front.jpg",
        caption: "Full private villa estate with 3 suites and tree house retreat"
      },
      {
        src: "/images/aquavilla/04_open_lawn_lake_view.jpg",
        caption: "Waterfront lawn section of the combined estate"
      },
      {
        src: "/images/aquavilla/06_timber_concrete_pavilion.jpg",
        caption: "Sheltered pavilion section for banquet dining & ceremonies"
      },
      {
        src: "/images/aquavilla/13_evening_ambient_lighting.jpg",
        caption: "Complete estate illuminated by dusk festoon & landscape uplighting"
      }
    ],
    inclusions: [
      "Both Open Lawn and Woodland Retreat combined exclusively",
      "3 Private Villa Rooms + Elevated Tree House included (family stay & bridal prep)",
      "Full lakefrontage and romantic waterside gazebo",
      "Complete evening architectural & festoon photography lighting",
      "Catering, decor, and event services arranged by one unified team",
      "Dual stage/mandap setup and multiple dining zones"
    ],
    keyHighlights: [
      "Up to 750 guests capacity",
      "3 villa rooms + Tree House",
      "Both lawns · One unified team",
      "Lakefrontage & waterside gazebo",
      "Seamless flow between open lawn & pavilion",
      "Evening lighting curated for photography"
    ],
    idealFor: [
      "Grand Weddings & Sangeet Ceremonies",
      "Large Multi-Day Wedding Celebrations",
      "High-Profile Corporate Galas & Retreats",
      "Grand Reception Banquets",
      "Exclusive Private Estate Buyouts"
    ],
    timingOptions: [
      "Full Grand Celebration Day (12 hours)",
      "24-Hour Exclusive Estate Buyout & Stay",
      "Multi-Day Wedding Celebration Package",
      "Weekend Full-Property Experience"
    ]
  }
];

export const EVENT_FORMATS = [
  {
    title: "Full Event Day",
    duration: "12 Hours",
    venue: "Open Lawn or Woodland Retreat",
    inclusion: "Villa rooms included",
    desc: "Complete 12-hour exclusive day slot for morning to evening celebrations, wedding vows, and grand dining."
  },
  {
    title: "Golden-Hour Cocktail",
    duration: "6 Hours",
    venue: "Up to 150 Guests",
    inclusion: "Sunset lakefrontage & gazebo",
    desc: "Designed for twilight cocktail evenings, intimate sangeet, and reception dinners under ambient festoon lighting."
  },
  {
    title: "24-Hour Celebration & Stay",
    duration: "24 Hours",
    venue: "Entire Villa & Lawn",
    inclusion: "Event + Overnight villa stay",
    desc: "Seamless luxury experience hosting your celebration by day and resting overnight in the private villa suites."
  },
  {
    title: "Photo or Film Shoot",
    duration: "4-Hour Slot",
    venue: "Complete Property Access",
    inclusion: "Gazebo & lawn access",
    desc: "Dedicated creative shoot slot across the tranquil lakeside gazebo, manicured lawns, and timber pavilion."
  },
  {
    title: "Tree House Night Stay",
    duration: "Overnight",
    venue: "Tree House Canopy",
    inclusion: "Couples & small families",
    desc: "Sleep in the tree canopies and wake up to serene morning mist over the lake in complete privacy."
  },
  {
    title: "Intimate Party",
    duration: "4-Hour Slot",
    venue: "Up to 60 Guests",
    inclusion: "Tree house deck & grounds",
    desc: "Boutique private gathering for birthdays, bridal showers, or family reunions in a nature hideaway."
  }
];

interface AquavillaSectionProps {
  onOpenEnquiry?: (venueName?: string) => void;
}

export default function AquavillaSection({ onOpenEnquiry }: AquavillaSectionProps) {
  const [activeModalVenue, setActiveModalVenue] = useState<VenueDetail | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const lastScrollTime = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion Graphic Sliding Pill for 4-Venue Showcase
  const venueTabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [venueTabsPill, setVenueTabsPill] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  useEffect(() => {
    const updateVenuePill = () => {
      const el = venueTabsRef.current[activeTabIdx];
      if (el) {
        setVenueTabsPill({
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight,
          opacity: 1
        });
      }
    };
    updateVenuePill();
    const raf = requestAnimationFrame(updateVenuePill);
    const t1 = setTimeout(updateVenuePill, 60);
    const t2 = setTimeout(updateVenuePill, 200);
    window.addEventListener("resize", updateVenuePill);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", updateVenuePill);
    };
  }, [activeTabIdx]);

  // Close modal on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVenueModal();
      }
    };
    if (activeModalVenue) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalVenue]);

  // Smooth wheel scroll cycling through venues
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 280) return;

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 25) {
        setActiveTabIdx((prev) => (prev + 1) % AQUAVILLA_VENUES.length);
        lastScrollTime.current = now;
      } else if (e.deltaX < -25) {
        setActiveTabIdx((prev) => (prev - 1 + AQUAVILLA_VENUES.length) % AQUAVILLA_VENUES.length);
        lastScrollTime.current = now;
      }
    } else if (Math.abs(e.deltaY) > 35) {
      if (e.deltaY > 35 && activeTabIdx < AQUAVILLA_VENUES.length - 1) {
        setActiveTabIdx((prev) => prev + 1);
        lastScrollTime.current = now;
      } else if (e.deltaY < -35 && activeTabIdx > 0) {
        setActiveTabIdx((prev) => prev - 1);
        lastScrollTime.current = now;
      }
    }
  };

  const openVenueModal = (venue: VenueDetail) => {
    setActiveModalVenue(venue);
    setActiveGalleryIndex(0);
  };

  const closeVenueModal = () => {
    setActiveModalVenue(null);
  };

  const handleEnquireFromModal = () => {
    if (activeModalVenue && onOpenEnquiry) {
      onOpenEnquiry(activeModalVenue.name);
      closeVenueModal();
    }
  };

  return (
    <section id="aquavilla-experience" className="py-20 sm:py-28 bg-[#FAF5F1] text-[#1E1A17] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-[#E5DDD3] gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E1A17] font-serif">
              Star Aqua Villas
            </h2>
            <p className="text-sm sm:text-base text-[#5C5550] mt-2.5 leading-relaxed max-w-2xl">
              Private lakeside lawns, bespoke timber pavilion, and an elevated tree house retreat in Kumbalagodu, South West Bengaluru. Designed for weddings, cocktail evenings, and intimate nature getaways.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E2D] shrink-0">
            <MapPin className="w-4 h-4 text-[#8C5E2D]" />
            <span>Kumbalagodu, Mysore Road, Bengaluru</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE VENUE EXPERIENCE: DUAL-MODE (Mobile Stack & Desktop Mac/Win Dock) */}
        {/* ========================================================================= */}
        <div className="mb-16 sm:mb-20">
          {/* ----------------------------------------------------------------------- */}
          {/* 1. MOBILE RESPONSIVE LAYOUT (< md: 320px - 767px)                       */}
          {/* ----------------------------------------------------------------------- */}
          <div className="block md:hidden">
            {/* Top: 4-Venue Switcher Tabs with Motion Graphic Sliding Pill */}
            <div className="flex items-center justify-center mb-4 px-1">
              <div className="relative flex items-center justify-between w-full p-1 bg-white/95 backdrop-blur-md rounded-full border border-[#E5DDD3] shadow-xs">
                {/* Hardware-Accelerated Sliding Pill Indicator */}
                <div
                  className="absolute top-0 left-0 rounded-full bg-[#1E1A17] shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                  style={{
                    transform: `translate3d(${venueTabsPill.left}px, ${venueTabsPill.top}px, 0)`,
                    width: `${venueTabsPill.width}px`,
                    height: `${venueTabsPill.height}px`,
                    opacity: venueTabsPill.opacity
                  }}
                />

                {AQUAVILLA_VENUES.map((venue, idx) => {
                  const isCurrent = activeTabIdx === idx;
                  return (
                    <button
                      key={venue.id}
                      ref={(el) => {
                        venueTabsRef.current[idx] = el;
                      }}
                      type="button"
                      onClick={() => setActiveTabIdx(idx)}
                      className="relative z-10 flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-full text-[11px] font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap select-none"
                    >
                      <span className={isCurrent ? "text-white" : "text-[#5C5550] hover:text-[#1E1A17]"}>
                        {venue.shortName || venue.name.replace(" Venue", "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Showcase: 100% Unobstructed Image On Top, Details Card Below */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xl">
              {/* 1. Image Frame (Unobstructed, 100% visible) */}
              <div
                className="relative w-full h-[250px] sm:h-[320px] overflow-hidden cursor-pointer group select-none"
                onClick={() => openVenueModal(AQUAVILLA_VENUES[activeTabIdx])}
              >
                {AQUAVILLA_VENUES.map((venue, idx) => (
                  <Image
                    key={venue.id}
                    src={venue.heroImage}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={idx === 0}
                    className={`object-cover transition-all duration-700 ease-out ${
                      activeTabIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}

                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Top Bar: Capacity Badge & Prev/Next Chevrons */}
                <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between gap-2 pointer-events-auto">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8C5E2D] text-[11px] font-bold font-mono shadow-xs border border-[#E5DDD3]">
                    <Users className="w-3 h-3 text-[#8C5E2D]" />
                    <span>{AQUAVILLA_VENUES[activeTabIdx].capacity}</span>
                  </span>

                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-1.5 py-1 rounded-full text-white border border-white/15 shadow-sm">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTabIdx((prev) => (prev - 1 + AQUAVILLA_VENUES.length) % AQUAVILLA_VENUES.length);
                      }}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label="Previous Venue"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono px-1 font-bold">
                      {activeTabIdx + 1} / {AQUAVILLA_VENUES.length}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTabIdx((prev) => (prev + 1) % AQUAVILLA_VENUES.length);
                      }}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label="Next Venue"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[10px] font-medium border border-white/10">
                    Tap image for gallery
                  </span>
                </div>
              </div>

              {/* 2. Venue Details Card Below the Image */}
              {(() => {
                const currentVenue = AQUAVILLA_VENUES[activeTabIdx];
                return (
                  <div className="p-4 bg-white border-t border-[#E5DDD3] space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-serif font-bold text-[#1E1A17] tracking-tight">
                        {currentVenue.name}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-[#8C5E2D] uppercase tracking-wider shrink-0">
                        {currentVenue.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#5C5550] leading-relaxed line-clamp-2">
                      {currentVenue.oneLineDesc || currentVenue.shortDesc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      {currentVenue.keyHighlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FAF5F1] border border-[#E5DDD3] text-[10px] font-semibold text-[#1E1A17]"
                        >
                          <Check className="w-3 h-3 text-[#8C5E2D]" />
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-1 flex flex-row items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openVenueModal(currentVenue)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1E1A17] hover:bg-[#8C5E2D] text-white font-bold text-[10px] uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenEnquiry) onOpenEnquiry(currentVenue.name);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF5F1] hover:bg-stone-200 text-[#1E1A17] border border-[#E5DDD3] font-bold text-[10px] uppercase tracking-wider transition-all duration-200 shadow-2xs cursor-pointer whitespace-nowrap"
                      >
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 2. DESKTOP INTERACTIVE DOCK (>= md: 768px+) — Windows & macOS Dock Effect */}
          {/* ----------------------------------------------------------------------- */}
          <div className="hidden md:block">
            <div
              ref={containerRef}
              onWheel={handleWheel}
              className="w-full pb-1 select-none"
            >
              <div className="flex items-end gap-3 sm:gap-4 lg:gap-5 w-full h-[440px] lg:h-[520px]">
                {AQUAVILLA_VENUES.map((venue, idx) => {
                  const isActive = activeTabIdx === idx;
                  return (
                    <div
                      key={venue.id}
                      onMouseEnter={() => setActiveTabIdx(idx)}
                      onClick={() => {
                        if (isActive) {
                          openVenueModal(venue);
                        } else {
                          setActiveTabIdx(idx);
                        }
                      }}
                      style={{
                        flex: isActive ? "4.8 1 0%" : "0.85 1 0%"
                      }}
                      className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "h-full border-[#8C5E2D]/60 shadow-2xl ring-1 ring-[#8C5E2D]/30 z-10"
                          : "h-[110px] lg:h-[135px] border-[#E5DDD3] hover:border-[#8C5E2D]/50 shadow-sm hover:shadow-md opacity-90 hover:opacity-100 z-0"
                      }`}
                    >
                      {/* Background Venue Visual Image */}
                      <Image
                        src={venue.heroImage}
                        alt={venue.name}
                        fill
                        sizes="(max-width: 1200px) 70vw, 50vw"
                        priority={idx === 0}
                        className={`object-cover transition-transform duration-700 ease-out ${
                          isActive
                            ? "group-hover:scale-105"
                            : "scale-100 brightness-[0.88] group-hover:brightness-100"
                        }`}
                      />

                      {/* Gradient Overlays */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                          isActive
                            ? "bg-gradient-to-t from-black/85 via-black/20 to-black/25"
                            : "bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70"
                        }`}
                      />

                      {/* Top Bar on Active Card */}
                      {isActive && (
                        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 animate-fadeIn">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#8C5E2D] text-xs font-bold font-mono shadow-xs border border-[#E5DDD3]">
                              <Users className="w-3.5 h-3.5 text-[#8C5E2D]" />
                              <span>{venue.capacity}</span>
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[11px] font-mono font-bold border border-white/10">
                              {venue.badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2 py-1.5 rounded-full text-white border border-white/15 shadow-sm">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTabIdx((prev) => (prev - 1 + AQUAVILLA_VENUES.length) % AQUAVILLA_VENUES.length);
                              }}
                              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                              aria-label="Previous Venue"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-[11px] font-mono px-1.5 font-bold">
                              {activeTabIdx + 1} / {AQUAVILLA_VENUES.length}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTabIdx((prev) => (prev + 1) % AQUAVILLA_VENUES.length);
                              }}
                              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                              aria-label="Next Venue"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* ENLARGED STATE: Dedicated Separate Bottom Section */}
                      {isActive ? (
                        <div
                          className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3.5 sm:bottom-3.5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5DDD3] text-[#1E1A17] shadow-xl flex items-center justify-between gap-4 transition-all duration-300 animate-fadeIn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openVenueModal(venue);
                          }}
                        >
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#1E1A17] truncate leading-tight">
                              {venue.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#5C5550] truncate font-normal mt-1 leading-relaxed">
                              {venue.oneLineDesc || venue.shortDesc}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                openVenueModal(venue);
                              }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#1E1A17] text-white hover:bg-[#8C5E2D] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer group/cta"
                            >
                              <span>View Details</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                            </button>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenEnquiry) onOpenEnquiry(venue.name);
                              }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-stone-100 text-[#1E1A17] border border-[#E5DDD3] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer"
                            >
                              <span>Inquire</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* MINIMALIZED SLEEPING STATE */
                        <div className="absolute inset-x-1.5 bottom-1.5 sm:inset-x-2 sm:bottom-2 p-1.5 sm:p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5DDD3] text-[#1E1A17] text-center shadow-xs transition-all duration-300">
                          <p className="text-[11px] sm:text-xs font-semibold text-[#1E1A17] truncate font-serif">
                            {venue.name.replace(" Venue", "")}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Baseline Divider Line */}
            <div className="border-b border-[#E5DDD3] w-full mt-4" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EVENT EXPERIENCES & FORMATS (Page 5 of PDF - Strictly NO PRICES)          */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1A17] font-serif">
              Tailored Event Options
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5550] mt-2">
              Flexible slots for every occasion — from intimate sunset cocktails to full 24-hour celebrations with villa accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_FORMATS.map((fmt) => (
              <div
                key={fmt.title}
                className="p-6 rounded-2xl bg-white border border-[#E5DDD3] hover:border-[#8C5E2D]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8C5E2D] uppercase tracking-wider font-mono">
                      {fmt.duration}
                    </span>
                    <span className="text-[11px] text-[#8C8278] font-medium">{fmt.venue}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#1E1A17] font-serif">{fmt.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">{fmt.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5DDD3]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#8C5E2D] font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{fmt.inclusion}</span>
                  </span>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(fmt.title)}
                    className="text-xs font-bold text-[#1E1A17] hover:text-[#8C5E2D] transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIDEO SCREENSHOTS VISUAL GALLERY (Real property captures from hero.mp4)   */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E5DDD3] gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1A17] font-serif">
                Visual Journey: Star Aqua Villas
              </h3>
            </div>
            <p className="text-xs text-[#5C5550] max-w-md">
              High-definition frames captured from our property tour showcasing the lawns, suites, tree house, and lakeside gazebo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {[
              { src: "/images/aquavilla/01_intro_lakeside_aerial.jpg", title: "Lakeside Aerial Panorama" },
              { src: "/images/aquavilla/02_villa_architecture_front.jpg", title: "Villa Architecture & Pool" },
              { src: "/images/aquavilla/03_lakeside_infinity_pool.jpg", title: "Private Swimming Pool" },
              { src: "/images/aquavilla/04_open_lawn_lake_view.jpg", title: "Open Lawn Lake Frontage" },
              { src: "/images/aquavilla/05_woodland_retreat_terrace.jpg", title: "Woodland Garden Terraces" },
              { src: "/images/aquavilla/06_timber_concrete_pavilion.jpg", title: "Architectural Pavilion" },
              { src: "/images/aquavilla/07_tree_house_exterior.jpg", title: "Tree House Retreat" },
              { src: "/images/aquavilla/08_tree_house_balcony_view.jpg", title: "Treetop Balcony Deck" },
              { src: "/images/aquavilla/09_villa_luxury_suite_interior.jpg", title: "Villa Master Suite" },
              { src: "/images/aquavilla/10_private_bedroom_suite.jpg", title: "Private Guest Suite" },
              { src: "/images/aquavilla/11_sunset_golden_hour_lawn.jpg", title: "Sunset Golden Hour" },
              { src: "/images/aquavilla/12_lakefront_gazebo.jpg", title: "Lakeside Gazebo" },
              { src: "/images/aquavilla/13_evening_ambient_lighting.jpg", title: "Evening Festoon Lights" },
              { src: "/images/aquavilla/14_dance_floor_celebration_zone.jpg", title: "Celebration Dance Floor" },
              { src: "/images/aquavilla/15_dual_lawns_panorama.jpg", title: "Dual Lawns Expanse" }
            ].map((shot, sIdx) => (
              <div
                key={shot.src}
                className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-2xs hover:shadow-md cursor-pointer transition-all duration-300"
                onClick={() => {
                  const targetVenue = sIdx < 5 ? AQUAVILLA_VENUES[0] : sIdx < 9 ? AQUAVILLA_VENUES[1] : AQUAVILLA_VENUES[3];
                  openVenueModal(targetVenue);
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="glass-blur-100 px-2.5 py-1.5 rounded-xl">
                    <p className="text-[11px] font-bold leading-tight drop-shadow-sm font-serif">
                      {shot.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* "GET MORE INFORMATION" INTERACTIVE MODAL / DRAWER                          */}
      {/* ========================================================================= */}
      {activeModalVenue && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={closeVenueModal}
        >
          <div
            data-lenis-prevent="true"
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl border border-[#E5DDD3] relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header (Pinned at top) */}
            <div className="shrink-0 bg-white/95 backdrop-blur-md p-5 sm:p-6 border-b border-[#E5DDD3] flex items-center justify-between z-10">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C5E2D] font-mono">
                    {activeModalVenue.badge}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF5F1] border border-[#E5DDD3] text-[#8C5E2D] text-xs font-bold font-mono">
                    <Users className="w-3.5 h-3.5 text-[#8C5E2D]" />
                    <span>{activeModalVenue.capacity}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1A17] font-serif">
                  {activeModalVenue.name}
                </h3>
              </div>

              <button
                onClick={closeVenueModal}
                className="p-2 rounded-full hover:bg-stone-100 text-[#1E1A17] transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Independently Scrollable with data-lenis-prevent) */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 space-y-8"
            >
              {/* Key Highlights Badges (from previous card) */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C5E2D] font-bold block">
                  KEY HIGHLIGHTS &amp; SPECIFICATIONS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalVenue.keyHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF5F1] text-[#1E1A17] text-xs font-semibold border border-[#E5DDD3]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                      <span>{highlight}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Gallery Viewer */}
              <div className="space-y-3">
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm border border-[#E5DDD3]">
                  <Image
                    src={activeModalVenue.galleryImages[activeGalleryIndex].src}
                    alt={activeModalVenue.galleryImages[activeGalleryIndex].caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs sm:text-sm font-medium drop-shadow-sm">
                      {activeModalVenue.galleryImages[activeGalleryIndex].caption}
                    </p>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                  {activeModalVenue.galleryImages.map((gImg, gIdx) => (
                    <button
                      key={gImg.src}
                      onClick={() => setActiveGalleryIndex(gIdx)}
                      className={`relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeGalleryIndex === gIdx
                          ? "border-[#8C5E2D] scale-105 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={gImg.src} alt={gImg.caption} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Venue Overview */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-[#1E1A17] font-serif">
                  Venue Overview
                </h4>
                <p className="text-sm text-[#1E1A17] font-medium leading-relaxed bg-[#FAF5F1] p-4 rounded-2xl border border-[#E5DDD3]">
                  {activeModalVenue.shortDesc}
                </p>
                <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                  {activeModalVenue.fullDesc}
                </p>
              </div>

              {/* Venue Inclusions Grid */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-[#1E1A17] font-serif">
                  Included With Every Booking
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalVenue.inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF5F1] border border-[#E5DDD3] text-xs font-semibold text-[#1E1A17]"
                    >
                      <Check className="w-4 h-4 text-[#8C5E2D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timing & Event Formats (WITHOUT PRICES) */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-[#1E1A17] font-serif">
                  Available Booking Formats &amp; Timings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalVenue.timingOptions.map((opt) => (
                    <div
                      key={opt}
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E5DDD3] bg-white text-xs text-[#5C5550]"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Celebrations */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-[#1E1A17] font-serif">
                  Recommended Celebrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalVenue.idealFor.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#1E1A17] text-white text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer (Pinned at bottom) */}
            <div className="shrink-0 bg-white/95 backdrop-blur-md p-5 sm:p-6 border-t border-[#E5DDD3] flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
              <div className="text-xs text-[#5C5550] flex items-center gap-1.5">
                <Sunset className="w-4 h-4 text-[#8C5E2D]" />
                <span>Lawns look best in the evening light. Sunset visits by appointment.</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={closeVenueModal}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-bold uppercase hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleEnquireFromModal}
                  className="flex-1 sm:flex-initial px-7 py-2.5 rounded-full bg-[#8C5E2D] hover:bg-[#734A21] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
