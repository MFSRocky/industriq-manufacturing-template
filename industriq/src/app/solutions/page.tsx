import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Manufacturing Solutions — CNC, Robotics, DMLS & Metrology",
  description:
    "Explore INDUSTRIQ production systems: 5-axis CNC machining, turnkey robotic cells, direct metal laser sintering, heavy mill-turn, and ISO 17025 metrology.",
};

const ENGAGEMENT_TIERS = [
  {
    code: "TIER 01 // PROTOTYPE & FAI",
    title: "Rapid Flight & Validation Runs",
    volume: "1 – 50 Serial Units",
    lead: "4–10 Business Days",
    highlights: [
      "Zero-tooling DFM optimization in < 24h",
      "5-axis monolithic billet or DMLS build",
      "Full AS9102 / First Article Inspection pack",
    ],
  },
  {
    code: "TIER 02 // BRIDGE & SERIES",
    title: "Autonomous Pallet-Pool Production",
    volume: "100 – 25,000 Units / Yr",
    lead: "Scheduled KanBan / EDI",
    highlights: [
      "Dedicated Fastems zero-point pallet fixtures",
      "24/7 lights-out machining with in-cycle probing",
      "Continuous SPC capability Cpk ≥ 1.67 reporting",
    ],
  },
  {
    code: "TIER 03 // TURNKEY CELL",
    title: "Dedicated Robotic Line Integration",
    volume: "Plant-Level Automation",
    lead: "8–16 Weeks Commissioned",
    highlights: [
      "Custom KUKA / ABB robotic laser-weld or tending cells",
      "Offline digital-twin cycle validation & CE safety",
      "Full FAT acceptance in Stuttgart + on-site install",
    ],
  },
];

const SOLUTIONS_FAQ: AccordionEntry[] = [
  {
    id: "faq-cad",
    code: "01",
    question: "Which CAD formats and GD&T standards do you accept for quoting?",
    answer:
      "We ingest STEP (AP214/AP242), Parasolid (.x_t), IGES, and native SolidWorks/CATIA assemblies alongside PDF engineering drawings calibrated to ISO GPS or ASME Y14.5-2018 GD&T standards.",
  },
  {
    id: "faq-hybrid",
    code: "02",
    question: "Can INDUSTRIQ combine DMLS metal additive with 5-axis finish CNC under one roof?",
    answer:
      "Yes. All DMLS builds produced in Zurich Lab 02 receive integrated stress relief, Hot Isostatic Pressing (HIP), CT scan verification, and 5-axis CNC datum finish machining prior to Zeiss CMM sign-off.",
  },
  {
    id: "faq-turnkey",
    code: "03",
    question: "Do you integrate turnkey robotic cells inside customer factories worldwide?",
    answer:
      "Yes. Our Stuttgart and Austin integration teams engineer, wire, and run full Factory Acceptance Tests (FAT) before shipping modular cells worldwide for on-site Site Acceptance Testing (SAT) and operator training.",
  },
  {
    id: "faq-nda",
    code: "04",
    question: "How is proprietary IP protected across ITAR and Tier-1 automotive programs?",
    answer:
      "All customer STEP files reside on air-gapped encrypted EU/US plant servers aligned with TISAX Level 3 and ITAR physical access controls. Mutual NDAs are executed prior to CAD transfer.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ PRODUCTION ARCHITECTURES // SOLUTIONS ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              SCALABLE MANUFACTURING SYSTEMS FROM PROTOTYPE TO LIGHTS-OUT SERIES.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Compare production engagement tiers or inspect individual machining, additive,
              robotic, and optical inspection divisions below.
            </p>
          </div>

          {/* 3-Tier Engagement Comparison */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 border border-ivory/20 divide-y lg:divide-y-0 lg:divide-x divide-ivory/20 bg-obsidian-elevated">
            {ENGAGEMENT_TIERS.map((tier) => (
              <div key={tier.code} className="p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <span className="font-mono-tech text-xs text-signal uppercase">{tier.code}</span>
                  <h2 className="font-display text-2xl font-semibold text-ivory">{tier.title}</h2>
                  <div className="flex flex-wrap gap-3 font-mono-tech text-xs text-steel-light pt-1">
                    <span className="px-2 py-1 bg-obsidian-deep border border-ivory/15 text-ivory">
                      {tier.volume}
                    </span>
                    <span className="px-2 py-1 bg-obsidian-deep border border-ivory/15">
                      {tier.lead}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 border-t border-ivory/15 pt-4">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ivory/85">
                      <Check className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 6-Solution Catalog */}
      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container space-y-12">
          {SOLUTIONS.map((sol) => (
            <article
              key={sol.id}
              id={sol.id}
              className="grid grid-cols-1 lg:grid-cols-12 border border-obsidian bg-ivory-light scroll-mt-24"
            >
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto border-b lg:border-b-0 lg:border-r border-obsidian overflow-hidden bg-obsidian">
                <img
                  src={sol.image}
                  alt={sol.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-obsidian/90 text-signal font-mono-tech text-xs uppercase border border-signal/50">
                  {sol.code} // {sol.category}
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs text-signal-hover">
                    <span>{sol.subtitle}</span>
                    <span className="px-2.5 py-1 bg-obsidian text-ivory">{sol.tolerance}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                    {sol.title}
                  </h2>
                  <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
                    {sol.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-ivory border border-concrete font-mono-tech text-xs">
                    <div>
                      <span className="text-steel block mb-1">ENVELOPE</span>
                      <span className="text-obsidian font-semibold">{sol.envelope}</span>
                    </div>
                    <div>
                      <span className="text-steel block mb-1">LEAD WINDOW</span>
                      <span className="text-obsidian font-semibold">{sol.leadTime}</span>
                    </div>
                    <div>
                      <span className="text-steel block mb-1">SCALE</span>
                      <span className="text-obsidian font-semibold">{sol.capacity}</span>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {sol.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2 text-sm text-obsidian">
                        <Check className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-concrete flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {sol.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 bg-ivory border border-concrete font-mono-tech text-[11px]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?process=${encodeURIComponent(sol.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-obsidian hover:bg-signal hover:text-obsidian text-ivory font-mono-tech text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Quote This System</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Solutions Technical FAQ */}
      <section className="bg-ivory-warm text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover">
              [ ENGINEERING FAQ ]
            </span>
            <h2 className="font-display text-3xl font-semibold">
              Common technical intake specifications.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={SOLUTIONS_FAQ} />
          </div>
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
