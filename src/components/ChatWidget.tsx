import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useChat } from '../hooks/useChat';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const { messages, isTyping, sendMessage } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const quickReplies = [
    'Quais projetos vocês têm?',
    'Como posso colaborar?',
    'Preciso de ajuda técnica',
    'Quero saber mais sobre a equipe'
  ];

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-sentinela-error text-white' 
            : 'bg-gradient-to-r from-sentinela-primary to-sentinela-secondary text-white hover:shadow-xl hover:shadow-sentinela-primary/25'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: isOpen ? 0.9 : 1,
          rotate: isOpen ? 90 : 0
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-sentinela-dark rounded-2xl shadow-2xl border border-sentinela-primary/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-sentinela-primary to-sentinela-secondary p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sistema Sentinela</h3>
                    <p className="text-xs opacity-80">Online agora</p>
                  </div>
                </div>
                <motion.button
                  onClick={onToggle}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 h-64">
              {messages.length === 0 ? (
                <div className="text-center text-sentinela-light/60">
                  <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
                  
                  {/* Quick replies */}
                  <div className="mt-4 space-y-2">
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => sendMessage(reply)}
                        className="block w-full text-left p-2 text-xs bg-sentinela-primary/10 text-sentinela-primary rounded-lg hover:bg-sentinela-primary/20 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.user === 'Usuário' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.user === 'Usuário' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.user === 'Usuário' 
                          ? 'bg-sentinela-primary' 
                          : 'bg-sentinela-secondary'
                      }`}>
                        {message.user === 'Usuário' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`px-3 py-2 rounded-lg ${
                        message.user === 'Usuário'
                          ? 'bg-sentinela-primary text-white'
                          : 'bg-sentinela-darker/50 text-sentinela-light'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="w-6 h-6 rounded-full bg-sentinela-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-sentinela-darker/50 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-sentinela-light/60 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-sentinela-light/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-sentinela-light/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-sentinela-primary/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 bg-sentinela-darker/50 border border-sentinela-primary/20 rounded-lg text-sentinela-light placeholder-sentinela-light/40 focus:outline-none focus:border-sentinela-primary text-sm"
                />
                <motion.button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2 bg-sentinela-primary text-white rounded-lg hover:bg-sentinela-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
