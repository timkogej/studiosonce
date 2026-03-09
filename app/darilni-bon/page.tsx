import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Phone, Mail, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Darilni bon | Studio Sonce",
  description:
    "Podarite izkušnjo lepote. Darilni boni Studio Sonce – idealno darilo za vsako priložnost.",
};

const vouchers = [
  {
    name: "Osnovna nega",
    price: "50 €",
    description: "Idealen za prvič – vključuje osnovno nego obraza ali manikuro.",
    includes: ["Nega obraza (60 min)", "ali Manikura z gel lakom", "Pozdravno pijačo"],
    accent: false,
  },
  {
    name: "Premium paket",
    price: "100 €",
    description: "Popoln dan razvajanja z nego obraza, masažo in pedikuro.",
    includes: [
      "Dermalogica nega obraza",
      "Sprostitvena masaža (30 min)",
      "Express pedikura",
      "Pozdravno pijačo",
    ],
    accent: true,
  },
  {
    name: "Popolna razvajanje",
    price: "200 €",
    description: "Luksuzni celodnevni spa doživetje za posebno priložnost.",
    includes: [
      "Dermalogica Anti-age nega",
      "Aromaterapevtska masaža (60 min)",
      "Manikura + gel lak",
      "Pedikura + gel lak",
      "Pijača po izbiri",
    ],
    accent: false,
  },
];

const steps = [
  {
    step: "01",
    title: "Izberite vrednost",
    text: "Izberite enega od pripravljenih paketov ali določite svojo vrednost.",
  },
  {
    step: "02",
    title: "Kontaktirajte nas",
    text: "Pokličite nas ali pišite po e-pošti in uredimo bon.",
  },
  {
    step: "03",
    title: "Prejmite bon",
    text: "Bon vam pošljemo po pošti ali ga prevzamete osebno v salonu.",
  },
];

export default function DarilniBonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-24 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#D4A574" }} />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
          >
            <Gift className="w-9 h-9 text-white" />
          </div>
          <span className="section-label block mb-4">Darilni boni</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
            Podarite izkušnjo lepote
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Idealno darilo za rojstni dan, obletnico ali vsako posebno priložnost. Podarite
            trenutek razvajanja osebi, ki jo cenite.
          </p>
        </div>
      </section>

      {/* Voucher cards */}
      <section className="py-24 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="section-label block mb-3">Paketi</span>
              <h2 className="font-display text-4xl text-stone-900">Izberite bon</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vouchers.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl overflow-hidden h-full flex flex-col ${
                    v.accent ? "shadow-xl ring-2 ring-[#D4A574]" : "bg-white shadow-sm"
                  }`}
                >
                  {v.accent && (
                    <div
                      className="text-center py-2 text-xs font-medium text-white tracking-wider uppercase"
                      style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                    >
                      Najbolj priljubljen
                    </div>
                  )}
                  <div className="bg-white p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl text-stone-900 mb-2">{v.name}</h3>
                    <div
                      className="text-4xl font-display font-semibold mb-3"
                      style={{ color: "#D4A574" }}
                    >
                      {v.price}
                    </div>
                    <p className="text-stone-500 text-sm mb-6 leading-relaxed">{v.description}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {v.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#D4A574" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/kontakt">
                      <span
                        className={`block text-center py-3.5 rounded-xl font-medium transition-all duration-300 ${
                          v.accent ? "text-white" : "text-stone-700 border-2 border-stone-200 hover:border-[#D4A574] hover:text-[#D4A574]"
                        }`}
                        style={v.accent ? { background: "linear-gradient(135deg, #D4A574, #C49660)" } : {}}
                      >
                        Naroči bon
                      </span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-stone-500 text-sm mt-6">
              Želite bon z drugo vrednostjo? Kontaktirajte nas za po meri prilagojen bon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="section-label block mb-3">Postopek</span>
              <h2 className="font-display text-4xl text-stone-900">Kako naročiti</h2>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="text-center">
                  <div
                    className="text-5xl font-display font-bold mb-4"
                    style={{ color: "#EDE8E0" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-display text-xl text-stone-900 mb-3">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-white mb-4">Naročite vaš bon</h2>
            <p className="text-white/70 mb-10">
              Pokličite nas ali pišite po e-pošti in skupaj izberemo idealen bon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+38640233335">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                >
                  <Phone className="w-4 h-4" /> 040 233 335
                </span>
              </a>
              <a href="mailto:sonce@studiosonce.com">
                <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" /> Pišite nam
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
