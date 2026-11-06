"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import StarLogo from "./StarLogo";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Dynamic Island Capsule Container: Transparent & full-width when landed, Centered White Liquid Glass Pill when scrolled */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "mt-2 sm:mt-3.5 w-[92%] sm:w-[90%] max-w-[880px] xl:max-w-[920px] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full dynamic-island-scrolled"
            : "mt-0 w-full max-w-7xl px-5 sm:px-10 py-4 sm:py-6 rounded-none dynamic-island-top"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Star Logo with Smooth Light/Dark Crossfade */}
          <div className="flex items-center shrink-0 translate-y-[1.5px] sm:translate-y-[2.5px]">
            <Link
              href="/"
              className="relative flex items-center h-8 sm:h-9"
              onClick={closeMenus}
              aria-label="Star Hospitalities - Return to Home"
            >
              {/* White Logo (Visible when landed) */}
              <div
                className={`transition-opacity duration-300 flex items-center h-full ${
                  scrolled ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100"
                }`}
              >
                <StarLogo variant="light" size="sm" priority />
              </div>
              {/* Dark Logo (Visible when scrolled Dynamic Island) */}
              <div
                className={`transition-opacity duration-300 flex items-center h-full ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
                }`}
              >
                <StarLogo variant="dark" size="sm" priority />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (Spaced with ample room, zero overflow) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <div key={link.name} className="relative py-1 flex items-center">
                  <Link
                    href={link.href}
                    onClick={closeMenus}
                    className={`text-[11px] xl:text-xs tracking-wider uppercase font-bold transition-colors duration-300 whitespace-nowrap ${
                      scrolled
                        ? isActive
                          ? "text-[#8C5E2D] font-extrabold"
                          : "text-[#1E1A17]/80 hover:text-[#8C5E2D]"
                        : isActive
                          ? "text-white font-extrabold"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-colors duration-300 ${
                        scrolled ? "bg-[#8C5E2D] shadow-xs" : "bg-white shadow-md"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Action Pill Button (Inquire / Book Tour) */}
          <div className="hidden lg:flex items-center shrink-0">
            {onOpenEnquiry ? (
              <button
                onClick={onOpenEnquiry}
                className={`group inline-flex items-center gap-1.5 text-[11px] xl:text-xs tracking-wider uppercase font-bold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                  scrolled
                    ? "bg-[#1E1A17] text-white hover:bg-[#8C5E2D] shadow-xs hover:shadow-md"
                    : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl hover:scale-105 active:scale-95"
                }`}
              >
                <span>Inquire</span>
                <ArrowRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 ${
                    scrolled ? "text-white" : "text-zinc-950"
                  }`}
                />
              </button>
            ) : (
              <Link
                href="/contact"
                onClick={closeMenus}
                className={`group inline-flex items-center gap-1.5 text-[11px] xl:text-xs tracking-wider uppercase font-bold px-5 py-2.5 rounded-full transition-all duration-300 shrink-0 ${
                  scrolled
                    ? "bg-[#1E1A17] text-white hover:bg-[#8C5E2D] shadow-xs hover:shadow-md"
                    : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl hover:scale-105 active:scale-95"
                }`}
              >
                <span>Book Tour</span>
                <ArrowRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 ${
                    scrolled ? "text-white" : "text-zinc-950"
                  }`}
                />
              </Link>
            )}
          </div>

          {/* Mobile Right: Quick Action Pill (Tablet/Desktop) & Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {onOpenEnquiry ? (
              <button
                onClick={onOpenEnquiry}
                className={`hidden sm:inline-flex text-[10px] sm:text-xs uppercase font-bold tracking-wider px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "bg-[#1E1A17] text-white hover:bg-[#8C5E2D] shadow-xs"
                    : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-md"
                }`}
              >
                Inquire
              </button>
            ) : (
              <Link
                href="/contact"
                className={`hidden sm:inline-flex text-[10px] sm:text-xs uppercase font-bold tracking-wider px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "bg-[#1E1A17] text-white hover:bg-[#8C5E2D] shadow-xs"
                    : "bg-white text-zinc-950 hover:bg-zinc-100 shadow-md"
                }`}
              >
                Inquire
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-200 focus:outline-none cursor-pointer ${
                scrolled
                  ? "text-[#1E1A17] hover:text-[#8C5E2D] hover:bg-stone-100/70"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Liquid Glassmorphism */}
      <div
        className={`lg:hidden fixed inset-x-3 sm:inset-x-6 ${
          scrolled ? "top-[64px]" : "top-[74px]"
        } backdrop-blur-3xl bg-white/98 border border-stone-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.18)] rounded-2xl transition-all duration-300 max-h-[calc(100vh-85px)] overflow-y-auto z-50 pointer-events-auto ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenus}
                  className={`block text-sm uppercase tracking-wide font-bold py-2.5 transition-colors border-b border-stone-100 ${
                    isActive
                      ? "text-[#8C5E2D] font-bold"
                      : "text-stone-700 hover:text-[#1E1A17]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Quick Action Button on Mobile */}
          {onOpenEnquiry && (
            <div className="pt-2">
              <button
                onClick={() => {
                  closeMenus();
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 bg-[#1E1A17] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#8C5E2D] transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inquire Direct</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
