"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import HeroVideoBackground, { HeroVideoBackgroundHandle } from "@/components/HeroVideoBackground";
import AquavillaSection from "@/components/AquavillaSection";
import { HERO_CONFIG } from "@/config/heroVideo";
import {
  RESORT_HERO_SCENES,
  getResortSceneForTime,
  RESORT_OCCASIONS,
  RESORT_SERVICES,
  RESORT_SOLUTIONS,
  ResortHeroScene
} from "@/config/resortData";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryVenue, setEnquiryVenue] = useState("both-lawns");
  const [showHeroText, setShowHeroText] = useState(true);

  // Video scene synchronization
  const heroVideoRef = useRef<HeroVideoBackgroundHandle>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const activeScene: ResortHeroScene = RESORT_HERO_SCENES[activeSceneIndex] || RESORT_HERO_SCENES[0];

  const openEnquiry = (venueKey = "both-lawns") => {
    setEnquiryVenue(venueKey);
    setEnquiryOpen(true);
  };

  const handleVideoTimeUpdate = (currentTime: number) => {
    const matchingScene = getResortSceneForTime(currentTime);
    if (matchingScene.index !== activeSceneIndex) {
      const isLooping = matchingScene.index === 0 && activeSceneIndex === RESORT_HERO_SCENES.length - 1;
      const nextDir = isLooping || matchingScene.index > activeSceneIndex ? "down" : "up";
      setDirection(nextDir);
      setActiveSceneIndex(matchingScene.index);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#8C5E2D]/20 selection:text-[#1E1A17]">
      {/* Header */}
      <Header onOpenEnquiry={() => openEnquiry(activeScene.venueKey)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* HERO SECTION — Video Background Synchronized with Resort Categories/Tags */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center sm:justify-end text-center overflow-hidden pt-20 pb-10 sm:pt-0 sm:pb-14 px-4"
        >
          {/* Ambient Video Background */}
          <HeroVideoBackground
            ref={heroVideoRef}
            videoUrl={HERO_CONFIG.videoUrl}
            liveStreamUrl={HERO_CONFIG.liveStreamUrl}
            posterUrl={HERO_CONFIG.posterUrl}
            onTimeUpdate={handleVideoTimeUpdate}
            onVideoReady={() => setShowHeroText(true)}
          />

          {/* Hero Content — Centered on Mobile, Bottom-Aligned on Desktop */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-10 py-5 sm:py-8 rounded-2xl sm:rounded-3xl glass-blur-100 flex flex-col items-center mb-0 sm:mb-4 transition-all duration-700">
            {/* Interactive Scene Navigation Indicators */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {RESORT_HERO_SCENES.map((scene, idx) => {
                const isActive = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => {
                      heroVideoRef.current?.seekTo(scene.startTime + 0.1);
                      setDirection(idx > activeSceneIndex ? "down" : "up");
                      setActiveSceneIndex(idx);
                    }}
                    aria-label={`Jump to ${scene.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-7 sm:w-9 bg-white shadow-sm"
                        : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/75"
                    }`}
                    title={scene.title}
                  />
                );
              })}
            </div>

            <div
              key={`${activeScene.id}-${direction}`}
              className={`flex flex-col items-center text-center ${
                direction === "down" ? "animate-hero-slide-up" : "animate-hero-slide-down"
              }`}
            >
              {/* 1. Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2.5 sm:mb-3 select-none font-serif drop-shadow-lg leading-tight">
                {activeScene.title}
              </h1>

              {/* 2. Description */}
              <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto font-normal leading-relaxed px-2 select-none drop-shadow-md">
                {activeScene.subtitle}
              </p>

              {/* 3. Buttons */}
              <div className="pt-5 sm:pt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => openEnquiry(activeScene.venueKey)}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer group"
                >
                  <span>Book This Venue</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-950 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
                <a
                  href="#aquavilla-experience"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer backdrop-blur-xs"
                >
                  <span>Explore Spaces</span>
                </a>
              </div>
            </div>
          </div>

          {/* Architectural Subtle Border */}
          <div className="absolute inset-x-0 bottom-0 border-b border-[#E5DDD3] z-10" />
        </section>

        {/* ========================================================================= */}
        {/* STAR AQUA VILLAS — Primary Experience & Venue Showcase                    */}
        {/* ========================================================================= */}
        <AquavillaSection onOpenEnquiry={(v) => openEnquiry(v || activeScene.venueKey)} />

        {/* ========================================================================= */}
        {/* SOLUTIONS YOU GET WITH STAR HOSPITALITIES                                 */}
        {/* ========================================================================= */}
        <section id="solutions" className="py-16 sm:py-24 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E1A17] font-serif leading-tight">
                  Tailored Event &amp; Celebration Solutions
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#5C5550] mt-3">
                  When you choose Star Hospitalities, you don&apos;t just book a lawn — you get a comprehensive, turnkey celebration solution tailored to your vision with in-house catering, decor, and villa stay inclusions.
                </p>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1A17] hover:bg-[#8C5E2D] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shrink-0 cursor-pointer"
              >
                <span>View Full Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Solutions Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESORT_SOLUTIONS.slice(0, 4).map((sol) => (
                <div
                  key={sol.id}
                  className="bg-white border border-[#E5DDD3] hover:border-[#8C5E2D]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg space-y-5"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-[#1E1A17] group-hover:text-[#8C5E2D] transition-colors leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-[#5C5550] line-clamp-3 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5DDD3] space-y-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8278] block">What&apos;s Included:</span>
                    <div className="space-y-1.5">
                      {sol.deliverables.slice(0, 3).map((item) => (
                        <div key={item} className="text-xs text-[#1E1A17] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C5E2D] shrink-0 mt-1" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link
                        href={`/solutions#${sol.anchor}`}
                        className="text-xs font-bold text-[#8C5E2D] group-hover:underline inline-flex items-center gap-1"
                      >
                        <span>Learn details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OPEN FOR EVERY OCCASION — From Page 6 of Brochure                         */}
        {/* ========================================================================= */}
        <section id="occasions" className="py-16 sm:py-24 bg-white border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E1A17] font-serif">
                Open for Every Occasion
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5C5550] mt-3">
                From fairytale open-air weddings and vibrant sangeets to pre-wedding shoots, sunset cocktails, and intimate stays.
              </p>
            </div>

            {/* Occasions Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
              {RESORT_OCCASIONS.map((occ) => (
                <div
                  key={occ}
                  className="p-4 rounded-xl bg-[#FAF5F1] border border-[#E5DDD3] hover:border-[#8C5E2D]/60 hover:bg-[#FAF5F1]/80 transition-all text-center group shadow-2xs"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#1E1A17] group-hover:text-[#8C5E2D] transition-colors font-serif">
                    {occ}
                  </span>
                </div>
              ))}
            </div>

            {/* 4 In-House Services Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESORT_SERVICES.map((serv) => (
                <div
                  key={serv.title}
                  className="p-6 rounded-2xl bg-white border border-[#E5DDD3] hover:border-[#8C5E2D]/50 space-y-3 shadow-xs hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-serif font-bold text-[#1E1A17]">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COME AND SEE IT AT SUNSET — Direct from PDF Page 6                        */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#090C10] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/resorts-hero.jpg"
              alt="Star Aqua Villas Sunset"
              fill
              className="object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-[#090C10]/80 to-[#090C10]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Come and See It at Sunset
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              The lawns look best in the evening light. Get in touch to arrange a private visit and receive a personalised quote for your celebration.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openEnquiry("general-inquiry")}
                className="px-8 sm:px-10 py-4 bg-white hover:bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full shadow-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                Schedule Sunset Tour
              </button>
              <a
                href="tel:+918041234567"
                className="px-8 sm:px-10 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer"
              >
                Call Concierge
              </a>
            </div>

            <div className="pt-8 text-xs text-zinc-400 flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Kumbalagodu, Mysore Road, South West Bengaluru</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultSegment={enquiryVenue}
        defaultType="booking"
      />
    </div>
  );
}
