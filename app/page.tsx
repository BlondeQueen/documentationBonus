import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { DevelopersSection } from "@/components/developers-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TeamSection } from "@/components/team-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DevelopersSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}