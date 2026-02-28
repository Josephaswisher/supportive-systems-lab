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
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ background: "#0a1628" }}
    >
      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.7 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay to blend video with effects */}
      <div className="absolute inset-0 bg-[#0a1628]/50 z-0" />

      {/* ===== FOG LIGHT BLOBS ===== */}
      <div className="hero-fog hero-fog--amber" />
      <div className="hero-fog hero-fog--ice" />
      <div className="hero-fog hero-fog--violet" />
      <div className="hero-fog hero-fog--teal" />
      <div className="hero-fog hero-fog--rose" />
      {/* Extra fog layers for density */}
      <div className="hero-fog hero-fog--amber-2" />
      <div className="hero-fog hero-fog--deep" />
      <div className="hero-fog hero-fog--haze" />

      {/* ===== LASER BEAMS ===== */}
      <div className="hero-shaft hero-shaft--1" />
      <div className="hero-shaft hero-shaft--2" />
      <div className="hero-shaft hero-shaft--3" />
      <div className="hero-shaft hero-shaft--4" />
      <div className="hero-shaft hero-shaft--5" />
      <div className="hero-shaft hero-shaft--6" />

      {/* ===== DENSE FOG — parts to reveal content ===== */}
      <div className="hero-fog-dense" />
      <div className="hero-fog-dense-2" />

      {/* ===== GRAIN ===== */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:256px_256px] pointer-events-none z-[4]" />

      {/* ===== SCANLINES ===== */}
      <div className="hero-scanlines" />

      {/* ===== VIGNETTE ===== */}
      <div className="hero-vignette" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 md:pt-10 text-center">
        {/* Haze glow behind text */}
        <div className="hero-text-haze" />

        {/* Eyebrow */}
        <div className="hero-reveal hero-reveal--eyebrow">
          <span className="inline-flex items-center text-white text-sm uppercase tracking-[0.25em] font-semibold mb-6 eyebrow-dash drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] bg-white/10 ring-1 ring-white/25 rounded-full px-4 py-1.5">
            Nonprofit Operations Architecture
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-reveal hero-reveal--line1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight [text-wrap:balance] drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
          Your mission deserves
        </h1>

        {/* Chris's headshot — the big reveal */}
        <div className="hero-reveal hero-reveal--headshot mt-10 flex flex-col items-center gap-4">
          <div className="hero-headshot-ring">
            <Image
              src="/images/chris-pearson.jpg"
              alt="Chris Pearson, MSW, MBA"
              width={220}
              height={220}
              className="rounded-full object-cover w-[220px] h-[220px]"
              priority
            />
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Chris Pearson, MSW, MBA
          </span>
          <span className="text-white/60 text-sm tracking-wider uppercase">
            Founder
          </span>
        </div>

        {/* Supporting copy */}
        <p className="hero-reveal hero-reveal--copy mt-8 text-lg md:text-xl text-white/92 font-medium max-w-3xl mx-auto leading-relaxed [text-wrap:pretty] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]">
          We design the systems, rituals, and decision pathways that keep
          nonprofits steady under pressure, so your team can focus on people and
          outcomes.
        </p>

        {/* CTAs */}
        <div className="hero-reveal hero-reveal--cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto bg-white/5 ring-1 ring-white/15 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8 py-6 text-base font-semibold btn-glow-terracotta ring-1 ring-white/20"
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
            className="w-full sm:w-auto border-2 border-white/65 text-white hover:bg-white/16 hover:border-white rounded-xl px-8 py-6 text-base bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 hero-reveal hero-reveal--scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-white/60">Scroll</span>
        <div className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5">
          <ChevronDown className="w-5 h-5 text-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
