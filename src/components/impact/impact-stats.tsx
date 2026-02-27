"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";

export function ImpactStats() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      <SectionHeading
        title="The Results"
        subtitle="Year one outcomes from building operational infrastructure."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <StatCounter value={145} label="Residents Served" />
        <StatCounter value={52} label="Children Housed" />
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
