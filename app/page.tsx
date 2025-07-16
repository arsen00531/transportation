"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function BunkerLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AdvantagesSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </div>
  )
}
