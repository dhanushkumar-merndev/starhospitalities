"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Globe,
  Share2,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"general" | "solutions" | "partnerships">("general");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      q: "How do I make a reservation across Star Stays or Star Resorts?",
      a: "Reservations can be requested directly through our website booking concierge or by speaking with our private guest services desk. We offer flexible arrival services, helicopter charters, and private chef coordination."
    },
    {
      q: "What types of partnership agreements does Star Hospitality Solutions offer?",
      a: "We offer full-service Hotel Management Agreements (HMA), Franchise Licensing, Technical Services Agreements (TSA) during pre-opening/development, and specialized Revenue Management advisory mandates."
    },
    {
      q: "Can I host a destination wedding or private corporate retreat?",
      a: "Yes. Star Events specializes in turnkey weddings, private estate buyouts, and executive retreats. Our team manages spatial design, floral architecture, Michelin-grade banqueting, and guest accommodation logistics."
    },
    {
      q: "What sustainability benchmarks do your eco-resorts adhere to?",
      a: "Our properties emphasize low-impact bioclimatic architecture, solar energy integration, rainwater recharge systems, and zero-single-use-plastic policies, alongside uplifting surrounding local artisans and farmers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
      <Header />

      <main className="flex-grow pt-[68px]">
        {/* Contact Hero */}
        <section className="relative py-16 sm:py-24 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block">
                GLOBAL TOUCHPOINTS &amp; CONCIERGE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1E1A17] tracking-tight leading-[1.1]">
                Connect with Star Hospitalities.
              </h1>
              <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed max-w-2xl pt-2">
                Whether inquiring about reservations, destination weddings, hospitality asset management, or corporate advisory, our executive team is dedicated to your assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid: Form on Left, Offices on Right */}
        <section className="py-16 sm:py-24 bg-[#FAF5F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E5DDD3] shadow-xs">
                {/* Department switcher tabs */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#F2EAE0] rounded-xl text-xs font-medium text-[#5C5550] mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab("general")}
                    className={`py-2 px-3 rounded-lg transition-all text-center ${
                      activeTab === "general"
                        ? "bg-white text-[#1E1A17] shadow-xs font-semibold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    General Inquiries
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("solutions")}
                    className={`py-2 px-3 rounded-lg transition-all text-center ${
                      activeTab === "solutions"
                        ? "bg-white text-[#1E1A17] shadow-xs font-semibold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    Hospitality Solutions
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("partnerships")}
                    className={`py-2 px-3 rounded-lg transition-all text-center ${
                      activeTab === "partnerships"
                        ? "bg-white text-[#1E1A17] shadow-xs font-semibold"
                        : "hover:text-[#1E1A17]"
                    }`}
                  >
                    Partnerships &amp; Media
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#97692D]/10 text-[#97692D] flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#97692D] font-medium mb-1">
                      Message Transmitted
                    </span>
                    <h3 className="text-3xl font-serif text-[#1E1A17] mb-3">Thank You</h3>
                    <p className="text-[#5C5550] max-w-md mx-auto text-sm leading-relaxed mb-6">
                      Your inquiry has been routed to our executive concierge desk. We will respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#97692D] text-white rounded text-sm font-medium hover:bg-[#7D521F] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-serif text-[#1E1A17] mb-1">
                        {activeTab === "general" && "Guest & General Inquiries"}
                        {activeTab === "solutions" && "B2B Solutions & Hotel Asset Management"}
                        {activeTab === "partnerships" && "Investor & Media Collaborations"}
                      </h3>
                      <p className="text-xs text-[#5C5550]">
                        Please fill in the details below and our team will get in touch promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Julian Montgomery"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF5F1] border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="julian@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF5F1] border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 / +1 / +44 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF5F1] border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1.5">
                          Subject / Property Interest
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Resort Booking / Advisory Request"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF5F1] border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#5C5550] mb-1.5">
                        Your Message / Scope Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your dates, property specifications, or business inquiries..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 text-sm bg-[#FAF5F1] border border-[#E5DDD3] rounded focus:outline-none focus:border-[#97692D] text-[#1E1A17]"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-[#8C8278]">
                        Strictly confidential &amp; encrypted.
                      </span>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-7 py-3 bg-[#97692D] hover:bg-[#7D521F] text-white text-xs sm:text-sm font-medium tracking-wide rounded shadow-xs transition-colors disabled:opacity-50"
                      >
                        {loading ? (
                          "Transmitting..."
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Office Touchpoints Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DDD3] shadow-xs space-y-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-1">
                      GLOBAL HEADQUARTERS
                    </span>
                    <h3 className="text-2xl font-serif text-[#1E1A17]">
                      Star Pavilion, Mumbai
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#5C5550]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#97692D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1E1A17] block">Executive Office</strong>
                        <span>Level 18, Star Pavilion, Nariman Point, Mumbai 400021, India</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#97692D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1E1A17] block">Telephone Concierge</strong>
                        <span>+91 (0) 22 4890 5000 / +91 (0) 22 4890 5001</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#97692D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1E1A17] block">Electronic Inquiries</strong>
                        <span>concierge@starhospitalities.com &middot; solutions@starhospitalities.com</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#97692D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1E1A17] block">Operating Hours</strong>
                        <span>Monday &ndash; Saturday: 09:00 &ndash; 19:00 IST &middot; 24/7 Guest Concierge</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Liaisons */}
                <div className="bg-[#F3EEE8] p-6 rounded-2xl border border-[#E5DDD3] space-y-4">
                  <h4 className="font-serif text-lg text-[#1E1A17]">
                    Regional Advisory Liaisons
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-xs text-[#5C5550]">
                    <div>
                      <strong className="text-[#1E1A17] block">Bengaluru</strong>
                      <span>Lavelle Road Financial Hub</span>
                    </div>
                    <div>
                      <strong className="text-[#1E1A17] block">Dubai</strong>
                      <span>DIFC Gate Precinct 4</span>
                    </div>
                    <div>
                      <strong className="text-[#1E1A17] block">London</strong>
                      <span>Mayfair Berkeley Square</span>
                    </div>
                    <div>
                      <strong className="text-[#1E1A17] block">Goa &amp; Coorg</strong>
                      <span>Regional Estate Offices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16 sm:py-20 bg-[#F5EFEB] border-t border-[#E5DDD3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#97692D] font-semibold block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1A17] tracking-tight">
                Common Inquiries &amp; Information
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E5DDD3] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#1E1A17] hover:text-[#97692D] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#97692D] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C5550] leading-relaxed border-t border-[#E5DDD3]/60 pt-3">
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
