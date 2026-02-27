"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function ComparisonCallout() {
  return (
    <SectionWrapper bg="cream" className="!py-12 md:!py-16">
      <FadeIn>
        <div className="max-w-3xl mx-auto border-l-4 border-teal bg-white rounded-xl p-8 md:p-10 shadow-sm">
          <p className="text-slate-brand text-lg leading-relaxed">
            The Triangle has great legacy consulting firms focused on executive
            search, donor cultivation, and board governance — the 5,000-foot
            view. <strong className="text-navy">We work at ground level,</strong>{" "}
            building the day-to-day systems that actually keep your doors open
            and your team effective.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
