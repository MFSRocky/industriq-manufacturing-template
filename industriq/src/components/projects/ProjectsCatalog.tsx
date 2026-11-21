"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, RotateCcw } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const SECTORS = ["All", "Aerospace", "E-Mobility", "Energy", "Robotics"] as const;

export function ProjectsCatalog() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "code">("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PROJECTS.filter((p) => {
      const sMatch = sector === "All" || p.sector === sector;
      const qMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.process.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return sMatch && qMatch;
    });

    return [...list].sort((a, b) =>
      sortBy === "newest" ? Number(b.year) - Number(a.year) : a.code.localeCompare(b.code)
    );
  }, [sector, query, sortBy]);

  return (
    <div className="space-y-8">
      {/* Multi-Control Filter Toolbar */}
      <div className="border border-obsidian bg-ivory-light p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by sector">
          {SECTORS.map((sec) => {
            const active = sector === sec;
            return (
              <button
                key={sec}
                type="button"
                onClick={() => setSector(sec)}
                aria-pressed={active}
                className={`px-3.5 py-2 min-h-[44px] font-mono-tech text-xs uppercase border transition-colors ${
                  active
                    ? "bg-signal text-obsidian border-signal font-semibold"
                    : "bg-ivory text-obsidian border-concrete hover:border-obsidian"
                }`}
              >
                {sec}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-steel-dark absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search alloy, process, keyword..."
              aria-label="Search engineering case studies"
              className="w-full min-h-[44px] pl-9 pr-3 bg-ivory border border-concrete focus:border-obsidian text-sm text-obsidian focus:outline-none"
            />
          </div>

          <label className="sr-only" htmlFor="projects-sort">
            Sort projects
          </label>
          <select
            id="projects-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "code")}
            className="min-h-[44px] px-3 bg-ivory border border-concrete font-mono-tech text-xs uppercase text-obsidian focus:outline-none"
          >
            <option value="newest">Sort: Latest First</option>
            <option value="code">Sort: Dossier Code</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-steel-dark uppercase">
        <span>
          Showing {filtered.length} of {PROJECTS.length} validated production dossiers
        </span>
        {(sector !== "All" || query) && (
          <button
            type="button"
            onClick={() => {
              setSector("All");
              setQuery("");
            }}
            className="inline-flex items-center gap-1.5 text-signal-hover hover:underline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Catalog Grid or Empty State */}
      {filtered.length === 0 ? (
        <div className="border border-obsidian bg-ivory-light p-12 text-center space-y-4">
          <p className="font-mono-tech text-xs text-signal-hover uppercase">ZERO MATCHES</p>
          <h3 className="font-display text-2xl font-semibold text-obsidian">
            No case studies matched your filter criteria.
          </h3>
          <button
            type="button"
            onClick={() => {
              setSector("All");
              setQuery("");
            }}
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-obsidian text-ivory font-mono-tech text-xs uppercase"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Catalog</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="border border-obsidian bg-ivory-light flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] border-b border-obsidian overflow-hidden bg-obsidian">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-obsidian/90 text-ivory font-mono-tech text-[11px] uppercase border border-ivory/20">
                    {project.sector} · {project.year}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="text-signal-hover font-semibold">{project.code}</span>
                    <span className="text-steel-dark">{project.cycleDelta}</span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-obsidian leading-snug">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-signal-hover transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-steel-dark leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-concrete flex items-center justify-between font-mono-tech text-xs bg-ivory">
                <span className="text-obsidian font-medium truncate pr-2">{project.material}</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-obsidian hover:text-signal-hover font-semibold shrink-0"
                >
                  <span>Dossier</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
