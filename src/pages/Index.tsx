import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('main')

  const navigationItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'gameplay', label: 'Геймплей', icon: 'Gamepad2' },
    { id: 'characters', label: 'Персонажи', icon: 'Users' },
    { id: 'community', label: 'Сообщество', icon: 'MessageCircle' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'screenshots', label: 'Скриншоты', icon: 'Image' },
    { id: 'download', label: 'Скачать', icon: 'Download' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ]

  const gameFeatures = [
    { icon: 'Users', title: 'Командные бои 5v5', description: 'Соревнуйтесь в интенсивных командных сражениях' },
    { icon: 'Trophy', title: 'Турниры', description: 'Участвуйте в еженедельных турнирах за призы' },
    { icon: 'Zap', title: 'Быстрые матчи', description: 'Находите игру за считанные секунды' },
    { icon: 'Shield', title: 'Система рангов', description: 'Поднимайтесь по лестнице рейтинга' }
  ]

  const characters = [
    { name: 'Штормовик', role: 'Атакующий', description: 'Мощные дальние атаки' },
    { name: 'Защитник', role: 'Танк', description: 'Непробиваемая оборона' },
    { name: 'Призрак', role: 'Поддержка', description: 'Лечение и усиления' }
  ]

  const news = [
    { title: 'Обновление 2.1: Новая карта "Цитадель"', date: '15 августа 2025', type: 'Обновление' },
    { title: 'Летний турнир: Призовой фонд 100,000₽', date: '10 августа 2025', type: 'Турнир' },
    { title: 'Балансировка героев в патче 2.0.8', date: '5 августа 2025', type: 'Патч' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gaming-gradient rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold gaming-text-gradient">NEXUS ARENA</h1>
            </div>
            
            <div className="hidden lg:flex gap-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-gaming-orange text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </button>
              ))}
            </div>

            <Button className="lg:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16 animate-fade-in">
        
        {/* Hero Section */}
        {activeSection === 'main' && (
          <section className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold gaming-text-gradient">
                NEXUS ARENA
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
                Погрузитесь в мир эпических командных сражений! 
                Сражайтесь в турнирах, побеждайте соперников и станьте легендой арены.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="gaming-gradient hover-glow text-lg px-8 py-4 animate-pulse-glow">
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/20 hover:bg-white/10">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  Смотреть трейлер
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Features Grid */}
        {activeSection === 'main' && (
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover-glow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gaming-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {/* Gameplay Section */}
        {activeSection === 'gameplay' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Геймплей</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Мультиплеер 5v5</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Сражайтесь в командах по 5 игроков на множественных аренах. 
                  Каждый матч длится 15-20 минут с динамичным геймплеем и тактическими элементами.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">Средняя длительность матча: 18 минут</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">До 10 игроков одновременно</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Map" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">12 уникальных карт</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Турнирная система</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Участвуйте в еженедельных турнирах с призовыми фондами. 
                  Поднимайтесь в рейтинге и завоевывайте титулы.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Trophy" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">Еженедельные турниры</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Crown" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">Система рангов от Новичка до Легенды</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Gift" size={16} className="text-gaming-orange" />
                    <span className="text-gray-300">Эксклюзивные награды</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Characters Section */}
        {activeSection === 'characters' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Персонажи</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {characters.map((character, index) => (
                <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover-glow">
                  <div className="h-48 relative overflow-hidden">
                    {index === 0 && (
                      <img 
                        src="/img/2b8fc7d2-1aed-454b-b483-5ad73bfa8666.jpg" 
                        alt="Штормовик" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <div className="h-full gaming-gradient flex items-center justify-center">
                        <Icon name="Shield" size={80} className="text-white/70" />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <Icon name="Sparkles" size={80} className="text-white/70" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white">{character.name}</CardTitle>
                      <Badge variant="secondary" className="bg-gaming-orange/20 text-gaming-orange">
                        {character.role}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{character.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Community Section */}
        {activeSection === 'community' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Сообщество</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon name="Users" size={28} />
                  Присоединяйтесь к нам
                </h3>
                <div className="space-y-4">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Icon name="MessageCircle" size={20} className="mr-3" />
                    Discord сервер - 25,000+ игроков
                  </Button>
                  <Button className="w-full justify-start bg-red-600 hover:bg-red-700">
                    <Icon name="Youtube" size={20} className="mr-3" />
                    YouTube канал - 150K подписчиков
                  </Button>
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                    <Icon name="MessageSquare" size={20} className="mr-3" />
                    Официальный форум
                  </Button>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Статистика сообщества</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Активных игроков</span>
                    <span className="text-2xl font-bold text-gaming-orange">127,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Матчей сыграно</span>
                    <span className="text-2xl font-bold text-gaming-blue">2.8M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Турниров проведено</span>
                    <span className="text-2xl font-bold text-gaming-purple">450+</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* News Section */}
        {activeSection === 'news' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Новости</h2>
            
            <div className="space-y-6">
              {news.map((article, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover-glow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-gaming-orange/20 text-gaming-orange">{article.type}</Badge>
                          <span className="text-gray-400">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                      </div>
                      <Button variant="outline" className="border-white/20 hover:bg-white/10 w-fit">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {activeSection === 'screenshots' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Скриншоты</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({length: 6}).map((_, index) => (
                <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover-glow">
                  <div className="h-64 relative overflow-hidden">
                    {index === 0 && (
                      <img 
                        src="/img/13d04dcf-9bbf-472b-bad9-cd336d36f333.jpg" 
                        alt="Скриншот боя" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="/img/dec6b088-6c4d-4012-a3c2-6c8129a0a357.jpg" 
                        alt="Турнир" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index > 1 && (
                      <div className="h-full gaming-gradient flex items-center justify-center">
                        <Icon name="Camera" size={60} className="text-white/50" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-400 text-center">
                      {index === 0 ? 'Эпичные сражения в арене' : 
                       index === 1 ? 'Турнирные бои на большой сцене' : 
                       `Скриншот игрового процесса #${index + 1}`}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Download Section */}
        {activeSection === 'download' && (
          <section className="space-y-8 text-center">
            <h2 className="text-4xl font-bold gaming-text-gradient mb-8">Скачать игру</h2>
            
            <Card className="bg-white/5 border-white/10 max-w-2xl mx-auto">
              <CardContent className="p-12 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Nexus Arena - Бесплатно</h3>
                  <p className="text-gray-400 text-lg">
                    Системные требования: Windows 10+, 8GB RAM, DirectX 11
                  </p>
                  <p className="text-sm text-gray-500">Размер: 4.2 GB</p>
                </div>
                
                <div className="space-y-4">
                  <Button size="lg" className="gaming-gradient hover-glow text-lg px-12 py-4 w-full">
                    <Icon name="Download" size={24} className="mr-3" />
                    Скачать для Windows
                  </Button>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" className="border-white/20 hover:bg-white/10">
                      <Icon name="Smartphone" size={20} className="mr-2" />
                      Android
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10">
                      <Icon name="Monitor" size={20} className="mr-2" />
                      Mac
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Contacts Section */}
        {activeSection === 'contacts' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center gaming-text-gradient mb-8">Контакты</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-gaming-orange" />
                    <span className="text-gray-300">support@nexusarena.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={20} className="text-gaming-orange" />
                    <span className="text-gray-300">Discord: NexusArena#1337</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Globe" size={20} className="text-gaming-orange" />
                    <span className="text-gray-300">www.nexusarena.ru</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Техническая поддержка</h3>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Наша команда поддержки работает 24/7 и готова помочь с любыми вопросами.
                  </p>
                  <Button className="gaming-gradient hover-glow w-full">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Написать в поддержку
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 gaming-gradient rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold gaming-text-gradient">NEXUS ARENA</span>
            </div>
            <p className="text-gray-400">© 2025 Nexus Arena. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}