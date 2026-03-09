"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const dynamic = "force-static";

const categories = ["Vse", "Salon", "Tretmaji", "Rezultati"];

const galleryItems = [
  { id: 1, category: "Salon", label: "Recepcija", height: "h-64" },
  { id: 2, category: "Tretmaji", label: "Nega obraza", height: "h-80" },
  { id: 3, category: "Rezultati", label: "Pred / Po", height: "h-52" },
  { id: 4, category: "Salon", label: "Kabinet", height: "h-72" },
  { id: 5, category: "Tretmaji", label: "Masaža", height: "h-60" },
  { id: 6, category: "Rezultati", label: "Manikira", height: "h-80" },
  { id: 7, category: "Salon", label: "Čakalnica", height: "h-56" },
  { id: 8, category: "Tretmaji", label: "LPG tretma", height: "h-72" },
  { id: 9, category: "Rezultati", label: "Nega obraza", height: "h-64" },
];

export default function GalerijaPage() {
  const [active, setActive] = useState("Vse");
  const filtered =
    active === "Vse" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="section-label block mb-4">Galerija</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Naše delo</h1>
          <p className="text-white/70 text-lg">
            Oglejte si naš salon in rezultate naše strokovne nege.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "text-white"
                    : "bg-white text-stone-600 hover:text-[#D4A574]"
                }`}
                style={
                  active === cat
                    ? { background: "linear-gradient(135deg, #D4A574, #C49660)" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`${item.height} rounded-2xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 relative group cursor-pointer break-inside-avoid`}
                >
                  {/* Hover overlay with label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                  {/* Default label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-400 text-sm">{item.label}</span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/80 backdrop-blur-sm text-stone-600 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
