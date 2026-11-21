import type { Metadata } from "next";
import { CERTIFICATIONS, QA_BENCHMARKS, QA_GATES } from "@/data/quality";
import { QualityStandardsExplorer } from "@/components/quality/QualityStandardsExplorer";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Quality & Certifications — AS9100D, ISO 13485 & CMM Lab",
  description:
    "Explore INDUSTRIQ quality assurance protocols, active TÜV/BSI/DEKRA/NADCAP accreditations, four-gate verification process, and 20°C Zeiss metrology laboratory.",
};

const QA_FAQ: AccordionEntry[] = [
  {
    id: "qa-fai",
    code: "01",
    question: "Are AS9102 First Article Inspection (FAI) packages included with flight lots?",
    answer:
      "Yes. All new revisions and serialized aerospace orders ship with full ballooned engineering drawings, Form 1–3 AS9102 packets, raw EN 10204 3.1 mill certificates, and Zeiss CMM measurement files.",
  },
  {
    id: "qa-calib",
    code: "02",
    question: "How often are CMMs and laser interferometers calibrated?",
    answer:
      "All Zeiss PRISMO CMM units undergo annual PTB/NIST traceable laser-interferometer calibration alongside daily artifact sphere checks inside our 20.0°C ±0.3°C stabilized metrology room.",
  },
  {
    id: "qa-audit",
    code: "03",
    question: "Can supplier quality engineers conduct on-site vendor audits in Stuttgart or Zurich?",
    answer:
      "Yes. Tier-1 OEM supplier quality audits and live customer witness testing are hosted weekly across Stuttgart Plant 01, Zurich Lab 02, and Austin Hub 03 upon scheduling through our Quality Desk.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ QUALITY ASSURANCE // METROLOGY LAB ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              ZERO-DEFECT GOVERNANCE AT EVERY PRODUCTION GATE.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Audited annually across {CERTIFICATIONS.length} international quality frameworks,
              combining 100% incoming PMI spectrometry with closed-loop optical CMM inspection.
            </p>
          </div>

          <div className="lg:col-span-5 border border-ivory/20 overflow-hidden aspect-[4/3] bg-obsidian-deep">
            <img
              src="/images/solution-metrology-cmm.jpg"
              alt="Zeiss tactile CMM ruby probe verifying precision stainless manifold"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rolling Benchmarks */}
      <section className="bg-ivory-warm text-obsidian border-b border-concrete">
        <div className="iq-container py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QA_BENCHMARKS.map((item) => (
            <div key={item.label} className="border border-obsidian bg-ivory-light p-5">
              <span className="font-mono-tech text-[11px] uppercase text-signal-hover block">
                {item.label}
              </span>
              <p className="font-display text-3xl font-bold text-obsidian mt-1 tabular-nums">
                {item.value}
              </p>
              <p className="text-xs text-steel-dark mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Certificate Explorer */}
      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container space-y-8">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover block mb-2">
              [ ACTIVE REGISTRATIONS ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Inspect Accredited Management Frameworks
            </h2>
          </div>

          <QualityStandardsExplorer />
        </div>
      </section>

      {/* 4-Gate Inspection Pipeline */}
      <section className="bg-obsidian text-ivory py-16 sm:py-24 border-b border-ivory/15">
        <div className="iq-container space-y-10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal block mb-2">
              [ FOUR-GATE PROTOCOL ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Non-bypassable inspection interlocks from billet to crate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-ivory/20 divide-y md:divide-y-0 md:divide-x divide-ivory/20 bg-obsidian-elevated">
            {QA_GATES.map((g) => (
              <div key={g.gate} className="p-6 space-y-3">
                <span className="font-mono-tech text-xs text-signal">{g.gate}</span>
                <h3 className="font-display text-xl font-semibold text-ivory">{g.title}</h3>
                <p className="text-sm text-steel-light leading-relaxed">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit FAQ */}
      <section className="bg-ivory text-obsidian py-16 sm:py-20 border-b border-concrete">
        <div className="iq-container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover">
              [ AUDIT &amp; TRACEABILITY FAQ ]
            </span>
            <h2 className="font-display text-3xl font-semibold">
              Compliance &amp; Audit Readiness
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={QA_FAQ} />
          </div>
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
