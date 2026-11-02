"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#FAF5F1] border-t border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center relative z-10">
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#97692D] uppercase block mb-2">
          {kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E1A17] tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[#5C5550] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          {subtitle}
        </p>

        <div className="inline-block">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8C5E2D] hover:bg-[#774E23] text-white text-sm font-medium tracking-wide rounded-md shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Atmospheric misty mountain landscape at bottom matching reference */}
      <div className="relative w-full h-36 sm:h-52 md:h-64 mt-4">
        <Image
          src="/images/bottom-cta.jpg"
          alt="Misty Mountain Highland"
          fill
          className="object-cover object-top opacity-90"
        />
        {/* Soft gradient blend into top cream background */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FAF5F1]/30 to-[#FAF5F1]" />
      </div>
    </section>
  );
}
