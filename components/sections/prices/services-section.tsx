import { Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function PricesServicesSection() {
  const services = [
    { name: "Маркировка товара", price: "4₽" },
    { name: "Сортировка по артикулам", price: "от 6,5₽" },
    { name: "Вложение вкладыша", price: "от 4₽" },
    { name: "Проверка товара на брак", price: "от 4₽" },
    { name: "Перекомплектовка товара", price: "от 4₽" },
    { name: "Упаковка БОПП/ZIPP", price: "от 4,5₽" },
    { name: "Укладка в коробку", price: "от 4,5₽" },
    { name: "Идентификация товара", price: "от 5₽" },
    { name: "Бирковка товара", price: "от 5₽" },
    { name: "Пересчет товара", price: "4,5₽" },
    { name: "Формирование моно/микс короба", price: "110 руб за шт" },
    { name: "Формирование палеты стрейчирование", price: "500 руб за шт" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-gray-900">Услуги</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный ��пектр услуг по обработке и подготовке товаров к отправке
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation={index % 3 === 0 ? "fadeInLeft" : index % 3 === 1 ? "fadeInUp" : "fadeInRight"}
              delay={100 + (index % 6) * 100}
              duration={600}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-400 hover:-translate-y-1 hover:border-l-yellow-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700 group-hover:scale-110 transition-all duration-300 inline-block">
                        {service.price}
                      </span>
                    </div>
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
