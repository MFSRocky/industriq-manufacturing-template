import Link from "next/link";
import { ArrowUpRight, FileCheck2 } from "lucide-react";

export function ConversionCtaSection() {
  return (
    <section className="bg-signal text-obsidian border-b border-obsidian">
      <div className="iq-container py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest px-3 py-1 bg-obsidian text-ivory">
              <FileCheck2 className="w-3.5 h-3.5 text-signal" />
              <span>24-HOUR DFM &amp; PRODUCTION QUOTATION DESK</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[0.98] text-obsidian">
              READY TO MOVE FROM PROTOTYPE TO ZERO-DEFECT SERIES?
            </h2>

            <p className="text-base sm:text-lg text-obsidian/85 max-w-2xl leading-relaxed font-medium">
              Submit your STEP or IGES assembly package with tolerance targets. Our Stuttgart and
              Zurich manufacturing engineers return full DFM feedback and fixed lead times inside
              one business day.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-4 px-6 py-4 min-h-[54px] bg-obsidian hover:bg-obsidian-elevated text-ivory font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Request Production RFQ</span>
              <ArrowUpRight className="w-4 h-4 text-signal" />
            </Link>

            <Link
              href="/capabilities"
              className="inline-flex items-center justify-between gap-4 px-6 py-4 min-h-[54px] border border-obsidian bg-transparent hover:bg-obsidian/10 text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Download Alloy &amp; Tolerance Specs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
