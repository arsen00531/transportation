import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Фулфиллмент из <span className="text-yellow-400">Китая</span> в Россию
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Полный цикл логистики: от склада в Китае до двери клиента в России. Надежно, быстро, выгодно.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-gray-300">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">15</div>
            <div className="text-gray-300">Дней доставка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">99.8%</div>
            <div className="text-gray-300">Сохранность груза</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  )
}
