"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2, Heart, Sparkles, Sun, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function StarWellnessPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const programs = [
    {
      title: "Ayurvedic Panchakarma Sanctuaries",
      desc: "Doctor-supervised traditional detoxifications, customized herbal medicated oils, steam herbal baths, and personalized constitutional dosha balancing.",
      image: "/images/wellness-herbal.jpg",
      duration: "7, 14, or 21-Day Immersions",
      features: ["On-site Ayurvedic Vaidya Consultations", "Customized Organic Herbal Elixirs", "Herbal Poultice & Abhyanga Therapies", "Dosha-Specific Sattvic Nutrition"]
    },
    {
      title: "Forest Spa Rituals & Hydrotherapy",
      desc: "Private pavilions nestled among fragrant eucalyptus and jasmine groves, featuring cedar hot tubs, cold plunge pools, and mineral-infused mud wraps.",
      image: "/images/wellness-spa.jpg",
      duration: "Day Journeys & Weekend Passes",
      features: ["Outdoor Sunken Cedar Hydro Tubs", "Himalayan Pink Salt Inhalation Room", "Volcanic Warm Stone Massages", "Organic Wildflower Facials"]
    },
    {
      title: "Yoga & Pranayama Pavilions",
      desc: "Cantilevered open-timber shalas overlooking sunrise mountain peaks, offering traditional Hatha, Ashtanga, and restorative Yin yoga.",
      image: "/images/wellness-yoga.jpg",
      duration: "Daily Sunrise & Sunset Sessions",
      features: ["Resident Master Yogis", "Breathwork & Pranayama Training", "Private One-on-One Alignment", "Alignment Props & Tibetan Mats"]
    },
    {
      title: "Sound Meditation & Mindful Stillness",
      desc: "Acoustically tuned spherical meditation chambers utilizing Tibetan singing bowls, brass gongs, and guided mindfulness retreats.",
      image: "/images/star-wellness.jpg",
      duration: "Curated Group & Private Journeys",
      features: ["Hand-Hammered Singing Bowls", "Vibrational Sound Bath Immersion", "Guided Zen & Vipassana Retreats", "Forest Shinrin-Yoku Bathing"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Wellness Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="STAR HOSPITALITIES · DIVISION 05"
          titleLine1="Holistic Harmony."
          titleLine2="Mind, Body & Spirit."
          description="Deep rejuvenation rooted in authentic Ayurvedic wisdom, mindful therapies, open-air yoga shalas, and natural thermal healing."
          imageSrc="/images/ai-star-wellness.jpg"
          imageAlt="Star Wellness Ayurvedic Spa Therapy and Natural Rejuvenation"
          primaryCta={{
            label: "Book Wellness Retreat",
            onClick: () => setEnquiryOpen(true)
          }}
          secondaryCta={{
            label: "View Sanctuaries",
            href: "/properties?segment=star-wellness"
          }}
        />

        {/* Programs Showcase */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                HEALING &amp; REJUVENATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Holistic Pathways to Renewal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1E1A17]/80 text-white text-xs px-3 py-1 rounded backdrop-blur-xs">
                      {program.duration}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] group-hover:text-[#97692D] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-[#5C5550] mt-2 leading-relaxed">
                        {program.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] block mb-2">
                        Program Inclusions:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5550]">
                        {program.features.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97692D]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5DDD3]">
                      <button
                        onClick={() => setEnquiryOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#97692D] hover:underline"
                      >
                        <span>Consult Wellness Concierge</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="RESTORATION AWAITS"
          title="Restore Equilibrium and Vitality"
          subtitle="Speak with our resident Ayurvedic doctors to customize your personal rejuvenation journey."
          buttonText="Schedule Consultation"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="star-wellness" />
    </div>
  );
}

