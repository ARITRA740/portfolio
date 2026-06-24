"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Database, Server, Wrench } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code,
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Web",
    icon: BrainCircuit,
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Django", "Flask", "Node.js", "Express"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "Prisma", "MySQL", "Oracle SQL"]
  },
  {
    title: "Tools & AI",
    icon: Wrench,
    items: ["GitHub", "Jupyter Notebook", "AI Prompts"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-cyanGlow">
            Technical Stack
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Tools I use to ship.
          </h2>
        </div>
        <p className="max-w-md text-slate-300">
          A balanced stack for frontend polish, backend reliability, database design, and
          AI-assisted execution.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="glass rounded-lg p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-violetGlow/12 text-violetGlow">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
