"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const interests = [
  {
    icon: "♟",
    title: "Chess",
    color: "#4F8EF7",
    description:
      "Competitive chess since childhood — thinking several moves ahead, evaluating tradeoffs under pressure, finding non-obvious lines. The same habits power system architecture and FDE work. Also why I built EloStakes.",
    tags: ["EloStakes Creator", "Strategy", "Pattern Recognition"],
  },
  {
    icon: "🏎",
    title: "Track Driving",
    color: "#F59E0B",
    description:
      "Chasing better lap times at Laguna Seca and Buttonwillow. Performance driving is engineering in real-time — managing tire load, braking points, and throttle application with instant feedback. The pursuit of tenths is addicting.",
    tags: ["Laguna Seca", "Buttonwillow", "Lap Times"],
  },
  {
    icon: "🗣",
    title: "Languages",
    color: "#10B981",
    description:
      "Currently learning Arabic, Spanish, and Russian. Each language is a different OS for thinking — and the process of acquiring one keeps pattern recognition sharp.",
    tags: ["Arabic", "Spanish", "Russian"],
  },
  {
    icon: "🧠",
    title: "Strategy & Systems",
    color: "#8B5CF6",
    description:
      "Drawn to problems where strategic clarity creates outsized outcomes. Chess, driving, language — each one is a system with rules, feedback loops, and compound returns on deliberate practice.",
    tags: ["Systems Thinking", "Game Theory", "Optimization"],
  },
];

const funFacts = [
  { emoji: "🏫", text: "UC Berkeley CS, 3.71 GPA" },
  { emoji: "📍", text: "Based in San Francisco" },
  { emoji: "♟", text: "Built a real-time chess wagering platform" },
  { emoji: "🤖", text: "Shipping AI agents in production" },
  { emoji: "🏎", text: "Laguna Seca & Buttonwillow" },
  { emoji: "🌍", text: "Learning Arabic, Spanish & Russian" },
];

export default function Personal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="personal" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Personal"
          title="Beyond the terminal"
          subtitle="What I do when I'm not shipping."
        />

        <div ref={ref} className="space-y-6">
          {/* Interest cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.05] p-6 glass-hover group"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${interest.color}0d 0%, transparent 70%)` }}
                />
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${interest.color}, transparent)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
                      style={{ background: `${interest.color}15`, border: `1px solid ${interest.color}25` }}
                    >
                      {interest.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[#F0F4FF]">{interest.title}</h3>
                  </div>

                  <p className="text-sm text-[#8892A4] leading-relaxed mb-4">
                    {interest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {interest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg font-medium"
                        style={{
                          color: interest.color,
                          background: `${interest.color}10`,
                          border: `1px solid ${interest.color}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun facts grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                className="rounded-2xl p-3 text-center glass border border-white/[0.04] glass-hover"
              >
                <div className="text-2xl mb-2">{fact.emoji}</div>
                <div className="text-xs text-[#4A5568] leading-tight">{fact.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
