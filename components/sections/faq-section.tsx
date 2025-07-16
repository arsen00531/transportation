"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"

const faqData = [
  {
    question: "Что такое фулфилмент простыми словами?",
    answer:
      "Фулфилмент — это комплексная услуга по обработке заказов интернет-магазинов. Мы принимаем ваши товары на склад, обрабатываем заказы клиентов, упаковываем и отправляем покупки. Фулфилмент для маркетплейсов включает в себя приемку, хранение, сборку заказов и доставку до покупателя.",
  },
  {
    question: "Работаете ли вы с Озон и Wildberries?",
    answer:
      "Да, мы предоставляем фулфилмент Ozon и фулфилмент Wildberries. Наша команда имеет большой опыт работы с этими маркетплейсами и знает все особенности их требований к упаковке и отправке товаров. Фулфилмент для работы с маркетплейсами — наша основная специализация.",
  },
  {
    question: "Какая цена фулфилмент услуг для маркетплейсов?",
    answer:
      "Фулфилмент для маркетплейсов цена зависит от объема заказов, типа товаров и дополнительных услуг. Мы предлагаем гибкую тарифную систему: от 150 рублей за обработку одного заказа. Точную стоимость рассчитаем индивидуально после анализа ваших потребностей.",
  },
  {
    question: "Где находится ваш склад?",
    answer:
      "Наш фулфилмент центр расположен в Московской области, что обеспечивает быструю доставку по всей России. Фулфилмент Москва и область — это оптимальное расположение для обслуживания большинства российских интернет-магазинов и маркетплейсов.",
  },
  {
    question: "Какие услуги входят в фулфилмент?",
    answer:
      "Фулфилмент Россия включает: приемку и размещение товаров на складе, обработку заказов в режиме реального времени, профессиональную упаковку с брендингом, отправку через надежных курьерских партнеров, обработку возвратов и работу с клиентской поддержкой.",
  },
  {
    question: "Как быстро обрабатываются заказы?",
    answer:
      "Стандартное время обработки заказа — до 24 часов с момента поступления. Для срочных заказов предусмотрена экспресс-обработка в течение 2-4 часов. Работа фулфилмент Москва позволяет нам обеспечивать высокую скорость обработки благодаря оптимизированным процессам.",
  },
  {
    question: "Можно ли отслеживать статус заказов?",
    answer:
      "Да, мы предоставляем полную прозрачность процесса. Вы получаете доступ к личному кабинету, где можете отслеживать все этапы: от поступления товара на склад до отправки покупателю. Фулфилмент для маркетплейсов включает детальную аналитику и отчетность.",
  },
  {
    question: "Работаете ли вы с возвратами?",
    answer:
      "Конечно! Обработка возвратов — важная часть нашего сервиса. Мы принимаем возвращенные товары, проверяем их состояние, при необходимости восстанавливаем товарный вид и возвращаем на склад для повторной продажи. Это особенно важно для фулфилмент Ozon и Wildberries.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о фулфилмент услугах для маркетплейсов. Узнайте больше о том, как работает
              фулфилмент в России.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="mb-4">
                <div
                  className={cn(
                    "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md",
                    openItems.includes(index) && "shadow-md",
                  )}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0",
                        openItems.includes(index) && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Не нашли ответ на свой вопрос?</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Задать вопрос
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
