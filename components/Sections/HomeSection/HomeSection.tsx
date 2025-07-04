import Image from "next/image";
import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";

//TODO: mudar imagens de formato png para webp

export default function HomeSection() {
  return (
    <section id="home" className="section-container">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0 lg:pr-12 neonText">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Como posso{" "}
            <span className="text-pink-500 neon-text-pink">te ajudar</span>?
          </h1>

          <div className="mb-8">
            <p className="text-lg lg:text-xl leading-relaxed">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-semibold border-2 border-pink-500 flex items-center gap-3"
              onClick={() =>
                window.open(
                  "https://wa.me/5511951085536?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                  "_blank"
                )
              }
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WHATSAPP
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold"
              onClick={() =>
                window.open("https://www.instagram.com/harumimobile/", "_blank")
              }
            >
              Instagram
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 lg:ml-12">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <FullScreenImage
              src="/images/profile-image.webp"
              alt="Carla Harumi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

//export default HomeSection;
