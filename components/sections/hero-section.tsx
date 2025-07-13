import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ContactModal } from "@/components/ui/contact-modal"
import BunkerTextLogo from "@/components/ui/bunker-text-logo"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fadeInLeft" duration={800}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Фулфиллмент <BunkerTextLogo />
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={200} duration={800}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl lg:max-w-none">
                Ваш надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ContactModal
                  title="Начать работу с BUNKER"
                  description="Расскажите о своих потребностях, и мы подготовим персональное предложение"
                >
                  <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 text-lg px-8 py-4">
                    Начать работу <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactModal>
                <ContactModal
                  title="Рассчитать стоимость"
                  description="Получите точный расчет стоимости наших услуг для вашего бизнеса"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-lg px-8 py-4"
                  >
                    Рассчитать стоимость
                  </Button>
                </ContactModal>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection animation="fadeInRight" delay={300} duration={1000}>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Фулфиллмент услуги - упаковка и доставка товаров из Китая"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
              </div>

              {/* Floating cards with stats */}
              <AnimatedSection animation="scaleIn" delay={800} duration={600}>
                <div className="absolute top-8 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-gray-300">Клиентов</div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={1000} duration={600}>
                <div className="absolute bottom-8 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">99.8%</div>
                  <div className="text-sm text-gray-300">Сохранность</div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection animation="fadeInUp" delay={600} duration={800}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-700">
            <div className="text-center">
              <AnimatedCounter end={5000} suffix=" ед./день" className="text-3xl font-bold text-yellow-400" />
              <div className="text-gray-300">Скорость</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                На <AnimatedCounter end={28.9} suffix="%" />
              </div>
              <div className="text-gray-300">Дешевле чем у конкурентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-300">Поддержка</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={3} className="text-3xl font-bold text-yellow-400" />
              <div className="text-gray-300">Года на рынке</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
