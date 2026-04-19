import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { FlipFadeText } from "@/components/ui/FlipFadeText";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { LineHoverLink } from "@/components/ui/LineHoverLink";
import { ShowcaseModel } from "@/components/ui/ShowcaseModel";
import { Sparkles, Shield, Droplets, Car, Check } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      id: "exterior",
      title: "Mini Exterior Detail",
      icon: <Sparkles className="text-[var(--accent)]" size={40} />,
      price: "From $90",
      time: "1-2 Hours",
      features: [
        "Foam hand wash & dry",
        "Bug and tar removal",
        "Clean tires, wheels & wheel wells",
        "Dress tires & trim",
        "Clean exterior windows",
        "High-grade spray sealant",
        "Official Christ Fellowship detailer"
      ]
    },
    {
      id: "interior",
      title: "Standard Interior Detail",
      icon: <Car className="text-[var(--accent)]" size={40} />,
      price: "From $70",
      time: "2-3 Hours",
      features: [
        "Thorough vacuuming",
        "Wipe down all hard surfaces",
        "UV protection on plastics/vinyl",
        "Clean interior windows & mirrors",
        "Pet hair & sand removal specialized",
        "Leather cleaning & conditioning",
        "Servicio en Español disponible"
      ]
    },
    {
      id: "paint",
      title: "Premium Paint Correction",
      icon: <Shield className="text-[var(--accent)]" size={40} />,
      price: "From $500",
      time: "1-2 Days",
      features: [
        "Full exterior decontamination",
        "Clay bar treatment",
        "Removing swirl marks & scratches",
        "1 or 2-step machine polishing",
        "Diamond-like gloss restoration",
        "Headlight restoration included"
      ]
    },
    {
      id: "ceramic",
      title: "Lifetime Ceramic Coating",
      icon: <Droplets className="text-[var(--accent)]" size={40} />,
      price: "From $500",
      time: "1-3 Days",
      features: [
        "Includes paint correction",
        "Long-term surface protection",
        "Extreme water beading",
        "Protects against UV & oxidation",
        "Applied to glass & wheel faces",
        "Engine bay cleaning included"
      ]
    }
  ];

  return (
    <div className="relative pt-24">
      <RevealLoader text="OUR SERVICES" duration={1800} />

      {/* Hero */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          <FlipFadeText words={["SERVICES", "DETAILING", "PROTECTION", "PERFECTION"]} />
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12">
          We offer a comprehensive range of premium detailing services tailored to protect your investment and keep your vehicle looking factory fresh.
        </p>
      </section>

      {/* 3D Model Interactive Demo */}
      <section className="w-full px-6 mb-20 max-w-7xl mx-auto rounded-3xl overflow-hidden glass-panel border border-white/5 relative">
        <ShowcaseModel />
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((svc, i) => (
            <GlowBorderCard key={svc.id} delay={i * 0.1} className="p-8 md:p-12">
              <div id={svc.id} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10">
                  {svc.icon}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h2 className="text-3xl font-bold font-display">{svc.title}</h2>
                    <div className="flex flex-col sm:text-right">
                      <span className="text-[var(--accent)] font-bold text-xl">{svc.price}</span>
                      <span className="text-sm text-[var(--text-muted)]">Est. Time: {svc.time}</span>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-white/10 my-6" />
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-[var(--text-secondary)]">
                    {svc.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <LiquidMetalButton className="w-full">
                    Book This Service
                  </LiquidMetalButton>
                </div>
              </div>
            </GlowBorderCard>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-black text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {[
            { q: "Do you need access to water and electricity?", a: "No, our mobile detailing vans are fully equipped with spot-free water tanks and generators. We bring everything needed to detail your vehicle." },
            { q: "How far in advance should I book?", a: "We typically book 1-2 weeks in advance, especially during spring and summer months. However, contact us directly for any immediate availability or cancellations." },
            { q: "Will bad weather affect my appointment?", a: "As a mobile service, we are dependent on weather conditions. If severe rain or wind is in the forecast, we will contact you to reschedule at your earliest convenience." }
          ].map((faq, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/[0.08] transition-colors cursor-default">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-[var(--accent)]">Q.</span> {faq.q}
              </h3>
              <p className="text-[var(--text-secondary)] pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
