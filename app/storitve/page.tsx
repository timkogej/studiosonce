import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Storitve | Studio Sonce",
  description:
    "Odkrijte vse naše storitve: nega obraza, masaže, manikira, pedikura, depilacija, LPG anti-celulit, solarij in VACU SLIM.",
};

export default function StoritvePage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="section-label block mb-4">Naše storitve</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Skrbimo za vas</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Od nege obraza do oblikovanja postave – ponujamo celostno nego za vaše telo in duha.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <Link href={`/storitve/${service.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="h-52 bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-stone-400 text-sm">Fotografija storitve</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="font-display text-xl text-stone-900 mb-2 group-hover:text-[#D4A574] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <span
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: "#D4A574" }}
                      >
                        Več o storitvi{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
