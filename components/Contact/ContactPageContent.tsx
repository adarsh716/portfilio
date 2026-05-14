"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { ContactForm } from "@/components/Contact/ContactForm";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "alakhanpal2003@gmail.com",
    href: "mailto:alakhanpal2003@gmail.com",
    color: "#fbbf24",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "8437516789",
  //   href: "tel:8437516789",
  //   color: "#60a5fa",
  // },
  {
    icon: MapPin,
    label: "Location",
    value: "Amritsar, India",
    href: null,
    color: "#a78bfa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "adarsh-lakhanpal-649aba23b",
    href: "https://www.linkedin.com/in/adarsh-lakhanpal-649aba23b/",
    color: "#34d399",
  },
];

export const ContactPageContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 text-primary font-mono text-[9px] uppercase tracking-[0.5em] mb-16 font-black"
      >
        <div className="w-6 h-px bg-primary" />
        Get in Touch
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left — heading + contact cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
            Let&apos;s <br />
            <span className="text-gradient">Connect.</span>
          </h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed mb-14">
            Open to full-time roles, freelance projects, and collaborations. Drop a message — I reply within 24 hours.
          </p>

          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glassmorphism rounded-2xl p-6 flex items-center gap-5 group hover:-translate-x-1 hover:border-primary/20 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.35em] text-slate-600 mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm font-semibold">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-3 text-slate-700 text-xs font-mono"
          >
            <Github size={14} />
            <span>Also find me on GitHub for open-source work</span>
          </motion.div>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glassmorphism rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="text-[9px] font-black font-mono uppercase tracking-[0.4em] text-primary/70 mb-4">
              Send a Message
            </div>
            <h2 className="text-2xl font-black text-white mb-10 tracking-tight">
              What&apos;s on your mind?
            </h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
