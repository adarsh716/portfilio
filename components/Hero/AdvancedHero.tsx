"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { HeroCRTPanel } from "./HeroCRTPanel";

const ROLES = [
  "Full Stack Developer",
  "React.js Engineer",
  "Next.js Specialist",
  "Supabase & Prisma Dev",
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const AdvancedHero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 40, stiffness: 70, mass: 0.6 };
  const blobX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springCfg);
  const blobY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springCfg);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden py-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {/* ── Aurora background ── */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%]  left-[2%]  w-[550px] h-[550px] rounded-full blur-[130px] bg-[#fbbf24]/20 animate-aurora" />
        <div className="absolute bottom-[5%] right-[3%] w-[450px] h-[450px] rounded-full blur-[110px] bg-blue-500/12 animate-aurora-2" />
        <div className="absolute top-[40%] left-[35%] w-[600px] h-[600px] rounded-full blur-[150px] bg-white/[0.04] animate-aurora-3" />
      </motion.div>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">

          {/* ════════════ LEFT — Text content ════════════ */}
          <div className="lg:w-[50%] text-center lg:text-left order-2 lg:order-1 min-w-0">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glassmorphism font-mono text-[9px] uppercase tracking-[0.3em] font-black text-slate-400 mb-8"
            >
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,1)]" />
              </span>
              Available for opportunities · 2026
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 font-mono text-xs uppercase tracking-[0.45em] mb-3 hidden lg:block"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.22, ease: EASE }}
              className="font-black leading-[0.9] tracking-[-0.02em] text-white mb-1 whitespace-nowrap"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
            >
              ADARSH
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.32, ease: EASE }}
              className="font-black leading-[0.9] tracking-[-0.02em] text-gradient mb-7 whitespace-nowrap"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
            >
              LAKHANPAL
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-4 justify-center lg:justify-start mb-7"
            >
              <div className="w-8 h-[2px] bg-primary rounded-full flex-shrink-0" />
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 26, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -26, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="block text-primary font-black text-sm uppercase tracking-[0.25em]"
                  >
                    {ROLES[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md mb-10 font-light mx-auto lg:mx-0"
            >
              Building production-ready platforms at{" "}
              <span className="text-white font-semibold">Scriptbox</span>{" "}
              — from role-based SaaS apps to real-time restaurant systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-primary text-slate-950 rounded-2xl font-black text-sm flex items-center gap-2.5 overflow-hidden"
                style={{ boxShadow: "0 0 28px rgba(251,191,36,0.35), 0 6px 20px rgba(251,191,36,0.15)" }}
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                View My Work
                <ArrowRight size={15} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 glassmorphism rounded-2xl font-black text-sm flex items-center gap-2.5 text-white hover:border-primary/40 transition-all"
              >
                <Mail size={14} className="text-primary" />
                Let&apos;s Talk
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex justify-center lg:justify-start gap-8 md:gap-12"
            >
              {[
                { val: "2+", label: "Yrs Exp." },
                { val: "4+", label: "Projects" },
                { val: "3+", label: "Certs" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-black text-white glow-text">{s.val}</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.35em] text-slate-600 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ════════════ RIGHT — AI Chat ════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: EASE }}
            className="lg:w-[48%] order-1 lg:order-2 w-full max-w-[520px] mx-auto"
          >
            <HeroCRTPanel />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <div className="text-[8px] font-black uppercase tracking-[0.6em] text-slate-700">Scroll</div>
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
};
