"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCountUp } from "@/hooks/useCountUp";

const CHRIS_STATS = [
  // Row 1 — The serious ones
  { value: 12, suffix: "+", label: "Years Leading Nonprofits" },
  { value: 30, suffix: "+", label: "Organizations Served" },
  { value: 145, suffix: "", label: "Residents Stabilized" },
  { value: 52, suffix: "", label: "Children Housed" },
  { value: 500, suffix: "K+", prefix: "$", label: "Acute-Care Costs Avoided" },
  { value: 96, suffix: "%", label: "Client Retention Rate" },
  { value: 1200, suffix: "+", label: "Lives Directly Impacted" },
  { value: 2, suffix: "M+", prefix: "$", label: "Client Budgets Managed" },

  // Row 2 — Operational flexing
  { value: 85, suffix: "+", label: "SOPs Delivered" },
  { value: 60, suffix: "+", label: "Workflows Redesigned" },
  { value: 35, suffix: "+", label: "Training Programs Built" },
  { value: 100, suffix: "+", label: "Process Docs Created" },
  { value: 45, suffix: "+", label: "Systems Implemented" },
  { value: 15, suffix: "+", label: "Dashboards Created" },
  { value: 25, suffix: "+", label: "Board Presentations" },
  { value: 18, suffix: "", label: "Strategic Plans Written" },

  // Row 3 — Results flexing
  { value: 40, suffix: "%", label: "Faster Staff Onboarding" },
  { value: 3, suffix: "x", label: "Efficiency Gains" },
  { value: 50, suffix: "%", label: "Less Staff Turnover" },
  { value: 70, suffix: "%", label: "Faster Decisions" },
  { value: 90, suffix: "%", label: "On-Time Delivery" },
  { value: 100, suffix: "%", label: "On Budget" },
  { value: 4.9, suffix: "/5", label: "Satisfaction Score" },
  { value: 48, suffix: "hr", label: "Fastest Diagnostic" },

  // Row 4 — Getting silly
  { value: 10000, suffix: "+", label: "Cups of Coffee" },
  { value: 347, suffix: "", label: "Whiteboards Filled" },
  { value: 0, suffix: "", label: "Jargon Decks Delivered" },
  { value: 99, suffix: "%", label: "Email Response Rate" },
  { value: 8, suffix: "", label: "Industry Sectors" },
  { value: 5, suffix: "", label: "States Operated In" },
  { value: 200, suffix: "+", label: "Stakeholder Meetings" },
  { value: 1, suffix: "", label: "Mission: Yours" },

  // Row 5 — Full absurd
  { value: 42, suffix: "", label: "Meaning of Life (Confirmed)" },
  { value: 0, suffix: "", label: "Times He Said 'Synergy'" },
  { value: 2847, suffix: "", label: "Post-It Notes Used" },
  { value: 100, suffix: "%", label: "Chance He Cares About Your Mission" },
  { value: 14, suffix: "", label: "Pens Borrowed, Never Returned" },
  { value: 1, suffix: "", label: "Nonprofit Whisperer" },
  { value: 365, suffix: "", label: "Days/Year Thinking About SOPs" },
  { value: 0, suffix: "", label: "Nonsense Tolerated" },

  // Row 6 — Peak unhinged
  { value: 7, suffix: "am", label: "Earliest Meeting Survived" },
  { value: 412, suffix: "", label: "Spreadsheet Tabs Open Right Now" },
  { value: 3, suffix: "", label: "Monitor Setup (Minimum)" },
  { value: 99, suffix: "%", label: "Operational Gravity" },
  { value: 0, suffix: "", label: "Days Off (Mentally)" },
  { value: 1, suffix: "", label: "Guy Who Actually Reads the SOP" },
  { value: 500, suffix: "+", label: "Dad Jokes Per Quarter" },
  { value: 100, suffix: "%", label: "That Guy Energy" },

  // Row 7 — The closer
  { value: 12, suffix: "", label: "Highlighter Colors Owned" },
  { value: 0, suffix: "", label: "Meetings That Should've Been Emails" },
  { value: 1, suffix: "", label: "Legendary Handshake" },
  { value: 88, suffix: "mph", label: "Speed of Operational Fix" },
  { value: 24, suffix: "/7", label: "Availability (In Spirit)" },
  { value: 9001, suffix: "", label: "Power Level" },
  { value: 1, suffix: "", label: "Chris Pearson" },
  { value: 0, suffix: "", label: "Reasons Not to Call" },
];

function MiniStat({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  return (
    <div ref={ref} className="text-center py-2">
      <span className="text-xl sm:text-2xl font-serif text-navy font-bold leading-none">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-1 text-slate-brand text-[10px] sm:text-xs uppercase tracking-wider leading-tight">
        {label}
      </p>
    </div>
  );
}

export function StatsShowcase() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="By the Numbers"
        title="Every. Single. Stat."
        subtitle="We ran out of room on the resume so we put them all here."
      />

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-2 sm:gap-3">
        {CHRIS_STATS.map((stat) => (
          <div
            key={stat.label}
            className="p-2 sm:p-3 rounded-lg bg-fog/40 ring-1 ring-navy/5 hover:bg-teal/5 hover:ring-teal/20 transition-colors duration-200"
          >
            <MiniStat
              value={stat.value}
              suffix={stat.suffix}
              prefix={"prefix" in stat ? (stat.prefix as string) : ""}
              label={stat.label}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
