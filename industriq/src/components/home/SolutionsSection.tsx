"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function SolutionsSection() {
  const [selectedId, setSelectedId] = useState(SOLUTIONS[0].id);
  const active = SOLUTIONS.find((s) => s.id === selectedId) ?? SOLUTIONS[0];

  return (
    <section className="bg-ivory text-obsidian py-20 lg:py-28 border-b border-concrete bg-swiss-grid-light">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="02"
          eyebrow="// MANUFACTURING SOLUTIONS"
          title="End-to-end production architectures built for tight-tolerance hardware."
          subtitle="From single-setup 5-axis monolithic milling to synchronized turnkey robotic assembly lines, every division operates under unified digital telemetry."
          ctaLabel="All 6 Solutions"
          ctaHref="/solutions"
        />

        <Reveal>
          {/* Interactive Featured Split Workbench */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-obsidian bg-ivory-light">
            {/* Left Selector Column */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-obsidian divide-y divide-concrete">
              {SOLUTIONS.map((sol) => {
                const isSelected = sol.id === active.id;
                return (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => setSelectedId(sol.id)}
                    aria-pressed={isSelected}
                    className={`w-full text-left p-5 sm:p-6 transition-colors flex items-start justify-between gap-4 min-h-[76px] ${
                      isSelected
                        ? "bg-obsidian text-ivory"
                        : "bg-ivory-light hover:bg-ivory text-obsidian"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span
                          className={`font-mono-tech text-[11px] uppercase ${
                            isSelected ? "text-signal" : "text-steel-dark"
                          }`}
                        >
                          {sol.code}
                        </span>
                        <span
                          className={`font-mono-tech text-[11px] uppercase ${
                            isSelected ? "text-steel-light" : "text-steel"
                          }`}
                        >
                          · {sol.category}
                        </span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">
                        {sol.title}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 mt-1 w-2.5 h-2.5 ${
                        isSelected ? "bg-signal" : "bg-concrete"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Detail Plate */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative aspect-[16/10] border-b border-concrete overflow-hidden bg-obsidian">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-obsidian/90 text-ivory font-mono-tech text-xs uppercase border border-ivory/20">
                  {active.code} // {active.tolerance}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="font-mono-tech text-xs uppercase tracking-wider text-signal-hover">
                    {active.subtitle}
                  </p>
                  <p className="text-base text-steel-dark leading-relaxed">{active.summary}</p>

                  {/* 3-Stat Spec Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-concrete font-mono-tech text-xs">
                    <div>
                      <span className="text-steel block mb-1">WORK ENVELOPE</span>
                      <span className="text-obsidian font-semibold">{active.envelope}</span>
                    </div>
                    <div>
                      <span className="text-steel block mb-1">LEAD SCHEDULE</span>
                      <span className="text-obsidian font-semibold">{active.leadTime}</span>
                    </div>
                    <div>
                      <span className="text-steel block mb-1">VOLUME SCALE</span>
                      <span className="text-obsidian font-semibold">{active.capacity}</span>
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {active.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2 text-xs sm:text-sm text-obsidian">
                        <Check className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-concrete flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {active.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 bg-ivory border border-concrete font-mono-tech text-[11px] text-obsidian"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/solutions#${active.id}`}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase font-semibold text-obsidian hover:text-signal-hover transition-colors"
                  >
                    <span>Inspect Specs</span>
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
