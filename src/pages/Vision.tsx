import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Rocket, 
  Globe, 
  Brain, 
  Heart, 
  Star, 
  Zap, 
  Shield,
  Users,
  Code,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle,
  Award,
  MessageCircle
} from 'lucide-react';

const Vision: React.FC = () => {
  const visionGoals = [
    {
      year: '2025',
      title: 'Liderança em IA',
      description: 'Tornar-nos referência em desenvolvimento de soluções de inteligência artificial no Brasil',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      achievements: ['Linguagem Sentinela 2.0', 'IA Quântica', '10K+ usuários']
    },
    {
      year: '2026',
      title: 'Expansão Global',
      description: 'Expandir nossa presença para mercados internacionais',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      achievements: ['Escritórios internacionais', 'Parcerias globais', 'Mercado EUA']
    },
    {
      year: '2027',
      title: 'Revolução Quântica',
      description: 'Pioneiros na computação quântica comercial',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      achievements: ['Primeiro computador quântico', 'Algoritmos comerciais', 'Breakthrough tecnológico']
    },
    {
      year: '2030',
      title: 'Futuro Sustentável',
      description: 'Tecnologia 100% sustentável e impacto social positivo',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      achievements: ['Carbono neutro', '1M+ vidas impactadas', 'Tecnologia verde']
    }
  ];

  const futureTechnologies = [
    {
      title: 'Computação Quântica',
      description: 'Desenvolvimento de algoritmos quânticos para problemas complexos',
      icon: Zap,
      color: 'text-purple-500',
      status: 'Em desenvolvimento'
    },
    {
      title: 'IA Generativa',
      description: 'Sistemas de IA que criam conteúdo original e soluções inovadoras',
      icon: Brain,
      color: 'text-blue-500',
      status: 'Pesquisa ativa'
    },
    {
      title: 'Realidade Aumentada',
      description: 'Interfaces imersivas que transformam a experiência do usuário',
      icon: Eye,
      color: 'text-green-500',
      status: 'Prototipagem'
    },
    {
      title: 'Blockchain Avançado',
      description: 'Soluções descentralizadas para maior transparência e segurança',
      icon: Shield,
      color: 'text-orange-500',
      status: 'Planejamento'
    },
    {
      title: 'IoT Inteligente',
      description: 'Internet das coisas com IA integrada para cidades inteligentes',
      icon: Globe,
      color: 'text-red-500',
      status: 'Conceito'
    },
    {
      title: 'Biocomputação',
      description: 'Computação baseada em sistemas biológicos',
      icon: Heart,
      color: 'text-pink-500',
      status: 'Futuro'
    }
  ];

  const impactVision = [
    {
      title: 'Democratização da Tecnologia',
      description: 'Tornar tecnologia avançada acessível para todos, independentemente de recursos',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Sustentabilidade Digital',
      description: 'Desenvolver soluções que promovam um futuro mais sustentável',
      icon: Globe,
      color: 'text-green-500'
    },
    {
      title: 'Conectividade Global',
      description: 'Conectar pessoas e ideias ao redor do mundo de forma significativa',
      icon: MessageCircle,
      color: 'text-purple-500'
    },
    {
      title: 'Inovação Contínua',
      description: 'Sempre à frente das tendências tecnológicas emergentes',
      icon: Lightbulb,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Eye className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossa <span className="text-yellow-300">Visão</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Ser a principal referência mundial em desenvolvimento de soluções 
              tecnológicas inovadoras que transformam vidas e criam um futuro melhor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Nossa <span className="gradient-text">Visão de Futuro</span>
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-12 border border-red-200">
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium italic">
                "Imaginamos um mundo onde a tecnologia não é apenas uma ferramenta, 
                mas uma força transformadora que conecta pessoas, democratiza o conhecimento, 
                resolve problemas complexos e cria oportunidades para todos, independentemente 
                de onde estejam ou de seus recursos disponíveis."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Goals Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Roadmap para o <span className="gradient-text">Futuro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos objetivos estratégicos para os próximos anos
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>

            <div className="space-y-16">
              {visionGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={goal.year}
                    className="relative flex items-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className="ml-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-200 flex-1">
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 ${goal.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-8 h-8 ${goal.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-red-600">{goal.year}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{goal.title}</h3>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {goal.description}
                          </p>
                          
                          {/* Achievements */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 mb-3">Objetivos Principais:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {goal.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm text-gray-600">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tecnologias do <span className="gradient-text">Futuro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As tecnologias emergentes que estamos desenvolvendo para moldar o amanhã
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${tech.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          tech.status === 'Em desenvolvimento' ? 'bg-green-100 text-green-800' :
                          tech.status === 'Pesquisa ativa' ? 'bg-blue-100 text-blue-800' :
                          tech.status === 'Prototipagem' ? 'bg-yellow-100 text-yellow-800' :
                          tech.status === 'Planejamento' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Impacto que <span className="gradient-text">Queremos Criar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como nossa visão se traduz em impacto positivo no mundo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactVision.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div
                  key={impact.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${impact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{impact.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Faça Parte do Futuro
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Junte-se a nós nesta jornada de transformação digital e ajude-nos 
              a construir o futuro que imaginamos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explorar Oportunidades</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Investir no Futuro</span>
                <Rocket className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
