import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Code, Brain, Palette, Rocket, Database, X } from 'lucide-react';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Adjalma Aguiar',
      role: 'Fundador & Desenvolvedor Full-Stack',
      avatar: '/avatars/adjalma.jpg',
      skills: ['Python', 'React', 'Node.js', 'TypeScript', 'Next.js', 'React Native', 'FastAPI', 'Express', 'Flask', 'TensorFlow', 'OpenCV', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Supabase', 'Stripe', 'JWT', 'WebRTC', 'WebSockets', 'Kotlin', 'SwiftUI', 'Expo', 'Rust', 'C++', 'LLVM', 'Machine Learning', 'Quantum Computing', 'Data Science', 'Automation'],
      bio: 'Especialista em Ciência de Dados, Desenvolvimento de Sites, Automações, Chatbots e Ferramentas voltadas a Inteligência Artificial. Fundador do Sistema Sentinela.',
      social: {
        github: 'https://github.com/Adjalma',
        linkedin: 'https://www.linkedin.com/in/adjalma-aguiar',
        instagram: 'https://www.instagram.com/aguiaroriginal',
        email: 'suporte@sistemassentinela.com.br'
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const getSkillColor = (skill: string) => {
    const colors = [
      'bg-sentinela-primary/20 text-sentinela-primary',
      'bg-sentinela-secondary/20 text-sentinela-secondary',
      'bg-sentinela-accent/20 text-sentinela-accent',
      'bg-sentinela-success/20 text-sentinela-success'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section id="team" className="py-20 bg-sentinela-dark/30">
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
            Nossa Equipe
          </h2>
          <p className="text-xl text-sentinela-light/70 max-w-3xl mx-auto">
            Conheça os talentos por trás do Sistema Sentinela. Uma equipe diversificada 
            de especialistas apaixonados por tecnologia e inovação.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="flex justify-center mb-16">
          <div className="max-w-sm w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member.id)}
            >
              <motion.div
                className="relative bg-sentinela-dark/50 backdrop-blur-md rounded-2xl p-6 border border-sentinela-primary/20 overflow-hidden card-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback para ícone se a imagem não carregar
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-r ${member.color} flex items-center justify-center"><member.icon class="w-10 h-10 text-white" /></div>`;
                        }
                      }}
                    />
                  </div>
                  
                  {/* Online indicator */}
                  <div className="absolute top-2 right-1/2 transform translate-x-8 w-4 h-4 bg-sentinela-success rounded-full border-2 border-sentinela-dark animate-pulse" />
                </div>

                {/* Member info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-sentinela-light group-hover:text-sentinela-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-sentinela-accent font-medium">
                    {member.role}
                  </p>
                  
                  <p className="text-sentinela-light/70 text-sm line-clamp-2">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs rounded-full ${getSkillColor(skill)}`}
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-sentinela-light/20 text-sentinela-light/60">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center space-x-3 pt-4">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-sentinela-light" />
                      </motion.a>
                    )}
                    
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 text-sentinela-light" />
                      </motion.a>
                    )}
                    
                    {member.social.email && (
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="p-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4 text-sentinela-light" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sentinela-primary/5 to-sentinela-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Team stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Desenvolvedor Especialista', value: '1' },
            { label: 'Anos de Experiência', value: '17+' },
            { label: 'Projetos Concluídos', value: '8+' },
            { label: 'Tecnologias Dominadas', value: '30+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-sentinela-light/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Member detail modal */}
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-sentinela-dark rounded-2xl p-8 max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const member = teamMembers.find(m => m.id === selectedMember);
                if (!member) return null;

                return (
                  <>
                    {/* Modal header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center`}>
                          <member.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-sentinela-light">{member.name}</h3>
                          <p className="text-sentinela-accent">{member.role}</p>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setSelectedMember(null)}
                        className="p-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-6 h-6 text-sentinela-light" />
                      </motion.button>
                    </div>

                    {/* Modal content */}
                    <div className="space-y-6">
                      <p className="text-sentinela-light/80">{member.bio}</p>

                      <div>
                        <h4 className="text-lg font-semibold text-sentinela-light mb-3">Habilidades</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 text-sm rounded-full ${getSkillColor(skill)}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        {member.social.github && (
                          <motion.a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Github className="w-5 h-5 text-sentinela-light" />
                            <span className="text-sentinela-light">GitHub</span>
                          </motion.a>
                        )}
                        
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Linkedin className="w-5 h-5 text-sentinela-light" />
                            <span className="text-sentinela-light">LinkedIn</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
