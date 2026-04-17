"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Fade in intro
    gsap.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 1.5 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Background moves very slow
    tl.to(bgRef.current, {
      yPercent: 30,
      ease: "none"
    }, 0);

    // Midground moves slightly faster
    tl.to(midRef.current, {
      yPercent: 15,
      ease: "none"
    }, 0);

    // Foreground moves fast (can even move up slightly relative to container to cover)
    tl.to(fgRef.current, {
      yPercent: -10,
      ease: "none"
    }, 0);

    // Text moves up very fast to disappear
    tl.to(textRef.current, {
      yPercent: 50,
      opacity: 0,
      ease: "none"
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flexItems flex items-center justify-center pt-24 opacity-0"
    >
      {/* Background Layer */}
      <div 
        ref={bgRef}
        className="absolute inset-[-10%] w-[120%] h-[120%] z-0"
      >
        <Image
          src="/assets/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Midground Layer */}
      <div 
        ref={midRef}
        className="absolute inset-[-5%] w-[110%] h-[110%] z-10 drop-shadow-2xl"
        style={{
          clipPath: "polygon(0 35%, 25% 45%, 55% 35%, 100% 45%, 100% 100%, 0 100%)"
        }}
      >
        <Image
          src="/assets/bg.jpg"
          alt="Midground"
          fill
          className="object-cover contrast-125 brightness-110"
        />
        <div className="absolute inset-0 top-[35%] bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Foreground Layer */}
      <div 
        ref={fgRef}
        className="absolute inset-[-5%] w-[110%] h-[110%] z-30 drop-shadow-2xl"
        style={{
          clipPath: "polygon(0 75%, 35% 65%, 65% 80%, 100% 70%, 100% 100%, 0 100%)"
        }}
      >
        <Image
          src="/assets/bg.jpg"
          alt="Foreground"
          fill
          className="object-cover scale-110 contrast-150 saturate-150 brightness-75 blur-[1px]"
        />
        <div className="absolute inset-0 top-[65%] bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/90 to-transparent" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-20 max-w-4xl mx-auto text-center px-6 mt-[-10vh]">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="text-sm font-medium tracking-wide text-white/80">WEST PALM BEACH'S PREMIER MOBILE DETAILER</span>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LiquidMetalButton className="w-full sm:w-auto">
            Book Your Detail
          </LiquidMetalButton>
          <a href="#services" className="font-medium text-white/70 hover:text-white transition-colors px-6 py-4 glass-panel rounded-full overflow-hidden hover:bg-white/10">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
