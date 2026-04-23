import { RevealLoader } from "@/components/ui/RevealLoader";
import { ParallaxHero } from "@/components/ui/ParallaxHero";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { StaggeredGrid } from "@/components/ui/StaggeredGrid";
import { PageReveal } from "@/components/ui/PageReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Shield, Sparkles, Droplets } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const services = [
    { title: "Exterior Detail", icon: <Sparkles className="text-[var(--accent)] mb-4" size={32} />, desc: "Deep wash, clay bar, and sealant for a showroom shine." },
    { title: "Interior Detail", icon: <Shield className="text-[var(--accent)] mb-4" size={32} />, desc: "Steam cleaning, extraction, and leather conditioning." },
    { title: "Paint Correction", icon: <Sparkles className="text-[var(--accent)] mb-4" size={32} />, desc: "Removal of swirls, scratches, and oxidation." },
    { title: "Ceramic Coating", icon: <Droplets className="text-[var(--accent)] mb-4" size={32} />, desc: "Multi-year protection with extreme gloss and hydrophobics." },
    { title: "Boat Detailing", icon: <Droplets className="text-[var(--accent)] mb-4" size={32} />, desc: "Gel coat restoration and oxidation removal." },
    { title: "Fleet Services", icon: <Shield className="text-[var(--accent)] mb-4" size={32} />, desc: "Maintenance plans for commercial vehicles." },
  ];

  const galleryItems = [
    { id: "1", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/AJ-PRO-Mobile-Detailing-1.webp", alt: "Detailing Process", span: "row-span-2 col-span-2" as const },
    { id: "2", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/grey-ferrari.webp", alt: "Premium Detail" },
    { id: "3", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/AJ-PRO-Mobile-Detailing-1.webp", alt: "Paint Correction" },
    { id: "4", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/grey-ferrari.webp", alt: "Ceramic Coating" },
  ];

  return (
    <div className="relative">
      <RevealLoader text="AJ PRO" duration={2000} />

      <PageReveal delay={1.8}>
        {/* Parallax Hero Section */}
        <ParallaxHero />

        {/* Services Section */}
        <section id="services" className="py-32 px-6 bg-[var(--bg-darker)]">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6">OUR SERVICES</h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                We specialize in restoring, protecting, and maintaining your vehicle's value using industry-leading products and techniques.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <GlowBorderCard key={i} delay={i * 0.1}>
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6">{service.desc}</p>
                  <div className="flex items-center gap-2 text-[var(--accent)] font-medium group-hover:gap-3 transition-all cursor-pointer">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </GlowBorderCard>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio/Instagram Teaser */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black mb-4">THE SHOWROOM</h2>
                <p className="text-[var(--text-secondary)] max-w-xl">
                  Recent transformations from our team. Follow us on Instagram for daily updates.
                </p>
              </div>
              <LiquidMetalButton>
                View Full Portfolio
              </LiquidMetalButton>
            </FadeIn>
            
            <StaggeredGrid items={galleryItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--accent)] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darker)] to-transparent" />
          
          <FadeIn className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-24 rounded-3xl">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6">READY FOR PERFECTION?</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10">
              Spots are limited. Secure your appointment today and experience the AJ Pro difference.
            </p>
            
            <form className="max-w-md mx-auto grid grid-cols-1 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[var(--accent)] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[var(--accent)] transition-colors"
              />
              <LiquidMetalButton className="w-full mt-2">
                Request a Call
              </LiquidMetalButton>
            </form>
          </FadeIn>
        </section>
      </PageReveal>
    </div>
  );
}
