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
  MessageCircle,
  UserPlus,
  Search,
  Filter,
  MapPin,
  Phone,
  Mail,
  Camera,
  Video,
  Music,
  FileText,
  Settings,
  Bell,
  Lock,
  Unlock,
  Eye,
  EyeOff
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoConexaoPessoas: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: UserPlus,
      title: 'Sistema de Matches Inteligente',
      description: 'Algoritmo avançado que conecta pessoas com base em interesses, localização e compatibilidade',
      details: 'Utiliza machine learning para analisar perfis e sugerir conexões relevantes'
    },
    {
      icon: MessageCircle,
      title: 'Chat em Tempo Real',
      description: 'Sistema de mensagens instantâneas com recursos avançados',
      details: 'Suporte a texto, imagens, áudio e vídeo com criptografia end-to-end'
    },
    {
      icon: Search,
      title: 'Busca Avançada',
      description: 'Filtros inteligentes para encontrar pessoas específicas',
      details: 'Busca por localização, interesses, idade, profissão e muito mais'
    },
    {
      icon: MapPin,
      title: 'Geolocalização',
      description: 'Conecte-se com pessoas próximas a você',
      details: 'Sistema de mapas integrado com privacidade configurável'
    },
    {
      icon: Camera,
      title: 'Perfis Ricos',
      description: 'Crie perfis detalhados com fotos, vídeos e informações',
      details: 'Sistema de verificação de identidade e moderação de conteúdo'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção completa de dados e privacidade',
      details: 'Criptografia, moderação automática e sistema de denúncias'
    }
  ];

  const technologies = [
    { name: 'Next.js', category: 'Frontend', description: 'Framework React para aplicações web modernas' },
    { name: 'TypeScript', category: 'Linguagem', description: 'JavaScript tipado para maior segurança' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Framework CSS utilitário' },
    { name: 'Supabase', category: 'Backend', description: 'Backend-as-a-Service com banco PostgreSQL' },
    { name: 'PostgreSQL', category: 'Database', description: 'Banco de dados relacional robusto' },
    { name: 'Vercel', category: 'Deploy', description: 'Plataforma de deploy e hospedagem' },
    { name: 'Socket.io', category: 'Real-time', description: 'Comunicação em tempo real' },
    { name: 'Prisma', category: 'ORM', description: 'Object-Relational Mapping' },
    { name: 'NextAuth.js', category: 'Auth', description: 'Autenticação segura' },
    { name: 'React Query', category: 'State', description: 'Gerenciamento de estado do servidor' }
  ];

  const screenshots = [
    { title: 'Tela de Login', description: 'Interface de autenticação moderna e segura' },
    { title: 'Dashboard Principal', description: 'Visão geral das conexões e atividades' },
    { title: 'Perfil do Usuário', description: 'Página de perfil completa e personalizável' },
    { title: 'Sistema de Matches', description: 'Interface de descoberta de pessoas' },
    { title: 'Chat Interface', description: 'Sistema de mensagens em tempo real' },
    { title: 'Configurações', description: 'Painel de configurações e privacidade' }
  ];

  const stats = [
    { number: '85%', label: 'Progresso', icon: Target },
    { number: '2.5K', label: 'Linhas de Código', icon: Code },
    { number: '15', label: 'Componentes', icon: Monitor },
    { number: '8', label: 'Meses', icon: Calendar }
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'screenshots', label: 'Screenshots', icon: Monitor },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'team', label: 'Equipe', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-red-500/10 via-blue-500/10 to-purple-500/10">
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
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
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
                  Em Desenvolvimento Avançado
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-red-600">85% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Conexão Pessoas</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Uma plataforma revolucionária de conexão social que utiliza inteligência artificial 
                para conectar pessoas com base em interesses, localização e compatibilidade. 
                Mais de 2.500 linhas de código que transformam a forma como as pessoas se conectam.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-red-600" />
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
                  href="https://github.com/Adjalma/Conexao-Pessoas/conexao-pessoas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://conexaopessoas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 btn-sentinela text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver Demo</span>
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
                <div className="w-full h-64 bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl font-bold gradient-text">
                    CP
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
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
                        className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full border border-red-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-3xl pointer-events-none" />
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
                      ? 'text-red-600 border-b-2 border-red-600'
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
                    O Conexão Pessoas é uma plataforma social inovadora que revoluciona a forma 
                    como as pessoas se conectam. Utilizando algoritmos de inteligência artificial 
                    e machine learning, a plataforma analisa perfis, interesses e comportamentos 
                    para sugerir conexões relevantes e significativas.
                  </p>
                  <p className="mb-6">
                    Desenvolvido com Next.js e TypeScript, o projeto oferece uma experiência 
                    moderna e responsiva, com recursos avançados como chat em tempo real, 
                    geolocalização, sistema de matches inteligente e perfis ricos em mídia.
                  </p>
                  <p>
                    A plataforma prioriza a segurança e privacidade dos usuários, implementando 
                    criptografia end-to-end, sistema de moderação automática e controles de 
                    privacidade granulares.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">IA Avançada</h3>
                  <p className="text-gray-600">
                    Algoritmos de machine learning para matches precisos e relevantes
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tempo Real</h3>
                  <p className="text-gray-600">
                    Chat instantâneo e notificações em tempo real
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h3>
                  <p className="text-gray-600">
                    Criptografia e moderação para máxima proteção
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
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-red-600" />
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
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-red-600 mb-2">{tech.category}</p>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'screenshots' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Screenshots do Projeto</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Monitor className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{screenshot.title}</h3>
                      <p className="text-sm text-gray-600">{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                  <div className="text-2xl font-bold text-red-600">8 meses</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Última Atualização</h3>
                    <p className="text-gray-600">Data da última modificação</p>
                  </div>
                  <div className="text-lg font-semibold text-red-600">15 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próximo Marco</h3>
                    <p className="text-gray-600">Próxima entrega importante</p>
                  </div>
                  <div className="text-lg font-semibold text-red-600">Sistema de Notificações</div>
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
                {['Desenvolvedor Full-Stack', 'UI/UX Designer', 'Especialista em IA', 'DevOps Engineer'].map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member}</h3>
                    <p className="text-sm text-gray-600">
                      Membro da equipe de desenvolvimento
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

export default ProjetoConexaoPessoas;
