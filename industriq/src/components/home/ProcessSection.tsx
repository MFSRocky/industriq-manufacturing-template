"use client";

import { useState } from "react";
import { PROCESS_STAGES } from "@/data/solutions";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = PROCESS_STAGES[activeIndex] ?? PROCESS_STAGES[0];

  return (
    <section className="bg-ivory text-obsidian py-20 lg:py-28 border-b border-concrete">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="06"
          eyebrow="// MANUFACTURING PROCESS"
          title="Five gated phases from STEP file ingestion to certified dispatch."
          subtitle="Click any workflow gate to inspect required engineering inputs, active quality interlocks, and cycle turnaround guarantees."
        />

        <Reveal>
          <div className="space-y-6">
            {/* Interactive Horizontal 5-Step Pipeline */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-obsidian divide-y sm:divide-y-0 sm:divide-x divide-concrete bg-ivory-light"
              role="tablist"
              aria-label="Five phase manufacturing workflow"
            >
              {PROCESS_STAGES.map((stage, idx) => {
                const selected = idx === activeIndex;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-5 text-left transition-colors flex flex-col justify-between gap-4 min-h-[126px] ${
                      selected
                        ? "bg-obsidian text-ivory"
                        : "hover:bg-ivory-warm text-obsidian"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full font-mono-tech text-xs">
                      <span className={selected ? "text-signal" : "text-steel-dark"}>
                        {stage.step} //
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 border ${
                          selected
                            ? "border-signal text-signal"
                            : "border-concrete text-steel-dark"
                        }`}
                      >
                        {stage.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-base font-semibold leading-snug">
                        {stage.title}
                      </h3>
                      <p
                        className={`font-mono-tech text-[11px] mt-1 ${
                          selected ? "text-steel-light" : "text-steel"
                        }`}
                      >
                        {stage.code}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Engineering Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-obsidian bg-ivory-light">
              <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-concrete flex flex-col justify-between gap-6">
                <div>
                  <span className="font-mono-tech text-xs uppercase text-signal-hover block mb-2">
                    ACTIVE PHASE // {current.code}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-steel-dark leading-relaxed">
                    {current.summary}
                  </p>
                </div>

                <div className="p-4 bg-obsidian text-ivory flex items-center justify-between">
                  <span className="font-mono-tech text-xs uppercase text-steel-light">
                    {current.metricLabel}
                  </span>
                  <span className="font-display text-2xl font-bold text-signal tabular-nums">
                    {current.metricValue}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-concrete">
                <div className="p-6 sm:p-8">
                  <h4 className="font-mono-tech text-xs uppercase tracking-wider text-steel-dark mb-4">
                    [ REQUIRED INPUTS ]
                  </h4>
                  <ul className="space-y-3">
                    {current.inputs.map((inp) => (
                      <li
                        key={inp}
                        className="flex items-start gap-2.5 text-sm font-medium text-obsidian"
                      >
                        <ArrowRight className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 sm:p-8 bg-ivory">
                  <h4 className="font-mono-tech text-xs uppercase tracking-wider text-steel-dark mb-4">
                    [ VALIDATED OUTPUTS ]
                  </h4>
                  <ul className="space-y-3">
                    {current.outputs.map((out) => (
                      <li
                        key={out}
                        className="flex items-start gap-2.5 text-sm font-medium text-obsidian"
                      >
                        <span
                          className="w-2 h-2 bg-obsidian shrink-0 mt-1.5"
                          aria-hidden="true"
                        />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
