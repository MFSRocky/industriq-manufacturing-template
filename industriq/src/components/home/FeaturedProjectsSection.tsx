"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const SECTORS = ["All", "Aerospace", "E-Mobility", "Energy", "Robotics"] as const;

export function FeaturedProjectsSection() {
  const [filter, setFilter] = useState<(typeof SECTORS)[number]>("All");

  const visibleProjects =
    filter === "All" ? PROJECTS.slice(0, 3) : PROJECTS.filter((p) => p.sector === filter);

  const [leadProject, ...secondaryProjects] = visibleProjects;

  return (
    <section className="bg-obsidian text-ivory py-20 lg:py-28 border-b border-ivory/15">
      <div className="iq-container space-y-10">
        <SectionHeader
          indexCode="05"
          eyebrow="// FEATURED PROJECTS & CASE STUDIES"
          title="Validated production metrics from client factory floors."
          subtitle="Filter by industry sector to examine real engineering challenges, CMM telemetry results, and cycle-time reductions."
          ctaLabel="View All Case Studies"
          ctaHref="/projects"
          theme="dark"
        />

        {/* Sector Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
            {SECTORS.map((sec) => {
              const active = filter === sec;
              return (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setFilter(sec)}
                  aria-pressed={active}
                  className={`px-4 py-2.5 min-h-[44px] font-mono-tech text-xs uppercase tracking-wider border transition-colors ${
                    active
                      ? "bg-signal text-obsidian border-signal font-semibold"
                      : "bg-obsidian-elevated text-ivory/80 border-ivory/15 hover:border-ivory/50"
                  }`}
                >
                  {sec}
                </button>
              );
            })}
          </div>
          <span className="font-mono-tech text-xs text-steel-light uppercase">
            DISPLAYING {visibleProjects.length} VALIDATED DOSSIER{visibleProjects.length === 1 ? "" : "S"}
          </span>
        </div>

        <Reveal>
          {leadProject && (
            <div className="space-y-8">
              {/* Asymmetric Flagship Case Card */}
              <article className="grid grid-cols-1 lg:grid-cols-12 border border-ivory/20 bg-obsidian-elevated group">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden border-b lg:border-b-0 lg:border-r border-ivory/15">
                  <img
                    src={leadProject.image}
                    alt={leadProject.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-obsidian/90 border border-signal text-signal font-mono-tech text-xs uppercase">
                    {leadProject.code} · {leadProject.sector}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono-tech text-xs text-steel-light">
                      <span>{leadProject.material}</span>
                      <span className="text-signal">{leadProject.cycleDelta}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory leading-tight">
                      <Link
                        href={`/projects/${leadProject.slug}`}
                        className="hover:text-signal transition-colors"
                      >
                        {leadProject.title}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                      {leadProject.summary}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-ivory/15">
                      {leadProject.metrics.slice(0, 4).map((m) => (
                        <div key={m.label}>
                          <span className="font-mono-tech text-[10px] uppercase text-steel-light block">
                            {m.label}
                          </span>
                          <span className="font-display text-lg font-semibold text-ivory tabular-nums">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${leadProject.slug}`}
                      className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase font-semibold text-signal hover:text-ivory transition-colors"
                    >
                      <span>Open Telemetry Dossier</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Secondary Grid */}
              {secondaryProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {secondaryProjects.map((project) => (
                    <article
                      key={project.slug}
                      className="border border-ivory/15 bg-obsidian-elevated flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative aspect-[16/9] border-b border-ivory/15 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-obsidian/90 text-ivory font-mono-tech text-[11px] uppercase border border-ivory/20">
                            {project.sector} // {project.toleranceAchieved}
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between font-mono-tech text-xs text-steel-light">
                            <span>{project.code}</span>
                            <span className="text-signal">{project.cycleDelta}</span>
                          </div>
                          <h3 className="font-display text-xl font-semibold text-ivory leading-snug">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="hover:text-signal transition-colors"
                            >
                              {project.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-steel-light leading-relaxed">
                            {project.summary}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 py-4 border-t border-ivory/15 flex items-center justify-between font-mono-tech text-xs">
                        <span className="text-steel-light">{project.material}</span>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-ivory hover:text-signal transition-colors"
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
          )}
        </Reveal>
      </div>
    </section>
  );
}
