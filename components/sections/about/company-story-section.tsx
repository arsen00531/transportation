import { Calendar, TrendingUp, Globe, Award } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import BunkerTextLogo from "@/components/ui/bunker-text-logo" // Обновите импорт

export function AboutCompanyStorySection() {
  const stats = [
    { icon: Calendar, number: 2018, label: "Год основания" },
    { icon: TrendingUp, number: 500, suffix: "+", label: "Довольных клиентов" },
    { icon: Globe, number: 15, label: "Городов доставки" },
    { icon: Award, number: 99.8, suffix: "%", label: "Сохранность" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeInUp" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша история</h2>
              <p className="text-xl text-gray-600">Путь от идеи до лидера рынка фулфиллмента</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" delay={200} duration={800}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Начало пути</h3>
                <p className="text-gray-600 mb-6">
                  Компания <BunkerTextLogo /> была основана группой предпренимателей, которые столкнулись с множествами
                  проблем при работе с другими фулфиллментами, учитывая все трудности и недостатки существующих решений,
                  мы решили создать идеальный сервис, который подходит большинству селлеров.
                </p>
                <p className="text-gray-600">
                  За 3 года работы объём нашей работы увеличился в 5 раз, мы проработали со всеми возможными категориями
                  товаров.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={400} duration={800}>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <AnimatedSection key={index} animation="scaleIn" delay={600 + index * 150} duration={600}>
                      <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <stat.icon className="h-12 w-12 text-yellow-400 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.number === 2018 ? (
                            stat.number
                          ) : (
                            <AnimatedCounter end={stat.number} suffix={stat.suffix || ""} />
                          )}
                        </div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
