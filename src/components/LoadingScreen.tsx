import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-sentinela-darker flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo animado */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-r from-sentinela-primary to-sentinela-secondary"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 rounded-full bg-sentinela-darker flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">S</span>
            </div>
          </div>
        </motion.div>

        {/* Texto de carregamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Sistema Sentinela
          </h1>
          <p className="text-sentinela-light/70 mb-8">
            Carregando portfólio de projetos...
          </p>
        </motion.div>

        {/* Barra de progresso */}
        <motion.div
          className="w-64 h-1 bg-sentinela-dark rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-sentinela-primary to-sentinela-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Pontos de carregamento */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-sentinela-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
