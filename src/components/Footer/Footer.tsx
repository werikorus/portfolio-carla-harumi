import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-10 bg-dark-blue border-t border-deep-purple">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-xl md:text-2xl font-bold neon-text-pink mb-2">Carla Harumi</div>
            <p className="text-xs md:text-sm tech-text">
              <span className="neon-text-green">&lt;</span> Social Media | Storymaker | Videomaker Mobile <span className="neon-text-green">/&gt;</span>
            </p>
            <p className="text-xs md:text-sm mt-2">
              Florianópolis - SC | +55 11 951085736
            </p>
          </div>
          
          <div className="flex space-x-4 md:space-x-6">
            <a href="https://instagram.com/carlaharumi" target="_blank" rel="noopener noreferrer" className="hover:neon-text-pink transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </a>
            <a href="https://wa.me/5511951085736" target="_blank" rel="noopener noreferrer" className="hover:neon-text-green transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href="mailto:Carlaharumi117@gmail.com" className="hover:neon-text-blue transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-deep-purple text-center">
          <p className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Carla Harumi. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-1 md:mt-2">
            Design cyberpunk inspirado na tecnologia humana e storytelling visual.
          </p>
        </div>
      </div>
    </footer>
  );
};
