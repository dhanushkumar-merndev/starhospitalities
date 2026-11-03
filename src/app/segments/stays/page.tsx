"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Star, Shield, Wifi, Coffee, Sparkles, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function StarStaysPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  const accommodationTypes = [
    {
      id: "luxury-hotels",
      title: "Luxury Hotels",
      desc: "Metropolitan flagships offering bespoke concierge service, Michelin-inspired dining, and panoramic skyline suites.",
      image: "/images/stays-suite.jpg",
      features: ["24/7 Dedicated Butler", "Panoramic Sky Terraces", "Private Art Galleries", "Executive Lounge Access"]
    },
    {
      id: "boutique-hotels",
      title: "Boutique Hotels",
      desc: "Intimate heritage properties celebrating vernacular architecture, custom artisan woodwork, and localized storytelling.",
      image: "/images/stays-boutique.jpg",
      features: ["Heritage Courtyards", "Artisan Wood Carvings", "Curated Library Lounges", "Bespoke Breakfast Menus"]
    },
    {
      id: "private-villas",
      title: "Private Villas",
      desc: "Secluded cliffside and beachfront sanctuaries with private lap pools, personal estate chefs, and complete privacy.",
      image: "/images/stays-villa.jpg",
      features: ["Private Infinity Pools", "Personal Estate Chef", "Direct Beach/Cove Access", "Expansive Sun Decks"]
    },
    {
      id: "serviced-apartments",
      title: "Serviced Apartments",
      desc: "Extended-stay penthouses equipped with full chef's kitchens, laundry, and round-the-clock five-star hotel amenities.",
      image: "/images/stays-hero.jpg",
      features: ["Full Chef's Kitchen", "Dedicated Home Office", "High-Speed Fiber Wifi", "Housekeeping & Dry Cleaning"]
    },
    {
      id: "homestays-holiday-homes",
      title: "Homestays & Holiday Homes",
      desc: "Charming countryside estates and heritage bungalows offering authentic residential comfort and warm local hospitality.",
      image: "/images/about-architecture.jpg",
      features: ["Private Estate Gardens", "Homecooked Regional Meals", "Nature Trails", "Family & Pet Friendly"]
    }
  ];

  const filtered =
    selectedType === "all"
      ? accommodationTypes
      : accommodationTypes.filter((t) => t.id === selectedType);

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Stays Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="STAR HOSPITALITIES · DIVISION 01"
          titleLine1="Sanctuaries of Grace."
          titleLine2="Residential Comfort."
          description="From cosmopolitan boutique suites to secluded coastal villas, Star Stays redefines accommodation as a sensory sanctuary — combining intuitive hospitality with residential serenity."
          imageSrc="/images/ai-star-stays.jpg"
          imageAlt="Star Stays Master Bedroom Suite and Luxury Interior"
          primaryCta={{
            label: "Reserve a Stay",
            onClick: () => setEnquiryOpen(true)
          }}
          secondaryCta={{
            label: "View Properties",
            href: "/properties?segment=star-stays"
          }}
        />

        {/* Categories Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                ACCOMMODATION PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Curated Stays for Every Journey
              </h2>
            </div>

            {/* Accommodation Grid */}
            <div className="space-y-12">
              {filtered.map((item, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={item.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DDD3] shadow-xs ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } relative h-72 sm:h-80 rounded-xl overflow-hidden`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } space-y-4`}
                    >
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#1E1A17]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                          Signature Amenities:
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                          {item.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#97692D]" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setEnquiryOpen(true)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#97692D] hover:text-[#7D521F] underline underline-offset-4"
                        >
                          <span>Inquire Availability for {item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="RESERVE YOUR STAY"
          title="Experience Bespoke Hospitality"
          subtitle="Speak with our private reservations desk to curate your upcoming luxury accommodation."
          buttonText="Contact Reservations"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-stays" />
    </div>
  );
}

