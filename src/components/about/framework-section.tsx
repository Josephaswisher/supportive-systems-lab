"use client";

import { Heart, Brain, Landmark, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";

const framework = [
  {
    title: "The Heart",
    icon: Heart,
    color: "text-terracotta",
    bgColor: "bg-terracotta/10",
    borderTop: "border-top-terracotta",
    items: [
      "Trauma-informed engagement design",
      "Mission alignment in daily decisions",
      "People-centered systems architecture",
      "Culturally responsive implementation",
    ],
  },
  {
    title: "The Head",
    icon: Brain,
    color: "text-teal",
    bgColor: "bg-teal/10",
    borderTop: "border-top-teal",
    items: [
      "Financial strategy and operational economics",
      "Outcome measurement and decision intelligence",
      "Sustainable growth sequencing",
      "Risk mapping and mitigation",
    ],
  },
  {
    title: "The Backbone",
    icon: Landmark,
    color: "text-navy",
    bgColor: "bg-navy/10",
    borderTop: "border-top-navy",
    items: [
      "SOPs, handbooks, and practical tools",
      "Onboarding and competency pathways",
      "Succession and knowledge continuity",
      "Cross-functional communication systems",
    ],
  },
];

export function FrameworkSection() {
  return (
    <SectionWrapper bg="cloud">
      <SectionHeading
        eyebrow="Our Framework"
        title="A fully integrated operating model"
        subtitle="Every engagement blends care, strategy, and execution because durable impact requires all three."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {framework.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={fadeUpVariants}
            className={`bg-white rounded-2xl p-8 border border-fog ${pillar.borderTop} hover:shadow-lg hover:border-fog/80 transition-all duration-300 card-inner-glow`}
          >
            <div
              className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${pillar.color === "text-terracotta" ? "icon-glow-terracotta" : pillar.color === "text-teal" ? "icon-glow-teal" : "icon-glow-navy"}`}
            >
              <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
            </div>
            <h3 className="font-serif text-xl text-navy mb-5">
              {pillar.title}
            </h3>
            <ul className="space-y-3">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal mt-1 shrink-0" />
                  <span className="text-slate-brand text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
