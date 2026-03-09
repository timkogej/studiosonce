import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutSnippet from "@/components/sections/AboutSnippet";
import Testimonials from "@/components/sections/Testimonials";
import BrandPartners from "@/components/sections/BrandPartners";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutSnippet />
      <Testimonials />
      <BrandPartners />
      <ContactSection />
    </>
  );
}
