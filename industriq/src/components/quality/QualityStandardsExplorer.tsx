"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "@/data/quality";
import { Tabs } from "@/components/ui/Tabs";

export function QualityStandardsExplorer() {
  const [activeId, setActiveId] = useState(CERTIFICATIONS[0].id);
  const current = CERTIFICATIONS.find((c) => c.id === activeId) ?? CERTIFICATIONS[0];

  return (
    <div className="space-y-8">
      <Tabs
        ariaLabel="Quality management certifications"
        tabs={CERTIFICATIONS.map((c) => ({ id: c.id, label: c.standard }))}
        activeId={activeId}
        onChange={setActiveId}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 border border-obsidian bg-ivory-light">
        <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-concrete bg-obsidian text-ivory flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-signal uppercase">
                ACCREDITED STANDARD
              </span>
              <ShieldCheck className="w-6 h-6 text-signal" />
            </div>
            <h3 className="font-display text-3xl font-bold text-ivory">{current.standard}</h3>
            <p className="font-display text-lg text-ivory/90">{current.title}</p>
            <p className="text-sm text-steel-light leading-relaxed">{current.scope}</p>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-ivory/15 font-mono-tech text-xs">
            <div className="flex justify-between">
              <span className="text-steel-light">CERTIFICATE NO.</span>
              <span className="text-ivory">{current.certificateId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel-light">REGISTRAR</span>
              <span className="text-ivory">{current.auditor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel-light">VALID THROUGH</span>
              <span className="text-signal">{current.validThrough}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-8">
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-wider text-signal-hover mb-4">
              [ ENFORCED COMPLIANCE CONTROLS ]
            </h4>
            <ul className="space-y-4">
              {current.controls.map((ctrl) => (
                <li key={ctrl} className="flex items-start gap-3 text-sm sm:text-base text-obsidian">
                  <CheckCircle2 className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                  <span>{ctrl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-concrete">
            <span className="font-mono-tech text-xs uppercase text-steel-dark block mb-2.5">
              AUDITED FACILITIES SCOPE
            </span>
            <div className="flex flex-wrap gap-2">
              {current.facilities.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 bg-ivory border border-obsidian font-mono-tech text-xs text-obsidian"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
