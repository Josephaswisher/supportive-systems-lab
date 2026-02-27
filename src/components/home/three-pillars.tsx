"use client";

import { motion } from "motion/react";
import { Heart, Brain, Landmark } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { fadeUpVariants, cardHoverVariants } from "@/lib/animations";
import { THREE_PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Brain,
  Vertebrae: Landmark,
};

export function ThreePillars() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Our Approach"
        title="Heart. Head. Backbone."
        subtitle="Three pillars that make nonprofit operations actually work."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {THREE_PILLARS.map((pillar) => {
          const Icon = iconMap[pillar.icon] || Heart;
          return (
            <motion.div
              key={pillar.title}
              variants={fadeUpVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl p-8 md:p-10 border border-fog h-full cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-brand leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
