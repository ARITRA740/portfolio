"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code2, Cpu, Sparkles } from "lucide-react";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

function NeonCore() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.45} floatIntensity={1.1}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#7c3aed"
          emissiveIntensity={0.55}
          metalness={0.78}
          roughness={0.18}
          wireframe
        />
      </mesh>
      <mesh scale={1.12}>
        <torusGeometry args={[1.55, 0.018, 12, 96]} />
        <meshStandardMaterial color="#8bffb3" emissive="#22d3ee" emissiveIntensity={1.2} />
      </mesh>
    </Float>
  );
}

function Typewriter() {
  const words = useMemo(
    () => ["Full Stack Developer", "Software Engineer", "AI Workflow Builder"],
    []
  );

  return (
    <span className="relative inline-flex min-h-8 items-center text-cyanGlow">
      <motion.span
        key={words.join("-")}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.25 }}
      >
        {words[0]}
      </motion.span>
      <span className="ml-1 h-7 w-[2px] animate-pulse bg-cyanGlow" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-screen items-center gap-10 pt-28 lg:grid-cols-[1fr_.92fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-2 text-sm text-cyanGlow">
          <Sparkles size={16} />
          Full Stack & AI Developer Portfolio
        </div>
        <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Aritra Mondal
          <span className="block text-2xl font-semibold text-slate-300 sm:text-3xl">
            <Typewriter />
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build responsive web experiences, robust backend systems, and AI-assisted workflows
          with a practical engineering mindset and a sharp eye for product detail.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyanGlow px-5 py-3 font-semibold text-night shadow-neon transition hover:-translate-y-0.5"
          >
            <Code2 size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-violetGlow/70 hover:text-violetGlow"
          >
            <Cpu size={18} />
            Contact Me
          </a>
        </div>
      </motion.div>

      <div className="relative min-h-[560px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute inset-x-0 top-8 h-[360px] overflow-hidden rounded-lg border border-white/10 shadow-violet sm:h-[430px]"
        >
          <Image
            src="/image_7bd387.jpg"
            alt="Aritra Mondal standing in a foggy forest among tall trees"
            fill
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="image-mask object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-night via-night/35 to-cyanGlow/10" />
        </motion.div>

        <div className="absolute bottom-0 right-0 h-[340px] w-full overflow-hidden rounded-lg border border-cyanGlow/20 bg-ink/45 shadow-neon sm:h-[390px]">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 48 }} performance={{ min: 0.5 }}>
            <color attach="background" args={["#050711"]} />
            <ambientLight intensity={0.45} />
            <pointLight position={[3, 3, 4]} intensity={18} color="#22d3ee" />
            <pointLight position={[-3, -2, 3]} intensity={12} color="#a855f7" />
            <Stars radius={30} depth={18} count={800} factor={3} saturation={0} fade speed={0.45} />
            <NeonCore />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.9} />
          </Canvas>
        </div>
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-cyanGlow"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
