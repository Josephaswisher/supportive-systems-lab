"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function FutureStudies() {
  return (
    <SectionWrapper bg="cloud" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-12 right-0 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-12 w-72 h-72 rounded-full bg-terracotta/10 blur-3xl" />
      <SectionHeading
        eyebrow="Coming Soon"
        title="More impact stories in development"
        subtitle="We are partnering with additional organizations to document measurable operational outcomes."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[1, 2, 3].map((i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-gradient-to-br from-white via-cream/60 to-cloud rounded-2xl p-8 border border-navy/10 text-center border-shimmer-ring shadow-sm hover:shadow-md hover:border-teal/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal/20 via-navy/10 to-terracotta/20 ring-1 ring-navy/10 mx-auto mb-4" />
              <p className="text-navy/85 text-sm font-semibold">
                Next Case Study In Progress
              </p>
              <p className="text-navy/60 text-xs mt-2">
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
            className="bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white rounded-xl px-8 ring-1 ring-white/30 shadow-[0_12px_28px_rgba(212,87,58,0.25)]"
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
