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
  Workflow,
  GitBranch,
  Settings,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Save,
  Upload,
  Download as DownloadIcon,
  Share,
  Copy,
  Trash2,
  Edit,
  Eye,
  EyeOff
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoN8N: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Workflow,
      title: 'Automação Visual',
      description: 'Criação de workflows através de interface drag-and-drop',
      details: 'Mais de 200 integrações prontas e conectores personalizáveis'
    },
    {
      icon: GitBranch,
      title: 'Workflows Complexos',
      description: 'Suporte a lógica condicional e loops avançados',
      details: 'IF/ELSE, loops, sub-workflows e tratamento de erros'
    },
    {
      icon: PlayCircle,
      title: 'Execução em Tempo Real',
      description: 'Monitoramento e execução de workflows em tempo real',
      details: 'Logs detalhados, debug visual e execução agendada'
    },
    {
      icon: Database,
      title: 'Integração de Dados',
      description: 'Conecta diferentes sistemas e bancos de dados',
      details: 'APIs REST, webhooks, bancos SQL/NoSQL e arquivos'
    },
    {
      icon: Settings,
      title: 'Configuração Flexível',
      description: 'Personalização completa de workflows e integrações',
      details: 'Variáveis de ambiente, templates e configurações avançadas'
    },
    {
      icon: Shield,
      title: 'Segurança Empresarial',
      description: 'Controle de acesso e auditoria completa',
      details: 'Autenticação OAuth, logs de auditoria e criptografia'
    }
  ];

  const technologies = [
    { name: 'Node.js', category: 'Runtime', description: 'Runtime JavaScript para automação' },
    { name: 'TypeScript', category: 'Linguagem', description: 'JavaScript tipado' },
    { name: 'Vue.js', category: 'Frontend', description: 'Framework para interface' },
    { name: 'PostgreSQL', category: 'Database', description: 'Banco de dados principal' },
    { name: 'Redis', category: 'Cache', description: 'Cache e filas de execução' },
    { name: 'Docker', category: 'Deploy', description: 'Containerização' },
    { name: 'Express', category: 'API', description: 'API REST para workflows' },
    { name: 'WebSocket', category: 'Real-time', description: 'Comunicação em tempo real' },
    { name: 'JWT', category: 'Auth', description: 'Autenticação baseada em tokens' },
    { name: 'Cron', category: 'Scheduler', description: 'Agendamento de tarefas' }
  ];

  const workflowStats = [
    { metric: 'Workflows Criados', value: '2.5K', icon: Workflow, color: 'text-blue-500' },
    { metric: 'Execuções/Mês', value: '150K', icon: PlayCircle, color: 'text-green-500' },
    { metric: 'Integrações', value: '200+', icon: GitBranch, color: 'text-purple-500' },
    { metric: 'Uptime', value: '99.9%', icon: Shield, color: 'text-orange-500' }
  ];

  const stats = [
    { number: '100%', label: 'Progresso', icon: Target },
    { number: '8.5K', label: 'Linhas de Código', icon: Code },
    { number: '50', label: 'Módulos', icon: Monitor },
    { number: '12', label: 'Meses', icon: Calendar }
  ];

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BookOpen },
    { id: 'features', label: 'Funcionalidades', icon: Target },
    { id: 'tech', label: 'Tecnologias', icon: Code },
    { id: 'workflows', label: 'Workflows', icon: Workflow },
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
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">N8N Workflows</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Uma plataforma de automação de workflows de código aberto que permite 
                conectar diferentes serviços e automatizar processos complexos. Desenvolvido 
                com Node.js e Vue.js, oferece mais de 200 integrações prontas.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-purple-600" />
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
                  href="https://github.com/Adjalma/N8N-Workflows/n8n-workflows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Testar Plataforma</span>
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
                    N8N
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
                    O N8N Workflows é uma plataforma de automação de código aberto que 
                    revoluciona a forma como as empresas conectam e automatizam seus 
                    processos. Com mais de 200 integrações prontas, permite criar workflows 
                    complexos sem necessidade de programação.
                  </p>
                  <p className="mb-6">
                    Desenvolvido com Node.js e Vue.js, a plataforma oferece interface 
                    visual drag-and-drop para criação de workflows, suporte a lógica 
                    condicional, loops e tratamento de erros. Com mais de 150.000 execuções 
                    por mês, é uma das plataformas de automação mais utilizadas.
                  </p>
                  <p>
                    A plataforma é totalmente self-hosted, oferecendo controle total sobre 
                    dados e processos, com recursos de segurança empresarial e auditoria 
                    completa para ambientes corporativos.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Workflow className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">200+ Integrações</h3>
                  <p className="text-gray-600">
                    Conectores prontos para os principais serviços
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <PlayCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">150K Execuções</h3>
                  <p className="text-gray-600">
                    Processamento confiável em escala
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
                  <p className="text-gray-600">
                    Disponibilidade e confiabilidade máximas
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

          {activeTab === 'workflows' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Workflows e Estatísticas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflowStats.map((stat, index) => {
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

              {/* Workflow examples */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exemplos de Workflows</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  O N8N permite criar workflows para automatizar praticamente qualquer 
                  processo empresarial, desde integrações simples até automações complexas 
                  com múltiplas etapas e lógica condicional.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Workflows Populares:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Sincronização de dados entre sistemas</li>
                      <li>• Notificações automáticas por email/SMS</li>
                      <li>• Processamento de formulários</li>
                      <li>• Backup automático de dados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Integrações Comuns:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• CRM e sistemas de vendas</li>
                      <li>• Redes sociais e marketing</li>
                      <li>• Bancos de dados e APIs</li>
                      <li>• Ferramentas de produtividade</li>
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
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Última Atualização</h3>
                    <p className="text-gray-600">Nova versão com 50+ integrações</p>
                  </div>
                  <div className="text-lg font-semibold text-purple-600">18 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próxima Feature</h3>
                    <p className="text-gray-600">IA para sugestão de workflows</p>
                  </div>
                  <div className="text-lg font-semibold text-purple-600">Março, 2024</div>
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
                {['Desenvolvedor Full-Stack', 'Especialista em Automação', 'DevOps Engineer', 'Product Manager'].map((member, index) => (
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
                      Especialista em automação e integração
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

export default ProjetoN8N;
