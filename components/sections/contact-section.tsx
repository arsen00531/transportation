import { Phone, Mail, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Телефон",
      info: [
        { text: "+7 (917) 597-38-69", href: "tel:+79175973869" },
        { text: "+7 (919) 685-23-08", href: "tel:+79196852308" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      info: [
        { text: "info@bunker-logistics.com", href: "mailto:info@bunker-logistics.com" },
        { text: "support@bunker-logistics.com", href: "mailto:support@bunker-logistics.com" },
      ],
    },
    {
      icon: MapPin,
      title: "Офисы",
      info: [
        { text: "Москва, Россия", href: null },
        { text: "Гуанчжоу, Китай", href: null },
      ],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 200} duration={800}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <contact.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                {contact.info.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-gray-600">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-yellow-600 transition-colors cursor-pointer hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
