import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative min-h-screen flex items-center bg-dark-blue">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-pink opacity-10 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-neon-green opacity-10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-blue opacity-10 blur-xl"></div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-blue to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold neon-text-pink">Carla Harumi</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="hover:neon-text-green transition-all duration-300">Sobre</a>
            <a href="#portfolio" className="hover:neon-text-pink transition-all duration-300">Portfólio</a>
            <a href="#diferenciais" className="hover:neon-text-blue transition-all duration-300">Métricas</a>
            <a href="#contato" className="neon-button px-4 py-2 rounded-md">Contato</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-dark-blue border-b border-deep-purple transition-all duration-300 ${mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#sobre" className="hover:neon-text-green transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#portfolio" className="hover:neon-text-pink transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
            <a href="#diferenciais" className="hover:neon-text-blue transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>Métricas</a>
            <a href="#contato" className="neon-button px-4 py-2 rounded-md inline-block text-center" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Como posso <span className="neon-text-pink">te ajudar</span>?
              </h1>
              
              <p className="text-lg md:text-xl mb-6 max-w-lg">
                <span className="neon-text-green">Social Media</span> | <span className="neon-text-blue">Storymaker</span> | <span className="neon-text-pink">Videomaker Mobile</span>
              </p>
              
              <p className="text-base md:text-lg mb-8 max-w-lg">
                Florianópolis - SC | +55 11 951085736
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="https://wa.me/5511951085736" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="neon-button px-6 py-3 rounded-md"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://instagram.com/carlaharumi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-neon-pink text-white hover:bg-neon-pink hover:bg-opacity-20 px-6 py-3 rounded-md transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden neon-border">
                <img 
                  src="https://via.placeholder.com/600x600/001D31/00BE67?text=Carla+Harumi" 
                  alt="Carla Harumi" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-neon-pink"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-neon-green"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};
