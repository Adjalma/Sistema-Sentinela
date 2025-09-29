import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container prose max-w-3xl">
        <h1>Política de Privacidade</h1>
        <p>Esta política descreve como o Sistema Sentinela coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).</p>
        <h2>Dados Coletados</h2>
        <ul>
          <li>Contato/newsletter: e‑mail e consentimento.</li>
          <li>Logs técnicos: IP, user‑agent e dados de uso, para segurança e melhoria contínua.</li>
        </ul>
        <h2>Finalidades e Bases Legais</h2>
        <ul>
          <li>Envio de novidades e comunicações: consentimento do titular.</li>
          <li>Segurança, prevenção a fraudes e estatísticas: legítimo interesse.</li>
        </ul>
        <h2>Retenção e Direitos</h2>
        <p>Guardamos os dados apenas pelo tempo necessário às finalidades informadas. Você pode solicitar acesso, correção, portabilidade ou exclusão a qualquer momento pelo e‑mail suporte@sistemassentinela.com.br.</p>
        <h2>Compartilhamento</h2>
        <p>Podemos usar provedores de infraestrutura (ex.: Vercel, Resend) para processamento. Não vendemos seus dados.</p>
        <h2>Contato</h2>
        <p>suporte@sistemassentinela.com.br</p>
        <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
};

export default Privacy;


