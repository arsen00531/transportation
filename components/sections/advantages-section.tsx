import { Clock, Users, Star, Package, Tag } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function AdvantagesSection() {
  const advantages = [
    {
      icon: Star,
      title: "Контроль качества",
      description: "Тщательная проверка каждой партии товаров",
    },
    {
      icon: Clock,
      title: "Быстрая доставка",
      description: "Минимальные сроки доставки благодаря отлаженной логистике",
    },
    {
      icon: Users,
      title: "Персональный менеджер",
      description: "Индивидуальный подход и постоянная поддержка",
    },
    {
      icon: Package,
      title: "Скорость упаковки",
      description: "До 5 000 единиц в день — быстро и без потери качества",
    },
    {
      icon: Tag,
      title: "Выгоднее конкурентов",
      description: "Предлагаем лучшие условия на рынке фулфилмента",
    },
  ]

  return (
    <section id="advantages" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Преимущества работы с BUNKER</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 100}
              duration={600}
            >
              <div className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                <advantage.icon className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
