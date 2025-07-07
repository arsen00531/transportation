import { AnimatedSection } from "@/components/ui/animated-section"

export function PricesHeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fadeInDown" duration={1000}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="text-yellow-400">цены</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={300} duration={800}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Прозрачное ценообразование для всех услуг фулфиллмента. Никаких скрытых платежей - только честные цены за
            качественный сервис.
          </p>
        </AnimatedSection>

        {/* Декоративные элементы */}
        <AnimatedSection animation="scaleIn" delay={600} duration={800}>
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-10 blur-xl"></div>
        </AnimatedSection>
        <AnimatedSection animation="scaleIn" delay={800} duration={800}>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-5 blur-2xl"></div>
        </AnimatedSection>
      </div>
    </section>
  )
}
