import { Clock, Users, Star, Package, Tag } from "lucide-react"

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Преимущества работы с BUNKER</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-start space-x-4">
            <Star className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Контроль качества</h3>
              <p className="text-gray-300">Тщательная проверка каждой партии товаров</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-300">Минимальные сроки доставки благодаря отлаженной логистике</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Users className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Персональный менеджер</h3>
              <p className="text-gray-300">Индивидуальный подход и постоянная поддержка</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Package className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Скорость упаковки</h3>
              <p className="text-gray-300">До 5 000 единиц в день — быстро и без потери качества</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Tag className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Выгоднее конкурентов</h3>
              <p className="text-gray-300">Предлагаем лучшие условия на рынке фулфилмента</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
