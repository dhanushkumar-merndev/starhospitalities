"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Calendar, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [activeCategory, setActiveCategory] = useState<"visit" | "booking" | "inquiry">("visit");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    option: "sunset-walk",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const faqs = [
    {
      q: "How do I schedule a sunset site visit at Star Aquavillas?",
      a: "You can submit an inquiry through our contact form or reach out directly to our concierge desk at +91 (80) 4123 4567. We recommend scheduling visits between 4:30 PM and 6:30 PM so you can experience the lawns, lakefront, and ambient lighting in their finest golden-hour atmosphere."
    },
    {
      q: "Are the private villa rooms always included with lawn bookings?",
      a: "Yes. When you book either Open Lawn Venue or Woodland Retreat, three private luxury air-conditioned villa suites are included. When you book Both Lawns Combined, all three villa rooms and the elevated tree house retreat are exclusively reserved for your family."
    },
    {
      q: "Does Star Hospitalities handle catering and decor in-house?",
      a: "Absolutely. One unified team arranges curated catering (traditional South Indian plantain feasts, royal North Indian buffets, live counters), floral architecture, stage lighting, and sound systems — giving you zero multi-vendor coordination stress."
    },
    {
      q: "Are weekday celebrations and intimate gatherings accommodated?",
      a: "Yes. Monday through Thursday dates offer enhanced date flexibility, unhurried timeline extensions, and exclusive access for intimate weddings, pre-wedding photography shoots, and private corporate retreats."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#8C5E2D]/20 selection:text-[#1E1A17]">
      <Header />

      <main className="flex-grow">
        {/* Contact Hero — Cinematic Full-Bleed matching Homepage */}
        <PageHero
          kicker="RESERVATIONS & CONCIERGE"
          titleLine1="Connect With Us."
          titleLine2="Begin the Journey."
          description="Reach out to our concierge for reservations, sunset walkthroughs, and bespoke celebration planning."
          imageSrc="/images/aquavilla/12_lakefront_gazebo.jpg"
          imageAlt="Star Hospitalities Lakeside Waterside Gazebo at Twilight"
          primaryCta={{
            label: "Send an Inquiry",
            href: "#inquiry-form"
          }}
          secondaryCta={{
            label: "View FAQs",
            href: "#faqs"
          }}
        />

        {/* Contact Grid: Form on Left, Offices on Right — Light Luxury Glassmorphism */}
        <section id="inquiry-form" className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 backdrop-blur-xl bg-white/85 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E5DDD3] shadow-xl">
                {/* Category Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#FAF5F1] rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-bold text-[#5C5550] mb-6 sm:mb-8 border border-[#E5DDD3]">
                  <button
                    type="button"
                    onClick={() => setActiveCategory("visit")}
                    className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all text-center cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                      activeCategory === "visit"
                        ? "bg-white text-[#1E1A17] shadow-xs font-bold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                    <span className="truncate sm:overflow-visible">Visit &amp; Explore</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("booking")}
                    className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all text-center cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                      activeCategory === "booking"
                        ? "bg-white text-[#1E1A17] shadow-xs font-bold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                    <span className="truncate sm:overflow-visible">Book Directly</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("inquiry")}
                    className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all text-center cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                      activeCategory === "inquiry"
                        ? "bg-white text-[#1E1A17] shadow-xs font-bold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                    <span className="truncate sm:overflow-visible">General Inquiry</span>
                  </button>
                </div>

                {submitted ? (
                  <div className="py-14 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17] mb-2">
                      {activeCategory === "visit" && "Sunset Walkthrough Requested"}
                      {activeCategory === "booking" && "Booking Request Received"}
                      {activeCategory === "inquiry" && "Inquiry Transmitted"}
                    </h3>
                    <p className="text-[#5C5550] max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
                      {activeCategory === "visit" &&
                        "Your request for a property walkthrough has been received. Our concierge will reach out within 24 hours to coordinate your arrival."}
                      {activeCategory === "booking" &&
                        "Your booking request has been submitted. Our reservations team will review your chosen venue and dates and contact you promptly."}
                      {activeCategory === "inquiry" &&
                        "Your inquiry has been received by our concierge team. We will respond within 24 business hours to assist you."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3.5 bg-[#1E1A17] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#8C5E2D] transition-colors shadow-md cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17] mb-1.5">
                        {activeCategory === "visit" && "Schedule a Site Visit & Explore"}
                        {activeCategory === "booking" && "Book Venue Directly"}
                        {activeCategory === "inquiry" && "General Inquiries & Solutions"}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C5550]">
                        {activeCategory === "visit" &&
                          "Walk through the lakeside lawns, tree house, and villa suites during our evening golden hour."}
                        {activeCategory === "booking" &&
                          "Directly reserve dates for your wedding, reception, corporate gala, or private tree house stay."}
                        {activeCategory === "inquiry" &&
                          "Ask about turnkey catering, decor, photography packages, pricing, or custom requests."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Julian Montgomery"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] placeholder-stone-400 shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="julian@montgomery.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] placeholder-stone-400 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] placeholder-stone-400 shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                          {activeCategory === "visit" ? "Preferred Visit Date" : "Preferred Event Date"}
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] shadow-2xs font-medium cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                        {activeCategory === "visit" && "Preferred Area to Explore *"}
                        {activeCategory === "booking" && "Select Venue to Book *"}
                        {activeCategory === "inquiry" && "Area of Interest / Service *"}
                      </label>

                      {activeCategory === "visit" && (
                        <select
                          value={formData.option}
                          onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] shadow-2xs font-medium cursor-pointer"
                        >
                          <option value="sunset-walk">Full Property Sunset Walkthrough (5:00 PM Golden Hour)</option>
                          <option value="both-lawns">Both Lawns &amp; Villa Suites Tour</option>
                          <option value="open-lawn">Open Lawn &amp; Lake Frontage Exploration</option>
                          <option value="woodland-retreat">Woodland Retreat &amp; Pavilion Tour</option>
                          <option value="tree-house">Tree House &amp; Canopy Walkthrough</option>
                          <option value="general-visit">Flexible Property Walkthrough (Custom Time)</option>
                        </select>
                      )}

                      {activeCategory === "booking" && (
                        <select
                          value={formData.option}
                          onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] shadow-2xs font-medium cursor-pointer"
                        >
                          <option value="both-lawns">Two Lawns Combined (Up to 750 guests · 3 Villa Rooms + Tree House)</option>
                          <option value="open-lawn">Open Lawn Venue (Up to 320 guests · 3 Villa Rooms)</option>
                          <option value="woodland-retreat">Woodland Retreat (Up to 320 guests · 3 Villa Rooms)</option>
                          <option value="tree-house">Tree House Venue (Stays &amp; Shoots · Up to 60 guests)</option>
                          <option value="full-estate">24-Hour Exclusive Estate Buyout &amp; Stay</option>
                          <option value="photo-shoot">Photo or Film Shoot Slot (4 Hours)</option>
                        </select>
                      )}

                      {activeCategory === "inquiry" && (
                        <select
                          value={formData.option}
                          onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] shadow-2xs font-medium cursor-pointer"
                        >
                          <option value="turnkey-solutions">Turnkey Event Solutions &amp; Inclusions</option>
                          <option value="catering-decor">In-House Catering &amp; Decor Consultation</option>
                          <option value="photography">Photography &amp; Event Planners Package</option>
                          <option value="tailored-quote">Personalized Celebration Proposal</option>
                          <option value="general-assistance">General Concierge Question</option>
                        </select>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5550] mb-1.5 font-mono">
                        {activeCategory === "visit" && "Visit Notes / Preferred Walkthrough Time"}
                        {activeCategory === "booking" && "Expected Guest Count & Celebration Details"}
                        {activeCategory === "inquiry" && "Your Message / Question *"}
                      </label>
                      <textarea
                        rows={4}
                        required={activeCategory === "inquiry"}
                        placeholder={
                          activeCategory === "visit"
                            ? "Tell us how many guests will visit, or any specific venue areas you wish to see..."
                            : activeCategory === "booking"
                              ? "Expected guest count, celebration format (wedding, reception, stay), or special arrangements..."
                              : "Please describe what you would like to know about our venues, services, or packages..."
                        }
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 text-sm bg-white border border-[#E5DDD3] rounded-xl focus:outline-none focus:border-[#8C5E2D] text-[#1E1A17] placeholder-stone-400 shadow-2xs"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <span className="text-xs text-[#8C8278]">
                        Strictly confidential &amp; encrypted.
                      </span>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#1E1A17] hover:bg-[#8C5E2D] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full shadow-md transition-all cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          "Transmitting..."
                        ) : (
                          <>
                            <span>
                              {activeCategory === "visit" && "Schedule Property Visit"}
                              {activeCategory === "booking" && "Submit Booking Request"}
                              {activeCategory === "inquiry" && "Send General Inquiry"}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Office Touchpoints Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="backdrop-blur-xl bg-white/85 p-8 sm:p-10 rounded-3xl border border-[#E5DDD3] shadow-xl space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17]">
                      Star Aquavillas
                    </h3>
                  </div>

                  <div className="space-y-5 text-xs sm:text-sm text-[#5C5550]">
                    <div className="border-l-2 border-[#8C5E2D] pl-4 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-1 font-mono">Estate Location</span>
                      <strong className="text-[#1E1A17] block text-sm">Kumbalagodu, Mysore Road</strong>
                      <span className="text-[#5C5550]">South West Bengaluru, Karnataka 560074</span>
                    </div>

                    <div className="border-l-2 border-[#8C5E2D] pl-4 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-1 font-mono">Reservations &amp; Visits</span>
                      <strong className="text-[#1E1A17] block text-sm">+91 (80) 4123 4567</strong>
                    </div>

                    <div className="border-l-2 border-[#8C5E2D] pl-4 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-1 font-mono">Electronic Inquiries</span>
                      <strong className="text-[#1E1A17] block text-sm">concierge@starhospitalities.com</strong>
                      <span className="text-[#5C5550] text-xs">events@starhospitalities.com</span>
                    </div>

                    <div className="border-l-2 border-[#8C5E2D] pl-4 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-1 font-mono">Site Walkthrough Hours</span>
                      <span className="text-[#1E1A17]">Daily: 10:00 AM – 7:00 PM</span>
                      <span className="block text-[#8C8278] text-xs mt-0.5">Golden-hour sunset tours at 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section with Light Glassmorphism */}
        <section id="faqs" className="py-20 sm:py-28 bg-[#FAF5F1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight">
                Common Inquiries &amp; Information
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/80 rounded-2xl border border-[#E5DDD3] overflow-hidden transition-all shadow-xs hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#1E1A17] hover:text-[#8C5E2D] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C5E2D] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#5C5550] leading-relaxed border-t border-[#E5DDD3] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
