"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, MapPin, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import StarLogo from "./StarLogo";

export type SubmissionCategory = "visit" | "booking" | "inquiry";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSegment?: string;
  defaultType?: SubmissionCategory | "general" | "solutions";
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultSegment = "",
  defaultType = "visit"
}: EnquiryModalProps) {
  // Normalize defaultType
  const initialCategory: SubmissionCategory =
    defaultType === "booking"
      ? "booking"
      : defaultType === "visit"
        ? "visit"
        : "inquiry";

  const [activeCategory, setActiveCategory] = useState<SubmissionCategory>(initialCategory);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    option: defaultSegment || "both-lawns",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultSegment) {
      setFormData(prev => ({ ...prev, option: defaultSegment }));
    }
    if (defaultType) {
      const normalized: SubmissionCategory =
        defaultType === "booking"
          ? "booking"
          : defaultType === "visit"
            ? "visit"
            : "inquiry";
      setActiveCategory(normalized);
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, defaultSegment, defaultType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/40 backdrop-blur-md animate-in fade-in duration-200">
      {/* Light Glassmorphic Modal */}
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white/98 backdrop-blur-2xl border border-stone-200/90 shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 sm:py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-600 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-black mb-2">
              {activeCategory === "visit" && "Sunset Walkthrough Requested"}
              {activeCategory === "booking" && "Booking Request Received"}
              {activeCategory === "inquiry" && "Inquiry Received"}
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
              {activeCategory === "visit" &&
                "Thank you! Our concierge will connect with you within 24 hours to confirm your private walkthrough at Star Aquavillas."}
              {activeCategory === "booking" &&
                "Thank you! Our reservations team will review your requested dates and venue selection and get back to you with availability."}
              {activeCategory === "inquiry" &&
                "Thank you for reaching out to Star Hospitalities. Our concierge will review your questions and provide detailed information shortly."}
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#1E1A17] text-white font-bold rounded-full text-xs sm:text-sm hover:bg-[#8C5E2D] transition-colors cursor-pointer shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-4 sm:mb-6 pr-6">
              <StarLogo variant="dark" size="sm" className="mb-2.5 sm:mb-3.5" />
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-black tracking-tight leading-tight">
                {activeCategory === "visit" && "Schedule a Site Visit"}
                {activeCategory === "booking" && "Book Venue Directly"}
                {activeCategory === "inquiry" && "General Inquiries & Solutions"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 sm:mt-1.5 leading-relaxed">
                {activeCategory === "visit" &&
                  "Experience the lakeside lawns, waterside gazebo, tree house, and villa suites in person during our evening golden hour."}
                {activeCategory === "booking" &&
                  "Directly reserve dates for your wedding, reception, corporate gala, or private tree house stay."}
                {activeCategory === "inquiry" &&
                  "Explore our tailored event planning, catering options, photography shoots, or ask our concierge any question."}
              </p>
            </div>

            {/* 3 Explicit Categories for Form Submission */}
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-zinc-100 rounded-xl sm:rounded-2xl border border-zinc-200/80 mb-5 text-[10px] sm:text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveCategory("visit")}
                className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeCategory === "visit"
                    ? "bg-white text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                <span className="truncate sm:overflow-visible">Visit &amp; Explore</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("booking")}
                className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeCategory === "booking"
                    ? "bg-white text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                <span className="truncate sm:overflow-visible">Book Directly</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("inquiry")}
                className={`py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  activeCategory === "inquiry"
                    ? "bg-white text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                <span className="truncate sm:overflow-visible">General Inquiry</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@example.com"
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                    {activeCategory === "visit" ? "Preferred Visit Date" : "Preferred Event Date"}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-medium cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                  {activeCategory === "visit" && "Preferred Area to Explore *"}
                  {activeCategory === "booking" && "Select Venue to Book *"}
                  {activeCategory === "inquiry" && "Area of Interest / Service *"}
                </label>

                {activeCategory === "visit" && (
                  <select
                    value={formData.option}
                    onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-medium cursor-pointer"
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
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-medium cursor-pointer"
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
                    className="w-full px-4 py-2.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-medium cursor-pointer"
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
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-600 mb-1 font-bold">
                  {activeCategory === "visit" && "Visit Notes / Preferred Walkthrough Time"}
                  {activeCategory === "booking" && "Expected Guest Count & Celebration Details"}
                  {activeCategory === "inquiry" && "Your Message / Question"}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    activeCategory === "visit"
                      ? "Tell us how many people will be visiting, or your preferred arrival time..."
                      : activeCategory === "booking"
                        ? "Expected guest count, celebration format (wedding, reception, stay), or special arrangements..."
                        : "Describe what you would like to know about our venues, services, or packages..."
                  }
                  className="w-full p-3.5 bg-white border border-zinc-300 rounded-xl text-base sm:text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#1E1A17] hover:bg-[#8C5E2D] text-white font-bold rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <span>
                        {activeCategory === "visit" && "Request Site Visit & Tour"}
                        {activeCategory === "booking" && "Submit Direct Booking Request"}
                        {activeCategory === "inquiry" && "Send General Inquiry"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
