"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
  col?: string;
  accent?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    title: "KNOWLEDGE AI",
    category: "AI · RAG KNOWLEDGE BASE",
    description:
      "RAG-based AI knowledge base with natural language querying and semantic search for unlimited PDFs.",
    tags: ["Next.js", "Supabase", "Groq", "Cohere", "pgvector"],
    link: "https://knowledgeai-psi.vercel.app/",
    github: "https://github.com/adarsh716/knowledgeai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#0ea5e9",
    featured: true,
  },
  {
    id: "02",
    title: "ImmiFlow",
    category: "ROLE-BASED PLATFORM",
    description:
      "Full-stack immigration management system with RBAC for agents, owners, and applicants.",
    tags: ["Next.js", "Prisma", "Supabase", "Material UI"],
    link: "#",
    github: "https://github.com/adarsh716/HR_Management",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#fbbf24",
    featured: true,
  },
  {
    id: "03",
    title: "The Wild Oasis",
    category: "MANAGEMENT SYSTEM",
    description:
      "Internal cabin booking management system featuring a dashboard for analytics and operations.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "React Query"],
    link: "https://the-wild-oasis-adarsh.vercel.app/",
    github: "https://github.com/adarsh716/The-Wild-Oasis",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#34d399",
    featured: true,
  },
  {
    id: "04",
    title: "Task Manager",
    category: "PRODUCTIVITY APP",
    description:
      "Efficient task management web application with clean UI and real-time state persistence.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://task-manager-webapp-theta.vercel.app",
    github: "https://github.com/adarsh716/task-manager-webapp",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#a78bfa",
    featured: true,
  },
  {
    id: "05",
    title: "Youtube Clone",
    category: "MEDIA PLATFORM",
    description:
      "A feature-rich clone of YouTube with video streaming, search, and responsive layout.",
    tags: ["React", "RapidAPI", "Tailwind"],
    link: "https://youtube-clone-sigma-eosin.vercel.app",
    github: "https://github.com/adarsh716/Youtube-Clone",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#ef4444",
    featured: true,
  },
  {
    id: "06",
    title: "Code Editor",
    category: "DEVELOPER TOOL",
    description:
      "Interactive web-based code editor supporting real-time preview and multi-language syntax.",
    tags: ["React", "Monaco Editor", "CSS3"],
    link: "https://code-editor-livid.vercel.app",
    github: "https://github.com/adarsh716/code-editor",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#6366f1",
    featured: true,
  },
  {
    id: "07",
    title: "Keeper App",
    category: "WORKFLOW TOOL",
    description:
      "Project management app designed for customizable workflows and real-time updates.",
    tags: ["React", "Firebase", "Material UI"],
    link: "https://keeper-app-sage-three.vercel.app",
    github: "https://github.com/adarsh716/Keeper-App",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-5",
    accent: "#f59e0b",
    featured: true,
  },
  {
    id: "08",
    title: "Space Cart",
    category: "E-COMMERCE",
    description:
      "Full-stack E-commerce platform with Stripe integration, admin panel, and Redux state management.",
    tags: ["MERN", "Redux", "Stripe", "Tailwind"],
    link: "https://space-cart-ecommerce.vercel.app",
    github: "https://github.com/adarsh716/Space-Cart-Ecommerce",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2070&auto=format&fit=crop",
    col: "lg:col-span-7",
    accent: "#8b5cf6",
    featured: true,
  },
  {
    id: "09",
    title: "Lost & Found",
    category: "COMMUNITY APP",
    description:
      "Real-time portal for reporting lost items with integrated socket-based chat for recovery.",
    tags: ["Node.js", "Socket.io", "Docker"],
    link: "#",
    github: "https://github.com/adarsh716/lost-and-found",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "10",
    title: "HR Management",
    category: "ENTERPRISE",
    description:
      "Comprehensive HR management system for employee records, payroll, and attendance.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/adarsh716/HR_Management",
    image:
      "https://images.unsplash.com/photo-1454165833767-027eeef1593e?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "11",
    title: "Banking System",
    category: "FINTECH",
    description:
      "Secure banking management system with database connectivity and graphical user interface.",
    tags: ["Python", "Tkinter", "SQL"],
    link: "#",
    github: "https://github.com/adarsh716/Banking-Management-System",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "12",
    title: "ChatBot AI",
    category: "AI",
    description:
      "Conversational AI agent with a dynamic React frontend and Flask backend for natural interactions.",
    tags: ["Python", "Flask", "React"],
    link: "#",
    github: "https://github.com/adarsh716/ChatBot-web-application",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "13",
    title: "Goal Tracker",
    category: "MOBILE APP",
    description:
      "Mobile application for personal goal setting and progress visualization built with React Native.",
    tags: ["React Native", "Expo"],
    link: "#",
    github: "https://github.com/adarsh716/goal-tracker",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "14",
    title: "Online IDLE",
    category: "DEVELOPER TOOL",
    description:
      "Integrated development environment in the browser for quick coding and testing.",
    tags: ["React", "Ace Editor"],
    link: "#",
    github: "https://github.com/adarsh716/OnlineIDLE",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "15",
    title: "Flutter Calculator",
    category: "MOBILE APP",
    description:
      "Clean and minimalist calculator application developed using the Flutter framework.",
    tags: ["Flutter", "Dart"],
    link: "#",
    github: "https://github.com/adarsh716/flutter_calculator",
    image:
      "https://images.unsplash.com/photo-1587141744123-998ebeec988a?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "16",
    title: "ChatBot Assignment",
    category: "AI",
    description:
      "Intelligent chatbot implementation focusing on response accuracy and user interaction.",
    tags: ["JavaScript", "Node.js"],
    link: "https://chatbot-assignment-nine.vercel.app",
    github: "https://github.com/adarsh716/chatbot-assignment",
    image:
      "https://images.unsplash.com/photo-1527433270417-66d3b3d497ee?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "17",
    title: "Dice App",
    category: "MOBILE APP",
    description:
      "Simple mobile dice-rolling application for board games and randomized decisions.",
    tags: ["Flutter", "Dart"],
    link: "#",
    github: "https://github.com/adarsh716/DiceApp-Flutter",
    image:
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "18",
    title: "Patty Kulcha Admin",
    category: "RESTAURANT TOOL",
    description:
      "Administrative dashboard for real-time order tracking and menu management.",
    tags: ["Next.js", "Firebase"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "19",
    title: "Dice Game Web",
    category: "GAME",
    description:
      "Interactive web-based dice game featuring smooth animations and competitive scoring.",
    tags: ["HTML", "CSS", "JS"],
    link: "#",
    github: "https://github.com/adarsh716/Dice-Game-",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "20",
    title: "Login Signup UI",
    category: "AUTH SYSTEM",
    description:
      "Modern implementation of authentication UI with secure backend integration.",
    tags: ["Express", "MongoDB", "JWT"],
    link: "#",
    github: "https://github.com/adarsh716/login_signup",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "21",
    title: "Portfolio V1",
    category: "WEB APP",
    description:
      "Previous iteration of my personal portfolio with a focus on core projects.",
    tags: ["React", "CSS3", "Vite"],
    link: "https://portfilio-adarsh.vercel.app",
    github: "https://github.com/adarsh716/portfilio",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "22",
    title: "Space Cart Backend",
    category: "BACKEND API",
    description:
      "Robust API infrastructure for the Space Cart platform with secure payment processing.",
    tags: ["Node.js", "Express", "Stripe"],
    link: "https://space-cart-backend.vercel.app",
    github: "https://github.com/adarsh716/space-cart-backend",
    image:
      "https://images.unsplash.com/photo-1623282033815-40b05d96c9bb?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

const ProjectCard = ({
  project,
  index,
  isArchive = false,
}: {
  project: Project;
  index: number;
  isArchive?: boolean;
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isArchive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${isArchive ? "lg:col-span-4" : project.col || "lg:col-span-6"} group relative`}
      style={{ perspective: "1000px" }}
    >
      <div
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        data-cursor="card"
        data-cursor-text="VIEW"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.12s ease" : "transform 0.6s ease",
        }}
        className={`relative ${isArchive ? "aspect-[3/2] min-h-[240px]" : "aspect-[4/3] lg:aspect-auto lg:min-h-[340px]"} overflow-hidden rounded-[2rem] glass-card`}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div
          className={`absolute inset-0 p-8 flex flex-col justify-end ${isArchive ? "p-6" : "p-10"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-1 h-1 rounded-full"
              style={{
                backgroundColor: project.accent || "#fbbf24",
                boxShadow: `0 0 8px ${project.accent || "#fbbf24"}`,
              }}
            />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white/60 transition-colors">
              {project.category}
            </span>
          </div>

          <h3
            className={`${isArchive ? "text-xl" : "text-2xl md:text-3xl"} font-black text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300`}
          >
            {project.title}
          </h3>

          <p className="text-slate-600 text-xs mb-6 max-w-sm font-light leading-relaxed group-hover:text-slate-400 transition-colors line-clamp-2">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[7px] font-black uppercase tracking-widest text-slate-600 group-hover:border-white/10 group-hover:text-slate-500 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 flex-shrink-0">
              {project.link !== "#" && (
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-slate-900 hover:border-primary transition-all"
                >
                  <ArrowUpRight size={14} />
                </motion.a>
              )}
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                <Github size={14} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const archivedProjects = projects.filter((p) => !p.featured);

  const displayFeatured = isHomePage
    ? featuredProjects.slice(0, 4).map((p, idx) => {
        const layouts = [
          "lg:col-span-7",
          "lg:col-span-5",
          "lg:col-span-5",
          "lg:col-span-7",
        ];
        return { ...p, col: layouts[idx] };
      })
    : featuredProjects;

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
            <h2 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-none" data-cursor="text">
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
            Building systems that stand the test of time, performance, and
            scale.
          </motion.p>
        </div>

        {/* Featured Bento grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-32">
          {displayFeatured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Archive Section - Only on /projects page */}
        {!isHomePage && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="h-px flex-1 bg-white/5" />
              <h3 className="text-[10px] font-black uppercase tracking-[1em] text-slate-700 whitespace-nowrap">
                The Archive // Other Works
              </h3>
              <div className="h-px flex-1 bg-white/5" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
              {archivedProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isArchive={true}
                />
              ))}
            </div>
          </>
        )}

        {/* View all CTA */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 glassmorphism rounded-2xl font-black text-sm text-white hover:border-primary/30 hover:text-primary transition-all"
            >
              Explore Full Archive <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
