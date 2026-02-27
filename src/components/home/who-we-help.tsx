"use client";

import { UserX, BrainCog, BarChart3, Workflow } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/lib/animations";
import { PAIN_POINTS } from "@/lib/constants";

const cardStyles = [
  {
    icon: UserX,
    gradient: "from-terracotta/90 via-terracotta/70 to-rose-500/60",
    accent: "text-white",
    iconBg: "bg-white/20",
    blob1: "bg-white/10",
    blob2: "bg-black/5",
    ring: "ring-terracotta/30",
  },
  {
    icon: BrainCog,
    gradient: "from-navy via-navy/90 to-indigo-900/80",
    accent: "text-white",
    iconBg: "bg-white/15",
    blob1: "bg-teal/15",
    blob2: "bg-white/5",
    ring: "ring-navy/30",
  },
  {
    icon: BarChart3,
    gradient: "from-teal via-teal/90 to-emerald-600/80",
    accent: "text-white",
    iconBg: "bg-white/20",
    blob1: "bg-white/10",
    blob2: "bg-navy/10",
    ring: "ring-teal/30",
  },
  {
    icon: Workflow,
    gradient: "from-navy-dark via-charcoal to-navy/90",
    accent: "text-white",
    iconBg: "bg-terracotta/20",
    blob1: "bg-terracotta/10",
    blob2: "bg-teal/10",
    ring: "ring-charcoal/30",
  },
];

export function WhoWeHelp() {
  return (
    <SectionWrapper bg="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
            Who We Help
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6 leading-tight">
            Built for nonprofits carrying heavy responsibility
          </h2>
          <p className="text-slate-brand text-lg leading-relaxed">
            You stepped in where systems were failing people. You have vision,
            trust, and urgency. What often lags is the operating infrastructure
            needed to deliver that mission consistently at scale.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point, idx) => {
            const style = cardStyles[idx];
            const Icon = style.icon;
            return (
              <motion.div
                key={point}
                variants={fadeUpVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative cursor-default"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${style.gradient} ring-1 ${style.ring} shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full min-h-[180px] flex flex-col justify-between`}
                >
                  {/* Decorative organic blobs */}
                  <div
                    className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${style.blob1} blur-2xl`}
                  />
                  <div
                    className={`absolute -bottom-6 -left-6 w-24 h-24 rounded-full ${style.blob2} blur-xl`}
                  />
                  <div className="absolute top-0 right-0 w-full h-full opacity-[0.04]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      backgroundSize: "128px 128px",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl ${style.iconBg} backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]`}
                    >
                      <Icon className={`w-6 h-6 ${style.accent}`} />
                    </div>
                    <p className={`${style.accent} text-sm font-semibold leading-relaxed drop-shadow-sm`}>
                      {point}
                    </p>
                  </div>

                  {/* Subtle bottom accent line */}
                  <div className="relative z-10 mt-4">
                    <div className="w-10 h-0.5 rounded-full bg-white/30" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
