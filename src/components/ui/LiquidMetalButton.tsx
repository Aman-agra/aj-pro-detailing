"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function LiquidMetalButton({
  children,
  onClick,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        "relative overflow-hidden rounded-full font-sans font-semibold text-white tracking-wide transition-all group",
        "bg-gradient-to-b from-white/20 to-transparent",
        "shadow-[inset_0px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.4)]",
        "border border-white/10 px-8 py-4 backdrop-blur-xl",
        className
      )}
    >
      <span className="relative z-10 mix-blend-exclusion">{children}</span>
      <div
        className="absolute inset-0 bg-[var(--accent)] opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-[-50%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
    </motion.button>
  );
}
