import React from "react";
import Link from "next/link";

interface StarLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function StarLogo({
  className = "",
  variant = "dark",
  size = "md"
}: StarLogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-[#1E1A17]" : "text-white";
  const starStroke = isDark ? "#1E1A17" : "#FFFFFF";
  const starAccent = "#97692D";

  const starSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl"
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* 5-pointed geometric star with elegant diagonal accent line */}
      <div className={`relative ${starSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-500 group-hover:rotate-12"
        >
          {/* Five-pointed star outline */}
          <polygon
            points="20,2 25,14 38,15 28,24 31,37 20,30 9,37 12,24 2,15 15,14"
            stroke={starStroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Dynamic diagonal accent line cutting through the star (matches reference emblem) */}
          <line
            x1="8"
            y1="34"
            x2="32"
            y2="6"
            stroke={starAccent}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography: "Star Hospitalities" in high-end editorial serif */}
      <span
        className={`font-serif tracking-tight font-medium ${textColor} ${textSizes[size]}`}
        style={{ letterSpacing: "-0.01em" }}
      >
        Star Hospitalities
      </span>
    </Link>
  );
}
