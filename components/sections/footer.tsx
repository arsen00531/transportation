import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BunkerTextLogo from "@/components/ui/bunker-text-logo"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <BunkerTextLogo className="text-white text-3xl font-bold" />
          <p className="text-sm">
            Ваш надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" prefetch={false}>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" prefetch={false}>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" prefetch={false}>
              <Linkedin className="h-6 w-6" />
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
              <Link href="/services" className="hover:text-yellow-400 transition-colors" prefetch={false}>
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
              <Link href="/contact" className="hover:text-yellow-400 transition-colors" prefetch={false}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
          <div className="space-y-2 text-sm font-sans">
            {" "}
            {/* Применяем font-sans для справочной информации */}
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-yellow-400" />
              +7 (XXX) XXX-XX-XX
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-yellow-400" />
              info@bunker.ru
            </p>
            <p className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-yellow-400 flex-shrink-0" />
              г. Москва, ул. Примерная, д. 1
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Подписка</h3>
          <p className="text-sm">Получайте последние новости и специальные предложения.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Ваш email" className="flex-1 bg-gray-800 border-gray-700 text-white" />
            <Button type="submit" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Подписаться
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 font-sans">
        {" "}
        {/* Применяем font-sans для копирайта */}
        <p>&copy; {new Date().getFullYear()} BUNKER. Все права защищены.</p>
      </div>
    </footer>
  )
}
