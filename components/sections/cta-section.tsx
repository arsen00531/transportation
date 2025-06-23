import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Готовы начать работу с нами?</h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Получите персональное предложение и расчет стоимости доставки уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-4">
            Получить расчет <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-4"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  )
}
