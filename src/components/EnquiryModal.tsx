"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Calendar, Users, Building, Phone, Mail, User } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSegment?: string;
  defaultType?: "booking" | "solutions" | "general";
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultSegment = "",
  defaultType = "general"
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: defaultType,
    segment: defaultSegment || "star-stays",
    dates: "",
    guests: "2 Guests",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultSegment) {
      setFormData(prev => ({ ...prev, segment: defaultSegment }));
    }
    if (defaultType) {
      setFormData(prev => ({ ...prev, type: defaultType }));
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
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FAF5F1] border border-[#E5DDD3] shadow-2xl rounded-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5C5550] hover:text-[#1E1A17] hover:bg-[#EFE8DE] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#97692D]/10 text-[#97692D] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#97692D] font-medium mb-1">
              Request Received
            </span>
            <h3 className="text-3xl font-serif text-[#1E1A17] mb-3">Thank You</h3>
            <p className="text-[#5C5550] max-w-md mx-auto text-sm leading-relaxed mb-6">
              Our executive hospitality team has received your enquiry. A dedicated private concierge will reach out to you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#97692D] text-white rounded text-sm font-medium hover:bg-[#7D521F] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#97692D]">
                Star Hospitalities Concierge
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1E1A17] mt-1">
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5550] mt-1">
                Whether you are planning a memorable escape, booking a milestone event, or exploring business collaboration, we are at your service.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#EFE8DE] rounded-lg text-xs font-medium text-[#5C5550]">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "booking" })}
                  className={`py-2 px-3 rounded-md transition-all text-center ${
                    formData.type === "booking"
                      ? "bg-white text-[#1E1A17] shadow-sm font-semibold"
                      : "hover:text-[#1E1A17]"
                  }`}
                >
                  Stay & Resort
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "solutions" })}
                  className={`py-2 px-3 rounded-md transition-all text-center ${
                    formData.type === "solutions"
                      ? "bg-white text-[#1E1A17] shadow-sm font-semibold"
                      : "hover:text-[#1E1A17]"
                  }`}
                >
                  B2B Solutions
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "general" })}
                  className={`py-2 px-3 rounded-md transition-all text-center ${
                    formData.type === "general"
                      ? "bg-white text-[#1E1A17] shadow-sm font-semibold"
                      : "hover:text-[#1E1A17]"
                  }`}
                >
                  General / Press
                </button>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#97692D] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#97692D] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1">
                    Contact Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#97692D] absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 / +1 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1">
                    Division of Interest
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#97692D] absolute left-3 top-3" />
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                    >
                      <option value="star-stays">Star Stays (Hotels & Villas)</option>
                      <option value="star-resorts">Star Resorts (Nature & Eco)</option>
                      <option value="star-dining">Star Dining (Restaurants & Cafés)</option>
                      <option value="star-events">Star Events (Weddings & Summits)</option>
                      <option value="star-wellness">Star Wellness (Spas & Ayurveda)</option>
                      <option value="star-experiences">Star Experiences (Glamping & Tours)</option>
                      <option value="hospitality-solutions">Star Hospitality Solutions (B2B)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1">
                  Message or Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your dates, preferred destinations, property management questions, or event scale..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-sm bg-white border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#5C5550]">
                  Confidential & Privacy Protected.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#97692D] text-white text-sm font-medium rounded hover:bg-[#7D521F] transition-colors shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
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

