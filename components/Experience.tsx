"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Strala AI",
    role: "Software Engineer",
    period: "Jan 2026–Present · San Francisco, CA",
    type: "Full-time",
    accent: "#4F8EF7",
    bullets: [
      "Building AI agents for enterprise insurance claims workflows.",
      "Integrated LLM-driven automation into live business operations with measurable outcomes.",
      "Built full-stack client-facing solutions (React, Python/Node) on AWS/GCP with secure legacy system integration.",
      "Moved from proof-of-concept to production in under two weeks working directly with customer teams.",
    ],
    tags: ["LLMs", "React", "Python", "AWS", "GCP"],
  },
  {
    company: "Perceptronics Solutions",
    role: "Software Engineer",
    period: "Sep 2024–Jan 2026 · Los Angeles, CA",
    type: "Full-time",
    accent: "#8B5CF6",
    bullets: [
      "Building software for the U.S. Department of War.",
      "End-to-end development with Dart, Python, Java, and Firebase on consumer-facing applications.",
      "Collaborated with UI and hardware teams to deliver high-quality, user-friendly interfaces.",
    ],
    tags: ["Dart", "Flutter", "Firebase", "Python", "Java"],
  },
  {
    company: "Scale AI",
    role: "Software Engineer (Contract)",
    period: "Sep 2023–Jul 2024 · San Francisco Bay Area",
    type: "Contract",
    accent: "#10B981",
    bullets: [
      "Built AI data infrastructure — automated pipelines for preparing LLM training datasets.",
      "Developed algorithms to evaluate and validate large language model outputs.",
      "Conducted performance analysis of AI systems to enhance accuracy.",
    ],
    tags: ["Python", "LLM Evaluation", "Data Pipelines", "Generative AI"],
  },
  {
    company: "Amazon Web Services",
    role: "Software Engineer Intern",
    period: "May–Aug 2023 · Seattle, WA",
    type: "Internship",
    accent: "#F59E0B",
    bullets: [
      "Built a latency benchmarking tool now adopted across AWS teams — saves ~12 developer hours/week per team.",
      "Shipped latency-enhancing code on platforms handling 2B+ requests per second.",
    ],
    tags: ["AWS", "Python", "Performance Engineering", "Automation"],
  },
  {
    company: "Expedia Group",
    role: "Software Engineer Intern",
    period: "May–Jul 2022 · Seattle, WA",
    type: "Internship",
    accent: "#06B6D4",
    bullets: [
      "Built and shipped REST APIs used across all of Expedia search.",
      "Collaborated across engineering, UI, and marketing teams.",
    ],
    tags: ["Java", "REST APIs", "AWS"],
  },
  {
    company: "Perceptronics Solutions",
    role: "ML Research Intern",
    period: "Summer 2021 · Los Angeles, CA",
    type: "Internship",
    accent: "#8B5CF6",
    bullets: [
      "Applied GAN research to improve a catch-all image classification system.",
      "Designed and launched an image annotation tool used directly in production.",
    ],
    tags: ["GANs", "PyTorch", "AWS", "Docker", "Python"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've shipped"
          subtitle="From Fortune 500 internships to forward-deployed AI engineering."
        />

        <div ref={ref} className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F8EF7]/30 via-[#8B5CF6]/20 to-transparent hidden md:block" />

          <div className="space-y-8 md:pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative group"
              >
                <div
                  className="absolute -left-[2.65rem] top-6 w-3 h-3 rounded-full border-2 hidden md:block transition-transform duration-300 group-hover:scale-125"
                  style={{
                    borderColor: exp.accent,
                    backgroundColor: `${exp.accent}30`,
                    boxShadow: `0 0 8px ${exp.accent}40`,
                  }}
                />

                <div className="glass rounded-2xl p-6 border border-white/[0.04] glass-hover group-hover:border-white/[0.08] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-[#F0F4FF]">{exp.company}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            color: exp.accent,
                            backgroundColor: `${exp.accent}15`,
                            border: `1px solid ${exp.accent}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-[#8892A4] font-medium">{exp.role}</p>
                    </div>
                    <span className="text-xs text-[#4A5568] font-mono">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#8892A4] leading-relaxed">
                        <span className="text-[#4F8EF7]/40 mt-[3px] shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[#4A5568]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
