import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Users, Target, Award, Globe, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            О компании <span className="text-yellow-400">BUNKER</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Мы создаем мосты между китайскими производителями и российскими предпринимателями, обеспечивая надежную и
            эффективную логистику.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша история</h2>
              <p className="text-xl text-gray-600">Путь от идеи до лидера рынка фулфиллмента</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Начало пути</h3>
                <p className="text-gray-600 mb-6">
                  BUNKER была основана в 2018 году группой предпринимателей, которые столкнулись с проблемами доставки
                  товаров из Китая. Мы решили создать сервис, который бы решал все логистические задачи комплексно.
                </p>
                <p className="text-gray-600">
                  За 6 лет работы мы выросли от небольшой команды до крупной логистической компании с собственными
                  складами в Китае и России, обслуживающей сотни клиентов ежемесячно.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">2018</div>
                    <div className="text-gray-600">Год основания</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">15</div>
                    <div className="text-gray-600">Городов доставки</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">99.8%</div>
                    <div className="text-gray-600">Сохранность</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Миссия и ценности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Принципы, которыми мы руководствуемся в работе</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-2 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Миссия</h3>
                <p className="text-gray-600">
                  Упростить международную торговлю, предоставляя надежные и эффективные логистические решения для
                  развития бизнеса наших клиентов.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Клиентский сервис</h3>
                <p className="text-gray-600">
                  Каждый клиент уникален. Мы находим индивидуальные решения и обеспечиваем персональную поддержку на
                  всех этапах сотрудничества.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Качество</h3>
                <p className="text-gray-600">
                  Мы не идем на компромиссы в вопросах качества. Каждый процесс отлажен и контролируется для достижения
                  максимального результата.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые делают BUNKER лучше каждый день</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Алексей Петров</h3>
                <p className="text-yellow-600 font-medium mb-3">Генеральный директор</p>
                <p className="text-gray-600 text-sm">
                  15 лет опыта в международной логистике. Основатель компании, эксперт по китайскому рынку.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Мария Сидорова</h3>
                <p className="text-yellow-600 font-medium mb-3">Директор по операциям</p>
                <p className="text-gray-600 text-sm">
                  Отвечает за операционную деятельность компании, контроль качества и развитие процессов.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Дмитрий Козлов</h3>
                <p className="text-yellow-600 font-medium mb-3">Руководитель склада в Китае</p>
                <p className="text-gray-600 text-sm">
                  Координирует работу складских комплексов в Китае, контролирует приемку и отправку товаров.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">География работы</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Наши офисы и склады расположены в ключевых логистических узлах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Китай</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Гуанчжоу</h4>
                    <p className="text-gray-300">Главный офис и складской комплекс 15,000 м²</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Шэньчжэнь</h4>
                    <p className="text-gray-300">Склад для электроники и IT-товаров 8,000 м²</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Иу</h4>
                    <p className="text-gray-300">Склад для товаров народного потребления 5,000 м²</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Россия</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Москва</h4>
                    <p className="text-gray-300">Головной офис и распределительный центр</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Санкт-Петербург</h4>
                    <p className="text-gray-300">Региональный офис и склад</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Екатеринбург</h4>
                    <p className="text-gray-300">Логистический центр для Урала и Сибири</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-800">Цифры, которые говорят о нашем профессионализме</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-800">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-800">Постоянных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-800">Отправлений в год</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">28,000м²</div>
              <div className="text-gray-800">Складских площадей</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
