"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface HeroCta {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export interface PageHeroProps {
  kicker?: string;
  titleLine1: string;
  titleLine2?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  showScrollIndicator?: boolean;
}

export default function PageHero({
  kicker,
  titleLine1,
  titleLine2,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center sm:justify-end text-center overflow-hidden pt-20 pb-10 sm:pt-0 sm:pb-14 px-4 bg-[#FAF5F1]">
      {/* Full-Bleed Cinematic Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 select-none overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100"
        />
        {/* Overall cinematic darkening for text clarity & deep colors */}
        <div className="absolute inset-0 bg-black/45 sm:bg-black/40 pointer-events-none" />
        
        {/* Top subtle vignette for clear header / navigation contrast */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none" />

        {/* Deep, smooth bottom gradient covering lower 75% to ensure crisp contrast behind title, description and CTAs */}
        <div className="absolute inset-x-0 bottom-0 h-full sm:h-[70%] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content — Centered on Mobile, Bottom-Aligned on Desktop */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-10 py-5 sm:py-8 rounded-2xl sm:rounded-3xl glass-blur-100 flex flex-col items-center mb-0 sm:mb-4 transition-all duration-700">
        <div className="flex flex-col items-center text-center">
          {/* Optional Kicker */}
          {kicker && (
            <span className="inline-block px-3 py-1 mb-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#DFBE82] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-mono">
              {kicker}
            </span>
          )}

          {/* 1. Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2.5 sm:mb-3 select-none font-serif drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-tight">
            <span>{titleLine1}</span>
            {titleLine2 && <span className="block mt-1 sm:mt-1.5">{titleLine2}</span>}
          </h1>

          {/* 2. Description (Clear, visible, bold typography) */}
          <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed px-2 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            {description}
          </p>

          {/* 3. Action Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="pt-5 sm:pt-6 flex flex-wrap items-center justify-center gap-3">
              {primaryCta && (
                primaryCta.href ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer group"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-950 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <button
                    onClick={primaryCta.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer group"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-950 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                )
              )}

              {secondaryCta && (
                secondaryCta.href ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer backdrop-blur-xs"
                  >
                    <span>{secondaryCta.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={secondaryCta.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer backdrop-blur-xs"
                  >
                    <span>{secondaryCta.label}</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Architectural Subtle Border */}
      <div className="absolute inset-x-0 bottom-0 border-b border-[#E5DDD3] z-10" />
    </section>
  );
}
