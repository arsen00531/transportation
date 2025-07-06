import Link from "next/link"

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
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  Складские услуги
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  Логистика
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  Таможенное оформление
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-yellow-400 transition-colors">
                  Контроль качества
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  Наши склады
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  Карьера
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Отследить груз
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Документы
                </a>
              </li>
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
