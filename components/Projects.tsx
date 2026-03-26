"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ChessKnightSVG from "./ChessKnightSVG";

const projects = [
  {
    id: "elostakes",
    title: "EloStakes",
    subtitle: "Real-Time Chess Wagering Platform",
    url: "https://elostakes.com",
    role: "Lead Engineer & Architect",
    description:
      "A high-concurrency chess platform where players wager coins in peer-to-peer skill-based contests. Engineered for sub-100ms move latency, secure ledger management, and legal compliance through the Arena Match model.",
    tech: ["Next.js", "PostgreSQL", "WebSockets", "Railway", "Cloudflare", "Vercel"],
    highlights: [
      { icon: "⚡", label: "Sub-100ms", sublabel: "Move latency" },
      { icon: "🔒", label: "Secure Ledger", sublabel: "Anti-fraud protection" },
      { icon: "⚖️", label: "Legal Compliant", sublabel: "Arena Match model" },
      { icon: "☁️", label: "Multi-cloud", sublabel: "Railway + Vercel + CF" },
    ],
    size: "featured",
    accent: "#4F8EF7",
    accentSecondary: "#8B5CF6",
  },
  {
    id: "chess-engine",
    title: "Chess Engine (UCLA Research)",
    subtitle: "ML Chess Engine",
    role: "Researcher",
    description:
      "Built and optimized a chess engine using machine learning techniques derived from Google's AlphaZero research, supervised by Dr. Richard Korf, Chair of Computer Science at UCLA.",
    tech: ["Python", "Neural Networks", "AlphaZero", "ML"],
    size: "medium",
    accent: "#10B981",
  },
  {
    id: "annotation-tool",
    title: "Image Annotation Tool",
    subtitle: "Production ML Tool",
    role: "Engineer",
    description:
      "Designed and launched a production image annotation tool used directly in ML training pipelines. Integrated GAN research to improve efficiency of a catch-all classification system.",
    tech: ["Python", "GANs", "AWS", "Docker"],
    size: "medium",
    accent: "#F59E0B",
  },
  {
    id: "aws-perf",
    title: "AWS Performance Tool",
    subtitle: "Internal Developer Tooling",
    role: "AWS Intern",
    description:
      "Automated pre-production performance comparison tool now available to all AWS teams — estimated to save 12+ developer hours per team per week. Deployed on systems handling 2B+ requests/sec.",
    tech: ["Python", "AWS", "Automation", "Performance"],
    size: "medium",
    accent: "#EC4899",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [eloHovered, setEloHovered] = useState(false);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="From enterprise AI systems to consumer chess platforms."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {/* EloStakes — featured, spans 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            onHoverStart={() => setEloHovered(true)}
            onHoverEnd={() => setEloHovered(false)}
            className="lg:col-span-2 elostakes-glow group relative overflow-hidden rounded-3xl border border-white/[0.07] transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(139,92,246,0.06) 100%)",
            }}
          >
            <ChessKnightSVG isHovered={eloHovered} />

            {/* Background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F8EF7]/[0.06] blur-[60px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/[0.06] blur-[40px] rounded-full" />
            </div>

            <div className="relative z-10 p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">♟</span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4F8EF7]/70 px-2.5 py-1 rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/5">
                      Lead Engineer
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 font-medium">
                      Live
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F0F4FF] mb-1">EloStakes</h3>
                  <p className="text-[#8892A4]">Real-Time Chess Wagering Platform</p>
                </div>
              </div>

              <p className="text-[#8892A4] leading-relaxed mb-6 text-sm">
                A high-concurrency chess platform engineered for sub-100ms move latency using
                WebSockets for real-time state sync. Includes a secure PostgreSQL ledger system for
                peer-to-peer coin wagering with anti-fraud protection. Deployed on Railway (backend),
                Vercel (frontend), and Cloudflare for DNS and DDoS mitigation. Structured as an
                "Arena Match" model for skill-based legal compliance.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {projects[0].highlights!.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="text-lg mb-1">{h.icon}</div>
                    <div className="text-xs font-semibold text-[#F0F4FF]/80">{h.label}</div>
                    <div className="text-[10px] text-[#4A5568] mt-0.5">{h.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Tech tags + link */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg text-[#8892A4]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#4F8EF7] hover:text-[#F0F4FF] transition-colors duration-200 font-medium"
                >
                  Visit site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-y-[-0.5px]">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Other projects */}
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative group overflow-hidden rounded-3xl border border-white/[0.06] glass-hover p-6 flex flex-col"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}0a 0%, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-xs font-semibold tracking-[0.12em] uppercase mb-2 block"
                      style={{ color: `${project.accent}99` }}
                    >
                      {project.role}
                    </span>
                    <h3 className="text-lg font-semibold text-[#F0F4FF]">{project.title}</h3>
                    <p className="text-xs text-[#4A5568] mt-0.5">{project.subtitle}</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L13 7L7 13M13 7H1" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-[#8892A4] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md text-[#4A5568]"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
