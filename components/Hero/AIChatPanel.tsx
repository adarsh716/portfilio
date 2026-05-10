"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Bot } from "lucide-react";

const GREETING =
  "Hi! 👋 I'm Adarsh's AI assistant. Ask me anything about his skills, projects, work experience, or how to reach him!";

const QUICK_QUESTIONS = [
  "Who are you?",
  "Your tech stack?",
  "Show projects",
  "Where do you work?",
  "Education?",
  "How to contact?",
];

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["who", "yourself", "introduce", "tell me", "about you"],
    answer:
      "I'm Adarsh Lakhanpal 👨‍💻 — a Full Stack Developer currently at Scriptbox (Remote).\n\nI build real-world web apps using Next.js, React, Supabase & Prisma. Pursuing B.Tech in CSE from Amritsar Group of Colleges with a CGPA of 8.18.\n\nAlways open to exciting opportunities! 🚀",
  },
  {
    keywords: ["stack", "tech", "skill", "language", "tool", "framework", "use"],
    answer:
      "My tech stack ⚡\n\n🎨 Frontend\n  Next.js · React.js · JavaScript · HTML/CSS\n  Tailwind CSS · Material UI\n\n⚙️ Backend\n  Node.js · Express.js\n\n🗄️ Databases\n  Supabase · Firebase · Prisma\n  MongoDB · MySQL\n\n🔧 Tools\n  Git/GitHub · VS Code",
  },
  {
    keywords: ["project", "build", "made", "create", "portfolio", "work"],
    answer:
      "My key projects 🛠️\n\n🔹 ImmiFlow (Scriptbox)\n  Role-based platform for 4 user types — Next.js, Prisma, Supabase\n\n🔹 Patty Kulcha (Scriptbox)\n  Real-time restaurant order & menu system — Firebase, Material UI\n\n🔹 Space Cart\n  MERN e-commerce with cart, filters & dashboard\n\n🔹 The Wild Oasis\n  Hotel booking platform with NextAuth & Supabase",
  },
  {
    keywords: ["work", "company", "job", "scriptbox", "experience", "role", "position"],
    answer:
      "Work Experience 💼\n\nScriptbox (Remote)\n• Full Stack Developer\n  Jun 2025 – Present\n• Full Stack Developer Intern\n  Jun 2024 – Jun 2025\n\nBuilding 3+ production SaaS apps for real clients, using Next.js, React, Firebase & Prisma.",
  },
  {
    keywords: ["education", "study", "college", "degree", "cgpa", "school", "btech", "academic"],
    answer:
      "Education 🎓\n\n🏛️ B.Tech — CS & Engineering\n  Amritsar Group of Colleges\n  2021–2025 · CGPA 8.18\n\n📚 Class XII\n  S.S.S.S Khalsa Sen. Sec. School\n  2020–2021 · 83.8%\n\n📖 Class X\n  Sacred Touch Public School\n  2018–2019 · 87.6%",
  },
  {
    keywords: ["contact", "email", "reach", "phone", "linkedin", "hire", "connect", "available"],
    answer:
      "Let's connect! 📬\n\n📧  alakhanpal2003@gmail.com\n📱  8437516789\n🔗  linkedin.com/in/adarsh-lakhanpal-649aba23b/\n📍  Amritsar, India\n\nI'm open to full-time roles, freelance projects & collaborations. Response within 24 hours! ✅",
  },
  {
    keywords: ["certif", "certificate", "award", "nptel", "udemy", "forage"],
    answer:
      "Certifications 🏆\n\n🥇 Introduction to IoT\n   IIT Kharagpur | NPTEL\n\n🥇 Front-End Job Simulation\n   Skyscanner — Forage\n\n🥇 Web Development Bootcamp 2023\n   Udemy",
  },
  {
    keywords: ["hello", "hi", "hey", "sup", "greet"],
    answer: "Hey there! 👋 Great to meet you! I'm Adarsh's AI assistant — ask me about his skills, projects, experience, or anything else. I'm here to help! 😊",
  },
];

const getAnswer = (input: string): string => {
  const lower = input.toLowerCase();
  for (const qa of QA) {
    if (qa.keywords.some((kw) => lower.includes(kw))) return qa.answer;
  }
  return "Hmm, I'm not sure about that one! Try asking about Adarsh's skills, projects, work experience, education, or how to contact him. 😊";
};

interface Message { role: "user" | "ai"; text: string }

export const AIChatPanel = () => {
  const [messages, setMessages] = useState<Message[]>([{ role: "ai", text: GREETING }]);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const bottomRef               = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim() || typing) return;
    setMessages((prev) => [...prev, { role: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: getAnswer(text) }]);
      setTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <div className="flex flex-col h-[600px] glassmorphism rounded-[2rem] overflow-hidden border border-white/[0.07]"
      style={{ boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(251,191,36,0.08)" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
          <Bot size={16} className="text-primary" />
        </div>
        <div>
          <div className="text-white font-black text-sm tracking-tight">AdarshAI</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.9)] animate-pulse" />
            <span className="text-[8px] font-mono text-green-400 uppercase tracking-widest">Online</span>
          </div>
        </div>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 min-h-0">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "ai" && (
                <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles size={10} className="text-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap break-words ${
                  msg.role === "user"
                    ? "bg-primary text-slate-950 font-semibold rounded-tr-sm"
                    : "bg-white/[0.06] border border-white/[0.07] text-slate-300 rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles size={10} className="text-primary" />
              </div>
              <div className="bg-white/[0.06] border border-white/[0.07] px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: dot * 0.18 }}
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* ── Quick questions ── */}
      <div className="px-5 pt-3 pb-2 border-t border-white/[0.05] flex-shrink-0">
        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-700 mb-2">Quick Ask</p>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => sendMessage(q)}
              disabled={typing}
              className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[8px] font-black uppercase tracking-wider text-slate-500 hover:bg-primary/10 hover:border-primary/30 hover:text-primary disabled:opacity-40 transition-all whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* ── Input ── */}
      <div className="px-5 py-4 border-t border-white/[0.06] flex-shrink-0">
        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            disabled={typing}
            placeholder="Ask me anything about Adarsh..."
            className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-primary/40 transition-colors disabled:opacity-50 min-w-0"
          />
          <button
            type="button"
            onClick={() => sendMessage(input)}
            disabled={typing || !input.trim()}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-slate-950 hover:opacity-90 disabled:opacity-40 transition-opacity flex-shrink-0"
          >
            <Send size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
