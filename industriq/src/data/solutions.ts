export interface SolutionItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  envelope: string;
  tolerance: string;
  leadTime: string;
  capacity: string;
  deliverables: string[];
  applications: string[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "five-axis-cnc",
    code: "SOL-01",
    title: "5-Axis Simultaneous CNC Machining",
    subtitle: "Complex monolithic billets & ultra-tight structural geometries",
    category: "Subtractive Precision",
    image: "/images/solution-cnc-milling.jpg",
    imageAlt: "5-axis CNC milling spindle cutting a solid aerospace aluminum impeller with mist coolant",
    summary:
      "Multi-pallet simultaneous 5-axis machining centers engineered for complex aerospace wing ribs, fluid manifolds, and monolithic housing assemblies with single-setup datum integrity.",
    envelope: "Up to 2,400 × 1,200 × 900 mm",
    tolerance: "±0.002 mm (IT5)",
    leadTime: "5–14 Business Days",
    capacity: "Prototype to 25,000 units/yr",
    deliverables: [
      "Single-setup 5-face datum machining eliminating tolerance stack-up",
      "High-pressure through-spindle coolant & thermal spindle compensation",
      "Full 3D STEP deviation heatmaps exported from Zeiss CMM",
      "Automated tool wear probing after every critical finishing pass",
    ],
    applications: ["Turbine Impellers", "Aerospace Bulkheads", "Optical Mounts", "Hydraulic Manifolds"],
  },
  {
    id: "robotic-automation",
    code: "SOL-02",
    title: "Turnkey Robotic Assembly & Laser Welding",
    subtitle: "Synchronized multi-arm cells for high-throughput industrial lines",
    category: "Autonomous Systems",
    image: "/images/solution-robotic-welding.jpg",
    imageAlt: "Automated multi-robot laser welding cell joining structural steel chassis frames",
    summary:
      "Custom-engineered robotic welding, vision-guided pick-and-place, and automated fastening lines integrating seamless PLC/OPC-UA telemetry into existing ERP ecosystems.",
    envelope: "Modular cells up to 18 m span",
    tolerance: "±0.015 mm Repeatability",
    leadTime: "8–16 Weeks Turnkey",
    capacity: "Up to 98% OEE Continuous Run",
    deliverables: [
      "Dual-beam fiber laser seam tracking with real-time weld penetration QC",
      "Offline digital-twin cycle validation prior to physical floor installation",
      "CE & OSHA Category-4 light-curtain safety architecture",
      "Factory Acceptance Test (FAT) & operator technical certification",
    ],
    applications: ["EV Battery Trays", "Chassis Subframes", "Palletizing Gantries", "Press Tending"],
  },
  {
    id: "additive-metal",
    code: "SOL-03",
    title: "Direct Metal Additive Manufacturing (DMLS)",
    subtitle: "Topology-optimized lattice structures & internal cooling channels",
    category: "Metal Additive",
    image: "/images/solution-additive-metal.jpg",
    imageAlt: "Direct metal laser sintered titanium lattice bracket beside precision digital micrometers",
    summary:
      "Multi-laser powder-bed fusion producing lightweight titanium, Inconel, and maraging steel components coupled directly with stress-relief heat treatment and hybrid 5-axis CNC post-machining.",
    envelope: "400 × 400 × 450 mm Build Chamber",
    tolerance: "±0.05 mm As-Built / ±0.005 mm CNC Post",
    leadTime: "4–10 Business Days",
    capacity: "Zero-Tooling Rapid & Flight Production",
    deliverables: [
      "CT X-ray internal porosity verification & witness coupon tensile testing",
      "Hot Isostatic Pressing (HIP) & vacuum stress-relief cycles",
      "Hybrid CNC finish machining on mating bores & sealing faces",
      "Complete powder batch genealogy & oxygen-level monitoring logs",
    ],
    applications: ["Lattice Brackets", "Conformal Heat Exchangers", "Propulsion Nozzles", "Custom Implants"],
  },
  {
    id: "optical-metrology",
    code: "SOL-04",
    title: "Automated CMM & Optical Metrology",
    subtitle: "Sub-micron dimensional verification & closed-loop SPC telemetry",
    category: "Verification & QA",
    image: "/images/solution-metrology-cmm.jpg",
    imageAlt: "Coordinate measuring machine ruby probe inspecting a machined hydraulic block in cleanroom",
    summary:
      "Temperature-stabilized ISO 17025 metrology laboratories combining tactile scanning CMMs, structured blue-light 3D scanners, and laser interferometers for 100% digital traceability.",
    envelope: "3,000 × 1,500 × 1,200 mm CMM Bed",
    tolerance: "0.7 + L/400 µm MPE",
    leadTime: "Same-Day Digital FAI Reports",
    capacity: "100% Automated In-Line or Lot Audit",
    deliverables: [
      "AS9102 First Article Inspection (FAI) & PPAP Level 3/5 dossiers",
      "GD&T profile, cylindricity, and true-position Cpk ≥ 1.67 certification",
      "Non-contact blue-light point-cloud comparison against native CAD",
      "Immutable serialization linking each serial number to raw mill certs",
    ],
    applications: ["Flight-Critical FAI", "GD&T Reverse Engineering", "Cleanroom Validation", "Gauge Calibration"],
  },
  {
    id: "heavy-turning",
    code: "SOL-05",
    title: "Heavy Mill-Turn & Turbine Shaft Processing",
    subtitle: "Long-bed CNC turning & deep-hole boring for energy infrastructure",
    category: "Heavy Fabrication",
    image: "/images/industry-energy.jpg",
    imageAlt: "Heavy CNC-turned turbine rotor shaft suspended in a high-bay concrete industrial facility",
    summary:
      "Rigid horizontal turning centers and crane-assisted fabrication bays engineered for multi-ton power transmission shafts, subsea valves, and high-pressure forged rotors.",
    envelope: "Up to Ø 1,600 mm × 6,000 mm Length",
    tolerance: "±0.008 mm Concentricity",
    leadTime: "10–21 Business Days",
    capacity: "Up to 12 Metric Tons Part Weight",
    deliverables: [
      "Ultrasonic (UT) & magnetic particle (MT) non-destructive inspection",
      "Dynamic G1.0 rotor balancing & induction bearing journal hardening",
      "HVOF tungsten-carbide & corrosion-resistant cladding",
      "Export crating with VCI vapor-barrier preservation",
    ],
    applications: ["Offshore Wind Shafts", "Hydro-Turbine Hubs", "Subsea Manifolds", "Rail Axles"],
  },
  {
    id: "cleanroom-micro",
    code: "SOL-06",
    title: "Cleanroom Swiss Micro-Machining",
    subtitle: "High-density micro-turning for surgical & semiconductor hardware",
    category: "Micro-Precision",
    image: "/images/hero-robotics-detail.jpg",
    imageAlt: "Precision robotic micro-assembly and calibration tooling over optical stainless table",
    summary:
      "7- to 11-axis Swiss-type CNC turning centers operating in ISO Class 7 cleanrooms with oil-mist filtration, delivering burr-free micro-components at scale.",
    envelope: "Ø 0.8 mm to Ø 38 mm Bar Stock",
    tolerance: "±0.0015 mm / Ra 0.15 µm",
    leadTime: "5–12 Business Days",
    capacity: "500 to 500,000+ units/yr",
    deliverables: [
      "Automated optical vision inspection at 120 parts/minute",
      "Ultrasonic multi-stage passivation & validated cleanroom bagging",
      "Biocompatible Ti-6Al-4V ELI, 316LVM & PEEK material traceability",
      "Zero-burr microscopic edge verification under 50x magnification",
    ],
    applications: ["Orthopedic Screws", "Wafer Chuck Pins", "Micro-Optic Housings", "Sensor Sleeves"],
  },
];

