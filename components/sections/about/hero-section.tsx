import BunkerLogo from "@/components/ui/bunker-logo"
import { AnimatedSection } from "@/components/ui/animated-section"

export function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fadeInDown" duration={1000}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            О компании <BunkerLogo />
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={300} duration={800}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Один из самых надежных компаний в Москве по фулфилменту
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
