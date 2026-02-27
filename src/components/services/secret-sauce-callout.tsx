"use client";

import { Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function SecretSauceCallout() {
  return (
    <SectionWrapper bg="cream" className="!py-12 md:!py-16">
      <FadeIn>
        <div className="max-w-3xl mx-auto border-l-4 border-terracotta bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-terracotta/[0.04] rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <Sparkles className="w-6 h-6 text-terracotta animate-pulse" />
            <h3 className="font-serif text-2xl text-navy">
              The Differentiator: Delivery Plus Adoption
            </h3>
          </div>
          <blockquote className="text-slate-brand text-lg leading-relaxed italic mb-4">
            &ldquo;Great procedures only matter when teams use them with confidence,
            consistency, and ownership.&rdquo;
          </blockquote>
          <p className="text-navy font-medium text-sm">— Chris Pearson</p>
          <p className="text-slate-brand leading-relaxed mt-4">
            Every engagement includes adoption support. We train staff, align
            leadership, and connect daily workflows back to mission outcomes so
            systems become culture, not paperwork.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
