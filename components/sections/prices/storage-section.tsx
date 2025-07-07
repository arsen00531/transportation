import { Warehouse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function PricesStorageSection() {
  const storage = [{ name: "Хранение товара", price: "70₽/короб", description: "размер 60×40×40" }]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Warehouse className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-gray-900">Хранение</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Безопасное хранение товаров на современных складских комплексах
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-md mx-auto">
          {storage.map((item, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={300} duration={800}>
              <Card className="hover:shadow-xl transition-all duration-500 border-l-4 border-l-yellow-400 hover:border-l-yellow-500 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    {/* Декоративный элемент */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.price}
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-500 transition-colors">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
