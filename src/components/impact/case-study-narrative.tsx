"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

export function CaseStudyNarrative() {
  return (
    <SectionWrapper bg="white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <Badge className="bg-teal/10 text-teal border-0 mb-6">
            Kings Ridge Affordable Housing
          </Badge>
        </FadeIn>

        {/* The Challenge */}
        <FadeIn>
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">
              The Challenge
            </h2>
            <p className="text-slate-brand text-lg leading-relaxed">
              145 residents — including 52 children — exiting homelessness with
              chronic health conditions, behavioral health needs, and complex
              social situations. The staff was dedicated but overwhelmed, working
              without standardized systems, clear communication channels, or
              documented procedures. Critical observations fell through the
              cracks. Emergency room visits that could have been prevented were
              piling up.
            </p>
          </div>
        </FadeIn>

        {/* The Approach */}
        <FadeIn>
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">
              The Approach
            </h2>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Cross-Functional Team Meetings",
                  desc: "Everyone from the custodian to the nurse to the case manager — in the same room, every week. Every role had visibility into every other role's observations.",
                },
                {
                  num: "02",
                  title: "Observation-to-Intervention Pipeline",
                  desc: "Built a structured system where a front desk worker noticing a resident hobbling could trigger a clinical follow-up. Small observations preventing catastrophic cascades.",
                },
                {
                  num: "03",
                  title: "HIPAA-Compliant Information Sharing",
                  desc: "Created protocols that allowed care-relevant observations to flow between roles without violating privacy regulations.",
                },
                {
                  num: "04",
                  title: "On-Site Clinic Integration",
                  desc: "Coordinated with the on-site health clinic to create proactive intervention workflows rather than reactive emergency responses.",
                },
                {
                  num: "05",
                  title: "Comprehensive SOPs & Training",
                  desc: "Built incident reporting systems, staff onboarding procedures, and a collaborative care model that connected every role to the shared mission.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-5 items-start"
                >
                  <span className="text-teal font-serif text-2xl shrink-0 w-10">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-navy font-medium mb-1">{item.title}</h3>
                    <p className="text-slate-brand text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* The Insight */}
        <FadeIn>
          <div className="mb-12 bg-cloud rounded-2xl p-8 border border-fog">
            <h2 className="font-serif text-2xl text-navy mb-4">The Insight</h2>
            <p className="text-slate-brand text-lg leading-relaxed">
              When the front desk noticed a resident hobbling, that observation
              reached the nurse through Chris&apos;s structured meeting process —
              she could check if a PT session was missed. A simple observation.
              A simple system. A prevented $50,000 emergency room visit.
            </p>
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn>
          <blockquote className="border-l-4 border-teal pl-8 py-4 my-12">
            <p className="font-serif text-2xl md:text-3xl text-navy italic leading-snug">
              &ldquo;You want all that stuff on autopilot so you can really
              focus on the things that only humans can get done.&rdquo;
            </p>
            <cite className="text-slate-brand text-sm mt-4 block not-italic">
              — Chris Pearson, Founder
            </cite>
          </blockquote>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
