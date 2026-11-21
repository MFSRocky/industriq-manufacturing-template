import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

import { SITE_CONFIG } from "@/data/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#171918",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "INDUSTRIQ — Precision Industrial & Autonomous Manufacturing Systems",
    template: "%s | INDUSTRIQ",
  },
  description:
    "Swiss-German industrial engineering and precision manufacturing systems: 5-axis CNC machining, turnkey robotic automation, DMLS metal additive, and AS9100D metrology.",
  keywords: [
    "precision manufacturing",
    "5-axis CNC machining",
    "industrial automation",
    "robotic welding",
    "metal additive manufacturing",
    "AS9100D metrology",
    "aerospace machining",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "INDUSTRIQ Manufacturing Systems",
    title: "INDUSTRIQ — Precision Industrial & Autonomous Manufacturing Systems",
    description:
      "Engineering-grade 5-axis CNC machining, turnkey robotic automation, DMLS additive, and sub-micron CMM metrology across Stuttgart, Zurich, and Austin.",
    images: [{ url: "/images/hero-cnc-monolith.jpg", width: 1402, height: 1122, alt: "INDUSTRIQ 5-axis CNC precision facility" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "INDUSTRIQ — Precision Industrial Manufacturing",
    description: "5-axis CNC machining, robotic production cells, and certified AS9100D metrology.",
    images: ["/images/hero-cnc-monolith.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-obsidian antialiased selection:bg-signal selection:text-obsidian">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-signal focus:text-obsidian focus:px-4 focus:py-2 focus:font-mono-tech focus:text-xs focus:font-semibold focus:uppercase"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
