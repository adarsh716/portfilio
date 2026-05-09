"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

interface Skill {
  name: string;
  icon: string;
  color: string;
  invert?: boolean;
}

const rows: Skill[][] = [
  // Row 1 — Frontend
  [
    { name: "HTML5", icon: `${CDN}html5/html5-original.svg`, color: "#E34F26" },
    { name: "CSS3", icon: `${CDN}css3/css3-original.svg`, color: "#1572B6" },
    { name: "JavaScript", icon: `${CDN}javascript/javascript-original.svg`, color: "#F7DF1E" },
    { name: "TypeScript", icon: `${CDN}typescript/typescript-original.svg`, color: "#3178C6" },
    { name: "React", icon: `${CDN}react/react-original.svg`, color: "#61DAFB" },
    { name: "Next.js", icon: `${CDN}nextjs/nextjs-original.svg`, color: "#e2e8f0", invert: true },
    { name: "Angular", icon: `${CDN}angular/angular-original.svg`, color: "#DD0031" },
    { name: "Vue.js", icon: `${CDN}vuejs/vuejs-original.svg`, color: "#4FC08D" },
    { name: "Three.js", icon: `${CDN}threejs/threejs-original.svg`, color: "#e2e8f0", invert: true },
  ],
  // Row 2 — Backend & Databases
  [
    { name: "Node.js", icon: `${CDN}nodejs/nodejs-original.svg`, color: "#339933" },
    { name: "Java", icon: `${CDN}java/java-original.svg`, color: "#007396" },
    { name: "Spring", icon: `${CDN}spring/spring-original.svg`, color: "#6DB33F" },
    { name: "Python", icon: `${CDN}python/python-original.svg`, color: "#3776AB" },
    { name: "C++", icon: `${CDN}cplusplus/cplusplus-original.svg`, color: "#00599C" },
    { name: "MongoDB", icon: `${CDN}mongodb/mongodb-original.svg`, color: "#47A248" },
    { name: "PostgreSQL", icon: `${CDN}postgresql/postgresql-original.svg`, color: "#4169E1" },
    { name: "MySQL", icon: `${CDN}mysql/mysql-original.svg`, color: "#4479A1" },
    { name: "GraphQL", icon: `${CDN}graphql/graphql-plain.svg`, color: "#E10098" },
  ],
  // Row 3 — DevOps & Tools
  [
    { name: "Docker", icon: `${CDN}docker/docker-original.svg`, color: "#2496ED" },
    { name: "Git", icon: `${CDN}git/git-original.svg`, color: "#F05032" },
    { name: "Redis", icon: `${CDN}redis/redis-original.svg`, color: "#DC382D" },
    { name: "Linux", icon: `${CDN}linux/linux-original.svg`, color: "#FCC624" },
    { name: "Figma", icon: `${CDN}figma/figma-original.svg`, color: "#F24E1E" },
    { name: "GitHub", icon: `${CDN}github/github-original.svg`, color: "#e2e8f0", invert: true },
    { name: "Nginx", icon: `${CDN}nginx/nginx-original.svg`, color: "#009639" },
    { name: "Bash", icon: `${CDN}bash/bash-original.svg`, color: "#e2e8f0", invert: true },
    { name: "Sass", icon: `${CDN}sass/sass-original.svg`, color: "#CC6699" },
  ],
];

