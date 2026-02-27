"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";

export function ImpactStats() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      <SectionHeading
        title="The Results"
        subtitle="Year-one outcomes after implementing structured operational systems."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        <div className="relative">
          <StatCounter value={145} label="Residents Served" />
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
        </div>
        <div className="relative">
          <StatCounter value={52} label="Children Housed" />
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
        </div>
        <StatCounter
          value={500}
          suffix="K+"
          prefix="$"
          label="In Preventive Savings"
        />
      </div>
    </SectionWrapper>
  );
}
