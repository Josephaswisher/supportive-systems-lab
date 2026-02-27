"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

export function CaseStudyNarrative() {
  return (
    <SectionWrapper bg="white">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <Badge className="bg-navy/10 text-navy border-0 mb-6 font-semibold">
            Kings Ridge Affordable Housing
          </Badge>
        </FadeIn>

        {/* The Challenge */}
        <FadeIn>
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">
              The Challenge
            </h2>
            <p className="text-navy/80 text-lg leading-relaxed">
              Kings Ridge served 145 residents, including 52 children, many with
              complex medical and social needs after homelessness. Staff were
              committed but stretched across fragmented workflows, weak
              communication pathways, and undocumented procedures. Critical
              observations were easy to miss, and preventable emergency episodes
              were escalating.
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
                  desc: "Created structured weekly meetings where frontline, clinical, and administrative roles shared actionable observations in one operating rhythm.",
                },
                {
                  num: "02",
                  title: "Observation-to-Intervention Pipeline",
                  desc: "Built escalation pathways where frontline observations could trigger clinical follow-up before conditions became emergencies.",
                },
                {
                  num: "03",
                  title: "HIPAA-Compliant Information Sharing",
                  desc: "Established privacy-aligned information protocols that enabled safe, timely sharing of care-relevant signals.",
                },
                {
                  num: "04",
                  title: "On-Site Clinic Integration",
                  desc: "Integrated on-site clinic coordination into daily operations to shift from reactive crisis response to proactive intervention.",
                },
                {
                  num: "05",
                  title: "Comprehensive SOPs & Training",
                  desc: "Implemented SOPs, incident pathways, onboarding standards, and training loops connecting every role to shared care outcomes.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-5 items-start p-4 -mx-4 rounded-xl hover:bg-cloud/60 transition-colors duration-200"
                >
                  <span className="text-gradient-teal font-serif text-2xl shrink-0 w-10 font-bold">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-navy font-medium mb-1">{item.title}</h3>
                    <p className="text-navy/75 text-sm leading-relaxed">
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
          <div className="mb-12 bg-cloud rounded-2xl p-8 border border-fog border-shimmer-ring">
            <h2 className="font-serif text-2xl text-navy mb-4">The Insight</h2>
            <p className="text-navy/80 text-lg leading-relaxed">
              Operational excellence in human services is often built on modest
              signals captured early. One frontline observation, routed through a
              reliable system, can prevent a major medical event and preserve
              dignity for residents.
            </p>
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn>
          <blockquote className="border-l-4 border-teal pl-8 py-4 my-12 rounded-r-xl hover:bg-teal/[0.03] transition-colors duration-300 quote-decorated relative">
            <p className="font-serif text-2xl md:text-3xl text-navy italic leading-snug">
              &ldquo;Put operations on autopilot so your people can spend their best
              energy on the work only humans can do.&rdquo;
            </p>
            <cite className="text-navy/70 text-sm mt-4 block not-italic">
              — Chris Pearson, Founder
            </cite>
          </blockquote>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
