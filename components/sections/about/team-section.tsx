import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import BunkerLogo from "@/components/ui/bunker-text-logo"

export function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Тимербулат",
      position: "Генеральный директор",
      description: "Основатель компании, отвечает за операционные процессы",
    },
    {
      name: "Усман",
      position: "Генеральный директор",
      description: "Отвечает за качество упаковки и транспортировки товаров",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые делают <BunkerLogo /> лучше каждый день</p>
          </div>
        </AnimatedSection>

        <div className={`grid md:grid-cols-${teamMembers.length} gap-8 max-w-6xl mx-auto`}>
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 200} duration={800}>
              <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center hover:bg-yellow-100 transition-colors duration-300">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
