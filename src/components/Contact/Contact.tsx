import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-dark-blue">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
            Pronto para dar o <span className="neon-text-pink">primeiro passo</span>?
          </h2>
          <p className="text-center mb-8 md:mb-12 text-base md:text-lg">Me chama e vamos tirar seu projeto do papel!</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-deep-purple rounded-md focus:outline-none focus:border-neon-pink transition-all duration-300 text-sm md:text-base"
                required
              />
              <div className="absolute -top-2 -left-2 w-3 md:w-4 h-3 md:h-4 border border-neon-pink"></div>
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail"
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-deep-purple rounded-md focus:outline-none focus:border-neon-pink transition-all duration-300 text-sm md:text-base"
                required
              />
              <div className="absolute -top-2 -left-2 w-3 md:w-4 h-3 md:h-4 border border-neon-green"></div>
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-deep-purple rounded-md focus:outline-none focus:border-neon-pink transition-all duration-300 text-sm md:text-base"
                required
              ></textarea>
              <div className="absolute -top-2 -left-2 w-3 md:w-4 h-3 md:h-4 border border-neon-blue"></div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="neon-button px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-base"
              >
                Entrar em contato
              </button>
            </div>
          </form>
          
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-12">
            <a href="https://wa.me/5511951085736" target="_blank" rel="noopener noreferrer" className="flex items-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-neon-green rounded-full mr-3 group-hover:bg-neon-green group-hover:bg-opacity-20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm md:text-base group-hover:neon-text-green transition-all duration-300">WhatsApp</span>
            </a>
            
            <a href="https://instagram.com/carlaharumi" target="_blank" rel="noopener noreferrer" className="flex items-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-neon-pink rounded-full mr-3 group-hover:bg-neon-pink group-hover:bg-opacity-20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <span className="text-sm md:text-base group-hover:neon-text-pink transition-all duration-300">Instagram</span>
            </a>
            
            <a href="mailto:Carlaharumi117@gmail.com" className="flex items-center group">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-neon-blue rounded-full mr-3 group-hover:bg-neon-blue group-hover:bg-opacity-20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm md:text-base group-hover:neon-text-blue transition-all duration-300">E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
