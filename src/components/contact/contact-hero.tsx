"use client";

import { motion } from "motion/react";
import { heroVariants } from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
      <div className="absolute top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-teal/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-[25%] w-[300px] h-[300px] rounded-full bg-terracotta/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center bg-white/5 ring-1 ring-white/15 rounded-3xl py-8 md:py-10 backdrop-blur-sm">
        <motion.span
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-block text-white text-sm uppercase tracking-[0.25em] font-semibold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          Get In Touch
        </motion.span>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
        >
          Start the Conversation
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-6 text-white/95 text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          Book a discovery call or send a note about your current operational
          challenges. We will meet you with practical next steps.
        </motion.p>
      </div>
    </section>
  );
}
