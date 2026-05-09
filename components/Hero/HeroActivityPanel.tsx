"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const WEEKS = 26;

const MONTHS = [
  { label: "Nov", col: 0 },
  { label: "Dec", col: 4 },
  { label: "Jan", col: 8 },
  { label: "Feb", col: 12 },
  { label: "Mar", col: 17 },
  { label: "Apr", col: 21 },
];

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""];

const TECH = [
  { name: "Next.js",    accent: "primary" },
  { name: "React.js",  accent: "primary" },
  { name: "TypeScript", accent: "blue" },
  { name: "Supabase",  accent: "blue" },
  { name: "Prisma",    accent: "primary" },
  { name: "Firebase",  accent: "blue" },
  { name: "Tailwind",  accent: "primary" },
  { name: "Node.js",   accent: "blue" },
];

const LEVEL_BG = [
  "rgba(255,255,255,0.04)",
  "rgba(251,191,36,0.18)",
  "rgba(251,191,36,0.40)",
  "rgba(251,191,36,0.65)",
  "rgba(251,191,36,0.90)",
];
const LEVEL_SHADOW = [
  "none",
  "0 0 4px rgba(251,191,36,0.15)",
  "0 0 6px rgba(251,191,36,0.30)",
  "0 0 8px rgba(251,191,36,0.50)",
  "0 0 12px rgba(251,191,36,0.70)",
];

const getLevel = (w: number, d: number): number => {
  const h = (w * 13 + d * 7 + w * d * 3 + 5) % 16;
  if (h < 4) return 0;
  if (h < 7) return 1;
  if (h < 11) return 2;
  if (h < 14) return 3;
  return 4;
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STATS = [
  { val: "2+",   label: "Yrs Exp" },
  { val: "4+",   label: "Projects" },
  { val: "3+",   label: "Certs" },
  { val: "847",  label: "Commits" },
];

export const HeroActivityPanel = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { damping: 35, stiffness: 80, mass: 0.5 };
  const px = useSpring(mouseX, spring);
  const py = useSpring(mouseY, spring);
  const rotX = useTransform(py, [-0.5, 0.5], [4, -4]);
  const rotY = useTransform(px, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    const r = panelRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 1, ease: EASE }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="w-full max-w-[500px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX: rotX,
          rotateY: rotY,
          boxShadow: "0 0 0 1px rgba(251,191,36,0.08), 0 40px 90px rgba(0,0,0,0.75)",
        }}
        className="glassmorphism rounded-[2rem] overflow-hidden relative"
      >
        {/* Ambient glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }}
        />

        {/* ── Window chrome ── */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(39,201,63,0.7)" }} />
          </div>
          <span className="text-[9px] font-mono text-slate-600 tracking-wider">adarsh.dev — activity</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[7px] font-mono text-green-400 uppercase tracking-widest">Live</span>
          </div>
        </div>

        <div className="relative z-10 p-5">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-start justify-between mb-4"
          >
            <div>
              <p className="text-[7px] font-black font-mono uppercase tracking-[0.4em] text-primary/60 mb-0.5">
                GitHub Contributions
              </p>
              <h3 className="text-white font-black text-sm tracking-tight">
                847 contributions this year
              </h3>
            </div>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[7px] font-black uppercase tracking-widest border"
              style={{ background: "rgba(251,191,36,0.07)", borderColor: "rgba(251,191,36,0.2)", color: "#fbbf24" }}
            >
              🔥 12 day streak
            </div>
          </motion.div>

          {/* ── Month labels ── */}
          <div className="relative h-4 mb-1.5 ml-7">
            {MONTHS.map(({ label, col }) => (
              <span
                key={label}
                className="absolute text-[7px] font-black uppercase tracking-wider text-slate-600"
                style={{ left: `${(col / WEEKS) * 100}%` }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* ── Contribution grid ── */}
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col justify-between pr-1.5 py-0.5">
              {DAY_LABELS.map((d, i) => (
                <div
                  key={i}
                  className="text-[6.5px] font-black uppercase tracking-wider text-slate-700 leading-none h-3 flex items-center"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Cells */}
            <div className="flex-1 flex gap-[3px]">
              {Array.from({ length: WEEKS }, (_, w) => (
                <motion.div
                  key={w}
                  className="flex flex-col gap-[3px] flex-1"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.45 + w * 0.022, duration: 0.35, ease: EASE }}
                  style={{ transformOrigin: "bottom" }}
                >
                  {Array.from({ length: 7 }, (_, d) => {
                    const level = getLevel(w, d);
                    return (
                      <div
                        key={d}
                        className="h-3 rounded-[2px] transition-all duration-200 hover:scale-110"
                        style={{
                          background: LEVEL_BG[level],
                          boxShadow: LEVEL_SHADOW[level],
                        }}
                      />
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Legend ── */}
          <div className="flex items-center gap-1.5 mt-3 mb-4">
            <span className="text-[6px] font-black uppercase tracking-wider text-slate-700">Less</span>
            {LEVEL_BG.map((bg, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-[2px]"
                style={{ background: bg }}
              />
            ))}
            <span className="text-[6px] font-black uppercase tracking-wider text-slate-700">More</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.05] mb-4" />

          {/* ── Stats ── */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.5, ease: EASE }}
                className="text-center"
              >
                <div
                  className="text-[1.35rem] font-black text-white leading-none"
                  style={{ textShadow: "0 0 18px rgba(251,191,36,0.45)" }}
                >
                  {s.val}
                </div>
                <div className="text-[6px] font-black uppercase tracking-widest text-slate-600 mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Tech tags ── */}
          <div className="flex flex-wrap gap-1.5">
            {TECH.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.05, duration: 0.3, ease: EASE }}
                className="px-2.5 py-1 rounded-full text-[7px] font-black uppercase tracking-wider"
                style={
                  t.accent === "primary"
                    ? { background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.8)" }
                    : { background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.2)", color: "rgba(96,165,250,0.8)" }
                }
              >
                {t.name}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
