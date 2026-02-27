import type { Metadata } from "next";
import { ImpactHero } from "@/components/impact/impact-hero";
import { CaseStudyNarrative } from "@/components/impact/case-study-narrative";
import { ImpactStats } from "@/components/impact/impact-stats";
import { FutureStudies } from "@/components/impact/future-studies";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See how operational infrastructure saved $300K-$500K in emergency medical costs at a 145-unit affordable housing complex.",
  openGraph: {
    title: "Impact | Supportive Systems Lab",
    description:
      "Real results: $300K-$500K saved through operational infrastructure.",
  },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <CaseStudyNarrative />
      <ImpactStats />
      <FutureStudies />
      <CTASection
        heading="Your story could be next"
        subheading="Let's talk about the impact operational infrastructure can have on your organization."
      />
    </>
  );
}
