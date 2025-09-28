# 🚀 Sistema Sentinela - Portfólio

> **Portfólio futurista e interativo dos projetos do Sistema Sentinela**

Um site portfólio moderno e inovador que apresenta todos os projetos em desenvolvimento do Sistema Sentinela. Desenvolvido com React, TypeScript e Tailwind CSS, oferece uma experiência única com animações fluidas, chat em tempo real e design responsivo.

## ✨ Características Principais

### 🎨 Design Futurista
- **Paleta de cores inspirada na Linguagem Sentinela**: Azul ciano, roxo profundo e laranja dourado
- **Animações fluidas** com Framer Motion
- **Efeitos de partículas** interativas
- **Gradientes e glassmorphism** para um visual moderno
- **Design responsivo** para todos os dispositivos

### 🚀 Funcionalidades Únicas
- **Cards interativos** para cada projeto com detalhes completos
- **Sistema de chat em tempo real** para conexão direta
- **Filtros dinâmicos** por categoria de projeto
- **Modais detalhados** com informações técnicas
- **Animações de scroll** e efeitos hover
- **Tema escuro** otimizado para programadores

### 📱 Projetos Apresentados
1. **Conexão Pessoas** - Plataforma de economia de habilidades (85% completo)
2. **DeepFocus** - Sistema de análise de foco com IA (70% completo)
3. **Crux** - App de treinamento de escalada (60% completo)
4. **Kodesh Money** - App de prosperidade espiritual (55% completo)
5. **Linguagem Sentinela** - Linguagem de programação quântica (90% completo)
6. **Clube da Montanha** - Plataforma para montanhistas (45% completo)
7. **N8N Workflows** - Sistema de automação empresarial (75% completo)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animações
- **React Router** - Roteamento
- **React Hot Toast** - Notificações
- **Lucide React** - Ícones

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e dev server
- **ESLint** - Linting
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade CSS

### Deploy e Hospedagem
- **Vercel** - Plataforma de deploy
- **Domínios personalizados** configurados
- **CDN global** para performance

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/sistema-sentinela/portfolio-sentinela.git
cd portfolio-sentinela
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
VITE_APP_NAME=Sistema Sentinela
VITE_APP_URL=https://sistemassentinela.com.br
VITE_APP_DESCRIPTION=Portfólio de projetos inovadores em desenvolvimento
```

### 4. Execute o projeto
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

O site estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
portfolio-sentinela/
├── public/                 # Arquivos estáticos
│   ├── logo-sentinela.svg # Logo do projeto
│   └── projects/          # Imagens dos projetos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.tsx    # Navegação principal
│   │   ├── Hero.tsx      # Seção hero
│   │   ├── ProjectsGrid.tsx # Grid de projetos
│   │   ├── About.tsx     # Seção sobre
│   │   ├── Team.tsx      # Seção da equipe
│   │   ├── Contact.tsx   # Formulário de contato
│   │   ├── Footer.tsx    # Rodapé
│   │   ├── ChatWidget.tsx # Widget de chat
│   │   ├── LoadingScreen.tsx # Tela de carregamento
│   │   └── ParticleBackground.tsx # Fundo com partículas
│   ├── data/             # Dados dos projetos
│   │   └── projects.ts   # Informações dos projetos
│   ├── hooks/            # Hooks personalizados
│   │   ├── useTheme.ts   # Gerenciamento de tema
│   │   └── useChat.ts    # Sistema de chat
│   ├── types/            # Tipos TypeScript
│   │   └── index.ts      # Definições de tipos
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── package.json          # Dependências
├── tailwind.config.js    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
├── vercel.json           # Configuração Vercel
└── README.md            # Documentação
```

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  sentinela: {
    primary: '#00D4FF',      // Azul ciano
    secondary: '#7C3AED',    // Roxo profundo
    accent: '#F59E0B',       // Laranja dourado
    dark: '#0F172A',         // Azul escuro
    darker: '#020617',       // Preto azulado
    // ...
  }
}
```

### Projetos
Adicione novos projetos editando `src/data/projects.ts`:

```typescript
{
  id: 'novo-projeto',
  name: 'Novo Projeto',
  description: 'Descrição do projeto',
  // ... outras propriedades
}
```

### Animações
As animações podem ser personalizadas usando as classes do Tailwind ou modificando as configurações do Framer Motion.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Outras Plataformas
O projeto pode ser deployado em qualquer plataforma que suporte aplicações React estáticas:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🌐 Domínios Configurados

- **Principal**: sistemassentinela.com.br
- **Conexão Pessoas**: conexaopessoas.com.br
- **DeepFocus**: deepfocus.com.br
- **Crux**: cruxapp.com.br
- **Kodesh Money**: kodeshmoney.com.br
- **Linguagem Sentinela**: linguagemsentinela.com.br

## 📊 Performance

### Métricas Otimizadas
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Otimizações Implementadas
- **Code splitting** automático
- **Lazy loading** de componentes
- **Otimização de imagens**
- **Minificação** de CSS/JS
- **Compressão gzip**
- **Cache** otimizado

## 🔧 Desenvolvimento

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Linting do código
```

### Estrutura de Commits
```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: tarefas de manutenção
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Email**: contato@sistemassentinela.com.br
- **GitHub**: [Issues](https://github.com/sistema-sentinela/portfolio-sentinela/issues)
- **Website**: https://sistemassentinela.com.br

## 🙏 Agradecimentos

- Equipe do Sistema Sentinela
- Comunidade React
- Desenvolvedores do Tailwind CSS
- Contribuidores do Framer Motion

---

**Desenvolvido com ❤️ pela equipe Sistema Sentinela**

*Transformando ideias em realidade através da tecnologia*
