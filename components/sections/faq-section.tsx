"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/ui/contact-modal"
import { AnimatedSection } from "@/components/ui/animated-section"

const faqData = [
  {
    question: "Что такое фулфилмент простыми словами?",
    answer:
      "Фулфилмент - это комплексная услуга по обработке заказов интернет-магазинов. Мы принимаем ваши товары на склад, упаковываем заказы покупателей и отправляем их. Фулфилмент позволяет владельцам бизнеса сосредоточиться на продажах, а всю логистику доверить профессионалам.",
  },
  {
    question: "Какие услуги фулфилмента для маркетплейсов вы предоставляете?",
    answer:
      "Мы предоставляем полный спектр фулфилмент услуг: приемка и размещение товаров на складе, обработка заказов с Ozon и Wildberries, упаковка в фирменные материалы, маркировка и этикетирование, отправка через курьерские службы, обработка возвратов и работа с браком.",
  },
  {
    question: "Работаете ли вы с фулфилментом для Озон и Ozon?",
    answer:
      "Да, мы являемся официальными партнерами Ozon и предоставляем полный спектр фулфилмент услуг для этого маркетплейса. Наш фулфилмент Ozon включает быструю обработку заказов, соблюдение всех требований площадки и интеграцию с системой отчетности.",
  },
  {
    question: "Предоставляете ли фулфилмент услуги для Wildberries?",
    answer:
      "Конечно! Мы работаем с Wildberries и знаем все особенности этого маркетплейса. Наш фулфилмент Wildberries включает правильную упаковку согласно требованиям площадки, быструю отправку заказов и работу с системой штрафов и рейтингов.",
  },
  {
    question: "Какие цены на фулфилмент для маркетплейсов?",
    answer:
      "Стоимость фулфилмент услуг зависит от объема заказов, типа товаров и дополнительных услуг. Базовая цена включает хранение, обработку заказа и упаковку. Для расчета точной стоимости фулфилмента для маркетплейсов свяжитесь с нами для индивидуального предложения.",
  },
  {
    question: "Где находится ваш фулфилмент центр?",
    answer:
      "Наш основной фулфилмент центр расположен в Московской области с удобной транспортной доступностью. Это позволяет нам быстро обрабатывать заказы и отправлять их по всей России. Работа фулфилмент Москва ведется с соблюдением всех стандартов качества.",
  },
  {
    question: "Предоставляете ли вы фулфилмент услуги по всей России?",
    answer:
      "Да, наш фулфилмент Россия покрывает всю территорию страны. Мы работаем с ведущими транспортными компаниями и можем доставлять заказы в любой регион России. Особое внимание уделяем фулфилменту в Московской области и центральном регионе.",
  },
  {
    question: "Как начать работу с вашими фулфилмент услугами?",
    answer:
      "Для начала работы свяжитесь с нами для консультации. Мы изучим специфику вашего бизнеса, объемы и требования. Затем подготовим индивидуальное предложение по фулфилменту для работы с маркетплейсами, поможем с интеграцией и запустим процессы на нашем складе.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о фулфилмент услугах для маркетплейсов
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="mb-4">
                <div
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
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
            <ContactModal
              title="Задать вопрос"
              description="Оставьте свои контактные данные и мы ответим на все ваши вопросы о фулфилмент услугах"
            >
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                Задать вопрос
              </Button>
            </ContactModal>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
