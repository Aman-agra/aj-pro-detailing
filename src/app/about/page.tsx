import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { Zap, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="OUR STORY" duration={1500} />

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
            BORN FROM A PASSION FOR <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)]">
              PERFECTION.
            </span>
          </h1>
          <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              AJ Pro Mobile Detailing started with a simple belief: the luxury detailing experience shouldn't be confined to a shop. We brings the showroom to your driveway, combining state-of-the-art products with unparalleled convenience.
            </p>
            <p>
              Based in West Palm Beach, we cater to enthusiasts and professionals who demand nothing but the absolute best for their vehicles. From high-end exotics to luxury family SUVs, our team treats every vehicle with the same meticulous attention to detail.
            </p>
            <p>
              We don't just clean cars; we restore, protect, and enhance your investment.
            </p>
          </div>
          
          <div className="mt-10">
            <LiquidMetalButton>Let's Detail Your Fleet</LiquidMetalButton>
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden glass-panel">
          {/* Add a nice abstract or shop image here */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800" 
            alt="AJ Pro Detailing Service"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="font-display font-bold text-3xl mb-2">AJ</p>
            <p className="text-[var(--accent)] tracking-widest text-sm font-semibold">FOUNDER & MASTER DETAILER</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-[var(--bg-darker)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">OUR CORE VALUES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap size={32}/>, title: "Speed & Precision", desc: "We value your time as much as your vehicle." },
              { icon: <ShieldCheck size={32}/>, title: "Uncompromising Quality", desc: "We use only the finest products and proven techniques." },
              { icon: <HeartHandshake size={32}/>, title: "Integrity", desc: "Honest communication and transparent pricing always." },
              { icon: <Lightbulb size={32}/>, title: "Innovation", desc: "Constantly testing new ceramic technologies and methods." },
            ].map((v, i) => (
              <GlowBorderCard key={i} delay={i * 0.1}>
                <div className="text-[var(--accent)] mb-6">{v.icon}</div>
                <h3 className="font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-[var(--text-secondary)]">{v.desc}</p>
              </GlowBorderCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
