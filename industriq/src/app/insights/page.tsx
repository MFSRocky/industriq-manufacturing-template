import type { Metadata } from "next";
import { InsightsDirectory } from "@/components/insights/InsightsDirectory";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Insights — Engineering Journal & Whitepapers",
  description:
    "Technical whitepapers and field research from INDUSTRIQ engineers on thermal CNC drift, closed-loop CMM metrology, DMLS titanium fatigue, and robotic laser welding.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ ENGINEERING JOURNAL // TECHNICAL BRIEFS ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              RESEARCH FROM THE PRODUCTION FLOOR.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Monographs authored by our machining physicists, metallurgists, and automation
              architects across Stuttgart and Zurich.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container">
          <InsightsDirectory />
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
