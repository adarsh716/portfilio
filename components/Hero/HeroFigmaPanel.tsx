"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Layer tree ── */
const LAYERS = [
  { id: "root",   label: "AdarshLakhanpal", sym: "◆", sc: "#a78bfa", depth: 0, group: "root"       },
  { id: "hdr",    label: "Header",          sym: "❑", sc: "#64748b", depth: 1, group: "root"       },
  { id: "nm",     label: "Name",            sym: "T", sc: "#64748b", depth: 2, group: "root"       },
  { id: "rl",     label: "Role",            sym: "T", sc: "#64748b", depth: 2, group: "root"       },
  { id: "bg",     label: "Badge",           sym: "○", sc: "#4ade80", depth: 2, group: "root"       },
  { id: "exp",    label: "Experience",      sym: "▤", sc: "#64748b", depth: 1, group: "experience" },
  { id: "co",     label: "Company",         sym: "T", sc: "#64748b", depth: 2, group: "experience" },
  { id: "dur",    label: "Duration",        sym: "T", sc: "#64748b", depth: 2, group: "experience" },
  { id: "stk",    label: "TechStack",       sym: "❑", sc: "#64748b", depth: 1, group: "techstack"  },
  { id: "fe",     label: "Frontend",        sym: "○", sc: "#60a5fa", depth: 2, group: "techstack"  },
  { id: "db",     label: "Backend/DB",      sym: "○", sc: "#34d399", depth: 2, group: "techstack"  },
  { id: "cnt",    label: "Contact",         sym: "T", sc: "#64748b", depth: 1, group: "contact"    },
] as const;

type GroupId = "root" | "experience" | "techstack" | "contact";

/* ── Inspect data ── */
const INSPECT: Record<GroupId, { sec: string; rows: { k: string; v: string; dot?: string }[] }[]> = {
  root: [
    { sec: "PROPERTIES", rows: [
      { k: "name",    v: "Adarsh Lakhanpal" },
      { k: "version", v: "2.0.0" },
      { k: "role",    v: "Full Stack Developer" },
      { k: "status",  v: "open-to-work", dot: "#4ade80" },
    ]},
    { sec: "FILL", rows: [
      { k: "primary", v: "#fbbf24", dot: "#fbbf24" },
      { k: "surface", v: "#050507", dot: "#050507" },
      { k: "accent",  v: "#60a5fa", dot: "#60a5fa" },
    ]},
    { sec: "TYPOGRAPHY", rows: [
      { k: "font",   v: "Inter" },
      { k: "weight", v: "900 / Black" },
      { k: "scale",  v: "clamp(2.4rem, 5.5vw, 5rem)" },
    ]},
  ],
  experience: [
    { sec: "CURRENT ROLE", rows: [
      { k: "company",  v: "Scriptbox" },
      { k: "type",     v: "Full-time · Remote" },
      { k: "position", v: "Full Stack Developer" },
      { k: "since",    v: "Jun 2025", dot: "#4ade80" },
    ]},
    { sec: "PREVIOUS", rows: [
      { k: "position", v: "FS Dev Intern" },
      { k: "period",   v: "Jun 2024 → Jun 2025" },
      { k: "projects", v: "ImmiFlow · Patty Kulcha" },
    ]},
    { sec: "METRICS", rows: [
      { k: "experience", v: "2+ years" },
      { k: "apps",       v: "3+ shipped" },
      { k: "commits",    v: "847+" },
    ]},
  ],
  techstack: [
    { sec: "FRONTEND", rows: [
      { k: "Next.js",     v: "^14.0", dot: "#e2e8f0" },
      { k: "React.js",    v: "^18.0", dot: "#61dafb" },
      { k: "TypeScript",  v: "^5.0",  dot: "#3178c6" },
      { k: "Tailwind",    v: "^3.0",  dot: "#38bdf8" },
      { k: "Material UI", v: "^5.0",  dot: "#0081cb" },
    ]},
    { sec: "BACKEND & DB", rows: [
      { k: "Node.js",  v: "^20.0",  dot: "#68a063" },
      { k: "Supabase", v: "latest", dot: "#3ecf8e" },
      { k: "Prisma",   v: "^5.0",   dot: "#5a67d8" },
      { k: "Firebase", v: "^10.0",  dot: "#ffa611" },
      { k: "MongoDB",  v: "^7.0",   dot: "#4db33d" },
    ]},
  ],
  contact: [
    { sec: "REACH ME", rows: [
      { k: "email",    v: "alakhanpal2003@gmail.com" },
      { k: "phone",    v: "+91 8437516789" },
      { k: "city",     v: "Amritsar, India" },
      { k: "linkedin", v: "adarsh-lakhanpal-649aba23b" },
    ]},
    { sec: "AVAILABILITY", rows: [
      { k: "status",   v: "open-to-work",        dot: "#4ade80" },
      { k: "type",     v: "Full-time / Freelance" },
      { k: "response", v: "< 24 hours" },
      { k: "notice",   v: "Immediate join" },
    ]},
  ],
};

