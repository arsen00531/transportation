import { AnimatedSection } from "@/components/ui/animated-section"

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Заявка",
      description: "Отправляете нам список товаров и требования",
    },
    {
      number: 2,
      title: "Склад",
      description: "Принимаем, проверяем, маркируем и упаковываем на складе",
    },
    {
      number: 3,
      title: "Хранение",
      description: "Размещаем товар на складе и обеспечиваем его безопасное хранение",
    },
    {
      number: 4,
      title: "Доставка",
      description: "Осуществляем доставку товара на все склады по территории России.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Чёткий и понятный процесс — от приёма товара до доставки клиенту. Мы берём на себя все этапы, чтобы вы
              сосредоточились на ��родажах.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 150} duration={600}>
              <div className="text-center group">
                <div className="bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
