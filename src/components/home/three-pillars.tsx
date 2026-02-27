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

const pillarStyles = [
  { iconBg: "bg-terracotta/10", iconText: "text-terracotta", glowShadow: "group-hover:shadow-[0_8px_40px_rgba(231,111,81,0.18),0_0_0_1px_rgba(231,111,81,0.08)]", topBorder: "border-top-terracotta" },
  { iconBg: "bg-teal/10", iconText: "text-teal", glowShadow: "group-hover:shadow-[0_8px_40px_rgba(42,157,143,0.18),0_0_0_1px_rgba(42,157,143,0.08)]", topBorder: "border-top-teal" },
  { iconBg: "bg-navy/10", iconText: "text-navy-light", glowShadow: "group-hover:shadow-[0_8px_40px_rgba(27,58,92,0.18),0_0_0_1px_rgba(27,58,92,0.08)]", topBorder: "border-top-navy" },
];

export function ThreePillars() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Our Approach"
        title="Heart. Head. Backbone."
        subtitle="A three-part framework for humane, disciplined, and repeatable nonprofit execution."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {THREE_PILLARS.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon] || Heart;
          const style = pillarStyles[idx];
          return (
            <motion.div
              key={pillar.title}
              variants={fadeUpVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className={`bg-white rounded-2xl p-8 md:p-10 border border-fog h-full cursor-default transition-shadow duration-400 ${style.glowShadow} ${style.topBorder}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-8 h-8 ${style.iconText}`} />
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
