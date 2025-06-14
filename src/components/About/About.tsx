import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-dark-blue">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden neon-border">
                <img 
                  src="https://via.placeholder.com/600x450/001D31/00BE67?text=Carla+Harumi" 
                  alt="Carla Harumi" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-neon-pink"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-neon-green"></div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="neon-text-green">Social Media</span> | <span className="neon-text-blue">Storymaker</span> | <span className="neon-text-pink">Videomaker Mobile</span>
              </h2>
              
              <div className="space-y-4 text-base md:text-lg">
                <p>
                  Criação de conteúdo estratégico para redes sociais, com foco em engajamento e fortalecimento da marca.
                </p>
                <p>
                  Captação e edição de conteúdo em tempo real, registrando momentos especiais e criando narrativas envolventes.
                </p>
                <p>
                  Captação, edição e publicação de vídeos, destacando campanhas e ações da empresa de forma dinâmica e alinhada à identidade da marca para redes sociais.
                </p>
                <p>
                  Participação como entrevistadora nos vídeos representando o clima leve e alto astral da empresa, comunicando campanhas, ações e acontecimentos internos de forma descontraída.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

