"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";
import { SALON_INFO, SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const schema = z.object({
  name: z.string().min(2, "Ime mora imeti vsaj 2 znaka"),
  email: z.string().email("Vnesite veljavni e-poštni naslov"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Sporočilo mora imeti vsaj 10 znakov"),
});

type FormData = z.infer<typeof schema>;

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setLoading(false);
    setSubmitted(true);
  };

  const contactItems = [
    { icon: MapPin, label: "Naslov", value: SALON_INFO.address },
    { icon: Phone, label: "Telefon", value: `${SALON_INFO.phone} / ${SALON_INFO.phoneAlt}` },
    { icon: Mail, label: "E-pošta", value: SALON_INFO.email },
    {
      icon: Clock,
      label: "Delovni čas",
      value: `${SALON_INFO.hours.weekdays}\n${SALON_INFO.hours.saturday}\n${SALON_INFO.hours.sunday}`,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="section-label block mb-4">Kontakt</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Stopite v stik</h1>
          <p className="text-white/70 text-lg">Z veseljem vam odgovorimo in rezerviramo termin.</p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#F8F5F0" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-8">Kontaktni podatki</h2>
              <div className="space-y-6 mb-10">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-500 mb-1">{item.label}</div>
                      <div className="text-stone-900 font-medium whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-stone-200 h-64 flex items-center justify-center">
                <div className="text-center text-stone-500">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-stone-400" />
                  <p className="font-medium">Cesta Staneta Žagarja 50</p>
                  <p className="text-sm">4000 Kranj, Slovenija</p>
                  <a
                    href="https://maps.google.com/?q=Cesta+Staneta+Žagarja+50,+Kranj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-2 inline-block underline"
                    style={{ color: "#D4A574" }}
                  >
                    Odpri v Google Zemljevidih
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#D4A574" }} />
                  <h3 className="font-display text-2xl text-stone-900 mb-3">Hvala za sporočilo!</h3>
                  <p className="text-stone-600 mb-6">
                    Odgovorili vam bomo v najkrajšem možnem času.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); reset(); }}
                    className="text-sm font-medium underline"
                    style={{ color: "#D4A574" }}
                  >
                    Pošljite novo sporočilo
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl text-stone-900 mb-6">Pošljite sporočilo</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Ime in priimek *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Jana Novak"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4A574] transition-colors text-stone-900 placeholder-stone-400"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        E-pošta *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jana@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4A574] transition-colors text-stone-900 placeholder-stone-400"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Telefon
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="041 123 456"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4A574] transition-colors text-stone-900 placeholder-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Storitev
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4A574] transition-colors text-stone-700 bg-white"
                      >
                        <option value="">Izberite storitev...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Sporočilo *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Vaše sporočilo ali vprašanje..."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4A574] transition-colors text-stone-900 placeholder-stone-400 resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium text-white transition-all duration-300 disabled:opacity-70"
                      style={{ background: "linear-gradient(135deg, #D4A574, #C49660)" }}
                    >
                      {loading ? (
                        "Pošiljanje..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Pošlji sporočilo
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
