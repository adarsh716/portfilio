"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Scriptbox",
    role: "Full Stack Developer",
    period: "Jun 2025 — Present",
    type: "Full-time · Remote",
    desc: "Developing and maintaining full-stack applications built with Next.js, React.js, and Supabase. Building reusable UI components with Material UI and integrating backend APIs using Prisma.",
    tech: ["Next.js", "React.js", "Supabase", "Prisma", "Material UI"],
    metric: "3+ apps shipped",
    color: "#fbbf24",
  },
  {
    company: "Scriptbox",
    role: "Full Stack Developer Intern",
    period: "Jun 2024 — Jun 2025",
    type: "Internship · Remote",
    desc: "Developed and deployed 3+ full-stack applications using Next.js, React.js, and Firebase for real-world business use. Created reusable UI components using Material UI and built backend APIs integrated with Prisma and Supabase.",
    tech: ["Next.js", "React.js", "Firebase", "Prisma", "Material UI"],
    metric: "1 year tenure",
    color: "#60a5fa",
  },
];

export const Experience = () => {
  return (
    <div className="relative space-y-8">
      {/* Vertical timeline line */}
      <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent hidden lg:block" />

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:pl-10"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-8 hidden lg:flex items-center justify-center -translate-x-1/2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.2, type: "spring" }}
              className="w-3 h-3 rounded-full border-2 border-[#030303]"
              style={{
                backgroundColor: exp.color,
                boxShadow: `0 0 12px ${exp.color}80, 0 0 24px ${exp.color}40`,
              }}
            />
          </div>

          {/* Card */}
          <div className="glassmorphism rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ backgroundColor: `${exp.color}15` }}
            />

            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: exp.color, boxShadow: `0 0 6px ${exp.color}` }}
                  />
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-600">
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide font-mono group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="text-slate-500 font-semibold flex items-center gap-2 mt-2 text-sm">
                  <Briefcase size={14} style={{ color: exp.color }} />
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="px-4 py-2 rounded-full glass-card text-[9px] font-black font-mono flex items-center gap-2 text-slate-400 uppercase tracking-widest">
                  <Calendar size={12} style={{ color: exp.color }} />
                  {exp.period}
                </div>
                <div
                  className="px-4 py-2 rounded-full text-[9px] font-black font-mono flex items-center gap-2 uppercase tracking-widest"
                  style={{
                    backgroundColor: `${exp.color}10`,
                    color: exp.color,
                    border: `1px solid ${exp.color}30`,
                  }}
                >
                  <TrendingUp size={12} />
                  {exp.metric}
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-base leading-relaxed mb-8 group-hover:text-slate-300 transition-colors relative z-10">
              {exp.desc}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all"
                  style={{
                    background: `${exp.color}08`,
                    border: `1px solid ${exp.color}20`,
                    color: `${exp.color}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
