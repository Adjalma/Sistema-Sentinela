import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container prose max-w-3xl">
        <h1>Cookies</h1>
        <p>Utilizamos cookies essenciais para funcionamento e cookies analíticos para melhorar a experiência. Você pode gerenciar preferências no seu navegador.</p>
        <h2>Tipos</h2>
        <ul>
          <li>Essenciais: necessários para navegação e segurança.</li>
          <li>Analíticos: métricas de uso agregadas, sem identificação direta.</li>
        </ul>
        <h2>Como Desativar</h2>
        <p>Consulte as configurações do seu navegador para bloquear ou apagar cookies. O site pode perder funcionalidades se cookies essenciais forem bloqueados.</p>
        <h2>Contato</h2>
        <p>suporte@sistemassentinela.com.br</p>
      </div>
    </div>
  );
};

export default Cookies;


