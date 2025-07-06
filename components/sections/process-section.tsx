export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Чёткий и понятный процесс — от приёма товара до доставки клиенту. Мы берём на себя все этапы, чтобы вы сосредоточились на продажах.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка</h3>
            <p className="text-gray-600">Отправляете нам список товаров и требования</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Склад</h3>
            <p className="text-gray-600">Принимаем, проверяем, маркируем и упаковываем на складе</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Хранение</h3>
            <p className="text-gray-600">Размещаем товар на складе и обеспечиваем его безопасное хранение</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Доставка</h3>
            <p className="text-gray-600">Доставляем товар до вашего склада в России</p>
          </div>
        </div>
      </div>
    </section>
  )
}
