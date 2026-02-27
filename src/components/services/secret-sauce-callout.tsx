"use client";

import { Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function SecretSauceCallout() {
  return (
    <SectionWrapper bg="cream" className="!py-12 md:!py-16">
      <FadeIn>
        <div className="max-w-3xl mx-auto border-l-4 border-terracotta bg-white rounded-xl p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-terracotta" />
            <h3 className="font-serif text-2xl text-navy">
              The Secret Sauce: We Don&apos;t Just Deliver — We Make It Stick
            </h3>
          </div>
          <blockquote className="text-slate-brand text-lg leading-relaxed italic mb-4">
            &ldquo;You can write the best standard operating procedure on the
            planet, but if you can&apos;t get people to actually take it up and
            run with it, that&apos;s the challenge.&rdquo;
          </blockquote>
          <p className="text-navy font-medium text-sm">— Chris Pearson</p>
          <p className="text-slate-brand leading-relaxed mt-4">
            Every engagement includes adoption support. We train your staff,
            coach your leaders, and connect even the most mundane daily task back
            to your mission — because that&apos;s what makes systems actually
            work.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
