export interface CapabilitySpec {
  id: string;
  code: string;
  process: string;
  category: "Machining" | "Automation" | "Additive" | "Metrology" | "Finishing";
  machineClass: string;
  maxEnvelope: string;
  tolerance: string;
  surfaceFinish: string;
  materials: string[];
  keyAdvantage: string;
}

export interface AlloySpec {
  code: string;
  name: string;
  family: "Titanium" | "Aluminum" | "Superalloy" | "Stainless" | "Polymer";
  tensileMpa: string;
  density: string;
  maxTempC: string;
  machinability: string;
  typicalUse: string;
}

export const CAPABILITY_SPECS: CapabilitySpec[] = [
  {
    id: "cap-5ax",
    code: "CAP-M01",
    process: "5-Axis Simultaneous Milling",
    category: "Machining",
    machineClass: "DMG MORI DMU MonoBlock / Hermle C42U",
    maxEnvelope: "2,400 × 1,200 × 900 mm",
    tolerance: "±0.002 mm",
    surfaceFinish: "Ra 0.2 µm",
    materials: ["Ti-6Al-4V", "Al 7075-T6", "Inconel 718", "316L"],
    keyAdvantage: "Direct-drive rotary tables with active thermal cooling loop",
  },
  {
    id: "cap-swiss",
    code: "CAP-M02",
    process: "11-Axis Swiss Micro-Turning",
    category: "Machining",
    machineClass: "Citizen Cincom / Star SR-38 Type B",
    maxEnvelope: "Ø 38 mm × 320 mm",
    tolerance: "±0.0015 mm",
    surfaceFinish: "Ra 0.15 µm",
    materials: ["316LVM", "Ti-6Al-4V ELI", "PEEK", "Brass C360"],
    keyAdvantage: "Zero-burr high-pressure oil cutting with automated bar feed",
  },
  {
    id: "cap-millturn",
    code: "CAP-M03",
    process: "Heavy Mill-Turn & Deep Boring",
    category: "Machining",
    machineClass: "Mazak Integrex e-1600V / WFL M150",
    maxEnvelope: "Ø 1,600 mm × 6,000 mm",
    tolerance: "±0.008 mm",
    surfaceFinish: "Ra 0.4 µm",
    materials: ["42CrMo4", "17-4PH", "Duplex 2205", "Forged Steel"],
    keyAdvantage: "Integrated 12-ton crane load + deep-hole BTA boring up to 4 m",
  },
  {
    id: "cap-robot-weld",
    code: "CAP-A01",
    process: "Robotic Fiber-Laser Welding",
    category: "Automation",
    machineClass: "KUKA KR Cybertech + 8kW IPG Laser Cell",
    maxEnvelope: "6,000 × 3,200 × 2,400 mm",
    tolerance: "±0.015 mm",
    surfaceFinish: "Spatter-Free Class A",
    materials: ["Al 6061-T6", "Al 5083", "S355J2 Steel", "304L"],
    keyAdvantage: "Real-time optical seam tracking with minimal thermal distortion",
  },
  {
    id: "cap-gantry",
    code: "CAP-A02",
    process: "Autonomous Gantry & Pallet Pool",
    category: "Automation",
    machineClass: "Fastems Multi-Level FMS (120 Pallets)",
    maxEnvelope: "1,250 × 1,250 mm Pallet",
    tolerance: "±0.003 mm Datum",
    surfaceFinish: "Lights-Out Ready",
    materials: ["All Machined Billets & Castings"],
    keyAdvantage: "Unattended 72-hour weekend production with predictive tool swaps",
  },
  {
    id: "cap-dmls",
    code: "CAP-D01",
    process: "Quad-Laser Metal Additive (DMLS)",
    category: "Additive",
    machineClass: "EOS M400-4 Quad-Laser System",
    maxEnvelope: "400 × 400 × 450 mm",
    tolerance: "±0.05 mm (±0.005 post)",
    surfaceFinish: "Ra 3.2 µm / 0.4 CNC",
    materials: ["Ti-6Al-4V", "Inconel 718", "AlSi10Mg", "Maraging 300"],
    keyAdvantage: "Internal conformal lattice cooling + integrated HIP densification",
  },
  {
    id: "cap-cmm",
    code: "CAP-Q01",
    process: "Tactile & Optical CMM Metrology",
    category: "Metrology",
    machineClass: "Zeiss PRISMO Ultra + GOM ATOS Q",
    maxEnvelope: "3,000 × 1,500 × 1,200 mm",
    tolerance: "0.7 + L/400 µm",
    surfaceFinish: "Non-Contact 0.01 mm Mesh",
    materials: ["All Metals, Composites & Ceramics"],
    keyAdvantage: "Full GD&T digital heatmap & AS9102 FAI serialization",
  },
  {
    id: "cap-anodize",
    code: "CAP-F01",
    process: "Hard Anodize, Passivation & PVD",
    category: "Finishing",
    machineClass: "Automated Chemical & Vacuum PVD Line",
    maxEnvelope: "2,200 × 1,100 × 1,000 mm",
    tolerance: "±2 µm Coat Thickness",
    surfaceFinish: "MIL-A-8625 Type III",
    materials: ["Aluminum 6xxx/7xxx", "316L", "Titanium"],
    keyAdvantage: "In-house masking & salt-spray tested corrosion protection",
  },
];

