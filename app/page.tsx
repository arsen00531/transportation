"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
// import { ScrollToTop } from "@/components/ui/scroll-to-top" // Удаляем старый импорт

export default function BunkerLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* <ScrollToTop /> */} {/* Удаляем старый компонент */}
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AdvantagesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
