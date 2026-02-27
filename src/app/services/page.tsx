import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ComparisonCallout } from "@/components/services/comparison-callout";
import { SprintProcess } from "@/components/services/sprint-process";
import { RoadSignsSection } from "@/components/services/road-signs-section";
import { ServiceAccordion } from "@/components/services/service-accordion";
import { SecretSauceCallout } from "@/components/services/secret-sauce-callout";
import { ComparisonTable } from "@/components/services/comparison-table";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Operational assessments, SOP development, succession planning, team integration, and more. Focused ~1 month sprints starting at ~$5,000.",
  openGraph: {
    title: "Services | Supportive Systems Lab",
    description:
      "Nonprofit operations consulting services. Fast sprints, lasting results.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ComparisonCallout />
      <SprintProcess />
      <RoadSignsSection />
      <ServiceAccordion />
      <SecretSauceCallout />
      <ComparisonTable />
      <CTASection
        heading="Ready to get started?"
        subheading="Book a free discovery call and tell us what's keeping you up at night."
        buttonText="Book a Free Consultation"
      />
    </>
  );
}
