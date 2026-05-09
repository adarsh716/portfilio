"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const Eye = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="w-5 h-5 rounded-full"
    style={{ background: "#fbbf24", boxShadow: "0 0 12px rgba(251,191,36,0.9), 0 0 24px rgba(251,191,36,0.4)" }}
    animate={{ scaleY: [1, 1, 0.07, 1, 1, 1] }}
    transition={{ duration: 5, repeat: Infinity, delay, times: [0, 0.36, 0.40, 0.44, 0.8, 1] }}
  />
);

export const HeroRobotPanel = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 1, ease: EASE }}
      className="w-full max-w-[480px] mx-auto flex items-center justify-center relative"
      style={{ minHeight: "580px" }}
    >
      {/* Background pulse glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-72 h-72 rounded-full"
          animate={{ opacity: [0.10, 0.20, 0.10], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.3), transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      {/* Robot — hover zone + float */}
      <motion.div
        className="relative flex flex-col items-center"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ── Info banner — appears ABOVE robot on hover ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 16, scaleY: 0 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: 8, scaleY: 0 }}
              transition={{ duration: 0.42, ease: EASE }}
              className="absolute bottom-full mb-6 w-72 glassmorphism rounded-[1.5rem] p-5 z-30"
              style={{
                transformOrigin: "bottom center",
                boxShadow: "0 0 0 1px rgba(251,191,36,0.2), 0 -20px 60px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Banner string */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-px h-5"
                style={{ background: "linear-gradient(to bottom, rgba(251,191,36,0.5), transparent)" }}
              />

              <p className="text-[6.5px] font-black font-mono uppercase tracking-[0.45em] text-primary/60 mb-1">
                Hello, I&apos;m
              </p>
              <h3 className="text-white font-black text-[1.1rem] tracking-tight leading-tight mb-0.5">
                Adarsh Lakhanpal
              </h3>
              <p className="text-primary text-[9px] font-black uppercase tracking-[0.22em] mb-3">
                Full Stack Developer
              </p>

              <div className="space-y-1.5 mb-3">
                {([
                  { Icon: Briefcase, text: "Scriptbox · Since Jun 2024" },
                  { Icon: MapPin,    text: "Amritsar, India" },
                  { Icon: Mail,      text: "alakhanpal2003@gmail.com" },
                ] as const).map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={9} className="text-primary/60 flex-shrink-0" />
                    <span className="text-slate-400 text-[10px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {["Next.js", "React", "Supabase", "Prisma"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-wider"
                    style={{
                      background: "rgba(251,191,36,0.08)",
                      border: "1px solid rgba(251,191,36,0.2)",
                      color: "rgba(251,191,36,0.8)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-1.5 pt-2.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[7.5px] font-black uppercase tracking-widest text-green-400">
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Speech bubble ── */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ delay: 1.3, duration: 0.35, ease: EASE }}
              className="absolute glassmorphism rounded-2xl rounded-bl-none px-4 py-2.5 whitespace-nowrap z-20"
              style={{
                bottom: "calc(100% - 20px)",
                left: "calc(100% + 12px)",
                boxShadow: "0 0 0 1px rgba(251,191,36,0.18)",
              }}
            >
              <span className="text-white text-xs font-black">Hi there! 👋 </span>
              <span className="text-primary/70 text-[9px] font-black">hover me</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Antenna ── */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full"
            style={{ background: "#fbbf24" }}
            animate={{
              boxShadow: [
                "0 0 8px rgba(251,191,36,0.5)",
                "0 0 24px rgba(251,191,36,1), 0 0 40px rgba(251,191,36,0.4)",
                "0 0 8px rgba(251,191,36,0.5)",
              ],
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <div className="w-[3px] h-8 rounded-full" style={{ background: "rgba(251,191,36,0.35)" }} />
        </div>

        {/* ── Head ── */}
        <motion.div
          className="w-36 h-28 glassmorphism rounded-[1.5rem] flex flex-col items-center justify-center relative"
          style={{ boxShadow: "0 0 0 1px rgba(251,191,36,0.18), 0 8px 32px rgba(0,0,0,0.5)" }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex gap-6 mb-3">
            <Eye delay={0} />
            <Eye delay={0.1} />
          </div>
          <motion.div
            className="rounded-full"
            animate={{
              width: hovered ? 46 : 24,
              height: hovered ? 7 : 4,
              backgroundColor: hovered ? "#4ade80" : "rgba(251,191,36,0.4)",
              boxShadow: hovered ? "0 0 10px rgba(74,222,128,0.6)" : "none",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* ── Neck ── */}
        <div
          className="w-8 h-2.5 rounded-full"
          style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.1)" }}
        />

        {/* ── Body row ── */}
        <div className="flex items-start">

          {/* Left arm — excited wave on hover */}
          <motion.div
            className="w-7 h-24 glassmorphism rounded-2xl mt-3"
            style={{
              boxShadow: "0 0 0 1px rgba(251,191,36,0.1)",
              transformOrigin: "top center",
            }}
            animate={{
              rotate: hovered
                ? [0, -30, -10, -30, -15]
                : [0, -10, 0],
            }}
            transition={
              hovered
                ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Torso */}
          <div
            className="w-44 h-36 glassmorphism rounded-[1.5rem] flex flex-col items-center justify-center z-10"
            style={{ boxShadow: "0 0 0 1px rgba(251,191,36,0.15), 0 12px 40px rgba(0,0,0,0.5)" }}
          >
            {/* Chest display */}
            <div
              className="w-20 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(251,191,36,0.2)" }}
            >
              <motion.span
                className="text-[10px] font-mono font-black text-primary tracking-widest"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {hovered ? "HELLO!" : "< / >"}
              </motion.span>
            </div>
            {/* Rivets */}
            <div className="flex gap-2.5 mt-3.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(251,191,36,0.22)" }}
                />
              ))}
            </div>
          </div>

          {/* Right arm — raises on hover */}
          <motion.div
            className="w-7 h-24 glassmorphism rounded-2xl mt-3"
            style={{
              boxShadow: "0 0 0 1px rgba(251,191,36,0.1)",
              transformOrigin: "top center",
            }}
            animate={{ rotate: hovered ? -50 : 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          />
        </div>

        {/* ── Legs ── */}
        <div className="w-8 h-2" style={{ background: "rgba(251,191,36,0.08)" }} />
        <div className="flex gap-5">
          {([
            { rotate: [0, 3, 0, -3, 0], delay: 0 },
            { rotate: [0, -3, 0, 3, 0], delay: 0.6 },
          ] as const).map(({ rotate, delay }, i) => (
            <motion.div
              key={i}
              className="w-10 h-16 glassmorphism rounded-b-2xl"
              style={{
                boxShadow: "0 0 0 1px rgba(251,191,36,0.1)",
                transformOrigin: "top center",
              }}
              animate={{ rotate }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
            />
          ))}
        </div>

        {/* Floor shadow */}
        <motion.div
          className="w-32 h-3 rounded-full mt-2"
          style={{ background: "rgba(251,191,36,0.1)", filter: "blur(10px)" }}
          animate={{ scaleX: [0.7, 1.1, 0.7], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};
