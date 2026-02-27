"use client";

import { Calendar, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <SectionWrapper bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Form — left side */}
        <FadeIn className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-fog shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-300">
            <h2 className="font-serif text-2xl text-navy mb-2">
              Tell us what needs fixing first
            </h2>
            <p className="text-slate-brand mb-8">
              Share your context, team pressure points, and immediate goals. We
              respond within 48 hours.
            </p>
            <ContactForm />
          </div>
        </FadeIn>

        {/* Info — right side */}
        <FadeIn delay={0.2} className="lg:col-span-2 space-y-6">
          {/* Calendly Card */}
          <div className="bg-cloud rounded-2xl p-8 border border-fog border-top-teal hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-teal" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-2">
              Prefer to schedule right now?
            </h3>
            <p className="text-slate-brand text-sm mb-4">
              Book a focused discovery call at a time that works for your team.
            </p>
            <Button className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-xl">
              Book Discovery Call
            </Button>
            <p className="text-slate-brand/75 text-xs mt-2 text-center">
              Scheduling link coming soon
            </p>
          </div>

          {/* Contact info */}
          <div className="bg-cloud rounded-2xl p-8 border border-fog hover:shadow-md hover:border-fog/80 transition-all duration-300">
            <h3 className="font-serif text-lg text-navy mb-4">
              Direct Contact Details
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:supsyslab@outlook.com"
                  className="flex items-center gap-3 text-slate-brand hover:text-navy transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-teal" />
                  supsyslab@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19195551234"
                  className="flex items-center gap-3 text-slate-brand hover:text-navy transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-teal" />
                  (919) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-brand hover:text-navy transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4 text-teal" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-brand text-sm">
                <MapPin className="w-4 h-4 text-teal" />
                Triangle, NC
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
