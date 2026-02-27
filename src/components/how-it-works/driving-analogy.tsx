"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function DrivingAnalogy() {
  return (
    <SectionWrapper bg="navy-dark" grain>
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block"
          >
            <Quote className="w-12 h-12 text-teal/40 mx-auto mb-6" />
          </motion.div>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug mb-6">
            &ldquo;Teams do not need to memorize policy manuals mid-crisis. They need
            clear guidance in the moment, and systems that back it up.&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            That is why we pair robust SOP architecture with practical frontline
            tools: forms, checklists, and quick references designed for real
            service environments.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center pulse-glow-teal">
              <span className="text-teal font-serif text-sm">CP</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Chris Pearson</p>
              <p className="text-white/40 text-xs">
                Founder, Supportive Systems Lab
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
