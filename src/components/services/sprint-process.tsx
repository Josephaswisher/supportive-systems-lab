"use client";

import { Phone, Zap, Handshake } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Free Discovery Call",
    subtitle: "30 minutes",
    description:
      "Tell us what's keeping you up at night. We'll listen, ask questions, and figure out if we're the right fit.",
  },
  {
    num: "2",
    icon: Zap,
    title: "Focused Sprint",
    subtitle: "~1 month, ~$5K",
    description:
      "We diagnose, build, and deliver. SOPs, handbooks, checklists, training — whatever you need, fast.",
  },
  {
    num: "3",
    icon: Handshake,
    title: "Adoption & Handoff",
    subtitle: "The secret sauce",
    description:
      "We don't just leave you with a binder. We train your team, build buy-in, and make sure new systems actually stick.",
  },
];

export function SprintProcess() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="How It Works"
        title="Sprint, Don't Marathon"
        subtitle="Focused engagements that deliver results fast."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, idx) => (
          <motion.div key={step.title} variants={fadeUpVariants}>
            <div className="relative text-center">
              {/* Step number */}
              <div className="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 font-serif text-xl">
                {step.num}
              </div>
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] border-t-2 border-dashed border-teal/30" />
              )}
              <h3 className="font-serif text-xl text-navy mb-1">
                {step.title}
              </h3>
              <p className="text-teal text-sm font-medium mb-3">
                {step.subtitle}
              </p>
              <p className="text-slate-brand text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      {/* Pricing callout */}
      <FadeIn>
        <div className="bg-navy-dark rounded-2xl p-8 md:p-10 text-center grain-overlay relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-serif text-2xl md:text-3xl text-white mb-3">
              Legacy firms charge $30,000 for six months.
            </p>
            <p className="text-teal-light text-lg">
              We&apos;ll do in one month what takes them three — for a fraction
              of the cost.
            </p>
            <p className="text-white/50 text-sm mt-4">
              Engagements start at approximately $5,000 per sprint. Every project
              is scoped to your organization&apos;s size, needs, and budget.
            </p>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
