"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function FounderStory() {
  return (
    <SectionWrapper bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Photo placeholder */}
        <FadeIn className="lg:col-span-2">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-navy to-teal-dark flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,_#2A9D8F_0%,_transparent_50%)]" />
            <span className="text-7xl font-serif text-white/90 relative z-10">
              CP
            </span>
          </div>
          <p className="text-center text-slate-brand text-sm mt-3 italic">
            Photo coming soon
          </p>
        </FadeIn>

        {/* Story */}
        <FadeIn className="lg:col-span-3 space-y-6">
          <div className="space-y-5 text-slate-brand text-lg leading-relaxed">
            <p>
              Chris Pearson didn&apos;t start in consulting. He started in the
              rooms — the apartments, the case management offices, the weekly
              staff meetings where a custodian&apos;s observation about a
              resident&apos;s gait could trigger a clinical intervention that
              prevented a $50,000 hospital stay.
            </p>

            <p>
              As Director of a 145-unit affordable housing complex serving
              people exiting homelessness, Chris built the operational
              infrastructure from scratch: cross-functional team meetings,
              incident reporting systems, staff onboarding and training, and a
              collaborative care model that connected every role in the building
              to the shared mission.
            </p>

            <p>
              The result? An estimated{" "}
              <strong className="text-navy">
                $300,000–$500,000 in prevented emergency medical costs
              </strong>{" "}
              in year one. Not from a fancy consultant&apos;s playbook — from
              getting the right systems in place so good people could do good
              work.
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
              (the backbone). He&apos;s a veteran who brings discipline and
              structure to every engagement.
            </p>

            <p>
              He founded Supportive Systems Lab because he saw too many small
              nonprofits with great missions failing not from a lack of heart,
              but from a lack of infrastructure.
            </p>
          </div>

          {/* Pull quotes */}
          <div className="mt-8 space-y-6">
            <blockquote className="border-l-4 border-teal pl-6 py-2">
              <p className="font-serif text-xl text-navy italic">
                &ldquo;If you can&apos;t keep the lights on and doors open, your
                mission dies.&rdquo;
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-terracotta pl-6 py-2">
              <p className="font-serif text-xl text-navy italic">
                &ldquo;You can write the best standard operating procedure on
                the planet, but if you can&apos;t get people to actually take it
                up and run with it, that&apos;s the challenge.&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
