"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin, X, Check, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";
import { PROPERTIES, PropertyItem } from "@/data/hospitalityData";

export default function PropertiesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [enquiryPropertyId, setEnquiryPropertyId] = useState("");

  const filteredProperties =
    selectedSegment === "all"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.segmentId === selectedSegment);

  const segments = [
    { id: "all", name: "All Destinations" },
    { id: "star-stays", name: "Star Stays" },
    { id: "star-resorts", name: "Star Resorts" },
    { id: "star-dining", name: "Star Dining" },
    { id: "star-events", name: "Star Events" },
    { id: "star-wellness", name: "Star Wellness" },
    { id: "star-experiences", name: "Star Experiences" }
  ];

  const handleOpenReserve = (prop: PropertyItem) => {
    setEnquiryPropertyId(prop.segmentId);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-[64px]">
        {/* Properties Hero — Matching Home Hero Visual Architecture */}
        <PageHero
          kicker="CURATED PORTFOLIO"
          titleLine1="Signature Properties."
          titleLine2="Prime Destinations."
          description="Explore our portfolio of luxury hotels, panoramic nature retreats, fine dining restaurants, wedding estates, and desert glamping camps across premier destinations."
          imageSrc="/images/hero-ai.jpg"
          imageAlt="Star Hospitalities Luxury Properties and Premier Destinations"
          primaryCta={{
            label: "Browse Collection",
            href: "#collection"
          }}
          secondaryCta={{
            label: "Enquire Availability",
            onClick: () => setEnquiryOpen(true)
          }}
        />

        {/* Filter Buttons Bar */}
        <div id="collection" className="bg-[#FAF5F1] border-b border-[#E5DDD3] py-4 sticky top-[64px] z-20 backdrop-blur-md bg-[#FAF5F1]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setSelectedSegment(seg.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-colors ${
                  selectedSegment === seg.id
                    ? "bg-[#97692D] text-white shadow-xs"
                    : "bg-[#EFE8DE] text-[#5C5550] hover:text-[#1E1A17]"
                }`}
              >
                {seg.name}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={prop.heroImage}
                      alt={prop.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E1A17]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded">
                      {prop.segmentTitle}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 text-[#97692D] text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 fill-[#97692D]" />
                      <span>{prop.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#5C5550] mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#97692D]" />
                        <span>{prop.location}, {prop.stateCountry}</span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#1E1A17] font-medium group-hover:text-[#97692D] transition-colors">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-[#8C5E2D] font-serif italic mt-1">
                        &ldquo;{prop.tagline}&rdquo;
                      </p>
                      <p className="text-xs text-[#5C5550] mt-2.5 line-clamp-3 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>

                    {/* Features pill preview */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {prop.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-[10px] bg-[#FAF5F1] border border-[#E5DDD3] text-[#5C5550] px-2 py-0.5 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[#E5DDD3] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-[#8C8278] block">Starting from</span>
                        <span className="text-sm font-semibold text-[#1E1A17]">{prop.startingPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProperty(prop)}
                          className="px-3 py-1.5 bg-[#FAF5F1] hover:bg-[#EFE8DE] text-[#1E1A17] border border-[#D8D0C6] rounded text-xs font-medium transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleOpenReserve(prop)}
                          className="px-3.5 py-1.5 bg-[#97692D] hover:bg-[#7D521F] text-white rounded text-xs font-medium transition-colors"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-3xl bg-[#FAF5F1] border border-[#E5DDD3] shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 h-72 sm:h-80 relative">
                <div className="sm:col-span-2 relative h-full">
                  <Image
                    src={selectedProperty.gallery[0] || selectedProperty.heroImage}
                    alt={selectedProperty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden sm:grid grid-rows-2 gap-1 h-full">
                  <div className="relative h-full">
                    <Image
                      src={selectedProperty.gallery[1] || selectedProperty.heroImage}
                      alt={selectedProperty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-full">
                    <Image
                      src={selectedProperty.gallery[2] || selectedProperty.heroImage}
                      alt={selectedProperty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#97692D] font-semibold uppercase tracking-wider mb-1">
                    <span>{selectedProperty.segmentTitle}</span>
                    <span>&middot;</span>
                    <span>{selectedProperty.category}</span>
                  </div>
                  <h2 className="text-3xl font-serif text-[#1E1A17]">
                    {selectedProperty.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-[#5C5550] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#97692D]" />
                    <span>{selectedProperty.location}, {selectedProperty.stateCountry}</span>
                  </div>
                </div>

                <p className="text-sm text-[#5C5550] leading-relaxed">
                  {selectedProperty.description}
                </p>

                {/* All Features */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1A17] mb-3">
                    Curated Property Amenities &amp; Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5C5550]">
                    {selectedProperty.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#97692D] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-[#E5DDD3] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#8C8278] block">Pricing Guide</span>
                    <span className="text-lg font-serif font-bold text-[#1E1A17]">{selectedProperty.startingPrice}</span>
                  </div>
                  <button
                    onClick={() => {
                      const prop = selectedProperty;
                      setSelectedProperty(null);
                      handleOpenReserve(prop);
                    }}
                    className="px-6 py-2.5 bg-[#97692D] hover:bg-[#7D521F] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs transition-colors"
                  >
                    Initiate Booking Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="DESTINATION CONCIERGE"
          title="Plan Your Unforgettable Escape"
          subtitle="Our private reservations team will assist with transfers, customized itineraries, and special requests."
          buttonText="Contact Reservations Desk"
        />
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultSegment={enquiryPropertyId}
        defaultType="booking"
      />
    </div>
  );
}

