"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

const CHRIS_STATS = [
  // === THE REAL ONES ===
  { value: 12, suffix: "+", label: "Years Leading Nonprofits" },
  { value: 30, suffix: "+", label: "Organizations Served" },
  { value: 145, suffix: "", label: "Residents Stabilized" },
  { value: 52, suffix: "", label: "Children Housed" },
  { value: 500, suffix: "K+", prefix: "$", label: "Acute-Care Costs Avoided" },
  { value: 96, suffix: "%", label: "Client Retention Rate" },
  { value: 1200, suffix: "+", label: "Lives Directly Impacted" },
  { value: 2, suffix: "M+", prefix: "$", label: "Client Budgets Managed" },
  { value: 85, suffix: "+", label: "SOPs Delivered" },
  { value: 60, suffix: "+", label: "Workflows Redesigned" },
  { value: 35, suffix: "+", label: "Training Programs Built" },
  { value: 100, suffix: "+", label: "Process Docs Created" },
  { value: 45, suffix: "+", label: "Systems Implemented" },
  { value: 15, suffix: "+", label: "Dashboards Created" },
  { value: 25, suffix: "+", label: "Board Presentations" },
  { value: 18, suffix: "", label: "Strategic Plans Written" },

  // === RESULTS FLEXING ===
  { value: 40, suffix: "%", label: "Faster Staff Onboarding" },
  { value: 3, suffix: "x", label: "Efficiency Gains" },
  { value: 50, suffix: "%", label: "Less Staff Turnover" },
  { value: 70, suffix: "%", label: "Faster Decisions" },
  { value: 90, suffix: "%", label: "On-Time Delivery" },
  { value: 100, suffix: "%", label: "On Budget" },
  { value: 4, suffix: ".9/5", label: "Satisfaction Score" },
  { value: 48, suffix: "hr", label: "Fastest Diagnostic" },
  { value: 99, suffix: "%", label: "Email Response Rate" },
  { value: 8, suffix: "", label: "Industry Sectors" },
  { value: 5, suffix: "", label: "States Operated In" },
  { value: 200, suffix: "+", label: "Stakeholder Meetings" },
  { value: 300, suffix: "+", label: "Action Items Completed" },
  { value: 75, suffix: "+", label: "Team Retreats Facilitated" },
  { value: 40, suffix: "+", label: "Grant Reports Streamlined" },
  { value: 22, suffix: "", label: "Org Charts Untangled" },

  // === GETTING SILLY ===
  { value: 10000, suffix: "+", label: "Cups of Coffee" },
  { value: 347, suffix: "", label: "Whiteboards Filled" },
  { value: 0, suffix: "", label: "Jargon Decks Delivered" },
  { value: 1, suffix: "", label: "Mission: Yours" },
  { value: 42, suffix: "", label: "Meaning of Life (Confirmed)" },
  { value: 0, suffix: "", label: "Times He Said 'Synergy'" },
  { value: 2847, suffix: "", label: "Post-It Notes Used" },
  { value: 100, suffix: "%", label: "Cares About Your Mission" },
  { value: 14, suffix: "", label: "Pens Borrowed, Never Returned" },
  { value: 1, suffix: "", label: "Nonprofit Whisperer" },
  { value: 365, suffix: "", label: "Days/Year Thinking About SOPs" },
  { value: 0, suffix: "", label: "Nonsense Tolerated" },
  { value: 7, suffix: "am", label: "Earliest Meeting Survived" },
  { value: 412, suffix: "", label: "Spreadsheet Tabs Open Right Now" },
  { value: 3, suffix: "", label: "Monitor Setup (Minimum)" },
  { value: 99, suffix: "%", label: "Operational Gravity" },

  // === PEAK UNHINGED ===
  { value: 0, suffix: "", label: "Days Off (Mentally)" },
  { value: 1, suffix: "", label: "Guy Who Actually Reads the SOP" },
  { value: 500, suffix: "+", label: "Dad Jokes Per Quarter" },
  { value: 100, suffix: "%", label: "That Guy Energy" },
  { value: 12, suffix: "", label: "Highlighter Colors Owned" },
  { value: 0, suffix: "", label: "Meetings That Should've Been Emails" },
  { value: 1, suffix: "", label: "Legendary Handshake" },
  { value: 88, suffix: "mph", label: "Speed of Operational Fix" },
  { value: 24, suffix: "/7", label: "Availability (In Spirit)" },
  { value: 9001, suffix: "", label: "Power Level" },
  { value: 1, suffix: "", label: "Chris Pearson" },
  { value: 0, suffix: "", label: "Reasons Not to Call" },

  // === QUADRUPLE EXPANSION: PERSONAL STATS ===
  { value: 47, suffix: "", label: "Motivational Speeches Given" },
  { value: 0, suffix: "", label: "Times He Lost His Cool" },
  { value: 312, suffix: "", label: "LinkedIn Endorsements" },
  { value: 6, suffix: "", label: "Fonts He Approves Of" },
  { value: 100, suffix: "%", label: "Firm Handshake Rating" },
  { value: 4, suffix: "", label: "Ties Owned (All Navy)" },
  { value: 19, suffix: "", label: "Tabs Open in Chrome" },
  { value: 0, suffix: "", label: "Unread Slack Messages" },

  // === QUADRUPLE: OFFICE STATS ===
  { value: 742, suffix: "", label: "Google Docs Created" },
  { value: 11, suffix: "", label: "Standing Desk Adjustments/Day" },
  { value: 0, suffix: "", label: "Printer Jams Caused" },
  { value: 1, suffix: "", label: "Favorite Mug" },
  { value: 3500, suffix: "+", label: "Emails Sent This Year" },
  { value: 0, suffix: "", label: "Emails Ignored" },
  { value: 284, suffix: "", label: "Calendar Invites Sent" },
  { value: 0, suffix: "", label: "Meetings Without an Agenda" },

  // === QUADRUPLE: LIFE STATS ===
  { value: 156, suffix: "", label: "Books on Shelf About Leadership" },
  { value: 8, suffix: "", label: "Books Actually Finished" },
  { value: 2, suffix: "", label: "Podcast Appearances" },
  { value: 1, suffix: "", label: "TED Talk Idea (In Progress)" },
  { value: 0, suffix: "", label: "Fear of Spreadsheets" },
  { value: 99, suffix: "%", label: "Belief in Your Nonprofit" },
  { value: 1, suffix: "", label: "Lucky Pen" },
  { value: 0, suffix: "", label: "Tolerance for BS" },

  // === QUADRUPLE: VIBES ===
  { value: 100, suffix: "%", label: "Good Vibes Only" },
  { value: 0, suffix: "", label: "Times He Ghosted a Client" },
  { value: 17, suffix: "", label: "Plants on His Desk" },
  { value: 5, suffix: "", label: "Stars on Yelp (If He Were a Restaurant)" },
  { value: 87, suffix: "%", label: "Chance of High-Five" },
  { value: 1, suffix: "", label: "Golden Retriever Energy" },
  { value: 0, suffix: "", label: "Enemies (Known)" },
  { value: 999, suffix: "+", label: "Reasons to Hire Chris" },

  // === QUADRUPLE: DEEP CUTS ===
  { value: 52, suffix: "", label: "Weeks/Year He Wears Khakis" },
  { value: 3, suffix: "", label: "Backup Phone Chargers" },
  { value: 0, suffix: "", label: "Times He Said 'Circle Back'" },
  { value: 0, suffix: "", label: "Times He Said 'Low-Hanging Fruit'" },
  { value: 1, suffix: "", label: "Go-To Karaoke Song" },
  { value: 100, suffix: "%", label: "Would Recommend to a Friend" },
  { value: 0, suffix: "", label: "Regrets" },
  { value: 1, suffix: "", label: "Absolute Legend" },

  // === QUADRUPLE: METRICS ABOUT METRICS ===
  { value: 224, suffix: "", label: "Stats on This Page" },
  { value: 0, suffix: "", label: "Stats That Are Wrong" },
  { value: 100, suffix: "%", label: "Stats That Are Impressive" },
  { value: 1, suffix: "", label: "Page Dedicated to Numbers" },
  { value: 0, suffix: "", label: "Apologies for This Page" },
  { value: 69, suffix: "", label: "Nice" },
  { value: 420, suffix: "", label: "Also Nice" },
  { value: 1, suffix: "", label: "GOAT" },

  // === GRAND FINALE ===
  { value: 0, suffix: "", label: "Reasons This Page Should Exist" },
  { value: 1, suffix: "", label: "Reason It Does: Chris" },
  { value: 100, suffix: "%", label: "Worth Scrolling This Far" },
  { value: 0, suffix: "", label: "People Who Regret Hiring Chris" },
  { value: 1, suffix: "M", label: "Dollar Smile" },
  { value: 0, suffix: "", label: "Chance We're Deleting This" },
  { value: 10, suffix: "/10", label: "Would Operate Again" },
  { value: 1, suffix: "", label: "Call Him" },
];

function useChaosCounter(base: number) {
  const [count, setCount] = useState(base);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);
  const wobble = useMemo(() => Math.max(1, Math.ceil(base * 0.3)), [base]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const speed = 300 + Math.random() * 1200;

    const interval = setInterval(() => {
      if (!isVisible.current) return;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const delta = Math.ceil(Math.random() * wobble) * direction;
      setCount((prev) => {
        const next = prev + delta;
        if (next > base + wobble) return base + Math.ceil(Math.random() * wobble);
        if (next < Math.max(0, base - wobble)) return base;
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [base, wobble]);

  return { count, ref };
}

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
  const { count, ref } = useChaosCounter(value);
  return (
    <div ref={ref} className="text-center py-2">
      <span className="text-xl sm:text-2xl font-serif text-navy font-bold leading-none tabular-nums">
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

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2">
        {CHRIS_STATS.map((stat) => (
          <div
            key={stat.label}
            className="p-1.5 sm:p-2 rounded-lg bg-fog/40 ring-1 ring-navy/5 hover:bg-teal/5 hover:ring-teal/20 transition-colors duration-200"
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
