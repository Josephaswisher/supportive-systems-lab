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
    items: [
      "Trauma-informed approach to every engagement",
      "Mission alignment at every decision point",
      "People-centered system design",
      "Cultural sensitivity and inclusivity",
    ],
  },
  {
    title: "The Head",
    icon: Brain,
    color: "text-teal",
    bgColor: "bg-teal/10",
    items: [
      "Financial strategy and ROI analysis",
      "Data-driven outcome measurement",
      "Sustainable growth planning",
      "Risk assessment and mitigation",
    ],
  },
  {
    title: "The Backbone",
    icon: Landmark,
    color: "text-navy",
    bgColor: "bg-navy/10",
    items: [
      "SOPs, handbooks, and documentation",
      "Onboarding and training systems",
      "Succession and knowledge transfer",
      "Cross-functional communication structures",
    ],
  },
];

export function FrameworkSection() {
  return (
    <SectionWrapper bg="cloud">
      <SectionHeading
        eyebrow="Our Framework"
        title="The whole organization, integrated"
        subtitle="Every engagement brings all three pillars together. Because you can't have one without the others."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {framework.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={fadeUpVariants}
            className="bg-white rounded-2xl p-8 border border-fog"
          >
            <div
              className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-5`}
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
