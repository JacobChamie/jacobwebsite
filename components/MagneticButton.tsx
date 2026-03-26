"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  target,
  rel,
  onClick,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    setPosition({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-[#4F8EF7] text-white hover:bg-[#3d7de0] shadow-[0_0_20px_rgba(79,142,247,0.3)]",
    secondary:
      "bg-transparent border border-white/15 text-[#F0F4FF]/80 hover:border-white/30 hover:text-[#F0F4FF]",
    ghost:
      "bg-transparent text-[#8892A4] hover:text-[#F0F4FF]",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={combined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={combined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
