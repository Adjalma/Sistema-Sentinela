import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar, 
  Users, 
  Code, 
  Target, 
  Zap, 
  Shield, 
  Star,
  Clock,
  Award,
  Brain,
  Rocket,
  Heart,
  CheckCircle,
  Play,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Smartphone as Mobile,
  Wifi,
  Battery,
  Volume2,
  Camera,
  MapPin,
  Compass,
  Navigation,
  MousePointer,
  Moon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoCrux: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Navigation,
      title: 'Navegação Inteligente',
      description: 'Sistema de navegação adaptativo que aprende com seus hábitos',
      details: 'Roteamento otimizado baseado em tráfego, horários e preferências'
    },
    {
      icon: MapPin,
      title: 'Geolocalização Precisa',
      description: 'GPS de alta precisão com suporte offline',
      details: 'Mapas offline, navegação sem internet e atualizações em tempo real'
    },
    {
      icon: Compass,
      title: 'Orientação Intuitiva',
      description: 'Interface de navegação clara e fácil de usar',
      details: 'Indicações visuais, sonoras e hápticas para máxima clareza'
    },
    {
      icon: Wifi,
      title: 'Conectividade Avançada',
      description: 'Sincronização em tempo real entre dispositivos',
      details: 'Compartilhamento de rotas, localização em tempo real e backup na nuvem'
    },
    {
      icon: Battery,
      title: 'Otimização de Bateria',
      description: 'Consumo inteligente de energia para longas jornadas',
      details: 'Modo economia, navegação noturna e otimizações automáticas'
    },
    {
      icon: Volume2,
      title: 'Instruções de Voz',
      description: 'Navegação por voz em múltiplos idiomas',
      details: 'Comandos de voz, instruções claras e personalização de voz'
    }
  ];

  const technologies = [
    { name: 'React Native', category: 'Mobile', description: 'Framework para desenvolvimento mobile' },
    { name: 'TypeScript', category: 'Linguagem', description: 'JavaScript tipado para maior segurança' },
    { name: 'Expo', category: 'Platform', description: 'Plataforma de desenvolvimento React Native' },
    { name: 'Google Maps API', category: 'Maps', description: 'API de mapas e geolocalização' },
    { name: 'Firebase', category: 'Backend', description: 'Backend-as-a-Service' },
    { name: 'Redux', category: 'State', description: 'Gerenciamento de estado global' },
    { name: 'AsyncStorage', category: 'Storage', description: 'Armazenamento local persistente' },
    { name: 'React Navigation', category: 'Navigation', description: 'Sistema de navegação mobile' },
    { name: 'Location Services', category: 'GPS', description: 'Serviços de localização nativos' },
    { name: 'Push Notifications', category: 'Notifications', description: 'Notificações push' }
  ];

  const mobileFeatures = [
    { title: 'Interface Responsiva', description: 'Adapta-se a diferentes tamanhos de tela', icon: Monitor },
    { title: 'Gestos Intuitivos', description: 'Navegação por gestos naturais', icon: MousePointer },
    { title: 'Modo Escuro', description: 'Tema escuro para navegação noturna', icon: Moon },
    { title: 'Acessibilidade', description: 'Recursos para usuários com necessidades especiais', icon: Eye }
  ];

  const stats = [
    { number: '60%', label: 'Progresso', icon: Target },
    { number: '1.8K', label: 'Linhas de Código', icon: Code },
    { number: '12', label: 'Telas', icon: Monitor },
    { number: '6', label: 'Meses', icon: Calendar }
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'team', label: 'Equipe', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao portfólio</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Project info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status and progress */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-4 py-2 text-sm font-medium rounded-full border bg-yellow-100 text-yellow-800 border-yellow-200">
                  Em Desenvolvimento
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-blue-600">60% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Crux</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Um aplicativo móvel de navegação inteligente desenvolvido com React Native 
                que revoluciona a forma como as pessoas se orientam e navegam pelo mundo. 
                Combina tecnologia de ponta com interface intuitiva para uma experiência única.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/Adjalma/Crux/crux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://expo.dev/@sistema-sentinela/crux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Testar App</span>
                </motion.a>
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Share2 className="w-5 h-5" />
                  <span>Compartilhar</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - Project visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 overflow-hidden shadow-xl">
                {/* Mobile mockup */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-56 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                      <Navigation className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Technologies preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tecnologias Principais</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full border border-blue-200"
                      >
                        {tech.name}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{technologies.length - 6}
                    </span>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === 'overview' && (
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Project description */}
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Projeto</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p className="text-xl mb-6">
                    O Crux é um aplicativo móvel de navegação inteligente que combina a 
                    precisão dos sistemas GPS modernos com uma interface intuitiva e 
                    funcionalidades avançadas. Desenvolvido com React Native, oferece 
                    uma experiência nativa em iOS e Android.
                  </p>
                  <p className="mb-6">
                    O aplicativo utiliza algoritmos de machine learning para aprender 
                    com os padrões de navegação do usuário, oferecendo rotas personalizadas 
                    e sugestões inteligentes. Com suporte offline e sincronização em 
                    tempo real, o Crux funciona mesmo sem conexão com a internet.
                  </p>
                  <p>
                    A interface foi projetada com foco na acessibilidade e usabilidade, 
                    oferecendo navegação por voz, instruções claras e personalização 
                    completa da experiência do usuário.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Navegação Inteligente</h3>
                  <p className="text-gray-600">
                    Algoritmos que aprendem e se adaptam aos seus hábitos
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modo Offline</h3>
                  <p className="text-gray-600">
                    Navegação completa mesmo sem conexão com a internet
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Navegação por Voz</h3>
                  <p className="text-gray-600">
                    Instruções claras e comandos de voz em múltiplos idiomas
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Funcionalidades Principais</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stack Tecnológico</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center group hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-blue-600 mb-2">{tech.category}</p>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'mobile' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recursos Mobile</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {mobileFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile development info */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desenvolvimento Mobile</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  O Crux é desenvolvido usando React Native com Expo, garantindo compatibilidade 
                  nativa com iOS e Android. A arquitetura modular permite fácil manutenção 
                  e atualizações, enquanto o uso de TypeScript garante código robusto e confiável.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Plataformas Suportadas:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• iOS 12.0+</li>
                      <li>• Android 8.0+</li>
                      <li>• Tablets e smartphones</li>
                      <li>• Modo paisagem e retrato</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recursos Nativos:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• GPS e localização</li>
                      <li>• Notificações push</li>
                      <li>• Armazenamento local</li>
                      <li>• Câmera e sensores</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'timeline' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cronograma do Projeto</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Timeline Total</h3>
                    <p className="text-gray-600">Duração estimada do projeto</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">6 meses</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Última Atualização</h3>
                    <p className="text-gray-600">Implementação de navegação offline</p>
                  </div>
                  <div className="text-lg font-semibold text-blue-600">10 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próximo Marco</h3>
                    <p className="text-gray-600">Integração com assistentes de voz</p>
                  </div>
                  <div className="text-lg font-semibold text-blue-600">Fevereiro, 2024</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipe do Projeto</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Mobile Developer', 'UI/UX Designer', 'Backend Developer', 'QA Engineer'].map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member}</h3>
                    <p className="text-sm text-gray-600">
                      Especialista em desenvolvimento mobile
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjetoCrux;
