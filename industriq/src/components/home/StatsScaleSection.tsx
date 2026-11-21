import { HERO_STATS, TICKER_TELEMETRY } from "@/data/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function StatsScaleSection() {
  return (
    <section id="scale-metrics" className="bg-ivory text-obsidian border-b border-concrete">
      {/* Live Technical Ticker Strip */}
      <div className="border-b border-concrete bg-obsidian text-ivory overflow-hidden py-3">
        <div className="animate-iq-marquee font-mono-tech text-[11px] uppercase tracking-[0.18em]">
          {[...TICKER_TELEMETRY, ...TICKER_TELEMETRY].map((entry, idx) => (
            <span key={`${entry}-${idx}`} className="inline-flex items-center gap-6 px-6 shrink-0">
              <span className="w-1.5 h-1.5 bg-signal shrink-0" aria-hidden="true" />
              <span>{entry}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Swiss Editorial Grid KPI Strip */}
      <div className="iq-container py-14 sm:py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-concrete">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover block mb-2">
                [ 01 // INDUSTRIAL SCALE &amp; OUTPUT ]
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-obsidian">
                Verified capacity across three climate-controlled production campuses.
              </h2>
            </div>
            <span className="font-mono-tech text-xs text-steel-dark uppercase">
              50,500 M² FLOOR AREA · 24/7 LIGHTS-OUT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-x border-concrete divide-y sm:divide-y-0 sm:divide-x divide-concrete bg-ivory-light">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="p-6 sm:p-8 flex flex-col justify-between gap-6 hover:bg-ivory transition-colors"
              >
                <div className="flex items-center justify-between font-mono-tech text-[11px] text-steel-dark uppercase">
                  <span>{stat.code}</span>
                  <span className="w-2 h-2 bg-signal" aria-hidden="true" />
                </div>

                <div>
                  <p className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-obsidian">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                    />
                  </p>
                  <p className="font-display text-base font-semibold text-obsidian mt-3">
                    {stat.label}
                  </p>
                  <p className="font-mono-tech text-xs text-steel-dark mt-1">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
