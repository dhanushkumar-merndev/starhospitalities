"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, Sparkles, Building, Heart, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";

export default function StarEventsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const venues = [
    {
      title: "Fairytale Destination Weddings",
      desc: "Spectacular open-air mountain amphitheaters, seaside sunset lawns, and palatial floral mandaps designed for once-in-a-lifetime celebrations.",
      image: "/images/events-wedding.jpg",
      capacity: "Up to 1,500 Guests",
      features: ["Custom Floral Architecture", "Bridal Suites & Dressing Salons", "Dedicated Wedding Concierge", "Helipad & Luxury Chauffeur Arrival"]
    },
    {
      title: "Grand Ballrooms & Banquets",
      desc: "Pillarless grand ballrooms featuring crystal chandeliers, integrated acoustics, and customizable stage configurations for milestone galas.",
      image: "/images/events-banquet.jpg",
      capacity: "200 to 1,200 Guests",
      features: ["Pillarless Grand Architecture", "High-Fidelity Surround Acoustics", "Pre-Function Cocktail Foyer", "Bespoke Multi-Course Banqueting"]
    },
    {
      title: "Corporate Summits & Conventions",
      desc: "High-level executive boardrooms and convention facilities with state-of-the-art audiovisual setups, simultaneous translation, and breakout suites.",
      image: "/images/events-corporate.jpg",
      capacity: "50 to 800 Delegates",
      features: ["Interactive 4K Presentation Displays", "Dedicated Tech Director", "Executive VIP Lounge", "Corporate Gastronomy Catering"]
    },
    {
      title: "Private Celebrations & Milestone Galas",
      desc: "Intimate private terraces, cliff pavilions, and estate lawns for anniversaries, birthdays, and private family reunions.",
      image: "/images/events-hero.jpg",
      capacity: "20 to 150 Guests",
      features: ["Private Fireworks Displays", "Personal Sommelier & Bar Team", "Live Acoustic Artists", "Exclusive Estate Buyout Option"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[68px]">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                  STAR HOSPITALITIES &middot; DIVISION 04
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1E1A17] tracking-tight leading-[1.1]">
                  Star Events: Moments of Grandeur, Celebrations of Distinction.
                </h1>
                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed max-w-xl">
                  Spectacular venues, flawless orchestration, and bespoke event styling for fairytale destination weddings, executive conventions, and milestone celebrations.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-6 py-3 bg-[#97692D] hover:bg-[#7D521F] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs transition-colors"
                  >
                    Plan an Event
                  </button>
                  <Link
                    href="/properties?segment=star-events"
                    className="px-6 py-3 bg-white border border-[#D8D0C6] hover:border-[#97692D] text-[#1E1A17] text-xs sm:text-sm font-medium tracking-wide rounded transition-colors"
                  >
                    Explore Venues
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
                <Image
                  src="/images/star-events.jpg"
                  alt="Star Events Mountain Wedding Arch"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venues Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                EVENT SPACES &amp; VENUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Designed for Grand Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venues.map((venue) => (
                <div
                  key={venue.title}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={venue.image}
                      alt={venue.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1E1A17]/80 text-white text-xs px-3 py-1 rounded backdrop-blur-xs">
                      {venue.capacity}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] group-hover:text-[#97692D] transition-colors">
                        {venue.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] mt-2 leading-relaxed">
                        {venue.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                        Event Specifications:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {venue.features.map((item) => (
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
                        <span>Request Proposal &amp; Date Availability</span>
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
          kicker="WEDDINGS & CONVENTIONS"
          title="Bring Your Vision to Life"
          subtitle="Our dedicated event planning concierge coordinates every detail from concept to celebration."
          buttonText="Schedule Event Consultation"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-events" />
    </div>
  );
}
