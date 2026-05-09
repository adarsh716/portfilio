"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin, Briefcase, Zap, Code2, GraduationCap, Coffee } from "lucide-react";
import { useRef } from "react";

const TECH_ROW1 = ["Next.js", "React.js", "JavaScript", "Tailwind", "Material UI", "HTML/CSS"];
const TECH_ROW2 = ["Supabase", "Firebase", "Prisma", "MongoDB", "MySQL", "Node.js"];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: 0.35 + i * 0.09, duration: 0.75, ease: EASE },
  }),
};

export const HeroBentoPanel = () => {
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
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="grid grid-cols-2 gap-3"
      >
        {/* ── Card 1: Profile (full width) ── */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="col-span-2 glassmorphism rounded-[1.75rem] p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500"
          style={{ boxShadow: "0 0 0 1px rgba(251,191,36,0.1), 0 24px 60px rgba(0,0,0,0.6)" }}
        >
          <div className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none holographic-overlay" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-[70px] rounded-full transition-all duration-700 group-hover:bg-primary/18" />

          <div className="relative z-10 flex items-center gap-5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-[68px] h-[68px] rounded-2xl overflow-hidden group-hover:scale-[1.04] transition-transform duration-500"
                style={{ boxShadow: "0 0 0 2px rgba(251,191,36,0.35), 0 0 24px rgba(251,191,36,0.2)" }}
              >
                <img src="/profile.jpg" alt="Adarsh Lakhanpal" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#050507] shadow-[0_0_10px_rgba(74,222,128,1)]" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[8px] font-black font-mono uppercase tracking-[0.4em] text-primary/70 mb-0.5">
                Full Stack Developer
              </p>
              <h3 className="text-[1.15rem] font-black text-white tracking-tight leading-tight mb-1.5 group-hover:text-primary transition-colors duration-300">
                Adarsh Lakhanpal
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1"><Briefcase size={10} className="text-primary/60" /> Scriptbox</span>
                <span className="text-white/15">·</span>
                <span className="flex items-center gap-1"><MapPin size={10} className="text-primary/60" /> Amritsar, IN</span>
              </div>
            </div>

            {/* Open to work badge */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[8px] font-black uppercase tracking-widest"
                style={{ background: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.25)", color: "#4ade80" }}>
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Open
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Card 2: Years ── */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glassmorphism rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-400"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.08) 0%, transparent 70%)" }} />
          <Zap size={15} className="text-primary mb-3 relative z-10" />
          <div className="text-4xl font-black text-white relative z-10" style={{ textShadow: "0 0 20px rgba(251,191,36,0.4)" }}>2+</div>
          <div className="text-[8px] font-black uppercase tracking-widest text-slate-600 mt-1 relative z-10">Yrs Exp.</div>
        </motion.div>

        {/* ── Card 3: Projects ── */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glassmorphism rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-400"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle at 70% 30%, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />
          <Code2 size={15} className="text-blue-400 mb-3 relative z-10" />
          <div className="text-4xl font-black text-white relative z-10" style={{ textShadow: "0 0 20px rgba(96,165,250,0.4)" }}>4+</div>
          <div className="text-[8px] font-black uppercase tracking-widest text-slate-600 mt-1 relative z-10">Projects</div>
        </motion.div>

        {/* ── Card 4: Tech Stack (full width, dual marquee) ── */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="col-span-2 glassmorphism rounded-2xl p-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-400"
        >
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white/[0.03] to-transparent z-10 pointer-events-none rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white/[0.03] to-transparent z-10 pointer-events-none rounded-r-2xl" />

          <p className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-700 mb-3 relative z-20">Tech Stack</p>

          {/* Row 1 → left */}
          <div className="relative overflow-hidden mb-2">
            <div className="flex gap-2 animate-marquee whitespace-nowrap">
              {[...TECH_ROW1, ...TECH_ROW1].map((t, i) => (
                <span key={i} className="flex-shrink-0 px-3 py-1 rounded-full bg-primary/[0.07] border border-primary/[0.15] text-[8px] font-black uppercase tracking-wider text-primary/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 ← right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-2 whitespace-nowrap" style={{ animation: "marquee 28s linear infinite reverse" }}>
              {[...TECH_ROW2, ...TECH_ROW2].map((t, i) => (
                <span key={i} className="flex-shrink-0 px-3 py-1 rounded-full bg-blue-500/[0.07] border border-blue-500/[0.15] text-[8px] font-black uppercase tracking-wider text-blue-400/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Card 5: Current work ── */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glassmorphism rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-400"
          style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.04) 0%, transparent 80%)" }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(251,191,36,0.07) 0%, transparent 70%)" }} />
          <Coffee size={14} className="text-primary mb-3 relative z-10" />
          <p className="text-[8px] font-black uppercase tracking-widest text-slate-600 mb-1 relative z-10">Currently @</p>
          <p className="text-white font-black text-sm relative z-10 group-hover:text-primary transition-colors">Scriptbox</p>
          <p className="text-slate-600 text-[10px] mt-0.5 relative z-10">Since Jun 2024</p>
        </motion.div>

        {/* ── Card 6: Certs ── */}
        <motion.div
          custom={5}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glassmorphism rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-400"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)" }} />
          <GraduationCap size={14} className="text-purple-400 mb-3 relative z-10" />
          <div className="text-4xl font-black text-white relative z-10" style={{ textShadow: "0 0 20px rgba(167,139,250,0.4)" }}>3+</div>
          <div className="text-[8px] font-black uppercase tracking-widest text-slate-600 mt-1 relative z-10">Certifications</div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};
