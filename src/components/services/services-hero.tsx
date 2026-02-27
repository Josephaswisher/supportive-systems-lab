"use client";

import { motion } from "motion/react";
import { heroVariants } from "@/lib/animations";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-block text-teal-light text-sm uppercase tracking-[0.25em] font-medium mb-4"
        >
          What We Do
        </motion.span>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
        >
          Services That Build
          <br />
          Lasting Infrastructure
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-6 text-white/60 text-lg max-w-2xl mx-auto"
        >
          We don&apos;t parachute in with a slide deck. We sit in the room and
          ask: what do you do, and how do you do it?
        </motion.p>
      </div>
    </section>
  );
}
