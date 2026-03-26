"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

const contacts = [
  {
    label: "Email",
    value: "jchamie@berkeley.edu",
    href: "mailto:jchamie@berkeley.edu",
    icon: "✉",
    color: "#4F8EF7",
  },
  {
    label: "GitHub",
    value: "github.com/JacobChamie",
    href: "https://github.com/JacobChamie",
    icon: "⌥",
    color: "#8B5CF6",
    external: true,
  },
  {
    label: "Phone",
    value: "818-383-1607",
    href: "tel:8183831607",
    icon: "☎",
    color: "#10B981",
  },
  {
    label: "Project",
    value: "EloStakes.com",
    href: "https://elostakes.com",
    icon: "♟",
    color: "#F59E0B",
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(79,142,247,0.05) 0%, rgba(139,92,246,0.05) 100%)",
          }}
        >
          {/* Background orbs */}
          <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-[#4F8EF7]/[0.05] blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[10%] w-[350px] h-[350px] bg-[#8B5CF6]/[0.05] blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
                Contact
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#F0F4FF] tracking-tight mb-4">
                Let's build
                <br />
                <span className="gradient-text">something great</span>
              </h2>
              <p className="text-[#8892A4] text-lg max-w-xl mx-auto leading-relaxed mb-10">
                Whether you're building an AI product, need a forward deployed engineer, or want to
                talk strategy — I'm all ears.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-14">
                <MagneticButton href="mailto:jchamie@berkeley.edu" variant="primary">
                  Send me an email
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/JacobChamie"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </MagneticButton>
              </div>
            </motion.div>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden rounded-2xl p-4 text-center border border-white/[0.05] transition-all duration-300 group"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                    style={{ background: `${c.color}0a` }}
                  />
                  <div
                    className="text-xl mb-2"
                    style={{ color: `${c.color}99` }}
                  >
                    {c.icon}
                  </div>
                  <div className="text-xs font-medium text-[#F0F4FF]/50 mb-1">{c.label}</div>
                  <div className="text-xs text-[#4A5568] truncate">{c.value}</div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 mt-10 px-2"
        >
          <span className="text-xs text-[#4A5568]">
            © 2025 Jacob Chamie. Built with Next.js & Framer Motion.
          </span>
          <span className="text-xs text-[#4A5568]">
            jchamie@berkeley.edu
          </span>
        </motion.div>
      </div>
    </section>
  );
}
