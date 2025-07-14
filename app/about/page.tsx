"use client"

import { AboutHeroSection } from "@/components/sections/about/hero-section"
import { AboutCompanyStorySection } from "@/components/sections/about/company-story-section"
import { AboutMissionValuesSection } from "@/components/sections/about/mission-values-section"
import { AboutTeamSection } from "@/components/sections/about/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <ScrollToTop /> */} {/* Удаляем старый компонент */}
      <AboutHeroSection />
      <AboutCompanyStorySection />
      <AboutMissionValuesSection />
      <AboutTeamSection />
    </div>
  )
}
