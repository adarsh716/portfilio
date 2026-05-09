"use client";

import { Scene } from "@/components/Canvas/Scene";
import { Navbar } from "@/components/Navbar/Navbar";
import { SocialDock } from "@/components/Socials/SocialDock";
import { CustomCursor } from "@/components/Cursor/CustomCursor";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumb?: string;
}

export const PageWrapper = ({ children, breadcrumb }: PageWrapperProps) => {
  return (
    <main className="relative min-h-screen selection:bg-primary/20">
      <CustomCursor />
      <Navbar />
      <SocialDock />
      <Scene />

      <div className="relative z-10 pt-32 pb-20">
        {breadcrumb && (
          <div className="container mx-auto px-6 max-w-7xl mb-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-slate-600 hover:text-primary transition-colors group"
              >
                <ArrowLeft
                  size={12}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Home
                <span className="text-white/20 mx-1">/</span>
                <span className="text-primary">{breadcrumb}</span>
              </Link>
            </motion.div>
          </div>
        )}
        {children}
      </div>

      <footer className="relative z-10 py-12 text-center border-t border-white/[0.04]">
        <div className="text-primary font-black text-xl tracking-tighter mb-3">A.L</div>
        <div className="inline-block px-6 py-2.5 rounded-full glassmorphism text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">
          © 2026 // Adarsh Lakhanpal
        </div>
      </footer>
    </main>
  );
};
