import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Rocket, 
  Heart, 
  Star,
  Code,
  Brain,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  BarChart3,
  GraduationCap
} from 'lucide-react';

const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '2008',
      title: 'O Primeiro Contato',
      description: 'Início da jornada na programação com Python, despertando a paixão pela tecnologia e desenvolvimento de software',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      achievements: ['Primeira linguagem de programação', 'Fundamentos de lógica', 'Descoberta da paixão por tecnologia']
    },
    {
      year: '2010',
      title: 'Primeiros Cursos de Qualidade',
      description: 'Início da especialização em metodologias de qualidade e gestão, com cursos em Lean Six Sigma e fundamentos de melhoria contínua',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      achievements: ['Lean Six Sigma White Belt', 'Fundamentos de qualidade', 'Metodologias de melhoria']
    },
    {
      year: '2012',
      title: 'Aprofundamento em Metodologias Ágeis',
      description: 'Especialização em metodologias ágeis com cursos em Scrum e Kanban, consolidando conhecimentos em gestão de projetos',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      achievements: ['Scrum Fundamentals', 'Kanban básico', 'Gestão de projetos ágeis']
    },
    {
      year: '2015',
      title: 'Especialização em Python e Dados',
      description: 'Início da especialização em Python e ciência de dados, com cursos em introdução à linguagem e fundamentos de análise',
      icon: Brain,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      achievements: ['Introdução à Python', 'Fundamentos de programação', 'Base para ciência de dados']
    },
    {
      year: '2017',
      title: 'Consolidação em Ciência de Dados',
      description: 'Aprofundamento dos conhecimentos em ciência de dados com cursos especializados em SQL, estatística e limpeza de dados',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      achievements: ['SQL para Ciência de Dados', 'Estatística com Python', 'Data Cleaning and Data Wrangling']
    },
    {
      year: '2019',
      title: 'Certificações Avançadas em Qualidade',
      description: 'Obtendo certificações avançadas em Lean Six Sigma e metodologias ágeis, consolidando expertise em melhoria contínua',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      achievements: ['Lean Six Sigma Green Belt', 'Six Sigma Yellow Belt', 'Scrum Fundamentals Certified']
    },
    {
      year: '2021',
      title: 'Certificações Internacionais',
      description: 'Ano de consolidação com certificações internacionais em metodologias ágeis e qualidade, preparando para a próxima fase acadêmica',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      achievements: ['International Agile Test Foundation', 'International Kanban Master Foundation', 'International Scrum Master Foundation']
    },
    {
      year: '2022',
      title: 'Formação Acadêmica Especializada',
      description: 'Início da graduação em Big Data e Inteligência Analítica, mergulhando no mundo dos dados e analytics',
      icon: GraduationCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      achievements: ['Graduação em Big Data', 'Especialização em Analytics', 'Fundamentos de IA']
    },
    {
      year: '2023',
      title: 'Conclusão da Graduação',
      description: 'Finalização da graduação em Big Data e Inteligência Analítica, consolidando conhecimentos em ciência de dados',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      achievements: ['Diploma em Big Data', 'Projetos práticos concluídos', 'Base sólida em Analytics']
    },
    {
      year: '2024',
      title: 'Especialização em Java',
      description: 'Início da pós-graduação em Tecnologia Java pela Anhanguera, aprofundando conhecimentos em desenvolvimento enterprise',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      achievements: ['Pós-graduação em Java', 'Desenvolvimento Enterprise', 'Arquiteturas robustas']
    },
    {
      year: '2025',
      title: 'Especialização Avançada em IA e Dados',
      description: 'Cursos avançados em Machine Learning, Data Analysis e especialização completa em Ciência de Dados com redes neurais',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      achievements: ['Data Analysis with Python', 'Machine Learning with Python', 'Cientista de Dados (DNC)', 'Redes Neurais Artificiais', 'Redes Neurais Profundas (DNN)']
    },
    {
      year: '2025',
      title: 'Ano de Consolidação',
      description: 'Fundação do Sistema Sentinela e múltiplas especializações simultâneas, consolidando expertise em diversas áreas',
      icon: Rocket,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      achievements: ['Sistema Sentinela fundado', 'Múltiplas pós-graduações', 'Projetos inovadores']
    },
    {
      year: 'Jun 2025',
      title: 'Especialização Java Concluída',
      description: 'Finalização da pós-graduação em Tecnologia Java pela Anhanguera, dominando frameworks e arquiteturas modernas',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      achievements: ['Pós Java finalizada', 'Frameworks dominados', 'Arquiteturas enterprise']
    },
    {
      year: 'Jul 2025',
      title: 'Gestão de Projetos',
      description: 'Conclusão da pós-graduação em Gestão de Projetos pela Uniasselvi, adquirindo competências em liderança e metodologias ágeis',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      achievements: ['Pós Gestão finalizada', 'Metodologias ágeis', 'Liderança de equipes']
    },
    {
      year: 'Out 2025',
      title: 'Ciência de Dados PUC-Rio',
      description: 'Finalização da pós-graduação em Ciência de Dados e Analytics pela PUC-Rio, consolidando expertise em análise avançada',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      achievements: ['Pós PUC-Rio finalizada', 'Machine Learning avançado', 'Análise preditiva']
    },
    {
      year: 'Ago 2025',
      title: 'Mestrado em IA',
      description: 'Início do Mestrado em Inteligência Artificial, aprofundando conhecimentos em algoritmos avançados e pesquisa acadêmica',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      achievements: ['Mestrado iniciado', 'Pesquisa em IA', 'Algoritmos avançados']
    },
    {
      year: 'Jun 2026',
      title: 'Engenharia de Dados',
      description: 'Conclusão da pós-graduação em Engenharia de Dados e Inteligência Artificial, dominando arquiteturas de big data e IA',
      icon: Zap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      achievements: ['Pós Engenharia finalizada', 'Big Data mastery', 'Arquiteturas de IA']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Inovação',
      description: 'Acreditamos que a tecnologia deve ser usada para criar soluções que realmente importam',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiabilidade',
      description: 'Cada linha de código é escrita pensando na segurança e confiabilidade do sistema',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em equipe para alcançar resultados excepcionais',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimizamos cada detalhe para garantir a melhor performance possível',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Nossos projetos são desenvolvidos pensando no impacto global',
      color: 'text-purple-500'
    },
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência em tudo que fazemos',
      color: 'text-orange-500'
    }
  ];

  const stats = [
    { number: '17+', label: 'Anos de Experiência', icon: Calendar },
    { number: '8', label: 'Projetos Ativos', icon: Code },
    { number: '150K+', label: 'Linhas de Código', icon: Brain },
    { number: '30+', label: 'Tecnologias', icon: Zap },
    { number: '15+', label: 'Certificações', icon: Award },
    { number: '1', label: 'Mestrado em Andamento', icon: Star }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossa <span className="text-yellow-300">História</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Uma jornada de 17 anos de dedicação à tecnologia, desde o primeiro contato com Python 
              até a fundação do Sistema Sentinela, passando por múltiplas especializações e mestrado em IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma trajetória de 17 anos de evolução constante, desde os primeiros passos na programação 
              até a consolidação como especialista em múltiplas áreas da tecnologia
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
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
                        <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-red-600">{item.year}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {item.description}
                          </p>
                          
                          {/* Achievements */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 mb-3">Principais Conquistas:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {item.achievements.map((achievement, idx) => (
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
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className={`w-8 h-8 ${value.color}`} />
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
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Junte-se a nós nesta jornada de inovação e transformação digital. 
              Vamos criar o futuro juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Nossos Projetos</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entrar em Contato</span>
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
