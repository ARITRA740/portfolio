"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Bot, Network, ScanText, Workflow } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

const projects = [
  {
    title: "Letz Connect",
    description:
      "A connection-focused web platform designed around smooth user flows, practical discovery, and responsive interaction patterns.",
    icon: Network,
    accent: "cyan"
  },
  {
    title: "Broker Buddy",
    description:
      "A broker productivity assistant concept for tracking client activity, simplifying workflows, and improving operational clarity.",
    icon: Bot,
    accent: "violet"
  },
  {
    title: "Tasks Gen",
    description:
      "An automation-minded task generation system that helps turn intent into structured work items and execution-ready plans.",
    icon: Workflow,
    accent: "acid"
  },
  {
    title: "Text Recognition App",
    description:
      "A computer vision utility for extracting text from images and making recognition output easier to review and reuse.",
    icon: ScanText,
    accent: "cyan"
  }
];

function TiltCard({ children }: { children: ReactNode }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rotateX.set(((y / rect.height) - 0.5) * -8);
    rotateY.set(((x / rect.width) - 0.5) * 8);
  }

  return (
    <motion.div
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="glass min-h-[280px] rounded-lg p-6 transition will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <div className="mb-10">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-cyanGlow">
          Projects
        </p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Selected builds with practical momentum.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          const color =
            project.accent === "violet"
              ? "text-violetGlow bg-violetGlow/10 border-violetGlow/20"
              : project.accent === "acid"
                ? "text-acid bg-acid/10 border-acid/20"
                : "text-cyanGlow bg-cyanGlow/10 border-cyanGlow/20";

          return (
            <TiltCard key={project.title}>
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <div className={`grid h-12 w-12 place-items-center rounded-lg border ${color}`}>
                    <Icon size={23} />
                  </div>
                  <ArrowUpRight className="text-slate-500" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-auto pt-8">
                  <span className="text-sm font-medium text-cyanGlow">Case study ready</span>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
