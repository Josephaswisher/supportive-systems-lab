"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function FutureStudies() {
  return (
    <SectionWrapper bg="cloud">
      <SectionHeading
        eyebrow="Coming Soon"
        title="More impact stories in development"
        subtitle="We are partnering with additional organizations to document measurable operational outcomes."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[1, 2, 3].map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white/60 rounded-2xl p-8 border border-fog/50 text-center opacity-60 border-shimmer-ring hover:opacity-80 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-fog mx-auto mb-4 animate-pulse" />
              <p className="text-slate-brand text-sm font-medium">
                Next Case Study In Progress
              </p>
              <p className="text-slate-brand/75 text-xs mt-2">
                Your organization could be featured next
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8"
          >
            <Link href="/contact">
              Start Your Impact Story <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
