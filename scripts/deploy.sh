#!/bin/bash

# Script de Deploy para Sistema Sentinela Portfolio
# Autor: Sistema Sentinela
# Data: $(date)

echo "🚀 Iniciando deploy do Sistema Sentinela Portfolio..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Função para erro
error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# Função para sucesso
success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Função para warning
warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    error "Node.js não está instalado. Instale o Node.js 18+ e tente novamente."
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    error "npm não está instalado. Instale o npm e tente novamente."
fi

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    warning "Vercel CLI não está instalado. Instalando..."
    npm install -g vercel
fi

log "Verificando dependências..."
if [ ! -f "package.json" ]; then
    error "package.json não encontrado. Execute este script na raiz do projeto."
fi

log "Instalando dependências..."
npm install || error "Falha ao instalar dependências"

log "Executando linting..."
npm run lint || warning "Linting encontrou problemas, mas continuando..."

log "Executando build..."
npm run build || error "Falha no build"

log "Verificando se o build foi criado..."
if [ ! -d "dist" ]; then
    error "Pasta dist não foi criada. Build falhou."
fi

success "Build concluído com sucesso!"

# Perguntar se quer fazer deploy
read -p "Deseja fazer deploy para produção? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log "Iniciando deploy para Vercel..."
    
    # Verificar se está logado no Vercel
    if ! vercel whoami &> /dev/null; then
        log "Fazendo login no Vercel..."
        vercel login
    fi
    
    # Deploy
    vercel --prod || error "Falha no deploy"
    
    success "Deploy concluído com sucesso!"
    log "Site disponível em: https://sistemassentinela.com.br"
else
    log "Deploy cancelado. Build disponível na pasta dist/"
fi

log "Script finalizado!"
