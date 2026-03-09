"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const brands = [
  { name: "Dermalogica", tagline: "Nega obraza" },
  { name: "LPG", tagline: "Anti-celulit" },
  { name: "CND", tagline: "Gel laki" },
  { name: "Peclavus", tagline: "Pedikura" },
];

export default function BrandPartners() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: "#F8F5F0" }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span
              className="text-sm tracking-[0.2em] uppercase block mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#D4A574",
              }}
            >
              Partnerji
            </span>
            <h2
              className="text-3xl md:text-4xl text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Naši partnerji
            </h2>
            <p className="text-stone-500 mt-3 max-w-md mx-auto">
              Sodelujemo izključno s prvorazrednimi kozmetičnimi blagovnimi znamkami.
            </p>
          </div>
        </ScrollReveal>

        {/* Brands row */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex flex-col md:flex-row items-center"
            >
              <ScrollReveal delay={index * 0.1}>
                <BrandItem brand={brand} />
              </ScrollReveal>

              {/* Divider — between items, not after last */}
              {index < brands.length - 1 && (
                <div
                  className="hidden md:block mx-8 w-px h-12 self-center"
                  style={{ background: "linear-gradient(to bottom, transparent, #D4A574, transparent)" }}
                />
              )}
              {index < brands.length - 1 && (
                <div
                  className="md:hidden my-6 h-px w-16 self-center"
                  style={{ background: "linear-gradient(to right, transparent, #D4A574, transparent)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface BrandItemProps {
  brand: { name: string; tagline: string };
}

function BrandItem({ brand }: BrandItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 group cursor-default select-none px-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
    >
      <span
        className="text-3xl md:text-4xl font-light tracking-widest transition-colors duration-300 text-stone-400 group-hover:text-[#D4A574]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {brand.name}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
        {brand.tagline}
      </span>
    </motion.div>
  );
}
