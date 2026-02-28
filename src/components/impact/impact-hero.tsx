"use client";

import { motion } from "motion/react";
import { heroVariants } from "@/lib/animations";

export function ImpactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream via-white to-cloud" aria-label="Impact hero">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-terracotta via-teal to-navy-light" />
      <div className="absolute top-[38%] left-[62%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-teal/[0.11] blur-[130px] pointer-events-none" />
      <div className="absolute top-[68%] left-[28%] w-[380px] h-[380px] rounded-full bg-terracotta/[0.09] blur-[110px] pointer-events-none" />
      <div className="absolute top-[18%] right-[10%] w-[220px] h-[220px] rounded-full bg-navy/8 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center bg-white/80 ring-1 ring-navy/12 shadow-[0_20px_60px_rgba(15,36,56,0.12)] rounded-3xl py-8 md:py-10 backdrop-blur-sm">
        <motion.span
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-teal/15 via-navy/10 to-terracotta/15 ring-1 ring-navy/12 text-navy text-sm uppercase tracking-[0.2em] font-semibold mb-4"
        >
          Case Study
        </motion.span>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy leading-tight heading-tight"
        >
          Measured Impact, Grounded Evidence
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-6 text-navy/85 text-lg font-medium max-w-2xl mx-auto"
        >
          How disciplined operational systems strengthened care continuity and
          reduced avoidable crisis costs at Kings Ridge.
        </motion.p>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center rounded-full bg-teal/12 text-teal-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            145 Residents
          </span>
          <span className="inline-flex items-center rounded-full bg-terracotta/12 text-terracotta-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            52 Children
          </span>
          <span className="inline-flex items-center rounded-full bg-navy/10 text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            $300K-$500K Avoided Costs
          </span>
        </motion.div>
      </div>
    </section>
  );
}
