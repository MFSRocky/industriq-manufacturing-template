import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Recycle, Building2, Compass } from "lucide-react";
import { FACILITIES } from "@/data/site";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "About Us — Engineering Heritage & Campuses",
  description:
    "Founded in 2004 in Stuttgart, INDUSTRIQ operates 48 synchronized CNC, robotic, and cleanroom metrology cells across Germany, Switzerland, and the United States.",
};

const TIMELINE = [
  {
    year: "2004",
    title: "Stuttgart Precision Workshop Founded",
    detail: "Established with four 5-axis horizontal machining centers serving German motorsport and optical instrumentation OEMs.",
  },
  {
    year: "2011",
    title: "AS9100 & Zurich Cleanroom Expansion",
    detail: "Commissioned Zurich Lab 02 with temperature-stabilized Zeiss PRISMO CMM bays and ISO Class 7 surgical micro-machining.",
  },
  {
    year: "2018",
    title: "Turnkey Robotics & Quad-Laser DMLS Integration",
    detail: "Launched dedicated fiber-laser robotic cell engineering and EOS M400-4 direct metal laser sintering with in-house HIP verification.",
  },
  {
    year: "2024–2026",
    title: "Autonomous Digital Thread & Austin Hub 03",
    detail: "Opened Austin Americas Hub and interconnected all 48 cells under unified OPC-UA closed-loop metrology telemetry.",
  },
];

const LEADERSHIP = [
  {
    name: "Dr. Lukas Baumann",
    role: "Chief Executive & Subtractive Engineering",
    credentials: "Dr.-Ing. Mechanical Engineering, University of Stuttgart · 22 yrs",
    focus: "High-speed monolithic aerostructures & thermal spindle stabilization",
  },
  {
    name: "Katrin Lindner",
    role: "VP of Quality & Optical Metrology",
    credentials: "M.Sc. Precision Metrology, ETH Zürich · ASNT Level III",
    focus: "Closed-loop CMM feedback, AS9100D governance & FDA cleanroom compliance",
  },
  {
    name: "Marcus Lindqvist",
    role: "Director of Turnkey Robotic Automation",
    credentials: "M.Sc. Mechatronics, KTH Stockholm · 17 yrs",
    focus: "Multi-robot fiber-laser welding cells & digital twin commissioning",
  },
  {
    name: "Henrik Vestergaard",
    role: "Head of Metal Additive & Metallurgy",
    credentials: "Ph.D. Materials Science, DTU Copenhagen · 15 yrs",
    focus: "DMLS Ti-6Al-4V fatigue optimization, HIP cycles & CT porosity screening",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero: Architectural Campus Focus */}
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20 lg:py-24">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ ABOUT INDUSTRIQ // SWISS-GERMAN ENGINEERING ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              BUILT ON BRUTALIST RIGOR AND SUB-MICRON ACCOUNTABILITY.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Since 2004, INDUSTRIQ has bridged artisanal Swiss-German toolmaking discipline with
              autonomous, lights-out production architecture across three continents.
            </p>
          </div>

          <div className="mt-10 border border-ivory/20 overflow-hidden aspect-[16/8] bg-obsidian-deep relative">
            <img
              src="/images/factory-architecture.jpg"
              alt="INDUSTRIQ brutalist concrete and black steel manufacturing campus exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-obsidian/90 border border-ivory/20 px-4 py-3 font-mono-tech text-xs flex flex-wrap gap-4">
              <span className="text-signal">STUTTGART HQ // PLANT 01</span>
              <span className="text-ivory/80">24,500 M² REINFORCED INERTIA FLOOR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Heritage Timeline */}
      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover">
              [ 22 YEARS OF SCALE ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Two decades of continuous re-investment in capital machinery.
            </h2>
            <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
              We operate debt-free facilities, reinvesting 18% of annual revenue directly into
              multi-axis gantry cells, cryogenic tooling research, and automated metrology.
            </p>
          </div>

          <div className="lg:col-span-8 border-t border-obsidian">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="py-6 border-b border-concrete grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
              >
                <span className="sm:col-span-3 font-mono-tech text-lg font-semibold text-signal-hover">
                  {item.year}
                </span>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-xl font-semibold text-obsidian">{item.title}</h3>
                  <p className="text-sm sm:text-base text-steel-dark mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Facilities Matrix */}
      <section className="bg-obsidian text-ivory py-16 sm:py-24 border-b border-ivory/15">
        <div className="iq-container space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-ivory/15">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-signal block mb-2">
                [ GLOBAL CAMPUSES ]
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                Three synchronized manufacturing nodes.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-signal hover:text-ivory transition-colors"
            >
              <span>Schedule Plant Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FACILITIES.map((plant) => (
              <div
                key={plant.id}
                className="border border-ivory/20 bg-obsidian-elevated p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="text-signal">{plant.code}</span>
                    <Compass className="w-4 h-4 text-steel-light" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ivory">
                      {plant.city}, {plant.country}
                    </h3>
                    <p className="font-mono-tech text-xs text-steel-light mt-1">
                      {plant.coordinates}
                    </p>
                  </div>
                  <p className="text-sm text-ivory/80 leading-relaxed">{plant.focus}</p>
                </div>

                <div className="pt-4 border-t border-ivory/15 space-y-2 font-mono-tech text-xs text-steel-light">
                  <p className="text-ivory">
                    <Building2 className="w-3.5 h-3.5 inline mr-1.5 text-signal" />
                    {plant.areaSqm} · {plant.cells} Automated Cells
                  </p>
                  <p>{plant.shifts}</p>
                  <p>{plant.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Leadership & Sustainability */}
      <section className="bg-ivory text-obsidian py-16 sm:py-24 border-b border-concrete">
        <div className="iq-container space-y-16">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover block mb-2">
              [ ENGINEERING LEADERSHIP ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">
              Directed by metallurgists, machinists, and metrology physicists.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-obsidian divide-y md:divide-y-0 md:divide-x divide-concrete bg-ivory-light">
              {LEADERSHIP.map((leader) => (
                <div key={leader.name} className="p-6 flex flex-col justify-between gap-5">
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase text-signal-hover mb-2">
                      EXEC // BOARD
                    </p>
                    <h3 className="font-display text-xl font-semibold text-obsidian">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-obsidian mt-1">{leader.role}</p>
                    <p className="font-mono-tech text-[11px] text-steel-dark mt-3">
                      {leader.credentials}
                    </p>
                  </div>
                  <p className="text-xs text-steel-dark pt-4 border-t border-concrete leading-relaxed">
                    {leader.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Closed-Loop Banner */}
          <div className="border border-obsidian bg-ivory-warm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-signal-hover">
                <Recycle className="w-4 h-4" />
                <span>ISO 14001 CIRCULAR METALLURGY</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                98.2% closed-loop titanium and aluminum swarf briquetting.
              </h3>
              <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
                Every CNC cell separates alloy-specific machining chips automatically, centrifuging
                cutting fluid for 94% closed-loop reuse while returning compressed Ti-6Al-4V and 7075
                briquettes directly to certified European smelters.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 font-mono-tech">
              <div className="p-4 bg-obsidian text-ivory">
                <span className="text-[10px] text-steel-light block">SWARF RECLAIMED</span>
                <span className="font-display text-2xl font-bold text-signal">98.2%</span>
              </div>
              <div className="p-4 bg-obsidian text-ivory">
                <span className="text-[10px] text-steel-light block">SOLAR ROOF SUPPLY</span>
                <span className="font-display text-2xl font-bold text-ivory">64%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCtaSection />
    </>
  );
}
