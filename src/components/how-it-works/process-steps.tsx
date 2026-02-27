"use client";

import { Search, Wrench, Puzzle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Wrench,
  Puzzle,
};

export function ProcessSteps() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="The Process"
        title="Discover. Build. Embed."
        subtitle="Every engagement follows one disciplined framework from diagnosis to adoption."
      />

      <StaggerContainer className="space-y-0">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = iconMap[step.icon] || Search;
          return (
            <motion.div key={step.title} variants={fadeUpVariants}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center py-12">
                {/* Step number + line */}
                <div className="md:col-span-1 flex md:flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center font-serif text-2xl shrink-0 shadow-[0_0_20px_rgba(42,157,143,0.3)] pulse-glow-teal">
                    {step.step}
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block w-0.5 h-24 bg-gradient-to-b from-teal/30 via-teal/10 to-transparent mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-11 bg-white rounded-2xl p-8 border border-fog shadow-sm hover:shadow-md hover:border-teal/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-navy font-medium mb-2">
                        {step.description}
                      </p>
                      <p className="text-slate-brand leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
