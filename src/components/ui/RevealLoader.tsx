"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function RevealLoader({ text = "AJ PRO", duration = 1500 }: { text?: string, duration?: number }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-darker)] overflow-hidden"
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000 - 0.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-white/10 blur-sm pointer-events-none"
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter"
        >
          {text}
        </motion.h1>
      </div>
    </motion.div>
  );
}
