"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/storitve", label: "Storitve", hasDropdown: true },
  { href: "/o-nas", label: "O nas" },
  { href: "/galerija", label: "Galerija" },
  { href: "/cenik", label: "Cenik" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={`font-display text-2xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-stone-900" : "text-white"
            }`}
          >
            Studio Sonce
          </span>
          <span className="w-2 h-2 rounded-full bg-[#D4A574] inline-block transition-transform duration-300 group-hover:scale-125" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-stone-700 hover:text-[#D4A574]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 border border-stone-100"
                    >
                      <Link
                        href="/storitve"
                        className="block px-4 py-2.5 text-sm font-medium text-[#D4A574] border-b border-stone-50 mb-1 hover:bg-stone-50 transition-colors"
                      >
                        Vse storitve
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={`/storitve/${s.id}`}
                          className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-cream hover:text-[#D4A574] transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-stone-700 hover:text-[#D4A574]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/kontakt">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(212,165,116,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Rezerviraj termin
            </motion.span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-1 transition-colors duration-300 ${
            isScrolled ? "text-stone-900" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Odpri meni"
          aria-expanded={mobileOpen}
        >
          <motion.div
            key={mobileOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-stone-700 font-medium hover:text-[#D4A574] hover:bg-cream rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="pt-3 pb-1"
              >
                <Link href="/kontakt" onClick={() => setMobileOpen(false)}>
                  <span
                    className="block text-center px-6 py-3 rounded-full text-sm font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4A574 0%, #C49660 100%)",
                    }}
                  >
                    Rezerviraj termin
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
