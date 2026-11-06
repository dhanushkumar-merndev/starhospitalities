"use client";

import React from "react";
import Image from "next/image";

interface CtaBannerProps {
  onOpenEnquiry?: () => void;
  title?: string;
  subtitle?: string;
  kicker?: string;
  buttonText?: string;
}

export default function CtaBanner({
  onOpenEnquiry,
  kicker = "PARTNER WITH US",
  title = "Build. Operate. Grow.",
  subtitle = "Your Hospitality Partner, from Concept to Operations.",
  buttonText = "Connect with Us"
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF5F1] text-[#1E1A17] border-t border-[#E5DDD3]">
      {/* High-Resolution Panoramic Landscape Backdrop with Light Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aquavilla/01_intro_lakeside_aerial.jpg"
          alt="Star Aqua Villas Lakeside Sanctuary Panorama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        {/* Soft, luminous luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F1] via-[#FAF5F1]/85 to-[#FAF5F1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5F1] via-transparent to-[#FAF5F1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        {/* Kicker */}
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#8C5E2D] uppercase block mb-3 font-mono">
          {kicker}
        </span>

        {/* Headline in grand serif */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-[#1E1A17] tracking-tight leading-[1.08] mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#5C5550] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* Interactive CTA Button */}
        <div className="inline-block mb-12">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#1E1A17] text-white hover:bg-[#8C5E2D] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>{buttonText}</span>
          </button>
        </div>

        {/* 3 Value Pillars Strip with Light Glassmorphism */}
        <div className="pt-8 border-t border-[#E5DDD3] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] space-y-1 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-[10px] font-bold tracking-widest text-[#8C5E2D] uppercase block font-mono">Pillar 01</span>
            <div className="text-xs font-bold text-[#1E1A17] uppercase tracking-wider">Concept to Reality</div>
            <p className="text-[11px] text-[#5C5550] leading-relaxed">Turnkey development, space planning &amp; architectural advisory.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] space-y-1 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-[10px] font-bold tracking-widest text-[#8C5E2D] uppercase block font-mono">Pillar 02</span>
            <div className="text-xs font-bold text-[#1E1A17] uppercase tracking-wider">Operational Rigour</div>
            <p className="text-[11px] text-[#5C5550] leading-relaxed">Full property management with 5-star service standards.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] space-y-1 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-[10px] font-bold tracking-widest text-[#8C5E2D] uppercase block font-mono">Pillar 03</span>
            <div className="text-xs font-bold text-[#1E1A17] uppercase tracking-wider">Yield Optimization</div>
            <p className="text-[11px] text-[#5C5550] leading-relaxed">Algorithmic RevPAR growth and long-term asset appreciation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
