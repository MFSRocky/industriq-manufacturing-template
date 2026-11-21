export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface InsightArticle {
  slug: string;
  code: string;
  category: "CNC Systems" | "Metrology" | "Robotics" | "Metallurgy";
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: ArticleSection[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: "eliminating-thermal-drift-5-axis-monolithic-aerostructures",
    code: "TECH-BRIEF // 041",
    category: "CNC Systems",
    title: "Eliminating Thermal Drift in 14-Hour Monolithic Airframe Cycles",
    excerpt:
      "How active spindle cooling, zero-point datum isolation, and adaptive Renishaw probing sustain ±0.004 mm repeatability across multi-meter aluminum bulkheads.",
    author: "Dr. Lukas Baumann",
    authorRole: "VP of Subtractive Engineering, Stuttgart",
    publishedAt: "2026-10-18",
    readTime: "7 min read",
    image: "/images/hero-cnc-monolith.jpg",
    imageAlt: "5-axis CNC machining center cutting an aerospace structural bulkhead under warm lighting",
    featured: true,
    keyTakeaways: [
      "Aluminum 7075 expands 23 µm per meter per °C — unchecked shop air swings destroy true-position callouts.",
      "Sub-floor chilled emulsion loops coupled with mid-cycle probe recalibration cut thermal error by 84%.",
      "Single-setup monolithic clamping eliminates cumulative re-fixturing errors across datum transitions.",
    ],
    sections: [
      {
        id: "thermal-expansion-physics",
        heading: "1. The Physics of Long-Cycle Thermal Creep",
        paragraphs: [
          "When machining a 2.1-meter aerospace wing rib from solid Al 7075-T651 plate, total spindle-on duration frequently exceeds 14 continuous hours. Even in a seemingly stable machine bay, a modest 2.5°C temperature climb across the afternoon shift expands the workpiece by over 120 microns relative to machine ballscrew scales.",
          "Rather than attempting aggressive post-machining straightening—which introduces unpredictable residual fatigue stresses—our Stuttgart bays treat thermal equilibrium as a primary machining parameter from minute zero.",
        ],
        callout: "1.0°C Delta across 2,000 mm Al 7075-T651 = 46 µm linear growth — 5× tighter than flight rib tolerances.",
      },
      {
        id: "active-compensation",
        heading: "2. Active Fluid Cooling & Mid-Cycle Datum Probing",
        paragraphs: [
          "Each 5-axis horizontal platform circulates temperature-stabilized dielectric coolant through both spindle bearings and machine bed castings, locking internal thermal variance within ±0.3°C regardless of spindle RPM load.",
          "Prior to final finishing passes, the control automatically suspends toolpaths, washes datum spheres, and runs a 45-second Renishaw volumetric probe routine that shifts coordinate origins dynamically to match actual billet temperature.",
        ],
      },
      {
        id: "validated-yield",
        heading: "3. Production Results Across 480 Delivered Spars",
        paragraphs: [
          "Deploying this protocol across our Hermle and DMG MORI cells drove process capability from Cpk 1.18 to a sustained Cpk 1.94, eliminating manual re-spotfacing completely.",
        ],
      },
    ],
  },
  {
    slug: "closed-loop-optical-metrology-lights-out-cells",
    code: "TECH-BRIEF // 040",
    category: "Metrology",
    title: "Closed-Loop Optical Metrology in Lights-Out Production Cells",
    excerpt:
      "Connecting Zeiss CMM point-cloud deviation data directly to CNC tool-offset tables to neutralize cutter wear before tolerances drift.",
    author: "Katrin Lindner",
    authorRole: "Director of Quality & Metrology, Zurich",
    publishedAt: "2026-09-29",
    readTime: "6 min read",
    image: "/images/solution-metrology-cmm.jpg",
    imageAlt: "Zeiss CMM tactile probe verifying a stainless hydraulic manifold in metrology room",
    keyTakeaways: [
      "Traditional end-of-lot sampling catches defects hours after bad parts have already been machined.",
      "Automated OPC-UA feedback injects predictive 1–3 µm radial offsets straight into pallet controllers.",
      "Traceable digital twins replace paper travelers with immutable serial-level CAD heatmaps.",
    ],
    sections: [
      {
        id: "beyond-sampling",
        heading: "1. Why Reactive Lot Sampling Fails Modern Tolerances",
        paragraphs: [
          "In unattended 72-hour pallet production, subtle carbide edge rounding can push an H6 hydraulic bore toward lower control limits overnight. Waiting for manual morning inspection risks quarantining an entire pallet pool.",
        ],
      },
      {
        id: "opcua-offset-loop",
        heading: "2. Automated OPC-UA Tool Offset Feedback",
        paragraphs: [
          "Our Zurich metrology architecture bridges Zeiss Calypso CMM telemetry with cell supervisory PLCs. Every fifth component from a high-mix pallet automatically routes to an enclosed cleanroom metrology cradle.",
          "When moving-average diameter trends drift 40% toward tolerance thresholds, the supervisory controller increments wear offsets safely inside guardbands without operator intervention.",
        ],
        callout: "Predictive offset loops reduced unplanned tool-change stops by 46% across Swiss & 5-axis cells.",
      },
    ],
  },
  {
    slug: "hybrid-dmls-cnc-titanium-fatigue-optimization",
    code: "TECH-BRIEF // 039",
    category: "Metallurgy",
    title: "Hybrid DMLS & 5-Axis Machining for Flight-Grade Titanium Brackets",
    excerpt:
      "Combining quad-laser powder bed fusion, Hot Isostatic Pressing, and finish milling to cut aerospace component mass by half without compromising fatigue life.",
    author: "Henrik Vestergaard",
    authorRole: "Lead Additive Metallurgist, Zurich",
    publishedAt: "2026-09-08",
    readTime: "8 min read",
    image: "/images/solution-additive-metal.jpg",
    imageAlt: "DMLS sintered titanium aerospace lattice bracket next to precision digital micrometers",
    keyTakeaways: [
      "As-sintered DMLS surfaces cannot hold Ra 0.4 µm seal faces or IT6 bearing fits without CNC finishing.",
      "Hot Isostatic Pressing (HIP) collapses microscopic argon pores to unlock wrought-equivalent fatigue behavior.",
      "Designing generous sacrificial datum pads directly into the CAD build plate simplifies 5-axis fixturing.",
    ],
    sections: [
      {
        id: "hybrid-workflow",
        heading: "1. Designing for Additive + Subtractive Convergence",
        paragraphs: [
          "Additive manufacturing excels at internal gyroid ribs and load-path topology; subtractive CNC excels at precision bores, thread pitch integrity, and mirror mating pads. Treating them as one unified process unlocks geometries impossible via billet hog-out alone.",
        ],
      },
      {
        id: "hip-densification",
        heading: "2. Thermal Stress Relief & HIP Densification",
        paragraphs: [
          "Before cutting a single chip from the build plate, parts undergo vacuum stress relief followed by 920°C / 1,000 bar Hot Isostatic Pressing. Computed Tomography scans verify zero internal pores exceeding 80 microns before hybrid 5-axis finish machining.",
        ],
      },
    ],
  },
  {
    slug: "laser-seam-tracking-800v-ev-battery-enclosures",
    code: "TECH-BRIEF // 038",
    category: "Robotics",
    title: "High-Speed Fiber Laser Seam Tracking for 800V Battery Enclosures",
    excerpt:
      "Controlling heat input and metallurgical porosity across mixed 6061 extrusions and high-pressure aluminum die castings.",
    author: "Marcus Lindqvist",
    authorRole: "Head of Robotic Systems Integration",
    publishedAt: "2026-08-19",
    readTime: "5 min read",
    image: "/images/solution-robotic-welding.jpg",
    imageAlt: "Automated robotic fiber-laser welding cell joining industrial chassis frames",
    keyTakeaways: [
      "Oscillating wobble laser beams bridge extrusion gap tolerances up to 0.4 mm cleanly.",
      "Coaxial optical sensors track joint centerline drift ahead of the weld pool at 200 Hz.",
      "Balanced symmetric weld sequencing keeps 2.2-meter tray flatness under 0.10 mm.",
    ],
    sections: [
      {
        id: "heat-distortion-control",
        heading: "1. Taming Thermal Bow in Long Aluminum Trays",
        paragraphs: [
          "Battery tray housings require continuous hermetic seals along multi-meter perimeters. Conventional MIG passes inject excessive linear energy, warping datum pads beyond EV assembly stack limits.",
          "By deploying 8 kW dual-ring fiber lasers synchronized across opposing 6-axis robots, total heat-affected zone width drops by 70%, preserving dimensional integrity straight out of the welding fixture.",
        ],
      },
    ],
  },
  {
    slug: "cryogenic-coolant-inconel-718-tool-life",
    code: "TECH-BRIEF // 037",
    category: "Metallurgy",
    title: "High-Pressure Coolant Strategies for Inconel 718 Turbine Hardware",
    excerpt:
      "Breaking work-hardened nickel chips cleanly at 100 bar through-tool pressure while doubling ceramic and carbide insert longevity.",
    author: "Dr. Lukas Baumann",
    authorRole: "VP of Subtractive Engineering, Stuttgart",
    publishedAt: "2026-07-24",
    readTime: "6 min read",
    image: "/images/solution-cnc-milling.jpg",
    imageAlt: "High-pressure CNC coolant spray machining aerospace turbine rotor blades",
    keyTakeaways: [
      "Inconel 718 conducts heat poorly, concentrating extreme thermal shock at the cutting edge.",
      "100-bar targeted nozzle vectors blast chips clear of trochoidal pockets before re-cutting occurs.",
      "Constant radial engagement CAM paths prevent catastrophic insert notching.",
    ],
    sections: [
      {
        id: "trochoidal-nickel",
        heading: "1. Constant Engagement & 100-Bar Chip Evacuation",
        paragraphs: [
          "Cutting aged Inconel 718 demands keeping the tool out of its own work-hardened wake. Pair dynamic constant-chipload toolpaths with high-pressure coolant jets aimed directly into the shear zone, and insert edge life increases more than 2.4×.",
        ],
      },
    ],
  },
  {
    slug: "digital-thread-traceability-medical-cleanroom",
    code: "TECH-BRIEF // 036",
    category: "Metrology",
    title: "Digital Thread Serialization for ISO 13485 Surgical Assemblies",
    excerpt:
      "Linking raw 316LVM bar melts, CNC spindle telemetry, passivation chemistry, and optical vision logs under one immutable QR genealogy.",
    author: "Katrin Lindner",
    authorRole: "Director of Quality & Metrology, Zurich",
    publishedAt: "2026-07-02",
    readTime: "5 min read",
    image: "/images/hero-robotics-detail.jpg",
    imageAlt: "Precision robotic metrology apparatus inside sterile cleanroom inspection bench",
    keyTakeaways: [
      "Medical OEM audits demand instant trace-back from patient device lot to furnace melt number.",
      "Automated laser marking within the bar-feeder eliminates manual labeling mix-ups.",
      "ISO Class 7 ultrasonic passivated packaging validates particle limits prior to shipment.",
    ],
    sections: [
      {
        id: "end-to-end-dhr",
        heading: "1. Paperless Device History Records at Scale",
        paragraphs: [
          "Every surgical shaft turning off our Zurich 11-axis Swiss machines inherits a cryptographically timestamped record linking raw bar heat lot, spindle load signatures, automated camera vision snapshots, and citric passivation batch logs.",
        ],
      },
    ],
  },
];
