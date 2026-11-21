import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsScaleSection } from "@/components/home/StatsScaleSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { QualitySection } from "@/components/home/QualitySection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

export const metadata: Metadata = {
  title: "INDUSTRIQ — Precision Industrial & Autonomous Manufacturing Systems",
  description:
    "Precision 5-axis CNC machining, turnkey robotic automation, DMLS metal additive manufacturing, and AS9100D optical metrology across Stuttgart, Zurich, and Austin.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsScaleSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <QualitySection />
      <TechnologySection />
      <InsightsSection />
      <ConversionCtaSection />
    </>
  );
}
