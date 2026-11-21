export interface IndustrySector {
  id: string;
  index: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  certifications: string[];
  toleranceClass: string;
  description: string;
  partFamilies: string[];
  keyMetric: { label: string; value: string };
}

export const INDUSTRIES: IndustrySector[] = [
  {
    id: "aerospace",
    index: "01",
    slug: "aerospace-defense",
    name: "Aerospace & Defense",
    tagline: "Flight-critical structural ribs, actuators & propulsion hardware",
    image: "/images/industry-aerospace.jpg",
    imageAlt: "Precision-machined aerospace aluminum wing rib spar and titanium rings on anodized inspection jig",
    certifications: ["AS9100D", "NADCAP NDT", "ITAR Compliant"],
    toleranceClass: "±0.002 mm / AS9102 FAI",
    description:
      "Thin-wall monolithic airframe machining, flight-actuator titanium manifolds, and DMLS lattice brackets engineered for extreme weight reduction with full lot-to-mill genealogy.",
    partFamilies: ["Monolithic Wing Ribs", "Hydraulic Actuation Blocks", "Turbine Stator Rings", "Avionics Cold Plates"],
    keyMetric: { label: "Weight Reduction Achieved", value: "-34%" },
  },
  {
    id: "energy",
    index: "02",
    slug: "clean-energy-turbomachinery",
    name: "Clean Energy & Turbomachinery",
    tagline: "High-torque shafts, subsea valves & grid-scale turbine assemblies",
    image: "/images/industry-energy.jpg",
    imageAlt: "Heavy CNC-turned offshore wind and hydro-turbine steel rotor shaft in high-bay industrial hall",
    certifications: ["ISO 9001:2015", "DIN EN 10204 3.1", "DNV Witness"],
    toleranceClass: "±0.008 mm Concentricity",
    description:
      "Heavy mill-turn rotor shafts, forged duplex stainless manifolds, and precision bevel housings capable of withstanding multi-decade offshore wind, hydro, and hydrogen compression loads.",
    partFamilies: ["Main Rotor Shafts", "Hydrogen Compressor Heads", "Subsea Control Chokes", "Pitch Bearing Housings"],
    keyMetric: { label: "Max Component Mass", value: "12,000 kg" },
  },
  {
    id: "automotive",
    index: "03",
    slug: "emobility-automotive",
    name: "E-Mobility & Autonomous Vehicles",
    tagline: "Robotic laser-welded battery trays & high-speed inverter housings",
    image: "/images/industry-automotive.jpg",
    imageAlt: "Automated EV battery housing extrusion and robotic assembly line in pristine plant",
    certifications: ["IATF 16949", "ISO 14001", "TISAX Level 3"],
    toleranceClass: "PPAP Level 3 / Cpk ≥ 1.67",
    description:
      "High-volume robotic friction-stir and laser-welded aluminum battery enclosures paired with die-cast CNC finish machining cells designed for next-generation 800V powertrain architectures.",
    partFamilies: ["800V Battery Enclosures", "Inverter Thermal Plates", "E-Axle Gear Housings", "LiDAR Structural Chassis"],
    keyMetric: { label: "Cell Takt Time", value: "42 sec" },
  },
  {
    id: "medical",
    index: "04",
    slug: "medical-life-sciences",
    name: "Medical & Surgical Systems",
    tagline: "ISO Class 7 cleanroom micro-machining & surgical robotics",
    image: "/images/solution-metrology-cmm.jpg",
    imageAlt: "Precision stainless surgical manifold undergoing ruby probe CMM cleanroom metrology",
    certifications: ["ISO 13485:2016", "FDA 21 CFR 820", "ISO Class 7"],
    toleranceClass: "±0.0015 mm / Ra 0.15 µm",
    description:
      "Zero-burr Swiss micro-turning and surgical robot kinematic joints crafted from biocompatible Ti-6Al-4V ELI, 316LVM, and PEEK under validated ultrasonic passivation protocols.",
    partFamilies: ["Surgical Arm Wrist Joints", "Orthopedic Trauma Plates", "Endoscopic Drive Shafts", "Diagnostic Fluidic Blocks"],
    keyMetric: { label: "Cleanroom Standard", value: "ISO Class 7" },
  },
  {
    id: "robotics",
    index: "05",
    slug: "semiconductor-robotics",
    name: "Robotics & Semiconductor Equipment",
    tagline: "Ultra-flat vacuum chambers, wafer chucks & harmonic reducers",
    image: "/images/hero-robotics-detail.jpg",
    imageAlt: "Articulated precision robot arm calibrated over stainless steel optical inspection plate",
    certifications: ["SEMI S2", "ISO 9001:2015", "UHV Helium Leak Certified"],
    toleranceClass: "±0.002 mm Flatness",
    description:
      "Helium-leak-tested vacuum chambers, low-outgassing anodized wafer handling frames, and precision harmonic gear housings supporting sub-nanometer lithography and factory robotics.",
    partFamilies: ["UHV Process Chambers", "Wafer Transfer End-Effectors", "Harmonic Gear Cups", "Optical Bench Frames"],
    keyMetric: { label: "Helium Leak Rate", value: "< 10⁻¹⁰ mbar·L/s" },
  },
  {
    id: "infrastructure",
    index: "06",
    slug: "heavy-industrial-infrastructure",
    name: "Industrial Machinery & Rail",
    tagline: "Turnkey gantry automation & hardened structural bogie systems",
    image: "/images/factory-architecture.jpg",
    imageAlt: "Monumental raw architectural concrete manufacturing facility at twilight",
    certifications: ["EN 15085-2 CL1", "ISO 3834-2", "DIN 27201"],
    toleranceClass: "±0.015 mm / EN 15085 CL1",
    description:
      "Large-span welded steel structures, automated warehouse shuttle carriages, and heavy gantry bridge frames engineered for multi-shift industrial endurance.",
    partFamilies: ["Gantry Linear Beams", "High-Speed Bogie Frames", "Press Column Forgings", "Automated Pallet Shuttles"],
    keyMetric: { label: "Turnkey Line Span", value: "Up to 18 m" },
  },
];
