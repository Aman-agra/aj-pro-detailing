"use client";

import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { motion } from "framer-motion";

export default function Approach() {
  const steps = [
    { num: "01", title: "Assessment", desc: "We evaluate your vehicle's paint condition, discussing specific concerns and selecting the optimal service." },
    { num: "02", title: "Preparation", desc: "A meticulous multi-step decontamination wash utilizing snow foam, iron fallout remover, and clay bar treatment." },
    { num: "03", title: "Correction", desc: "Machine polishing to remove swirls, scratches, and oxidation, restoring the clear coat's true depth." },
    { num: "04", title: "Protection", desc: "Application of premium ceramic coatings or sealants to lock in the finish and provide extreme hydrophobics." },
    { num: "05", title: "Delivery", desc: "A final multi-point inspection under specialized lighting before handing the keys back to you." },
  ];

  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="OUR APPROACH" duration={1500} />

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          THE <span className="text-[var(--accent)]">AJ PRO</span> METHOD
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Detailing isn't just washing a car. It's a systematic science of automotive aesthetics. Here is how we guarantee perfection every single time.
        </p>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative">
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-transparent opacity-20 hidden sm:block" />
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col sm:flex-row items-center gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <div className="flex-1 w-full flex sm:justify-end">
                {i % 2 === 0 && (
                  <GlowBorderCard className="w-full sm:w-[90%] p-8">
                    <h3 className="font-display font-bold text-2xl mb-2">{step.title}</h3>
                    <p className="text-[var(--text-secondary)]">{step.desc}</p>
                  </GlowBorderCard>
                )}
              </div>
              
              <div className="shrink-0 w-14 h-14 rounded-full bg-[var(--bg-dark)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-xl relative z-10 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                {step.num}
              </div>

              <div className="flex-1 w-full flex sm:justify-start">
                {i % 2 !== 0 && (
                  <GlowBorderCard className="w-full sm:w-[90%] p-8">
                    <h3 className="font-display font-bold text-2xl mb-2">{step.title}</h3>
                    <p className="text-[var(--text-secondary)]">{step.desc}</p>
                  </GlowBorderCard>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-display font-bold mb-8">Ready to experience the process yourself?</h2>
        <LiquidMetalButton>Schedule Your Appointment</LiquidMetalButton>
      </section>
    </div>
  );
}
