import { Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function PricesShippingSection() {
  const shipping = [
    { city: "Коледино", price: "300₽" },
    { city: "Электросталь", price: "300₽" },
    { city: "Краснодар", price: "750₽" },
    { city: "Казань", price: "750₽" },
    { city: "СПб (Уткина заводы)", price: "800₽" },
    { city: "Алексин (Тула)", price: "400₽" },
    { city: "Белые столбы", price: "600₽" },
    { city: "Подольск", price: "600₽" },
    { city: "Екатеринбург", price: "1100₽" },
    { city: "Невинномыск", price: "750₽" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-gray-900">Отгрузка</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">Доставка товаров в ключевые логистические центры России</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipping.map((location, index) => (
            <AnimatedSection
              key={index}
              animation={index % 3 === 0 ? "fadeInLeft" : index % 3 === 1 ? "fadeInUp" : "fadeInRight"}
              delay={100 + (index % 5) * 80}
              duration={600}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-400 hover:-translate-y-1 hover:border-l-yellow-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 group-hover:bg-yellow-500 transition-all duration-300"></div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {location.city}
                      </h3>
                    </div>
                    <span className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700 group-hover:scale-110 transition-all duration-300 inline-block">
                      {location.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
