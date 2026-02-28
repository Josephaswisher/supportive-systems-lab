"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowIcon, ChevronDownIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { heroVariants } from "@/lib/animations";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-teal/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-terracotta/[0.04] blur-[100px] pointer-events-none" />

      {/* Organic blob decorations — animated drift */}
      <motion.svg
        className="absolute top-20 -left-32 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 opacity-10"
        viewBox="0 0 200 200"
        animate={{ x: [0, 15, 0], y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <path
          fill="#1A7A6D"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.6,-0.8C87.2,14.6,81.8,29.2,73.1,41.2C64.4,53.2,52.4,62.6,39.1,70.2C25.8,77.8,12.9,83.5,-1.4,85.9C-15.7,88.3,-31.4,87.4,-44.6,80.6C-57.8,73.8,-68.5,61.1,-75.8,46.8C-83.1,32.5,-87,16.2,-86.4,0.3C-85.9,-15.6,-80.9,-31.2,-72.4,-43.8C-63.9,-56.4,-51.9,-66,-38.8,-73.8C-25.7,-81.6,-12.8,-87.6,1.3,-89.8C15.5,-92,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </motion.svg>
      <motion.svg
        className="absolute bottom-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-[0.08]"
        viewBox="0 0 200 200"
        animate={{ x: [0, -12, 0], y: [0, 8, 0], rotate: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      >
        <path
          fill="#E76F51"
          d="M39.5,-65.3C52.9,-59.6,67,-52.4,74.1,-40.8C81.2,-29.2,81.3,-13.1,78.1,1.8C75,16.8,68.6,30.6,59.7,42.1C50.8,53.7,39.4,62.9,26.3,68.6C13.2,74.3,-1.5,76.5,-15.4,73.3C-29.3,70.1,-42.3,61.5,-53.3,50.6C-64.3,39.7,-73.3,26.5,-77.4,11.3C-81.6,-3.9,-80.8,-21.1,-73.3,-34.3C-65.8,-47.5,-51.5,-56.7,-37.2,-62.1C-22.9,-67.5,-8.6,-69.2,3.1,-74.5C14.7,-79.9,26.1,-71,39.5,-65.3Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 md:pt-10 text-center">
        {/* Logo mark */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 sm:mb-5"
        >
          <Logo
            size="xl"
            className="mx-auto ring-white/20 shadow-[0_0_40px_rgba(26,122,109,0.25)]"
          />
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-5 sm:mb-6"
        >
          <span className="inline-flex items-center text-white text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold eyebrow-dash drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] bg-white/10 ring-1 ring-white/25 rounded-full px-3 sm:px-4 py-1.5">
            Nonprofit Operations Architecture
          </span>
        </motion.div>

        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.08] tracking-tight [text-wrap:balance] drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]"
        >
          Your mission deserves
          <br />
          <span className="text-shimmer">operational gravity.</span>
        </motion.h1>

        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed [text-wrap:pretty] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]"
        >
          We design the systems, rituals, and decision pathways that keep
          nonprofits steady under pressure, so your team can focus on people and
          outcomes.
        </motion.p>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto bg-white/5 ring-1 ring-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold btn-glow-terracotta ring-1 ring-white/20"
          >
            <Link href="/contact">
              Book a Discovery Call{" "}
              <ArrowIcon className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white/65 text-white hover:bg-white/16 hover:border-white rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-5 text-sm text-white/90"
        >
          Trusted by mission-driven teams building durable impact.
        </motion.p>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
          className="mx-auto mt-4 h-px w-44 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-white/80">Scroll</span>
        <div className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5">
          <ChevronDownIcon className="w-5 h-5 text-white/85" />
        </div>
      </motion.div>
    </section>
  );
}
