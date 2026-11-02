"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Bed,
  Palmtree,
  UtensilsCrossed,
  Calendar,
  Flower2,
  Mountain,
  Layers,
  Cog,
  Building,
  TrendingUp,
  MapPin,
  Star,
  ShieldCheck,
  Compass,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import { SEGMENTS, SOLUTIONS_PILLARS, PROPERTIES } from "@/data/hospitalityData";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySegment, setEnquirySegment] = useState("");
  const [enquiryType, setEnquiryType] = useState<"booking" | "solutions" | "general">("general");

  const openEnquiry = (segment = "", type: "booking" | "solutions" | "general" = "general") => {
    setEnquirySegment(segment);
    setEnquiryType(type);
    setEnquiryOpen(true);
  };

  const getMobileCardIcon = (id: string) => {
    switch (id) {
      case "star-stays":
        return <Bed className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "star-resorts":
        return <Palmtree className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "star-dining":
        return <UtensilsCrossed className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "star-events":
        return <Calendar className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "star-wellness":
        return <Flower2 className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "star-experiences":
        return <Mountain className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      default:
        return <Layers className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
    }
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Management":
        return <Layers className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "Operations":
        return <Cog className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "Development":
        return <Building className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      case "Consulting":
        return <TrendingUp className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
      default:
        return <Layers className="w-5 h-5 text-[#8C5E2D] stroke-[1.5]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      {/* Header matching reference */}
      <Header onOpenEnquiry={() => openEnquiry("", "general")} />

      <main className="flex-grow pt-[64px] sm:pt-[70px]">
        {/* ========================================================================= */}
        {/* HERO SECTION — Matching Reference Image 1 (Desktop) & Reference 2 (Mobile) */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#FAF5F1] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Brand kicker, Headline, Subheadline, Buttons */}
              <div className="lg:col-span-5 space-y-5 lg:pr-2">
                {/* Kicker */}
                <div>
                  <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-[#8C5E2D] uppercase block">
                    A PREMIUM HOSPITALITY GROUP
                  </span>
                </div>

                {/* Main Headline: Line 1 roman, Line 2 italic serif */}
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-serif leading-[1.08] tracking-tight text-[#1E1A17]">
                  <span>Creating Destinations.</span>
                  <br />
                  <span className="italic font-serif font-normal">
                    Delivering Experiences.
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xs sm:text-sm md:text-[15px] text-[#5C5550] max-w-md leading-relaxed font-normal">
                  Hotels, resorts, dining, events, wellness and more &mdash; crafted for memorable stays and lasting value.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/segments"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#8C5E2D] hover:bg-[#774E23] text-white text-xs sm:text-[13px] font-medium tracking-wide rounded shadow-xs transition-colors group"
                  >
                    <span>Explore Segments</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => openEnquiry("", "general")}
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white/70 hover:bg-white text-[#1E1A17] border border-[#D5CCC0] text-xs sm:text-[13px] font-medium tracking-wide rounded shadow-2xs transition-colors"
                  >
                    Talk to Us
                  </button>
                </div>

                {/* Desktop subtle vertical scroll line with down chevron on bottom left */}
                <div className="hidden lg:flex items-center gap-2 pt-10 text-[#A3998F]">
                  <div className="w-[1px] h-9 bg-[#D5CCC0]" />
                  <ChevronDown className="w-3.5 h-3.5 text-[#8C5E2D]" />
                </div>
              </div>

              {/* Right Column: Hero Architecture (Terrace overlooking mist valley) */}
              <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
                <Image
                  src="/images/hero-cinematic.jpg"
                  alt="Modern Luxury Resort Pavilion and Infinity Pool Overlooking Misty Highland Valley"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR SEGMENTS SECTION — The Star Hospitality Portfolio */}
        {/* Desktop: Exactly 7 cards side by side matching Reference 1 */}
        {/* Mobile: Horizontal list pill cards matching Reference 2 */}
        {/* ========================================================================= */}
        <section id="segments" className="py-14 sm:py-20 bg-[#FAF5F1] border-t border-[#E5DDD3]/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Header: Title on left, subtitle with vertical separator on right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-4">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C5E2D] font-semibold flex items-center gap-2 mb-2">
                  <span className="inline-block w-4 h-[1px] bg-[#8C5E2D]"></span>
                  OUR SEGMENTS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#1E1A17] tracking-tight">
                  The Star Hospitality Portfolio
                </h2>
              </div>

              <div className="md:max-w-md lg:max-w-lg md:border-l md:border-[#D5CCC0] md:pl-6 text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                A diverse portfolio of hospitality offerings, designed to create memorable stays, meaningful experiences and long-term value.
              </div>
            </div>

            {/* DESKTOP VIEW: 7 Distinct Cards Side-by-Side (Matching Reference 1 exactly) */}
            <div className="hidden lg:grid grid-cols-7 gap-3 xl:gap-3.5">
              {SEGMENTS.map((seg) => (
                <Link
                  key={seg.id}
                  href={seg.link}
                  className="group relative h-[290px] xl:h-[320px] rounded-lg overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-end p-3.5 border border-[#E5DDD3]/80"
                >
                  {/* Card Background Image */}
                  <Image
                    src={seg.cardImage}
                    alt={seg.title}
                    fill
                    sizes="(max-width: 1200px) 15vw, 190px"
                    className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay for legible title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:from-black/90" />

                  {/* Title + Signature Bronze Underline Bar */}
                  <div className="relative z-10 space-y-1.5">
                    <h3 className="font-serif text-base xl:text-lg text-white font-medium tracking-wide">
                      {seg.title}
                    </h3>
                    <div className="w-6 h-[2px] bg-[#97692D] group-hover:w-12 transition-all duration-300" />
                  </div>
                </Link>
              ))}
            </div>

            {/* MOBILE & TABLET VIEW: Pill Cards with Icon, Title, and Thumbnail (Matching Reference 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3">
              {SEGMENTS.map((seg) => (
                <Link
                  key={seg.id}
                  href={seg.link}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-[#F2EAE0] hover:bg-[#ECE3D7] rounded-xl border border-[#E5DDD3] transition-all group"
                >
                  {/* Left: Icon, Title, and Subtitle */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-white/95 border border-[#E5DDD3] flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#8C5E2D] transition-colors">
                      {getMobileCardIcon(seg.id)}
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-[#1E1A17] font-medium leading-snug">
                        {seg.title}
                      </h3>
                      <p className="text-[11px] text-[#6B635B] font-normal">
                        {seg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Rounded Image Thumbnail */}
                  <div className="relative w-24 sm:w-28 h-14 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-[#D5CCC0]">
                    <Image
                      src={seg.mobileThumb || seg.cardImage}
                      alt={seg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAR HOSPITALITY SOLUTIONS — End-to-End Hospitality Expertise */}
        {/* Recreating the 4-column section from Reference 1 & 2 */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#F3EEE6] border-t border-[#E5DDD3]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <div className="max-w-3xl mb-10 sm:mb-12">
              <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C5E2D] font-semibold block mb-2">
                STAR HOSPITALITY SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif text-[#1E1A17] tracking-tight mb-2.5">
                End-to-End Hospitality Expertise
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                Partnering with property owners, investors and hospitality brands to build, operate and grow successful destinations. From planning and development to day-to-day operations, we help build, manage and grow hospitality businesses.
              </p>
            </div>

            {/* 4 Pillars Grid with vertical dividing lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#D5CCC0] divide-y sm:divide-y-0 divide-[#D5CCC0]">
              {SOLUTIONS_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`pt-5 sm:pt-0 ${idx > 0 ? "lg:pl-7" : ""} ${idx < 3 ? "lg:pr-7" : ""} space-y-2.5 group`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/95 border border-[#E5DDD3] flex items-center justify-center shadow-2xs group-hover:border-[#8C5E2D] transition-colors">
                    {getPillarIcon(pillar.title)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#1E1A17] font-medium">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#8C5E2D] font-medium mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-[#5C5550] leading-relaxed">
                    {pillar.desc}
                  </p>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8C5E2D] font-medium hover:underline pt-0.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FEATURED PROPERTIES & DESTINATIONS PREVIEW */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-22 bg-[#FAF5F1] border-t border-[#E5DDD3]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#8C5E2D] font-semibold block mb-1.5">
                  FEATURED SANCTUARIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                  Handcrafted Destinations
                </h2>
              </div>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C5E2D] hover:underline"
              >
                <span>Explore All Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {PROPERTIES.slice(0, 3).map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={prop.heroImage}
                      alt={prop.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E1A17]/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded">
                      {prop.segmentTitle}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 text-[#8C5E2D] text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                      <Star className="w-3 h-3 fill-[#8C5E2D]" />
                      <span>{prop.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#5C5550] mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8C5E2D]" />
                        <span>{prop.location}, {prop.stateCountry}</span>
                      </div>
                      <h3 className="font-serif text-xl text-[#1E1A17] font-medium group-hover:text-[#8C5E2D] transition-colors">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-[#5C5550] mt-1.5 line-clamp-2 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5DDD3] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-[#8C8278] block">From</span>
                        <span className="text-sm font-semibold text-[#1E1A17]">{prop.startingPrice}</span>
                      </div>
                      <button
                        onClick={() => openEnquiry(prop.segmentId, "booking")}
                        className="px-4 py-2 bg-[#FAF5F1] hover:bg-[#8C5E2D] text-[#1E1A17] hover:text-white border border-[#D5CCC0] hover:border-[#8C5E2D] rounded text-xs font-medium transition-colors"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PARTNER WITH US CTA BANNER — Matching Reference Image 2 Bottom */}
        {/* ========================================================================= */}
        <CtaBanner
          onOpenEnquiry={() => openEnquiry("hospitality-solutions", "solutions")}
          kicker="PARTNER WITH US"
          title="Build. Operate. Grow."
          subtitle="Your Hospitality Partner, from Concept to Operations."
          buttonText="Connect with Us"
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultSegment={enquirySegment}
        defaultType={enquiryType}
      />
    </div>
  );
}
