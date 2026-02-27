"use client";

import { Signpost, Map, FileCheck, BookOpen } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function RoadSignsSection() {
  return (
    <SectionWrapper bg="cloud">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6 leading-tight">
            Road Signs, Not Law Books
          </h2>
          <p className="text-slate-brand text-lg leading-relaxed mb-4">
            Your staff don&apos;t need a 200-page manual while they&apos;re
            helping a client. They need road signs — quick-reference tools for
            in-the-moment decisions — paired with solid training that builds
            competence over time.
          </p>
          <p className="text-slate-brand leading-relaxed">
            You&apos;re not going to have a book of state driving laws in your
            car while you&apos;re driving. But you do need the road signs, the
            maps, and the cones.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-fog">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <Signpost className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy mb-2">
                    Road Signs
                  </h3>
                  <p className="text-slate-brand text-sm leading-relaxed">
                    Forms, checklists, templates, quick-reference guides — the
                    tools staff use in real time while serving clients.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Forms", "Checklists", "Templates", "Quick-ref guides"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-teal/10 text-teal px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-fog">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy mb-2">
                    The Map
                  </h3>
                  <p className="text-slate-brand text-sm leading-relaxed">
                    SOPs, handbooks, onboarding programs, training curricula —
                    the comprehensive systems underneath that make everything
                    work.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["SOPs", "Handbooks", "Onboarding", "Training"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-navy/10 text-navy px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
