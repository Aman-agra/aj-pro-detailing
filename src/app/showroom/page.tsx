"use client";

import { RevealLoader } from "@/components/ui/RevealLoader";
import { StaggeredGrid } from "@/components/ui/StaggeredGrid";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Showroom() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Exterior Detail", "Interior Detail", "Paint Correction", "Ceramic Coating"];

  const portfolioItems = [
    { id: "1", category: "Ceramic Coating", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/grey-ferrari.webp", alt: "Ferrari Ceramic Coating", span: "row-span-2 col-span-1" as const },
    { id: "2", category: "Interior Detail", url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80", alt: "Premium Interior Detail" },
    { id: "3", category: "Paint Correction", url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=80", alt: "Audi Paint Correction" },
    { id: "4", category: "Exterior Detail", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/AJ-PRO-Mobile-Detailing-1.webp", alt: "Exterior Wash & Detail" },
    { id: "5", category: "Ceramic Coating", url: "https://ajpromobiledetailing.com/wp-content/uploads/2025/08/grey-ferrari.webp", alt: "Ferrari Paint Correction", span: "col-span-2" as const },
    { id: "6", category: "Interior Detail", url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80", alt: "Luxury Interior Care" },
  ];

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="PORTFOLIO" duration={1500} />

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          SEE OUR <span className="text-[var(--accent)]">WORK.</span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12">
          Browse through our recent projects. From maintenance washes to multi-day paint corrections and coatings.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={twMerge(
                "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                filter === cat 
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white" 
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 max-w-7xl mx-auto min-h-[60vh]">
        <StaggeredGrid items={filteredItems} key={filter} />
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 mt-16 bg-[var(--bg-darker)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16">CLIENT EXPERIENCES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Michael T.", location: "West Palm Beach", review: "AJ and his team performed an absolute miracle on my black 911. The paint correction removed years of terrible washing and the ceramic coating makes it look wet all the time. Couldn't be happier." },
              { name: "Sarah K.", location: "Boca Raton", review: "Booked the full interior detail for my Range Rover after my kids destroyed it. I genuinely couldn't believe it was the same car. Super professional, came to my house, done in 4 hours." },
              { name: "Carlos M.", location: "Lake Worth", review: "Had my Tesla Model Y done with the ceramic package. The hydrophobic coating is insane — water just rolls right off. Worth every penny for the long-term protection alone." },
            ].map((t, i) => (
              <GlowBorderCard key={i} className="p-8">
                <div className="flex text-[var(--accent)] mb-4">
                  {"★★★★★"}
                </div>
                <p className="text-[var(--text-secondary)] italic mb-6">
                  "{t.review}"
                </p>
                <p className="font-bold">- {t.name} <span className="font-normal text-[var(--text-muted)]">({t.location})</span></p>
              </GlowBorderCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
