import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero";
import { ProcessSteps } from "@/components/how-it-works/process-steps";
import { DrivingAnalogy } from "@/components/how-it-works/driving-analogy";
import { DeliverablesTiers } from "@/components/how-it-works/deliverables-tiers";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our three-step process: Discover, Build, Embed. Fast sprints that deliver tangible tools — not theoretical reports.",
  openGraph: {
    title: "How It Works | Supportive Systems Lab",
    description: "Discover, Build, Embed. Our three-step consulting process.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <DrivingAnalogy />
      <DeliverablesTiers />
      <CTASection
        heading="Ready to start the process?"
        subheading="The first step is a free 30-minute discovery call."
      />
    </>
  );
}
