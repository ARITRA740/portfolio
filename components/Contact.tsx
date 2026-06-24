"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:aritram063@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-cyanGlow">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s build something sharp.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Reach out for full stack engineering, AI workflow builds, frontend development,
            backend implementation, or software collaboration.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:aritram063@gmail.com"
              className="glass flex items-center gap-3 rounded-lg p-4 transition hover:border-cyanGlow/60"
            >
              <Mail className="text-cyanGlow" size={20} />
              <span>aritram063@gmail.com</span>
            </a>
            <a
              href="tel:+917407981732"
              className="glass flex items-center gap-3 rounded-lg p-4 transition hover:border-acid/60"
            >
              <Phone className="text-acid" size={20} />
              <span>+91 74079 81732</span>
            </a>
            <div className="glass flex items-center gap-3 rounded-lg p-4">
              <MapPin className="text-violetGlow" size={20} />
              <span>India</span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-lg p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-slate-300">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
              placeholder="Tell me about the project, role, or idea."
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyanGlow px-5 py-3 font-semibold text-night shadow-neon transition hover:-translate-y-0.5 sm:w-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