const categories = [
  { label: "Frontend", count: 9, color: "#fbbf24" },
  { label: "Backend", count: 9, color: "#60a5fa" },
  { label: "DevOps", count: 9, color: "#a78bfa" },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group/card relative flex flex-col items-center justify-center gap-3.5 flex-shrink-0 mx-3 rounded-2xl px-6 py-6 hover:-translate-y-2.5 hover:scale-105 transition-all duration-300 cursor-default"
      style={{
        minWidth: "130px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Color glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-400 pointer-events-none"
        style={{
          boxShadow: `0 0 25px ${skill.color}30, inset 0 0 25px ${skill.color}06`,
          border: `1px solid ${skill.color}30`,
        }}
      />

      {/* Icon container with glow ring */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Radial glow behind icon */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 blur-sm"
          style={{ backgroundColor: `${skill.color}20` }}
        />

        {imgError ? (
          <div
            className="relative w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
            style={{ background: `${skill.color}15`, color: skill.color }}
          >
            {skill.name.slice(0, 2)}
          </div>
        ) : (
          <img
            src={skill.icon}
            alt={skill.name}
            width={48}
            height={48}
            className="relative object-contain group-hover/card:scale-110 transition-transform duration-300"
            style={{
              filter: skill.invert
                ? "invert(1) brightness(0.85)"
                : "none",
              imageRendering: "crisp-edges",
            }}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Skill name */}
      <span
        className="relative text-[9px] font-black uppercase tracking-[0.28em] text-slate-600 group-hover/card:text-white transition-colors duration-300 whitespace-nowrap"
      >
        {skill.name}
      </span>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover/card:w-[60%] transition-all duration-300 rounded-full"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
};

const MarqueeRow = ({
  skills,
  direction = "left",
  duration = 40,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  duration?: number;
}) => {
  const doubled = [...skills, ...skills];

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={(e) => {
        const track = e.currentTarget.querySelector(
          ".marquee-track"
        ) as HTMLElement | null;
        if (track) track.style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        const track = e.currentTarget.querySelector(
          ".marquee-track"
        ) as HTMLElement | null;
        if (track) track.style.animationPlayState = "running";
      }}
    >
      <div
        className="marquee-track flex"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] blur-[140px] rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      {/* ── Header ── */}
      <div className="container mx-auto px-6 max-w-7xl mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-6 font-black">
              <div className="w-6 h-px bg-primary" />
              Technologies
            </div>
            <h2 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9]">
              <span className="text-white">TECH</span>
              <br />
              <span className="text-gradient">ARSENAL</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              A full-spectrum toolkit spanning frontend, backend, databases,
              and DevOps — built through years of production-grade engineering
              across complex systems.
            </p>

            {/* Category count cards */}
            <div className="grid grid-cols-3 gap-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="relative rounded-2xl p-5 text-center group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{
                    background: `${cat.color}06`,
                    border: `1px solid ${cat.color}18`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${cat.color}08 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="text-3xl font-black mb-1 relative z-10"
                    style={{ color: cat.color }}
                  >
                    {cat.count}+
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 relative z-10">
                    {cat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Marquee rows ── */}
      <div className="relative space-y-5">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        {/* Divider lines between rows */}
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-2 pointer-events-none">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-full h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(251,191,36,0.06) 20%, rgba(251,191,36,0.06) 80%, transparent)",
              }}
            />
          ))}
        </div>

        <MarqueeRow skills={rows[0]} direction="left" duration={45} />
        <MarqueeRow skills={rows[1]} direction="right" duration={38} />
        <MarqueeRow skills={rows[2]} direction="left" duration={52} />
      </div>

      {/* ── Featured skill spotlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 max-w-7xl mt-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { skill: "React", level: "Expert", pct: 95, color: "#61DAFB", icon: `${CDN}react/react-original.svg` },
            { skill: "Next.js", level: "Expert", pct: 93, color: "#fbbf24", icon: `${CDN}nextjs/nextjs-original.svg`, invert: true },
            { skill: "Three.js", level: "Advanced", pct: 88, color: "#a78bfa", icon: `${CDN}threejs/threejs-original.svg`, invert: true },
            { skill: "Node.js", level: "Expert", pct: 90, color: "#339933", icon: `${CDN}nodejs/nodejs-original.svg` },
          ].map((item, i) => (
            <FeaturedSkillCard key={i} item={item} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-[9px] font-mono text-slate-700 uppercase tracking-[0.5em]"
      >
        Hover to pause · 27+ technologies mastered
      </motion.p>
    </section>
  );
};

const FeaturedSkillCard = ({
  item,
  index,
}: {
  item: {
    skill: string;
    level: string;
    pct: number;
    color: string;
    icon: string;
    invert?: boolean;
  };
  index: number;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group relative rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300"
      style={{
        background: `${item.color}06`,
        border: `1px solid ${item.color}15`,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${item.color}10 0%, transparent 60%)`,
        }}
      />

      {/* Top row: icon + level */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="w-10 h-10 flex items-center justify-center">
          {imgError ? (
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black"
              style={{ background: `${item.color}20`, color: item.color }}
            >
              {item.skill[0]}
            </div>
          ) : (
            <img
              src={item.icon}
              alt={item.skill}
              width={40}
              height={40}
              className="object-contain"
              style={{ filter: item.invert ? "invert(0.85)" : "none" }}
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <span
          className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background: `${item.color}12`,
            color: item.color,
            border: `1px solid ${item.color}25`,
          }}
        >
          {item.level}
        </span>
      </div>

      {/* Name */}
      <div className="text-base font-black text-white mb-4 relative z-10 group-hover:text-white transition-colors">
        {item.skill}
      </div>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[8px] font-black uppercase tracking-widest text-slate-700">
            Proficiency
          </div>
          <div
            className="text-[9px] font-black font-mono"
            style={{ color: item.color }}
          >
            {item.pct}%
          </div>
        </div>
        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
              boxShadow: `0 0 8px ${item.color}60`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
