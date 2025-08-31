import Link from "next/link"
import BunkerTextLogo from "@/components/ui/bunker-text-logo"
import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <BunkerTextLogo className="text-white text-3xl font-bold" />
          <p className="text-sm">
            Ваш надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/bunker.fulfillment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              prefetch={false}
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://t.me/FFbunkerFF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              prefetch={false}
            >
              <MessageCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                Услуги
              </Link>
            </li>
            <li>
              <Link href="/prices" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                Цены
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                О нас
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
          <div className="space-y-2 text-sm font-sans">
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-yellow-400" />
              <a
                href="tel:+79175973869"
                className="hover:text-yellow-600 transition-colors cursor-pointer hover:underline"
              >
                +7 (917) 597-38-69
              </a>
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-yellow-400" />
              <a
                href="mailto:bogolovusman1@gmail.com"
                className="hover:text-yellow-600 transition-colors cursor-pointer hover:underline"
              >
                bogolovusman1@gmail.com
              </a>
            </p>
            <p className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-yellow-400 flex-shrink-0" />
              <a
                href="https://yandex.ru/maps/org/bunker/180877153807"
                className="hover:text-yellow-600 transition-colors cursor-pointer hover:underline"
                target="_blank"
              >
                Москва, Солдатский переулок, 8
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 font-sans">
        <p>&copy; {new Date().getFullYear()} BUNKER. Все права защищены.</p>
      </div>
    </footer>
  )
}
