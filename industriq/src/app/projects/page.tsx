import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/projects/ProjectsCatalog";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Production Dossiers",
  description:
    "Validated manufacturing case studies across aerospace airframes, hydraulic titanium manifolds, EV 800V enclosures, and offshore turbine shafts.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ VALIDATED CASE ARCHIVE // METROLOGY PROOFS ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              PRODUCTION DOSSIERS &amp; MEASURED OUTCOMES.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Every case file documents raw billet specifications, engineering bottlenecks solved,
              and actual CMM statistical process capability metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container">
          <ProjectsCatalog />
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
