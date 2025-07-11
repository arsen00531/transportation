"use client"

import { useEffect } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { PricesHeroSection } from "@/components/sections/prices/hero-section"
import { PricesServicesSection } from "@/components/sections/prices/services-section"
import { PricesStorageSection } from "@/components/sections/prices/storage-section"
import { PricesShippingSection } from "@/components/sections/prices/shipping-section"
import { PricesCTASection } from "@/components/sections/prices/cta-section"

export default function PricesPage() {
  // Автоматическая прокрутка к верху при загрузке страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricesHeroSection />
      <PricesServicesSection />
      <PricesStorageSection />
      <PricesShippingSection />
      <PricesCTASection />
      <Footer />
    </div>
  )
}
