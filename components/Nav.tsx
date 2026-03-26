"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Personal", href: "#personal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="font-semibold text-sm tracking-widest uppercase text-[#F0F4FF]/80 hover:text-[#4F8EF7] transition-colors duration-200">
          JC
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#8892A4] hover:text-[#F0F4FF] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:jacobchamie@gmail.com"
          className="hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-[#4F8EF7]/30 text-[#4F8EF7] hover:bg-[#4F8EF7]/10 hover:border-[#4F8EF7]/60 transition-all duration-200"
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-[#F0F4FF]/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-5 h-px bg-[#F0F4FF]/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-[#F0F4FF]/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto glass border border-white/[0.06] rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-[#8892A4] hover:text-[#F0F4FF] transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
