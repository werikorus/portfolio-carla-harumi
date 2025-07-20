//import { Video } from "@/components";
import { Video } from "@/components/Video";
import Image from "next/image";
import Cards from "./fragments/Cards/Cards";
import SlideImages from "@/components/SlideImages/SlideImages";
import {
  carrocelFrida, 
  rostodamarca, 
  storymakerVideos, 
  videomakerMobileVideos,
  carrocelPosts,
  storiesVagas,
  storiesVendas,
  metricasVideos,
  captacaoEdicao
} from './pathAttachments';
import { Card, CardContent } from "@/components/ui/card";



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
            <SlideImages images={carrocelFrida} />
            <SlideImages images={carrocelPosts} />
          </div>
          <br />

          {/* Stories */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-4xl font-bold text-green-400 text-center neon-text-green bruno-ace-regular">
              Stories
            </h3>

            <br />
            <p className="text-white text-center">
              Sequência de stories com foco em vagas
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {storiesVagas.map((source, index) => (
                <Video key={index} source={source} />
              ))}
            </div>
            <br />
            <br />
            <p className="text-white text-center">
              Sequência de stories com foco em vendas
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {storiesVendas.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-800 rounded-lg overflow-hidden"
                >
                  <Video source={source} />
                </div>
              ))}
            </div>
          </div>
          <br />

          {/* Rosto da Marca */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-4xl font-bold text-green-400 neon-text-green text-center bruno-ace-regular">
              Rosto da Marca
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {rostodamarca.map((source) => (
                <div
                  key={source}
                  className="aspect-[9/16] bg-slate-800 rounded-lg overflow-hidden "
                >
                  <Video source={source} />
                </div>
              ))}
            </div>
          </div>
          <br />

          {/* Métricas */}
          <div className="space-y-16 text-center">
            <div className="text-center">
              <h1 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center">
                <span className="text-green-400 neon-text-green bruno-ace-regular">Métricas de engajamento</span>
              </h1>
            </div>

            <div className="space-y-6" >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                {metricasVideos.map((metrica, idx) => (                
                  <Card key={idx} className="bg-slate-800 border-slate-800">
                    <Card key={idx} className="bg-slate-800 border-slate-800 mb-4">
                      <Video source={metrica.source} key={idx}/>
                    </Card>     
                    <CardContent className="content-center">
                      <h3 className="text-lg text-green-400 neon-text-green mb-4 bruno-ace-regular">
                        {metrica.title}
                      </h3>  
                      <p className="text-white">
                        {metrica.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* Captação e edição */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-green-400 neon-text-green text-center bruno-ace-regular">
              Captação e edição
            </h2>
          </div>
          <br />

          {/* Storymaker */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pink-400 text-center neon-text-pink bruno-ace-regular">
              Storymaker
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {captacaoEdicao.storymaker.map((story, idx) => (
                  <Card className="bg-slate-800 border-slate-800 p-3 min-h-full">                  
                    <CardContent className="p-0 mt-4">
                      <h3 className="text-sm text-green-400 neon-text-green bruno-ace-regular text-center">
                        {story.title}
                      </h3>  
                      <p className="text-white mb-4">
                        {story.description}
                      </p>
                    </CardContent>
                    <Card className="bg-slate-800 border-slate-800 mb-4">
                      <Video source={story.source}/>
                    </Card>
                  </Card>
              ))}
            </div>
          </div>
          <br />
          
          {/* Videomaker Mobile */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pink-400 neon-text-pink  text-center bruno-ace-regular">
              Videomaker Mobile
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {captacaoEdicao.videomakerMobile.map((video, index) => (
                <div
                  key={index}
                  className="aspect-[9/16] bg-slate-800 rounded-lg overflow-hidden"
                >
                  <Video source={video.source} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//export default Portifolio;
