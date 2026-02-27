"use client";

import { Search, Wrench, Users, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants, cardHoverVariants } from "@/lib/animations";

const tierColors = ["border-top-terracotta", "border-top-teal", "border-top-navy"];

const tiers = [
  {
    title: "Assessment Tier",
    icon: Search,
    description: "Diagnose where friction lives",
    items: [
      "Organizational health report",
      "Gap analysis across operations",
      "Quick-win recommendations",
      "Prioritized action roadmap",
    ],
  },
  {
    title: "Build Tier",
    icon: Wrench,
    description: "Build practical operating assets",
    items: [
      "Standard operating procedures",
      "Employee handbooks",
      "Forms, templates, and checklists",
      "Training programs and materials",
    ],
  },
  {
    title: "Adoption Tier",
    icon: Users,
    description: "Reinforce and sustain change",
    items: [
      "Staff training and working sessions",
      "Leadership coaching and alignment",
      "Culture integration workshops",
      "Follow-up adoption check-ins",
    ],
  },
];

export function DeliverablesTiers() {
  return (
    <SectionWrapper bg="cloud">
      <SectionHeading
        eyebrow="Deliverables"
        title="What each sprint delivers"
        subtitle="Concrete tools, implementation support, and adoption mechanisms your team can use immediately."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <motion.div key={tier.title} variants={fadeUpVariants}>
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className={`bg-white rounded-2xl p-8 border border-fog h-full cursor-default ${tierColors[idx]}`}
            >
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <tier.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-1">
                {tier.title}
              </h3>
              <p className="text-teal text-sm font-medium mb-5">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                    <span className="text-slate-brand text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
