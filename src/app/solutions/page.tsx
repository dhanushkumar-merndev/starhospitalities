"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  MapPin,
  Waves,
  Zap,
  Car,
  UtensilsCrossed,
  ShieldCheck,
  Wifi,
  CalendarCheck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";
import TempleIcon from "@/components/TempleIcon";
import {
  RESORT_SOLUTIONS,
  RESORT_FACILITIES,
  RESORT_PACKAGES
} from "@/config/resortData";

export default function SolutionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedSolutionKey, setSelectedSolutionKey] = useState("both-lawns");

  const openEnquiry = (solutionKey = "both-lawns") => {
    setSelectedSolutionKey(solutionKey);
    setEnquiryOpen(true);
  };

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return MapPin;
      case "Waves":
        return Waves;
      case "Zap":
        return Zap;
      case "Car":
        return Car;
      case "Sparkles":
        return Sparkles;
      case "UtensilsCrossed":
        return UtensilsCrossed;
      case "ShieldCheck":
        return ShieldCheck;
      case "Wifi":
        return Wifi;
      case "CalendarCheck":
        return CalendarCheck;
      case "Temple":
        return TempleIcon;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#8C5E2D]/20 selection:text-[#1E1A17]">
      {/* Header */}
      <Header onOpenEnquiry={() => openEnquiry("both-lawns")} />

      <main className="flex-grow">
        {/* Solutions Page Hero */}
        <PageHero
          kicker="HOSPITALITY & CELEBRATION SOLUTIONS"
          titleLine1="Complete Solutions."
          titleLine2="For Every Celebration."
          description="Turnkey catering, decor, and villa stay inclusions for seamless celebrations at Star Aqua Villas."
          imageSrc="/images/events-hero.jpg"
          imageAlt="Star Hospitalities Turnkey Event and Celebration Solutions"
          primaryCta={{
            label: "Explore Solutions",
            href: "#solutions-grid"
          }}
          secondaryCta={{
            label: "Inquire Availability",
            onClick: () => openEnquiry("both-lawns")
          }}
        />

        {/* ========================================================================= */}
        {/* RESORT FACILITIES & ON-SITE SERVICES                                     */}
        {/* ========================================================================= */}
        <section id="facilities" className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight">
                Everything for an Uninterrupted Celebration
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5C5550] mt-3 leading-relaxed">
                Thoughtfully planned amenities and on-site event services designed for complete peace of mind, guest comfort, and unforgettable memories.
              </p>
            </div>

            {/* 9 Simple Facility Cards with Light Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESORT_FACILITIES.map((facility) => {
                const IconComponent = getFacilityIcon(facility.iconName);
                return (
                  <div
                    key={facility.title}
                    className="p-6 sm:p-7 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] hover:border-[#8C5E2D]/50 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-[#8C5E2D]/10 border border-[#8C5E2D]/20 text-[#8C5E2D] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#8C5E2D]/20 transition-all">
                        <IconComponent className="w-6 h-6 text-[#8C5E2D]" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1E1A17] group-hover:text-[#8C5E2D] transition-colors">
                          {facility.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5C5550] mt-2 leading-relaxed">
                          {facility.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAIN SOLUTIONS BREAKDOWN                                                  */}
        {/* ========================================================================= */}
        <section id="solutions-grid" className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-24 sm:space-y-32">
            {RESORT_SOLUTIONS.map((sol, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={sol.id}
                  id={sol.anchor}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } relative h-[280px] sm:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5DDD3] group bg-stone-100`}
                  >
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } space-y-6`}
                  >
                    <div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight leading-tight">
                        {sol.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#8C5E2D] font-serif italic mt-2">
                        &ldquo;{sol.tagline}&rdquo;
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1E1A17] block">
                        What You Get With This Solution:
                      </span>
                      <div className="space-y-2">
                        {sol.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C5550]">
                            <CheckCircle2 className="w-4 h-4 text-[#8C5E2D] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openEnquiry(sol.id)}
                        className="px-7 py-3.5 bg-[#1E1A17] hover:bg-[#8C5E2D] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-2"
                      >
                        <span>Inquire for {sol.title.split(",")[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CURATED CELEBRATION PACKAGES (Without Prices)                             */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight">
                Curated Celebration Options
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5C5550] mt-3 leading-relaxed">
                Flexible timing slots, sunset cocktails, full event days, and overnight villa retreats designed to suit your bespoke occasion.
              </p>
            </div>

            {/* Packages Grid with Light Glassmorphism */}
            <div className="space-y-12">
              {RESORT_PACKAGES.map((section) => (
                <div key={section.category} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-[#E5DDD3]">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E1A17]">
                      {section.category}
                    </h3>
                    <span className="text-xs text-[#8C5E2D] font-mono mt-1 sm:mt-0 font-bold">
                      {section.note}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] hover:border-[#8C5E2D]/50 transition-all flex flex-col justify-between space-y-4 shadow-xs hover:shadow-lg"
                      >
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8278] font-mono block">
                            {pkg.duration} &bull; {pkg.capacity}
                          </span>
                          <h4 className="text-lg font-serif font-bold text-[#1E1A17]">
                            {pkg.name}
                          </h4>

                          <div className="pt-2 space-y-1.5 border-t border-[#E5DDD3]">
                            {pkg.features.map((f) => (
                              <div key={f} className="text-xs text-[#5C5550] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8C5E2D] shrink-0" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3">
                          <button
                            onClick={() => openEnquiry(pkg.name)}
                            className="w-full py-2.5 rounded-full bg-[#1E1A17] hover:bg-[#8C5E2D] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs"
                          >
                            Inquire Package
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <CtaBanner
          kicker="SCHEDULE A SUNSET VISIT"
          title="Experience the Lawns at Dusk"
          subtitle="The grounds look best in the evening light. Speak with our concierge team to schedule a private walkthrough and receive custom planning guidance."
          buttonText="Schedule Visit"
          onOpenEnquiry={() => openEnquiry("sunset-visit")}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultSegment={selectedSolutionKey}
        defaultType="solutions"
      />
    </div>
  );
}
