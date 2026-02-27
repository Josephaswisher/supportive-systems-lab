import { Hero } from "@/components/home/hero";
import { ThreePillars } from "@/components/home/three-pillars";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { HowItWorksTeaser } from "@/components/home/how-it-works-teaser";
import { StatsBanner } from "@/components/home/stats-banner";
import { ValueProp } from "@/components/home/value-prop";
import { CTASection } from "@/components/ui/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <WhoWeHelp />
      <HowItWorksTeaser />
      <StatsBanner />
      <ValueProp />
      <CTASection />
    </>
  );
}
