"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export interface HeroCta {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export interface PageHeroProps {
  kicker: string;
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
  showScrollIndicator = true,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[680px] xl:min-h-[720px] flex items-center overflow-hidden bg-[#FAF5F1]">
      {/* Full-Bleed Hero Background Image matching Reference Composition */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
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
              {kicker}
            </span>
          </div>

          {/* Main Headline: Line 1 roman, Line 2 italic serif */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-serif leading-[1.08] tracking-tight text-[#1E1A17]">
            <span>{titleLine1}</span>
            {titleLine2 && (
              <>
                <br />
                <span className="italic font-serif font-normal text-[#1E1A17]">
                  {titleLine2}
                </span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-[16px] text-[#5C5550] max-w-lg leading-relaxed font-normal">
            {description}
          </p>

          {/* Dual CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-4">
              {primaryCta && (
                primaryCta.href ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#8C5E2D] hover:bg-[#774E23] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs hover:shadow-md transition-all duration-200 group"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <button
                    onClick={primaryCta.onClick}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#8C5E2D] hover:bg-[#774E23] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs hover:shadow-md transition-all duration-200 group"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )
              )}

              {secondaryCta && (
                secondaryCta.href ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-[#1E1A17] border border-[#D5CCC0] hover:border-[#8C5E2D] text-xs sm:text-sm font-medium tracking-wide rounded shadow-2xs transition-colors"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : (
                  <button
                    onClick={secondaryCta.onClick}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-[#1E1A17] border border-[#D5CCC0] hover:border-[#8C5E2D] text-xs sm:text-sm font-medium tracking-wide rounded shadow-2xs transition-colors"
                  >
                    {secondaryCta.label}
                  </button>
                )
              )}
            </div>
          )}

          {/* Mobile Hero Image View (Directly beneath hero text on small screens) */}
          <div className="block lg:hidden pt-4">
            <div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop Scroll Down Indicator on bottom left */}
          {showScrollIndicator && (
            <div className="hidden lg:flex items-center gap-2 pt-10 text-[#A3998F]">
              <div className="w-[1px] h-10 bg-[#D5CCC0]" />
              <ChevronDown className="w-4 h-4 text-[#8C5E2D]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
