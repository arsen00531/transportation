export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4">BUNKER</div>
            <p className="text-gray-300">Надежный партнер в сфере фулфиллмента и логистики между Китаем и Россией.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Складские услуги</li>
              <li>Доставка товаров</li>
              <li>Таможенное оформление</li>
              <li>Контроль качества</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>О нас</li>
              <li>Наши склады</li>
              <li>Отзывы клиентов</li>
              <li>Карьера</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Часто задаваемые вопросы</li>
              <li>Отследить груз</li>
              <li>Техподдержка</li>
              <li>Документы</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BUNKER. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
