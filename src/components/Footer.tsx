import React from "react";
import Link from "next/link";
import StarLogo from "./StarLogo";

export default function Footer() {
  return (
    <footer className="bg-[#FAF5F1] text-[#1E1A17] pt-16 pb-12 border-t border-[#E5DDD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-[#E5DDD3]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <StarLogo variant="dark" size="lg" asLink />
            <p className="text-[#1E1A17] font-serif text-lg font-bold mt-2">
              Star Aqua Villas
            </p>
            <p className="text-[#5C5550] text-xs sm:text-sm leading-relaxed max-w-sm">
              Private lakeside lawns for your celebrations. Featuring lakeside vistas, private swimming pool, treehouse retreat, and expansive manicured celebration lawns.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C5E2D] font-bold block mb-1 font-mono">
                Lakeside Sanctuary
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#1E1A17]">
                &ldquo;Kumbalagodu, Mysore Road, South West Bengaluru&rdquo;
              </p>
            </div>
          </div>

          {/* Venues & Spaces */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1A17] mb-4 font-mono">
              Venues &amp; Spaces
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5C5550]">
              <li>
                <a href="/#venues" className="hover:text-[#8C5E2D] transition-colors py-0.5 block font-semibold text-[#1E1A17]">
                  Open Lawn Venue (320 Guests)
                </a>
              </li>
              <li>
                <a href="/#venues" className="hover:text-[#8C5E2D] transition-colors py-0.5 block font-semibold text-[#1E1A17]">
                  Woodland Retreat (320 Guests)
                </a>
              </li>
              <li>
                <a href="/#venues" className="hover:text-[#8C5E2D] transition-colors py-0.5 block font-semibold text-[#1E1A17]">
                  Tree House Venue (60 Guests)
                </a>
              </li>
              <li>
                <a href="/#venues" className="hover:text-[#8C5E2D] transition-colors py-0.5 block font-semibold text-[#1E1A17]">
                  Two Lawns Combined (750 Guests)
                </a>
              </li>
              <li>
                <a href="/#venues" className="hover:text-[#8C5E2D] transition-colors py-0.5 block font-semibold text-[#1E1A17]">
                  Lakeside Gazebo
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1A17] mb-4 font-mono">
              Visit &amp; Inquiries
            </h3>
            <div className="space-y-3 text-xs text-[#5C5550] leading-relaxed">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-0.5 font-mono">Resort Location</span>
                <span className="text-[#1E1A17]">
                  Star Aqua Villas, Kumbalagodu, Mysore Road, South West Bengaluru, Karnataka
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-0.5 font-mono">Reservations &amp; Site Visits</span>
                <a href="tel:+918041234567" className="hover:text-[#8C5E2D] transition-colors font-semibold block text-[#1E1A17]">
                  +91 (80) 4123 4567
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C5E2D] block mb-0.5 font-mono">Electronic Inquiries</span>
                <a href="mailto:concierge@starhospitalities.com" className="hover:text-[#8C5E2D] transition-colors break-all font-semibold block text-[#1E1A17]">
                  concierge@starhospitalities.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8278] gap-4 text-center sm:text-left">
          <div>
            &copy; 2026 Star Hospitalities &middot; Star Aqua Villas. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-semibold">
            <Link href="/privacy" className="hover:text-[#1E1A17] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1E1A17] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#1E1A17] transition-colors">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
