import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    projetos: [
      { name: 'Conexão Pessoas', href: '/projeto/conexao-pessoas' },
      { name: 'DeepFocus', href: '/projeto/deepfocus' },
      { name: 'Crux - Escalada', href: '/projeto/crux' },
      { name: 'Kodesh Money', href: '/projeto/kodesh-money' },
      { name: 'Linguagem Sentinela', href: '/projeto/linguagem-sentinela' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Nossa Equipe', href: '/equipe' },
      { name: 'Carreiras', href: '/contato' },
      { name: 'Contato', href: '/contato' }
    ],
    recursos: [
      { name: 'Documentação', href: 'https://github.com/Adjalma?tab=repositories' },
      { name: 'API', href: 'https://github.com/Adjalma/DeepFocus' },
      { name: 'Blog', href: 'https://www.linkedin.com/in/adjalma-aguiar' },
      { name: 'Suporte', href: '/contato' }
    ]
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Adjalma',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/adjalma-aguiar',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/aguiaroriginal',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:suporte@sistemassentinela.com.br',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-sentinela-darker border-t border-sentinela-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sentinela-primary to-sentinela-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold gradient-text">Sistema Sentinela</span>
              </div>
              
              <p className="text-sentinela-light/70 mb-6 max-w-sm">
                Desenvolvendo o futuro através de projetos inovadores que transformam 
                ideias em realidade. Tecnologia com propósito.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-effect rounded-lg text-sentinela-light/60 hover:text-sentinela-primary hover:bg-sentinela-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Projetos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-sentinela-light mb-4">
                Projetos
              </h3>
              <ul className="space-y-3">
                {footerLinks.projetos.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sentinela-light/70 hover:text-sentinela-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Empresa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-sentinela-light mb-4">
                Empresa
              </h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sentinela-light/70 hover:text-sentinela-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recursos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-sentinela-light mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sentinela-light/70 hover:text-sentinela-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sentinela-light/70 hover:text-sentinela-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter section */}
        <motion.div
          className="py-8 border-t border-sentinela-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-sentinela-light mb-2">
              Fique por Dentro
            </h3>
            <p className="text-sentinela-light/70 mb-6">
              Receba atualizações sobre nossos projetos e novidades tecnológicas
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-sentinela-primary to-sentinela-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sentinela-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="py-8 border-t border-sentinela-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 text-sentinela-light/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} Sistema Sentinela. Feito com</span>
              <Heart className="w-4 h-4 text-sentinela-primary fill-current" />
              <span>no Brasil</span>
            </motion.div>

            {/* Legal links */}
            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-sentinela-light/60 hover:text-sentinela-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sentinela-light/60 hover:text-sentinela-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-sentinela-light/60 hover:text-sentinela-primary transition-colors">
                Cookies
              </a>
            </motion.div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 glass-effect rounded-lg text-sentinela-light/60 hover:text-sentinela-primary hover:bg-sentinela-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sentinela-primary via-sentinela-secondary to-sentinela-accent" />
    </footer>
  );
};

export default Footer;
