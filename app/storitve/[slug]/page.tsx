import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, PRICING } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, ArrowLeft, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return { title: "Storitev ni najdena" };
  return {
    title: `${service.title} | Studio Sonce`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const pricing = PRICING[slug as keyof typeof PRICING] ?? [];
  const related = SERVICES.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/storitve"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Vse storitve
          </Link>
          <span className="section-label block mb-4">Storitev</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">{service.title}</h1>
          <p className="text-white/70 text-lg">{service.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-display text-2xl text-stone-900 mb-4">O storitvi</h2>
                <p className="text-stone-600 leading-relaxed mb-4">{service.longDescription}</p>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-display text-2xl text-stone-900 mb-6">Prednosti</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                      >
                        <Check className="w-3.5 h-3.5 text-white" />
                      </span>
                      <span className="text-stone-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing */}
          {pricing.length > 0 && (
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 mb-16">
                <h2 className="font-display text-2xl text-stone-900 mb-6">Cenik</h2>
                <div className="space-y-3">
                  {pricing.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0"
                    >
                      <div>
                        <div className="font-medium text-stone-900">{item.name}</div>
                        <div className="text-sm text-stone-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5" /> {item.duration}
                        </div>
                      </div>
                      <div className="text-lg font-semibold" style={{ color: "#D4A574" }}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="text-center bg-white rounded-2xl p-12">
              <h2 className="font-display text-3xl text-stone-900 mb-4">Rezervirajte termin</h2>
              <p className="text-stone-600 mb-8">
                Pokličite nas ali izpolnite obrazec za rezervacijo termina.
              </p>
              <Link href="/kontakt">
                <span
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                >
                  Rezerviraj termin
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Related */}
          <div className="mt-16">
            <h2 className="font-display text-2xl text-stone-900 mb-8">Sorodne storitve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.id} href={`/storitve/${s.id}`}>
                  <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group">
                    <h3 className="font-display text-lg text-stone-900 mb-2 group-hover:text-[#D4A574] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-stone-500 text-sm">{s.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
