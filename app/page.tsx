"use client";

import { AdvancedHero } from "@/components/Hero/AdvancedHero";
import { Scene } from "@/components/Canvas/Scene";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Education } from "@/components/Education/Education";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ScrollTrackerSidebar } from "@/components/Navigation/ScrollTrackerSidebar";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { CustomCursor } from "@/components/Cursor/CustomCursor";
import { motion } from "framer-motion";

const techMarquee = [
  "Next.js", "React.js", "JavaScript", "Node.js", "Express.js",
  "Supabase", "Firebase", "Prisma", "MongoDB", "MySQL",
  "Tailwind CSS", "Material UI", "HTML5", "CSS3", "C++",
  "Next.js", "React.js", "JavaScript", "Node.js", "Express.js",
  "Supabase", "Firebase", "Prisma", "MongoDB", "MySQL",
  "Tailwind CSS", "Material UI", "HTML5", "CSS3", "C++",
];

const SectionDivider = () => (
  <div className="relative flex items-center justify-center py-4">
    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    <div className="absolute flex items-center gap-3 px-6 bg-transparent">
      <div className="w-1 h-1 rounded-full bg-primary/40" />
      <div className="w-6 h-px bg-primary/30" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
      <div className="w-6 h-px bg-primary/30" />
      <div className="w-1 h-1 rounded-full bg-primary/40" />
    </div>
  </div>
);

