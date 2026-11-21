"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesSection() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const current = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0];

  return (
    <section className="bg-ivory text-obsidian py-20 lg:py-28 border-b border-concrete">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="04"
          eyebrow="// INDUSTRIES SERVED"
          title="Mission-critical engineering across six regulated sectors."
          subtitle="Select an industrial domain to inspect compliance certifications, representative hardware families, and tolerance baselines."
          ctaLabel="Explore All Sectors"
          ctaHref="/industries"
        />

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Industry Index */}
            <div className="lg:col-span-7 border-t border-obsidian">
              {INDUSTRIES.map((sector) => {
                const isSelected = sector.id === current.id;
                return (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => setActiveId(sector.id)}
                    onMouseEnter={() => setActiveId(sector.id)}
                    aria-pressed={isSelected}
                    className={`w-full text-left py-5 px-4 border-b border-concrete transition-colors flex items-center justify-between gap-4 min-h-[76px] ${
                      isSelected ? "bg-obsidian text-ivory" : "hover:bg-ivory-warm text-obsidian"
                    }`}
                  >
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span
                        className={`font-mono-tech text-xs shrink-0 ${
                          isSelected ? "text-signal" : "text-steel-dark"
                        }`}
                      >
                        {sector.index}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight">
                          {sector.name}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm truncate mt-0.5 ${
                            isSelected ? "text-steel-light" : "text-steel-dark"
                          }`}
                        >
                          {sector.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 shrink-0">
                      <span
                        className={`font-mono-tech text-[11px] px-2 py-1 border ${
                          isSelected
                            ? "border-signal text-signal"
                            : "border-concrete text-steel-dark"
                        }`}
                      >
                        {sector.certifications[0]}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 ${isSelected ? "text-signal" : "text-steel"}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sticky Preview Panel */}
            <div className="lg:col-span-5 border border-obsidian bg-ivory-light">
              <div className="relative aspect-[16/10] border-b border-obsidian overflow-hidden bg-obsidian">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-obsidian/90 text-ivory font-mono-tech text-[11px] uppercase border border-ivory/20">
                  {current.toleranceClass}
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-xs text-signal-hover uppercase">
                    SECTOR {current.index}
                  </span>
                  <span className="font-mono-tech text-xs text-obsidian font-semibold">
                    {current.keyMetric.label}: {current.keyMetric.value}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {current.partFamilies.map((part) => (
                    <span
                      key={part}
                      className="px-2.5 py-1 bg-ivory border border-concrete font-mono-tech text-[11px] text-obsidian"
                    >
                      {part}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-concrete">
                  <Link
                    href={`/industries#${current.slug}`}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase font-semibold text-obsidian hover:text-signal-hover transition-colors"
                  >
                    <span>View {current.name} Dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-signal" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
