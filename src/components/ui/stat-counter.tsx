"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: StatCounterProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl md:text-6xl font-serif text-white stat-glow stat-glow-pulse">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-3 text-teal-light text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
