export interface CertificationItem {
  id: string;
  standard: string;
  title: string;
  scope: string;
  validThrough: string;
  auditor: string;
  certificateId: string;
  facilities: string[];
  controls: string[];
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "as9100d",
    standard: "AS9100D / EN 9100",
    title: "Aerospace & Defense Quality Management",
    scope: "Multi-axis structural machining, metal additive manufacturing, and kitted sub-assemblies for flight hardware.",
    validThrough: "2028-09",
    auditor: "TÜV SÜD Management Service",
    certificateId: "IQ-AERO-9100-8841",
    facilities: ["Stuttgart Plant 01", "Zurich Lab 02", "Austin Hub 03"],
    controls: [
      "Full AS9102 First Article Inspection (FAI) digital packages",
      "Counterfeit parts prevention & raw alloy billet genealogy",
      "Foreign Object Debris (FOD) zero-tolerance clean zones",
      "10-year immutable digital inspection archive retention",
    ],
  },
  {
    id: "iso13485",
    standard: "ISO 13485:2016",
    title: "Medical Device Precision Manufacturing",
    scope: "Cleanroom Swiss micro-turning, surgical robotic joints, and validated ultrasonic passivation of implant-grade metals.",
    validThrough: "2028-04",
    auditor: "BSI Assurance UK",
    certificateId: "IQ-MED-13485-4410",
    facilities: ["Zurich Lab 02"],
    controls: [
      "ISO Class 7 cleanroom assembly & sterile barrier packaging prep",
      "Device History Record (DHR) full lot serialization",
      "Validated bioburden & endotoxin wash verification",
      "FDA 21 CFR Part 820 aligned CAPA governance",
    ],
  },
  {
    id: "iatf16949",
    standard: "IATF 16949:2016",
    title: "Automotive & E-Mobility Production Systems",
    scope: "Automated laser-welded EV battery enclosures, thermal cooling plates, and high-volume CNC drivetrain parts.",
    validThrough: "2027-11",
    auditor: "DEKRA Certification GmbH",
    certificateId: "IQ-AUTO-16949-2290",
    facilities: ["Stuttgart Plant 01", "Austin Hub 03"],
    controls: [
      "PPAP Level 3 / Level 5 full submission packages",
      "Automated Statistical Process Control (SPC) real-time charting",
      "Minimum Cpk ≥ 1.67 requirement on Key Product Characteristics",
      "100% inline Poka-Yoke vision & helium leak gates",
    ],
  },
  {
    id: "iso9001",
    standard: "ISO 9001:2015",
    title: "Enterprise Manufacturing Quality System",
    scope: "Global turnkey engineering design, prototyping, industrial robotics integration, and contract precision manufacturing.",
    validThrough: "2028-12",
    auditor: "TÜV Rheinland",
    certificateId: "IQ-QMS-9001-1002",
    facilities: ["All Facilities"],
    controls: [
      "Continuous closed-loop audit schedules across all 48 cells",
      "Calibration traceability directly to PTB / NIST national standards",
      "Supplier quality scoring & incoming PMI spectrometry",
      "Zero-defect root-cause 8D corrective reporting within 24h",
    ],
  },
  {
    id: "nadcap",
    standard: "NADCAP AC7114 / AC7102",
    title: "Non-Destructive Testing & Thermal Processing",
    scope: "Fluorescent penetrant inspection (FPI), ultrasonic testing, vacuum stress relief, and Hot Isostatic Pressing verification.",
    validThrough: "2027-08",
    auditor: "Performance Review Institute (PRI)",
    certificateId: "IQ-NAD-7114-5092",
    facilities: ["Zurich Lab 02", "Stuttgart Plant 01"],
    controls: [
      "Level III ASNT / EN 4179 certified NDT engineers on staff",
      "Witness test coupons processed alongside every DMLS build",
      "Automated furnace thermal uniformity surveys (AMS 2750G)",
      "Computed Tomography (CT) sub-100-micron porosity screening",
    ],
  },
];

export const QA_BENCHMARKS = [
  { label: "Lot Defect Rate", value: "0.004%", note: "38 PPM rolling 12-month average" },
  { label: "Minimum Capability", value: "Cpk ≥ 1.67", note: "Enforced on all critical CTQ callouts" },
  { label: "Metrology Lab Climate", value: "20°C ±0.3°", note: "DIN EN ISO 1 thermal equilibrium" },
  { label: "Calibration Traceability", value: "100% PTB", note: "Annual laser interferometry verification" },
];

export const QA_GATES = [
  {
    gate: "GATE 01",
    title: "Incoming Billet Spectrometry & UT Scan",
    detail: "Every raw alloy bar and plate passes optical emission PMI verification and ultrasonic void screening prior to warehouse release.",
  },
  {
    gate: "GATE 02",
    title: "First-Piece On-Machine Touch Probing",
    detail: "Renishaw spindle probes validate datum alignment and automatically compensate micro-offsets before serial roughing begins.",
  },
  {
    gate: "GATE 03",
    title: "In-Process SPC & Acoustic Monitoring",
    detail: "Spindle current and harmonic vibration sensors detect micro-chipping or thermal drift instantaneously, halting cycles prior to tolerance breach.",
  },
  {
    gate: "GATE 04",
    title: "Final Zeiss CMM & Digital Twin Sign-Off",
    detail: "Finished lots acclimate in our 20°C metrology vault for full tactile/optical point-cloud validation and AS9102 certificate signing.",
  },
];
