"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "ImmiFlow",
    category: "ROLE-BASED PLATFORM · SCRIPTBOX",
    description:
      "Architected a role-based access control system supporting 4 distinct user types (Owner, Agent, Admin, Applicant). Streamlined backend data workflows using Supabase and Prisma.",
    tags: ["Next.js", "React.js", "Material UI", "Prisma", "Supabase"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#fbbf24",
  },
  {
    id: "02",
    title: "Patty Kulcha",
    category: "RESTAURANT MANAGEMENT · SCRIPTBOX",
    description:
      "Full-featured platform for real-time order tracking, menu management, and restaurant admin control. Integrated Firebase Auth and Firestore for seamless real-time data flow.",
    tags: ["Next.js", "React.js", "Material UI", "Firebase"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#60a5fa",
  },
  {
    id: "03",
    title: "Space Cart",
    category: "E-COMMERCE PLATFORM",
    description:
      "E-commerce site with user authentication, cart functionality, product filtering, and an owner dashboard. Fully responsive design built with Tailwind CSS.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#a78bfa",
  },
  {
    id: "04",
    title: "The Wild Oasis",
    category: "HOTEL RESERVATION SYSTEM",
    description:
      "End-to-end hotel reservation platform with secure user login, booking management, and an admin dashboard. Implemented NextAuth for secure authentication, reducing unauthorized access by 100%.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "NextAuth"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#34d399",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${project.col} group relative`}
      style={{ perspective: "1000px" }}
    >
      <div
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.12s ease" : "transform 0.6s ease",
        }}
        className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[340px] overflow-hidden rounded-[2.5rem] glass-card"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1200 grayscale group-hover:grayscale-0"
            style={{ transitionDuration: "1200ms" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
        </div>

        {/* Holographic shimmer on hover */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none holographic-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Accent glow on hover */}
        <div
          className="absolute -inset-px rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 60px ${project.accent}15, 0 0 40px ${project.accent}10`,
          }}
        />

        {/* Large project number background */}
        <div className="absolute top-6 right-8 text-[7rem] font-black text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-white/[0.06] transition-colors">
          {project.id}
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end">
          {/* Category */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.accent, boxShadow: `0 0 8px ${project.accent}` }}
            />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-white/70 transition-colors">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
            {project.title}
          </h3>

          <p className="text-slate-500 text-sm md:text-base mb-8 max-w-lg font-light leading-relaxed group-hover:text-slate-300 transition-colors">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:border-white/15 group-hover:text-slate-400 transition-all"
                  style={{
                    "--tag-border": project.accent,
                  } as React.CSSProperties}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 ml-4 flex-shrink-0">
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-slate-900 hover:border-primary transition-all"
              >
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-5 font-black"
            >
              <div className="w-6 h-px bg-primary" />
              Selected Works
            </motion.div>
            <h2 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-none">
              Digital <br />
              <span className="text-gradient">Artifacts.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-sm text-right font-light text-xl italic leading-relaxed hidden md:block"
          >
            Building systems that stand the test of time, performance, and scale.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 glassmorphism rounded-2xl font-black text-sm text-white hover:border-primary/30 hover:text-primary transition-all"
          >
            View All Projects <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
