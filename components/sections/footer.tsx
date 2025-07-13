import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import BunkerImageLogo from "../ui/bunker-image-logo"
import BunkerTextLogo from "../ui/bunker-text-logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BunkerImageLogo width={102} height={102} />
              <BunkerTextLogo className="text-2xl" />
            </div>
            <p className="text-gray-300 mb-4">Надежный партнер в сфере фулфиллмента в России.</p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+79991234567" className="hover:text-yellow-400 transition-colors cursor-pointer">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@bunker-logistics.ru"
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  info@bunker-logistics.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:text-yellow-400 transition-colors">
                  Наши цены
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-yellow-400 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-yellow-400 transition-colors">
                  Как работаем
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-yellow-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">Следите за нашими новостями и обновлениями</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 BUNKER. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
