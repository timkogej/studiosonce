import { Check } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const checklistItems = [
  "Certificirani kozmetični strokovnjaki",
  "Ekskluzivni blagovni znamki Dermalogica in LPG",
  "Individualno prilagojen pristop k vsaki stranki",
  "Sodobna oprema in preverjena kozmetična linija",
];

export default function AboutSnippet() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "#F8F5F0" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Image placeholder */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, #EDE8E0 0%, #D9D0C4 60%, #C8BAAA 100%)",
              }}
            >
              {/* Decorative inner content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div
                  className="w-32 h-32 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                  }}
                />
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, #D4A574 0%, transparent 60%)",
                }}
              />

              {/* Floating stat card */}
              <div
                className="absolute bottom-6 left-6 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  className="text-3xl font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#D4A574",
                  }}
                >
                  15+
                </div>
                <div className="text-xs text-stone-500 tracking-wider uppercase mt-0.5">
                  let izkušenj
                </div>
              </div>
            </div>

            {/* Decorative accent square */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "#D4A574", opacity: 0.15 }}
            />
          </div>
        </ScrollReveal>

        {/* Right: Text content */}
        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.1}>
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#D4A574",
              }}
            >
              O nas
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2
              className="text-4xl md:text-5xl text-stone-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vaše zaupanje je naša največja nagrada
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-stone-600 text-lg leading-relaxed">
              Studio Sonce je bil ustanovljen z eno samo mislijo: da vsaka stranka
              zapusti naš salon z nasmehom in sijočo kožo. Več kot 15 let
              izkušenj, predanost strokovnosti in iskrena skrb za vsako stranko
              so temelji, na katerih gradimo naš salon vsak dan.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="text-stone-500 leading-relaxed">
              Naša ekipa izkušenih kozmetičarjev se nenehno izobražuje in sledi
              najnovejšim trendom lepotne industrije, da vam zagotovimo najboljše
              tretmaje z vrhunskimi kozmetičnimi linijami.
            </p>
          </ScrollReveal>

          {/* Checklist */}
          <ScrollReveal delay={0.4}>
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                    }}
                  >
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </span>
                  <span className="text-stone-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.5}>
            <Link href="/o-nas">
              <span
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white text-base cursor-pointer transition-all duration-300 hover:shadow-gold"
                style={{
                  background:
                    "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                }}
              >
                Spoznajte nas
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
