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
    title: "Free discovery call",
    description: "Tell us what's keeping you up at night.",
  },
  {
    icon: Zap,
    title: "One-month sprint (~$5K)",
    description: "We diagnose, build, and deliver — fast.",
  },
  {
    icon: CheckCircle,
    title: "Systems that actually stick",
    description: "We train your team and embed the change.",
  },
];

export function HowItWorksTeaser() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Our Process"
        title="Fast. Focused. Affordable."
        subtitle="We work in targeted sprints — not six-month retainers."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            variants={fadeUpVariants}
            className="text-center"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-teal" />
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-teal/20" />
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
          className="inline-flex items-center text-teal font-medium hover:underline underline-offset-4"
        >
          See How It Works <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
