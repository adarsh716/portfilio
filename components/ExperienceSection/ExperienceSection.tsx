"use client";

import { Experience } from "@/components/Experience/Experience";
import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Code } from "lucide-react";

const proficiencies = [
  { icon: Terminal, label: "Full Stack Dev", val: 92, color: "#fbbf24" },
  { icon: Code, label: "React / Next.js", val: 90, color: "#60a5fa" },
  { icon: Cpu, label: "Backend & APIs", val: 82, color: "#a78bfa" },
  { icon: Globe, label: "UI / Design Systems", val: 85, color: "#34d399" },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-20 font-black"
        >
          <div className="w-6 h-px bg-primary" />
          Professional Timeline
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left — header + proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-none tracking-tighter text-white">
              Professional <br />
              <span className="text-gradient">Timeline.</span>
            </h2>
            <p className="text-slate-600 text-base mb-14 font-light leading-relaxed">
              Building real-world full-stack applications at Scriptbox — from role-based platforms to restaurant management systems.
            </p>

            <div className="space-y-8">
              {proficiencies.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3 text-[9px] uppercase font-black tracking-[0.35em] text-slate-600 group-hover:text-white transition-colors">
                      <item.icon size={13} style={{ color: item.color }} />
                      {item.label}
                    </div>
                    <span
                      className="text-[9px] font-black font-mono"
                      style={{ color: item.color }}
                    >
                      {item.val}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}90, ${item.color})`,
                        boxShadow: `0 0 8px ${item.color}60`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-14 glassmorphism rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-primary mb-2">2+</div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
                  Years of Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — experience cards */}
          <div className="lg:col-span-8">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};
