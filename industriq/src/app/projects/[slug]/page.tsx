import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Dossier Header */}
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-12 sm:py-16 lg:py-20 space-y-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-steel-light hover:text-signal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Archive</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                <span className="px-2.5 py-1 bg-signal text-obsidian font-semibold uppercase">
                  {project.code}
                </span>
                <span className="text-ivory/80 uppercase">{project.sector}</span>
                <span className="text-ivory/30">|</span>
                <span className="text-steel-light">{project.facility}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.02]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-steel-light leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            <div className="lg:col-span-4 border border-ivory/20 bg-obsidian-elevated p-5 space-y-3 font-mono-tech text-xs">
              <div className="flex justify-between border-b border-ivory/10 pb-2">
                <span className="text-steel-light">CLIENT PROFILE</span>
                <span className="text-ivory text-right">{project.clientType}</span>
              </div>
              <div className="flex justify-between border-b border-ivory/10 pb-2">
                <span className="text-steel-light">PRIMARY ALLOY</span>
                <span className="text-ivory text-right">{project.material}</span>
              </div>
              <div className="flex justify-between border-b border-ivory/10 pb-2">
                <span className="text-steel-light">TOLERANCE CLASS</span>
                <span className="text-signal text-right">{project.toleranceAchieved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-light">PROCESS DELTA</span>
                <span className="text-ivory text-right">{project.cycleDelta}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visuals + Narrative */}
      <section className="bg-ivory text-obsidian py-14 sm:py-20 border-b border-concrete">
        <div className="iq-container space-y-14">
          {/* Dual Visual Plate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 border border-obsidian overflow-hidden aspect-[16/10] bg-obsidian">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="border border-obsidian overflow-hidden aspect-[16/10] lg:aspect-auto lg:flex-1 bg-obsidian">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary manufacturing process view`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 border border-obsidian divide-x divide-y divide-concrete bg-ivory-light">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-4">
                    <span className="font-mono-tech text-[10px] uppercase text-steel-dark block">
                      {m.label}
                    </span>
                    <span className="font-display text-xl font-bold text-obsidian tabular-nums mt-1 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Column Technical Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-obsidian divide-y lg:divide-y-0 lg:divide-x divide-concrete bg-ivory-light">
            <div className="p-6 sm:p-8 space-y-3">
              <span className="font-mono-tech text-xs text-signal-hover uppercase">
                01 // ENGINEERING CHALLENGE
              </span>
              <h2 className="font-display text-xl font-semibold text-obsidian">
                Failure Mode &amp; Baseline
              </h2>
              <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <span className="font-mono-tech text-xs text-signal-hover uppercase">
                02 // PROCESS ARCHITECTURE
              </span>
              <h2 className="font-display text-xl font-semibold text-obsidian">
                Deployed Methodology
              </h2>
              <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-ivory">
              <span className="font-mono-tech text-xs text-signal-hover uppercase">
                03 // VALIDATED IMPACT
              </span>
              <h2 className="font-display text-xl font-semibold text-obsidian">
                Production Outcome
              </h2>
              <p className="text-sm sm:text-base text-obsidian leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Zeiss CMM Metrology Verification Table */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono-tech text-xs uppercase text-signal-hover block">
                  [ CMM TELEMETRY LOG // LOT RELEASE ]
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                  Verified GD&amp;T Dimensional Audit
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-obsidian px-3 py-1.5 border border-obsidian bg-ivory-light">
                <CheckCircle2 className="w-4 h-4 text-signal" />
                <span>AS9102 / ZEISS PRISMO SIGN-OFF</span>
              </span>
            </div>

            <div className="overflow-x-auto border border-obsidian bg-ivory-light">
              <table className="w-full text-left border-collapse min-w-[660px]">
                <thead>
                  <tr className="bg-obsidian text-ivory font-mono-tech text-[11px] uppercase tracking-wider">
                    <th className="p-4 border-r border-ivory/15">Measured Feature</th>
                    <th className="p-4 border-r border-ivory/15">Nominal CAD</th>
                    <th className="p-4 border-r border-ivory/15">Tolerance Band</th>
                    <th className="p-4 border-r border-ivory/15">Lot Mean</th>
                    <th className="p-4">Capability (Cpk)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-concrete font-mono-tech text-xs sm:text-sm">
                  {project.metrologyTable.map((row) => (
                    <tr key={row.feature} className="hover:bg-ivory">
                      <td className="p-4 font-sans font-semibold text-obsidian border-r border-concrete">
                        {row.feature}
                      </td>
                      <td className="p-4 border-r border-concrete tabular-nums">{row.nominal}</td>
                      <td className="p-4 border-r border-concrete tabular-nums text-steel-dark">
                        {row.tolerance}
                      </td>
                      <td className="p-4 border-r border-concrete tabular-nums font-semibold text-obsidian">
                        {row.measuredMean}
                      </td>
                      <td className="p-4 tabular-nums font-bold text-signal-hover">{row.cpk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Direct Similar Assembly Action */}
          <div className="border border-obsidian bg-obsidian text-ivory p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono-tech text-xs text-signal uppercase">
                SIMILAR ASSEMBLY REQUIREMENT?
              </span>
              <h3 className="font-display text-2xl font-semibold mt-1">
                Request DFM review for {project.process} in {project.material}.
              </h3>
            </div>
            <Link
              href={`/contact?process=${encodeURIComponent(project.process)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider shrink-0"
            >
              <span>Request Similar Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-ivory-warm text-obsidian py-14 sm:py-20 border-b border-concrete">
        <div className="iq-container space-y-8">
          <div className="flex items-center justify-between border-b border-concrete pb-4">
            <h2 className="font-display text-2xl font-semibold">Additional Case Dossiers</h2>
            <Link
              href="/projects"
              className="font-mono-tech text-xs uppercase text-signal-hover hover:underline"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="border border-obsidian bg-ivory-light p-6 flex flex-col justify-between gap-4 hover:bg-ivory transition-colors group"
              >
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs text-signal-hover">
                    {item.code} · {item.sector}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-obsidian group-hover:text-signal-hover transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-steel-dark">{item.summary}</p>
                </div>
                <span className="font-mono-tech text-xs uppercase inline-flex items-center gap-1.5 text-obsidian font-semibold">
                  <span>Inspect Dossier</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
