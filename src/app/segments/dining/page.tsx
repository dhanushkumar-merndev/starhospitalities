"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Wine, Coffee, Sparkles, ChefHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function StarDiningPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const concepts = [
    {
      title: "Fine Dining & Chef's Atelier",
      desc: "Progressive multi-course seasonal tasting journeys curated by master chefs, celebrating regional terroir with contemporary culinary innovation.",
      image: "/images/dining-dish.jpg",
      details: ["9-Course Seasonal Tasting Menus", "Open Theatrical Hearth Kitchen", "Sommelier Wine Pairings", "Private Dining Salons"]
    },
    {
      title: "Signature Specialty Restaurants",
      desc: "Destination restaurants specializing in coastal seafood, wood-fired heritage barbecues, and authentic pan-Asian culinary craft.",
      image: "/images/dining-hero.jpg",
      details: ["Catch-of-the-Day Coastal Grills", "Traditional Clay Tandoors", "Artisanal Handmade Pasta", "Scenic Sunset Alfresco Seating"]
    },
    {
      title: "Rooftop Lounges & Mixology",
      desc: "High-altitude cocktail sanctuaries offering botanical-infused mixology, rare single malts, and ambient acoustic sunsets.",
      image: "/images/dining-cocktail.jpg",
      details: ["Botanical Craft Mixology", "Climate-Controlled Cigar Terrace", "Rare Vintage Whisky Vault", "Resident Acoustic Artists"]
    },
    {
      title: "Artisanal Cafés & Bakeries",
      desc: "Warm sunlit spaces serving single-origin estate coffees, hand-rolled sourdoughs, and delicate French Viennoiserie.",
      image: "/images/dining-wine.jpg",
      details: ["Single-Origin Coffee Roastery", "Artisanal Micro-Bakery", "High Tea Ceremonies", "All-Day European Brunch"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Dining Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="STAR HOSPITALITIES · DIVISION 03"
          titleLine1="Sensory Gastronomy."
          titleLine2="Rooted in Provenance."
          description="Culinary artistry elevated by master chefs, seasonal regional harvests, and evocative atmospheres that transform dining into enduring memories."
          imageSrc="/images/ai-star-dining.jpg"
          imageAlt="Star Dining Fine Gastronomy and Plated Culinary Artistry"
          primaryCta={{
            label: "Reserve a Table",
            onClick: () => setEnquiryOpen(true)
          }}
          secondaryCta={{
            label: "Dining Venues",
            href: "/properties?segment=star-dining"
          }}
        />

        {/* Concepts Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                GASTRONOMIC CONCEPTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                From Fine Dining to Sunset Lounges
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {concepts.map((concept) => (
                <div
                  key={concept.title}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={concept.image}
                      alt={concept.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] group-hover:text-[#97692D] transition-colors">
                        {concept.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] mt-2 leading-relaxed">
                        {concept.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                        Culinary Features:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {concept.details.map((item) => (
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
                        <span>Reserve Table or Private Dining</span>
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
          kicker="PRIVATE DINING & EVENTS"
          title="Curate an Unforgettable Culinary Gathering"
          subtitle="Host intimate chef's tables, corporate gala dinners, or customized wine tastings."
          buttonText="Inquire for Dining"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-dining" />
    </div>
  );
}

