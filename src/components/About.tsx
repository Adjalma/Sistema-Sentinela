import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, Target, Award, Lightbulb, Shield, Zap, Heart, Code } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: 'Inovação',
      description: 'Desenvolvemos soluções que desafiam o status quo e criam novas possibilidades.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Cada linha de código é otimizada para máxima eficiência e escalabilidade.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Acreditamos que as melhores soluções nascem da colaboração e diversidade.'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Foco em detalhes e qualidade excepcional em cada projeto entregue.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com padrões de qualidade e melhores práticas da indústria.'
    },
    {
      icon: Lightbulb,
      title: 'Criatividade',
      description: 'Transformamos ideias complexas em soluções elegantes e intuitivas.'
    }
  ];

  const stats = [
    { label: 'Projetos Concluídos', value: '12+' },
    { label: 'Clientes Satisfeitos', value: '50+' },
    { label: 'Anos de Experiência', value: '5+' },
    { label: 'Tecnologias Dominadas', value: '25+' }
  ];

  const features = [
    { icon: Shield, text: 'Segurança Avançada' },
    { icon: Zap, text: 'Performance Otimizada' },
    { icon: Heart, text: 'Design Centrado no Usuário' },
    { icon: Code, text: 'Código Limpo e Manutenível' }
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Sobre Nós</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua Jornada no <span className="gradient-text">Mundo Digital</span> Começa Aqui
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma equipe de desenvolvedores apaixonados por tecnologia e inovação, 
            dedicados a criar soluções que transformam o mundo digital.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Nossa História
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O Sistema Sentinela nasceu da visão de criar um ecossistema de projetos 
                  interconectados que revolucionem diferentes áreas da tecnologia. Desde 
                  linguagens de programação quânticas até plataformas de economia colaborativa, 
                  cada projeto é uma peça de um puzzle maior.
                </p>
                
                <p>
                  Nossa jornada começou com a Linguagem Sentinela, uma linguagem de programação 
                  híbrida que combina computação clássica e quântica. A partir dessa base sólida, 
                  expandimos para desenvolver soluções em IA, mobile, web e automação.
                </p>
                
                <p>
                  Hoje, somos uma equipe diversificada de especialistas que trabalham em 
                  projetos que vão desde aplicações de foco e produtividade até plataformas 
                  de conexão humana e educação financeira espiritual.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Floating cards */}
            <div className="relative h-96">
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-md border border-primary/30 p-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-primary mb-2" />
                <h4 className="text-sm font-semibold text-foreground">IA & ML</h4>
                <p className="text-xs text-muted-foreground">Algoritmos avançados</p>
              </motion.div>

              <motion.div
                className="absolute top-16 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl backdrop-blur-md border border-secondary/30 p-4"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Rocket className="w-8 h-8 text-secondary mb-2" />
                <h4 className="text-sm font-semibold text-foreground">Performance</h4>
                <p className="text-xs text-muted-foreground">Otimização extrema</p>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl backdrop-blur-md border border-accent/30 p-4"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Users className="w-8 h-8 text-accent mb-2" />
                <h4 className="text-sm font-semibold text-foreground">Colaboração</h4>
                <p className="text-xs text-muted-foreground">Trabalho em equipe</p>
              </motion.div>

              {/* Central logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">S</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
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
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          className="text-center bg-card/50 backdrop-blur-md rounded-3xl p-12 border border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-6">
            Nossa Missão
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Desenvolver tecnologia que não apenas resolve problemas, mas cria novas 
            possibilidades. Acreditamos que a inovação deve ser acessível, ética e 
            orientada para o bem comum. Cada projeto é uma oportunidade de construir 
            um futuro melhor através da tecnologia."
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm">
              Sistema Sentinela - Transformando ideias em realidade
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;