"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Framer motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale the Spline scene up as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  // Fade out text as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* 3D Spline Background */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ scale }}
      >
        <div className="w-full h-full scale-[1.2] opacity-80 mix-blend-screen pointer-events-auto">
          {/* Using a high-quality free Spline car/abstract scene. */}
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto text-center px-6 pointer-events-none"
        style={{ opacity: textOpacity, y: textY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Official Detailers for Christ Fellowship</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl">
          PERFECTION, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] via-[var(--accent)] to-[var(--accent-dark)]">
            DELIVERED.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto drop-shadow-md">
          High-end auto detailing, paint correction, and ceramic coating brought directly to your home or office. Experience the ultimate in automotive care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <LiquidMetalButton className="w-full sm:w-auto">
            Book Your Detail
          </LiquidMetalButton>
          <a href="#services" className="font-medium text-white/70 hover:text-white transition-colors px-6 py-4 glass-panel rounded-full overflow-hidden hover:bg-white/10">
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
