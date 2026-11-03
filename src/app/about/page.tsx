"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles, HeartHandshake, Eye, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#97692D]" />,
      title: "Uncompromising Excellence",
      desc: "Every touchpoint &mdash; from the thread count of our linens to the provenance of our microgreens &mdash; is refined with meticulous devotion."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#97692D]" />,
      title: "Intuitive Warmth",
      desc: "True luxury is never aloof; it is anticipatory, heartfelt, and deeply personal, making every guest feel uniquely honored."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#97692D]" />,
      title: "Sense of Place",
      desc: "We honor the native soil, local artisans, indigenous flora, and vernacular architecture of every destination we inhabit."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#97692D]" />,
      title: "Fiduciary Stewardship",
      desc: "We build lasting economic and generational value for property owners, institutional investors, and local communities alike."
    }
  ];

  const milestones = [
    { year: "2014", title: "The Foundation", desc: "Star Hospitalities established with a single visionary highland retreat in southern India." },
    { year: "2018", title: "Division Expansion", desc: "Inaugurated Star Dining and Star Wellness, creating an integrated holistic lifestyle ecosystem." },
    { year: "2021", title: "Launch of Solutions", desc: "Formed Star Hospitality Solutions to advise external hotel developers and institutional owners." },
    { year: "2024", title: "Seven Pillars of Hospitality", desc: "Consolidated all seven business divisions into one unified national and global parent portfolio." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* About Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="ABOUT STAR HOSPITALITIES"
          titleLine1="A Legacy of Destinations."
          titleLine2="Delivering Experiences."
          description="Star Hospitalities is an integrated multi-segment hospitality group. We conceive, design, develop, and operate high-performing hospitality brands across hotels, destination retreats, fine dining, private events, holistic wellness, and asset advisory."
          imageSrc="/images/ai-mountains-banner.jpg"
          imageAlt="Star Hospitalities Scenic Mountain Estates and Hospitality Destinations"
          primaryCta={{
            label: "Explore Our Portfolio",
            href: "/segments"
          }}
          secondaryCta={{
            label: "Partner With Us",
            onClick: () => setEnquiryOpen(true)
          }}
        />

        {/* Who We Are & Visual Grid */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Star Hospitalities Estate Architecture"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                    WHO WE ARE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                    Beyond Traditional Hospitality: A Unified Collective
                  </h2>
                </div>
                <p className="text-sm text-[#5C5550] leading-relaxed">
                  Unlike standalone hotel operators, Star Hospitalities serves as a unified umbrella group. We bring seven specialized hospitality disciplines under one cohesive brand architecture.
                </p>
                <p className="text-sm text-[#5C5550] leading-relaxed">
                  From the serene solitude of our mountain sanctuaries to the high-energy culinary ateliers of our metropolitan restaurants, each property shares our uncompromising commitment to architectural distinction, intuitive service, and environmental stewardship.
                </p>

                <div className="pt-2 flex items-center gap-6">
                  <div className="border-l-2 border-[#97692D] pl-4">
                    <div className="text-2xl font-serif font-bold text-[#1E1A17]">7</div>
                    <div className="text-xs text-[#5C5550] uppercase tracking-wider">Hospitality Verticals</div>
                  </div>
                  <div className="border-l-2 border-[#97692D] pl-4">
                    <div className="text-2xl font-serif font-bold text-[#1E1A17]">10+</div>
                    <div className="text-xs text-[#5C5550] uppercase tracking-wider">Years of Heritage</div>
                  </div>
                  <div className="border-l-2 border-[#97692D] pl-4">
                    <div className="text-2xl font-serif font-bold text-[#1E1A17]">98%</div>
                    <div className="text-xs text-[#5C5550] uppercase tracking-wider">Guest Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 bg-[#F3EEE8] border-y border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <div className="p-8 sm:p-10 bg-white rounded-2xl border border-[#E5DDD3] shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] text-[#97692D] flex items-center justify-center">
                  <Eye className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                  OUR VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1E1A17]">
                  To Be the Benchmark for Conscious Luxury in Global Hospitality
                </h3>
                <p className="text-sm text-[#5C5550] leading-relaxed">
                  We envision a world where luxury travel is regenerative rather than extractive &mdash; where destinations nurture both the traveler's spirit and the ecology of the host land, establishing a timeless legacy of beauty, hospitality, and shared prosperity.
                </p>
              </div>

              {/* Mission */}
              <div className="p-8 sm:p-10 bg-white rounded-2xl border border-[#E5DDD3] shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] text-[#97692D] flex items-center justify-center">
                  <Target className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                  OUR MISSION
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1E1A17]">
                  Transforming Spaces into Inspiring, High-Performing Destinations
                </h3>
                <p className="text-sm text-[#5C5550] leading-relaxed">
                  To conceive, build, and operate exceptional hospitality destinations that deliver unparalleled guest experiences, cultivate empathetic leadership, and generate superior, sustainable financial returns for our partners and investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach & Core Values */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                OUR CORE VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                The Principles that Guide Every Decision
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-6 bg-white rounded-xl border border-[#E5DDD3] shadow-xs hover:border-[#97692D] transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF5F1] flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#1E1A17] font-medium">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#5C5550] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="py-16 sm:py-20 bg-[#F5EFEB] border-t border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                A Decade of Thoughtful Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {milestones.map((m) => (
                <div key={m.year} className="bg-white p-6 rounded-xl border border-[#E5DDD3] space-y-2">
                  <div className="text-2xl font-serif font-bold text-[#97692D]">
                    {m.year}
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#1E1A17]">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#5C5550] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="PARTNER WITH STAR HOSPITALITIES"
          title="Build. Operate. Grow."
          subtitle="Collaborate with our executive leadership team to shape the future of luxury hospitality."
          buttonText="Begin Partnership"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}

