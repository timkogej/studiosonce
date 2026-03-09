"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const stats: [string, string][] = [
  ["15+", "let izkušenj"],
  ["5000+", "zadovoljnih strank"],
  ["8", "storitev"],
  ["Kranj", "Slovenija"],
];

function fadeIn(delay: number = 0) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1C1917 0%, #292524 50%, #1C1917 100%)",
      }}
    >
      {/* Ambient gold circles */}
      <div
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#D4A574" }}
      />
      <div
        className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#D4A574", opacity: 0.08 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#E8C9A8" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-32">
        {/* Accent label */}
        <motion.span
          {...fadeIn(0.05)}
          className="inline-block text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4A574" }}
        >
          Kozmetični salon Kranj
        </motion.span>

        {/* H1 */}
        <motion.h1
          {...fadeIn(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Odkrijte sijaj
          <br />
          <em className="not-italic" style={{ color: "#D4A574" }}>
            vaše lepote
          </em>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeIn(0.25)}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
        >
          Profesionalna nega obraza, telesa in duha v sončnem ambientu Kranja.
          Vaše počutje je naša prioriteta.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeIn(0.35)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/kontakt">
            <motion.span
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white text-base cursor-pointer"
              style={{ background: "linear-gradient(135deg, #D4A574 0%, #C49660 100%)" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -8px rgba(212,165,116,0.5)",
                transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            >
              Rezerviraj termin
            </motion.span>
          </Link>
          <Link href="/storitve">
            <motion.span
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white text-base border-2 border-white/50 cursor-pointer"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.08)",
                transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            >
              Razišči storitve
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        {...fadeIn(0.45)}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(([num, label]) => (
            <div key={label}>
              <div
                className="text-2xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: "#D4A574" }}
              >
                {num}
              </div>
              <div className="text-xs text-white/60 tracking-wider uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeIn(0.55)}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/40 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
