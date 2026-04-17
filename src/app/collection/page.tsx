import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { FlipFadeText } from "@/components/ui/FlipFadeText";
import { Check } from "lucide-react";

export default function Collection() {
  const memberships = [
    {
      name: "Starter",
      price: "$199",
      period: "/ mo",
      desc: "Perfect for maintaining your vehicle's appearance year-round.",
      features: ["1 Maintenance Detail per month", "Priority scheduling", "10% off a la carte services"],
      popular: false
    },
    {
      name: "Professional",
      price: "$349",
      period: "/ mo",
      desc: "Keep your daily driver in showroom condition always.",
      features: ["2 Maintenance Details per month", "Quarterly sealant upgrade", "Priority scheduling", "15% off a la carte services"],
      popular: true
    },
    {
      name: "Premium",
      price: "$599",
      period: "/ mo",
      desc: "The ultimate concierge service for enthusiasts.",
      features: ["Bi-weekly details (4/mo)", "Unlimited interior spot cleaning", "Annual exterior correction touch-up", "20% off all ceramic coatings"],
      popular: false
    }
  ];

  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="MEMBERSHIPS" duration={1500} />

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          <FlipFadeText words={["SUBSCRIPTIONS", "PACKAGES", "LOYALTY"]} />
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Join the AJ Pro Collection and let us manage your vehicle's appearance automatically. Set it, forget it, and always drive a pristine car.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {memberships.map((tier, i) => (
            <GlowBorderCard key={tier.name} delay={i * 0.1} className={`p-8 md:p-10 ${tier.popular ? 'border-[var(--accent)] relative' : ''}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 h-10">{tier.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black">{tier.price}</span>
                <span className="text-[var(--text-muted)] font-medium">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-10 h-48">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <LiquidMetalButton className="w-full text-sm">
                Subscribe Now
              </LiquidMetalButton>
            </GlowBorderCard>
          ))}
        </div>
      </section>

      {/* Fleet Note */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="glass-panel p-12 rounded-3xl">
          <h2 className="text-3xl font-display font-bold mb-4">Enterprise & Fleet Maintenance</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            We offer custom billing and discounted rates for businesses managing 5 or more vehicles. Keep your brand looking sharp on the road.
          </p>
          <a href="/contact" className="inline-flex font-bold text-[var(--accent)] hover:text-white transition-colors underline underline-offset-4">
            Contact us for a fleet quote
          </a>
        </div>
      </section>
    </div>
  );
}
