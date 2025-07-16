//import { Video } from "@/components";
import { Video } from "@/components/Video";
import Image from "next/image";
import Cards from "./fragments/Cards/Cards";
import SlideImages from "@/components/SlideImages/SlideImages";
import {
  carrocelFrida, 
  stories, 
  entrevistas, 
  storymakerVideos, 
  videomakerMobileVideos,
  carrocelPosts
} from './pathAttachments';

export default function Portifolio() {
  return (
    <section id="portfolio" className="section-container">
      <div className="space-y-16 portfolio-container">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="text-green-400 neon-text-green bruno-ace-regular">Case Social</span>
            <span className="text-pink-500 neon-text-pink bruno-ace-regular"> Media</span>
          </h1>
        </div>

        <div className="space-y-8">
          {/* Dia da Mulher - Frida Kahlo */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-4xl font-bold text-blue-400 neon-text-blue text-center bruno-ace-regular">
              Criação de conteúdo
            </h1>
            {/* Carrossel de imagens Frida */}
            <SlideImages images={carrocelFrida} />

            <SlideImages images={carrocelPosts} />


          </div>


          {/* Stories */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-4xl font-bold text-green-400 text-center neon-text-green bruno-ace-regular">
              Stories
            </h3>
            <p className="text-white text-center">
              Sequências de storys com foco em vagas e vendas, estruturadas de
              forma estratégica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 color-yellow">
              {stories.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-700 rounded-lg overflow-hidden"
                >
                  <Video source={source} />
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          {/* Rosto da Marca */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center bruno-ace-regular">
              Rosto da Marca
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {entrevistas.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-700 rounded-lg overflow-hidden"
                >
                  <Video source={source} />
                </div>
              ))}
            </div>

            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green text-center">
                Objetivo
              </h4>
              <p className="text-white text-center">
                Minha participação como entrevistadora nos vídeos teve como
                objetivo representar o clima leve e alto astral da empresa,
                comunicando campanhas, ações e acontecimentos internos de forma
                descontraída. Uma estratégia para reforçar os ideais da marca em
                relação à sua cultura e relação com as pessoas.
              </p>
            </div>
          </div>
          <br />
          {/* Captação e edição */}
          <div className="text-center py-8">
            <h2 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center bruno-ace-regular">
              Captação e edição
            </h2>
          </div>
          {/* Storymaker */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 text-center neon-text-green bruno-ace-regular">
              Storymaker
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {storymakerVideos.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-700 rounded-lg overflow-hidden"
                >
                  <Video source={source} />
                </div>
              ))}
            </div>

            {/* Objetivo */}
            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green text-center">
                Objetivos
              </h4>
              <br />

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue text-center bruno-ace-regular">
                Almoço Coco Bambu
              </h4>

              <p className="text-white text-center">
                Proporcionei uma cobertura completa do almoço dos
                aniversariantes no Coco Bambu, registrando desde a saída até o
                encerramento do evento. O objetivo foi transportar o público,
                permitindo que acompanhassem e vivenciassem os momentos de forma
                imersiva e próxima.
              </p>

              <br />

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue text-center bruno-ace-regular">
                Cobertura entrega mimo dia das mães
              </h4>
              <p className="text-white text-center">
                Cobertura da entrega de mimos com registros em foto e vídeo das
                mães presenteadas na empresa. A ação foi retratada de forma leve
                e afetiva, valorizando o momento e reforçando o cuidado da marca
                com as pessoas.
              </p>

              <br />

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue text-center bruno-ace-regular">
                Cobertura Beto Carreiro "Leões no park"
              </h4>

              <p className="text-white text-center">
                Cobertura completa de todo o percurso de ida ao parque e dos
                momentos vivenciados, incluindo entrevistas com colaboradores,
                fotos, takes e boomerangs. O conteúdo foi pensado para
                representar de forma dinâmica a experiência vivida pelos
                ganhadores da campanha.
              </p>
            </div>
          </div>
          <br />
          {/* Videomaker Mobile */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 neon-text-blue text-center bruno-ace-regular">
              Videomaker Mobile
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {videomakerMobileVideos.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-700 rounded-lg overflow-hidden"
                >
                  <Video source={source} />
                </div>
              ))}
            </div>

            {/* Objetivo */}
            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green text-center">
                Objetivo
              </h4>
              <p className="text-white text-center">
                Captação, edição e publicação de vídeos, destacando campanhas e
                ações da empresa de forma dinâmica e alinhada à identidade da
                marca para redes sociais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//export default Portifolio;
