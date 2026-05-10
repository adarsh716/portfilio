"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Code2, Award, Users } from "lucide-react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STATS = [
  { icon: Calendar, val: "2+", label: "YEARS EXPERIENCE" },
  { icon: Code2, val: "10+", label: "PROJECTS COMPLETED" },
  { icon: Award, val: "3+", label: "CERTIFICATIONS" },
];

const NODES = [
  { label: "WEB\nDEVELOPMENT", top: "15%", left: "55%" },
  { label: "API & BACKEND\nENGINEERING", top: "35%", left: "20%" },
  { label: "DATABASE\nDESIGN", top: "35%", left: "80%" },
  { label: "CLEAN CODE\nSOLUTIONS", top: "65%", left: "25%" },
  { label: "PERFORMANCE\nOPTIMIZATION", top: "65%", left: "75%" },
];

export const AdvancedHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-48 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.022] hero-dot-grid" />
        {/* Aurora blobs */}
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[130px] animate-aurora" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.025] blur-[100px] animate-aurora-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] bg-primary/[0.03]" />
      </div>

      <div className="container mx-auto px-6 xl:px-12 relative z-10 max-w-[1400px] w-full flex flex-col min-h-[calc(100vh-8rem)]">
        {/* Main Centered Layout */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mb-16 mt-8">
          {/* Text Content */}
          <div className="max-w-3xl space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-[9px] uppercase tracking-[0.2em] font-black text-slate-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              AVAILABLE FOR OPPORTUNITIES · 2026
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600 mb-4 flex items-center gap-2 justify-center"
              >
                <span className="text-primary/50">›</span> Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-[1.05] tracking-tight"
                data-cursor="text"
              >
                <div className="hero-name-outlined">ADARSH</div>
                <div className="text-shimmer hero-name-shimmer">LAKHANPAL</div>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
              className="flex items-center gap-4 w-full max-w-sm"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 flex items-center gap-2 whitespace-nowrap">
                FULL STACK DEVELOPER
                <span className="inline-block w-0.5 h-3 bg-primary animate-pulse" />
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
              className="text-slate-500 text-sm font-mono leading-relaxed max-w-md mx-auto"
            >
              I build modern web applications that are fast, scalable and
              user-focused. Turning ideas into impactful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
              className="pt-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary/[0.08] border border-primary/30 overflow-hidden hover:border-primary/60 hover:bg-primary/[0.13] transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.04)]"
              >
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                  EXPLORE MY WORK
                </span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={2.5}
                  className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM: Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          className="glassmorphism rounded-3xl border border-white/[0.05] p-6 md:p-8 mb-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x divide-white/[0.04]">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-px bg-primary/25 hidden lg:block" />
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/[0.12] flex items-center justify-center text-primary shrink-0">
                  <stat.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-black text-white glow-text">
                    {stat.val}
                  </div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2 pb-4"
        >
          <span className="text-[7px] font-black uppercase tracking-[0.5em] text-slate-700">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};
