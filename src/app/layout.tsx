import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starhospitalities.com"),
  title: "Star Hospitalities — Creating Destinations. Delivering Experiences.",
  description:
    "A unified multi-segment hospitality group crafting premier destinations across luxury stays, resorts, gastronomy, events, wellness, experiences, and hospitality advisory solutions.",
  keywords: [
    "Star Hospitalities",
    "Luxury Hospitality",
    "Hotels and Resorts",
    "Hospitality Management",
    "Destination Weddings",
    "Ayurvedic Wellness",
    "Fine Dining",
    "Luxury Glamping"
  ],
  authors: [{ name: "Star Hospitalities Group" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Star Hospitalities — Creating Destinations. Delivering Experiences.",
    description:
      "A unified multi-segment hospitality group crafting premier destinations across luxury stays, resorts, gastronomy, events, wellness, and advisory solutions.",
    images: [{ url: "/images/hero-ai.jpg", width: 1376, height: 768 }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF5F1] text-[#1E1A17] font-sans selection:bg-[#8C5E2D]/20 selection:text-[#1E1A17]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
