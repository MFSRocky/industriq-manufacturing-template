"use client";

import { useState } from "react";
import { Cpu, Activity, Layers, Radio } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const TECH_MODULES = [
  {
    id: "thermal-loop",
    code: "MOD-01",
    title: "Active Thermal Spindle Compensation",
    metric: "±0.3°C Casting Equilibrium",
    description:
      "Distributed fiber-optic temperature arrays embedded along spindle cartridges and X/Y/Z ballscrew nuts feed live expansion vectors into the CNC kernel, suppressing multi-hour dimensional drift.",
    specs: ["24-channel thermal sensing", "Sub-micron real-time G-offset", "84% drift reduction"],
  },
  {
    id: "opcua-cmm",
    code: "MOD-02",
    title: "Closed-Loop OPC-UA Tool Offset Feedback",
    metric: "46% Fewer Tool-Change Stops",
    description:
      "Zeiss Calypso metrology benches transmit radial and length deviation trends directly to cell PLCs, nudging finish tool compensation automatically before parts approach guardbands.",
    specs: ["Zero manual keyboard offset errors", "Full serial-level SPC stream", "AS9102 automated export"],
  },
  {
    id: "seam-optics",
    code: "MOD-03",
    title: "Coaxial 200Hz Fiber-Laser Seam Tracking",
    metric: "0.015 mm Beam Lock",
    description:
      "High-dynamic-range optical triangulation monitors weld joint geometry immediately ahead of the 8 kW laser keyhole, guaranteeing full penetration across varying aluminum extrusions.",
    specs: ["Real-time plasma photodiode QC", "Zero spatter oscillation", "100% helium-leak correlation"],
  },
  {
    id: "digital-thread",
    code: "MOD-04",
    title: "Immutable QR Digital Thread Genealogy",
    metric: "100% Part-to-Melt Trace",
    description:
      "Every finished component receives a direct laser DataMatrix linking raw furnace melt certificates, spindle torque logs, passivation bath logs, and CMM heatmaps in one record.",
    specs: ["10-year encrypted retention", "ERP / EDI ASN live sync", "Zero paper traveler defects"],
  },
];

const MODULE_ICONS = [Cpu, Activity, Radio, Layers];

export function TechnologySection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = TECH_MODULES[selectedIdx] ?? TECH_MODULES[0];

  return (
    <section className="bg-obsidian text-ivory py-20 lg:py-28 border-b border-ivory/15 bg-swiss-grid-dark">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="08"
          eyebrow="// TECHNOLOGY & INNOVATION"
          title="Closed-loop factory intelligence replacing human guesswork."
          subtitle="We engineer proprietary sensor telemetry, kinematic machine twins, and predictive metrology loops into every production cell."
          theme="dark"
        />

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Interactive Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH_MODULES.map((mod, idx) => {
                const Icon = MODULE_ICONS[idx % MODULE_ICONS.length];
                const isSelected = idx === selectedIdx;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    aria-pressed={isSelected}
                    className={`p-6 border text-left transition-colors flex flex-col justify-between gap-6 ${
                      isSelected
                        ? "border-signal bg-obsidian-elevated"
                        : "border-ivory/15 bg-obsidian-deep hover:border-ivory/40"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono-tech text-xs text-signal">{mod.code}</span>
                      <Icon
                        className={`w-5 h-5 ${isSelected ? "text-signal" : "text-steel-light"}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ivory leading-snug">
                        {mod.title}
                      </h3>
                      <p className="font-mono-tech text-xs text-steel-light mt-2">{mod.metric}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Telemetry Detail Viewport */}
            <div className="lg:col-span-6 border border-ivory/20 bg-obsidian-elevated flex flex-col justify-between">
              <div className="relative aspect-[16/9] border-b border-ivory/15 overflow-hidden">
                <img
                  src="/images/hero-robotics-detail.jpg"
                  alt="Articulated precision industrial robot arm with active optical inspection status"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-tech text-xs">
                  <span className="px-2.5 py-1 bg-signal text-obsidian font-semibold uppercase">
                    {active.code} ACTIVE
                  </span>
                  <span className="text-ivory bg-obsidian/80 px-2.5 py-1 border border-ivory/20">
                    {active.metric}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="font-display text-2xl font-semibold text-ivory">{active.title}</h3>
                <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                  {active.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-ivory/15">
                  {active.specs.map((spec) => (
                    <div
                      key={spec}
                      className="p-3 bg-obsidian-deep border border-ivory/10 font-mono-tech text-[11px] text-ivory"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
