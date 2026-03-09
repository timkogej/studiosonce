import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { SALON_INFO, SERVICES } from "@/lib/constants";

const quickLinks = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nas" },
  { href: "/galerija", label: "Galerija" },
  { href: "/cenik", label: "Cenik" },
  { href: "/darilni-bon", label: "Darilni bon" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 – Brand, description, contact */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="font-display text-2xl font-semibold text-white group-hover:text-[#D4A574] transition-colors duration-300">
                Studio Sonce
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D4A574] inline-block transition-transform duration-300 group-hover:scale-125" />
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Premium kozmetični salon v Kranju. Z ljubeznijo skrbimo za vašo
              lepoto in dobro počutje že vrsto let.
            </p>

            {/* Contact details */}
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-stone-400 hover:text-[#D4A574] transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D4A574]" />
                  {SALON_INFO.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SALON_INFO.phoneFull.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-stone-400 hover:text-[#D4A574] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#D4A574]" />
                  {SALON_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="flex items-center gap-2.5 text-stone-400 hover:text-[#D4A574] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#D4A574]" />
                  {SALON_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#D4A574]" />
                <span className="text-stone-400 space-y-0.5">
                  <span className="block">{SALON_INFO.hours.weekdays}</span>
                  <span className="block">{SALON_INFO.hours.saturday}</span>
                  <span className="block">{SALON_INFO.hours.sunday}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Storitve
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/storitve/${service.id}`}
                    className="text-sm text-stone-400 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Hitre povezave
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-[#D4A574] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Reservation CTA */}
            <div className="mt-8">
              <Link href="/kontakt">
                <span
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(212,165,116,0.5)] hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                  }}
                >
                  Rezerviraj termin
                </span>
              </Link>
            </div>
          </div>

          {/* Column 4 – Social & newsletter teaser */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Sledite nam
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Ostanite v stiku z nami na družbenih omrežjih in bodite prvi
              obveščeni o novih tretmajih in akcijah.
            </p>

            <div className="flex gap-3">
              <a
                href={SALON_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 text-stone-400 hover:bg-[#D4A574] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SALON_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 text-stone-400 hover:bg-[#D4A574] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Decorative gold divider */}
            <div className="mt-8 pt-8 border-t border-stone-800">
              <p className="text-xs text-stone-500 leading-relaxed">
                Naročite se na termin po telefonu, e-pošti ali prek spletnega
                obrazca na strani{" "}
                <Link
                  href="/kontakt"
                  className="text-[#D4A574] hover:text-[#E8C9A8] transition-colors"
                >
                  Kontakt
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            &copy; {currentYear} Studio Sonce. Vse pravice pridržane.
          </p>
          <p className="text-xs text-stone-600">
            {SALON_INFO.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
