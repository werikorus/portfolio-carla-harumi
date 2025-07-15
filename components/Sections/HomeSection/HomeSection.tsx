import Image from "next/image";
import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import { useMediaQuery } from "usehooks-ts";

const handleRenderWebPage = () => {
  return (
    <section id="sobre" className="section-container min-h-[calc(100vh-100px)] content-center">
      <div id="main" className="flex justify-center mb-8">
        <div className="content-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight neon-text-white bruno-ace-regular">
            <span>Como posso</span>
            <br />
            <span className="text-pink-500 neon-text-pink">te ajudar</span>?
          </h1>

          <div id="labels-and-buttons" className="content-center mb-8 min-w-[calc(70%)] w-[calc(70%)]">
            <p className="lg:text-1xl leading-relaxed mb-8">
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
                className="rounded-3xl border-2 bg-pink-600 hover:bg-pink-500 text-white px-8 py-8 text-lg font-semibold border-pink-500 flex items-center gap-3"
                onClick={() =>
                  window.open(
                    "https://wa.me/5548988224714?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                    "_blank"
                  )
                }
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="rounded-3xl border-2 border-white hover:bg-white hover:text-slate-600 px-10 py-8 text-lg font-semibold"
                onClick={() =>
                  window.open("https://www.instagram.com/harumimobile/", "_blank")
                }
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
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

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight neon-text-white bruno-ace-regular">
          <span>Como posso</span>
          <br />
          <span className="text-pink-500 neon-text-pink">te ajudar</span>?
        </h1>

        <div id="labels-and-buttons" className="content-center">
          <p className="text-lg lg:text-1xl leading-relaxed mb-8 text-center">
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
    
          <div id="buttons" className="grid grid-cols-2 gap-6">
            <Button
              className="rounded-3xl border-2 bg-pink-600 hover:bg-pink-500 text-white text-lg font-semibold border-pink-500 gap-3"
              onClick={() =>
                window.open(
                  "https://wa.me/5548988224714?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                  "_blank"
                )
              }
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="rounded-3xl border-2 border-white hover:bg-white hover:text-slate-600 text-lg font-semibold"
              onClick={() =>
                window.open("https://www.instagram.com/harumimobile/", "_blank")
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
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
