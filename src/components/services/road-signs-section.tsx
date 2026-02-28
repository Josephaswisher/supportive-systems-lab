"use client";

import { SignpostIcon, MapIcon } from "@/components/ui/icons";
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
            Teams serving clients in real time do not need a 200-page policy
            binder at their elbow. They need clear, practical cues they can use
            instantly, backed by strong training.
          </p>
          <p className="text-slate-brand leading-relaxed">
            Like driving, success depends on usable guidance in the moment:
            road signs for action, maps for direction, and structure that keeps
            everyone safe.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-fog">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <SignpostIcon className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy mb-2">
                    Road Signs
                  </h3>
                  <p className="text-slate-brand text-sm leading-relaxed">
                    Forms, checklists, templates, and quick references teams can
                    use while serving clients under pressure.
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
                  <MapIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy mb-2">
                    The Map
                  </h3>
                  <p className="text-slate-brand text-sm leading-relaxed">
                    SOPs, handbooks, onboarding design, and training systems
                    that create consistency behind day-to-day execution.
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
