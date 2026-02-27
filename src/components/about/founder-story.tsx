"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function FounderStory() {
  return (
    <SectionWrapper bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Headshot */}
        <FadeIn className="lg:col-span-2">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg group/photo">
            <Image
              src="/images/chris-pearson.jpg"
              alt="Chris Pearson — Founder, Supportive Systems Lab"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <p className="text-center text-navy font-medium text-sm mt-4">
            Chris Pearson, MSW
          </p>
          <p className="text-center text-slate-brand text-xs">
            Founder, Supportive Systems Lab
          </p>
        </FadeIn>

        {/* Story */}
        <FadeIn className="lg:col-span-3 space-y-6">
          <div className="space-y-4 sm:space-y-5 text-slate-brand text-base sm:text-lg leading-relaxed">
            <p>
              Chris Pearson did not start in conference rooms. He started in
              apartments, care meetings, and frontline operations where tiny
              observations could trigger life-changing interventions.
            </p>

            <p>
              As Director of a 145-unit affordable housing complex for people
              exiting homelessness, he built operational infrastructure from the
              ground up: cross-functional meeting cadence, reporting pathways,
              onboarding systems, and role-based accountability.
            </p>

            <p>
              The result? An estimated{" "}
              <strong className="text-navy">
                $300,000–$500,000 in prevented emergency medical costs
              </strong>{" "}
              in year one. Not from abstract strategy decks, but from
              disciplined systems that helped good teams deliver better care.
            </p>

            <p>
              Chris holds a{" "}
              <strong className="text-navy">
                Master of Social Work
              </strong>{" "}
              (the heart), a{" "}
              <strong className="text-navy">business degree</strong> (the head),
              and years of{" "}
              <strong className="text-navy">
                hands-on operational leadership
              </strong>{" "}
              (the backbone). As a veteran, he brings disciplined execution and
              calm systems thinking to high-stakes nonprofit environments.
            </p>

            <p>
              He founded Supportive Systems Lab after seeing too many
              mission-rich organizations lose momentum not from lack of care,
              but from fragile operational design.
            </p>
          </div>

          {/* Pull quotes */}
          <div className="mt-8 space-y-6">
            <blockquote className="border-l-4 border-teal pl-5 sm:pl-8 py-4 rounded-r-xl hover:bg-teal/[0.03] transition-colors duration-300 quote-decorated relative">
              <p className="font-serif text-lg sm:text-xl text-navy italic leading-relaxed">
                &ldquo;If you can&apos;t keep the lights on and doors open, your
                mission cannot survive at the scale your community needs.&rdquo;
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-terracotta pl-5 sm:pl-8 py-4 rounded-r-xl hover:bg-terracotta/[0.03] transition-colors duration-300 relative">
              <span className="absolute top-0 left-2 font-serif text-5xl sm:text-6xl text-terracotta/10 leading-none pointer-events-none">&ldquo;</span>
              <p className="font-serif text-lg sm:text-xl text-navy italic leading-relaxed">
                &ldquo;You can write the best standard operating procedure on
                paper, but until teams trust it and use it, nothing changes.&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
