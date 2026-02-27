"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroVariants } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

      {/* Organic blob decorations */}
      <svg
        className="absolute top-20 -left-32 w-96 h-96 opacity-10"
        viewBox="0 0 200 200"
      >
        <path
          fill="#2A9D8F"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.6,-0.8C87.2,14.6,81.8,29.2,73.1,41.2C64.4,53.2,52.4,62.6,39.1,70.2C25.8,77.8,12.9,83.5,-1.4,85.9C-15.7,88.3,-31.4,87.4,-44.6,80.6C-57.8,73.8,-68.5,61.1,-75.8,46.8C-83.1,32.5,-87,16.2,-86.4,0.3C-85.9,-15.6,-80.9,-31.2,-72.4,-43.8C-63.9,-56.4,-51.9,-66,-38.8,-73.8C-25.7,-81.6,-12.8,-87.6,1.3,-89.8C15.5,-92,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute bottom-20 -right-20 w-80 h-80 opacity-8"
        viewBox="0 0 200 200"
      >
        <path
          fill="#E76F51"
          d="M39.5,-65.3C52.9,-59.6,67,-52.4,74.1,-40.8C81.2,-29.2,81.3,-13.1,78.1,1.8C75,16.8,68.6,30.6,59.7,42.1C50.8,53.7,39.4,62.9,26.3,68.6C13.2,74.3,-1.5,76.5,-15.4,73.3C-29.3,70.1,-42.3,61.5,-53.3,50.6C-64.3,39.7,-73.3,26.5,-77.4,11.3C-81.6,-3.9,-80.8,-21.1,-73.3,-34.3C-65.8,-47.5,-51.5,-56.7,-37.2,-62.1C-22.9,-67.5,-8.6,-69.2,3.1,-74.5C14.7,-79.9,26.1,-71,39.5,-65.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="inline-block text-teal-light text-sm uppercase tracking-[0.25em] font-medium mb-6">
            Nonprofit Operations Consulting
          </span>
        </motion.div>

        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight"
        >
          Your mission deserves
          <br />
          <span className="text-teal-light">a backbone.</span>
        </motion.h1>

        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          We build the operations, procedures, and systems that keep nonprofits
          running — so you can focus on changing lives.
        </motion.p>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8 py-6 text-base font-semibold"
          >
            <Link href="/contact">
              Book a Free Consultation{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-6 text-base bg-transparent"
          >
            <Link href="/services">See Our Services</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}
