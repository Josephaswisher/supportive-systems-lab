"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ClipboardCheck,
  FileText,
  RefreshCcw,
  GitBranch,
  Users,
  MessagesSquare,
  BarChart3,
  Sparkles,
  Check,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  FileText,
  RefreshCcw,
  GitBranch,
  Users,
  MessagesSquare,
  BarChart3,
  Sparkles,
};

export function ServiceAccordion() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Our Services"
        title="Eight ways we strengthen operational execution"
        subtitle="Open each service to see where it fits, what gets delivered, and how adoption is supported."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple" className="space-y-3">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || ClipboardCheck;
            return (
              <FadeIn key={service.id} delay={idx * 0.05}>
                <AccordionItem
                  value={service.id}
                  className="bg-white rounded-2xl border border-fog px-6 data-[state=open]:shadow-[0_8px_30px_rgba(42,157,143,0.1),0_0_0_1px_rgba(42,157,143,0.15)] data-[state=open]:border-teal/20 transition-all duration-300 hover:border-fog/80 data-[state=open]:border-l-[3px] data-[state=open]:border-l-teal"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 group/trigger">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 transition-all duration-300 group-data-[state=open]/trigger:bg-teal group-data-[state=open]/trigger:shadow-[0_0_15px_rgba(42,157,143,0.3)]">
                        <Icon className="w-5 h-5 text-teal transition-colors duration-300 group-data-[state=open]/trigger:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-lg text-navy">
                            {service.title}
                          </h3>
                          {"isSecretSauce" in service && service.isSecretSauce && (
                            <Badge className="bg-terracotta/10 text-terracotta border-0 text-xs">
                              Adoption Advantage
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-brand text-sm mt-0.5">
                          {service.summary}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="pl-14 space-y-4">
                      <p className="text-slate-brand leading-relaxed">
                        {service.details}
                      </p>

                      <div>
                        <p className="text-navy font-medium text-sm mb-2">
                          What you get:
                        </p>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-sm text-slate-brand"
                            >
                              <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-cloud rounded-xl p-4 border border-fog/50">
                        <p className="text-sm">
                          <span className="text-navy font-medium">
                            Best fit:{" "}
                          </span>
                          <span className="text-slate-brand">
                            {service.idealFor}
                          </span>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            );
          })}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
