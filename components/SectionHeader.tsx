"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="mb-16"
    >
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4FF] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8892A4] text-lg max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
