import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Телефон</h3>
            <p className="text-gray-600">+7 (495) 123-45-67</p>
            <p className="text-gray-600">+86 138 0013 8000</p>
          </div>
          <div className="text-center">
            <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@bunker-logistics.com</p>
            <p className="text-gray-600">support@bunker-logistics.com</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Офисы</h3>
            <p className="text-gray-600">Москва, Россия</p>
            <p className="text-gray-600">Гуанчжоу, Китай</p>
          </div>
        </div>
      </div>
    </section>
  )
}
