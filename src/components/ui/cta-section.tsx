"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  heading = "Ready to strengthen your operational backbone?",
  subheading = "Start with one focused conversation about your highest-impact bottleneck.",
  buttonText = "Book Discovery Call",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <SectionWrapper bg="teal" grain>
      <FadeIn>
        <div className="text-center relative">
          {/* Decorative radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-serif text-white relative z-10 heading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto relative z-10">
            {subheading}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-navy hover:bg-white/90 rounded-xl px-8 py-6 text-base font-semibold btn-glow-white relative z-10"
          >
            <Link href={buttonHref}>
              {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
