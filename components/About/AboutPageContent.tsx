"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, Code2, Server, Database, Layers } from "lucide-react";
import Link from "next/link";

const skills = [
  { icon: Code2, label: "Frontend", items: ["Next.js", "React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material UI"], color: "#fbbf24" },
  { icon: Server, label: "Backend", items: ["Node.js", "Express.js", "REST APIs"], color: "#60a5fa" },
  { icon: Database, label: "Databases", items: ["Supabase", "Firebase", "Prisma", "MongoDB", "MySQL"], color: "#a78bfa" },
  { icon: Layers, label: "Languages", items: ["JavaScript", "C++", "Java", "SQL"], color: "#34d399" },
];

const certifications = [
  { name: "Introduction to Internet of Things", issuer: "IIT Kharagpur | NPTEL", color: "#fbbf24" },
  { name: "Front-End Software Engineering Job Simulation", issuer: "Skyscanner — Forage", color: "#60a5fa" },
  { name: "The Complete Web Development Bootcamp 2023", issuer: "Udemy", color: "#a78bfa" },
];

export const AboutPageContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-16 font-black"
      >
        <div className="w-6 h-px bg-primary" />
        About Me
      </motion.div>

      {/* Hero row */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        {/* Left — profile image + contact */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Profile card */}
          <div
            className="glassmorphism rounded-[2.5rem] overflow-hidden relative group"
            style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(251,191,36,0.1)" }}
          >
            <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Image section */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Adarsh Lakhanpal"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent" />

              {/* Overlay name */}
              <div className="absolute bottom-6 left-8 right-8">
                <div className="text-[9px] font-black font-mono uppercase tracking-[0.4em] text-primary mb-1">
                  Full Stack Developer
                </div>
                <h1 className="text-3xl font-black text-white tracking-tight">Adarsh Lakhanpal</h1>
              </div>

              {/* Status badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 glassmorphism rounded-full text-[9px] font-black uppercase tracking-widest text-primary">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
                Available
              </div>
            </div>

            {/* Contact row */}
            <div className="p-8 space-y-4 relative z-10">
              {[
                { icon: Mail, text: "alakhanpal2003@gmail.com", href: "mailto:alakhanpal2003@gmail.com" },
                { icon: Phone, text: "8437516789", href: "tel:8437516789" },
                { icon: MapPin, text: "Amritsar, India", href: null },
                {
                  icon: ExternalLink,
                  text: "linkedin.com/in/adarsh-lakhanpal-649aba23b/",
                  href: "https://www.linkedin.com/in/adarsh-lakhanpal-649aba23b/",
                },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-4 group/row">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/row:bg-primary/20 transition-colors">
                    <Icon size={14} className="text-primary" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-slate-400 text-sm hover:text-primary transition-colors truncate"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — bio + skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
              Building the <br />
              <span className="text-gradient">Future Stack.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              I&apos;m a Full Stack Developer at <span className="text-white font-semibold">Scriptbox</span> with 2+ years of experience shipping real-world applications. I specialize in building scalable platforms using modern tools — from role-based SaaS apps to restaurant management systems.
            </p>
            <p className="text-slate-500 text-base leading-relaxed font-light">
              Currently pursuing B.Tech in Computer Science &amp; Engineering at Amritsar Group of Colleges (CGPA 8.18), I blend strong academic fundamentals with hands-on production experience.
            </p>
          </div>

          {/* Skill categories */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glassmorphism rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `${cat.color}15` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={15} style={{ color: cat.color }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest"
                      style={{ background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}20` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-slate-950 rounded-2xl font-black text-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ExternalLink size={15} />
          </Link>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-10 font-black">
          <div className="w-6 h-px bg-primary" />
          Certifications
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glassmorphism rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ backgroundColor: cert.color, boxShadow: `0 0 8px ${cert.color}` }}
              />
              <h3 className="text-white font-black text-sm mb-2 leading-tight group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
