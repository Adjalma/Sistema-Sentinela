import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  FolderOpen, 
  Users, 
  Target, 
  Eye, 
  Heart, 
  MessageCircle, 
  Code,
  Brain,
  Rocket,
  Shield,
  Star
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
}

const TabNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  // Sincronizar activeTab com a localização atual
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveTab('home');
    } else if (path === '/projetos') {
      setActiveTab('projects');
    } else if (path === '/sobre') {
      setActiveTab('about');
    } else if (path === '/missao') {
      setActiveTab('mission');
    } else if (path === '/visao') {
      setActiveTab('vision');
    } else if (path === '/valores') {
      setActiveTab('values');
    } else if (path === '/equipe') {
      setActiveTab('team');
    } else if (path === '/contato') {
      setActiveTab('contact');
    } else if (path.startsWith('/projeto/')) {
      setActiveTab('projects');
    }
  }, [location.pathname]);

  const tabs: Tab[] = [
    {
      id: 'home',
      label: 'Início',
      icon: Home,
      description: 'Página principal com visão geral'
    },
    {
      id: 'projects',
      label: 'Projetos',
      icon: FolderOpen,
      description: 'Nossos projetos e portfólio'
    },
    {
      id: 'about',
      label: 'Nossa História',
      icon: Heart,
      description: 'A jornada do Sistema Sentinela'
    },
    {
      id: 'mission',
      label: 'Missão',
      icon: Target,
      description: 'Nossa missão e propósito'
    },
    {
      id: 'vision',
      label: 'Visão',
      icon: Eye,
      description: 'Nossa visão de futuro'
    },
    {
      id: 'team',
      label: 'Equipe',
      icon: Users,
      description: 'Conheça nossa equipe'
    },
    {
      id: 'values',
      label: 'Valores',
      icon: Star,
      description: 'Nossos princípios e valores'
    },
    {
      id: 'contact',
      label: 'Contato',
      icon: MessageCircle,
      description: 'Entre em contato conosco'
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    // Navegação baseada no tab
    switch (tabId) {
      case 'home':
        navigate('/');
        break;
              case 'projects':
                navigate('/projetos');
                break;
      case 'about':
        navigate('/sobre');
        break;
      case 'mission':
        navigate('/missao');
        break;
      case 'vision':
        navigate('/visao');
        break;
      case 'values':
        navigate('/valores');
        break;
      case 'team':
        navigate('/equipe');
        break;
      case 'contact':
        navigate('/contato');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Sistema Sentinela</div>
              <div className="text-sm text-gray-500">Portfólio Digital</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'group-hover:opacity-100'
                  }`}>
                    {tab.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-500 to-red-600'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="truncate">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
