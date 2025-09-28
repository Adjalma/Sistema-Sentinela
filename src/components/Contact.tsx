import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    project: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      project: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'suporte@sistemassentinela.com.br',
      href: 'mailto:suporte@sistemassentinela.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (22) 97403-2357',
      href: 'tel:+5522974032357'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Macaé, RJ - Brasil',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Adjalma',
      color: 'hover:text-sentinela-primary'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adjalma-aguiar',
      color: 'hover:text-sentinela-secondary'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/aguiaroriginal',
      color: 'hover:text-sentinela-accent'
    }
  ];

  const projects = [
    'Conexão Pessoas',
    'DeepFocus',
    'Crux - App de Escalada',
    'Kodesh Money',
    'Linguagem Sentinela',
    'Clube da Montanha',
    'N8N Workflows',
    'Outro'
  ];

  return (
    <section id="contact" className="py-20 bg-sentinela-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-sentinela-light/70 max-w-3xl mx-auto">
            Tem uma ideia? Quer colaborar? Ou simplesmente quer saber mais sobre nossos projetos? 
            Adoraríamos ouvir de você!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-sentinela-light mb-6">
                Vamos Conversar
              </h3>
              <p className="text-sentinela-light/80 mb-8">
                Estamos sempre abertos a novas oportunidades, parcerias e projetos interessantes. 
                Se você tem uma ideia que gostaria de desenvolver ou quer saber mais sobre nosso 
                trabalho, não hesite em nos contatar.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:bg-sentinela-primary/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sentinela-primary to-sentinela-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sentinela-light font-semibold group-hover:text-sentinela-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-sentinela-light/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-sentinela-light mb-4">
                Siga-nos
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-effect rounded-xl text-sentinela-light/60 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-sentinela-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24h</div>
                <div className="text-sm text-sentinela-light/60">Tempo de Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-sentinela-light/60">Satisfação</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-sentinela-dark/50 backdrop-blur-md rounded-2xl p-8 border border-sentinela-primary/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sentinela-light mb-6">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sentinela-light mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sentinela-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sentinela-light mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors"
                  placeholder="Qual é o assunto da sua mensagem?"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-sentinela-light mb-2">
                  Projeto de Interesse
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors"
                >
                  <option value="">Selecione um projeto (opcional)</option>
                  {projects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sentinela-light mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary focus:ring-1 focus:ring-sentinela-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre sua ideia, projeto ou dúvida..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-sentinela-primary to-sentinela-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sentinela-primary/25 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-sentinela-dark/30 rounded-3xl p-12 backdrop-blur-md border border-sentinela-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            Pronto para Começar?
          </h3>
          <p className="text-xl text-sentinela-light/70 mb-8 max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade. Entre em contato conosco e 
            descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:suporte@sistemassentinela.com.br"
              className="px-8 py-4 bg-gradient-to-r from-sentinela-primary to-sentinela-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sentinela-primary/25 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Enviar Email
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 glass-effect text-sentinela-light font-semibold rounded-lg hover:bg-sentinela-primary/20 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Ver Projetos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
