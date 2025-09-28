import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Zap, 
  Shield, 
  Star, 
  ArrowLeft, 
  Github, 
  ExternalLink,
  CheckCircle,
  Target,
  Rocket,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LinguagemSentinela: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Integração nativa com algoritmos de IA e machine learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Sistema de segurança robusto com criptografia end-to-end',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Compilação otimizada para máxima performance e eficiência',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Target,
      title: 'Sintaxe Intuitiva',
      description: 'Linguagem de programação com sintaxe clara e fácil de aprender',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Rocket,
      title: 'Escalabilidade',
      description: 'Desenvolvida para crescer com projetos de qualquer tamanho',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Cpu,
      title: 'Multiplataforma',
      description: 'Funciona em qualquer sistema operacional e arquitetura',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  const syntaxExamples = [
    {
      title: 'Hello World',
      code: `sentinela {
    imprimir("Olá, Mundo!")
}`,
      description: 'Sintaxe simples e clara para iniciantes'
    },
    {
      title: 'Função com IA',
      code: `funcao analisar_dados(dados) {
    resultado = ia.analisar(dados)
    retornar resultado
}`,
      description: 'Integração nativa com inteligência artificial'
    },
    {
      title: 'Segurança Avançada',
      code: `seguro {
    chave = criptografia.gerar()
    dados_protegidos = criptografia.cifrar(dados, chave)
}`,
      description: 'Recursos de segurança integrados'
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Code className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Linguagem <span className="text-yellow-300">Sentinela</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8">
              A próxima geração de linguagem de programação, desenvolvida especificamente 
              para projetos de inteligência artificial e segurança digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/Adjalma/Linguagem-Sentinela"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </motion.a>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Documentação
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4 bg-white border-b">
        <div className="container">
          <Link
            to="/projetos"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Projetos
          </Link>
        </div>
      </section>

      {/* Features Section */}
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
              Características <span className="gradient-text">Únicas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma linguagem de programação revolucionária que combina simplicidade, 
              poder e segurança em uma única solução.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Syntax Examples Section */}
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
              Exemplos de <span className="gradient-text">Sintaxe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como é fácil e intuitivo programar com a Linguagem Sentinela
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {syntaxExamples.map((example, index) => (
              <motion.div
                key={example.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{example.title}</h3>
                <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <p className="text-gray-600 text-sm">{example.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
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
              Status do <span className="text-yellow-300">Projeto</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-red-100">Concluído</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Beta</div>
                <div className="text-red-100">Versão Atual</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-red-100">Lançamento</div>
              </div>
            </div>
            <p className="text-xl text-red-100 mb-8">
              A Linguagem Sentinela está em desenvolvimento ativo e será lançada em 2025. 
              Junte-se à nossa comunidade de desenvolvedores!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/Adjalma/Linguagem-Sentinela"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                Contribuir no GitHub
              </motion.a>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-5 h-5 mr-2" />
                Acompanhar Desenvolvimento
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LinguagemSentinela;