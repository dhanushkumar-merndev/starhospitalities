import React from "react";

export interface TempleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function TempleIcon({
  size = 24,
  className = "w-6 h-6",
  ...props
}: TempleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Kalash / Spire */}
      <path d="M12 2v3" />
      <path d="M11 5h2" />
      {/* Tiered Temple Shikhara */}
      <path d="M12 5l-5 5h10l-5-5z" />
      <path d="M5 10l-1 4h16l-1-4" />
      {/* Pillar Beam & Pillars */}
      <path d="M4 14h16" />
      <path d="M7 14v6" />
      <path d="M17 14v6" />
      {/* Sanctum Arched Entrance */}
      <path d="M10 20v-3.5a2 2 0 0 1 4 0V20" />
      {/* Foundation Base */}
      <path d="M2 21h20" />
    </svg>
  );
}

