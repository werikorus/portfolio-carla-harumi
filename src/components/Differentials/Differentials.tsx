import React from 'react';
import { motion } from 'framer-motion';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-12 md:py-20 bg-dark-blue">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="neon-text-green">Métrica de </span><span className="neon-text-pink">engajamento</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <motion.div 
            className="relative p-6 md:p-8 border border-deep-purple rounded-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 border border-neon-green"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 neon-text-green">Dia da Mulher - Frida Kahlo</h3>
            <p className="mb-4">O carrossel de Dia da Mulher apresentou alta taxa de engajamento (17,2%), desempenho acima da média para o formato.</p>
            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/400x300/2B0E66/F500BD?text=Carrossel+Frida+Kahlo" 
                alt="Métricas do carrossel Dia da Mulher" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="relative p-6 md:p-8 border border-deep-purple rounded-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 border border-neon-pink"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 neon-text-pink">FS Movies</h3>
            <p className="mb-4">O Reels FS Movies obteve excelente volume de interações, evidenciando forte identificação do público com a ação.</p>
            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/400x300/2B0E66/00BE67?text=Reels+FS+Movies" 
                alt="Métricas do Reels FS Movies" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="relative p-6 md:p-8 border border-deep-purple rounded-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 border border-neon-blue"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 neon-text-blue">Aqui cada pessoa importa</h3>
            <p className="mb-4">A sequência de Stories sobre vagas foi estruturada de forma estratégica, com o uso de caixinhas e reações para gerar proximidade e engajamento de forma leve e interativa.</p>
            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/400x300/2B0E66/00A1D5?text=Stories+Aqui+Cada+Pessoa+Importa" 
                alt="Métricas da sequência de Stories" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 neon-text-green">💡 Insights Estratégicos</h3>
          <ul className="space-y-4 max-w-3xl mx-auto text-left">
            <li className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
              </div>
              <p>O carrossel de Dia da Mulher apresentou alta taxa de engajamento (17,2%), desempenho acima da média para o formato.</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
              </div>
              <p>O Reels FS Movies obteve excelente volume de interações, evidenciando forte identificação do público com a ação.</p>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
              </div>
              <p>A sequência de Stories sobre vagas foi estruturada de forma estratégica, com o uso de caixinhas e reações para gerar proximidade e engajamento de forma leve e interativa.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
