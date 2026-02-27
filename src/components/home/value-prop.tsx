"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function ValueProp() {
  return (
    <SectionWrapper bg="cloud">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-white rounded-2xl p-10 md:p-14 border border-teal/20 shadow-sm border-glow-teal overflow-hidden hover:shadow-lg transition-all duration-500 border-shimmer-ring">
            {/* Subtle corner accent blobs */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal/[0.04] rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-terracotta/[0.04] rounded-full blur-2xl" />
            <p className="relative z-10 font-serif text-2xl md:text-3xl text-navy leading-snug">
              &ldquo;Legacy retainers buy time. We build capability. In roughly one
              month, your team gets tools it can run with immediately.&rdquo;
            </p>
            <div className="relative z-10 mt-6 pt-6 border-t border-fog">
              <p className="text-slate-brand text-lg font-medium">
                Focused sprints. Practical tools. Durable adoption.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
