"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, Compass, Tent, Flame, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function StarExperiencesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const experiences = [
    {
      title: "Luxury Safari Glamping",
      desc: "Architectural safari canvas suites featuring private teak viewing verandas, king-sized brass beds, en-suite baths, and evening crackling campfires under starry skies.",
      image: "/images/experiences-glamping.jpg",
      location: "Thar Desert & Nilgiri Foothills",
      highlights: ["Private Campfire & Acoustic Evenings", "Hand-Woven Tribal Furnishings", "High-Powered Astronomy Telescopes", "Dedicated Naturalist Camp Guide"]
    },
    {
      title: "Wilderness Tracking & Guided Safaris",
      desc: "Led by certified resident biologists and trackers, discover elusive wildlife, native bird species, and ancient forest ecosystems in open custom 4x4 vehicles.",
      image: "/images/experiences-safari.jpg",
      location: "Wayanad Biosphere & Central Reserves",
      highlights: ["Nocturnal Wildlife Spotting", "Birding Canopy Excursions", "Off-Road 4x4 River Crossings", "Forest Foraging Masterclasses"]
    },
    {
      title: "Alpine Ridge Treks & Expeditions",
      desc: "Curated trekking routes traversing hidden highland waterfalls, cloud-forest ridgelines, and panoramic sunrise peaks with gourmet summit breakfasts.",
      image: "/images/star-experiences.jpg",
      location: "Western Ghats & Himalayan Slopes",
      highlights: ["Gourmet Peak-Top Picnics", "Professional Mountain Guides", "Ultralight Alpine Equipment", "Private Helicopter Transfers"]
    },
    {
      title: "Cultural Immersion & Heritage Trails",
      desc: "Intimate private encounters with local artisans, organic estate spice farming, indigenous music circles, and historical temple architectural explorations.",
      image: "/images/experiences-hero.jpg",
      location: "Hampi, Coorg & Coastal Malabar",
      highlights: ["Private Historian-Guided Walks", "Organic Cardamom & Pepper Tasting", "Pottery & Handloom Masterclasses", "Sunset Dhow & Catamaran Sailings"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Experiences Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="STAR HOSPITALITIES · DIVISION 06"
          titleLine1="Elevated Adventure."
          titleLine2="Uncharted Horizons."
          description="Pioneering luxury glamping under star-canopied skies, guided wilderness expeditions, and authentic cultural immersion designed for adventurous souls."
          imageSrc="/images/ai-star-experiences.jpg"
          imageAlt="Star Experiences Luxury Safari Glamping Tent at Twilight"
          primaryCta={{
            label: "Curate an Experience",
            onClick: () => setEnquiryOpen(true)
          }}
          secondaryCta={{
            label: "View Camps & Trails",
            href: "/properties?segment=star-experiences"
          }}
        />

        {/* Experiences Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                UNTOUCHED FRONTIERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Authentic Expeditions in Luxury Comfort
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1E1A17]/80 text-white text-xs px-3 py-1 rounded backdrop-blur-xs flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#97692D]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] group-hover:text-[#97692D] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] mt-2 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                        Expedition Inclusions:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {exp.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97692D]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5DDD3]">
                      <button
                        onClick={() => setEnquiryOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#97692D] hover:underline"
                      >
                        <span>Reserve Adventure Expedition</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="THE WILD BECKONS"
          title="Embark on an Extraordinary Journey"
          subtitle="Let our experiential planners design a private itinerary tailored to your spirit of exploration."
          buttonText="Plan Custom Itinerary"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-experiences" />
    </div>
  );
}

