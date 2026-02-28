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
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          {/* Decorative radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="glow-orb w-[200px] h-[200px] bg-white/[0.08] top-[30%] left-[20%] blur-[60px]" />
          <div className="glow-orb w-[150px] h-[150px] bg-terracotta/[0.08] top-[60%] left-[75%] blur-[50px]" style={{ animationDelay: "3s" }} />
          <h2 className="text-3xl md:text-4xl font-serif text-white relative z-10 heading-tight">
            {heading}
          </h2>
          <p className="mt-4 text-white/86 text-lg max-w-xl mx-auto relative z-10">
            {subheading}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-navy hover:bg-white/90 rounded-xl px-8 py-6 text-base font-semibold btn-glow-white relative z-10 ring-1 ring-white/30"
          >
            <Link href={buttonHref} className="group inline-flex items-center">
              {buttonText} <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
