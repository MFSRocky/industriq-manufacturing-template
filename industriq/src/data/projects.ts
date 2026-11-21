export interface MetrologyRow {
  feature: string;
  nominal: string;
  tolerance: string;
  measuredMean: string;
  cpk: string;
}

export interface ProjectCase {
  slug: string;
  code: string;
  title: string;
  sector: "Aerospace" | "Energy" | "E-Mobility" | "Robotics";
  process: string;
  clientType: string;
  facility: string;
  year: string;
  material: string;
  toleranceAchieved: string;
  cycleDelta: string;
  image: string;
  imageAlt: string;
  secondaryImage: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  metrologyTable: MetrologyRow[];
}

export const PROJECTS: ProjectCase[] = [
  {
    slug: "monolithic-wing-rib-spar-7075",
    code: "PRJ-2026-01",
    title: "Monolithic Wing Rib Spar — 7075-T651 Airframe Conversion",
    sector: "Aerospace",
    process: "5-Axis CNC Machining",
    clientType: "European Tier-1 Aerostructures OEM",
    facility: "Stuttgart Plant 01",
    year: "2026",
    material: "Al 7075-T651 Aerospace Plate",
    toleranceAchieved: "±0.008 mm Profile",
    cycleDelta: "-38% Cycle Time",
    image: "/images/industry-aerospace.jpg",
    imageAlt: "Monolithic machined aerospace wing rib spar and anodized datum inspection fixture",
    secondaryImage: "/images/hero-cnc-monolith.jpg",
    summary:
      "Replaced a 14-part riveted structural assembly with a single-piece monolithic billet machined on 5-axis horizontal centers, eliminating 112 fasteners and cutting mass by 29%.",
    challenge:
      "Thin 1.4 mm web floors across a 1,850 mm rib span suffered harmonic chatter and residual stress bow after roughing on legacy 3-axis equipment, causing 11% dimensional scrap.",
    solution:
      "Implemented ultrasonic stress-relieved billet pre-screening followed by balanced adaptive roughing on dual-pallet Hermle C42U centers with custom vacuum-datum sub-plates and in-cycle probing.",
    outcome:
      "Delivered 480 flight-qualified spars over 18 months with zero AS9102 rejections, a 38% machining cycle reduction, and full laser-serialized billet-to-CMM traceability.",
    metrics: [
      { label: "Mass Savings", value: "-29.4%" },
      { label: "Scrap Rate", value: "0.00%" },
      { label: "Web Thickness", value: "1.40 ±0.02 mm" },
      { label: "Process Cpk", value: "1.94" },
    ],
    metrologyTable: [
      { feature: "Main Datum Bore Ø42 H6", nominal: "42.000 mm", tolerance: "+0.016 / 0.000", measuredMean: "42.007 mm", cpk: "2.12" },
      { feature: "Rib Web Floor Thickness", nominal: "1.400 mm", tolerance: "±0.025 mm", measuredMean: "1.403 mm", cpk: "1.94" },
      { feature: "Flange True Position", nominal: "0.000 mm", tolerance: "Ø0.030 mm MMC", measuredMean: "0.011 mm", cpk: "1.88" },
      { feature: "Overall Span Bow", nominal: "0.000 mm", tolerance: "0.050 mm / 1.8m", measuredMean: "0.019 mm", cpk: "2.05" },
    ],
  },
  {
    slug: "titanium-hydraulic-actuation-manifold",
    code: "PRJ-2026-02",
    title: "High-Pressure Titanium Hydraulic Actuation Manifold",
    sector: "Aerospace",
    process: "5-Axis CNC + Optical CMM",
    clientType: "Flight Control Systems Manufacturer",
    facility: "Zurich Lab 02",
    year: "2026",
    material: "Ti-6Al-4V Grade 5 Forged Block",
    toleranceAchieved: "±0.002 mm Bore",
    cycleDelta: "-41% Lead Time",
    image: "/images/solution-metrology-cmm.jpg",
    imageAlt: "Multi-port precision hydraulic manifold undergoing tactile Zeiss CMM inspection",
    secondaryImage: "/images/solution-cnc-milling.jpg",
    summary:
      "38 intersecting deep-gun-drilled ports rated at 350 bar operating pressure with cross-bore burr elimination and 100% Zeiss tactile & optical verification.",
    challenge:
      "Cross-drilled hydraulic galleries inside tough Ti-6Al-4V tended to leave microscopic internal burrs and slight axis runout exceeding cartridge valve sealing tolerances.",
    solution:
      "Combined cryogenic high-pressure coolant deep-hole drilling with abrasive flow deburring (AFM) and single-setup 5-axis cartridge bore finish reaming.",
    outcome:
      "Achieved sub-2-micron roundness across every spool sleeve and passed 1,000-hour cyclic burst testing at 525 bar without a single seal weep.",
    metrics: [
      { label: "Rated Burst Pressure", value: "525 bar" },
      { label: "Bore Cylindricity", value: "0.0018 mm" },
      { label: "Internal Cleanliness", value: "NAS 1638 Class 5" },
      { label: "FAI Approval", value: "1st Submission" },
    ],
    metrologyTable: [
      { feature: "Spool Valve Bore Ø18 H5", nominal: "18.000 mm", tolerance: "+0.008 / 0.000", measuredMean: "18.003 mm", cpk: "2.01" },
      { feature: "Port Face Perpendicularity", nominal: "90.000°", tolerance: "0.005 mm", measuredMean: "0.002 mm", cpk: "1.96" },
      { feature: "Surface Roughness Seal Land", nominal: "Ra 0.20 µm", tolerance: "Max Ra 0.25 µm", measuredMean: "Ra 0.14 µm", cpk: "2.18" },
      { feature: "Cross-Hole Intersection Offset", nominal: "0.000 mm", tolerance: "±0.015 mm", measuredMean: "0.004 mm", cpk: "1.89" },
    ],
  },
  {
    slug: "ev-800v-battery-enclosure-cell",
    code: "PRJ-2026-03",
    title: "800V EV Battery Enclosure Robotic Laser-Weld Cell",
    sector: "E-Mobility",
    process: "Robotic Automation & Welding",
    clientType: "German Premium Automotive Group",
    facility: "Stuttgart Plant 01",
    year: "2026",
    material: "Al 6061-T6 Extrusion + Cast Nodes",
    toleranceAchieved: "±0.015 mm Weld Seam",
    cycleDelta: "42s Takt Time",
    image: "/images/industry-automotive.jpg",
    imageAlt: "Synchronized matte charcoal robotic arms assembling aluminum EV battery housings",
    secondaryImage: "/images/solution-robotic-welding.jpg",
    summary:
      "Turnkey 6-robot synchronized fiber-laser welding and inline leak-test line engineered for IP68 hermetically sealed 800V structural battery trays.",
    challenge:
      "Thermal distortion across 2.2-meter aluminum extrusion frames previously twisted mounting bosses out of datum plane, forcing manual secondary straightening.",
    solution:
      "Designed dual-beam oscillating laser welding optics with real-time coaxial optical seam tracking and symmetric clamping sequence validated in digital twin.",
    outcome:
      "Sustained 42-second takt time across 3 shifts at 98.4% OEE, passing helium leak certification on 100% of enclosures directly off the line.",
    metrics: [
      { label: "Line Takt Time", value: "42 Seconds" },
      { label: "Cell Availability", value: "98.4% OEE" },
      { label: "Seal Standard", value: "IP68 / IP6K9K" },
      { label: "Weld Spatter", value: "Zero" },
    ],
    metrologyTable: [
      { feature: "Subframe Mounting Pitch", nominal: "1,920.00 mm", tolerance: "±0.10 mm", measuredMean: "1,920.02 mm", cpk: "1.84" },
      { feature: "Cooling Plate Flatness", nominal: "0.00 mm", tolerance: "0.15 mm / 2m", measuredMean: "0.06 mm", cpk: "1.91" },
      { feature: "Helium Leak Rate", nominal: "< 1e-5 mbar·L/s", tolerance: "Max 1e-4", measuredMean: "2.4e-6", cpk: "2.34" },
      { feature: "Weld Penetration Depth", nominal: "3.20 mm", tolerance: "+0.4 / -0.1 mm", measuredMean: "3.31 mm", cpk: "1.79" },
    ],
  },
  {
    slug: "offshore-wind-main-rotor-shaft",
    code: "PRJ-2025-04",
    title: "15MW Offshore Wind Main Turbine Shaft Processing",
    sector: "Energy",
    process: "Heavy Mill-Turn & Boring",
    clientType: "North Sea Offshore Wind OEM",
    facility: "Stuttgart Plant 01",
    year: "2025",
    material: "42CrMo4V Forged Alloy Steel",
    toleranceAchieved: "±0.008 mm Concentricity",
    cycleDelta: "-24% Machining Hours",
    image: "/images/industry-energy.jpg",
    imageAlt: "Multi-ton CNC turned forged turbine main rotor shaft suspended by overhead crane",
    secondaryImage: "/images/factory-architecture.jpg",
    summary:
      "Precision turning, deep-hole axial boring, and spline milling on 9.4-ton forged rotor shafts built for 25-year North Sea marine fatigue duty.",
    challenge:
      "Maintaining sub-10-micron bearing journal concentricity across a 4.8-meter overhanging forged shaft required minimizing tool pressure and thermal taper.",
    solution:
      "Executed heavy roughing and single-chuck hydrostatic steady-rest finishing on WFL M150 Millturn with inline laser runout calibration and ultrasonic UT inspection.",
    outcome:
      "42 consecutive turbine shafts delivered ahead of port dry-dock windows with zero vibration rework at gearbox marriage.",
    metrics: [
      { label: "Component Mass", value: "9,420 kg" },
      { label: "Journal Runout", value: "0.006 mm" },
      { label: "Balance Grade", value: "ISO G1.0" },
      { label: "Service Rating", value: "25 Years Marine" },
    ],
    metrologyTable: [
      { feature: "Main Bearing Journal Ø880", nominal: "880.000 mm", tolerance: "±0.015 mm", measuredMean: "880.004 mm", cpk: "1.87" },
      { feature: "Journal-to-Flange Runout", nominal: "0.000 mm", tolerance: "0.012 mm TIR", measuredMean: "0.006 mm", cpk: "2.04" },
      { feature: "Deep Axial Bore Concentricity", nominal: "Ø160.00 mm", tolerance: "±0.08 mm / 4.8m", measuredMean: "0.03 mm", cpk: "1.76" },
      { feature: "Bearing Land Surface", nominal: "Ra 0.30 µm", tolerance: "Max Ra 0.40 µm", measuredMean: "Ra 0.22 µm", cpk: "2.10" },
    ],
  },
  {
    slug: "dmls-titanium-satellite-bracket",
    code: "PRJ-2025-05",
    title: "DMLS Topology-Optimized Satellite Thruster Gimbal",
    sector: "Aerospace",
    process: "Quad-Laser Metal Additive + CNC",
    clientType: "Orbital Propulsion Prime",
    facility: "Zurich Lab 02",
    year: "2025",
    material: "Ti-6Al-4V Grade 23 Powder",
    toleranceAchieved: "±0.005 mm Post-CNC",
    cycleDelta: "-52% Mass Reduction",
    image: "/images/solution-additive-metal.jpg",
    imageAlt: "Laser sintered titanium lattice structural bracket with precision micrometers",
    secondaryImage: "/images/hero-robotics-detail.jpg",
    summary:
      "Generative lattice Ti-6Al-4V thruster bracket sintered on EOS M400-4, HIP-densified, CT-scanned, and finish-milled on datum interfaces.",
    challenge:
      "Traditional hog-out CNC billet machining could not form enclosed gyroid stiffness lattices required to survive Ariane-class launch acoustic loads at half the weight.",
    solution:
      "Combined multi-laser 30µm layer sintering with vacuum stress relief, Hot Isostatic Pressing (HIP) for 99.98% theoretical density, and 5-axis datum bore finishing.",
    outcome:
      "Cut component weight from 4.8 kg to 2.3 kg while increasing first resonant natural frequency by 44% under qualification vibe testing.",
    metrics: [
      { label: "Weight Reduction", value: "-52%" },
      { label: "Relative Density", value: "99.98% (HIP)" },
      { label: "CT Scan Defect Limit", value: "< 80 µm" },
      { label: "Stiffness Gain", value: "+44%" },
    ],
    metrologyTable: [
      { feature: "Gimbal Pivot Bore Ø24 H6", nominal: "24.000 mm", tolerance: "+0.013 / 0.000", measuredMean: "24.005 mm", cpk: "1.95" },
      { feature: "Strut Lattice Wall Thickness", nominal: "0.850 mm", tolerance: "±0.060 mm", measuredMean: "0.856 mm", cpk: "1.74" },
      { feature: "Datum Pad Coplanarity", nominal: "0.000 mm", tolerance: "0.015 mm", measuredMean: "0.006 mm", cpk: "2.08" },
      { feature: "Material Tensile Ultimate", nominal: "> 950 MPa", tolerance: "Min 930 MPa", measuredMean: "1,028 MPa", cpk: "2.25" },
    ],
  },
  {
    slug: "autonomous-wafer-handling-gantry",
    code: "PRJ-2026-06",
    title: "Cleanroom Robotic Calibration & Wafer Transfer Architecture",
    sector: "Robotics",
    process: "Cleanroom Micro-CNC & Robotics",
    clientType: "Lithography Equipment Supplier",
    facility: "Zurich Lab 02",
    year: "2026",
    material: "316LVM Stainless + Black Anodized 7075",
    toleranceAchieved: "±0.002 mm Flatness",
    cycleDelta: "-31% Settling Time",
    image: "/images/hero-robotics-detail.jpg",
    imageAlt: "Precision articulated industrial robot arm calibrated over stainless optical plate",
    secondaryImage: "/images/solution-cnc-milling.jpg",
    summary:
      "High-stiffness robotic wrist housing and optical encoder reference plates engineered for sub-micron semiconductor wafer transport stability.",
    challenge:
      "Micro-vibrations during rapid step-and-settle indexing introduced laser alignment jitter above client nanometer budgets.",
    solution:
      "Engineered internally ribbed low-inertia 7075 housings paired with stress-free 316LVM optical datum rings hand-lapped to sub-2-micron flatness.",
    outcome:
      "Cut robot arm settling time by 31% across 400 cleanroom systems deployed across Europe and East Asia.",
    metrics: [
      { label: "Settling Speed Gain", value: "-31%" },
      { label: "Datum Flatness", value: "0.0019 mm" },
      { label: "Outgassing Rate", value: "UHV Verified" },
      { label: "Units Deployed", value: "400+ Systems" },
    ],
    metrologyTable: [
      { feature: "Encoder Seat Flatness", nominal: "0.000 mm", tolerance: "0.003 mm", measuredMean: "0.0019 mm", cpk: "2.09" },
      { feature: "Harmonic Bearing Concentricity", nominal: "0.000 mm", tolerance: "0.004 mm", measuredMean: "0.0017 mm", cpk: "2.14" },
      { feature: "Wrist Axis Orthogonality", nominal: "90.000°", tolerance: "±3 arcsec", measuredMean: "1.1 arcsec", cpk: "1.98" },
      { feature: "Anodize Film Thickness", nominal: "25 µm", tolerance: "±2 µm", measuredMean: "24.8 µm", cpk: "1.86" },
    ],
  },
];
