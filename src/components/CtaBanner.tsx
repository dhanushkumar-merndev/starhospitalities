"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Building2, TrendingUp } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#1E1A17] text-white">
      {/* High-Resolution AI Generated Panoramic Mountain Landscape Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-mountains-banner.jpg"
          alt="Panoramic Misty Mountain Highland at Golden Twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        {/* Multi-layered luxury gradients for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/95 via-[#1A1816]/85 to-[#141210]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141210] via-transparent to-[#141210]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        {/* Kicker */}
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#C59B58] uppercase block mb-3">
          {kicker}
        </span>

        {/* Headline in grand serif */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08] mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#D8D0C6] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* Interactive CTA Button */}
        <div className="inline-block mb-12">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 bg-[#8C5E2D] hover:bg-[#A36F38] text-white text-sm sm:text-base font-medium tracking-wide rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* 3 Value Pillars Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
            <Building2 className="w-5 h-5 text-[#C59B58] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">Concept to Reality</div>
              <p className="text-[11px] text-[#A89F95] mt-0.5">Turnkey development, space planning &amp; architectural advisory.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#C59B58] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">Operational Rigour</div>
              <p className="text-[11px] text-[#A89F95] mt-0.5">Full property management with 5-star service standards.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/5 backdrop-blur-xs border border-white/10">
            <TrendingUp className="w-5 h-5 text-[#C59B58] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">Yield Optimization</div>
              <p className="text-[11px] text-[#A89F95] mt-0.5">Algorithmic RevPAR growth and long-term asset appreciation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
