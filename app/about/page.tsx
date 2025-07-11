"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { AboutHeroSection } from "@/components/sections/about/hero-section"
import { AboutCompanyStorySection } from "@/components/sections/about/company-story-section"
import { AboutMissionValuesSection } from "@/components/sections/about/mission-values-section"
import { AboutTeamSection } from "@/components/sections/about/team-section"
import { AboutGeographySection } from "@/components/sections/about/geography-section"
import { AboutAchievementsSection } from "@/components/sections/about/achievements-section"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <AboutHeroSection />
      <AboutCompanyStorySection />
      <AboutMissionValuesSection />
      <AboutTeamSection />
      <AboutGeographySection />
      <AboutAchievementsSection />
      <Footer />
    </div>
  )
}
