import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${roboto.variable} ${robotoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF5F1] text-[#1E1A17] font-sans selection:bg-[#97692D]/20 selection:text-[#1E1A17]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
