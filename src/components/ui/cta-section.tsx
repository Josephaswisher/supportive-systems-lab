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
  heading = "Ready to build your backbone?",
  subheading = "Let's start with a conversation.",
  buttonText = "Book a Free Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <SectionWrapper bg="teal" grain>
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            {heading}
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            {subheading}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-navy hover:bg-white/90 rounded-xl px-8 py-6 text-base font-semibold"
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
