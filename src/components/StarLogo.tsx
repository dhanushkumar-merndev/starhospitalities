import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface StarLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  iconOnly?: boolean;
  priority?: boolean;
  asLink?: boolean;
  href?: string;
}

export default function StarLogo({
  className = "",
  variant = "light",
  size = "md",
  iconOnly = false,
  priority = true,
  asLink = false,
  href = "/"
}: StarLogoProps) {
  const isDark = variant === "dark";

  // Full logo height classes (aspect ratio ~7.5:1 is preserved with w-auto)
  const fullLogoSizes = {
    sm: "h-7 sm:h-8 w-auto",
    md: "h-8 sm:h-9.5 w-auto",
    lg: "h-9 sm:h-11 w-auto",
    xl: "h-11 sm:h-14 w-auto"
  };

  // Icon only size classes
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-14 h-14"
  };

  const logoSrc = isDark
    ? "/images/logo/logo_dark.png"
    : "/images/logo/logo.png";

  const iconSrc = isDark
    ? "/images/logo/star_dark.png"
    : "/images/logo/star_light.png";

  const content = iconOnly ? (
    <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
      <Image
        src={iconSrc}
        alt="Star Hospitalities Emblem"
        width={64}
        height={64}
        priority={priority}
        className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
      />
    </div>
  ) : (
    <div className="relative flex items-center shrink-0">
      <Image
        src={logoSrc}
        alt="Star Hospitalities"
        width={240}
        height={32}
        priority={priority}
        style={{ width: "auto" }}
        className={`${fullLogoSizes[size]} object-contain transform transition-transform duration-500 group-hover:scale-[1.02]`}
      />
    </div>
  );

  const containerClasses = `inline-flex items-center group select-none transition-opacity duration-200 hover:opacity-90 ${className}`;

  if (asLink) {
    return (
      <Link
        href={href}
        aria-label="Star Hospitalities - Return to Home"
        className={containerClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
}
