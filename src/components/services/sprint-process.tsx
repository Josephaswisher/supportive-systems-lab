"use client";

import { PhoneIcon, SprintIcon, HandshakeIcon } from "@/components/ui/icons";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";

const steps = [
  {
    num: "1",
    icon: PhoneIcon,
    title: "Discovery Call",
    subtitle: "30 minutes",
    description:
      "Share the operational pressure points affecting staff, clients, and outcomes. We align on fit and sprint scope.",
  },
  {
    num: "2",
    icon: SprintIcon,
    title: "Focused Sprint Build",
    subtitle: "~1 month, ~$5K",
    description:
      "We diagnose root causes and build practical assets: SOPs, templates, onboarding, communication systems, and adoption supports.",
  },
  {
    num: "3",
    icon: HandshakeIcon,
    title: "Adoption & Reinforcement",
    subtitle: "Adoption differentiator",
    description:
      "We train teams, coach leaders, and reinforce behavior so systems become standard practice, not temporary pilots.",
  },
];

export function SprintProcess() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="How It Works"
        title="Sprint with intent, not consulting sprawl"
        subtitle="Focused engagements built for measurable momentum and durable adoption."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {steps.map((step, idx) => (
          <motion.div key={step.title} variants={fadeUpVariants}>
            <div className="relative text-center">
              {/* Step number */}
              <div className="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 font-serif text-xl shadow-[0_0_15px_rgba(42,157,143,0.3)] pulse-glow-teal">
                {step.num}
              </div>
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] border-t-2 border-dashed border-teal/25" />
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
        <div className="bg-navy-dark rounded-2xl p-5 sm:p-8 md:p-10 text-center grain-overlay relative overflow-hidden shadow-[0_8px_40px_rgba(15,36,56,0.5)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[120px] sm:w-[400px] sm:h-[200px] bg-teal/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-3">
              Legacy models often spend six months describing problems.
            </p>
            <p className="text-teal-light text-base sm:text-lg">
              We use one focused sprint to build systems teams can run with the
              next day.
            </p>
            <p className="text-white/80 text-sm mt-4">
              Typical engagements begin around $5,000. Scope is tailored to
              your team size, urgency, and implementation needs.
            </p>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
