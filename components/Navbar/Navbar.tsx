"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home",       href: "/",           anchor: "hero" },
  { name: "About",      href: "/about",       anchor: "about" },
  { name: "Experience", href: "/experience",  anchor: "experience" },
  { name: "Skills",     href: "/skills",      anchor: "skills" },
  { name: "Work",       href: "/projects",    anchor: "projects" },
  { name: "Education",  href: "/education",   anchor: "education" },
  { name: "Contact",    href: "/contact",     anchor: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome   = pathname === "/";

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight active section while scrolling (home only) */
  useEffect(() => {
    if (!isHome) {
      const match = navLinks.find((l) => l.href === pathname);
      if (match) setActive(match.name);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = navLinks.find((l) => l.anchor === entry.target.id);
            if (match) setActive(match.name);
          }
        }
      },
      { threshold: 0.35 }
    );
    navLinks.forEach(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, pathname]);

  /* Smooth-scroll to section without polluting the URL */
  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavItem = ({
    link,
    onClick,
    className,
  }: {
    link: (typeof navLinks)[0];
    onClick?: () => void;
    className?: string;
  }) => {
    const isActive = active === link.name;

    return (
      <Link
        href={link.href}
        onClick={() => {
          setActive(link.name);
          onClick?.();
        }}
        className={`relative group ${className ?? ""}`}
      >
        {isActive && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-primary/10 border border-primary/25"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <span
          className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
            isActive ? "text-primary" : "text-slate-500 group-hover:text-white"
          }`}
        >
          {link.name}
        </span>
      </Link>
    );
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[200] scroll-progress shadow-[0_0_8px_rgba(251,191,36,0.6)]"
        style={{ width: progressWidth }}
      />

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto w-full max-w-fit">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative px-6 py-3 rounded-full flex items-center gap-6 transition-all duration-500 ${
            scrolled
              ? "glassmorphism shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(251,191,36,0.15)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          {isHome ? (
            <button type="button" onClick={() => scrollTo("hero")} className="text-[9px] font-mono text-primary font-black tracking-[0.35em] hidden md:block hover:opacity-70 transition-opacity">
              A.L
            </button>
          ) : (
            <Link href="/" className="text-[9px] font-mono text-primary font-black tracking-[0.35em] hidden md:block hover:opacity-70 transition-opacity">
              A.L
            </Link>
          )}

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} className="px-4 py-2 rounded-full" />
            ))}
          </div>

          <div className="h-4 w-px bg-white/10 hidden md:block" />

          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Open to work</span>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-56 glassmorphism rounded-3xl p-4 flex flex-col gap-1 border-white/10"
            >
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center transition-all ${
                    active === link.name ? "bg-primary/15 text-primary" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
