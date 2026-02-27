"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCounter } from "@/components/ui/stat-counter";
import { STATS } from "@/lib/constants";

export function StatsBanner() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {STATS.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            prefix={"prefix" in stat ? stat.prefix : ""}
            label={stat.label}
          />
        ))}
      </div>
      <p className="text-center text-white/40 text-sm mt-12">
        From our work at Kings Ridge Affordable Housing Complex
      </p>
    </SectionWrapper>
  );
}
