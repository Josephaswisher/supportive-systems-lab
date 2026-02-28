"use client";

import { motion } from "motion/react";
import { heroVariants } from "@/lib/animations";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[72svh] flex items-center" aria-label="About hero">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-terracotta to-teal" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-teal/[0.08] blur-[130px] pointer-events-none" />
      <div className="absolute top-[60%] right-[20%] w-[360px] h-[360px] rounded-full bg-terracotta/[0.06] blur-[115px] pointer-events-none" />
      <div className="absolute top-[20%] right-[35%] w-[260px] h-[260px] rounded-full bg-white/[0.05] blur-[95px] pointer-events-none" />
      <motion.div
        className="absolute -top-6 -left-24 w-[520px] h-[220px] bg-gradient-to-r from-transparent via-teal/20 to-transparent blur-[42px] pointer-events-none"
        animate={{ x: [0, 26, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -right-24 w-[500px] h-[210px] bg-gradient-to-r from-transparent via-terracotta/20 to-transparent blur-[40px] pointer-events-none"
        animate={{ x: [0, -22, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center bg-white/6 ring-1 ring-white/20 shadow-[0_20px_60px_rgba(3,12,24,0.35)] rounded-3xl py-8 md:py-10 backdrop-blur-sm">
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight heading-tight text-shadow-hero"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-white/12 ring-1 ring-white/30 text-white/90 text-sm md:text-base uppercase tracking-[0.2em] mb-3">
            Meet
          </span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">Chris Pearson</span>
          <span className="mx-auto mt-4 block h-px w-40 bg-gradient-to-r from-transparent via-white/55 to-transparent" />
          <span className="mt-4 inline-flex items-center gap-3 text-lg md:text-xl font-sans font-semibold tracking-[0.08em] uppercase text-teal-light bg-navy-dark/35 rounded-full px-4 py-2 ring-1 ring-teal-light/40">
            <span>MSW</span>
            <span className="inline-block w-px h-4 bg-teal-light/70" aria-hidden="true" />
            <span>MBA</span>
          </span>
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-4 text-white/90 text-lg font-semibold flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span>Social Work Leadership</span>
          <span className="inline-block w-px h-4 bg-teal-light/70" aria-hidden="true" />
          <span>Business Strategy</span>
          <span className="inline-block w-px h-4 bg-teal-light/70" aria-hidden="true" />
          <span>Veteran Discipline</span>
          <span className="inline-block w-px h-4 bg-teal-light/70" aria-hidden="true" />
          <span>Operational Command</span>
        </motion.p>
      </div>
    </section>
  );
}
