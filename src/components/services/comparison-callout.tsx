"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function ComparisonCallout() {
  return (
    <SectionWrapper bg="cream" className="!py-12 md:!py-16">
      <FadeIn>
        <div className="max-w-3xl mx-auto border-l-4 border-teal bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 card-inner-glow ring-1 ring-navy/5">
          <p className="text-navy/85 text-lg leading-relaxed">
            Many firms optimize governance narratives and board-level strategy.
            <strong className="text-navy"> We operate at execution altitude,</strong>{" "}
            building the daily systems that keep teams aligned, services
            reliable, and mission delivery stable.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
