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
      {/* Header */}
      <Header onOpenEnquiry={() => openEnquiry("", "general")} />

      <main className="flex-grow pt-[64px]">
        {/* ========================================================================= */}
        {/* HERO SECTION — Cinematic, Edge-to-Edge Architectural Composition */}
        {/* Directly reproducing desktop & mobile visual balance from Reference Images */}
        {/* ========================================================================= */}
        <section className="relative w-full min-h-[580px] lg:min-h-[680px] xl:min-h-[740px] flex items-center overflow-hidden bg-[#FAF5F1]">
          {/* Full-Bleed Hero Background Image matching Reference Composition */}
          <div className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
            <Image
              src="/images/hero-ai.jpg"
              alt="Star Hospitalities Luxury Hillside Pavilion and Infinity Pool Overlooking Misty Highland Valley"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right xl:object-center"
            />
            {/* Subtle soft gradient fade on left side for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F1] via-[#FAF5F1]/80 to-transparent to-55% xl:to-50%" />
          </div>

          {/* Left Text Content Container */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full py-12 lg:py-20">
            <div className="max-w-xl xl:max-w-2xl space-y-5 lg:space-y-6">
              {/* Kicker */}
              <div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#8C5E2D] uppercase block">
                  A PREMIUM HOSPITALITY GROUP
                </span>
              </div>

              {/* Main Headline: Line 1 roman, Line 2 italic serif */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-serif leading-[1.08] tracking-tight text-[#1E1A17]">
                <span>Creating Destinations.</span>
                <br />
                <span className="italic font-serif font-normal text-[#1E1A17]">
                  Delivering Experiences.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-[16px] text-[#5C5550] max-w-lg leading-relaxed font-normal">
                Hotels, resorts, dining, events, wellness and more &mdash; crafted for memorable stays and lasting value.
              </p>

              {/* Dual CTA Buttons matching Reference Design */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-4">
                <Link
                  href="/segments"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#8C5E2D] hover:bg-[#774E23] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs hover:shadow-md transition-all duration-200 group"
                >
                  <span>Explore Segments</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => openEnquiry("", "general")}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-[#1E1A17] border border-[#D5CCC0] hover:border-[#8C5E2D] text-xs sm:text-sm font-medium tracking-wide rounded shadow-2xs transition-colors"
                >
                  Talk to Us
                </button>
              </div>

              {/* Mobile Hero Image View (Directly beneath hero text on small screens) */}
              <div className="block lg:hidden pt-4">
                <div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
                  <Image
                    src="/images/hero-ai.jpg"
                    alt="Luxury Hillside Resort Pavilion and Infinity Pool"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Desktop Scroll Down Indicator on bottom left */}
              <div className="hidden lg:flex items-center gap-2 pt-14 text-[#A3998F]">
                <div className="w-[1px] h-10 bg-[#D5CCC0]" />
                <ChevronDown className="w-4 h-4 text-[#8C5E2D]" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR SEGMENTS SECTION — The Star Hospitality Portfolio */}
        {/* Desktop: Exactly 7 high-res cards side by side matching Reference 1 */}
        {/* Mobile: Horizontal list pill cards with high-res thumbnails matching Reference 2 */}
        {/* ========================================================================= */}
        <section id="segments" className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Header: Title on left, subtitle with vertical separator on right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C5E2D] font-semibold flex items-center gap-2 mb-2">
                  <span className="inline-block w-4 h-[1px] bg-[#8C5E2D]"></span>
                  OUR SEGMENTS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif text-[#1E1A17] tracking-tight">
                  The Star Hospitality Portfolio
                </h2>
              </div>

              <div className="md:max-w-md lg:max-w-lg md:border-l md:border-[#D5CCC0] md:pl-6 text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                A diverse portfolio of hospitality offerings, designed to create memorable stays, meaningful experiences and long-term value.
              </div>
            </div>

            {/* DESKTOP VIEW: 7 Distinct High-Res Cards Side-by-Side (Matching Reference 1 exactly) */}
            <div className="hidden lg:grid grid-cols-7 gap-3 xl:gap-3.5">
              {SEGMENTS.map((seg) => (
                <Link
                  key={seg.id}
                  href={seg.link}
                  className="group relative h-[310px] xl:h-[340px] rounded-lg overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-end p-4 border border-[#E5DDD3]/80 bg-[#1E1A17]"
                >
                  {/* High-Resolution AI Generated Card Background Image */}
                  <Image
                    src={seg.cardImage}
                    alt={seg.title}
                    fill
                    sizes="(max-width: 1200px) 15vw, 200px"
                    className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay for optimal title contrast */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3.5">
              {SEGMENTS.map((seg) => (
                <Link
                  key={seg.id}
                  href={seg.link}
                  className="flex items-center justify-between p-4 bg-[#F2EAE0] hover:bg-[#ECE3D7] rounded-xl border border-[#E5DDD3] transition-all group"
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
        <section className="py-16 sm:py-22 bg-[#F3EEE6] border-t border-[#E5DDD3]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C5E2D] font-semibold block mb-2">
                STAR HOSPITALITY SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#1E1A17] tracking-tight mb-3">
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
                  className={`pt-5 sm:pt-0 ${idx > 0 ? "lg:pl-8" : ""} ${idx < 3 ? "lg:pr-8" : ""} space-y-3 group`}
                >
                  <div className="w-11 h-11 rounded-lg bg-white/95 border border-[#E5DDD3] flex items-center justify-center shadow-2xs group-hover:border-[#8C5E2D] transition-colors">
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

            {/* B2B Consultation Action Strip */}
            <div className="mt-12 p-6 sm:p-7 bg-white rounded-xl border border-[#E5DDD3] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div>
                <h4 className="font-serif text-lg sm:text-xl text-[#1E1A17]">
                  Are you an owner, developer, or hospitality investor?
                </h4>
                <p className="text-xs text-[#5C5550] mt-0.5">
                  Schedule a confidential feasibility review or management consultation with our development advisory board.
                </p>
              </div>
              <button
                onClick={() => openEnquiry("hospitality-solutions", "solutions")}
                className="shrink-0 px-6 py-3 bg-[#1E1A17] text-white hover:bg-[#8C5E2D] text-xs font-medium tracking-wide rounded transition-colors"
              >
                Inquire for Solutions
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FEATURED PROPERTIES & DESTINATIONS PREVIEW */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1] border-t border-[#E5DDD3]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C5E2D] font-semibold block mb-2">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROPERTIES.slice(0, 3).map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-60 overflow-hidden">
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

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#5C5550] mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8C5E2D]" />
                        <span>{prop.location}, {prop.stateCountry}</span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#1E1A17] font-medium group-hover:text-[#8C5E2D] transition-colors">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-[#5C5550] mt-2 line-clamp-2 leading-relaxed">
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
        {/* BRAND PHILOSOPHY & WHY CHOOSE STAR HOSPITALITIES */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F5EFEB] border-t border-[#E5DDD3]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-[#E5DDD3]">
                <Image
                  src="/images/ai-mountains-banner.jpg"
                  alt="Architectural Harmony in Mountain Landscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C59B58] font-medium">
                    Sustainable Craftsmanship
                  </span>
                  <p className="font-serif text-lg italic">
                    &ldquo;Architecture that breathes in reverence to the land.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C5E2D] font-semibold block mb-2">
                    OUR BRAND PHILOSOPHY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                    The Art of Curated Hospitality
                  </h2>
                </div>
                <p className="text-sm text-[#5C5550] leading-relaxed">
                  At Star Hospitalities, luxury is not defined by excess, but by intention, authenticity, and enduring memory. Every property under our stewardship is designed as a destination in its own right &mdash; grounded in natural topography, celebrating local heritage, and powered by world-class operational rigour.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-[#E5DDD3]">
                    <div className="w-8 h-8 rounded-md bg-[#FAF5F1] text-[#8C5E2D] flex items-center justify-center mb-2">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#1E1A17] mb-1">
                      Intuitive Service
                    </h4>
                    <p className="text-xs text-[#5C5550] leading-relaxed">
                      Anticipatory, discreet, and deeply personal care tailored to every individual guest.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E5DDD3]">
                    <div className="w-8 h-8 rounded-md bg-[#FAF5F1] text-[#8C5E2D] flex items-center justify-center mb-2">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#1E1A17] mb-1">
                      Asset Integrity
                    </h4>
                    <p className="text-xs text-[#5C5550] leading-relaxed">
                      Institutional financial discipline, yield maximization, and meticulous upkeep for property partners.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E5DDD3]">
                    <div className="w-8 h-8 rounded-md bg-[#FAF5F1] text-[#8C5E2D] flex items-center justify-center mb-2">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#1E1A17] mb-1">
                      Destination Stewardship
                    </h4>
                    <p className="text-xs text-[#5C5550] leading-relaxed">
                      Low-impact footprint, organic estate cultivation, and uplifting surrounding local communities.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E5DDD3]">
                    <div className="w-8 h-8 rounded-md bg-[#FAF5F1] text-[#8C5E2D] flex items-center justify-center mb-2">
                      <Star className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#1E1A17] mb-1">
                      The Star Standard
                    </h4>
                    <p className="text-xs text-[#5C5550] leading-relaxed">
                      Uncompromising quality benchmarks verified across culinary, wellness, and residential details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PARTNER WITH US CTA BANNER — Editorial Luxury Backdrop with Value Strip */}
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
