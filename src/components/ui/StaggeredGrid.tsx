"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function StaggeredGrid({ items, className }: { 
  items: { id: string; url: string; alt: string; span?: "col-span-1" | "col-span-2" | "row-span-2" | string }[],
  className?: string 
}) {
  return (
    <div className={twMerge("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]", className)}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={twMerge(
            "relative group rounded-xl overflow-hidden bg-white/5 border border-white/10",
            item.span || "col-span-1"
          )}
        >
          <Image
            src={item.url}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>
  );
}
