"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Stock {
  sym: string;
  name: string;
  price: number;
  change: number;
  history: number[];
}

const SEED: Stock[] = [
  { sym: "NEXT",  name: "Next.js",    price: 95.4, change:  2.1, history: [88,90,87,92,91,93,94,95] },
  { sym: "REAC",  name: "React.js",   price: 90.8, change:  1.4, history: [85,86,88,87,89,88,90,91] },
  { sym: "TAIL",  name: "Tailwind",   price: 88.2, change:  1.8, history: [82,83,85,84,86,87,87,88] },
  { sym: "SUPA",  name: "Supabase",   price: 82.1, change:  0.9, history: [76,78,77,79,80,79,81,82] },
  { sym: "PRIS",  name: "Prisma",     price: 78.5, change:  1.2, history: [72,73,74,73,75,76,77,79] },
  { sym: "NODE",  name: "Node.js",    price: 75.3, change: -0.3, history: [77,76,78,75,74,76,75,75] },
  { sym: "FIRE",  name: "Firebase",   price: 71.2, change:  0.7, history: [66,67,68,68,69,70,71,71] },
];

/* ── Sparkline SVG ── */
const Sparkline = ({ data, sym, up }: { data: number[]; sym: string; up: boolean }) => {
  const W = 56, H = 22;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * W,
    H - ((v - min) / span) * (H - 2) - 1,
  ]);
  const line  = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const fill  = `${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")} ${W},${H} 0,${H}`;
  const color = up ? "#4ade80" : "#f87171";
  const gId   = `sg-${sym}`;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="overflow-visible">
      <defs>
        <linearGradient id={gId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0"    />
        </linearGradient>
      </defs>
      <polygon points={fill}  fill={`url(#${gId})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.5"
        strokeLinejoin="round" strokeLinecap="round" />
      {/* Last point dot */}
      <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="2"
        fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }} />
    </svg>
  );
};

/* ── Live clock ── */
const Clock = () => {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-[9px] text-slate-600">{t}</span>;
};

export const HeroStockPanel = () => {
  const [stocks, setStocks] = useState<Stock[]>(SEED);
  const [flash,  setFlash]  = useState<Record<string, "up" | "dn" | null>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  /* 3D tilt */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 35, stiffness: 80, mass: 0.5 };
  const px   = useSpring(mouseX, spring);
  const py   = useSpring(mouseY, spring);
  const rotX = useTransform(py, [-0.5, 0.5], [4, -4]);
  const rotY = useTransform(px, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    const r = panelRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  /* Live price updates */
  useEffect(() => {
    const id = setInterval(() => {
      const newFlash: Record<string, "up" | "dn"> = {};
      setStocks(prev => prev.map(s => {
        const delta = (Math.random() - 0.46) * 0.5;
        const price = parseFloat((Math.max(55, Math.min(99, s.price + delta))).toFixed(2));
        const change = parseFloat((s.change + delta * 0.12).toFixed(2));
        newFlash[s.sym] = delta >= 0 ? "up" : "dn";
        return { ...s, price, change, history: [...s.history.slice(1), price] };
      }));
      setFlash(newFlash);
      setTimeout(() => setFlash({}), 400);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  /* Ticker tape items */
  const tickerItems = [...stocks, ...stocks];

  /* Portfolio YTD */
  const ytd = stocks.reduce((acc, s) => acc + s.change, 0) / stocks.length;
  const ytdUp = ytd >= 0;

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 1, ease: EASE }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="w-full max-w-[490px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="rounded-[1.75rem] overflow-hidden"
        initial={false}
        animate={{
          boxShadow: "0 0 0 1px rgba(251,191,36,0.1), 0 40px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* ── Header bar ── */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ background: "#0d0d10", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white">
              Skill Market
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[8px] font-black uppercase tracking-widest text-primary/60">● Live</span>
            <Clock />
          </div>
        </div>

        {/* ── Ticker tape ── */}
        <div
          className="relative overflow-hidden py-1.5"
          style={{ background: "#0a0a0d", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0a0a0d, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0a0a0d, transparent)" }} />
          <div className="flex gap-6 whitespace-nowrap animate-marquee">
            {tickerItems.map((s, i) => {
              const up = s.change >= 0;
              return (
                <span key={i} className="flex items-center gap-1.5 text-[9px] font-mono font-black flex-shrink-0">
                  <span className="text-slate-400">{s.sym}</span>
                  <span style={{ color: up ? "#4ade80" : "#f87171" }}>
                    {up ? "▲" : "▼"} {Math.abs(s.change).toFixed(2)}%
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* ── Index banner ── */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ background: "#0f0f13", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div>
            <span className="text-[7px] font-black uppercase tracking-[0.35em] text-slate-600">Full-Stack Index</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-white font-black text-sm">FS-DEV</span>
              <span className="text-[9px] font-mono text-slate-500">847.2</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
            style={{ background: ytdUp ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
                     border: `1px solid ${ytdUp ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}` }}>
            {ytdUp
              ? <TrendingUp size={11} className="text-green-400" />
              : <TrendingDown size={11} className="text-red-400" />}
            <span className="text-[11px] font-black" style={{ color: ytdUp ? "#4ade80" : "#f87171" }}>
              {ytdUp ? "+" : ""}{ytd.toFixed(2)}% YTD
            </span>
          </div>
        </div>

        {/* ── Stock table ── */}
        <div style={{ background: "#0d0d11" }}>
          {/* Column headers */}
          <div className="grid px-5 py-2"
            style={{ gridTemplateColumns: "44px 1fr 60px 52px 64px",
                     borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {["SYM", "NAME", "CHART", "PRICE", "CHG"].map(h => (
              <span key={h} className="text-[7px] font-black uppercase tracking-widest text-slate-600">{h}</span>
            ))}
          </div>

          {/* Rows */}
          {stocks.map((s) => {
            const up      = s.change >= 0;
            const color   = up ? "#4ade80" : "#f87171";
            const flashDir = flash[s.sym];
            return (
              <motion.div
                key={s.sym}
                className="grid items-center px-5 py-2.5"
                style={{ gridTemplateColumns: "44px 1fr 60px 52px 64px",
                         borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                animate={{
                  backgroundColor: flashDir === "up"
                    ? ["rgba(74,222,128,0)", "rgba(74,222,128,0.06)", "rgba(74,222,128,0)"]
                    : flashDir === "dn"
                    ? ["rgba(248,113,113,0)", "rgba(248,113,113,0.06)", "rgba(248,113,113,0)"]
                    : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Symbol */}
                <span className="text-[10px] font-black font-mono text-primary/80">{s.sym}</span>

                {/* Name */}
                <span className="text-[10px] text-slate-400 font-medium">{s.name}</span>

                {/* Sparkline */}
                <div><Sparkline data={s.history} sym={s.sym} up={up} /></div>

                {/* Price */}
                <motion.span
                  className="text-[11px] font-black font-mono text-white tabular-nums"
                  animate={{ color: flashDir ? color : "#e2e8f0" }}
                  transition={{ duration: 0.3 }}
                >
                  {s.price.toFixed(1)}
                </motion.span>

                {/* Change */}
                <div className="flex items-center gap-1">
                  <span className="text-[8px]" style={{ color }}>{up ? "▲" : "▼"}</span>
                  <span className="text-[10px] font-black font-mono" style={{ color }}>
                    {up ? "+" : ""}{s.change.toFixed(2)}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div
          className="px-5 py-3.5 flex items-center justify-between"
          style={{ background: "#0a0a0d", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ boxShadow: ["0 0 4px rgba(74,222,128,0.5)", "0 0 10px rgba(74,222,128,1)", "0 0 4px rgba(74,222,128,0.5)"] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-green-400">Market Open</span>
            <span className="text-slate-700 text-[8px]">·</span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500">Open to Work</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[7px] text-slate-700 font-mono">2+ yrs</span>
            <span className="text-slate-700 text-[8px]">·</span>
            <span className="text-[7px] text-slate-700 font-mono">Amritsar, IN</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
