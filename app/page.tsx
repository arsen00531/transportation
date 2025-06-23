"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function BunkerLanding() {
  return (
    <div className="min-h-screen bg-white">
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
