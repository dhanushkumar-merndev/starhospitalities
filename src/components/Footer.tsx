import React from "react";
import Link from "next/link";
import StarLogo from "./StarLogo";
import { SEGMENTS } from "@/data/hospitalityData";
import { ArrowRight, Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1816] text-[#D8D0C6] pt-16 pb-12 border-t border-[#332E2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#332E2A]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <StarLogo variant="light" size="lg" />
            <p className="text-[#A89F95] text-sm leading-relaxed max-w-sm mt-3">
              A unified multi-segment hospitality group crafting iconic destinations, curated sanctuaries, and long-term asset value across luxury stays, resorts, gastronomy, and wellness.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#97692D] block mb-1">
                Brand Creed
              </span>
              <p className="font-serif italic text-lg text-white">
                &ldquo;Creating Destinations. Delivering Experiences.&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#network"
                className="w-9 h-9 rounded-full bg-[#272320] flex items-center justify-center text-[#D8D0C6] hover:text-white hover:bg-[#97692D] transition-colors"
                aria-label="Global Network"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#share"
                className="w-9 h-9 rounded-full bg-[#272320] flex items-center justify-center text-[#D8D0C6] hover:text-white hover:bg-[#97692D] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hospitality Divisions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Our 7 Divisions
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A89F95]">
              {SEGMENTS.map((seg) => (
                <li key={seg.id}>
                  <Link
                    href={seg.link}
                    className="hover:text-[#C59B58] transition-colors flex items-center justify-between group"
                  >
                    <span>{seg.title}</span>
                    <span className="text-[10px] text-[#6E645A] group-hover:text-[#C59B58]">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Portfolio */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Group & Portfolio
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A89F95]">
              <li>
                <Link href="/about" className="hover:text-[#C59B58] transition-colors">
                  About Star Hospitalities
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#C59B58] transition-colors">
                  Properties & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#C59B58] transition-colors">
                  Hospitality Solutions (B2B)
                </Link>
              </li>
              <li>
                <Link href="/about#story" className="hover:text-[#C59B58] transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about#philosophy" className="hover:text-[#C59B58] transition-colors">
                  Brand Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C59B58] transition-colors">
                  Contact & Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Global Office */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Global Touchpoints
            </h3>
            <div className="space-y-3 text-xs text-[#A89F95]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#97692D] shrink-0 mt-0.5" />
                <span>
                  Corporate HQ: Star Pavilion, Nariman Point, Mumbai &middot; Bengaluru &middot; Dubai
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#97692D] shrink-0" />
                <span>+91 (0) 22 4890 5000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#97692D] shrink-0" />
                <span>concierge@starhospitalities.com</span>
              </div>

              {/* Private Newsletter */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-stone-300 block mb-1.5">
                  Private Newsletter
                </span>
                <div className="flex items-center bg-[#25221F] border border-[#3A342F] rounded p-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-2 text-xs text-white placeholder-stone-500 focus:outline-none"
                  />
                  <button
                    className="p-1.5 bg-[#97692D] text-white rounded hover:bg-[#B7874C] transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7167] gap-4">
          <p>
            &copy; 2026 Star Hospitalities Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-stone-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-stone-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
