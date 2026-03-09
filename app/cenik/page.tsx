"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PRICING, SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock } from "lucide-react";

export default function CenikPage() {
  const [activeTab, setActiveTab] = useState("nega-obraza");
  const currentService = SERVICES.find((s) => s.id === activeTab);
  const currentPricing = PRICING[activeTab as keyof typeof PRICING] ?? [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="section-label block mb-4">Cenik</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Pregledni cenik</h1>
          <p className="text-white/70 text-lg">Transparentne cene za vse naše storitve.</p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:mx-0 sm:px-0">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeTab === service.id ? "text-white" : "bg-white text-stone-600 hover:text-[#D4A574]"
                }`}
                style={
                  activeTab === service.id
                    ? { background: "linear-gradient(135deg, #D4A574, #C49660)" }
                    : {}
                }
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Pricing table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div
                  className="px-6 py-5 border-b border-stone-100"
                  style={{ background: "linear-gradient(135deg, #1C1917, #292524)" }}
                >
                  <h2 className="font-display text-2xl text-white">{currentService?.title}</h2>
                  <p className="text-white/60 text-sm mt-1">{currentService?.subtitle}</p>
                </div>
                <div className="divide-y divide-stone-100">
                  {currentPricing.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-4 hover:bg-stone-50 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-stone-900">{item.name}</div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-sm mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </div>
                      </div>
                      <div
                        className="text-xl font-semibold font-display"
                        style={{ color: "#D4A574" }}
                      >
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 bg-stone-50 border-t border-stone-100">
                  <p className="text-stone-500 text-sm">
                    * Cene so informativne. Za natančen cenik nas pokličite ali pišite.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-12 text-center">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-display text-2xl text-stone-900 mb-3">Niste prepričani?</h3>
                <p className="text-stone-600 mb-6">
                  Brezplačno svetovanje – pokličite nas in vam svetujemo najprimernejši tretma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kontakt">
                    <span
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-white"
                      style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                    >
                      Kontaktirajte nas
                    </span>
                  </Link>
                  <a href="tel:+38640233335">
                    <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border-2 text-stone-700 border-stone-300 hover:border-[#D4A574] hover:text-[#D4A574] transition-colors">
                      040 233 335
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
