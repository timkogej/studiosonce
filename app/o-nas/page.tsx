import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check, Heart, Award, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "O nas | Studio Sonce",
  description:
    "Spoznajte ekipo Studio Sonce – več kot 15 let izkušenj v kozmetiki in negi. Vaša lepota je naša strast.",
};

const team = [
  { name: "Nina Kovačič", role: "Lastnica & kozmetičarka", speciality: "Nega obraza, Dermalogica" },
  { name: "Sara Horvat", role: "Kozmetičarka", speciality: "Masaže, LPG tretmaji" },
  { name: "Maja Zupan", role: "Kozmetičarka", speciality: "Manikira, Pedikura" },
];

const values = [
  {
    icon: Heart,
    title: "Skrb za stranke",
    text: "Vsaka stranka je posebna. Prilagodimo vsak tretma vašim individualnim potrebam.",
  },
  {
    icon: Award,
    title: "Strokovnost",
    text: "Redna izobraževanja in certificirani postopki zagotavljajo vrhunske rezultate.",
  },
  {
    icon: Star,
    title: "Kakovost",
    text: "Uporabljamo samo preizkušene blagovne znamke: Dermalogica, LPG, CND, Peclavus.",
  },
  {
    icon: Users,
    title: "Skupnost",
    text: "Smo del skupnosti Kranja že 15+ let in ponosni na odnose, ki smo jih zgradili.",
  },
];

export default function ONasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="section-label block mb-4">O nas</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Naša zgodba</h1>
          <p className="text-white/70 text-lg">
            Vas vabimo, da spoznate Studio Sonce in ljudi, ki stojimo za vašo lepoto.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <span className="text-stone-400">Fotografija salona</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="section-label block mb-4">Naša zgodba</span>
            <h2 className="font-display text-4xl text-stone-900 mb-6">Več kot 15 let vaše lepote</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Studio Sonce je bil ustanovljen z eno samo vizijo – ustvariti prostor, kjer se vsaka
              stranka počuti posebno in skrbno negovana. V srcu Kranja smo odprli vrata pred več kot
              15 leti in od takrat neprestano rastemo.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Naša ekipa izkušenih kozmetičark se redno izobražuje in sledi najnovejšim trendom in
              tehnikam v svetu lepote. Ponašamo se z dolgoletnimi partnerstvami z vodilnimi
              blagovnimi znamkami.
            </p>
            <ul className="space-y-3">
              {[
                "Certificirani Dermalogica salon",
                "LPG pooblaščeni partner",
                "Redno izobraževanje ekipe",
                "Individualni pristop do vsake stranke",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Ekipa"
            title="Spoznajte nas"
            subtitle="Naša ekipa strokovnjakov je tukaj, da poskrbi za vaše počutje."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                    <span className="text-stone-400 text-xs">Fotografija</span>
                  </div>
                  <h3 className="font-display text-xl text-stone-900 mb-1">{member.name}</h3>
                  <p className="text-[#D4A574] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-stone-500 text-sm">{member.speciality}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="Naše vrednosti" title="Kar nas poganja" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-stone-900 mb-3">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{value.text}</p>
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
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <span className="section-label block mb-4">Začnite danes</span>
            <h2 className="font-display text-4xl text-white mb-6">Pridite nas obiskat</h2>
            <p className="text-white/70 mb-10">
              Rezervirajte termin in izkusite razliko, ki jo naredi Studio Sonce.
            </p>
            <Link href="/kontakt">
              <span
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-white"
                style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
              >
                Rezerviraj termin
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
