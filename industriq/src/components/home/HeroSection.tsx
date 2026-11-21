"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) return;

    const onScroll = () => {
      setScrollY(Math.min(window.scrollY, 600));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative bg-obsidian text-ivory border-b border-ivory/15 overflow-hidden bg-swiss-grid-dark">
      {/* Decorative vertical architectural axis lines */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden lg:block w-px bg-ivory/10"
        aria-hidden="true"
      />

      <div className="iq-container relative pt-6 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
        {/* Top Metadata Telemetry Rail */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 pb-5 mb-6 sm:mb-8 border-b border-ivory/15 font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-widest text-steel-light">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="inline-block w-2 h-2 bg-signal shrink-0" aria-hidden="true" />
            <span className="text-ivory">SPEC // SERIES 2026.4</span>
            <span className="hidden sm:inline text-ivory/25">—</span>
            <span className="hidden sm:inline">STUTTGART · ZURICH · AUSTIN</span>
          </div>
          <div className="flex items-center gap-4">
            <span>TOLERANCE: ±0.002 MM</span>
            <span className="text-signal hidden sm:inline">AS9100D / ISO 13485</span>
          </div>
        </div>

        {/* Main Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Editorial Typography Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 sm:gap-10">
            <div>
              <p className="font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-signal mb-4 sm:mb-5">
                [ 00 // PRECISION MANUFACTURING ]
              </p>

              <h1 className="font-display font-bold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(2.65rem,6.4vw,5.75rem)] text-ivory">
                PRECISION
                <br />
                AT <span className="text-signal">INDUSTRIAL</span>
                <br />
                SCALE.
              </h1>

              <p className="mt-7 text-base sm:text-lg lg:text-xl text-ivory/80 leading-relaxed max-w-xl">
                We architect autonomous 5-axis machining cells, fiber-laser robotic assemblies,
                and flight-certified titanium hardware for aerospace, energy, and medical OEMs.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 min-h-[52px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Request Production Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/capabilities"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 min-h-[52px] border border-ivory/30 hover:border-ivory bg-obsidian-elevated/60 hover:bg-ivory/10 text-ivory font-mono-tech text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>
              </div>
            </div>

            {/* Bottom Technical Index Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-ivory/15 divide-y sm:divide-y-0 sm:divide-x divide-ivory/15 bg-obsidian-deep/70">
              {[
                { code: "01", label: "5-Axis CNC", spec: "2,400 mm span" },
                { code: "02", label: "DMLS Metal", spec: "Ti-6Al-4V / In718" },
                { code: "03", label: "Robotic Cells", spec: "98.4% OEE run" },
                { code: "04", label: "Zeiss CMM", spec: "0.7 µm + L/400" },
              ].map((cell) => (
                <div key={cell.code} className="p-3.5 sm:p-4">
                  <span className="font-mono-tech text-[10px] text-signal block mb-1">
                    SYS-{cell.code}
                  </span>
                  <p className="font-display text-sm font-semibold text-ivory">{cell.label}</p>
                  <p className="font-mono-tech text-[11px] text-steel-light mt-0.5">{cell.spec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cinematic Photographic Composition */}
          <div className="lg:col-span-5 relative flex flex-col justify-between gap-4">
            <div className="relative border border-ivory/20 bg-obsidian-deep overflow-hidden aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:h-[520px]">
              <img
                src="/images/hero-cnc-monolith.jpg"
                alt="5-axis CNC machining center cutting an aerospace structural bulkhead under warm lighting"
                className="w-full h-full object-cover object-center transition-transform duration-300 will-change-transform"
                style={{ transform: `scale(1.04) translateY(${scrollY * 0.06}px)` }}
              />
              {/* Subtle architectural gradient for label contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30"
                aria-hidden="true"
              />

              {/* Corner calibration reticle */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-signal" aria-hidden="true" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-signal" aria-hidden="true" />

              {/* Overlay metadata tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 bg-obsidian/85 backdrop-blur-sm border border-ivory/15 px-3.5 py-2.5">
                <div>
                  <span className="font-mono-tech text-[10px] text-signal uppercase block">
                    BAY 04 // STUTTGART
                  </span>
                  <span className="font-display text-xs sm:text-sm font-medium text-ivory">
                    Hermle / DMG Monolithic 5-Axis Cell
                  </span>
                </div>
                <span className="font-mono-tech text-[11px] text-ivory/80 shrink-0">
                  IT5 // ±2 µm
                </span>
              </div>
            </div>

            {/* Secondary inset detail strip */}
            <div className="grid grid-cols-12 border border-ivory/20 bg-obsidian-elevated overflow-hidden">
              <div className="col-span-5 relative aspect-[3/2] border-r border-ivory/15 overflow-hidden">
                <img
                  src="/images/hero-robotics-detail.jpg"
                  alt="Articulated precision industrial robot arm calibrated on optical plate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-7 p-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-signal">
                    DFM RESPONSE GUARANTEE
                  </span>
                  <p className="font-display text-sm sm:text-base font-semibold text-ivory mt-1">
                    Full engineering feasibility &amp; fixed quote within 24 hours.
                  </p>
                </div>
                <a
                  href="#scale-metrics"
                  className="mt-3 inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase text-steel-light hover:text-signal transition-colors"
                >
                  <ArrowDown className="w-3.5 h-3.5 text-signal" />
                  <span>Scroll Telemetry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
