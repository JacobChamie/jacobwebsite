"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Education" title="Academic foundation" />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* UC Berkeley */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-8 group"
            style={{ background: "linear-gradient(135deg, rgba(79,142,247,0.05) 0%, rgba(255,255,255,0.02) 100%)" }}
          >
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4F8EF7]/[0.06] blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#4F8EF7] px-3 py-1.5 rounded-full border border-[#4F8EF7]/20 bg-[#4F8EF7]/5 mb-6">
                <span>🎓</span>
                University of California, Berkeley
              </div>

              <h3 className="text-2xl font-bold text-[#F0F4FF] mb-2">
                B.S. Computer Science
              </h3>
              <p className="text-[#8892A4] mb-6">Class of 2024</p>

              {/* GPA highlight */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 rounded-2xl p-4 text-center"
                  style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.15)" }}>
                  <div className="text-3xl font-bold gradient-text-blue mb-1">3.71</div>
                  <div className="text-xs text-[#8892A4] tracking-wide">Cumulative GPA</div>
                </div>
                <div className="flex-1 rounded-2xl p-4 text-center"
                  style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}>
                  <div className="text-3xl font-bold mb-1" style={{
                    background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>CS</div>
                  <div className="text-xs text-[#8892A4] tracking-wide">Major</div>
                </div>
              </div>

              <p className="text-sm text-[#8892A4] leading-relaxed">
                Rigorous curriculum spanning algorithms, AI, compilers, cybersecurity, and
                mathematical foundations — paired with hands-on research and industry experience
                from freshman year onward.
              </p>
            </div>
          </motion.div>

          {/* UCLA Research */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-8"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {/* Accent glow */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#10B981]/[0.05] blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#10B981] px-3 py-1.5 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 mb-6">
                <span>🔬</span>
                Academic Research
              </div>

              <h3 className="text-2xl font-bold text-[#F0F4FF] mb-2">
                CS Research at UCLA
              </h3>
              <p className="text-[#8892A4] mb-4">Summer 2019</p>

              <div className="space-y-3 mb-4">
                <div className="flex gap-3 text-sm text-[#8892A4] leading-relaxed">
                  <span className="text-[#10B981]/50 mt-[3px] shrink-0">›</span>
                  Worked directly with Dr. Richard Korf, Chair of CS at UCLA.
                </div>
                <div className="flex gap-3 text-sm text-[#8892A4] leading-relaxed">
                  <span className="text-[#10B981]/50 mt-[3px] shrink-0">›</span>
                  Created and optimized a Chess Engine using Machine Learning techniques derived from Google's AlphaZero research.
                </div>
                <div className="flex gap-3 text-sm text-[#8892A4] leading-relaxed">
                  <span className="text-[#10B981]/50 mt-[3px] shrink-0">›</span>
                  Applied neural networks and search algorithms to achieve competitive play strength.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Neural Networks", "AlphaZero", "Python", "Chess AI", "ML Research"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[#4A5568]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
