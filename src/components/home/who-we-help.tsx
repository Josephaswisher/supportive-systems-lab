"use client";

import { AlertTriangle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";
import { PAIN_POINTS } from "@/lib/constants";

export function WhoWeHelp() {
  return (
    <SectionWrapper bg="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
            Who We Help
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6 leading-tight">
            Built for nonprofits that do the hard work
          </h2>
          <p className="text-slate-brand text-lg leading-relaxed">
            You founded your organization because you saw a need. You have the
            community support, the passion, and the vision. What you might not
            have is the operational infrastructure to execute at scale — and
            that&apos;s exactly where we come in.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PAIN_POINTS.map((point) => (
            <motion.div
              key={point}
              variants={fadeUpVariants}
              className="bg-white rounded-xl p-5 border border-fog"
            >
              <AlertTriangle className="w-5 h-5 text-terracotta mb-3" />
              <p className="text-navy text-sm font-medium leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
