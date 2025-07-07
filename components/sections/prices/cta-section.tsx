import { CheckCircle, Phone, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function PricesCTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full opacity-5 translate-x-24 translate-y-24"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="scaleIn" duration={800}>
            <CheckCircle className="w-16 h-16 text-gray-900 mx-auto mb-6" />
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200} duration={800}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы начать сотрудничество?</h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400} duration={800}>
            <p className="text-lg text-gray-800 mb-8">
              Свяжитесь с нами для получения индивидуального предложения и расчета стоимости ваших задач
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Получить консультацию
              </a>
              <a
                href="tel:+79991234567"
                className="group bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 border-2 border-gray-900 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Позвонить сейчас
              </a>
            </div>
          </AnimatedSection>

          {/* Дополнительная информация */}
          <AnimatedSection animation="fadeIn" delay={800} duration={800}>
            <div className="mt-8 text-sm text-gray-700 opacity-80">
              <p>⚡ Быстрый ответ в течение 15 минут</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
