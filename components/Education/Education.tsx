"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Amritsar Group of Colleges",
    period: "2021 — 2025",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, software engineering, and web development with practical project work.",
    achievements: ["CGPA 8.18"],
    gpa: "8.18 CGPA",
    color: "#fbbf24",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    school: "S.S.S.S Khalsa Sen. Sec. School",
    period: "2020 — 2021",
    description:
      "Completed higher secondary education with strong performance in science stream subjects.",
    achievements: ["83.8%"],
    gpa: "83.8%",
    color: "#60a5fa",
  },
  {
    degree: "Secondary Education (Class X)",
    school: "Sacred Touch Public School",
    period: "2018 — 2019",
    description:
      "Completed secondary education with distinction across all subjects.",
    achievements: ["87.6%"],
    gpa: "87.6%",
    color: "#a78bfa",
  },
];

export const Education = () => {
  return (
    <div id="education" className="container mx-auto px-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-5 font-black"
          >
            <div className="w-6 h-px bg-primary" />
            Academic Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-none"
          >
            Knowledge <br />
            <span className="text-gradient">Base.</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-600 max-w-sm text-right font-light italic text-lg leading-relaxed hidden md:block"
        >
          Building the architectural knowledge to shape tomorrow&apos;s digital landscape.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="glassmorphism p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: `${edu.color}12` }}
              />

              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${edu.color}30`,
                }}
              />

              {/* Icon */}
              <div
                className="absolute top-10 right-10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `${edu.color}12`,
                  border: `1px solid ${edu.color}20`,
                }}
              >
                <GraduationCap size={28} style={{ color: edu.color }} />
              </div>

              {/* Period */}
              <div
                className="flex items-center gap-3 mb-8 font-mono text-[10px] font-black tracking-widest uppercase"
                style={{ color: edu.color }}
              >
                <Calendar size={13} />
                {edu.period}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300 relative z-10">
                {edu.degree}
              </h3>

              {/* School + GPA row */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <p className="text-base font-bold text-slate-400 flex items-center gap-2">
                  <BookOpen size={14} className="text-slate-600" />
                  {edu.school}
                </p>
                <span
                  className="text-[9px] font-black font-mono uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{
                    background: `${edu.color}10`,
                    color: edu.color,
                    border: `1px solid ${edu.color}25`,
                  }}
                >
                  GPA {edu.gpa}
                </span>
              </div>

              <p className="text-slate-600 mb-10 font-light leading-relaxed text-sm group-hover:text-slate-400 transition-colors relative z-10 flex-grow">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {edu.achievements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all"
                    style={{
                      background: `${edu.color}08`,
                      border: `1px solid ${edu.color}25`,
                      color: edu.color,
                    }}
                  >
                    <Award size={11} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
