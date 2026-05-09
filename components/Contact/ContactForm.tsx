"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpzvkyyj");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
          style={{ boxShadow: "0 0 40px rgba(251,191,36,0.2)" }}
        >
          <CheckCircle size={36} className="text-primary" />
        </motion.div>
        <div className="text-primary text-xl font-black font-mono tracking-tighter">
          [SYS]: MESSAGE_TRANSMITTED
        </div>
        <p className="text-slate-500 text-sm">I&apos;ll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-slate-600 ml-1">
            <User size={10} className="text-primary" />
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="neon-input w-full rounded-2xl px-6 py-4 text-white text-sm placeholder:text-slate-700 transition-all"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-slate-600 ml-1">
            <Mail size={10} className="text-primary" />
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="neon-input w-full rounded-2xl px-6 py-4 text-white text-sm placeholder:text-slate-700 transition-all"
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-slate-600 ml-1">
          <MessageSquare size={10} className="text-primary" />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="neon-input w-full rounded-2xl px-6 py-4 text-white text-sm placeholder:text-slate-700 resize-none transition-all"
          placeholder="Tell me about your vision..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full py-5 bg-primary text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 text-sm overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          boxShadow: "0 0 30px rgba(251,191,36,0.3), 0 8px 32px rgba(251,191,36,0.1)",
        }}
      >
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {state.submitting ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-4 h-4 border-2 border-slate-950/40 border-t-slate-950 rounded-full animate-spin" />
              Transmitting...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              Initiate Transmission
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
};
