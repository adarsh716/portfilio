"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home",       href: "/" },
  { name: "About",      href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills",     href: "/skills" },
  { name: "Work",       href: "/projects" },
  { name: "Education",  href: "/education" },
  { name: "Contact",    href: "/contact" },
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

  useEffect(() => {
    const match = navLinks.find((l) => {
      if (l.href === "/" && pathname === "/") return true;
      if (l.href !== "/" && pathname.startsWith(l.href)) return true;
      return false;
    });
    if (match) setActive(match.name);
  }, [pathname]);

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
        className={`relative px-3 py-2 flex items-center gap-1.5 group transition-all duration-300 ${className ?? ""}`}
      >
        {isActive && (
          <motion.div
            layoutId="nav-highlight"
            className="absolute inset-0 bg-primary/[0.08] rounded-full border border-primary/25 shadow-[0_0_20px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(251,191,36,0.1)]"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span
          className={`relative text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
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
        className="fixed top-0 left-0 h-[1.5px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-[200] shadow-[0_0_15px_rgba(251,191,36,0.4)]"
        style={{ width: progressWidth }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center ${
        scrolled ? "h-20" : "h-24"
      }`}>
        {/* Full-width glass background */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/10" 
            : "bg-black/20 backdrop-blur-md"
        }`} />

        <div className="container mx-auto relative z-10 flex justify-center items-center h-full pt-4 pointer-events-none">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`
              relative flex items-center gap-1 md:gap-2 px-4 md:px-6 py-3 rounded-full pointer-events-auto transition-all duration-500
              ${scrolled
                ? "bg-white/[0.03] border-primary/[0.15] shadow-[0_0_40px_rgba(251,191,36,0.04)]"
                : "glassmorphism shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-white/[0.03]"
              }
            `}
          >
            {/* Logo */}
            <div className="flex items-center mr-2">
              <Link href="/" className="flex items-center gap-1.5 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
                <span className="text-sm font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary group-hover:opacity-80 transition-opacity">
                  A.L.
                </span>
              </Link>
            </div>

            <div className="w-px h-5 bg-white/[0.06] hidden md:block mx-1" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </div>

            <div className="w-px h-5 bg-white/[0.06] hidden md:block mx-1" />

            {/* Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 transition-all cursor-default group">
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                Open to work
              </span>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors ml-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 p-5 glassmorphism rounded-[2rem] border border-white/10 md:hidden flex flex-col gap-1 z-[110] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.05]">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Navigation</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${
                    active === link.name
                      ? "bg-primary/[0.08] text-primary border border-primary/20 shadow-[0_0_16px_rgba(251,191,36,0.06)]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">{link.name}</span>
                  {active === link.name && (
                    <div className="ml-auto w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
