import { twMerge } from "tailwind-merge";

export function LineHoverLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={twMerge("group relative inline-flex w-fit font-medium text-white/90 hover:text-white transition-colors", className)}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
