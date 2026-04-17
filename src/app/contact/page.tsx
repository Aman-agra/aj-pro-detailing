import { RevealLoader } from "@/components/ui/RevealLoader";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative pt-24 pb-32">
      <RevealLoader text="GET IN TOUCH" duration={1500} />

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
              LET'S TALK <br/> <span className="text-[var(--accent)]">DETAILS.</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-md">
              Whether you're ready to book or just have questions about our services, our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <Phone className="text-[var(--accent)] mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-[var(--text-secondary)]">(561) 555-0198</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <Mail className="text-[var(--accent)] mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-[var(--text-secondary)]">hello@ajprodetailing.com</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <MapPin className="text-[var(--accent)] mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1">Service Area</h3>
              <p className="text-[var(--text-secondary)]">West Palm Beach & Surrounding Areas (30 mile radius)</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <Clock className="text-[var(--accent)] mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1">Hours</h3>
              <p className="text-[var(--text-secondary)]">Mon-Sat: 8am - 6pm<br/>Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <h2 className="text-3xl font-bold font-display mb-8 relative z-10">Request a Quote</h2>
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Vehicle Make & Model</label>
              <input type="text" placeholder="e.g., Porsche 911 2022" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Service of Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors text-white appearance-none">
                <option value="" className="bg-[var(--bg-dark)] text-[var(--text-muted)]">Select a service...</option>
                <option value="exterior" className="bg-[var(--bg-dark)]">Exterior Detailing</option>
                <option value="interior" className="bg-[var(--bg-dark)]">Interior Detailing</option>
                <option value="paint" className="bg-[var(--bg-dark)]">Paint Correction</option>
                <option value="ceramic" className="bg-[var(--bg-dark)]">Ceramic Coating</option>
                <option value="other" className="bg-[var(--bg-dark)]">Other / Custom</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Additional Details</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors resize-none" />
            </div>

            <LiquidMetalButton className="w-full" type="submit">
              Send Message
            </LiquidMetalButton>
            
            <p className="text-xs text-center text-[var(--text-muted)] mt-4">
              We typically respond within 2-4 hours during business days.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
