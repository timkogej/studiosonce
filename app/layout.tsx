import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Studio Sonce | Kozmetični salon Kranj",
    template: "%s | Studio Sonce",
  },
  description:
    "Premium kozmetični salon v Kranju. Nega obraza, masaže, manikira, pedikura, LPG anti-celulit tretmaji. Rezervirajte termin!",
  keywords:
    "kozmetični salon, Kranj, nega obraza, masaža, manikira, pedikura, LPG, Dermalogica, anti-celulit, depilacija",
  openGraph: {
    title: "Studio Sonce | Kozmetični salon Kranj",
    description:
      "Premium kozmetični salon v Kranju. Nega obraza, masaže, manikira, pedikura, LPG anti-celulit tretmaji.",
    locale: "sl_SI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Studio Sonce",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cesta Staneta Žagarja 50",
                addressLocality: "Kranj",
                postalCode: "4000",
                addressCountry: "SI",
              },
              telephone: "+386 40 233 335",
              email: "sonce@studiosonce.com",
              openingHours: ["Mo-Fr 08:00-22:00", "Sa 09:00-15:00"],
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="antialiased font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
