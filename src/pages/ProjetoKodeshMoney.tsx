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
  DollarSign,
  CreditCard,
  TrendingUp,
  PieChart,
  BarChart3,
  Wallet,
  Banknote,
  Calculator,
  Receipt,
  FileText,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjetoKodeshMoney: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: DollarSign,
      title: 'Gestão Financeira Completa',
      description: 'Controle total de receitas, despesas e investimentos',
      details: 'Categorização automática, relatórios detalhados e análise de tendências'
    },
    {
      icon: CreditCard,
      title: 'Controle de Cartões',
      description: 'Monitoramento de gastos por cartão e categoria',
      details: 'Alertas de limite, análise de padrões e otimização de gastos'
    },
    {
      icon: TrendingUp,
      title: 'Análise de Investimentos',
      description: 'Acompanhamento de portfólio e performance',
      details: 'Gráficos de evolução, análise de risco e sugestões de diversificação'
    },
    {
      icon: PieChart,
      title: 'Relatórios Visuais',
      description: 'Dashboards interativos e gráficos detalhados',
      details: 'Visualizações personalizáveis, exportação de dados e compartilhamento'
    },
    {
      icon: Wallet,
      title: 'Múltiplas Contas',
      description: 'Gerenciamento de várias contas bancárias',
      details: 'Sincronização automática, reconciliação e visão consolidada'
    },
    {
      icon: Shield,
      title: 'Segurança Financeira',
      description: 'Criptografia e proteção de dados sensíveis',
      details: 'Autenticação de dois fatores, backup seguro e conformidade LGPD'
    }
  ];

  const technologies = [
    { name: 'Node.js', category: 'Backend', description: 'Runtime JavaScript para servidor' },
    { name: 'Express', category: 'Framework', description: 'Framework web para Node.js' },
    { name: 'MongoDB', category: 'Database', description: 'Banco de dados NoSQL' },
    { name: 'React', category: 'Frontend', description: 'Biblioteca para interface de usuário' },
    { name: 'TypeScript', category: 'Linguagem', description: 'JavaScript tipado' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Framework CSS utilitário' },
    { name: 'Chart.js', category: 'Visualization', description: 'Biblioteca de gráficos' },
    { name: 'JWT', category: 'Auth', description: 'Autenticação baseada em tokens' },
    { name: 'bcrypt', category: 'Security', description: 'Criptografia de senhas' },
    { name: 'Mongoose', category: 'ORM', description: 'ODM para MongoDB' }
  ];

  const financialStats = [
    { metric: 'Transações Processadas', value: '15.2K', icon: Receipt, color: 'text-green-500' },
    { metric: 'Usuários Ativos', value: '1.8K', icon: Users, color: 'text-blue-500' },
    { metric: 'Economia Gerada', value: 'R$ 2.3M', icon: TrendingUp, color: 'text-purple-500' },
    { metric: 'Precisão', value: '99.8%', icon: Target, color: 'text-red-500' }
  ];

  const stats = [
    { number: '55%', label: 'Progresso', icon: Target },
    { number: '3.2K', label: 'Linhas de Código', icon: Code },
    { number: '18', label: 'Módulos', icon: Monitor },
    { number: '4', label: 'Meses', icon: Calendar }
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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10">
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
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
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
                <span className="px-4 py-2 text-sm font-medium rounded-full border bg-yellow-100 text-yellow-800 border-yellow-200">
                  Em Desenvolvimento
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">55% Completo</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">KodeshMoney</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Uma plataforma financeira completa que revoluciona o controle de gastos e 
                investimentos. Desenvolvido com Node.js e React, oferece ferramentas avançadas 
                de análise financeira e gestão de patrimônio.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-green-600" />
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
                  href="https://github.com/Adjalma/KodeshMoney/kodesh-money"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </motion.a>
                <motion.a
                  href="https://kodeshmoney.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg"
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
                <div className="w-full h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    KM
                  </div>
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: '55%' }}
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
                        className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full border border-green-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl pointer-events-none" />
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
                      ? 'text-green-600 border-b-2 border-green-600'
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
                    O KodeshMoney é uma plataforma financeira completa que democratiza o 
                    acesso a ferramentas profissionais de gestão financeira. Desenvolvido 
                    com foco na simplicidade e poder analítico, oferece controle total sobre 
                    receitas, despesas e investimentos.
                  </p>
                  <p className="mb-6">
                    Utilizando Node.js no backend e React no frontend, a plataforma processa 
                    milhares de transações com precisão de 99.8%. O sistema inclui análise 
                    de padrões de gastos, sugestões de investimento e relatórios visuais 
                    detalhados para tomada de decisões informadas.
                  </p>
                  <p>
                    Com mais de 1.800 usuários ativos, o KodeshMoney já ajudou pessoas a 
                    economizarem mais de R$ 2.3 milhões através de insights financeiros 
                    personalizados e gestão inteligente de recursos.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestão Completa</h3>
                  <p className="text-gray-600">
                    Controle total de receitas, despesas e investimentos
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Avançados</h3>
                  <p className="text-gray-600">
                    Relatórios visuais e insights personalizados
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança Total</h3>
                  <p className="text-gray-600">
                    Criptografia e proteção de dados financeiros
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
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-600" />
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
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-green-600 mb-2">{tech.category}</p>
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
                {financialStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.metric}
                      className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.metric}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Analytics description */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Funcionam os Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  O KodeshMoney utiliza algoritmos de machine learning para analisar padrões 
                  de gastos e oferecer insights personalizados. O sistema identifica tendências, 
                  detecta anomalias e sugere otimizações para maximizar a saúde financeira.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Métricas Coletadas:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Categorização automática de gastos</li>
                      <li>• Análise de padrões de consumo</li>
                      <li>• Performance de investimentos</li>
                      <li>• Projeções financeiras</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Insights Fornecidos:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Sugestões de economia</li>
                      <li>• Alertas de gastos excessivos</li>
                      <li>• Oportunidades de investimento</li>
                      <li>• Relatórios de progresso</li>
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
                    <h3 className="text-lg font-semibold text-gray-900">Timeline Total</h3>
                    <p className="text-gray-600">Duração estimada do projeto</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">4 meses</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Última Atualização</h3>
                    <p className="text-gray-600">Implementação de analytics avançados</p>
                  </div>
                  <div className="text-lg font-semibold text-green-600">12 de Janeiro, 2024</div>
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Próximo Marco</h3>
                    <p className="text-gray-600">Integração com bancos brasileiros</p>
                  </div>
                  <div className="text-lg font-semibold text-green-600">Fevereiro, 2024</div>
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
                {['Desenvolvedor Full-Stack', 'Especialista em Finanças', 'UI/UX Designer', 'Data Analyst'].map((member, index) => (
                  <motion.div
                    key={member}
                    className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member}</h3>
                    <p className="text-sm text-gray-600">
                      Especialista em tecnologia financeira
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

export default ProjetoKodeshMoney;
