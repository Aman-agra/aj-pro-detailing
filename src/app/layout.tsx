import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { GlassDock } from "@/components/ui/GlassDock";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJ Pro Mobile Detailing",
  description: "Premium Auto Detailing, Paint Correction & Ceramic Coating in West Palm Beach, FL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} overflow-x-hidden`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
        <SmoothScroll>
          <CustomCursor />
          <GlassDock />
          <main className="flex-grow">
            {children}
          </main>
          <GlobalFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
