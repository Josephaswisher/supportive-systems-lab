import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero";
import { ProcessSteps } from "@/components/how-it-works/process-steps";
import { DrivingAnalogy } from "@/components/how-it-works/driving-analogy";
import { DeliverablesTiers } from "@/components/how-it-works/deliverables-tiers";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our Discover-Build-Embed method turns nonprofit operational friction into practical systems teams can sustain.",
  openGraph: {
    title: "How It Works | Supportive Systems Lab",
    description: "Discover, Build, Embed: a focused process for durable nonprofit operations.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <DrivingAnalogy />
      <div className="section-divider" />
      <DeliverablesTiers />
      <CTASection
        heading="Start with one focused operational win"
        subheading="The first step is a brief discovery call to identify your highest-leverage sprint scope."
      />
    </>
  );
}
