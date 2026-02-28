"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-dark"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.5 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/60 z-0" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,36,56,0.7)_100%)] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 md:pt-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center text-white/80 text-sm uppercase tracking-[0.25em] font-semibold mb-6 eyebrow-dash bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-1.5">
            Nonprofit Operations Architecture
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight [text-wrap:balance]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your mission deserves
        </motion.h1>

        {/* Chris's headshot */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="rounded-full p-1 bg-gradient-to-br from-terracotta/60 via-teal/40 to-navy-light/60">
            <Image
              src="/images/chris-pearson.jpg"
              alt="Chris Pearson, MSW, MBA"
              width={200}
              height={200}
              className="rounded-full object-cover w-[200px] h-[200px] border-3 border-navy-dark"
              priority
            />
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-wide">
            Chris Pearson, MSW, MBA
          </span>
          <span className="text-white/55 text-sm tracking-wider uppercase">
            Founder
          </span>
        </motion.div>

        {/* Supporting copy */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-white/85 font-medium max-w-3xl mx-auto leading-relaxed [text-wrap:pretty]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          We design the systems, rituals, and decision pathways that keep
          nonprofits steady under pressure, so your team can focus on people and
          outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8 py-6 text-base font-semibold ring-1 ring-white/20"
          >
            <Link href="/contact">
              Book a Discovery Call{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/10 hover:border-white rounded-xl px-8 py-6 text-base transition-all duration-300"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 2 },
        }}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <div className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5">
          <ChevronDown className="w-5 h-5 text-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
