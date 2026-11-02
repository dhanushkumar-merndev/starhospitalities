import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  openGraph: {
    title: "Star Hospitalities — Creating Destinations. Delivering Experiences.",
    description:
      "A unified multi-segment hospitality group crafting premier destinations across luxury stays, resorts, gastronomy, events, wellness, and advisory solutions.",
    images: [{ url: "/images/hero-cinematic.jpg", width: 1376, height: 768 }]
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
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF5F1] text-[#1E1A17] font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
        {children}
      </body>
    </html>
  );
}
