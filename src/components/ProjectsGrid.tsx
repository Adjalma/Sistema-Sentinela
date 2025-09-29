import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Code, Target, Zap, X, ArrowRight, Star, Play } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Mapear ids para rotas específicas para evitar páginas em branco em produção
  const projectPathMap: Record<string, string> = {
    'conexao-pessoas': '/projeto/conexao-pessoas',
    'deepfocus': '/projeto/deepfocus',
    'crux': '/projeto/crux',
    'kodesh-money': '/projeto/kodesh-money',
    'clube-montanha': '/projeto/clube-montanha',
    'n8n-workflows': '/projeto/n8n-workflows',
    'linguagem-sentinela': '/projeto/linguagem-sentinela',
  };

  const getProjectPath = (id: string) => projectPathMap[id] || `/projeto/${id}`;

  const categories = [
    { id: 'all', label: 'Todos', count: projects.length },
    { id: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'IA/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'development': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'testing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'production': return 'bg-green-100 text-green-800 border-green-200';
      case 'planning': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Ações do CTA
  const handleStartProject = () => {
    window.open(
      'https://wa.me/5522974032357?text=Olá! Gostaria de iniciar um projeto com o Sistema Sentinela.',
      '_blank'
    );
  };

  const handleViewCode = () => {
    window.open('https://github.com/Adjalma', '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa coleção de projetos inovadores que estão transformando 
            o mundo digital com tecnologia de ponta e design excepcional
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex-center flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                filter === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/projetos">
                <motion.div
                  className="relative bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden card-hover sentinela-shadow h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl mb-6 flex-center relative overflow-hidden">
                    <div className="text-6xl font-bold gradient-text">
                      {project.name.charAt(0)}
                    </div>
                    
                    {/* Progress overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex-center space-x-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                          {project.status === 'development' ? 'Desenvolvimento' : 
                           project.status === 'testing' ? 'Testes' : 
                           project.status === 'production' ? 'Produção' : 'Planejamento'}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex-center justify-between text-sm">
                        <span className="text-gray-500">Progresso</span>
                        <span className="font-semibold text-red-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex-center flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{project.timeline}</div>
                        <div className="text-xs text-gray-500">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{project.team.length}</div>
                        <div className="text-xs text-gray-500">Membros</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{project.technologies.length}</div>
                        <div className="text-xs text-gray-500">Tecnologias</div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-center justify-between pt-4">
                      <div className="flex-center space-x-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4 text-gray-600" />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4 text-gray-600" />
                          </motion.a>
                        )}
                      </div>
                      <motion.div
                        className="flex-center space-x-2 text-red-600 group-hover:text-red-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium">Ver Detalhes</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar seu próximo projeto?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos transformar sua ideia em realidade
            </p>
            <div className="flex-center gap-6">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartProject}
              >
                <Play className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Iniciar Projeto
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewCode}
              >
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Ver Código
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;