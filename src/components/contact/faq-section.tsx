"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  return (
    <SectionWrapper bg="cloud">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        subtitle="Quick answers to help you decide if we're the right fit."
      />

      <FadeIn>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-white rounded-xl border border-fog px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-serif text-lg text-navy">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0">
                  <p className="text-slate-brand leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
