"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCounter } from "@/components/ui/stat-counter";
import { STATS } from "@/lib/constants";

export function StatsBanner() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      {/* Floating particle dots */}
      <div className="floating-dot" style={{ top: "15%", left: "8%", animationDelay: "0s" }} />
      <div className="floating-dot" style={{ top: "70%", left: "15%", animationDelay: "1.5s" }} />
      <div className="floating-dot" style={{ top: "25%", right: "12%", animationDelay: "3s" }} />
      <div className="floating-dot" style={{ top: "65%", right: "8%", animationDelay: "4.5s" }} />
      <div className="floating-dot" style={{ top: "40%", left: "25%", animationDelay: "2s", width: "3px", height: "3px" }} />
      <div className="floating-dot" style={{ top: "50%", right: "22%", animationDelay: "3.5s", width: "3px", height: "3px" }} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        {STATS.map((stat, idx) => (
          <div key={stat.label} className="relative">
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={"prefix" in stat ? stat.prefix : ""}
              label={stat.label}
            />
            {/* Gradient divider between stats */}
            {idx < STATS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-white/75 text-sm mt-12">
        Based on results from the Kings Ridge affordable housing case study
      </p>
    </SectionWrapper>
  );
}
