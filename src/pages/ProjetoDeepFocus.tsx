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
  Focus,
  Timer,
  BarChart3,
  Settings,
  Eye,
  Headphones,
  Coffee,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Pause,
  Play as PlayIcon,
  SkipForward,
  SkipBack
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoDeepFocus: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Focus,
      title: 'Foco Profundo',
      description: 'Técnica Pomodoro avançada com intervalos personalizáveis',
      details: 'Sessões de 25, 45 ou 90 minutos com pausas inteligentes'
    },
    {
      icon: Brain,
      title: 'IA de Concentração',
      description: 'Algoritmos que analisam padrões de produtividade',
      details: 'Sugestões personalizadas baseadas no seu comportamento'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançados',
      description: 'Relatórios detalhados de produtividade e progresso',
      details: 'Gráficos, estatísticas e insights sobre seus hábitos'
    },
    {
      icon: Headphones,
      title: 'Sons de Concentração',
      description: 'Biblioteca de sons ambientais e música focada',
      details: 'Chuva, café, natureza, música clássica e sons binaurais'
    },
    {
      icon: Timer,
      title: 'Timer Inteligente',
      description: 'Cronômetro com notificações suaves e não intrusivas',
      details: 'Alertas visuais e sonoros personalizáveis'
    },
    {
      icon: Settings,
      title: 'Personalização Total',
      description: 'Configure cada aspecto da sua experiência de foco',
      details: 'Temas, sons, intervalos, notificações e muito mais'
    }
  ];

  const technologies = [
    { name: 'FastAPI', category: 'Backend', description: 'Framework Python para APIs rápidas' },
    { name: 'React', category: 'Frontend', description: 'Biblioteca JavaScript para interfaces' },
    { name: 'Python', category: 'Linguagem', description: 'Linguagem principal do backend' },
    { name: 'PostgreSQL', category: 'Database', description: 'Banco de dados para analytics' },
    { name: 'Redis', category: 'Cache', description: 'Cache para sessões e dados temporários' },
    { name: 'Docker', category: 'Deploy', description: 'Containerização da aplicação' },
    { name: 'WebRTC', category: 'Real-time', description: 'Comunicação em tempo real' },
    { name: 'TensorFlow', category: 'AI/ML', description: 'Machine learning para análise' },
    { name: 'Chart.js', category: 'Visualization', description: 'Gráficos e visualizações' },
    { name: 'PWA', category: 'Mobile', description: 'Progressive Web App' }
  ];

  const productivityStats = [
    { metric: 'Sessões Completadas', value: '1,247', icon: CheckCircle, color: 'text-green-500' },
    { metric: 'Tempo Focado', value: '312h', icon: Clock, color: 'text-blue-500' },
    { metric: 'Produtividade', value: '+47%', icon: TrendingUp, color: 'text-purple-500' },
    { metric: 'Usuários Ativos', value: '2.1K', icon: Users, color: 'text-red-500' }
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'team', label: 'Equipe', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10">
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
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
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
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-purple-600">100% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">DeepFocus</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Uma aplicação revolucionária de produtividade que combina técnicas de foco, 
                inteligência artificial e analytics avançados para maximizar sua concentração 
                e eficiência. Desenvolvido com FastAPI e React para performance excepcional.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {productivityStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.metric} className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.metric}</div>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/Adjalma/DeepFocus/deepfocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://deepfocus.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Usar Agora</span>
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
                <div className="w-full h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    DF
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
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
                        className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full border border-purple-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl pointer-events-none" />
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
                      ? 'text-purple-600 border-b-2 border-purple-600'
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
                    O DeepFocus é uma aplicação de produtividade de nova geração que combina 
                    técnicas científicas de concentração com tecnologia de ponta. Utilizando 
                    inteligência artificial para analisar padrões de produtividade, a aplicação 
                    oferece insights personalizados e sugestões para maximizar o foco.
                  </p>
                  <p className="mb-6">
                    Desenvolvido com FastAPI no backend e React no frontend, o DeepFocus 
                    oferece uma experiência fluida e responsiva. A aplicação inclui timer 
                    Pomodoro inteligente, biblioteca de sons ambientais, analytics detalhados 
                    e sistema de gamificação para manter a motivação.
                  </p>
                  <p>
                    Com mais de 2.100 usuários ativos, o DeepFocus já ajudou pessoas a 
                    aumentarem sua produtividade em até 47%, comprovando a eficácia da 
                    abordagem científica aplicada à tecnologia.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">IA de Produtividade</h3>
                  <p className="text-gray-600">
                    Algoritmos que aprendem seus padrões e otimizam seu foco
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Avançados</h3>
                  <p className="text-gray-600">
                    Relatórios detalhados sobre sua produtividade e progresso
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sons de Concentração</h3>
                  <p className="text-gray-600">
                    Biblioteca de sons ambientais cientificamente comprovados
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
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-600" />
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
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-purple-600 mb-2">{tech.category}</p>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics e Métricas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productivityStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.metric}
                      className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.metric}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Analytics description */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Funcionam os Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  O DeepFocus coleta dados anônimos sobre seus padrões de foco, pausas e produtividade. 
                  Utilizando machine learning, identifica tendências e oferece insights personalizados 
                  para otimizar sua rotina de trabalho.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Métricas Coletadas:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Duração das sessões de foco</li>
                      <li>• Frequência de pausas</li>
                      <li>• Horários de maior produtividade</li>
                      <li>• Efeito dos sons ambientais</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Insights Fornecidos:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Melhor horário para trabalhar</li>
                      <li>• Duração ideal das sessões</li>
                      <li>• Sons mais eficazes para você</li>
                      <li>• Sugestões de otimização</li>
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
                    <p className="text-gray-600">Nova versão com IA melhorada</p>
                  </div>
                  <div className="text-lg font-semibold text-purple-600">20 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próxima Feature</h3>
                    <p className="text-gray-600">Integração com calendários</p>
                  </div>
                  <div className="text-lg font-semibold text-purple-600">Fevereiro, 2024</div>
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
                {['Desenvolvedor Python', 'Frontend Developer', 'Data Scientist', 'UX Designer'].map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member}</h3>
                    <p className="text-sm text-gray-600">
                      Especialista em produtividade e foco
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

export default ProjetoDeepFocus;
