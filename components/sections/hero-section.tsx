import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Фулфиллмент <span className="font-bold text-yellow-400 font-serif">BUNKER</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl lg:max-w-none">
            Ваш надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 text-lg px-8 py-4">
                Начать работу <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-lg px-8 py-4"
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>

          {/* Image */}
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
            <div className="absolute top-8 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-gray-300">Клиентов</div>
            </div>

            <div className="absolute bottom-8 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">99.8%</div>
              <div className="text-sm text-gray-300">Сохранность</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">5 000 ед./день</div>
            <div className="text-gray-300">Скорость</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">На 28.9%</div>
            <div className="text-gray-300">Дешевле чем у конкурентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300">Поддержка</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">3</div>
            <div className="text-gray-300">Года на рынке</div>
          </div>
        </div>
      </div>
    </section>
  )
}
