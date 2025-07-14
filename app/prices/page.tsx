"use client"

import { PricesHeroSection } from "@/components/sections/prices/hero-section"
import { PricesServicesSection } from "@/components/sections/prices/services-section"
import { PricesStorageSection } from "@/components/sections/prices/storage-section"
import { PricesShippingSection } from "@/components/sections/prices/shipping-section"
import { PricesCTASection } from "@/components/sections/prices/cta-section"
// import { ScrollToTop } from "@/components/ui/scroll-to-top" // Удаляем старый импорт

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <ScrollToTop /> */} {/* Удаляем старый компонент */}
      <PricesHeroSection />
      <PricesServicesSection />
      <PricesStorageSection />
      <PricesShippingSection />
      <PricesCTASection />
    </div>
  )
}
