"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "JavaScript / HTML / CSS", level: 95 },
  { name: "Node.js / Express.js", level: 82 },
  { name: "Tailwind CSS / Material UI", level: 90 },
  { name: "Supabase / Firebase", level: 85 },
  { name: "Prisma / MongoDB / MySQL", level: 80 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Super <span className="text-gradient">Powers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-300 uppercase tracking-widest font-mono group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-purple-500 font-mono italic">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full bg-gradient-to-right from-purple-600 to-pink-600"
                  style={{
                    background: "linear-gradient(to right, #9333ea, #db2777)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
