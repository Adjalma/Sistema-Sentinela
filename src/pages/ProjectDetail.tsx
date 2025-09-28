import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Server
} from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject || null);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
          <Link to="/" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'testing': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'production': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'planning': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'expert': return 'bg-red-500/20 text-red-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'team', label: 'Equipe', icon: Users },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'gallery', label: 'Galeria', icon: Play }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
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
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
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
                <span className={`px-4 py-2 text-sm font-medium rounded-full border ${getStatusColor(project.status)}`}>
                  {project.status === 'development' ? 'Em Desenvolvimento' : 
                   project.status === 'testing' ? 'Em Testes' : 
                   project.status === 'production' ? 'Em Produção' : 'Planejamento'}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">{project.progress}% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {project.name}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                  <div className="text-sm text-muted-foreground">Progresso</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.timeline}</div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.team.length}</div>
                  <div className="text-sm text-muted-foreground">Membros</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{project.technologies.length}</div>
                  <div className="text-sm text-muted-foreground">Tecnologias</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Ver Código</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 btn-sentinela text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </motion.a>
                )}
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors"
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
              <div className="relative bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-primary/20 overflow-hidden">
                {/* Project image placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl font-bold gradient-text">
                    {project.name.charAt(0)}
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-muted">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Technologies preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Tecnologias Principais</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
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
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Sobre o Projeto</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="text-xl mb-6">
                    {project.longDescription}
                  </p>
                  <p>
                    Este projeto representa uma das iniciativas mais ambiciosas do Sistema Sentinela, 
                    combinando tecnologia de ponta com design inovador para criar uma solução única 
                    no mercado.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Objetivo Principal</h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="text-center p-6 bg-card/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Complexidade</h3>
                  <p className="text-muted-foreground">
                    Nível {project.complexity.charAt(0).toUpperCase() + project.complexity.slice(1)} - 
                    {project.complexity === 'expert' ? ' Projeto de alta complexidade técnica' :
                     project.complexity === 'high' ? ' Desenvolvimento avançado' :
                     project.complexity === 'medium' ? ' Desenvolvimento intermediário' :
                     ' Desenvolvimento básico'}
                  </p>
                </div>

                <div className="text-center p-6 bg-card/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Categoria</h3>
                  <p className="text-muted-foreground">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)} - 
                    {project.category === 'web' ? ' Aplicação Web' :
                     project.category === 'mobile' ? ' Aplicativo Mobile' :
                     project.category === 'ai' ? ' Inteligência Artificial' :
                     project.category === 'desktop' ? ' Aplicação Desktop' :
                     ' Outros'}
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Funcionalidades Principais</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-card/50 rounded-2xl border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature}</h3>
                      <p className="text-muted-foreground">
                        Funcionalidade implementada com foco em performance e experiência do usuário.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Challenges */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Desafios Técnicos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-card/30 rounded-2xl border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Desafio {index + 1}</h4>
                        <p className="text-muted-foreground">{challenge}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Stack Tecnológico</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="p-6 bg-card/50 rounded-2xl border border-border text-center group hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{tech}</h3>
                    <p className="text-sm text-muted-foreground">
                      Tecnologia essencial para o desenvolvimento do projeto
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech categories */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Frontend</h3>
                  <div className="space-y-3">
                    {project.technologies.filter(tech => 
                      ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'].includes(tech)
                    ).map(tech => (
                      <div key={tech} className="flex items-center space-x-3 p-3 bg-card/30 rounded-lg">
                        <Monitor className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Backend</h3>
                  <div className="space-y-3">
                    {project.technologies.filter(tech => 
                      ['Node.js', 'Python', 'FastAPI', 'Express', 'Django', 'Flask'].includes(tech)
                    ).map(tech => (
                      <div key={tech} className="flex items-center space-x-3 p-3 bg-card/30 rounded-lg">
                        <Server className="w-5 h-5 text-secondary" />
                        <span className="text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Equipe do Projeto</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.team.map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-card/50 rounded-2xl border border-border text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{member}</h3>
                    <p className="text-sm text-muted-foreground">
                      Membro da equipe de desenvolvimento
                    </p>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Cronograma do Projeto</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-card/50 rounded-2xl border border-border">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Timeline Total</h3>
                    <p className="text-muted-foreground">Duração estimada do projeto</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">{project.timeline}</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-card/50 rounded-2xl border border-border">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Última Atualização</h3>
                    <p className="text-muted-foreground">Data da última modificação</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">{project.lastUpdate}</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-card/50 rounded-2xl border border-border">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Próximo Marco</h3>
                    <p className="text-muted-foreground">Próxima entrega importante</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">{project.nextMilestone}</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Galeria do Projeto</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: item * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Play className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
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

export default ProjectDetail;
