import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "#1C1917" }}
    >
      {/* Ambient gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "#D4A574" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Mnenja"
          title="Kar pravijo naše stranke"
          subtitle="Preverite, zakaj nam stranke zaupajo že več kot 15 let."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <GlassCard className="flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "#D4A574" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 leading-relaxed flex-1 text-sm md:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <p
                    className="font-semibold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase mt-0.5"
                    style={{ color: "#D4A574" }}
                  >
                    {testimonial.service}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
