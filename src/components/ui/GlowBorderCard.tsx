"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function GlowBorderCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={twMerge(
        "relative group rounded-2xl p-[1px] overflow-hidden bg-white/5",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative h-full w-full rounded-2xl bg-[var(--bg-dark)] border border-white/10 p-6 backdrop-blur-2xl transition-all duration-500 group-hover:bg-white/[0.03]">
        {children}
      </div>
    </motion.div>
  );
}
