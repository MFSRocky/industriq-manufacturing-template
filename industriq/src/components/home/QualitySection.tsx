import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS, QA_BENCHMARKS } from "@/data/quality";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function QualitySection() {
  return (
    <section className="bg-ivory-warm text-obsidian py-20 lg:py-28 border-b border-concrete">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="07"
          eyebrow="// QUALITY & CERTIFICATIONS"
          title="Zero-defect culture audited to flight, medical, and automotive standards."
          subtitle="Every assembly leaves our metrology vault with serialized mill certificates, SPC statistics, and non-destructive test dossiers."
          ctaLabel="Inspect Quality Lab"
          ctaHref="/quality"
        />

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Image + Telemetry Card */}
            <div className="lg:col-span-5 border border-obsidian bg-obsidian text-ivory flex flex-col justify-between">
              <div className="relative aspect-[4/3] border-b border-ivory/15 overflow-hidden">
                <img
                  src="/images/solution-metrology-cmm.jpg"
                  alt="Zeiss CMM optical and ruby probe inspecting stainless steel valve block"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-obsidian/90 border border-signal font-mono-tech text-[11px] text-signal uppercase">
                  ISO 17025 // ZURICH LAB 02
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-4">
                {QA_BENCHMARKS.map((bm) => (
                  <div key={bm.label} className="border border-ivory/15 p-3.5 bg-obsidian-elevated">
                    <span className="font-mono-tech text-[10px] text-steel-light uppercase block">
                      {bm.label}
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-ivory mt-1 block tabular-nums">
                      {bm.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Certification Plaques Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.slice(0, 4).map((cert) => (
                <div
                  key={cert.id}
                  className="border border-obsidian bg-ivory-light p-6 flex flex-col justify-between gap-4 hover:border-signal transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono-tech text-xs font-semibold px-2.5 py-1 bg-obsidian text-ivory uppercase">
                        {cert.standard}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-signal shrink-0" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-obsidian">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-steel-dark mt-2 leading-relaxed">{cert.scope}</p>
                  </div>

                  <div className="pt-3 border-t border-concrete flex items-center justify-between font-mono-tech text-[11px] text-steel-dark">
                    <span>ID: {cert.certificateId}</span>
                    <span>VALID: {cert.validThrough}</span>
                  </div>
                </div>
              ))}

              {/* Full-width bottom banner */}
              <div className="sm:col-span-2 border border-obsidian bg-obsidian text-ivory p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono-tech text-[11px] text-signal uppercase block">
                    NADCAP AC7114 / AC7102 ACCREDITED
                  </span>
                  <p className="font-display text-base sm:text-lg font-medium mt-1">
                    Full CT X-Ray, Ultrasonic UT &amp; Fluorescent Penetrant NDT In-House.
                  </p>
                </div>
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-signal text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider shrink-0"
                >
                  <span>Audit Standards</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
