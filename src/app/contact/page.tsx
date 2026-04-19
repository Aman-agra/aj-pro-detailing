"use client";

import { useState } from "react";
import { RevealLoader } from "@/components/ui/RevealLoader";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactForm } from "@/app/actions";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await sendContactForm(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

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
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-[var(--accent)]" size={48} />
                </div>
                <h2 className="text-3xl font-bold font-display mb-4">Message Sent!</h2>
                <p className="text-[var(--text-secondary)] max-w-sm">
                  Your request has been delivered to our team. We'll get back to you with a quote within 2-4 hours.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-bold tracking-widest text-[var(--accent)] hover:underline"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-3xl font-bold font-display mb-8 relative z-10">Request a Quote</h2>
                
                <form action={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">First Name</label>
                      <input name="firstName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">Last Name</label>
                      <input name="lastName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">Phone Number</label>
                      <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
                      <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">Vehicle Make & Model</label>
                    <input name="vehicle" required type="text" placeholder="e.g., Porsche 911 2022" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">Service of Interest</label>
                    <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors text-white appearance-none">
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
                    <textarea name="details" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors resize-none" />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl">
                      <AlertCircle size={16} />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <LiquidMetalButton className="w-full" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "SENDING..." : "Send Message"}
                  </LiquidMetalButton>
                  
                  <p className="text-xs text-center text-[var(--text-muted)] mt-4">
                    We typically respond within 2-4 hours during business days.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
