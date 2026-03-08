import { Hero } from "@/sections/Hero";
import { AboutUs } from "@/sections/AboutUs";
import { CalculatorSection } from "@/sections/CalculatorSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FAQSection } from "@/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturesSection />
      <ProcessSection />
      <CalculatorSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
