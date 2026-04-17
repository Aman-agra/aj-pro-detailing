"use client";

import { motion } from 'framer-motion';

export function LightLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-[var(--bg-darker)] mix-blend-multiply opacity-50" />
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, var(--accent) 50%, transparent 55%),
                            linear-gradient(-45deg, transparent 45%, var(--accent-light) 50%, transparent 55%)`,
          backgroundSize: '200% 200%',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}
