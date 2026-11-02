"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Bed, Palmtree, UtensilsCrossed, Calendar, Flower2, Mountain, Layers } from "lucide-react";
import StarLogo from "./StarLogo";
import { SEGMENTS } from "@/data/hospitalityData";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [segmentsDropdownOpen, setSegmentsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSegmentsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Segments", href: "/segments", isDropdown: true },
    { name: "Hospitality Solutions", href: "/solutions" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" }
  ];

  const getSegmentIcon = (id: string) => {
    switch (id) {
      case "star-stays":
        return <Bed className="w-4 h-4 text-[#97692D]" />;
      case "star-resorts":
        return <Palmtree className="w-4 h-4 text-[#97692D]" />;
      case "star-dining":
        return <UtensilsCrossed className="w-4 h-4 text-[#97692D]" />;
      case "star-events":
        return <Calendar className="w-4 h-4 text-[#97692D]" />;
      case "star-wellness":
        return <Flower2 className="w-4 h-4 text-[#97692D]" />;
      case "star-experiences":
        return <Mountain className="w-4 h-4 text-[#97692D]" />;
      default:
        return <Layers className="w-4 h-4 text-[#97692D]" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF5F1]/95 backdrop-blur-md shadow-sm border-b border-[#E5DDD3]/80 py-3.5"
          : "bg-[#FAF5F1] py-4 md:py-5 border-b border-[#E5DDD3]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching reference */}
          <StarLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setSegmentsDropdownOpen(true)}
                    onMouseLeave={() => setSegmentsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-[13.5px] font-medium tracking-wide transition-colors ${
                        isActive
                          ? "text-[#1E1A17] font-semibold"
                          : "text-[#3D3732] hover:text-[#97692D]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          segmentsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 transition-all duration-200 ${
                        segmentsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#FAF5F1] border border-[#E5DDD3] shadow-xl rounded-xl p-3 divide-y divide-[#E5DDD3]/60">
                        <div className="pb-2 px-2">
                          <Link
                            href="/segments"
                            className="text-xs font-semibold uppercase tracking-wider text-[#97692D] hover:underline flex items-center justify-between"
                          >
                            <span>Explore All 7 Segments</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="pt-2 space-y-1">
                          {SEGMENTS.map((seg) => (
                            <Link
                              key={seg.id}
                              href={seg.link}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#EFE8DE] transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-md bg-white border border-[#E5DDD3] flex items-center justify-center shrink-0">
                                {getSegmentIcon(seg.id)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium text-[#1E1A17] group-hover/item:text-[#97692D] transition-colors">
                                  {seg.title}
                                </div>
                                <div className="text-[11px] text-[#5C5550] truncate">
                                  {seg.subtitle}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative py-1">
                  <Link
                    href={link.href}
                    className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-[#1E1A17] font-semibold"
                        : "text-[#3D3732] hover:text-[#97692D]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Subtle gold underline for active item (as seen under "Home" in reference) */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#97692D] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1A17] hover:text-[#97692D] transition-colors rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.75]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Matches reference 2 clean aesthetic) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF5F1] border-b border-[#E5DDD3] shadow-2xl transition-all duration-300 max-h-[calc(100vh-60px)] overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-6 space-y-5">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.isDropdown) {
                return (
                  <div key={link.name} className="pt-2">
                    <Link
                      href="/segments"
                      className="text-base font-serif font-medium text-[#1E1A17] flex items-center justify-between py-1"
                    >
                      <span>Our Segments</span>
                      <ArrowRight className="w-4 h-4 text-[#97692D]" />
                    </Link>
                    <div className="mt-2 pl-3 border-l-2 border-[#97692D]/30 space-y-2">
                      {SEGMENTS.map((seg) => (
                        <Link
                          key={seg.id}
                          href={seg.link}
                          className="flex items-center gap-2.5 text-xs text-[#5C5550] hover:text-[#97692D] py-1"
                        >
                          {getSegmentIcon(seg.id)}
                          <span>{seg.title}</span>
                          <span className="text-[10px] text-stone-400">({seg.subtitle})</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-base font-serif font-medium py-1.5 transition-colors border-b border-[#E5DDD3]/40 ${
                    isActive
                      ? "text-[#97692D] font-semibold"
                      : "text-[#1E1A17] hover:text-[#97692D]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Quick Action Button */}
          {onOpenEnquiry && (
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-[#97692D] text-white rounded text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-[#7D521F] transition-colors"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
