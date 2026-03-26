"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "Dart"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & Cloud", items: ["Node.js", "AWS", "GCP", "Docker", "Kubernetes", "Firebase"] },
  { category: "AI/ML", items: ["LLMs", "RAG", "Model Evaluation", "GANs", "Data Pipelines"] },
  { category: "Data", items: ["PostgreSQL", "Redis", "REST APIs", "WebSockets", "Railway"] },
];

const courseWork = [
  "Data Structures & Algorithms",
  "Introduction to AI",
  "Compilers",
  "Software Engineering",
  "Cybersecurity",
  "Internet Protocols",
  "Linear Algebra",
  "Game Theory",
  "Discrete Math & Probability",
  "Structure & Interpretation of Programs",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="Building systems that matter"
          subtitle="Software engineer at the intersection of AI, product, and infrastructure."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="space-y-5"
          >
            <p className="text-[#8892A4] text-lg leading-[1.8]">
              UC Berkeley CS graduate (<span className="text-[#4F8EF7] font-semibold">3.71 GPA</span>),
              based in <span className="text-[#F0F4FF]">San Francisco</span>. I&apos;ve shipped production
              systems at <span className="text-[#F0F4FF]">AWS</span>,{" "}
              <span className="text-[#F0F4FF]">Expedia</span>, and{" "}
              <span className="text-[#F0F4FF]">Scale AI</span>, and currently build AI agents for
              enterprise insurance as a Forward Deployed Engineer at{" "}
              <span className="text-[#F0F4FF]">Strala</span>.
            </p>
            <p className="text-[#8892A4] text-lg leading-[1.8]">
              I move fast — proof-of-concept to production in under two weeks. Whether it&apos;s
              LLM pipelines, real-time WebSocket engines, or consumer UIs, I focus on work that
              ships and creates measurable outcomes.
            </p>

            {/* Contact row */}
            <div className="flex flex-col gap-2 pt-2">
              {[
                { icon: "✉", label: "jacobchamie@gmail.com", href: "mailto:jacobchamie@gmail.com" },
                { icon: "☏", label: "818-383-1607", href: "tel:8183831607" },
                { icon: "⌥", label: "github.com/JacobChamie", href: "https://github.com/JacobChamie" },
                { icon: "in", label: "linkedin.com/in/jacob-c-4850a3193", href: "https://www.linkedin.com/in/jacob-c-4850a3193/" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-[#8892A4] hover:text-[#4F8EF7] transition-colors duration-200"
                >
                  <span className="text-[#4F8EF7]/60 w-4 text-center font-medium">{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="space-y-5"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-5 border border-white/[0.04] glass-hover"
              >
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4F8EF7]/70 mb-3 block">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#8892A4] hover:text-[#F0F4FF] hover:border-white/[0.12] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass rounded-2xl p-5 border border-white/[0.04]"
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8B5CF6]/70 mb-3 block">
                Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {courseWork.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.04] text-[#4A5568]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