export interface ProcessStage {
  step: string;
  code: string;
  title: string;
  duration: string;
  summary: string;
  inputs: string[];
  outputs: string[];
  metricLabel: string;
  metricValue: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    code: "INGEST // DFM",
    title: "DFM Audit & Digital Twin",
    duration: "0–24 Hours",
    summary:
      "Native STEP/IGES/Parasolid ingestion paired with automated wall-thickness, tool-access, and GD&T feasibility verification by senior manufacturing engineers.",
    inputs: ["STEP / IGES / SolidWorks CAD", "GD&T Tolerance Callouts", "Target Annual Volume"],
    outputs: ["DFM Optimization Report", "Fixed Unit Cost Matrix", "Confirmed Lead Schedule"],
    metricLabel: "DFM Turnaround",
    metricValue: "< 24h",
  },
  {
    step: "02",
    code: "SIM // CAM",
    title: "Toolpath & Kinematic Simulation",
    duration: "Day 1–2",
    summary:
      "Full 5-axis kinematic machine simulation checks fixture clearance, spindle harmonic damping, and thermal drift vectors before raw billet clamping.",
    inputs: ["Approved Revision CAD", "Certified Billet Lot", "Workholding Datum Map"],
    outputs: ["Collision-Free G-Code", "Fixture CAD Package", "Tool Life Budget"],
    metricLabel: "First-Pass Yield",
    metricValue: "99.4%",
  },
  {
    step: "03",
    code: "PROD // CELL",
    title: "Autonomous Cell Execution",
    duration: "Day 3–10",
    summary:
      "Lights-out palletized machining, synchronized robotic welding, or DMLS laser fusion monitored via real-time spindle load and acoustic sensors.",
    inputs: ["Zero-Point Clamped Billets", "SPC Control Limits", "Automated Probing Cycles"],
    outputs: ["Machined Assemblies", "Live Telemetry Logs", "Lot Serial Tags"],
    metricLabel: "Pallet Uptime",
    metricValue: "24/7",
  },
  {
    step: "04",
    code: "QA // CMM",
    title: "Optical & Tactile Metrology",
    duration: "Day 11–12",
    summary:
      "Parts stabilize in our 20°C ±0.3° metrology room before multi-sensor Zeiss CMM probing and surface profilometry generate certified inspection dossiers.",
    inputs: ["Stabilized Production Lot", "Calibration Master Artifacts", "AS9102 Protocols"],
    outputs: ["Signed FAI Report", "3D Color Deviation Map", "Material Mill Certs"],
    metricLabel: "Process Capability",
    metricValue: "Cpk ≥ 1.67",
  },
  {
    step: "05",
    code: "LOG // DISPATCH",
    title: "Passivation, Kitting & Dispatch",
    duration: "Day 13–14",
    summary:
      "Ultrasonic precision cleaning, laser part serialization, custom ESD/VCI foam crating, and customs-cleared global logistics direct to OEM assembly lines.",
    inputs: ["QA Released Lots", "OEM KanBan Schedule", "Laser QR Traceability"],
    outputs: ["Serialized Export Crates", "Digital Twin Twin-Link", "ASN EDI Notice"],
    metricLabel: "On-Time Delivery",
    metricValue: "99.7%",
  },
];
