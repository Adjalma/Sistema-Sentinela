import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container prose max-w-3xl">
        <h1>Termos de Uso</h1>
        <p>Ao utilizar o site do Sistema Sentinela, você concorda com estes termos. Leia-os atentamente.</p>
        <h2>Uso Permitido</h2>
        <p>Não é permitido tentar burlar segurança, explorar vulnerabilidades, ou utilizar o serviço de forma ilícita.</p>
        <h2>Conteúdo</h2>
        <p>Projetos e materiais aqui apresentados pertencem ao Sistema Sentinela e/ou aos respectivos autores.</p>
        <h2>Responsabilidades</h2>
        <p>O serviço é fornecido “como está”, sem garantias de disponibilidade contínua. Não nos responsabilizamos por perdas resultantes do uso.</p>
        <h2>Contato</h2>
        <p>suporte@sistemassentinela.com.br</p>
      </div>
    </div>
  );
};

export default Terms;


