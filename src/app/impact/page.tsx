import type { Metadata } from "next";
import { ImpactHero } from "@/components/impact/impact-hero";
import { CaseStudyNarrative } from "@/components/impact/case-study-narrative";
import { ImpactStats } from "@/components/impact/impact-stats";
import { FutureStudies } from "@/components/impact/future-studies";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See how practical operating systems reduced avoidable emergency costs and improved care continuity at scale.",
  openGraph: {
    title: "Impact | Supportive Systems Lab",
    description:
      "Measured outcomes from nonprofit operations done right.",
  },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <CaseStudyNarrative />
      <ImpactStats />
      <div className="section-divider" />
      <FutureStudies />
      <CTASection
        heading="Your next case study can start now"
        subheading="Let us map where stronger operations can unlock measurable mission outcomes in your context."
      />
    </>
  );
}
