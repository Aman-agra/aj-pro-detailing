"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlassDock() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Areas", href: "/areas" },
    { label: "Showroom", href: "/showroom" },
    { label: "Collection", href: "/collection" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 p-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl"
      >
        <div className="px-4 font-display font-bold text-white tracking-wider mr-6 border-r border-white/10 py-2">
          AJ PRO
        </div>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={twMerge(
              "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10 hover:text-white",
              pathname === link.href ? "bg-white/15 text-white" : "text-white/70"
            )}
          >
            {link.label}
          </Link>
        ))}
      </motion.div>

      {/* Mobile Hamburger Dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl flex flex-col gap-1.5"
        >
          <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
          <div className="w-6 h-0.5 bg-white transition-all" style={{ opacity: isOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
        >
          {links.map((link, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={link.label}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-semibold text-white/90 hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
