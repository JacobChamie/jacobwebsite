"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const ROLES = [
  "Forward Deployed Engineer",
  "Full-Stack Developer",
  "Chess Player",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const ySpring = useSpring(yParallax, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y: ySpring }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#4F8EF7]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/[0.06] blur-[120px]" />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#4F8EF7]/[0.04] blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(79,142,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.0] tracking-[-0.04em] mb-6"
          >
            <span className="text-[#F0F4FF]">Jacob</span>
            <br />
            <span className="gradient-text">Chamie</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={item} className="h-10 mb-6 overflow-hidden">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#8892A4] font-light tracking-wide"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-[#8892A4] text-lg leading-relaxed max-w-2xl mb-10"
          >
            UC Berkeley CS — <span className="text-[#F0F4FF]/80">3.71 GPA</span>. I build
            production AI systems, full-stack applications, and high-concurrency platforms.
            Based in <span className="text-[#F0F4FF]/80">San Francisco</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <MagneticButton href="mailto:jacobchamie@gmail.com" variant="primary">
              Say Hello
            </MagneticButton>
            <MagneticButton
              href="https://github.com/JacobChamie"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/jacob-c-4850a3193/"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              View Work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#4A5568] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#4F8EF7]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
