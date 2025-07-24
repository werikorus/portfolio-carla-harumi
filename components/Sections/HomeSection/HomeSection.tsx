import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import { useMediaQuery } from "usehooks-ts";

const handleRenderWebPage = () => {
  return (
    <section id="home" className="section-container min-h-[calc(100vh-100px)] content-center">
      <div id="main" className="flex justify-center mb-8">
        <div className="content-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight neon-text-white bruno-ace-regular">
            <span>Como posso</span>
            <br />
            <span className="text-pink-500 neon-text-pink">te ajudar</span>?
          </h1>

          <div id="labels-and-buttons" className="content-center mb-8 min-w-[calc(70%)] w-[calc(70%)]">
            <p className="lg:text-1xl leading-relaxed mb-8 bruno-ace-regular">
              <span className="text-green-400 neon-text-green">
                Social Media
              </span>
              <span className="text-white"> | </span>
              <span className="text-blue-400 neon-text-blue">Storymaker</span>
              <span className="text-white"> | </span>
              <span className="text-pink-500 neon-text-pink">
                Videomaker Mobile
              </span>
            </p>
     
            <div id="buttons" className="flex flex-col sm:flex-row gap-9">
              <Button
                className="rounded-3xl border-2 bg-pink-600 hover:bg-pink-500 text-white px-8 py-8 text-lg font-semibold border-pink-500 flex items-center gap-3 bruno-ace-regular"
                onClick={() =>
                  window.open(
                    "https://wa.me/5548988224714?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                    "_blank"
                  )
                }
              >
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="rounded-3xl border-2 border-white hover:bg-white hover:text-slate-600 px-10 py-8 text-lg  bruno-ace-regular"
                onClick={() =>
                  window.open("https://www.instagram.com/harumimobile/", "_blank")
                }
              >
                Instagram
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden flex-shrink-0 self-center">
          <FullScreenImage
            src="/images/profile-image2.webp"
            alt="Carla Harumi"
          />
        </div>
      </div>
      <div id="text-about">
        <div className="space-y-2 text-white text-lg leading-relaxed max-w-5xl mx-auto text-center">
          <p>
            Unindo criatividade, estratégia e conexão, atuo como Social Media, Storymaker e Videomaker Mobile.
            Crio conteúdos direcionados, storys que engajam e vídeos otimizados para redes sociais.
            Também atuo como rosto da marca e represendo marcas em frente às câmeras, fortalecendo o vínculo com o público e transmitindo
            os valores da marca.           
          </p>
        </div>
      </div>
    </section>
  );
};

const handleRenderMobile = () => {
  return (
    <section id="sobre" className="section-container content-center">
      <div className="flex flex-col content-center items-center mb-8">
        <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mb-8">
          <FullScreenImage
            src="/images/profile-image2.webp"
            alt="Carla Harumi"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mb-6 leading-tight neon-text-white text-center bruno-ace-regular">
          <span>Como posso</span>
          <br />
          <span className="text-pink-500 neon-text-pink">te ajudar</span>?
        </h1>

        <div id="labels-and-buttons" className="content-center">
          <p className="text-lg leading-relaxed text-center bruno-ace-regular">
            <span className="text-green-400 neon-text-green">
              Social Media
            </span>
            <span className="text-white"> | </span>
            <span className="text-blue-400 neon-text-blue">Storymaker</span>
          </p>
          <p className="text-lg leading-relaxed mb-8 text-center bruno-ace-regular">
            <span className="text-pink-500 neon-text-pink">
              Videomaker Mobile
            </span>
          </p>
    
          <div id="buttons" className="grid grid-cols-2 gap-6">
            <Button
              className="rounded-2xl border-2 bg-pink-600 hover:bg-pink-500 text-white text-lg font-semibold border-pink-500 gap-3"
              onClick={() =>
                window.open(
                  "https://wa.me/5548988224714?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                  "_blank"
                )
              }
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-2 border-white hover:bg-white hover:text-slate-600 text-lg font-semibold"
              onClick={() =>
                window.open("https://www.instagram.com/harumimobile/", "_blank")
              }
            >
              Instagram
            </Button>
          </div>
        </div>
      </div>
      <div id="text-about">
        <div className="space-y-2 text-white text-lg leading-relaxed max-w-5xl mx-auto text-center">
          <p>
            Unindo criatividade, estratégia e conexão, atuo como Social Media, Storymaker e Videomaker Mobile.
            Crio conteúdos direcionados, storys que engajam e vídeos otimizados para redes sociais.
            Também atuo como rosto da marca e represendo marcas em frente às câmeras, fortalecendo o vínculo com o público e transmitindo
            os valores da marca.           
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HomeSection() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return !isMobile 
    ? handleRenderWebPage() 
    : handleRenderMobile();
}

//export default HomeSection;
