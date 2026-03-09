"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SALON_INFO } from "@/lib/constants";
import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FormState {
  ime: string;
  email: string;
  storitev: string;
  sporocilo: string;
}

const initialForm: FormState = {
  ime: "",
  email: "",
  storitev: "",
  sporocilo: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "#F8F5F0" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        {/* Left: Info */}
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <span
              className="text-sm tracking-[0.2em] uppercase block mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#D4A574",
              }}
            >
              Kontakt
            </span>
            <h2
              className="text-4xl md:text-5xl text-stone-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stopite v stik
              <br />
              <em className="not-italic" style={{ color: "#D4A574" }}>
                z nami
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-stone-600 leading-relaxed max-w-sm">
              Radi vam odgovorimo na vsa vprašanja in vam pomagamo izbrati
              pravo storitev. Kontaktirajte nas ali izpolnite obrazec.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            <ScrollReveal delay={0.2}>
              <InfoRow
                icon={<MapPin className="w-5 h-5" style={{ color: "#D4A574" }} />}
                label="Naslov"
                value={SALON_INFO.address}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <InfoRow
                icon={<Phone className="w-5 h-5" style={{ color: "#D4A574" }} />}
                label="Telefon"
                value={`${SALON_INFO.phone} / ${SALON_INFO.phoneAlt}`}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <InfoRow
                icon={<Mail className="w-5 h-5" style={{ color: "#D4A574" }} />}
                label="E-pošta"
                value={SALON_INFO.email}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <InfoRow
                icon={<Clock className="w-5 h-5" style={{ color: "#D4A574" }} />}
                label="Delovni čas"
                value={`${SALON_INFO.hours.weekdays} · ${SALON_INFO.hours.saturday} · ${SALON_INFO.hours.sunday}`}
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Form */}
        <ScrollReveal direction="right" delay={0.1}>
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                  }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Sporočilo poslano!
                </h3>
                <p className="text-stone-500">
                  Hvala za vaše sporočilo. Odgovorili vam bomo v najkrajšem
                  možnem času.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="text-sm underline underline-offset-4 mt-2 transition-colors"
                  style={{ color: "#D4A574" }}
                >
                  Pošlji novo sporočilo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3
                  className="text-2xl text-stone-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Pošljite povpraševanje
                </h3>

                {/* Ime */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700" htmlFor="ime">
                    Ime in priimek
                  </label>
                  <input
                    id="ime"
                    name="ime"
                    type="text"
                    required
                    value={form.ime}
                    onChange={handleChange}
                    placeholder="Ana Novak"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 transition-all"
                  />
                </div>

                {/* E-pošta */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700" htmlFor="email">
                    E-pošta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ana@primer.si"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 transition-all"
                  />
                </div>

                {/* Storitev */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700" htmlFor="storitev">
                    Storitev
                  </label>
                  <select
                    id="storitev"
                    name="storitev"
                    value={form.storitev}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 outline-none focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Izberite storitev…</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sporočilo */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700" htmlFor="sporocilo">
                    Sporočilo
                  </label>
                  <textarea
                    id="sporocilo"
                    name="sporocilo"
                    rows={4}
                    value={form.sporocilo}
                    onChange={handleChange}
                    placeholder="Vaše vprašanje ali posebne želje…"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-medium text-white text-base transition-all duration-300 hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                  }}
                >
                  Pošlji sporočilo
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(212,165,116,0.12)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-stone-400 tracking-wider uppercase mb-0.5">
          {label}
        </p>
        <p className="text-stone-700 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
