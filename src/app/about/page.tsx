"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Users,
  Sunset,
  Hourglass,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import EnquiryModal from "@/components/EnquiryModal";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Exact reasons why this project exists
  const exactReasons = [
    {
      num: "01",
      title: "Curing the Multi-Vendor Chaos",
      kicker: "ONE IN-HOUSE FAMILY TEAM",
      desc: "Traditional event planning often turns joyous milestones into stressful operational marathons. Hosts juggle caterers, decorators, light technicians, and sound engineers. Star Hospitalities was built to replace that anxiety with seamless in-house mastery: one dedicated team curating culinary artistry, decor, and flow from your first walkthrough to the last departing smile."
    },
    {
      num: "02",
      title: "Rooms Included: Never Hurry, Never Worry",
      kicker: "VILLA SUITES WITH EVERY CELEBRATION",
      desc: "Most event venues give you a cramped 4-hour slot and push you out into city traffic. We believe the morning of your wedding or celebration should be filled with laughter, tea with elders, and unhurried preparation. By including 3 private luxury villa rooms and an elevated tree house retreat with bookings, your closest family stays relaxed, refreshed, and truly together."
    },
    {
      num: "03",
      title: "Nature as the Master Host",
      kicker: "LAKESIDE, BREEZES & TREE CANOPIES",
      desc: "Sterile, windowless banquet halls disconnect people from the earth. Star Hospitalities creates sanctuaries where the elements welcome you: the calm mirror of the lake, sunset breezes whispering through palms, starry open skies, and elevated treehouse hideaways that awaken wonder in children and adults alike."
    },
    {
      num: "04",
      title: "Conscious, Warm Hospitality",
      kicker: "GUESTS AS HONORED KIN",
      desc: "True luxury is never cold, aloof, or transactional. It is intuitive warmth, heartfelt smiles, anticipatory care, and honoring each guest as family. We craft environments where people feel cherished, safe, and completely free to be themselves."
    }
  ];

  // How it adds real value to their lives
  const valueAdditions = [
    {
      index: "01",
      icon: Crown,
      title: "Be a True Guest at Your Own Celebration",
      desc: "Instead of running around checking food counters or directing parking, you are fully present — sipping a sunset cocktail, laughing with friends, and sharing the moment with those you love."
    },
    {
      index: "02",
      icon: Users,
      title: "Multi-Generational Harmony",
      desc: "Grandparents rest peacefully on shaded garden verandas, youngsters dance freely on the manicured lawns by the pool, and dreamers watch sunset over the lake. No one is left behind or uncomfortable."
    },
    {
      index: "03",
      icon: Sunset,
      title: "Core Memories That Outlive the Day",
      desc: "Years from now, you won't remember the color of the tablecloths; you will remember the golden sunset light bathing your vows, the reflection on the lake, and the gentle breeze as you danced under the stars."
    },
    {
      index: "04",
      icon: Hourglass,
      title: "Unhurried, Timeless Flow",
      desc: "With 12-hour and 24-hour celebration formats and overnight villa stays, you never feel the ticking clock. You wake up to morning mist and birdsong instead of rushed checkouts."
    }
  ];

  // Sensory 'Good to Feel' touchpoints
  const sensoryMoments = [
    {
      sense: "The Sight",
      highlight: "Golden Hour Glow",
      detail: "The sun gently sinking into the horizon over the lake, casting liquid amber reflections across the open lawns and waterside gazebo."
    },
    {
      sense: "The Touch",
      highlight: "Barefoot on Emerald Lawns",
      detail: "Cool dewy grass beneath your feet, gentle evening lake breezes, and sinking into plush, crisp linen in private villa suites."
    },
    {
      sense: "The Sound",
      highlight: "Water, Palms & Laughter",
      detail: "The tranquil lap of water against the shoreline, acoustic music drifting from the timber pavilion, and untroubled family laughter."
    },
    {
      sense: "The Feeling",
      highlight: "Unburdened Stillness",
      detail: "Taking a deep breath as the city rush melts away, knowing that every detail has already been taken care of by people who genuinely care."
    }
  ];

  // Core values
  const values = [
    {
      title: "Empathetic Hospitality",
      desc: "We anticipate what families need before they ask. We treat every celebration with the reverence and devotion of our own."
    },
    {
      title: "Architectural Harmony",
      desc: "Every villa, deck, lawn, and treehouse is designed to breathe with nature rather than overpower it."
    },
    {
      title: "Sense of Place",
      desc: "We honor the native soil, serene lakefronts, indigenous flora, and vernacular architecture of every destination we inhabit."
    },
    {
      title: "Fiduciary Stewardship",
      desc: "We build lasting economic and generational value for property owners, institutional investors, and local communities alike."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F1] text-[#1E1A17] flex flex-col font-sans selection:bg-[#8C5E2D]/20 selection:text-[#1E1A17]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* HERO SECTION — Cinematic Warmth & Purpose                                 */}
        {/* ========================================================================= */}
        <PageHero
          kicker="WHY WE EXIST"
          titleLine1="Why We Exist."
          titleLine2="Sanctuaries for the Soul."
          description="Private lakeside sanctuaries crafted for unhurried celebrations, tranquil nature, and genuine warmth."
          imageSrc="/images/aquavilla/11_sunset_golden_hour_lawn.jpg"
          imageAlt="Star Hospitalities Lakeside Sanctuary at Sunset Golden Hour"
          primaryCta={{
            label: "Explore Spaces",
            href: "/#aquavilla-experience"
          }}
          secondaryCta={{
            label: "Schedule Sunset Visit",
            onClick: () => setEnquiryOpen(true)
          }}
        />

        {/* ========================================================================= */}
        {/* THE ORIGIN STORY — Why This Project Was Born                             */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Visual Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#E5DDD3] group">
                  <Image
                    src="/images/aquavilla/01_intro_lakeside_aerial.jpg"
                    alt="Star Aqua Villas Lakeside Estate"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-serif text-lg sm:text-xl font-bold">
                      A lakeside sanctuary born from a longing for peace, warmth, and beauty.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs">
                    <Image
                      src="/images/aquavilla/07_tree_house_exterior.jpg"
                      alt="Treehouse Sanctuary"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs">
                    <Image
                      src="/images/aquavilla/03_lakeside_infinity_pool.jpg"
                      alt="Private Swimming Pool"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Storytelling Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight leading-tight">
                    We Believed Celebrations Deserved Their Soul Back
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                  Look at modern celebrations: families spend months planning, yet on the actual day, they are trapped in frantic city traffic, rushing through crowded banquet halls, coordinating multiple disconnected vendors, and worried about checking out before the next booking arrives.
                </p>

                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                  We asked a simple, transformative question: <span className="text-[#1E1A17] font-semibold italic">&ldquo;What if a celebration felt like returning home to your own private lakeside estate?&rdquo;</span>
                </p>

                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                  Star Hospitalities was born to answer that call. From our flagship sanctuary — <strong className="text-[#8C5E2D] font-bold">Star Aqua Villas</strong> in Kumbalagodu, Bangalore — to our full portfolio of stays, nature retreats, dining, and advisory solutions, our mission is singular: to craft unhurried, breathtaking spaces where families reunite, couples exchange vows under sunset skies, and memories are felt deeply in the heart.
                </p>

                <div className="pt-4 grid grid-cols-4 gap-2 sm:gap-3 lg:gap-3.5 border-t border-[#E5DDD3]">
                  <div className="px-2 sm:px-3 py-3 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs text-center flex flex-col items-center justify-center min-w-0">
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-[#1E1A17] whitespace-nowrap leading-tight">100%</div>
                    <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-[#5C5550] uppercase tracking-normal sm:tracking-wider font-semibold mt-1 whitespace-nowrap leading-tight">Private Exclusivity</div>
                  </div>
                  <div className="px-2 sm:px-3 py-3 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs text-center flex flex-col items-center justify-center min-w-0">
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-[#8C5E2D] whitespace-nowrap leading-tight">In-House</div>
                    <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-[#5C5550] uppercase tracking-normal sm:tracking-wider font-semibold mt-1 whitespace-nowrap leading-tight">One Unified Team</div>
                  </div>
                  <div className="px-2 sm:px-3 py-3 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs text-center flex flex-col items-center justify-center min-w-0">
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-[#1E1A17] whitespace-nowrap leading-tight">3 Rooms</div>
                    <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-[#5C5550] uppercase tracking-normal sm:tracking-wider font-semibold mt-1 whitespace-nowrap leading-tight">Villa Suites Included</div>
                  </div>
                  <div className="px-2 sm:px-3 py-3 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs text-center flex flex-col items-center justify-center min-w-0">
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-[#8C5E2D] whitespace-nowrap leading-tight">Tree House</div>
                    <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-[#5C5550] uppercase tracking-normal sm:tracking-wider font-semibold mt-1 whitespace-nowrap leading-tight">Canopy Retreat Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE EXACT REASONS — Why This Project Exists                               */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight leading-tight">
                Designed with Exact Purpose to Solve Real Frustrations
              </h2>
              <p className="text-sm sm:text-base text-[#5C5550] mt-3 leading-relaxed">
                We didn&apos;t build another generic hotel brand. Every single corner of Star Hospitalities exists to eliminate a specific pain and replace it with effortless peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exactReasons.map((item) => (
                <div
                  key={item.num}
                  className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs hover:shadow-xl hover:border-[#8C5E2D]/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1A17] leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-2xl font-serif font-bold text-stone-300">
                        {item.num}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed pt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5DDD3] flex items-center gap-2 text-xs font-semibold text-[#8C5E2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5E2D] shrink-0" />
                    <span>Thoughtfully engineered for host &amp; guest ease</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOW IT ADDS VALUE TO YOUR LIFE — Emotional & Practical Benefits           */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight">
                The Tangible Joy &amp; Peace You Take Home
              </h2>
              <p className="text-sm sm:text-base text-[#5C5550] mt-3 leading-relaxed">
                When you step into Star Hospitalities, your relationship with time, stress, and your loved ones changes. Here is what this project gives to your life:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueAdditions.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/85 backdrop-blur-md border border-[#E5DDD3] shadow-xs hover:shadow-xl hover:border-[#8C5E2D]/50 hover:-translate-y-1 transition-all duration-500 space-y-4 flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
                      {/* Top Row: Luxury Icon Medallion & Editorial Index */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8C5E2D]/15 via-[#FAF5F1] to-[#8C5E2D]/5 border border-[#8C5E2D]/25 ring-4 ring-[#8C5E2D]/5 shadow-xs flex items-center justify-center text-[#8C5E2D] group-hover:scale-110 group-hover:ring-[#8C5E2D]/20 group-hover:border-[#8C5E2D]/50 group-hover:shadow-md transition-all duration-500">
                          <IconComponent className="w-7 h-7 stroke-[1.75]" />
                        </div>
                        <span className="font-serif text-2xl font-bold text-stone-200 group-hover:text-[#8C5E2D]/35 transition-colors">
                          {val.index}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1A17] group-hover:text-[#8C5E2D] transition-colors leading-snug">
                          {val.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAKING THINGS GOOD TO FEEL — The Sensory Resonance                         */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight leading-tight">
                    Making Things Good to Feel
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                  Hospitality isn&apos;t just what you see — it is how you breathe, how your body relaxes, and how the moments feel against your skin.
                </p>

                <p className="text-sm sm:text-base text-[#5C5550] leading-relaxed">
                  From the instant you arrive at our gates, the noise of the city dissolves. Your senses are gently reawakened: the scent of wet grass and flowering frangipani, the soothing amber twilight reflecting across the lake, and the genuine smile of a team that welcomes you not as a reservation number, but as family.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E1A17] text-white hover:bg-[#8C5E2D] font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    <span>Schedule a Sunset Walk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4 Sensory Touchpoint Cards with Light Glassmorphism */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sensoryMoments.map((item) => (
                  <div
                    key={item.highlight}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] hover:border-[#8C5E2D]/40 transition-all space-y-2.5 shadow-xs hover:shadow-md"
                  >
                    <h4 className="font-serif text-lg font-bold text-[#1E1A17]">
                      {item.highlight}
                    </h4>
                    <p className="text-xs text-[#5C5550] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR CORE VALUES — The Guiding Principles                                  */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF5F1] border-b border-[#E5DDD3]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1A17] tracking-tight">
                The Principles that Guide Every Decision
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-[#E5DDD3] shadow-xs hover:shadow-xl hover:border-[#8C5E2D]/40 transition-all duration-300 space-y-4"
                >
                  <h3 className="font-serif text-xl font-bold text-[#1E1A17]">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5550] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CTA BANNER                                                                */}
        {/* ========================================================================= */}
        <CtaBanner
          onOpenEnquiry={() => setEnquiryOpen(true)}
          kicker="VISIT OUR LAKESIDE SANCTUARY"
          title="Come and See It at Sunset."
          subtitle="Walk the manicured lawns, relax by the waterside gazebo, and feel the unhurried magic of Star Hospitalities for yourself."
          buttonText="Arrange a Private Visit"
        />
      </main>

      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
