"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-purple-500 font-semibold tracking-widest uppercase mb-4">
            Welcome to my universe
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            I build <span className="text-gradient">Digital</span> <br />
            Experiences.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A specialized developer in creating high-performance, beautiful, and
            interactive web applications.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors"
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/30 rounded-full font-semibold glassmorphism hover:bg-white/5 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-white/50 rounded-full" />
      </motion.div>
    </section>
  );
};
