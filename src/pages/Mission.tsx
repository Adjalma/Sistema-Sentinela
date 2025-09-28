import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Code,
  Brain,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const Mission: React.FC = () => {
  const missionPoints = [
    {
      icon: Code,
      title: 'Desenvolvimento de Software de Excelência',
      description: 'Criamos soluções tecnológicas que superam expectativas e estabelecem novos padrões de qualidade',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Brain,
      title: 'Inovação em Inteligência Artificial',
      description: 'Pioneiros no desenvolvimento de sistemas de IA que transformam a forma como interagimos com a tecnologia',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Democratização da Tecnologia',
      description: 'Tornamos tecnologia avançada acessível para todos, independentemente do nível técnico',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Globe,
      title: 'Impacto Global Positivo',
      description: 'Nossos projetos são desenvolvidos pensando no impacto positivo que podem ter no mundo',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiabilidade',
      description: 'Priorizamos a segurança em cada linha de código, garantindo confiabilidade total',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Otimizamos cada detalhe para garantir a melhor performance e experiência do usuário',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  const impactAreas = [
    {
      title: 'Educação',
      description: 'Ferramentas educacionais que revolucionam o aprendizado',
      projects: ['Linguagem Sentinela', 'DeepFocus', 'Sistema de Tutoria'],
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      title: 'Conectividade',
      description: 'Plataformas que conectam pessoas e ideias',
      projects: ['Conexão Pessoas', 'Chat Global', 'Rede Social'],
      icon: MessageCircle,
      color: 'text-green-500'
    },
    {
      title: 'Inovação',
      description: 'Tecnologias emergentes que definem o futuro',
      projects: ['Computação Quântica', 'IA Avançada', 'Blockchain'],
      icon: Rocket,
      color: 'text-purple-500'
    },
    {
      title: 'Sustentabilidade',
      description: 'Soluções que promovem um futuro mais sustentável',
      projects: ['Monitoramento Ambiental', 'Eficiência Energética', 'Análise de Dados'],
      icon: Globe,
      color: 'text-green-500'
    }
  ];

  const values = [
    {
      title: 'Excelência Técnica',
      description: 'Buscamos sempre a perfeição técnica em cada projeto',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      title: 'Inovação Constante',
      description: 'Estamos sempre à frente das tendências tecnológicas',
      icon: Lightbulb,
      color: 'text-blue-500'
    },
    {
      title: 'Colaboração',
      description: 'Trabalhamos em equipe para alcançar resultados excepcionais',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Transparência',
      description: 'Mantemos comunicação clara e transparente com nossos clientes',
      icon: Shield,
      color: 'text-red-500'
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
              <Target className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossa <span className="text-yellow-300">Missão</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Transformar ideias inovadoras em soluções tecnológicas que revolucionam 
              o mundo digital e impactam positivamente a vida das pessoas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
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
              Nossa <span className="gradient-text">Declaração de Missão</span>
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-12 border border-red-200">
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium italic">
                "Desenvolver e implementar soluções tecnológicas inovadoras que democratizem 
                o acesso à tecnologia de ponta, promovam a conectividade humana e criem 
                um impacto positivo duradouro na sociedade através da excelência técnica, 
                inovação constante e compromisso com a sustentabilidade."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Points */}
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
              Pilares da Nossa <span className="gradient-text">Missão</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os fundamentos que guiam cada decisão e cada projeto que desenvolvemos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 ${point.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${point.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
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
              Áreas de <span className="gradient-text">Impacto</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como nossa missão se traduz em impacto real em diferentes setores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-2">Projetos Relacionados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full font-medium"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Valores que <span className="gradient-text">Nos Guiam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios fundamentais que orientam nossa missão e visão
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className={`w-10 h-10 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Junte-se à Nossa Missão
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Faça parte da transformação digital e ajude-nos a criar um futuro 
              mais conectado e inovador para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Conhecer Nossos Projetos</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Fazer Parte da Equipe</span>
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
