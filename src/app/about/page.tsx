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
              AJ Pro Mobile Detailing was founded on the principle that luxury vehicle care should come to you. As the <strong>Official Detailers for Christ Fellowship</strong>, we have built a reputation for trust, excellence, and uncompromising service in the West Palm Beach community.
            </p>
            <p>
              Based in Palm Beach County, we cater to luxury vehicle owners who demand the absolute best. Our team is fully bilingual (English & Español), ensuring clear communication and a personalized experience for every client.
            </p>
            <p>
              From custom exotics to luxury family fleets, we bring the showroom experience directly to your driveway or office. We don't just clean cars; we restore and protect your investment.
            </p>
          </div>
          
          <div className="mt-10">
            <LiquidMetalButton>Meet the Team</LiquidMetalButton>
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden glass-panel">
          {/* Add a nice abstract or shop image here */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800" 
            alt="AJ Pro Detailing Founder"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="font-display font-bold text-3xl mb-2">AJ</p>
            <p className="text-[var(--accent)] tracking-widest text-sm font-semibold uppercase">Founder & Official Christ Fellowship Detailer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-[var(--bg-darker)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">DRIVEN BY VALUES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap size={32}/>, title: "Precision", desc: "Every crevice, every stitch, handled with extreme care." },
              { icon: <ShieldCheck size={32}/>, title: "Official Trust", desc: "Trusted by organizations like Christ Fellowship and local luxury owners." },
              { icon: <HeartHandshake size={32}/>, title: "Bilingual Service", desc: "Clear communication in both English and Español." },
              { icon: <Lightbulb size={32}/>, title: "Premium Tech", desc: "Using the latest graphene and ceramic technologies." },
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
