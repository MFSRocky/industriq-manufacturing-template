import type { Metadata } from "next";
import { CapabilitiesExplorer } from "@/components/capabilities/CapabilitiesExplorer";
import { CadDatumDiagram } from "@/components/ui/TechnicalBlueprintSvg";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Engineering Capabilities — Machine Fleet, Alloys & Tolerances",
  description:
    "Searchable technical catalog of INDUSTRIQ CNC work envelopes, robotic cells, EOS DMLS chambers, certified aerospace alloys, and ISO tolerance limits.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ TECHNICAL SPECIFICATION MATRIX // 48 CELLS ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              MACHINE ENVELOPES, ALLOYS &amp; TOLERANCE LIMITS.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Verify exact bed travel, achievable GD&amp;T flatness/roundness grades, and stocked
              certified alloys before submitting CAD packages.
            </p>
          </div>
          <div className="lg:col-span-5 border border-ivory/20 bg-obsidian-deep p-5">
            <CadDatumDiagram className="text-ivory" />
          </div>
        </div>
      </section>

      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container">
          <CapabilitiesExplorer />
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
