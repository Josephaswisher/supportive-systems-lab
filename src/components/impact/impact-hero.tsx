"use client";

import { motion } from "motion/react";
import { heroVariants } from "@/lib/animations";

export function ImpactHero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-cream via-white to-cloud" aria-label="Impact hero">
      <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-teal/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-[70%] left-[30%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-terracotta/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center bg-white/75 ring-1 ring-navy/10 rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 backdrop-blur-sm">
        <motion.span
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-block text-navy text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold mb-4"
        >
          Case Study
        </motion.span>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy leading-tight heading-tight"
        >
          Measured Impact, Grounded Evidence
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-4 sm:mt-6 text-navy/85 text-base sm:text-lg font-medium max-w-2xl mx-auto"
        >
          How disciplined operational systems strengthened care continuity and
          reduced avoidable crisis costs at Kings Ridge.
        </motion.p>
      </div>
    </section>
  );
}
