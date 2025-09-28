import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  Check,
  Clock,
  User,
  Heart,
  Star,
  Zap
} from 'lucide-react';

interface ConnectionCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  type: 'chat' | 'video' | 'call' | 'email' | 'social';
  status: 'online' | 'away' | 'busy' | 'offline';
  lastSeen?: string;
  responseTime?: string;
}

const ConnectionCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const connectionCards: ConnectionCard[] = [
    {
      id: 'chat',
      title: 'WhatsApp',
      description: 'Converse conosco no WhatsApp',
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      type: 'social',
      status: 'online',
      lastSeen: 'Ativo agora'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Siga-nos no Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      type: 'social',
      status: 'online',
      lastSeen: 'Ativo agora'
    },
    {
      id: 'call',
      title: 'Ligação Direta',
      description: 'Fale diretamente conosco',
      icon: Phone,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      type: 'call',
      status: 'online',
      responseTime: 'Imediato'
    },
    {
      id: 'email',
      title: 'Email Profissional',
      description: 'Envie sua proposta detalhada',
      icon: Mail,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      type: 'email',
      status: 'online',
      responseTime: '< 2 horas'
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Veja nossos projetos no GitHub',
      icon: Github,
      color: 'text-gray-800',
      bgColor: 'bg-gray-100',
      type: 'social',
      status: 'online',
      lastSeen: 'Ativo agora'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Conecte-se profissionalmente',
      icon: Linkedin,
      color: 'text-blue-700',
      bgColor: 'bg-blue-100',
      type: 'social',
      status: 'online',
      lastSeen: 'Ativo agora'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };


  const handleSocialClick = (card: ConnectionCard) => {
    const urls = {
      github: 'https://github.com/Adjalma',
      linkedin: 'https://www.linkedin.com/in/adjalma-aguiar',
      instagram: 'https://www.instagram.com/aguiaroriginal'
    };
    
    if (urls[card.id as keyof typeof urls]) {
      window.open(urls[card.id as keyof typeof urls], '_blank');
    }
  };

  const handleConnectionClick = (card: ConnectionCard) => {
    switch (card.id) {
      case 'chat':
        // Abrir WhatsApp
        window.open('https://wa.me/5522974032357?text=Olá! Gostaria de conversar sobre um projeto.', '_blank');
        break;
      case 'instagram':
        // Abrir Instagram
        window.open('https://www.instagram.com/aguiaroriginal', '_blank');
        break;
      case 'call':
        // Abrir link para ligação (WhatsApp)
        window.open('https://wa.me/5522974032357?text=Olá! Gostaria de falar diretamente.', '_blank');
        break;
      case 'email':
        // Abrir cliente de email
        window.open('mailto:suporte@sistemassentinela.com.br?subject=Proposta de Projeto&body=Olá! Gostaria de discutir um projeto com vocês.', '_blank');
        break;
      default:
        // Para redes sociais
        handleSocialClick(card);
    }
  };

  return (
    <>
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conecte-se <span className="gradient-text">Conosco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escolha a melhor forma de se conectar conosco. Estamos sempre disponíveis 
            para transformar suas ideias em realidade.
          </p>
        </motion.div>

                {/* Connection Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                  {connectionCards.map((card, index) => {
                    const Icon = card.icon;
                    const isActive = activeCard === card.id;
                    
                    return (
                      <motion.div
                        key={card.id}
                        className="relative w-full max-w-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`bg-white rounded-3xl p-8 border border-gray-200 cursor-pointer transition-all duration-300 w-full ${
                            isActive ? 'shadow-2xl shadow-red-500/20 border-red-300' : 'hover:shadow-xl hover:border-red-200'
                          }`}
                          onClick={() => handleConnectionClick(card)}
                          whileHover={{ y: -5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                  {/* Status indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(card.status)}`} />
                    <div className="text-sm text-gray-500">
                      {card.responseTime || card.lastSeen}
                    </div>
                  </div>

                          {/* Icon and title */}
                          <div className="flex items-center space-x-4 mb-4">
                            <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center`}>
                              <Icon className={`w-8 h-8 ${card.color}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                              <p className="text-gray-600">{card.description}</p>
                            </div>
                          </div>

                  {/* Action button */}
                  <motion.div
                    className={`mt-6 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      card.type === 'social'
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.type === 'social' ? 'Acessar' : 'Conectar'}
                  </motion.div>

                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional info */}
                <motion.div
                  className="text-center mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Pronto para começar seu projeto?
                    </h3>
                    <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                      Nossa equipe está sempre disponível para ajudar. Escolha a forma de contato 
                      que preferir e vamos transformar sua ideia em realidade!
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Resposta em menos de 1 min</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4" />
                        <span>Disponível 24/7</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>100% Gratuito</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
      </div>
    </div>
    </>
  );
};

export default ConnectionCards;
