//import { Video } from "@/components";
import { Video } from "@/components/Video";
import Image from "next/image";
import Cards from "./fragments/Cards/Cards";
import { portFolioCards } from "./fragments/Constants";

export default function Portifolio(){
  const carrocelFrida = [
    "/images/portfolio/carrocel-frida/CARROSSEL1.png",
    "/images/portfolio/carrocel-frida/CARROSSEL2.png",
    "/images/portfolio/carrocel-frida/CARROSSEL3.png",
    "/images/portfolio/carrocel-frida/CARROSSEL4.png",
    "/images/portfolio/carrocel-frida/CARROSSEL5.png",
  ];

  const stories = [
    "/videos/stories/story-cada-pesssoa-importa.mp4",
    "/videos/stories/story-dia-da-fruta.mp4",
    "/videos/stories/story-andre.mp4",
    "/videos/stories/story-felipe.mp4",
  ];

  const entrevistas = [
    "/videos/rosto-da-marca/rosto-da-marca-1.mp4",
    "/videos/rosto-da-marca/rosto-da-marca-2.mp4",
    "/videos/rosto-da-marca/rosto-da-marca-3.mp4",
  ];

  const storymakerVideos = [
    "/videos/storymaker/storymaker-coco-bambu.mp4",
    "/videos/storymaker/storymaker-dia-das-maes.mp4",
    "/videos/storymaker/storymaker-dia-das-maess.mp4",
  ];

  const videomakerMobileVideos = [
    '/videos/videomaker-mobile/videomaker-mobile-1.mp4',
    '/videos/videomaker-mobile/videomaker-mobile-2.mp4',
    '/videos/videomaker-mobile/videomaker-mobile-3.mp4',
    '/videos/videomaker-mobile/videomaker-mobile-4.mp4',
  ];

  return (
    <section id="portfolio" className="section-container">
      <div className="space-y-16 portfolio-container">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="text-green-400 neon-text-green">Case Social</span>
            <span className="text-pink-500 neon-text-pink"> Media</span>
          </h1>
        </div>

        <div className="space-y-8">
          {/* Dia da Mulher - Frida Kahlo */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-4xl font-bold text-blue-400 neon-text-blue text-center">
              Criação de conteúdo
            </h1>
            {/* Carrossel de imagens */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/*TODO: colocar carrocel de imagens aqui e adaptar para telas pequenas*/}
              {/*<SlideImages images={carrocelFrida} />*/}

              {carrocelFrida.map((i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <Image
                    src={`${i}?height=1350&width=1080&text=Frida+Kahlo`}
                    alt={`Frida Kahlo ${i}`}
                    width={100}
                    height={1080}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL={i}
                  />
                </div>
              ))}
            </div>

            {/* Objetivo */}
            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
                Objetivo:
              </h4>
              <p className="text-white">
                Criado para ir além da homenagem tradicional, este carrossel usa
                Frida Kahlo como símbolo de superação, incentivando o
                autoconhecimento e o protagonismo feminino de forma estratégica
                e inspiradora.
              </p>
            </div>
          </div>
          <br />
          {/* CARDS: Baile do Leão  - Carta 4 Uno*/}
          <div className="flex justify-between color-yellow">
            <Cards
              image={portFolioCards[0].image}
              subscription={portFolioCards[0].subscription}
            />
            <Cards
              image={portFolioCards[1].image}
              subscription={portFolioCards[1].subscription}
            />
          </div>

          <br />
          <br />
          {/* Stories */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-4xl font-bold text-green-400 text-center neon-text-green">
              Stories
            </h3>
            <p className="text-white text-center">
              Sequências de storys com foco em vagas e vendas, estruturadas de
              forma estratégica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <h3 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center">
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
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
                Objetivo:
              </h4>
              <p className="text-white">
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
            <h2 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center">
              Captação e edição
            </h2>
          </div>
          {/* Storymaker */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 text-center neon-text-green">
              Storymaker
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
                Objetivos:
              </h4>

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue">
                Almoço Côco Bambu
              </h4>

              <p className="text-white">
                Proporcionei uma cobertura completa do almoço dos
                aniversariantes no Coco Bambu, registrando desde a saída até o
                encerramento do evento. O objetivo foi transportar o público,
                permitindo que acompanhassem e vivenciassem os momentos de forma
                imersiva e próxima.
              </p>

              <br />

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue">
                Cobertura entrega mimo dia das mães
              </h4>
              <p className="text-white">
                Cobertura da entrega de mimos com registros em foto e vídeo das
                mães presenteadas na empresa. A ação foi retratada de forma leve
                e afetiva, valorizando o momento e reforçando o cuidado da marca
                com as pessoas.
              </p>

              <br />

              <h4 className="text-xl font-bold text-blue-400 neon-text-blue">
                Cobertura Beto Carreiro "Leões no park"
              </h4>

              <p className="text-white">
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
            <h3 className="text-2xl font-bold text-blue-500 neon-text-blue text-center">
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
              <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
                Objetivo:
              </h4>
              <p className="text-white">
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