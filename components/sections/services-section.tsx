import { Package, Truck, Shield, CheckCircle, Headset } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Полный спектр фулфиллмент-услуг для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-yellow-400 transition-colors">
            <CardContent className="p-8 text-center">
              <Package className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Складские услуги</h3>
              <p className="text-gray-600 mb-6">
                Приемка, хранение и обработка товаров на складах в Китае. Контроль качества и упаковка.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Приемка товара
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Контроль качества
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Упаковка и маркировка
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-yellow-400 transition-colors">
            <CardContent className="p-8 text-center">
              <Truck className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Логистика</h3>
              <p className="text-gray-600 mb-6">
                Надежная доставка по всей России
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Консолидация грузов
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Забор товара с Москвы и МО
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Доставка до складов
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-yellow-400 transition-colors">
            <CardContent className="p-8 text-center">
              <Headset className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Поддержка</h3>
              <p className="text-gray-600 mb-6">
                Оперативная помощь и сопровождение
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Бесплатная консультация
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  Бесплатный расчет стоимости
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                  На связи 24/7
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
