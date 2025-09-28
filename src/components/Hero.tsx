import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Github, ExternalLink, ArrowRight, Star, Zap, Users, Code } from 'lucide-react';
import { projects } from '../data/projects';

const Hero: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "7", label: "Projetos Ativos", icon: Code, color: "text-red-500" },
    { number: "25+", label: "Tecnologias", icon: Zap, color: "text-blue-500" },
    { number: "150K+", label: "Linhas de Código", icon: Code, color: "text-purple-500" },
    { number: "5+", label: "Anos de Experiência", icon: Star, color: "text-green-500" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          rgba(220, 38, 38, 0.05) 0%, 
          rgba(59, 130, 246, 0.05) 50%, 
          rgba(168, 85, 247, 0.05) 100%)`
      }}
    >
      {/* Neural Network Background - mantendo as redes neurais interativas */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo e Badge - DESTAQUE DA LOGO REAL */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-red-200 shadow-2xl shadow-red-500/20 mb-8">
              <div className="w-20 h-20 rounded-2xl flex-center mr-6 shadow-lg overflow-hidden">
                <img 
                  src="/logo-sentinela.jpeg" 
                  alt="Sistema Sentinela Logo" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">Sistema Sentinela</div>
                <div className="text-base text-red-600 font-medium">Portfólio de Projetos Inovadores</div>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-gray-900 mb-4">Desenvolvendo o</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">Futuro Digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transformamos ideias inovadoras em soluções tecnológicas que revolucionam 
            o mundo digital através de projetos únicos e impactantes
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 btn-sentinela text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex-center group text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
              Explorar Projetos
            </motion.button>

            <motion.a
              href="https://github.com/Adjalma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex-center group text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Ver no GitHub
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Project Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 overflow-hidden sentinela-shadow">
              <div className="flex-center justify-between mb-6">
                <div className="flex-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex-center">
                    <span className="text-2xl font-bold text-white">
                      {projects[currentProject].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {projects[currentProject].name}
                    </h3>
                    <p className="text-red-600 font-medium">
                      {projects[currentProject].status === 'development' ? 'Em Desenvolvimento' : 
                       projects[currentProject].status === 'testing' ? 'Em Testes' : 
                       projects[currentProject].status === 'production' ? 'Em Produção' : 'Planejamento'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-500">
                    {projects[currentProject].progress}%
                  </div>
                  <div className="text-sm text-gray-500">Progresso</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center">
                {projects[currentProject].description}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                <motion.div
                  className="h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${projects[currentProject].progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>

              {/* Technologies */}
              <div className="flex-center flex-wrap gap-3 mb-6">
                {projects[currentProject].technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-red-50 text-red-600 text-sm rounded-full border border-red-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {projects[currentProject].technologies.length > 4 && (
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
                    +{projects[currentProject].technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="flex-center justify-between">
                <div className="flex-center space-x-4">
                  {projects[currentProject].github && (
                    <motion.a
                      href={projects[currentProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </motion.a>
                  )}
                  {projects[currentProject].demo && (
                    <motion.a
                      href={projects[currentProject].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
                <motion.button
                  onClick={scrollToProjects}
                  className="flex-center space-x-2 text-red-600 hover:text-red-700 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">Ver Todos os Projetos</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToProjects}
          className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex-center">
            <div className="w-1 h-3 bg-current rounded-full"></div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;