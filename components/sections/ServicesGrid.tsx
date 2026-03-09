"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Hand,
  Gem,
  Footprints,
  Feather,
  Zap,
  Sun,
  Activity,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Hand,
  Gem,
  Footprints,
  Feather,
  Zap,
  Sun,
  Activity,
};

export default function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "#FAFAF9" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Storitve"
          title="Naše storitve"
          subtitle="Odkrijte paleto profesionalnih kozmetičnih storitev, prilagojenih vašim potrebam."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <ScrollReveal key={service.id} delay={(index % 4) * 0.06}>
                <ServiceCard service={service} Icon={Icon} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  Icon: LucideIcon;
}

function ServiceCard({ service, Icon }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-5 md:p-6 cursor-pointer overflow-hidden"
      style={{
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 16px 36px -8px rgba(212,165,116,0.22)",
        borderColor: "rgba(212,165,116,0.45)",
      }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle gold border reveal on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: "1px solid rgba(212,165,116,0.4)" }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
        }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Text */}
      <h3
        className="text-stone-900 font-semibold text-base md:text-lg leading-snug mb-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {service.title}
      </h3>
      <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
        {service.subtitle}
      </p>

      {/* Hover CTA */}
      <motion.div
        className="mt-4 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        whileHover={{ height: "auto", opacity: 1 }}
      >
        <Link
          href={`/storitve#${service.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: "#D4A574" }}
        >
          Več &rarr;
        </Link>
      </motion.div>

      {/* Always-visible "Več" on mobile via group-hover trick */}
      <div className="mt-3 md:hidden">
        <Link
          href={`/storitve#${service.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium"
          style={{ color: "#D4A574" }}
        >
          Več &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
