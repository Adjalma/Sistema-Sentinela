import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

// Components
import TabNavigation from './components/TabNavigation';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ParticleBackground from './components/ParticleBackground';
import ConnectionCards from './components/ConnectionCards';

// Pages
import ProjectDetail from './pages/ProjectDetail';
import OurStory from './pages/OurStory';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Values from './pages/Values';
import ProjetoConexaoPessoas from './pages/ProjetoConexaoPessoas';
import ProjetoDeepFocus from './pages/ProjetoDeepFocus';
import ProjetoCrux from './pages/ProjetoCrux';
import ProjetoKodeshMoney from './pages/ProjetoKodeshMoney';
import ProjetoClubeMontanha from './pages/ProjetoClubeMontanha';
import ProjetoN8N from './pages/ProjetoN8N';
import LinguagemSentinela from './pages/LinguagemSentinela';

// Hooks
import { useTheme } from './hooks/useTheme';
import { useChat } from './hooks/useChat';

function App() {
  const { theme } = useTheme();
  const { isChatOpen, toggleChat } = useChat();

  useEffect(() => {
    // Aplicar tema
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <HelmetProvider>
      <Router>
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 relative overflow-hidden flex flex-col">
              <ParticleBackground />
          
          <TabNavigation />
          
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<><Hero /><ConnectionCards /></>} />
              <Route path="/projetos" element={<ProjectsGrid />} />
              <Route path="/projeto/conexao-pessoas" element={<ProjetoConexaoPessoas />} />
              <Route path="/projeto/deepfocus" element={<ProjetoDeepFocus />} />
              <Route path="/projeto/crux" element={<ProjetoCrux />} />
              <Route path="/projeto/kodesh-money" element={<ProjetoKodeshMoney />} />
              <Route path="/projeto/clube-montanha" element={<ProjetoClubeMontanha />} />
              <Route path="/projeto/n8n-workflows" element={<ProjetoN8N />} />
              <Route path="/projeto/linguagem-sentinela" element={<LinguagemSentinela />} />
              <Route path="/projeto/:id" element={<ProjectDetail />} />
              <Route path="/sobre" element={<OurStory />} />
              <Route path="/missao" element={<Mission />} />
              <Route path="/visao" element={<Vision />} />
              <Route path="/valores" element={<Values />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          
          <ChatWidget 
            isOpen={isChatOpen} 
            onToggle={toggleChat} 
          />
          
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#ffffff',
                color: '#1f2937',
                border: '1px solid #dc2626',
              },
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;