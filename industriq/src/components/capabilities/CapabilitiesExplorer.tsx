"use client";

import { useMemo, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { CAPABILITY_SPECS, CERTIFIED_ALLOYS } from "@/data/capabilities";

const CATEGORIES = ["All", "Machining", "Automation", "Additive", "Metrology", "Finishing"] as const;
const ALLOY_FAMILIES = ["All", "Titanium", "Aluminum", "Superalloy", "Stainless", "Polymer"] as const;

export function CapabilitiesExplorer() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [alloyFamily, setAlloyFamily] = useState<(typeof ALLOY_FAMILIES)[number]>("All");

  const filteredSpecs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CAPABILITY_SPECS.filter((item) => {
      const catMatch = category === "All" || item.category === category;
      const textMatch =
        !q ||
        item.process.toLowerCase().includes(q) ||
        item.machineClass.toLowerCase().includes(q) ||
        item.materials.some((m) => m.toLowerCase().includes(q));
      return catMatch && textMatch;
    });
  }, [category, query]);

  const filteredAlloys = useMemo(() => {
    return CERTIFIED_ALLOYS.filter(
      (a) => alloyFamily === "All" || a.family === alloyFamily
    );
  }, [alloyFamily]);

  return (
    <div className="space-y-20">
      {/* Equipment & Process Matrix */}
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter equipment category">
            {CATEGORIES.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`px-4 py-2.5 min-h-[44px] font-mono-tech text-xs uppercase tracking-wider border transition-colors ${
                    active
                      ? "bg-obsidian text-ivory border-obsidian"
                      : "bg-ivory-light text-obsidian border-concrete hover:border-obsidian"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-steel-dark absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search machine, material, spec..."
              aria-label="Search capability matrix"
              className="w-full min-h-[44px] pl-10 pr-4 bg-ivory-light border border-concrete focus:border-obsidian text-sm text-obsidian focus:outline-none"
            />
          </div>
        </div>

        {filteredSpecs.length === 0 ? (
          <div className="border border-obsidian bg-ivory-light p-10 text-center space-y-4">
            <p className="font-mono-tech text-xs uppercase text-signal-hover">NO MATCHING EQUIPMENT</p>
            <p className="text-sm text-steel-dark">
              No equipment records match &ldquo;{query}&rdquo; in {category}.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setQuery("");
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] border border-obsidian font-mono-tech text-xs uppercase hover:bg-obsidian hover:text-ivory transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto border border-obsidian bg-ivory-light">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="bg-obsidian text-ivory font-mono-tech text-[11px] uppercase tracking-wider">
                  <th className="p-4 border-r border-ivory/15">Code</th>
                  <th className="p-4 border-r border-ivory/15">Process &amp; Machine Class</th>
                  <th className="p-4 border-r border-ivory/15">Max Envelope</th>
                  <th className="p-4 border-r border-ivory/15">Tolerance</th>
                  <th className="p-4 border-r border-ivory/15">Surface Finish</th>
                  <th className="p-4">Primary Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-concrete text-sm">
                {filteredSpecs.map((spec) => (
                  <tr key={spec.id} className="hover:bg-ivory transition-colors align-top">
                    <td className="p-4 font-mono-tech text-xs text-signal-hover font-semibold border-r border-concrete whitespace-nowrap">
                      {spec.code}
                    </td>
                    <td className="p-4 border-r border-concrete">
                      <p className="font-display font-semibold text-obsidian">{spec.process}</p>
                      <p className="font-mono-tech text-xs text-steel-dark mt-1">
                        {spec.machineClass}
                      </p>
                    </td>
                    <td className="p-4 font-mono-tech text-xs text-obsidian border-r border-concrete whitespace-nowrap">
                      {spec.maxEnvelope}
                    </td>
                    <td className="p-4 font-mono-tech text-xs font-semibold text-obsidian border-r border-concrete whitespace-nowrap">
                      {spec.tolerance}
                    </td>
                    <td className="p-4 font-mono-tech text-xs text-steel-dark border-r border-concrete whitespace-nowrap">
                      {spec.surfaceFinish}
                    </td>
                    <td className="p-4 text-xs sm:text-sm text-steel-dark">{spec.keyAdvantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Certified Alloys Database */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-concrete pb-4">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover block mb-1">
              [ EN 10204 3.1 INVENTORY ]
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
              Certified Stocked Alloy Specifications
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter alloys by family">
            {ALLOY_FAMILIES.map((fam) => (
              <button
                key={fam}
                type="button"
                onClick={() => setAlloyFamily(fam)}
                aria-pressed={alloyFamily === fam}
                className={`px-3 py-2 min-h-[40px] font-mono-tech text-[11px] uppercase border transition-colors ${
                  alloyFamily === fam
                    ? "bg-signal text-obsidian border-signal font-semibold"
                    : "bg-ivory-light text-obsidian border-concrete hover:border-obsidian"
                }`}
              >
                {fam}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAlloys.map((alloy) => (
            <div
              key={alloy.code}
              className="border border-obsidian bg-ivory-light p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between font-mono-tech text-xs mb-2">
                  <span className="px-2 py-0.5 bg-obsidian text-signal">{alloy.code}</span>
                  <span className="text-steel-dark uppercase">{alloy.family}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-obsidian">{alloy.name}</h3>
                <p className="text-xs sm:text-sm text-steel-dark mt-2 leading-relaxed">
                  {alloy.typicalUse}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-concrete font-mono-tech text-[11px]">
                <div>
                  <span className="text-steel block">TENSILE</span>
                  <span className="text-obsidian font-semibold">{alloy.tensileMpa}</span>
                </div>
                <div>
                  <span className="text-steel block">DENSITY</span>
                  <span className="text-obsidian font-semibold">{alloy.density}</span>
                </div>
                <div>
                  <span className="text-steel block">MAX TEMP</span>
                  <span className="text-obsidian font-semibold">{alloy.maxTempC}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
