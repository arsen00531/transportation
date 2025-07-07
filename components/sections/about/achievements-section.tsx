import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function AboutAchievementsSection() {
  const achievements = [
    { number: 6, label: "Лет на рынке" },
    { number: 500, label: "Постоянных клиентов", suffix: "+" },
    { number: 50000, label: "Отправлений в год", suffix: "+" },
    { number: 28000, label: "Складских площадей", suffix: "м²" },
  ]

  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-800">Цифры, которые говорят о нашем профессионализме</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={index * 200} duration={600}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <AnimatedCounter
                  end={achievement.number}
                  suffix={achievement.suffix || ""}
                  className="text-4xl font-bold text-gray-900 mb-2"
                />
                <div className="text-gray-800">{achievement.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
