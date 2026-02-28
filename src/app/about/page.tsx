import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { FounderStory } from "@/components/about/founder-story";
import { FrameworkSection } from "@/components/about/framework-section";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chris Pearson, MSW, MBA, and the Heart-Head-Backbone framework powering Supportive Systems Lab's nonprofit operations model.",
  openGraph: {
    title: "About | Supportive Systems Lab",
    description:
      "Meet the founder and framework behind a grounded, high-impact nonprofit operations practice.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <FrameworkSection />
      <CTASection
        heading="Build the systems your mission can trust"
        subheading="Start with a conversation about where operations are slowing your impact."
      />
    </>
  );
}
