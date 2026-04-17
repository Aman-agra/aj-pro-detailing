import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";

export default function Career() {
  const roles = [
    {
      title: "Mobile Detailer",
      location: "West Palm Beach, FL",
      salary: "$40k - $60k + Tips",
      desc: "Execute exterior and interior mobile detailing services at clients' locations. Must have clean driving record and extreme attention to detail."
    },
    {
      title: "Lead Paint Correction Specialist",
      location: "West Palm Beach, FL",
      salary: "$65k - $90k",
      desc: "Lead advanced paint correction and ceramic coating installations. Requires minimum 3 years of machine polishing experience on high-end vehicles."
    },
    {
      title: "Social Media / Content Creator",
      location: "Remote / Field",
      salary: "$45k - $55k",
      desc: "Capture process videos, before/afters, and manage the Instagram and TikTok accounts for AJ Pro."
    }
  ];

  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="JOIN THE TEAM" duration={1500} />

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          WE'RE <span className="text-[var(--accent)]">HIRING.</span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Join South Florida's fastest-growing premium mobile detailing company. If you're obsessive about cars and customer service, we want you.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { title: "Competitive Pay", desc: "Above-market base salary plus performance bonuses and tips." },
          { title: "Top Tier Equipment", desc: "Work out of fully outfitted Mercedes Sprinter vans with the best tools." },
          { title: "Growth Path", desc: "Start as a detailer, grow into a lead correction specialist or manager." },
          { title: "Team Culture", desc: "A tight-knit crew of true automotive enthusiasts." },
        ].map((benefit, i) => (
          <GlowBorderCard key={i} className="p-6">
            <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm">{benefit.desc}</p>
          </GlowBorderCard>
        ))}
      </section>

      {/* Jobs */}
      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-10 text-center">Open Positions</h2>
        
        <div className="space-y-6 mb-20">
          {roles.map((role, i) => (
            <GlowBorderCard key={i} className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold font-display">{role.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">{role.location}</span>
                </div>
                <p className="text-[var(--accent)] font-medium mb-4">{role.salary}</p>
                <p className="text-[var(--text-secondary)] max-w-2xl">{role.desc}</p>
              </div>
              <LiquidMetalButton className="shrink-0 whitespace-nowrap">
                Apply Now
              </LiquidMetalButton>
            </GlowBorderCard>
          ))}
        </div>

        {/* Application Form Placeholder */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">General Application</h2>
          <form className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Desired Position</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors text-white appearance-none">
                <option value="" className="bg-[var(--bg-dark)]">Select a position...</option>
                {roles.map(r => <option key={r.title} value={r.title} className="bg-[var(--bg-dark)]">{r.title}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Briefly describe your experience</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors resize-none" />
            </div>

            <LiquidMetalButton className="w-full" type="submit">
              Submit Application
            </LiquidMetalButton>
          </form>
        </div>
      </section>
    </div>
  );
}
