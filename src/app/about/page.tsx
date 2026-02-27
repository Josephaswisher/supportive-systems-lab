import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { FounderStory } from "@/components/about/founder-story";
import { FrameworkSection } from "@/components/about/framework-section";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chris Pearson, MSW — the founder of Supportive Systems Lab. Learn about the Heart, Head, Backbone framework that drives our nonprofit consulting.",
  openGraph: {
    title: "About | Supportive Systems Lab",
    description:
      "Meet Chris Pearson and learn about the Heart, Head, Backbone framework.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <FrameworkSection />
      <CTASection
        heading="Let's build something together"
        subheading="Book a free consultation and see what operational infrastructure can do for your mission."
      />
    </>
  );
}
