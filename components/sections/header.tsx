"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/ui/contact-modal"
import BunkerImageLogo from "@/components/ui/bunker-image-logo"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-gray-900 text-white py-1 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <BunkerImageLogo width={72} height={72} />
          <span className="text-2xl font-bold text-yellow-400 font-serif">BUNKER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-8">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Главная
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">
            О нас
          </Link>
          {/* Ссылка "Наши цены" удалена */}
          <Link href="/#services" className="hover:text-yellow-400 transition-colors">
            Услуги
          </Link>
          <Link href="/#process" className="hover:text-yellow-400 transition-colors">
            Как работаем
          </Link>
          <Link href="/#advantages" className="hover:text-yellow-400 transition-colors">
            Преимущества
          </Link>
          <Link href="/#contact" className="hover:text-yellow-400 transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <ContactModal>
          <Button className="hidden xl:block bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            Получить конс��льтацию
          </Button>
        </ContactModal>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-4 bg-gray-800">
          <Link href="/" className="block py-2 hover:text-yellow-400 transition-colors" onClick={closeMobileMenu}>
            Главная
          </Link>
          <Link href="/about" className="block py-2 hover:text-yellow-400 transition-colors" onClick={closeMobileMenu}>
            О нас
          </Link>
          {/* Ссылка "Наши цены" удалена */}
          <Link
            href="/#services"
            className="block py-2 hover:text-yellow-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Услуги
          </Link>
          <Link
            href="/#process"
            className="block py-2 hover:text-yellow-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Как работаем
          </Link>
          <Link
            href="/#advantages"
            className="block py-2 hover:text-yellow-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Преимущества
          </Link>
          <Link
            href="/#contact"
            className="block py-2 hover:text-yellow-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Контакты
          </Link>
          <div className="pt-4 border-t border-gray-700">
            <ContactModal>
              <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500" onClick={closeMobileMenu}>
                Получить консультацию
              </Button>
            </ContactModal>
          </div>
        </nav>
      </div>
    </header>
  )
}