export const CERTIFIED_ALLOYS: AlloySpec[] = [
  {
    code: "TI-64",
    name: "Ti-6Al-4V (Grade 5 / ELI Grade 23)",
    family: "Titanium",
    tensileMpa: "950–1,100 MPa",
    density: "4.43 g/cm³",
    maxTempC: "400°C",
    machinability: "Flood Cryo / High-Torque",
    typicalUse: "Aerospace bulkheads, hydraulic manifolds, orthopedic implants",
  },
  {
    code: "AL-7075",
    name: "Aluminum 7075-T651 Aerospace Plate",
    family: "Aluminum",
    tensileMpa: "572 MPa",
    density: "2.81 g/cm³",
    maxTempC: "150°C",
    machinability: "High-Speed 24,000 RPM",
    typicalUse: "Wing ribs, robotic end-effectors, optical frames",
  },
  {
    code: "IN-718",
    name: "Inconel 718 Nickel Superalloy",
    family: "Superalloy",
    tensileMpa: "1,240 MPa",
    density: "8.19 g/cm³",
    maxTempC: "700°C",
    machinability: "Ceramic / Carbide Trochoidal",
    typicalUse: "Turbine stators, cryogenic valves, downhole energy housings",
  },
  {
    code: "SS-316L",
    name: "316L / 316LVM Surgical Stainless",
    family: "Stainless",
    tensileMpa: "580–860 MPa",
    density: "8.00 g/cm³",
    maxTempC: "450°C",
    machinability: "Swiss & High-Pressure Coolant",
    typicalUse: "Cleanroom fluid systems, semiconductor valves, surgical tools",
  },
  {
    code: "SS-174",
    name: "17-4PH H900 Precipitation Hardened",
    family: "Stainless",
    tensileMpa: "1,310 MPa",
    density: "7.78 g/cm³",
    maxTempC: "315°C",
    machinability: "Precision Ground & Milled",
    typicalUse: "Actuator shafts, aerospace linkages, offshore couplings",
  },
  {
    code: "PEEK-450",
    name: "Victrex PEEK / Carbon-Filled PEEK",
    family: "Polymer",
    tensileMpa: "100–220 MPa",
    density: "1.32 g/cm³",
    maxTempC: "250°C",
    machinability: "Dry Diamond Tooling",
    typicalUse: "Wafer handling end-effectors, sterile medical bushings",
  },
];

export const ENGINEERING_TABS = [
  {
    id: "machining",
    label: "Machining & Envelopes",
    code: "TAB // 01",
    headline: "Zero-setup datum accuracy across 5 to 11 simultaneous axes",
    metrics: [
      { label: "Max 5-Axis Travel", value: "2,400 × 1,200 mm" },
      { label: "Positional Repeatability", value: "±0.002 mm" },
      { label: "Spindle Speed Range", value: "42,000 RPM HSK-A63" },
      { label: "Surface Roughness", value: "Ra 0.15 µm Mirror" },
    ],
    summary:
      "Every machine tool sits on isolated 800mm reinforced inertia slabs inside climate-stabilized bays, suppressing thermal expansion drift during multi-hour monolithic roughing and finishing cycles.",
  },
  {
    id: "alloys",
    label: "Certified Alloys",
    code: "TAB // 02",
    headline: "EN 10204 3.1 traceable billets from aerospace & medical mills",
    metrics: [
      { label: "Stocked Engineering Alloys", value: "42+ Grades" },
      { label: "Mill Lot Traceability", value: "100% Serialized" },
      { label: "Ultrasonic Billet Screening", value: "AMS 2631 Class A" },
      { label: "Vacuum Heat Treatment", value: "NADCAP Accredited" },
    ],
    summary:
      "From stress-relieved 7075-T651 aerospace plate to vacuum-melted Ti-6Al-4V ELI bar and Inconel 718 forgings, every raw billet undergoes positive material identification (PMI) before hitting the spindle.",
  },
  {
    id: "metrology",
    label: "Metrology & SPC",
    code: "TAB // 03",
    headline: "Sub-micron Zeiss CMM verification baked into every cell",
    metrics: [
      { label: "Lab Thermal Stability", value: "20.0°C ± 0.3°C" },
      { label: "Volumetric Accuracy", value: "0.7 + L/400 µm" },
      { label: "Target Process Capability", value: "Cpk ≥ 1.67" },
      { label: "Inspection Output", value: "AS9102 / PPAP L3" },
    ],
    summary:
      "Closed-loop probing links our CMM laboratory directly to CNC tool-offset controllers, neutralizing tool wear automatically before parts approach tolerance boundaries.",
  },
];
