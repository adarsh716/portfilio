"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Introduction to Internet of Things",
    issuer: "IIT Kharagpur | NPTEL",
    color: "#fbbf24",
  },
  {
    name: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner — Forage",
    color: "#60a5fa",
  },
  {
    name: "The Complete Web Development Bootcamp 2023",
    issuer: "Udemy",
    color: "#a78bfa",
  },
];

export const CertificationsContent = () => {
  return (
    <section className="container mx-auto px-6 max-w-7xl py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-14 font-black"
      >
        <div className="w-6 h-px bg-primary" />
        Certifications
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glassmorphism rounded-[2rem] p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ backgroundColor: `${cert.color}12` }}
            />

            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}25` }}
            >
              <Award size={18} style={{ color: cert.color }} />
            </div>

            <h3 className="text-white font-black text-base mb-3 leading-tight group-hover:text-primary transition-colors relative z-10">
              {cert.name}
            </h3>
            <p
              className="text-[9px] font-black uppercase tracking-[0.3em] font-mono relative z-10"
              style={{ color: cert.color }}
            >
              {cert.issuer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
