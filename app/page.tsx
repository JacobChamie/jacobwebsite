import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Personal from "@/components/Personal";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Personal />

      {/* Footer */}
      <footer className="py-10 px-6 text-center">
        <p className="text-xs text-[#4A5568]">© 2025 Jacob Chamie · jacobchamie@gmail.com</p>
      </footer>
    </main>
  );
}
