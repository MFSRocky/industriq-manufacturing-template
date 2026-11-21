export interface NavItem {
  label: string;
  href: string;
  code: string;
  description: string;
}

export interface Facility {
  id: string;
  city: string;
  country: string;
  code: string;
  coordinates: string;
  address: string;
  phone: string;
  email: string;
  focus: string;
  areaSqm: string;
  cells: number;
  shifts: string;
}

export const SITE_CONFIG = {
  brand: "INDUSTRIQ",
  tagline: "Precision Industrial Manufacturing & Autonomous Production Systems",
  legalName: "INDUSTRIQ Manufacturing Systems GmbH",
  domain: "https://industriq-mfg.com",
  email: "engineering@industriq-mfg.com",
  rfqEmail: "rfq@industriq-mfg.com",
  phone: "+49 711 890 4210",
  foundedYear: 2004,
  headquarters: "Stuttgart, Germany",
  defaultStatus: "PLANT 04 · STUTTGART · CELLS 48/48 OPERATIONAL",
};

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    code: "01",
    description: "Turnkey CNC, robotic cells, additive & metrology production systems.",
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    code: "02",
    description: "Machine envelopes, certified alloys, tolerances & surface finishes.",
  },
  {
    label: "Industries",
    href: "/industries",
    code: "03",
    description: "Aerospace, clean energy, e-mobility, medical & semiconductor sectors.",
  },
  {
    label: "Projects",
    href: "/projects",
    code: "04",
    description: "Validated engineering case studies & production telemetry dossiers.",
  },
  {
    label: "Quality",
    href: "/quality",
    code: "05",
    description: "AS9100D, ISO 13485, IATF 16949 & optical CMM verification standards.",
  },
  {
    label: "Insights",
    href: "/insights",
    code: "06",
    description: "Technical briefs on tolerances, metallurgy & factory automation.",
  },
  {
    label: "About",
    href: "/about",
    code: "07",
    description: "Swiss-German manufacturing leadership, campuses & engineering ethos.",
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "stuttgart",
    city: "Stuttgart",
    country: "Germany",
    code: "PLANT 01 // HQ",
    coordinates: "48.7758° N, 9.1829° E",
    address: "Industriestrasse 44, 70565 Stuttgart, Germany",
    phone: "+49 711 890 4210",
    email: "stuttgart@industriq-mfg.com",
    focus: "5-Axis CNC Machining, Turnkey Gantry Cells & Heavy Structural Assembly",
    areaSqm: "24,500 m²",
    cells: 24,
    shifts: "24/7 Lights-Out Pallet Automation",
  },
  {
    id: "zurich",
    city: "Zurich",
    country: "Switzerland",
    code: "LAB 02 // METROLOGY",
    coordinates: "47.3769° N, 8.5417° E",
    address: "Technoparkstrasse 18, 8005 Zürich, Switzerland",
    phone: "+41 44 580 3900",
    email: "zurich@industriq-mfg.com",
    focus: "DMLS Metal Additive, Cleanroom Micro-Machining & Optical CMM Calibration",
    areaSqm: "11,200 m²",
    cells: 14,
    shifts: "ISO Class 7 Controlled Environment",
  },
  {
    id: "austin",
    city: "Austin",
    country: "United States",
    code: "HUB 03 // AMERICAS",
    coordinates: "30.2672° N, 97.7431° W",
    address: "4200 Precision Corridor, Austin, TX 78744, USA",
    phone: "+1 512 555 0194",
    email: "austin@industriq-mfg.com",
    focus: "Robotic Welding Systems, E-Mobility Extrusions & Rapid Aero Prototyping",
    areaSqm: "14,800 m²",
    cells: 10,
    shifts: "Dual-Shift Automated Production",
  },
];

export const HERO_STATS = [
  {
    id: "assemblies",
    value: 142000,
    suffix: "+",
    label: "Annual Precision Assemblies",
    code: "VOL // YR",
    detail: "Serialized & Lot-Traceable",
  },
  {
    id: "tolerance",
    value: 2,
    prefix: "±",
    suffix: " µm",
    label: "Closed-Loop Repeatability",
    code: "ISO // IT5",
    detail: "Temperature-Controlled 20°C ±0.3°",
  },
  {
    id: "cells",
    value: 48,
    suffix: "",
    label: "Synchronized Robotic & CNC Cells",
    code: "FLEET // 03",
    detail: "Across Stuttgart, Zurich & Austin",
  },
  {
    id: "otd",
    value: 99.7,
    decimals: 1,
    suffix: "%",
    label: "Verified On-Time Delivery",
    code: "OTD // Q3-Q4",
    detail: "Tier-1 Aerospace & Medical SLA",
  },
];

export const TICKER_TELEMETRY = [
  "AS9100D REV-D CERTIFIED",
  "5-AXIS SIMULTANEOUS MILLING · ±0.002 MM",
  "ISO 13485 CLEANROOM MEDICAL PRODUCTION",
  "DIRECT METAL LASER SINTERING · TI-6AL-4V",
  "24/7 LIGHTS-OUT PALLET AUTOMATION",
  "100% CMM OPTICAL & LASER VERIFICATION",
  "IATF 16949 ZERO-DEFECT E-MOBILITY LINES",
];
