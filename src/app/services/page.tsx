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
    "Operational assessments, documentation systems, adoption support, and team integration delivered through focused nonprofit sprints.",
  openGraph: {
    title: "Services | Supportive Systems Lab",
    description:
      "Nonprofit operations services designed for fast traction and long-term durability.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ComparisonCallout />
      <div className="section-divider" />
      <SprintProcess />
      <RoadSignsSection />
      <div className="section-divider" />
      <ServiceAccordion />
      <SecretSauceCallout />
      <div className="section-divider" />
      <ComparisonTable />
      <CTASection
        heading="Ready to move from chaos to clarity?"
        subheading="Bring your highest-friction bottleneck and we will scope the first sprint around it."
        buttonText="Book Your Discovery Call"
      />
    </>
  );
}
