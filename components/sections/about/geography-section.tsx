import { Globe } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function AboutGeographySection() {
  const chinaLocations = [
    {
      city: "Гуанчжоу",
      description: "Главный офис и складской комплекс 15,000 м²",
    },
    {
      city: "Шэньчжэнь",
      description: "Склад для электроники и IT-товаров 8,000 м²",
    },
    {
      city: "Иу",
      description: "Склад для товаров народного потребления 5,000 м²",
    },
  ]

  const russiaLocations = [
    {
      city: "Москва",
      description: "Головной офис и распределительный центр",
    },
    {
      city: "Санкт-Петербург",
      description: "Региональный офис и склад",
    },
    {
      city: "Екатеринбург",
      description: "Логистический центр для Урала и Сибири",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">География работы</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Наши офисы и склады расположены в ключевых логистических узлах
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection animation="fadeInLeft" delay={200} duration={800}>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Китай</h3>
              <div className="space-y-4">
                {chinaLocations.map((location, index) => (
                  <AnimatedSection key={index} animation="fadeInLeft" delay={400 + index * 150} duration={600}>
                    <div className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                      <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1 group-hover:rotate-180 transition-transform duration-500" />
                      <div>
                        <h4 className="font-bold">{location.city}</h4>
                        <p className="text-gray-300">{location.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={300} duration={800}>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Россия</h3>
              <div className="space-y-4">
                {russiaLocations.map((location, index) => (
                  <AnimatedSection key={index} animation="fadeInRight" delay={500 + index * 150} duration={600}>
                    <div className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                      <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1 group-hover:rotate-180 transition-transform duration-500" />
                      <div>
                        <h4 className="font-bold">{location.city}</h4>
                        <p className="text-gray-300">{location.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
