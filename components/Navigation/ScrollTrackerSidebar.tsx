"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const GithubSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { Icon: GithubSVG,    href: "https://github.com/adarsh716",                                     label: "GitHub",    color: "#ffffff" },
  { Icon: LinkedinSVG,  href: "https://www.linkedin.com/in/adarsh-lakhanpal-649aba23b/",           label: "LinkedIn",  color: "#0077B5" },
  { Icon: Mail,         href: "mailto:alakhanpal2003@gmail.com",                                   label: "Email",     color: "#E4405F" },
];

const SECTIONS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "WORK" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

export const ScrollTrackerSidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed left-0 top-0 bottom-0 w-24 z-50 hidden xl:flex flex-col items-center justify-between py-12 bg-black/20 backdrop-blur-sm border-r border-white/5"
    >
      {/* Sections List */}
      <div className="flex flex-col items-center gap-6 mt-4">
        {SECTIONS.map((section, idx) => {
          const isActive = activeSection === section.id;
          const num = (idx + 1).toString().padStart(2, "0");

          return (
            <div key={section.id} className="flex flex-col items-center">
              <button
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-[10px] font-black font-mono transition-all duration-500 hover:text-primary ${
                  isActive ? "text-primary scale-110" : "text-slate-800"
                }`}
              >
                {num}
              </button>

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center overflow-hidden"
                  >
                    <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mt-3 mb-4 py-1 border-y border-primary/20">
                      {section.label}
                    </div>
                    <div className="relative h-16 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(251,191,36,1)] animate-pulse" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Socials List */}
      <div className="flex flex-col items-center gap-8 pb-4">
        <div className="flex flex-col items-center gap-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: "white" }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
              className="text-slate-600 hover:text-white transition-colors duration-300"
            >
              <social.Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

