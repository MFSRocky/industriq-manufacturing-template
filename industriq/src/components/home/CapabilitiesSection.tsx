"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CERTIFIED_ALLOYS, ENGINEERING_TABS } from "@/data/capabilities";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs } from "@/components/ui/Tabs";
import { CadDatumDiagram } from "@/components/ui/TechnicalBlueprintSvg";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesSection() {
  const [activeTabId, setActiveTabId] = useState(ENGINEERING_TABS[0].id);
  const currentTab =
    ENGINEERING_TABS.find((t) => t.id === activeTabId) ?? ENGINEERING_TABS[0];

  return (
    <section className="bg-obsidian text-ivory py-20 lg:py-28 border-b border-ivory/15 bg-swiss-grid-dark">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="03"
          eyebrow="// ENGINEERING CAPABILITIES"
          title="Sub-micron tolerances engineered across exotic alloys."
          subtitle="Examine our machine envelopes, verified alloy grades, and closed-loop Zeiss CMM tolerances prior to uploading your CAD package."
          ctaLabel="Full Capability Matrix"
          ctaHref="/capabilities"
          theme="dark"
        />

        <Reveal>
          <div className="space-y-8">
            <Tabs
              ariaLabel="Engineering capability categories"
              tabs={ENGINEERING_TABS.map((t) => ({ id: t.id, label: t.label, code: t.code }))}
              activeId={activeTabId}
              onChange={setActiveTabId}
              theme="dark"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Technical Panel */}
              <div className="lg:col-span-7 border border-ivory/15 bg-obsidian-elevated p-6 sm:p-8 flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <span className="font-mono-tech text-xs text-signal uppercase tracking-widest">
                    {currentTab.code} // TECHNICAL SPECIFICATION
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory leading-tight">
                    {currentTab.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                    {currentTab.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 border border-ivory/15 divide-y sm:divide-y-0 sm:divide-x divide-ivory/15 bg-obsidian-deep">
                  {currentTab.metrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={`p-4 sm:p-5 ${
                        idx >= 2 ? "sm:border-t sm:border-ivory/15" : ""
                      }`}
                    >
                      <span className="font-mono-tech text-[11px] uppercase text-steel-light block mb-1">
                        {metric.label}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-semibold text-ivory tabular-nums">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Blueprint + Alloy Reference */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="border border-ivory/15 bg-obsidian-deep p-5 text-ivory">
                  <div className="flex items-center justify-between mb-3 font-mono-tech text-[11px] text-steel-light">
                    <span>SCHEMATIC // DATUM INTEGRITY</span>
                    <span className="text-signal">ISO 2768-fH</span>
                  </div>
                  <CadDatumDiagram className="text-ivory" />
                </div>

                <div className="border border-ivory/15 bg-obsidian-elevated p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase tracking-wider text-signal mb-3">
                      IN-STOCK CERTIFIED ALLOYS
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {CERTIFIED_ALLOYS.map((alloy) => (
                        <div
                          key={alloy.code}
                          className="p-2.5 border border-ivory/10 bg-obsidian-deep"
                        >
                          <span className="font-mono-tech text-[10px] text-signal block">
                            {alloy.code}
                          </span>
                          <span className="text-xs font-medium text-ivory line-clamp-1">
                            {alloy.family}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-ivory hover:text-signal transition-colors pt-2"
                  >
                    <span>Filter All Machine &amp; Material Specs</span>
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