export const HeroFigmaPanel = () => {
  const [selected, setSelected] = useState<string>("root");
  const panelRef = useRef<HTMLDivElement>(null);

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

  const activeGroup: GroupId =
    (LAYERS.find((l) => l.id === selected)?.group as GroupId) ?? "root";
  const inspectSections = INSPECT[activeGroup];

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
        style={{ rotateX: rotX, rotateY: rotY }}
        className="rounded-[1.5rem] overflow-hidden"
        // outer shadow + border like a Figma window
        initial={false}
        animate={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.8)",
        }}
      >

        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between px-4 h-10 flex-shrink-0"
          style={{ background: "#1e1e22", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Window dots */}
          <div className="flex gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.85 }} />
            ))}
          </div>

          {/* File name */}
          <span className="text-[11px] font-medium text-slate-400 tracking-wide">
            AdarshLakhanpal.fig
          </span>

          {/* Share / Present */}
          <div className="flex items-center gap-2">
            <button type="button"
              className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              Share
            </button>
            <div
              className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest"
              style={{ background: "#fbbf24", color: "#0a0a0a" }}
            >
              ▶ Present
            </div>
          </div>
        </div>

        {/* ── Main area: layers | inspect ── */}
        <div className="flex" style={{ background: "#18181c", height: "420px" }}>

          {/* ──────── LEFT: Layers panel ──────── */}
          <div
            className="flex-shrink-0 flex flex-col"
            style={{ width: "155px", borderRight: "1px solid rgba(255,255,255,0.05)" }}
          >
            {/* Panel tabs */}
            <div
              className="flex flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#1c1c20" }}
            >
              {["Layers", "Assets"].map((tab, i) => (
                <div
                  key={tab}
                  className="flex-1 text-center py-2 text-[9px] font-black uppercase tracking-widest"
                  style={{
                    color: i === 0 ? "#e2e8f0" : "#475569",
                    borderBottom: i === 0 ? "1px solid #fbbf24" : "none",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Search bar (decorative) */}
            <div className="px-2 py-2 flex-shrink-0">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-slate-600 text-[9px]">⌕</span>
                <span className="text-[9px] text-slate-600">Search layers</span>
              </div>
            </div>

            {/* Layer list */}
            <div className="flex-1 overflow-y-auto px-1 pb-2">
              {LAYERS.map((layer) => {
                const isSelected = selected === layer.id;
                return (
                  <motion.button
                    key={layer.id}
                    type="button"
                    onClick={() => setSelected(layer.id)}
                    className="w-full flex items-center gap-1.5 px-1.5 py-1 rounded text-left group"
                    style={{
                      paddingLeft: `${6 + layer.depth * 12}px`,
                      background: isSelected ? "rgba(251,191,36,0.10)" : "transparent",
                    }}
                    whileHover={{ background: isSelected ? "rgba(251,191,36,0.10)" : "rgba(255,255,255,0.04)" }}
                    transition={{ duration: 0.12 }}
                  >
                    {/* Expand arrow placeholder */}
                    <span className="text-[8px] text-slate-700 w-2 flex-shrink-0">
                      {layer.depth < 2 ? "▾" : ""}
                    </span>

                    {/* Icon symbol */}
                    <span
                      className="text-[10px] font-bold flex-shrink-0 leading-none"
                      style={{ color: isSelected ? "#fbbf24" : layer.sc }}
                    >
                      {layer.sym}
                    </span>

                    {/* Label */}
                    <span
                      className="text-[10px] font-medium truncate"
                      style={{ color: isSelected ? "#fbbf24" : "#94a3b8" }}
                    >
                      {layer.label}
                    </span>

                    {/* Selected indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="layer-sel"
                        className="absolute left-0 w-0.5 h-5 rounded-r-full"
                        style={{ background: "#fbbf24" }}
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ──────── RIGHT: Inspect panel ──────── */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Panel tabs */}
            <div
              className="flex flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#1c1c20" }}
            >
              {["Design", "Prototype", "Inspect"].map((tab, i) => (
                <div
                  key={tab}
                  className="flex-1 text-center py-2 text-[9px] font-black uppercase tracking-widest"
                  style={{
                    color: i === 2 ? "#e2e8f0" : "#475569",
                    borderBottom: i === 2 ? "1px solid #fbbf24" : "none",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Inspect content */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  {inspectSections.map((section, si) => (
                    <div
                      key={si}
                      className="px-4 py-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      {/* Section label */}
                      <p className="text-[8px] font-black uppercase tracking-[0.35em] text-slate-600 mb-2">
                        {section.sec}
                      </p>

                      {/* Rows */}
                      <div className="space-y-1.5">
                        {section.rows.map((row, ri) => (
                          <div key={ri} className="flex items-center justify-between gap-2">
                            <span className="text-[10px] text-slate-500 flex-shrink-0">{row.k}</span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              {row.dot && (
                                <div
                                  className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                                  style={{ background: row.dot, boxShadow: `0 0 4px ${row.dot}60` }}
                                />
                              )}
                              <span
                                className="text-[10px] font-mono truncate"
                                style={{ color: row.dot ? "#e2e8f0" : "#94a3b8" }}
                              >
                                {row.v}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Status bar ── */}
        <div
          className="flex items-center justify-between px-4 h-7 flex-shrink-0"
          style={{ background: "#1e1e22", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-[8px] font-mono text-slate-600">
            ◆ {LAYERS.find((l) => l.id === selected)?.label}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[8px] font-mono text-slate-600">100%</span>
            <motion.span
              className="text-[8px] font-mono"
              style={{ color: "#4ade80" }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ● Autosaved
            </motion.span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
