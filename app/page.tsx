import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-night text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-radial-grid opacity-80" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(120deg,rgba(5,7,17,.75),rgba(5,7,17,.25),rgba(5,7,17,.9))]" />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
