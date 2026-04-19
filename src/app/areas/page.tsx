import { RevealLoader } from "@/components/ui/RevealLoader";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Areas() {
  const locations = [
    { city: "West Palm Beach", distance: "Main Hub", status: "Available" },
    { city: "Jupiter", distance: "North County", status: "Available" },
    { city: "Boca Raton", distance: "South County", status: "Available" },
    { city: "Wellington", distance: "West County", status: "Available" },
    { city: "Lake Park", distance: "East County", status: "Available" },
    { city: "North Palm Beach", status: "Available" },
    { city: "Palm Beach Gardens", distance: "North County", status: "Available" },
    { city: "Lake Worth", status: "Available" },
    { city: "Royal Palm Beach", status: "Available" },
  ];

  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="SERVICE AREAS" duration={1500} />

      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
          <MapPin size={32} />
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
          WE COME TO <span className="text-[var(--accent)]">YOU.</span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12">
          Fully equipped, water and power integrated mobile detailing units serving Palm Beach County and surrounding areas.
        </p>

        {/* Real-time Map Embed */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video w-full bg-white/5 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113944.35129672008!2d-80.18731382404097!3d26.741913166946654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccfaed92b9%3A0xf675d6911fc6ba!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1714155122143!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          {/* Overlay to give glassmorphic tint */}
          <div className="absolute inset-0 bg-[var(--bg-dark)]/20 pointer-events-none mix-blend-color"></div>
        </div>
      </section>

      {/* Availability Map/Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <Link href={`/contact?location=${encodeURIComponent(loc.city)}`} key={i} className="block group">
              <GlowBorderCard delay={i * 0.05} className="h-full p-6 transition-transform group-hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-display">{loc.city}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded w-max ${
                    loc.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {loc.status}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[var(--text-muted)] text-sm">{loc.distance}</p>
                  <ArrowRight className="text-[var(--accent)] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </GlowBorderCard>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Response Time Info */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl text-center border-l-4 border-[var(--accent)]">
          <h2 className="text-2xl font-bold mb-4">Outside our coverage area?</h2>
          <p className="text-[var(--text-secondary)] mb-6">
            If you're located further south in Miami/Ft. Lauderdale or north of Jupiter, please contact us. We regularly accommodate special requests for high-end correction and ceramic coating jobs.
          </p>
          <Link href="/contact" className="inline-flex font-bold text-[var(--accent)] hover:text-white transition-colors underline underline-offset-4">
            Request Special Accommodation
          </Link>
        </div>
      </section>
    </div>
  );
}
