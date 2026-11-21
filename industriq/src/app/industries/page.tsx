import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Industries Served — Aerospace, Energy, E-Mobility & Medical",
  description:
    "Regulated manufacturing systems for aerospace aerostructures, offshore wind energy, 800V EV battery hardware, ISO 13485 surgical robotics, and semiconductor lithography.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ SECTOR VERTICALS // REGULATED PRODUCTION ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              ENGINEERED FOR HIGH-CONSEQUENCE SECTORS.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Each industry vertical runs on dedicated machine workholding, certified quality
              protocols, and full material genealogy tailored to sector compliance mandates.
            </p>
          </div>

          {/* Quick Sector Anchor Bar */}
          <nav
            aria-label="Jump to industry sector"
            className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-ivory/15"
          >
            {INDUSTRIES.map((sector) => (
              <a
                key={sector.slug}
                href={`#${sector.slug}`}
                className="px-3.5 py-2.5 min-h-[44px] border border-ivory/20 hover:border-signal bg-obsidian-elevated font-mono-tech text-xs uppercase text-ivory/90 hover:text-signal transition-colors inline-flex items-center gap-2"
              >
                <span className="text-signal">{sector.index}</span>
                <span>{sector.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Alternating Staggered Sector Dossiers */}
      <section className="bg-ivory text-obsidian divide-y divide-obsidian border-b border-obsidian">
        {INDUSTRIES.map((sector, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <article
              key={sector.id}
              id={sector.slug}
              className="iq-container py-14 sm:py-20 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div
                  className={`lg:col-span-6 border border-obsidian bg-obsidian overflow-hidden aspect-[16/10] relative ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={sector.image}
                    alt={sector.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-obsidian/90 border border-signal font-mono-tech text-xs text-signal uppercase">
                    SECTOR {sector.index} // {sector.toleranceClass}
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    {sector.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-obsidian text-ivory font-mono-tech text-[11px] uppercase"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-signal" />
                        <span>{cert}</span>
                      </span>
                    ))}
                  </div>

                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold text-obsidian">
                      {sector.name}
                    </h2>
                    <p className="font-mono-tech text-xs uppercase tracking-wider text-signal-hover mt-2">
                      {sector.tagline}
                    </p>
                  </div>

                  <p className="text-base text-steel-dark leading-relaxed">{sector.description}</p>

                  <div className="border border-concrete bg-ivory-light p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-concrete pb-2 font-mono-tech text-xs">
                      <span className="text-steel-dark">TYPICAL HARDWARE FAMILIES</span>
                      <span className="text-obsidian font-semibold">
                        {sector.keyMetric.label}: {sector.keyMetric.value}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sector.partFamilies.map((part) => (
                        <div key={part} className="text-sm font-medium text-obsidian flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-signal shrink-0" aria-hidden="true" />
                          <span>{part}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Quote {sector.name} Hardware</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory font-mono-tech text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>View Related Case Studies</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <ConversionCtaSection />
    </>
  );
}
