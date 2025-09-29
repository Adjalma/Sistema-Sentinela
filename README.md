# Sistema Sentinela – Portfólio

> Portfólio futurista e interativo dos projetos do Sistema Sentinela.

Um site portfólio moderno desenvolvido com React, TypeScript e Tailwind CSS. Experiência fluida com animações, design responsivo e links de conexão rápida.

## Principais Recursos
- UI moderna com animações (Framer Motion) e partículas
- Páginas e rotas organizadas por projetos
- Cartões de conexão (WhatsApp, GitHub, LinkedIn, Instagram)
- Newsletter com double opt‑in via Resend
- Envio automático quinzenal (Cron Vercel) com conteúdo gerado a partir de `src/data/projects.ts`

## Tecnologias
- React 18, TypeScript, Tailwind CSS
- React Router, Framer Motion, Lucide Icons
- Vercel (Deploy, Functions, Cron)
- Resend (e‑mail)
- Supabase Postgres (armazenamento de inscritos)

## Instalação
1. Pré‑requisitos: Node 18+, Git
2. Instale dependências:
```bash
npm install
```
3. Execute em desenvolvimento:
```bash
npm run dev
```

## Variáveis de Ambiente
Crie `.env.local` na raiz com os valores abaixo.

Aplicação (frontend):
```env
VITE_APP_NAME=Sistema Sentinela
VITE_APP_URL=https://sistemassentinela.com.br
```

APIs (serverless):
```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require
RESEND_API_KEY=xxxxxxxxxxxxxxxx
RESEND_FROM=no-reply@sistemassentinela.com.br
RESEND_NOTIFY=suporte@sistemassentinela.com.br
APP_BASE_URL=https://www.sistemassentinela.com.br
# Opcionais
NEWSLETTER_SUBJECT=Novidades do Sistema Sentinela
NEWSLETTER_INTRO=Resumo da quinzena.
```

## Endpoints Serverless
- `POST /api/subscribe` — recebe `{ email }`, grava em `subscribers` (Postgres) e envia e‑mail de confirmação via Resend
- `GET  /api/newsletter?dry=1` — gera a newsletter (pré‑visualização, não envia)
- `GET  /api/newsletter` — envia a newsletter para todos os inscritos

A tabela é criada automaticamente no primeiro uso:
```sql
CREATE TABLE IF NOT EXISTS subscribers (
  email TEXT PRIMARY KEY,
  consent BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Deploy (Vercel)
1. Configure as variáveis em Project → Settings → Environment Variables
2. Build: `npm install` (ou sincronize o lockfile e use `npm ci`)
3. Cron quinzenal: Project → Settings → Cron Jobs
   - Path: `/api/newsletter`
   - Schedule: `0 9 1,15 * *`

## Estrutura (resumo)
```
portfolio-sentinela/
├── public/
├── src/
│  ├── components/
│  ├── data/projects.ts
│  ├── pages/
│  ├── App.tsx, main.tsx, index.css
├── api/subscribe.ts
├── api/newsletter.ts
├── package.json
└── README.md
```

## Suporte
- Email: suporte@sistemassentinela.com.br
- Site: https://sistemassentinela.com.br

---
Desenvolvido por Sistema Sentinela.
