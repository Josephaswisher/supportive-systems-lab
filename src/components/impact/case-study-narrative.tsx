"use client";

import {
  Activity,
  BookOpenCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

const approachSteps = [
  {
    num: "01",
    title: "Cross-Functional Team Meetings",
    desc: "Created structured weekly meetings where frontline, clinical, and administrative roles shared actionable observations in one operating rhythm.",
    outcome: "Shared visibility across roles",
    icon: UsersRound,
    accent: "from-teal to-teal-dark",
    border: "hover:border-teal/30",
  },
  {
    num: "02",
    title: "Observation-to-Intervention Pipeline",
    desc: "Built escalation pathways where frontline observations could trigger clinical follow-up before conditions became emergencies.",
    outcome: "Earlier interventions",
    icon: Activity,
    accent: "from-terracotta to-terracotta-dark",
    border: "hover:border-terracotta/30",
  },
  {
    num: "03",
    title: "HIPAA-Compliant Information Sharing",
    desc: "Established privacy-aligned information protocols that enabled safe, timely sharing of care-relevant signals.",
    outcome: "Safer data flow",
    icon: ShieldCheck,
    accent: "from-navy-light to-navy",
    border: "hover:border-navy/30",
  },
  {
    num: "04",
    title: "On-Site Clinic Integration",
    desc: "Integrated on-site clinic coordination into daily operations to shift from reactive crisis response to proactive intervention.",
    outcome: "Proactive care cadence",
    icon: Stethoscope,
    accent: "from-teal-dark to-teal",
    border: "hover:border-teal/30",
  },
  {
    num: "05",
    title: "Comprehensive SOPs & Training",
    desc: "Implemented SOPs, incident pathways, onboarding standards, and training loops connecting every role to shared care outcomes.",
    outcome: "Durable team adoption",
    icon: BookOpenCheck,
    accent: "from-terracotta-dark to-terracotta",
    border: "hover:border-terracotta/30",
  },
] as const;

export function CaseStudyNarrative() {
  return (
    <SectionWrapper bg="white" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-14 -left-16 w-56 h-56 rounded-full bg-teal/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-20 w-64 h-64 rounded-full bg-terracotta/8 blur-3xl" />
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <Badge className="bg-gradient-to-r from-teal/15 via-navy/10 to-terracotta/15 text-navy border-0 mb-6 font-semibold px-4 py-1.5 ring-1 ring-navy/12">
            Kings Ridge Affordable Housing
          </Badge>
        </FadeIn>

        {/* The Challenge */}
        <FadeIn>
          <div className="mb-12 rounded-2xl bg-gradient-to-br from-white via-cream/60 to-cloud/50 border border-navy/10 p-6 md:p-8 shadow-sm">
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
            <span className="inline-flex items-center rounded-full bg-navy/8 text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
              Execution Blueprint
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-3">
              The Approach
            </h2>
            <p className="text-navy/75 mb-6 leading-relaxed">
              Five coordinated interventions transformed frontline signals into
              reliable operational action.
            </p>
            <div className="relative space-y-4">
              <div className="hidden md:block absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-teal/35 via-navy/20 to-terracotta/30" />
              {approachSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.num}
                    className={`group flex gap-5 items-start p-4 rounded-2xl bg-white border border-fog/80 ${item.border} hover:bg-gradient-to-r hover:from-cloud hover:to-white transition-all duration-250 shadow-sm hover:shadow-md hover:-translate-y-0.5`}
                  >
                    <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white font-serif text-lg shrink-0 w-10 h-10 font-bold shadow-[0_8px_20px_rgba(42,157,143,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(42,157,143,0.45),0_8px_20px_rgba(42,157,143,0.25)] transition-all duration-300`}>
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-navy/8 text-navy">
                          <Icon className="w-4 h-4" />
                        </span>
                        <h3 className="text-navy font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-navy/75 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <span className="inline-flex mt-3 rounded-full bg-cream text-navy/75 border border-navy/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                        {item.outcome}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-r from-teal/10 via-white to-terracotta/10 border border-fog px-4 py-3 text-sm text-navy/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal" />
              Net effect: faster information flow, fewer avoidable emergencies,
              and stronger role-level accountability.
            </div>
          </div>
        </FadeIn>

        {/* The Insight */}
        <FadeIn>
          <div className="mb-12 bg-gradient-to-br from-cloud via-white to-cream rounded-2xl p-8 border border-fog border-shimmer-ring shadow-sm border-top-teal">
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
          <blockquote className="border-l-4 border-terracotta pl-8 py-5 my-12 rounded-r-2xl bg-gradient-to-r from-terracotta/[0.07] via-white to-transparent hover:from-terracotta/[0.1] transition-colors duration-300 quote-decorated relative shadow-sm">
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
