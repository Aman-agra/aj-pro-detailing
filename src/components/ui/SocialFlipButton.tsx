"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function SocialFlipButton({ 
  icon, 
  href, 
  className 
}: { 
  icon: ReactNode; 
  href: string; 
  className?: string 
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block perspective-1000">
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className={twMerge(
          "relative w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors preserve-3d cursor-pointer",
          className
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          {icon}
        </div>
        <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
          {icon}
        </div>
      </motion.div>
    </a>
  );
}
