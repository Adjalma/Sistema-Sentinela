# 🚀 Guia de Instalação - Sistema Sentinela Portfolio

Este guia irá te ajudar a configurar e executar o portfólio do Sistema Sentinela em sua máquina local.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 18+** - [Download aqui](https://nodejs.org/)
- **npm ou yarn** - Vem com o Node.js
- **Git** - [Download aqui](https://git-scm.com/)

### Verificando as instalações

Abra o terminal e execute:

```bash
# Verificar Node.js
node --version
# Deve retornar v18.x.x ou superior

# Verificar npm
npm --version
# Deve retornar 9.x.x ou superior

# Verificar Git
git --version
# Deve retornar 2.x.x ou superior
```

## 🔧 Instalação Passo a Passo

### 1. Clone o Repositório

```bash
# Clone o repositório
git clone https://github.com/sistema-sentinela/portfolio-sentinela.git

# Entre na pasta do projeto
cd portfolio-sentinela
```

### 2. Instale as Dependências

```bash
# Usando npm
npm install

# OU usando yarn
yarn install
```

### 3. Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp env.example .env.local

# Edite o arquivo .env.local com suas configurações
```

**Arquivo .env.local:**
```env
VITE_APP_NAME=Sistema Sentinela
VITE_APP_URL=http://localhost:3000
VITE_APP_DESCRIPTION=Portfólio de projetos inovadores em desenvolvimento
```

### 4. Execute o Projeto

```bash
# Modo desenvolvimento
npm run dev

# OU usando yarn
yarn dev
```

O site estará disponível em: `http://localhost:3000`

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run preview      # Preview da build local

# Linting
npm run lint         # Executa o linter

# Deploy
npm run deploy       # Deploy para Vercel (se configurado)
```

## 🐳 Usando Docker (Opcional)

Se preferir usar Docker:

```bash
# Build da imagem
docker build -t portfolio-sentinela .

# Executar container
docker run -p 80:80 portfolio-sentinela
```

O site estará disponível em: `http://localhost`

## 🚀 Deploy para Produção

### Opção 1: Vercel (Recomendado)

1. **Instale o Vercel CLI:**
```bash
npm install -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

### Opção 2: Netlify

1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Deploy automático

### Opção 3: GitHub Pages

1. Execute o build: `npm run build`
2. Faça commit da pasta `dist`
3. Configure GitHub Pages para usar a pasta `dist`

## 🔧 Configurações Avançadas

### Personalizando Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  sentinela: {
    primary: '#00D4FF',      // Sua cor primária
    secondary: '#7C3AED',    // Sua cor secundária
    // ... outras cores
  }
}
```

### Adicionando Novos Projetos

Edite `src/data/projects.ts`:

```typescript
{
  id: 'meu-projeto',
  name: 'Meu Projeto',
  description: 'Descrição do projeto',
  // ... outras propriedades
}
```

### Configurando Domínios

Edite `vercel.json` para configurar domínios personalizados:

```json
{
  "domains": ["meudominio.com.br"]
}
```

## 🐛 Solução de Problemas

### Erro: "Module not found"

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port already in use"

```bash
# Use uma porta diferente
npm run dev -- --port 3001
```

### Erro: "Build failed"

```bash
# Verifique se todas as dependências estão instaladas
npm install

# Execute o linting para ver erros
npm run lint
```

### Problemas de Performance

1. **Limpe o cache do navegador**
2. **Verifique se o Node.js está atualizado**
3. **Execute `npm run build` para verificar erros**

## 📱 Testando Responsividade

Use as ferramentas de desenvolvedor do navegador:

1. Abra `http://localhost:3000`
2. Pressione `F12` ou `Ctrl+Shift+I`
3. Clique no ícone de dispositivo móvel
4. Teste diferentes tamanhos de tela

## 🔍 Verificando Funcionalidades

### ✅ Checklist de Funcionalidades

- [ ] Site carrega sem erros
- [ ] Navegação funciona
- [ ] Cards de projetos são clicáveis
- [ ] Chat widget abre e fecha
- [ ] Formulário de contato funciona
- [ ] Animações estão suaves
- [ ] Design é responsivo
- [ ] Performance está boa

### 🧪 Testes Manuais

1. **Navegação:** Clique em todos os links do menu
2. **Projetos:** Clique nos cards e modais
3. **Chat:** Teste o widget de chat
4. **Formulário:** Envie uma mensagem de teste
5. **Responsividade:** Teste em diferentes dispositivos

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os logs** no terminal
2. **Consulte a documentação** do React/Vite
3. **Abra uma issue** no GitHub
4. **Entre em contato:** contato@sistemassentinela.com.br

## 🎉 Próximos Passos

Após a instalação bem-sucedida:

1. **Personalize** o conteúdo para seus projetos
2. **Configure** os domínios personalizados
3. **Adicione** seus próprios projetos
4. **Customize** as cores e estilos
5. **Deploy** para produção

---

**Bem-vindo ao Sistema Sentinela! 🚀**

*Transformando ideias em realidade através da tecnologia*
