"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Cog,
  Building,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Compass,
  FileCheck2,
  Users2,
  Rocket
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";

export default function SolutionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const services = [
    {
      icon: <Layers className="w-6 h-6 text-[#97692D]" />,
      title: "Hospitality Management",
      desc: "Full-service hotel and resort operating contracts. We assume end-to-end management, standardizing guest satisfaction, optimizing staff performance, and maximizing asset longevity.",
      deliverables: ["P&L Responsibility & Financial Governance", "General Manager & Executive Placement", "Brand Standard Audits & Quality Control", "Transparent Owner Reporting Dashboards"]
    },
    {
      icon: <Cog className="w-6 h-6 text-[#97692D]" />,
      title: "Operations Management",
      desc: "Institutional operational rigour covering food & beverage cost controls, housekeeping protocols, preventative engineering maintenance, and digital staff training systems.",
      deliverables: ["Standard Operating Procedures (SOPs)", "Supply Chain & Vendor Procurement", "Energy & Waste Efficiency Audits", "Workforce Empowerment & Retention"]
    },
    {
      icon: <Building className="w-6 h-6 text-[#97692D]" />,
      title: "Hospitality Development & Technical Advisory",
      desc: "Guiding owners and developers from greenfield land acquisition to architectural master planning, interior design coordination, and timely project delivery.",
      deliverables: ["Architectural Program Briefs & Space Planning", "MEP & Kitchen Engineering Oversight", "FF&E and OS&E Sourcing & Budgeting", "Contractor & Consultant Coordination"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#97692D]" />,
      title: "Hospitality Consulting & Feasibility",
      desc: "Data-driven market feasibility studies, highest-and-best-use asset analysis, competitor benchmarking, and financial yield projections for prospective ventures.",
      deliverables: ["Demographic & Competitive Field Research", "10-Year Pro Forma Financial Modeling", "Investment Teaser & Capital Deck Advisory", "Risk Mitigation & Phasing Strategies"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#97692D]" />,
      title: "Revenue Management & Yield Optimization",
      desc: "Dynamic algorithmic pricing models, channel management, direct-booking conversion engine optimization, and distribution contract negotiations with global OTAs.",
      deliverables: ["Algorithmic Daily RevPAR Optimization", "Direct Web Booking Engine Enhancement", "GDS & Global Corporate Rate Agreements", "Market Share Index (MPI/RGI) Tracking"]
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#97692D]" />,
      title: "Pre-Opening Turnkey Services",
      desc: "Flawless countdown orchestrations ensuring your property opens on schedule with trained personnel, compliant licenses, operating collateral, and initial market buzz.",
      deliverables: ["180-Day Critical Path Countdown Timeline", "Full-Staff Recruitment & Immersion Bootcamps", "Trial Soft-Launch & Dry-Run Simulations", "Regulatory & Fire Life Safety Clearances"]
    },
    {
      icon: <Compass className="w-6 h-6 text-[#97692D]" />,
      title: "Branding, Concept & Marketing",
      desc: "Creating magnetic brand identities, culinary concept narratives, visual direction, digital marketing funnels, and high-impact PR launch campaigns.",
      deliverables: ["Visual Identity, Logo & Brand Guidelines", "Culinary Menu Storytelling & Collateral", "Editorial Photography & Cinematography Direction", "Global Luxury Travel Media Relations"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[68px]">
        {/* Solutions Hero */}
        <section className="relative py-16 sm:py-24 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                  B2B HOSPITALITY ADVISORY &amp; ASSET MANAGEMENT
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1E1A17] tracking-tight leading-[1.1]">
                  Star Hospitality Solutions: End-to-End Asset Value Creation.
                </h1>
                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed max-w-xl">
                  We partner with property owners, real estate developers, private equity funds, and family offices to conceptualize, construct, operate, and maximize the commercial yield of luxury hospitality destinations.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-6 py-3 bg-[#97692D] hover:bg-[#7D521F] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs transition-colors"
                  >
                    Request Advisory Consultation
                  </button>
                  <a
                    href="#services"
                    className="px-6 py-3 bg-white border border-[#D8D0C6] hover:border-[#97692D] text-[#1E1A17] text-xs sm:text-sm font-medium tracking-wide rounded transition-colors"
                  >
                    Explore 7 Core Services
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#E5DDD3]">
                <Image
                  src="/images/solutions-consulting.jpg"
                  alt="Star Hospitality Solutions Boardroom Consultation"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Value Proposition for Owners */}
        <section className="py-16 sm:py-20 bg-[#F3EEE8] border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                THE OWNER PROPOSITION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Why Property Developers Entrust Their Assets to Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-[#E5DDD3] space-y-3">
                <div className="text-3xl font-serif font-bold text-[#97692D]">
                  +34%
                </div>
                <h3 className="font-serif text-xl text-[#1E1A17] font-medium">
                  Average RevPAR Outperformance
                </h3>
                <p className="text-xs text-[#5C5550] leading-relaxed">
                  Through proprietary algorithmic revenue management, direct-booking channel leverage, and premium market positioning.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-[#E5DDD3] space-y-3">
                <div className="text-3xl font-serif font-bold text-[#97692D]">
                  Zero
                </div>
                <h3 className="font-serif text-xl text-[#1E1A17] font-medium">
                  Pre-Opening Delays
                </h3>
                <p className="text-xs text-[#5C5550] leading-relaxed">
                  Rigid 180-day critical path milestones guarantee smooth technical handovers, timely licensing, and trained operational teams.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-[#E5DDD3] space-y-3">
                <div className="text-3xl font-serif font-bold text-[#97692D]">
                  100%
                </div>
                <h3 className="font-serif text-xl text-[#1E1A17] font-medium">
                  Fiduciary Alignment
                </h3>
                <p className="text-xs text-[#5C5550] leading-relaxed">
                  We structure owner-first performance-linked incentive models that directly harmonize our operating success with your net profit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Core Services Breakdown */}
        <section id="services" className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                COMPLETE SERVICE SPECTRUM
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Comprehensive B2B Hospitality Solutions
              </h2>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="p-8 bg-white rounded-2xl border border-[#E5DDD3] shadow-xs hover:border-[#97692D] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#FAF5F1] border border-[#E5DDD3] flex items-center justify-center shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#97692D]">
                            Service 0{index + 1}
                          </span>
                          <h3 className="text-2xl font-serif text-[#1E1A17]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed pt-1">
                        {service.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-7 bg-[#FAF5F1] p-6 rounded-xl border border-[#E5DDD3] space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1A17] block mb-2">
                        Key Deliverables &amp; Scope:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5C5550]">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#97692D] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Enquiry Section */}
        <section className="py-16 sm:py-20 bg-[#F5EFEB] border-t border-[#E5DDD3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
              SCHEDULE A CONFIDENTIAL DISCUSSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17]">
              Ready to Maximize the Potential of Your Hospitality Asset?
            </h2>
            <p className="text-sm text-[#5C5550] max-w-xl mx-auto leading-relaxed">
              Our development advisory board is ready to review your property concept, audit existing operations, or structure a high-yield operating partnership.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-8 py-3.5 bg-[#1E1A17] hover:bg-[#97692D] text-white text-sm font-medium tracking-wide rounded shadow-md transition-colors inline-flex items-center gap-2"
              >
                <span>Submit Development Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="PARTNER WITH US"
          title="Build. Operate. Grow."
          subtitle="Your Hospitality Partner, from Concept to Operations."
          buttonText="Connect with Us"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultSegment="hospitality-solutions" defaultType="solutions" />
    </div>
  );
}