const coreValues = [
  { number: "01", title: "User-First", desc: "Every interface crafted for real-world usability." },
  { number: "02", title: "Clean Code", desc: "Reusable components and readable architecture." },
  { number: "03", title: "Full Stack", desc: "End-to-end ownership from UI to database." },
  { number: "04", title: "Shipping Fast", desc: "Production-ready apps delivered reliably." },
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/20">
      <CustomCursor />
      <Navbar />
      <ScrollTrackerSidebar />
      <Scene />

      <div className="relative z-10 pb-20">
        {/* Hero */}
        <AdvancedHero />

        {/* ── About Section ── */}
        <section id="about" className="py-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-20 font-black"
            >
              <div className="w-6 h-px bg-primary" />
              About
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Left — manifesto */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.88] tracking-tighter text-white">
                  The{" "}
                  <span className="text-gradient">Architect&apos;s</span>
                  <br /> Manifesto
                </h2>

                <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-12 font-light">
                  I turn ideas into{" "}
                  <span className="font-semibold text-white">
                    production-ready applications
                  </span>
                  . Currently building full-stack platforms at Scriptbox using Next.js, React, Supabase &amp; Prisma.
                </p>

                {/* Core values grid */}
                <div className="grid grid-cols-2 gap-5">
                  {coreValues.map((v) => (
                    <motion.div
                      key={v.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glassmorphism rounded-3xl p-6 group hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="text-[9px] font-black font-mono text-primary/50 mb-3 tracking-widest">
                        {v.number}
                      </div>
                      <div className="text-sm font-black text-white uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                        {v.title}
                      </div>
                      <div className="text-slate-600 text-xs font-light leading-relaxed">
                        {v.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — profile card + stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Profile card — subtle reveal on scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="glassmorphism p-8 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(251,191,36,0.08)] transition-all duration-700"
                >
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.05] blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/[0.1] transition-colors duration-700" />
                  <div className="absolute -top-8 -left-8 text-[7rem] font-black text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">AL</div>

                  {/* Avatar + info row */}
                  <div className="relative z-10 flex gap-6 items-start">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-[88px] h-[88px] rounded-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-500"
                        style={{ boxShadow: "0 0 0 2px rgba(251,191,36,0.2), 0 8px 30px rgba(0,0,0,0.5)" }}
                      >
                        <img
                          src="/profile.jpg"
                          alt="Adarsh Lakhanpal"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#050507] shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] font-black font-mono uppercase tracking-[0.35em] text-primary/60 mb-1">
                        Full Stack Developer
                      </div>
                      <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                        Adarsh Lakhanpal
                      </h3>
                      <p className="text-slate-600 text-sm font-light leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                        Currently at Scriptbox — shipping real-world apps with Next.js, React &amp; Supabase.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative z-10 my-6 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                  {/* Tech tags */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {["Next.js", "React.js", "Supabase", "Prisma", "Firebase", "Material UI"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-[8px] font-black uppercase tracking-widest text-slate-600 group-hover:border-primary/20 group-hover:text-slate-400 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote footer */}
                  <div className="relative z-10 mt-6 pl-4 border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <p className="text-slate-600 text-xs font-light italic group-hover:text-slate-400 transition-colors duration-300">
                      &ldquo;Simplicity is the ultimate sophistication.&rdquo;
                    </p>
                  </div>
                </motion.div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: "2+", label: "Years", sub: "of engineering" },
                    { val: "10+", label: "Projects", sub: "shipped" },
                    { val: "3+", label: "Certs", sub: "earned" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="glassmorphism rounded-3xl p-6 text-center group hover:border-primary/20 transition-all"
                    >
                      <div className="text-4xl font-black text-white group-hover:text-primary transition-colors glow-text">
                        {stat.val}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-primary/70 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[8px] text-slate-700 mt-1">{stat.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Tech stack marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee whitespace-nowrap gap-0">
                {techMarquee.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-6 px-3 text-slate-700 font-black uppercase tracking-[0.3em] text-xs hover:text-primary transition-colors"
                  >
                    {item}
                    <span className="text-primary/30 text-base">✦</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Experience */}
        <ExperienceSection />

        <SectionDivider />

        {/* Skills */}
        <SkillsSection />

        <SectionDivider />

        {/* Projects */}
        <Projects isHomePage={true} />

        <SectionDivider />

        {/* Education */}
        <section id="education" className="py-32">
          <Education />
        </section>

        <SectionDivider />

        {/* Contact */}
        <section id="contact" className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[4rem] glassmorphism bg-white/[0.02] shadow-[0_0_100px_rgba(251,191,36,0.05)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              {/* Glow orb */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/[0.05] blur-[130px] rounded-full pointer-events-none" />

              <div className="relative z-10 px-12 py-20 md:px-24 md:py-28 flex flex-col items-center text-center">
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-10 font-black"
                >
                  <div className="w-6 h-px bg-primary" />
                  Get in Touch
                  <div className="w-6 h-px bg-primary" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none"
                >
                  Let&apos;s{" "}
                  <span className="text-gradient">Architect.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="text-slate-500 text-lg md:text-xl mb-16 max-w-lg font-light leading-relaxed"
                >
                  Ready to build the next generation of digital infrastructure?
                  Drop a message — I&apos;ll get back within 24 hours.
                </motion.p>

                {/* Email CTA */}
                <motion.a
                  href="mailto:alakhanpal2003@gmail.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(251,191,36,0.06)",
                    border: "1px solid rgba(251,191,36,0.25)",
                    boxShadow: "0 0 40px rgba(251,191,36,0.08)",
                  }}
                >
                  {/* Hover fill */}
                  <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Email icon */}
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-white/20 transition-colors duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary group-hover:text-slate-900 transition-colors duration-300"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>

                  {/* Email text */}
                  <span className="relative z-10 text-lg md:text-xl font-black tracking-tight text-primary group-hover:text-slate-900 transition-colors duration-300">
                    alakhanpal2003@gmail.com
                  </span>

                  {/* Arrow */}
                  <span className="relative z-10 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary group-hover:text-slate-900 transition-colors duration-300"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </motion.a>

                {/* Or copy hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="mt-8 text-[9px] font-mono text-slate-700 uppercase tracking-[0.5em]"
                >
                  Click to open mail client
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-black text-2xl tracking-tighter mb-4">A.L</div>
            <div className="inline-block px-8 py-3 rounded-full glassmorphism text-[9px] font-black uppercase tracking-[0.6em] text-slate-600 hover:text-white hover:border-white/10 transition-all cursor-default">
              © 2026 // Adarsh Lakhanpal // Crafted with Precision
            </div>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
