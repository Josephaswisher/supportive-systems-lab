"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS_FULL } from "@/lib/constants";

const categories = [
  { key: "Experience", title: "Leadership & Experience", color: "teal" },
  { key: "Impact", title: "Impact & Outcomes", color: "terracotta" },
  { key: "Operations", title: "Operational Excellence", color: "teal" },
  { key: "Results", title: "Client Results", color: "terracotta" },
  { key: "Systems", title: "Systems & Infrastructure", color: "teal" },
  { key: "Speed", title: "Scale & Speed", color: "terracotta" },
] as const;

function LightStat({
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
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-4xl font-serif text-navy font-bold">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-2 text-slate-brand text-xs uppercase tracking-widest leading-tight">
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
        title="The Full Picture"
        subtitle="A comprehensive look at the impact, scale, and operational rigor Chris brings to every engagement."
      />

      <div className="space-y-16">
        {categories.map((cat) => {
          const stats = STATS_FULL.filter((s) => s.category === cat.key);
          return (
            <div key={cat.key}>
              <h3
                className={`font-serif text-xl mb-6 pb-3 border-b-2 ${
                  cat.color === "teal"
                    ? "text-teal border-teal/30"
                    : "text-terracotta border-terracotta/30"
                }`}
              >
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-fog/50 ring-1 ring-navy/5"
                  >
                    <LightStat
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={"prefix" in stat ? stat.prefix : ""}
                      label={stat.label}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
