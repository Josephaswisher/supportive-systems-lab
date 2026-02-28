"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";

export function ImpactStats() {
  return (
    <SectionWrapper bg="navy-dark" grain className="overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-teal via-terracotta to-teal" />
      <div className="pointer-events-none absolute -top-20 -right-12 w-72 h-72 rounded-full bg-teal/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-12 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl" />
      <SectionHeading
        title="The Results"
        subtitle="Year-one outcomes after implementing structured operational systems."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
        <div className="relative rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-6 md:p-7 backdrop-blur-sm">
          <StatCounter value={145} label="Residents Served" />
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
        </div>
        <div className="relative rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-6 md:p-7 backdrop-blur-sm">
          <StatCounter value={52} label="Children Housed" />
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
        </div>
        <div className="relative rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-6 md:p-7 backdrop-blur-sm">
          <StatCounter
            value={500}
            suffix="K+"
            prefix="$"
            label="In Preventive Savings"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
