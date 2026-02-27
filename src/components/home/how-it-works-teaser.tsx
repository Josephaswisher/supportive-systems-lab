"use client";

import Link from "next/link";
import { Phone, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";

const steps = [
  {
    icon: Phone,
    title: "Discovery conversation",
    description: "Name the operational bottleneck creating the most drag.",
  },
  {
    icon: Zap,
    title: "Focused sprint",
    description: "We diagnose, build, and operationalize quickly.",
  },
  {
    icon: CheckCircle,
    title: "Embedded adoption",
    description: "We reinforce team usage so change lasts.",
  },
];

export function HowItWorksTeaser() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Our Process"
        title="Focused, practical, and built to last"
        subtitle="We run targeted sprint engagements instead of long, low-velocity retainers."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            variants={fadeUpVariants}
            className="text-center group"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-teal/15 group-hover:shadow-[0_0_20px_rgba(42,157,143,0.15)]">
                <step.icon className="w-7 h-7 text-teal" />
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-teal/25" />
              )}
            </div>
            <h3 className="font-serif text-lg text-navy mb-2">{step.title}</h3>
            <p className="text-slate-brand text-sm">{step.description}</p>
          </motion.div>
        ))}
      </StaggerContainer>

      <div className="text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center text-teal font-medium hover:gap-3 transition-all duration-300 underline-offset-4 hover:underline"
        >
          See the Full Process <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
