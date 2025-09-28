import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  Shield, 
  Users, 
  Lightbulb, 
  Target, 
  Zap, 
  Globe,
  Code,
  Brain,
  Award,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Rocket
} from 'lucide-react';

const Values: React.FC = () => {
  const coreValues = [
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos sempre a perfeição em tudo que fazemos, desde o código até o atendimento ao cliente',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      examples: ['Code review rigoroso', 'Testes automatizados', 'Documentação completa', 'Performance otimizada']
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amamos o que fazemos e isso se reflete na qualidade e dedicação em cada projeto',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      examples: ['Projetos pessoais', 'Open source', 'Comunidade tech', 'Mentoria']
    },
    {
      icon: Shield,
      title: 'Integridade',
      description: 'Agimos com honestidade, transparência e ética em todas as nossas relações',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      examples: ['Comunicação clara', 'Prazos realistas', 'Preços justos', 'Confidencialidade']
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Acreditamos que os melhores resultados vêm do trabalho em equipe e da diversidade',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      examples: ['Equipes diversas', 'Feedback construtivo', 'Conhecimento compartilhado', 'Decisões coletivas']
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Estamos sempre buscando novas formas de resolver problemas e criar soluções únicas',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      examples: ['Pesquisa contínua', 'Tecnologias emergentes', 'Experimentação', 'Pensamento criativo']
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'O sucesso do nosso cliente é o nosso sucesso. Colocamos suas necessidades em primeiro lugar',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      examples: ['Entendimento profundo', 'Soluções personalizadas', 'Suporte contínuo', 'Melhoria constante']
    }
  ];

  const workPrinciples = [
    {
      title: 'Qualidade sobre Quantidade',
      description: 'Preferimos fazer menos projetos com excelência do que muitos com qualidade mediana',
      icon: Award,
      color: 'text-blue-500'
    },
    {
      title: 'Aprendizado Contínuo',
      description: 'Investimos constantemente em capacitação e atualização tecnológica',
      icon: BookOpen,
      color: 'text-green-500'
    },
    {
      title: 'Transparência Total',
      description: 'Mantemos comunicação clara e aberta em todas as etapas do projeto',
      icon: MessageCircle,
      color: 'text-purple-500'
    },
    {
      title: 'Sustentabilidade',
      description: 'Desenvolvemos soluções pensando no impacto ambiental e social',
      icon: Globe,
      color: 'text-green-500'
    },
    {
      title: 'Agilidade',
      description: 'Respondemos rapidamente às mudanças e necessidades do mercado',
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      title: 'Segurança',
      description: 'Priorizamos a segurança em todos os aspectos dos nossos projetos',
      icon: Shield,
      color: 'text-red-500'
    }
  ];

  const cultureValues = [
    {
      title: 'Diversidade e Inclusão',
      description: 'Valorizamos diferentes perspectivas e experiências que enriquecem nosso trabalho',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Equilíbrio Vida-Trabalho',
      description: 'Acreditamos que pessoas felizes produzem melhor trabalho',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Crescimento Pessoal',
      description: 'Incentivamos o desenvolvimento pessoal e profissional de cada membro da equipe',
      icon: Rocket,
      color: 'text-purple-500'
    },
    {
      title: 'Criatividade',
      description: 'Encorajamos ideias ousadas e soluções criativas para problemas complexos',
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
              <Star className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos <span className="text-yellow-300">Valores</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Os princípios fundamentais que guiam cada decisão, cada linha de código 
              e cada relacionamento que construímos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Valores <span className="gradient-text">Fundamentais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os pilares que sustentam nossa cultura e orientam nosso trabalho diário
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 ${value.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                    
                    {/* Examples */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Como praticamos:</h4>
                      <div className="space-y-2">
                        {value.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Principles */}
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
              Princípios de <span className="gradient-text">Trabalho</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As diretrizes que seguimos em cada projeto e decisão
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${principle.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture Values */}
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
              Cultura <span className="gradient-text">Organizacional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O ambiente que criamos para que nossa equipe possa dar o melhor de si
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((culture, index) => {
              const Icon = culture.icon;
              return (
                <motion.div
                  key={culture.title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-8 h-8 ${culture.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{culture.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{culture.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Action */}
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
              Valores em <span className="gradient-text">Ação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como nossos valores se manifestam no dia a dia do trabalho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desenvolvimento</h3>
              <p className="text-gray-600">Código limpo, testado e documentado</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colaboração</h3>
              <p className="text-gray-600">Trabalho em equipe e comunicação clara</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inovação</h3>
              <p className="text-gray-600">Soluções criativas e tecnologias emergentes</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foco</h3>
              <p className="text-gray-600">Resultados que superam expectativas</p>
            </motion.div>
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
              Compartilhe Nossos Valores
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Se você se identifica com nossos valores e quer fazer parte de uma equipe 
              que realmente acredita no que faz, entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Fazer Parte da Equipe</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Conhecer Nossos Projetos</span>
                <Star className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Values;
