"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Channel content ── */
const Ch01 = () => (
  <div className="font-mono leading-relaxed">
    <p className="text-primary text-[10px] tracking-[0.3em] mb-4">// personal.info</p>
    {(
      [
        ["name   ", "Adarsh Lakhanpal"],
        ["role   ", "Full Stack Developer"],
        ["company", "Scriptbox  (Remote)"],
        ["city   ", "Amritsar, India"],
        ["since  ", "Jun 2024"],
      ] as const
    ).map(([k, v]) => (
      <p key={k} className="text-sm mb-1.5">
        <span className="text-slate-600">{k}: </span>
        <span className="text-green-300">{v}</span>
      </p>
    ))}
    <div className="flex gap-6 mt-4 text-xs text-green-400/60">
      <span>2+ <span className="text-slate-600">yrs</span></span>
      <span>4+ <span className="text-slate-600">projects</span></span>
      <span>3+ <span className="text-slate-600">certs</span></span>
    </div>
    <div className="flex items-center gap-2 mt-4 pt-4" style={{ borderTop: "1px solid rgba(74,222,128,0.08)" }}>
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-green-400 text-[10px] font-black tracking-widest">OPEN TO WORK</span>
    </div>
  </div>
);

const Ch02 = () => (
  <div className="font-mono">
    <p className="text-primary text-[10px] tracking-[0.3em] mb-4">// tech.stack</p>
    {[
      { cat: "FRONTEND", items: ["Next.js", "React.js", "TypeScript", "Tailwind"] },
      { cat: "BACKEND",  items: ["Node.js", "Express.js"] },
      { cat: "DATABASE", items: ["Supabase", "Firebase", "Prisma", "MongoDB"] },
      { cat: "TOOLS",    items: ["Git", "VS Code", "Vercel"] },
    ].map(({ cat, items }) => (
      <div key={cat} className="mb-3">
        <p className="text-slate-600 text-[9px] tracking-[0.35em] mb-1.5">── {cat} ──────</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {items.map((item) => (
            <span key={item} className="text-green-300 text-xs">{item}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Ch03 = () => (
  <div className="font-mono">
    <p className="text-primary text-[10px] tracking-[0.3em] mb-4">// work.log</p>
    <div className="mb-4">
      <p className="text-white font-black text-sm">Full Stack Developer</p>
      <p className="text-slate-500 text-xs mt-0.5">Scriptbox · Remote</p>
      <p className="text-primary/70 text-xs mt-0.5">Jun 2025 → Present</p>
      <p className="text-green-400/60 text-[11px] mt-2">↳ 3+ production SaaS apps shipped</p>
    </div>
    <div className="h-px mb-4" style={{ background: "rgba(74,222,128,0.08)" }} />
    <div>
      <p className="text-white font-black text-sm">Full Stack Dev Intern</p>
      <p className="text-slate-500 text-xs mt-0.5">Scriptbox · Remote</p>
      <p className="text-primary/70 text-xs mt-0.5">Jun 2024 → Jun 2025</p>
      <p className="text-green-400/60 text-[11px] mt-2">↳ ImmiFlow · Patty Kulcha · 1yr</p>
    </div>
  </div>
);

const Ch04 = () => (
  <div className="font-mono">
    <p className="text-primary text-[10px] tracking-[0.3em] mb-4">// reach.me</p>
    {[
      { label: "EMAIL",    val: "alakhanpal2003@gmail.com" },
      { label: "PHONE",    val: "+91 8437516789" },
      { label: "LINKEDIN", val: "adarsh-lakhanpal-649aba23b" },
      { label: "CITY",     val: "Amritsar, Punjab, India" },
    ].map(({ label, val }) => (
      <div key={label} className="mb-3.5">
        <p className="text-slate-600 text-[9px] tracking-[0.35em] mb-0.5">── {label}</p>
        <p className="text-green-300 text-xs break-all">{val}</p>
      </div>
    ))}
  </div>
);

const CHANNELS = [
  { id: "01", name: "WHO AM I",   Content: Ch01 },
  { id: "02", name: "MY STACK",   Content: Ch02 },
  { id: "03", name: "EXPERIENCE", Content: Ch03 },
  { id: "04", name: "CONTACT",    Content: Ch04 },
];

/* ── Component ── */
export const HeroCRTPanel = () => {
  const [ch, setCh]             = useState(0);
  const [isStatic, setIsStatic] = useState(false);
  const [glitchX, setGlitchX]   = useState(0);
  const panelRef                = useRef<HTMLDivElement>(null);

  /* 3D tilt */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 35, stiffness: 80, mass: 0.5 };
  const px   = useSpring(mouseX, spring);
  const py   = useSpring(mouseY, spring);
  const rotX = useTransform(py, [-0.5, 0.5], [3, -3]);
  const rotY = useTransform(px, [-0.5, 0.5], [-3, 3]);

  const handleMouse = (e: React.MouseEvent) => {
    const r = panelRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  /* Channel switch */
  const switchTo = (next: number) => {
    if (isStatic) return;
    setIsStatic(true);
    setTimeout(() => { setCh(next); setIsStatic(false); }, 340);
  };
  const prevCh = () => switchTo((ch - 1 + CHANNELS.length) % CHANNELS.length);
  const nextCh = () => switchTo((ch + 1) % CHANNELS.length);

  /* Auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      setIsStatic(true);
      setTimeout(() => {
        setCh((c) => (c + 1) % CHANNELS.length);
        setIsStatic(false);
      }, 340);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  /* Random glitch */
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const scheduleGlitch = () => {
      t = setTimeout(() => {
        const offset = (Math.random() - 0.5) * 10;
        setGlitchX(offset);
        setTimeout(() => {
          setGlitchX((Math.random() - 0.5) * 6);
          setTimeout(() => setGlitchX(0), 80);
        }, 70);
        scheduleGlitch();
      }, 3000 + Math.random() * 5000);
    };
    scheduleGlitch();
    return () => clearTimeout(t);
  }, []);

  const { id, name, Content } = CHANNELS[ch];
  const isGlitching = glitchX !== 0;

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 1, ease: EASE }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="w-full max-w-[480px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      <motion.div style={{ rotateX: rotX, rotateY: rotY }}>
        {/* ── TV body ── */}
        <div
          className="rounded-[2.5rem] p-5 relative"
          style={{
            background: "linear-gradient(145deg, rgba(28,28,32,0.98), rgba(12,12,15,0.99))",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Top bezel */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[8px] font-black tracking-[0.4em] text-slate-700 uppercase">
              ADARSH.DEV — v2.0
            </span>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: "#4ade80" }}
                animate={{
                  boxShadow: [
                    "0 0 3px rgba(74,222,128,0.4)",
                    "0 0 10px rgba(74,222,128,1)",
                    "0 0 3px rgba(74,222,128,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[7px] font-mono text-slate-600 uppercase tracking-widest">
                ON AIR
              </span>
            </div>
          </div>

          {/* ── CRT Screen ── */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "1rem",
              background: "#030a05",
              boxShadow:
                "0 0 0 3px rgba(0,0,0,0.9), 0 0 35px rgba(74,222,128,0.10), inset 0 0 50px rgba(0,15,8,0.95)",
              aspectRatio: "4/3",
            }}
          >
            {/* Scanlines */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.22) 3px, rgba(0,0,0,0.22) 4px)",
              }}
            />

            {/* Vignette */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)",
              }}
            />

            {/* Top reflection */}
            <div
              className="absolute top-0 left-0 right-0 h-1/4 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.025), transparent)",
              }}
            />

            {/* Static flash on switch */}
            <AnimatePresence>
              {isStatic && (
                <motion.div
                  key="static"
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: [0.85, 0.3, 0.7, 0.1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.34 }}
                  className="absolute inset-0 z-30 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, rgba(180,255,200,0.08) 0px, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                    mixBlendMode: "screen",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Content area */}
            <div className="absolute inset-0 p-5 z-10 overflow-hidden">
              {/* Channel badge + cursor */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="flex items-center gap-2 px-2.5 py-1 rounded-md"
                  style={{
                    background: "rgba(74,222,128,0.07)",
                    border: "1px solid rgba(74,222,128,0.12)",
                  }}
                >
                  <span className="text-[8px] font-mono text-green-500 tracking-widest">
                    CH {id}
                  </span>
                  <span className="text-green-600/50 text-[8px]">·</span>
                  <span className="text-[8px] font-mono text-green-400 tracking-wider">
                    {name}
                  </span>
                </div>
                <motion.span
                  className="text-green-500/50 font-mono text-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >
                  ▮
                </motion.span>
              </div>

              {/* Channel content with glitch transform */}
              <AnimatePresence mode="wait">
                {!isStatic && (
                  <motion.div
                    key={ch}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    style={{ transform: isGlitching ? `translateX(${glitchX}px)` : "none" }}
                  >
                    {/* RGB fringe during glitch */}
                    {isGlitching && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          opacity: 0.35,
                          transform: `translateX(${-glitchX * 0.6}px)`,
                          filter: "hue-rotate(120deg) saturate(3)",
                          mixBlendMode: "screen",
                        }}
                      >
                        <Content />
                      </div>
                    )}
                    <Content />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-between mt-4 px-1">
            {/* Channel indicator dots */}
            <div className="flex items-center gap-2">
              {CHANNELS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => switchTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === ch ? "20px" : "8px",
                    height: "8px",
                    background: i === ch ? "#4ade80" : "rgba(255,255,255,0.08)",
                    boxShadow: i === ch ? "0 0 8px rgba(74,222,128,0.7)" : "none",
                  }}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevCh}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="text-[7px] font-mono text-slate-600 tracking-widest uppercase px-1">
                CH
              </span>
              <button
                type="button"
                onClick={nextCh}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
