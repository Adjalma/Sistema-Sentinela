import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
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
  Mountain,
  MapPin,
  Compass,
  Camera,
  Calendar as CalendarIcon,
  Trophy,
  Map,
  Navigation
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoClubeMontanha: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Mountain,
      title: 'Planejamento de Trilhas',
      description: 'Sistema completo para planejar aventuras na montanha',
      details: 'Roteiros personalizados, dificuldade adaptativa e segurança'
    },
    {
      icon: Map,
      title: 'Mapas Interativos',
      description: 'Navegação offline com mapas topográficos detalhados',
      details: 'GPS integrado, pontos de interesse e trilhas marcadas'
    },
    {
      icon: Users,
      title: 'Comunidade de Aventureiros',
      description: 'Conecte-se com outros amantes da montanha',
      details: 'Grupos, eventos, compartilhamento de experiências'
    },
    {
      icon: Camera,
      title: 'Galeria de Aventuras',
      description: 'Compartilhe fotos e vídeos das suas conquistas',
      details: 'Upload automático, geotagging e stories de aventura'
    },
    {
      icon: Trophy,
      title: 'Sistema de Conquistas',
      description: 'Gamificação para motivar novas aventuras',
      details: 'Badges, rankings e desafios mensais'
    },
    {
      icon: Shield,
      title: 'Segurança na Montanha',
      description: 'Alertas de segurança e protocolos de emergência',
      details: 'Check-in automático, alertas meteorológicos e SOS'
    }
  ];

  const technologies = [
    { name: 'Flask', category: 'Backend', description: 'Framework Python para web' },
    { name: 'React', category: 'Frontend', description: 'Biblioteca JavaScript' },
    { name: 'PostgreSQL', category: 'Database', description: 'Banco de dados relacional' },
    { name: 'Python', category: 'Linguagem', description: 'Linguagem principal' },
    { name: 'JavaScript', category: 'Frontend', description: 'JavaScript para interatividade' },
    { name: 'CSS3', category: 'Styling', description: 'Estilização moderna' },
    { name: 'Google Maps API', category: 'Maps', description: 'API de mapas' },
    { name: 'SQLAlchemy', category: 'ORM', description: 'ORM para Python' },
    { name: 'Jinja2', category: 'Templates', description: 'Sistema de templates' },
    { name: 'Bootstrap', category: 'UI', description: 'Framework CSS' }
  ];

  const adventureStats = [
    { metric: 'Trilhas Cadastradas', value: '2.1K', icon: Mountain, color: 'text-green-500' },
    { metric: 'Aventureiros Ativos', value: '3.5K', icon: Users, color: 'text-blue-500' },
    { metric: 'Fotos Compartilhadas', value: '15.8K', icon: Camera, color: 'text-purple-500' },
    { metric: 'Conquistas', value: '8.2K', icon: Trophy, color: 'text-orange-500' }
  ];

  const stats = [
    { number: '100%', label: 'Progresso', icon: Target },
    { number: '4.5K', label: 'Linhas de Código', icon: Code },
    { number: '25', label: 'Páginas', icon: Monitor },
    { number: '8', label: 'Meses', icon: Calendar }
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'team', label: 'Equipe', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-500/10 via-orange-500/10 to-red-500/10">
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
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
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
                <span className="px-4 py-2 text-sm font-medium rounded-full border bg-green-100 text-green-800 border-green-200">
                  Em Produção
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">100% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">Clube da Montanha</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Uma plataforma completa para amantes da montanha e aventuras ao ar livre. 
                Desenvolvido com Flask e React, conecta aventureiros, facilita o planejamento 
                de trilhas e promove a segurança na montanha.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-green-600" />
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
                  href="https://github.com/Adjalma/Clube-da-Montanha/clube-montanha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://clubedamontanha.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Visitar Site</span>
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
                {/* Project image placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                    CM
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-orange-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
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
                        className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full border border-green-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-orange-500/5 rounded-3xl pointer-events-none" />
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
                      ? 'text-green-600 border-b-2 border-green-600'
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
                    O Clube da Montanha é uma plataforma completa que une tecnologia e 
                    paixão pela natureza. Desenvolvido para conectar aventureiros, facilitar 
                    o planejamento de trilhas e promover a segurança na montanha, a plataforma 
                    já conta com mais de 3.500 usuários ativos.
                  </p>
                  <p className="mb-6">
                    Utilizando Flask no backend e React no frontend, a plataforma oferece 
                    mapas interativos, sistema de conquistas, galeria de fotos e recursos 
                    de segurança. Com mais de 2.100 trilhas cadastradas, é a maior base de 
                    dados de trilhas do Brasil.
                  </p>
                  <p>
                    A plataforma promove a cultura de aventura responsável, oferecendo 
                    recursos educativos, protocolos de segurança e uma comunidade engajada 
                    que compartilha experiências e conhecimento sobre montanhismo.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1K Trilhas</h3>
                  <p className="text-gray-600">
                    Maior base de dados de trilhas do Brasil
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.5K Aventureiros</h3>
                  <p className="text-gray-600">
                    Comunidade ativa e engajada
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança Total</h3>
                  <p className="text-gray-600">
                    Protocolos e recursos de segurança
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
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-600" />
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
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-green-600 mb-2">{tech.category}</p>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'community' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Comunidade e Estatísticas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adventureStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.metric}
                      className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.metric}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Community features */}
              <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recursos da Comunidade</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  O Clube da Montanha não é apenas uma plataforma, é uma comunidade viva 
                  de aventureiros que compartilham experiências, conhecimento e paixão 
                  pela montanha.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recursos Sociais:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Grupos por região e interesse</li>
                      <li>• Eventos e encontros</li>
                      <li>• Sistema de mentoria</li>
                      <li>• Fóruns de discussão</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Conteúdo:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Galeria de fotos e vídeos</li>
                      <li>• Relatos de aventuras</li>
                      <li>• Dicas de segurança</li>
                      <li>• Guias de trilhas</li>
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
                    <h3 className="text-lg font-semibold text-gray-900">Status Atual</h3>
                    <p className="text-gray-600">Projeto em produção ativa</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">100%</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Última Atualização</h3>
                    <p className="text-gray-600">Nova versão com mapas 3D</p>
                  </div>
                  <div className="text-lg font-semibold text-green-600">5 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próxima Feature</h3>
                    <p className="text-gray-600">Integração com dispositivos IoT</p>
                  </div>
                  <div className="text-lg font-semibold text-green-600">Março, 2024</div>
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
                {['Desenvolvedor Python', 'Frontend Developer', 'Especialista em Montanhismo', 'UI/UX Designer'].map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member}</h3>
                    <p className="text-sm text-gray-600">
                      Especialista em aventura e tecnologia
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

export default ProjetoClubeMontanha;
