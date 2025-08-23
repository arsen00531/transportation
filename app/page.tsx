import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AdvantagesSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
