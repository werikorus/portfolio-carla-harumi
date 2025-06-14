import React from 'react';
import { motion } from 'framer-motion';
import { VideoPlayer } from '../VideoPlayer';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'videomaker' | 'storymaker' | 'social' | 'rosto' | 'storys';
  mediaType: 'video' | 'image' | 'carousel';
  mediaUrl: string | string[];
  externalLink?: string;
  objective?: string;
}

export const Portfolio: React.FC = () => {
  const carouselImages = [
    '/public/images/portfolio/CARROSSEL1.png',
    '/public/images/portfolio/CARROSSEL2.png',
    '/public/images/portfolio/CARROSSEL3.png',
    '/public/images/portfolio/CARROSSEL4.png',
    '/public/images/portfolio/CARROSSEL5.png'
  ];

  const portfolioItems: PortfolioItem[] = [
    // Social Media - Criação de conteúdo
    {
      id: 1,
      title: 'Dia da Mulher - Frida Kahlo',
      description: 'Carrossel criado para o Dia da Mulher usando Frida Kahlo como símbolo de superação.',
      category: 'social',
      mediaType: 'carousel',
      mediaUrl: carouselImages,
      objective: 'Criado para ir além da homenagem tradicional, este carrossel usa Frida Kahlo como símbolo de superação, incentivando o autoconhecimento e o protagonismo feminino de forma estratégica e inspiradora.'
    },
    {
      id: 2,
      title: 'Baile do Leão',
      description: 'Post colaborativo para incentivar a participação dos colaboradores no evento.',
      category: 'social',
      mediaType: 'image',
      mediaUrl: '/images/portfolio/POSTBAILEDOLEÃO.PNG',
      objective: 'Criado para incentivar a participação dos colaboradores, o post utilizou recursos atualizados do Instagram, como carrossel colaborativo, gerando engajamento orgânico por meio do envio de fotos e comentários, tudo planejado para ampliar o alcance e fortalecer a presença da marca.'
    },
    {
      id: 3,
      title: 'Carta +4 do Uno',
      description: 'Post usando a carta +4 do Uno como metáfora para planos de saúde.',
      category: 'social',
      mediaType: 'image',
      mediaUrl: '/images/portfolio/POSTCARTANAMANGA.jpeg',
      objective: 'Nesse post foi usada a carta +4 do Uno como metáfora de virada de jogo, apresentando o plano de saúde como a "carta na manga" ideal para mudar a situação. Uma estratégia visual direta com foco no objetivo de vendas.'
    },
    
    // Storys - Foco em vagas
    {
      id: 4,
      title: 'Sequência "aqui casa pessoa importa de verdade"',
      description: 'Sequência de storys com foco em vagas, estruturada de forma estratégica.',
      category: 'storys',
      mediaType: 'video',
      mediaUrl: '/videos/storys/STORYVAGAS-aquicasapessoaimportadeverdade.MOV',
    },
    {
      id: 5,
      title: 'Sequência "Dia da fruta"',
      description: 'Sequência de storys com foco em engajamento interno.',
      category: 'storys',
      mediaType: 'video',
      mediaUrl: '/videos/storys/STORYVAGAS-DIADAFRUTA.MOV',
    },
    
    // Storys - Foco em vendas
    {
      id: 7,
      title: 'Sequência storys André na Vidal',
      description: 'Sequência de storys com foco em vendas e cases recentes.',
      category: 'storys',
      mediaType: 'video',
      mediaUrl: '/videos/storys/STORYVENDAS-AndrénaVidal.MOV',
    },
    {
      id: 8,
      title: 'Sequência storys Felipe Juan na Vidal',
      description: 'Sequência de storys com foco em vendas e cases recentes.',
      category: 'storys',
      mediaType: 'video',
      mediaUrl: '/videos/storys/STORYVENDAS-FelipeJuannaVidal.MOV',
    },
    
    // Rosto da Marca
    {
      id: 10,
      title: 'Rosto da Marca - Vídeo 1',
      description: 'Participação como entrevistadora representando o clima leve e alto astral da empresa.',
      category: 'rosto',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/F500BD?text=Rosto+da+Marca+1',
      externalLink: 'https://www.instagram.com/reel/DJcS5H-hgev/?igsh=NGNyd3luZHc1aml2',
    },
    {
      id: 11,
      title: 'Rosto da Marca - Vídeo 2',
      description: 'Comunicando campanhas e ações internas de forma descontraída.',
      category: 'rosto',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00BE67?text=Rosto+da+Marca+2',
      externalLink: 'https://www.instagram.com/reel/C--gI-EARhA/?igsh=MTJuNWQ2Njh0YWNxOA==',
    },
    {
      id: 12,
      title: 'Rosto da Marca - Vídeo 3',
      description: 'Reforçando os ideais da marca em relação à sua cultura e relação com as pessoas.',
      category: 'rosto',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00A1D5?text=Rosto+da+Marca+3',
      externalLink: 'https://www.instagram.com/reel/C-Gde4fpi8Z/?igsh=MzFzMWMxNmlzamxm',
    },
    
    // Storymaker
    {
      id: 13,
      title: 'Almoço Coco Bambu',
      description: 'Cobertura completa do almoço dos aniversariantes no Coco Bambu, registrando desde a saída até o encerramento do evento.',
      category: 'storymaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00BE67?text=Coco+Bambu',
      objective: 'Proporcionei uma cobertura completa do almoço dos aniversariantes no Coco Bambu, registrando desde a saída até o encerramento do evento. O objetivo foi transportar o público, permitindo que acompanhassem e vivenciassem os momentos de forma imersiva e próxima.'
    },
    {
      id: 14,
      title: 'Cobertura Beto Carreiro "Leões no park"',
      description: 'Cobertura completa de todo o percurso de ida ao parque e dos momentos vivenciados, incluindo entrevistas com colaboradores.',
      category: 'storymaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00A1D5?text=Beto+Carreiro',
      objective: 'Cobertura completa de todo o percurso de ida ao parque e dos momentos vivenciados, incluindo entrevistas com colaboradores, fotos, takes e boomerangs. O conteúdo foi pensado para representar de forma dinâmica a experiência vivida pelos ganhadores da campanha.'
    },
    {
      id: 15,
      title: 'Cobertura entrega mimo dia das mães',
      description: 'Cobertura da entrega de mimos com registros em foto e vídeo das mães presenteadas na empresa.',
      category: 'storymaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/F500BD?text=Dia+das+Mães',
      objective: 'Cobertura da entrega de mimos com registros em foto e vídeo das mães presenteadas na empresa. A ação foi retratada de forma leve e afetiva, valorizando o momento e reforçando o cuidado da marca com as pessoas.'
    },
    
    // Videomaker Mobile
    {
      id: 16,
      title: 'Videomaker Mobile - Vídeo 1',
      description: 'Captação, edição e publicação de vídeos, destacando campanhas e ações da empresa.',
      category: 'videomaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00BE67?text=Videomaker+1',
      externalLink: 'https://www.instagram.com/reel/DC7egf9yPnn/?igsh=MXhyaWcxdXFkOXpkZg==',
    },
    {
      id: 17,
      title: 'Videomaker Mobile - Vídeo 2',
      description: 'Vídeos dinâmicos e alinhados à identidade da marca para redes sociais.',
      category: 'videomaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00A1D5?text=Videomaker+2',
      externalLink: 'https://www.instagram.com/reel/C92jYLTAXh9/?igsh=cGZma3Q3MmJ2YjZu',
    },
    {
      id: 18,
      title: 'Videomaker Mobile - Vídeo 3',
      description: 'Produção de conteúdo audiovisual otimizado para redes sociais.',
      category: 'videomaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/F500BD?text=Videomaker+3',
      externalLink: 'https://www.instagram.com/reel/DHHRWiPAE0n/?igsh=MXJxM3lvMWRqcmhkcA==',
    },
    {
      id: 19,
      title: 'Videomaker Mobile - Vídeo 4',
      description: 'Conteúdo audiovisual criativo e estratégico para engajamento nas redes sociais.',
      category: 'videomaker',
      mediaType: 'video',
      mediaUrl: 'https://via.placeholder.com/600x400/2B0E66/00BE67?text=Videomaker+4',
      externalLink: 'https://www.instagram.com/reel/C9vSdIKvSMR/?igsh=MWVseWJuaHhoOGJjcQ==',
    },
  ];

  const socialItems = portfolioItems.filter(item => item.category === 'social');
  const storysItems = portfolioItems.filter(item => item.category === 'storys');
  const rostoItems = portfolioItems.filter(item => item.category === 'rosto');
  const storymakerItems = portfolioItems.filter(item => item.category === 'storymaker');
  const videomakerItems = portfolioItems.filter(item => item.category === 'videomaker');

  const renderPortfolioItem = (item: PortfolioItem) => (
    <motion.div 
      key={item.id} 
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-56 md:h-64 border-2 border-neon-pink rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple to-dark-blue opacity-50"></div>
        
        {item.mediaType === 'video' ? (
          item.externalLink ? (
            <a 
              href={item.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <VideoPlayer 
                  src={item.mediaUrl as string} 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </a>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoPlayer 
                src={item.mediaUrl as string} 
                className="w-full h-full object-contain"
                autoPlay={true}
                loop={true}
                muted={true}
              />
            </div>
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={typeof item.mediaUrl === 'string' ? item.mediaUrl : item.mediaUrl[0]} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        )}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center z-10 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all">
          <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:neon-text-pink transition-all duration-300">
            {item.title}
          </h4>
          <p className="text-xs md:text-sm">{item.description}</p>
          {item.externalLink && (
            <a 
              href={item.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm border border-neon-blue rounded-md hover:bg-neon-blue hover:bg-opacity-20 transition-all duration-300"
            >
              Ver no Instagram
            </a>
          )}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-12 md:w-16 h-12 md:h-16 border border-neon-pink opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute -top-2 -left-2 w-12 md:w-16 h-12 md:h-16 border border-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </motion.div>
  );

  const renderPortfolioSection = (title: string, items: PortfolioItem[], colorClass: string, description?: string) => (
    <div className="mb-16">
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${colorClass} text-center md:text-left`}>
        {title}
      </h3>
      {description && (
        <p className="mb-8 text-center md:text-left">{description}</p>
      )}
      
      {title === "Case Social Media" ? (
        <div className="space-y-12">
          {/* Primeiro case - Frida Kahlo com imagens lado a lado */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-full">
              <h4 className="text-xl md:text-2xl font-bold mb-3 neon-text-pink">Dia da Mulher - Frida Kahlo</h4>
              <p className="mb-4">Carrossel criado para o Dia da Mulher usando Frida Kahlo como símbolo de superação.</p>
              
              {/* Imagens lado a lado em formato de galeria horizontal */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-6">
                {carouselImages.map((image, index) => (
                  <div key={index} className="relative">
                    <div className="border-2 border-neon-pink rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Frida Kahlo - Imagem ${index + 1}`} 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Texto objetivo abaixo das imagens */}
              <div className="p-4 border border-deep-purple rounded-lg bg-black bg-opacity-30">
                <h5 className="text-lg font-semibold mb-2 neon-text-green">Objetivo:</h5>
                <p>Criado para ir além da homenagem tradicional, este carrossel usa Frida Kahlo como símbolo de superação, incentivando o autoconhecimento e o protagonismo feminino de forma estratégica e inspiradora.</p>
              </div>
            </div>
          </div>
          
          {/* Segundo case - Baile do Leão */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="w-full lg:w-1/2">
              <div className="border-2 border-neon-pink rounded-lg overflow-hidden">
                <img 
                  src="/images/portfolio/POSTBAILEDOLEÃO.PNG" 
                  alt="Baile do Leão" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-bold mb-3 neon-text-green">Baile do Leão</h4>
              <p className="mb-4">Post colaborativo para incentivar a participação dos colaboradores no evento.</p>
              <div className="p-4 border border-deep-purple rounded-lg bg-black bg-opacity-30">
                <h5 className="text-lg font-semibold mb-2 neon-text-green">Objetivo:</h5>
                <p>Criado para incentivar a participação dos colaboradores, o post utilizou recursos atualizados do Instagram, como carrossel colaborativo, gerando engajamento orgânico por meio do envio de fotos e comentários, tudo planejado para ampliar o alcance e fortalecer a presença da marca.</p>
              </div>
            </div>
          </div>
          
          {/* Terceiro case - Carta na Manga */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="w-full lg:w-1/2">
              <div className="border-2 border-neon-pink rounded-lg overflow-hidden">
                <img 
                  src="/images/portfolio/POSTCARTANAMANGA.jpeg" 
                  alt="Carta +4 do Uno" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-bold mb-3 neon-text-blue">Carta +4 do Uno</h4>
              <p className="mb-4">Post usando a carta +4 do Uno como metáfora para planos de saúde.</p>
              <div className="p-4 border border-deep-purple rounded-lg bg-black bg-opacity-30">
                <h5 className="text-lg font-semibold mb-2 neon-text-green">Objetivo:</h5>
                <p>Nesse post foi usada a carta +4 do Uno como metáfora de virada de jogo, apresentando o plano de saúde como a "carta na manga" ideal para mudar a situação. Uma estratégia visual direta com foco no objetivo de vendas.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map(renderPortfolioItem)}
        </div>
      )}
    </div>
  );

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-dark-blue">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="neon-text-green">Port</span><span className="neon-text-pink">fólio</span>
        </h2>
        
        {renderPortfolioSection("Case Social Media", socialItems, "neon-text-blue", "Criação de conteúdo estratégico para redes sociais, com foco em engajamento e fortalecimento da marca.")}
        {renderPortfolioSection("Storys", storysItems, "neon-text-green", "Sequências de storys com foco em vagas e vendas, estruturadas de forma estratégica.")}
        {renderPortfolioSection("Rosto da Marca", rostoItems, "neon-text-pink", "Minha participação como entrevistadora nos vídeos teve como objetivo representar o clima leve e alto astral da empresa, comunicando campanhas, ações e acontecimentos internos de forma descontraída. Uma estratégia para reforçar os ideais da marca em relação à sua cultura e relação com as pessoas.")}
        {renderPortfolioSection("Storymaker", storymakerItems, "neon-text-green", "Captação e edição de conteúdo em tempo real, registrando momentos especiais e criando narrativas envolventes.")}
        {renderPortfolioSection("Videomaker Mobile", videomakerItems, "neon-text-pink", "Captação, edição e publicação de vídeos, destacando campanhas e ações da empresa de forma dinâmica e alinhada à identidade da marca para redes sociais.")}
      </div>
    </section>
  );
};

