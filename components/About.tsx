"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-cyanGlow">
          About & Education
        </p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Engineering foundations with product-focused execution.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="glass overflow-hidden rounded-lg p-3"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-acid/30 shadow-[0_0_34px_rgba(139,255,179,.18)]">
            <Image
              src="/image_7bcfc4.jpg"
              alt="Aritra Mondal at KIIT convocation in 2025 wearing a green graduation gown"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/72 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-night/70 p-4 backdrop-blur-md">
              <p className="text-sm text-slate-300">KIIT University Convocation 2025</p>
              <p className="font-display text-xl font-semibold text-white">B.Tech CSE Graduate</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          <div className="glass rounded-lg p-6">
            <p className="leading-8 text-slate-300">
              I am a Full Stack Developer & Software Engineer focused on clean interfaces,
              scalable backend architecture, and AI-powered productivity. My work spans React,
              Next.js, Node.js, Python frameworks, databases, and practical automation.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyanGlow/10 text-cyanGlow">
                <GraduationCap />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="mt-2 text-slate-300">KIIT University, 2021-2025</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <MapPin className="mb-3 text-cyanGlow" size={20} />
                    <p className="text-sm text-slate-400">Campus</p>
                    <p className="font-semibold text-white">KIIT University</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <CalendarDays className="mb-3 text-acid" size={20} />
                    <p className="text-sm text-slate-400">Timeline</p>
                    <p className="font-semibold text-white">2021-2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
