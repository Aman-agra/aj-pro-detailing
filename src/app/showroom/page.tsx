"use client";

import { RevealLoader } from "@/components/ui/RevealLoader";
import { StaggeredGrid } from "@/components/ui/StaggeredGrid";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Showroom() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Exterior Detail", "Interior Detail", "Paint Correction", "Ceramic Coating"];

  // Mock data for the showroom - in real life this could mix with Instagram data
  const portfolioItems = [
    { id: "1", category: "Ceramic Coating", url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800", alt: "Porsche 911 Ceramic Coating", span: "row-span-2 col-span-1" as const },
    { id: "2", category: "Interior Detail", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600", alt: "BMW M4 Interior" },
    { id: "3", category: "Paint Correction", url: "https://images.unsplash.com/photo-1605810754890-e25f8aaade28?auto=format&fit=crop&q=80&w=600", alt: "Audi RS6 Paint Correction" },
    { id: "4", category: "Exterior Detail", url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600", alt: "Mercedes AMG wash" },
    { id: "5", category: "Ceramic Coating", url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800", alt: "Ferrari 488 Coating", span: "col-span-2" as const },
    { id: "6", category: "Interior Detail", url: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=600", alt: "Tesla Model S Interior" },
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
            {[1,2,3].map((i) => (
              <GlowBorderCard key={i} className="p-8">
                <div className="flex text-[var(--accent)] mb-4">
                  {"★★★★★"}
                </div>
                <p className="text-[var(--text-secondary)] italic mb-6">
                  "AJ and his team performed an absolute miracle on my black 911. The paint correction removed years of terrible washing from the previous owner, and the ceramic coating makes it look wet all the time. Couldn't be happier."
                </p>
                <p className="font-bold">- Michael T. (West Palm Beach)</p>
              </GlowBorderCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
