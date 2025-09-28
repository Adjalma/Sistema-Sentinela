import { useState, useEffect } from 'react';
import { ChatMessage } from '../types';

export const useChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  const sendMessage = (message: string, user: string = 'Usuário') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user,
      message,
      timestamp: new Date(),
      avatar: '/avatars/user.jpg',
      isOnline: true
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    // Simular resposta automática
    setTimeout(() => {
      const responses = [
        'Interessante! Conte-me mais sobre isso.',
        'Que projeto específico te interessa?',
        'Posso te ajudar com alguma dúvida técnica?',
        'Gostaria de saber mais sobre nossa equipe?',
        'Temos vários projetos em desenvolvimento. Qual te chama atenção?'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        user: 'Sistema Sentinela',
        message: randomResponse,
        timestamp: new Date(),
        avatar: '/avatars/sentinela.jpg',
        isOnline: true
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return {
    isChatOpen,
    messages,
    isTyping,
    toggleChat,
    sendMessage
  };
};
