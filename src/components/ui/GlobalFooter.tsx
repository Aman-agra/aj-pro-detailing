"use client";

import { LineHoverLink } from "./LineHoverLink";
import { SocialFlipButton } from "./SocialFlipButton";
import { Camera, Globe, Link, MapPin, Phone, Mail } from "lucide-react";

export function GlobalFooter() {
  return (
    <footer className="relative bg-[var(--bg-darker)] pt-24 pb-32 md:pb-12 border-t border-white/5 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[var(--accent)] blur-[100px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-black text-3xl tracking-tighter text-white">
            AJ PRO
          </h2>
          <p className="text-[var(--text-secondary)] font-medium">
            Premium mobile auto detailing, paint correction, and ceramic coating in West Palm Beach, Florida.
          </p>
          <div className="flex gap-4">
            <SocialFlipButton href="https://instagram.com/ajpromobiledetailing" icon={<Camera size={20} />} />
            <SocialFlipButton href="#" icon={<Globe size={20} />} />
            <SocialFlipButton href="#" icon={<Link size={20} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-white mb-2">Company</h3>
          <LineHoverLink href="/about">About Us</LineHoverLink>
          <LineHoverLink href="/approach">Our Approach</LineHoverLink>
          <LineHoverLink href="/areas">Service Areas</LineHoverLink>
          <LineHoverLink href="/career">Careers</LineHoverLink>
          <LineHoverLink href="/contact">Contact</LineHoverLink>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-white mb-2">Services</h3>
          <LineHoverLink href="/services#exterior">Exterior Detailing</LineHoverLink>
          <LineHoverLink href="/services#interior">Interior Detailing</LineHoverLink>
          <LineHoverLink href="/services#ceramic">Ceramic Coating</LineHoverLink>
          <LineHoverLink href="/services#paint">Paint Correction</LineHoverLink>
          <LineHoverLink href="/services#fleet">Fleet Services</LineHoverLink>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg text-white mb-2">Get in Touch</h3>
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <Phone size={18} className="text-[var(--accent)]" />
            <span>(561) 555-0198</span>
          </div>
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <Mail size={18} className="text-[var(--accent)]" />
            <span>hello@ajprodetailing.com</span>
          </div>
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <MapPin size={18} className="text-[var(--accent)] shrink-0" />
            <span>West Palm Beach, FL & Surrounding Areas</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-muted)] text-sm">
          &copy; {new Date().getFullYear()} AJ Pro Mobile Detailing. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-[var(--text-muted)]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
