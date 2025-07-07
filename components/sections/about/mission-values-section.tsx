import { Target, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function AboutMissionValuesSection() {
  const values = [
    {
      icon: Target,
      title: "Миссия",
      description:
        "Упростить селлерам работу с маркетплейсами, мы даем продавцам маркетплейсов возможность сосредоточиться на продвижении их кабинетов.",
    },
    {
      icon: Users,
      title: "Клиентский сервис",
      description:
        "Каждый клиент уникален. Мы находим индивидуальные решения и обеспечиваем персональную поддержку на всех этапах сотрудничества.",
    },
    {
      icon: Award,
      title: "Качество",
      description:
        "Мы не идем на компромиссы в вопросах качества. Каждый процесс отлажен и контролируется для достижения максимального результата.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Миссия и ценности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Принципы, которыми мы руководствуемся в работе</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 200} duration={800}>
              <Card className="text-center border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-yellow-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
