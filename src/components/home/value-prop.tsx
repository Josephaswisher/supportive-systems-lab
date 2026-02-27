"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function ValueProp() {
  return (
    <SectionWrapper bg="cloud">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-10 md:p-14 border border-fog shadow-sm">
            <p className="font-serif text-2xl md:text-3xl text-navy leading-snug">
              &ldquo;Legacy firms charge{" "}
              <span className="text-terracotta">$30K for 6 months</span>. We
              deliver in{" "}
              <span className="text-teal">1 month for a fraction</span> of the
              cost.&rdquo;
            </p>
            <div className="mt-6 pt-6 border-t border-fog">
              <p className="text-slate-brand text-lg font-medium">
                Short sprints. Real results. Systems that stick.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
