import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Готовы начать работу с нами?</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200} duration={800}>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Получите персональное предложение и расчет стоимости доставки уже сегодня
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={400} duration={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prices">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                Наши цены <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Связаться с нами
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
