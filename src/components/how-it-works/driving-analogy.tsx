"use client";

import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function DrivingAnalogy() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-teal/40 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug mb-6">
            &ldquo;You&apos;re not going to have a book of state driving laws in
            your car while you&apos;re driving. But you do need the road signs,
            the maps, and the cones.&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Your staff don&apos;t need to read SOPs while serving clients — they
            need forms, checklists, and quick-reference tools that guide them in
            the moment.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
              <span className="text-teal font-serif text-sm">CP</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Chris Pearson</p>
              <p className="text-white/40 text-xs">
                Founder, Supportive Systems Lab
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
