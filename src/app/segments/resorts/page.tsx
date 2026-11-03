"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palmtree, Mountain, Sparkles, Compass, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function StarResortsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const resortCategories = [
    {
      title: "Luxury Mountain Resorts",
      desc: "Perched above misty valleys with cantilevered infinity pools, panoramic timber pavilions, and private fireplace decks.",
      image: "/images/resorts-pool.jpg",
      subtypes: ["Highland Cliff Suites", "Heated Infinity Edge Pools", "Stargazing Observatories", "Tea Plantation Trails"]
    },
    {
      title: "Nature & Eco-Resorts",
      desc: "Low-impact architectural treehouses and pavilions constructed with reclaimed stone and sustainably harvested teakwood.",
      image: "/images/resorts-eco.jpg",
      subtypes: ["Canopy Treehouses", "Solar-Powered Living", "Rainwater Harvesting", "Zero-Plastic Policy"]
    },
    {
      title: "Destination Retreats",
      desc: "Secluded sanctuary environments dedicated to complete sensory reset, deep peace, and digital wellness disconnect.",
      image: "/images/hero-cinematic.jpg",
      subtypes: ["Hydrotherapy Circuit", "Silent Meditation Groves", "Private Yoga Decks", "Organic Farm-to-Table"]
    },
    {
      title: "Plantation & Farm Stays",
      desc: "Heritage estates set within sprawling coffee, cardamom, and tea orchards with immersive agricultural experiences.",
      image: "/images/resorts-plantation.jpg",
      subtypes: ["Estate Harvesting Tours", "Artisanal Coffee Roasting", "Botanical Herb Gardens", "Colonial Verandas"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Resorts Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="STAR HOSPITALITIES · DIVISION 02"
          titleLine1="Untamed Landscapes."
          titleLine2="Unhurried Restoration."
          description="Panoramic highland retreats, coastal sanctuaries, and lush rainforest pavilions woven harmoniously into untouched landscapes for unhurried restoration."
          imageSrc="/images/ai-star-resorts.jpg"
          imageAlt="Star Resorts Mountain Infinity Pool and Highland Retreats"
          primaryCta={{
            label: "Reserve a Retreat",
            onClick: () => setEnquiryOpen(true)
          }}
          secondaryCta={{
            label: "Explore Resorts",
            href: "/properties?segment=star-resorts"
          }}
        />

        {/* Resort Types Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                NATURE RETREAT PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Architectural Harmony in Pristine Biomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resortCategories.map((resort) => (
                <div
                  key={resort.title}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={resort.image}
                      alt={resort.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] group-hover:text-[#97692D] transition-colors">
                        {resort.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] mt-2 leading-relaxed">
                        {resort.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                        Resort Experiences:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {resort.subtypes.map((sub) => (
                          <div key={sub} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97692D]" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5DDD3]">
                      <button
                        onClick={() => setEnquiryOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#97692D] hover:underline"
                      >
                        <span>Check Seasonal Availability</span>
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
          kicker="RESERVE YOUR ESCAPE"
          title="Disconnect from Noise. Reconnect with Nature."
          subtitle="Discover secluded villas and pavilions across mountains, coasts, and rainforests."
          buttonText="Explore Availability"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-resorts" />
    </div>
  );
}

