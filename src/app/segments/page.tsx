"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Palmtree, UtensilsCrossed, Calendar, Flower2, Mountain, Layers, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import { SEGMENTS } from "@/data/hospitalityData";

export default function SegmentsOverviewPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState("all");

  const filteredSegments =
    activeSegmentId === "all"
      ? SEGMENTS
      : SEGMENTS.filter((s) => s.id === activeSegmentId);

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[68px]">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                OUR BRAND ARCHITECTURE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1E1A17] tracking-tight leading-[1.1]">
                Seven Distinct Divisions. One Unified Standard.
              </h1>
              <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed max-w-2xl pt-2">
                Star Hospitalities operates seven specialized hospitality divisions, spanning guest-facing luxury hotels, nature escapes, fine gastronomy, milestone events, ancient wellness, wilderness glamping, and institutional B2B advisory.
              </p>
            </div>

            {/* Quick Segment Filter Pill Bar */}
            <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setActiveSegmentId("all")}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-colors ${
                  activeSegmentId === "all"
                    ? "bg-[#1E1A17] text-white shadow-xs"
                    : "bg-[#EFE8DE] text-[#5C5550] hover:text-[#1E1A17]"
                }`}
              >
                All 7 Divisions
              </button>
              {SEGMENTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSegmentId(s.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-colors ${
                    activeSegmentId === s.id
                      ? "bg-[#97692D] text-white shadow-xs"
                      : "bg-[#EFE8DE] text-[#5C5550] hover:text-[#1E1A17]"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Showcase of all 7 Segments */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
            {filteredSegments.map((seg, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={seg.id}
                  id={seg.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3] group`}
                  >
                    <Image
                      src={seg.heroImage || seg.cardImage}
                      alt={seg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1E1A17]/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded font-medium">
                      0{SEGMENTS.findIndex((s) => s.id === seg.id) + 1} &middot; {seg.subtitle}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } space-y-5`}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                        {seg.subtitle}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                        {seg.title}
                      </h2>
                      <p className="font-serif italic text-base sm:text-lg text-[#8C5E2D] mt-1">
                        &ldquo;{seg.tagline}&rdquo;
                      </p>
                    </div>

                    <p className="text-sm text-[#5C5550] leading-relaxed">
                      {seg.description}
                    </p>

                    {/* Subcategories list */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1A17] block mb-2.5">
                        Offerings &amp; Subcategories:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {seg.subcategories.map((sub) => (
                          <div key={sub} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97692D]" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="p-4 bg-[#F2EAE0] rounded-xl border border-[#E5DDD3] space-y-2">
                      {seg.keyHighlights.map((hl) => (
                        <div key={hl.title} className="text-xs">
                          <strong className="text-[#1E1A17] font-medium">{hl.title}: </strong>
                          <span className="text-[#5C5550]">{hl.desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button to dedicated segment page */}
                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href={seg.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#97692D] hover:bg-[#7D521F] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs transition-colors group"
                      >
                        <span>Explore {seg.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <button
                        onClick={() => setEnquiryOpen(true)}
                        className="px-5 py-3 text-xs sm:text-sm text-[#1E1A17] hover:text-[#97692D] font-medium underline underline-offset-4"
                      >
                        Inquire Direct
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="COLLABORATE WITH STAR HOSPITALITIES"
          title="Build. Operate. Grow."
          subtitle="Explore management agreements, franchise licensing, or experiential collaborations."
          buttonText="Partner with Us"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
