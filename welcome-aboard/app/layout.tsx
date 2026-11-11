import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { SkipLink } from "@/components/ui/SkipLink";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome Aboard — Bootcamp Batch 19 | Berijalan Academy",
  description:
    "Perjalanan transformatif menjadi engineer profesional berkelas dunia dimulai dari sini. Orientation keynote Bootcamp Batch 19 Berijalan Academy.",
};

export const viewport: Viewport = {
  themeColor: "#0f131d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-dvh bg-canvas font-body text-ink antialiased`}
      >
        <SkipLink />
        {children}
      </body>
    </html>
  );
}