import { Package, Truck, CheckCircle, Headset } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Складские услуги",
      description: "Приемка, хранение и обработка товаров на складах в Китае. Контроль качества и упаковка.",
      features: ["Приемка товара", "Контроль качества", "Упаковка и маркировка"],
    },
    {
      icon: Truck,
      title: "Логистика",
      description: "Надежная доставка по всей России",
      features: ["Консолидация грузов", "Забор товара с Москвы и МО", "Доставка до складов"],
    },
    {
      icon: Headset,
      title: "Поддержка",
      description: "Оперативная помощь и сопровождение",
      features: ["Бесплатная консультация", "Бесплатный расчет стоимости", "На связи 24/7"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр фулфиллмент-услуг для вашего бизнеса
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 200}
              duration={800}
            >
              <Card className="border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-left space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
