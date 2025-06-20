"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Video from "@/components/Video/Video";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-2xl font-bold text-pink-500">Carla Harumi</div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#sobre"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#metricas"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Métricas
          </a>
          <Button
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            CONTATO
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <select
            onChange={(e) =>
              document
                .getElementById(e.target.value)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-slate-800 text-white border border-pink-500 rounded px-3 py-1"
          >
            <option value="">Menu</option>
            <option value="home">Home</option>
            <option value="sobre">Sobre</option>
            <option value="portfolio">Portfólio</option>
            <option value="metricas">Métricas</option>
            <option value="contato">Contato</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section */}
        <section id="home" className="section-container">
          <HomeSection />
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="section-container about-section">
          <SobreSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section-container">
          <PortfolioSection />
        </section>

        {/* Metricas Section */}
        <section id="metricas" className="section-container">
          <MetricasSection />
        </section>

        {/* Contato Section */}
        <section id="contato" className="section-container">
          <ContatoSection />
        </section>
      </main>
    </div>
  );
}

// Home Section Component
function HomeSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
      <div className="flex-1 max-w-2xl mb-12 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Como posso <span className="text-pink-500">te ajudar</span>?
        </h1>

        <div className="mb-8">
          <p className="text-lg lg:text-xl leading-relaxed">
            <span className="text-green-400">Social Media</span>
            <span className="text-white"> | </span>
            <span className="text-blue-400">Storymaker</span>
            <span className="text-white"> | </span>
            <span className="text-pink-500">Videomaker Mobile</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-semibold border-2 border-pink-500 flex items-center gap-3"
            onClick={() =>
              window.open(
                "https://wa.me/5548988490007?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
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
              window.open(
                "https://www.instagram.com/ooooocaarlaaaaaa/",
                "_blank"
              )
            }
          >
            Instagram
          </Button>
        </div>
      </div>

      <div className="flex-shrink-0 lg:ml-12">
        <div className="relative">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <Image
              src="/perfil.png"
              alt="Carla Harumi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sobre Section Component
function SobreSection() {
  // TODO: Alinhamento  para o meio da tela
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8">
          <span>
            <span className="text-green-400 about-text-title">
              Social Media
            </span>
            <span className="text-white about-text-title"> | </span>
            <span className="text-blue-400 about-text-title">StoryMaker</span>
            <span className="text-white about-text-title"> | </span>
            <span className="text-pink-500 about-text-title">
              Videomaker Mobile
            </span>
          </span>
        </h1>
      </div>

      <div className="space-y-2 text-white text-lg leading-relaxed max-w-4xl mx-auto">
        <p>Criação de conteúdo estratégico para redes sociais, com foco em engajamento e fortalecimento da marca.</p>

        <p>
          Captação e edição de conteúdo em tempo real, registrando momentos especiais e criando narrativas envolventes.
        </p>

        <p>
          Captação, edição e publicação de vídeos, destacando campanhas e ações da empresa de forma dinâmica e alinhada
          à identidade da marca para redes sociais.
        </p>

        <p>
          Participação como entrevistadora nos vídeos representando o clima leve e alto astral da empresa, comunicando
          campanhas, ações e acontecimentos internos de forma descontraída.
        </p>
      </div>
    </div>
  );
}

// Portfolio Section Component
function PortfolioSection() {
  const carouselImages = [
    "/images/portfolio/carrocel-frida/CARROSSEL1.png",
    "/images/portfolio/carrocel-frida/CARROSSEL2.png",
    "/images/portfolio/carrocel-frida/CARROSSEL3.png",
    "/images/portfolio/carrocel-frida/CARROSSEL4.png",
    "/images/portfolio/carrocel-frida/CARROSSEL5.png",
  ];

  const stories = [
    "/images/portfolio/stories/story1.png",
    "/images/portfolio/stories/story2.png",
    "/images/portfolio/stories/story3.png",
    "/images/portfolio/stories/story4.png",
  ];

  const entrevistas = [
    "/videos/rosto-da-marca/rosto-da-marca-1.mp4",
    "/videos/rosto-da-marca/rosto-da-marca-2.mp4",
    "/videos/rosto-da-marca/rosto-da-marca-3.mp4",
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="text-green-400">Case Social</span>
          <span className="text-pink-500"> Media</span>
        </h1>
      </div>

      <div className="space-y-8">
        {/* Dia da Mulher - Frida Kahlo */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 text-center">
            Criação de conteúdo
          </h2>
          {/* Carrossel de imagens */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {carouselImages.map((i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src={`${i}?height=1350&width=1080&text=Frida+Kahlo`}
                  alt={`Frida Kahlo ${i}`}
                  width={1350}
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
            <h4 className="text-xl font-bold text-green-400 mb-3">Objetivo:</h4>
            <p className="text-white">
              Criado para ir além da homenagem tradicional, este carrossel usa
              Frida Kahlo como símbolo de superação, incentivando o
              autoconhecimento e o protagonismo feminino de forma estratégica e
              inspiradora.
            </p>
          </div>
        </div>

        {/* Baile do Leão */}
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="bg-green-600 rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/posts/post-baile-leao.png?height=1350&width=1080&text=Baile+do+Leão"
                  alt="Baile do Leão"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">
                Objetivo:
              </h4>
              <p className="text-white">
                Criado para incentivar a participação dos colaboradores, o post
                utilizou recursos atualizados do Instagram, como carrossel
                colaborativo, gerando engajamento orgânico por meio do envio de
                fotos e comentários, tudo planejado para ampliar o alcance e
                fortalecer a presença da marca.
              </p>
            </div>
          </div>
        </div>

        {/* Carta +4 do Uno */}
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="bg-purple-600 rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/posts/post-carta-mais-quatro.jpeg?height=1350&width=1080&text=Carta+Uno"
                  alt="Carta +4 do Uno"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="border-2 border-green-400 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">
                Objetivo:
              </h4>
              <p className="text-white">
                Nesse post foi usada a carta +4 do Uno como metáfora de virada
                de jogo, apresentando o plano de saúde como a "carta na manga"
                ideal para mudar a situação. Uma estratégia visual direta com
                foco no objetivo de vendas.
              </p>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-green-400">Stories</h3>
          <p className="text-white">
            Sequências de storys com foco em vagas e vendas, estruturadas de
            forma estratégica.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] bg-slate-700 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=225&text=Story+${i}`}
                  alt={`Story ${i}`}
                  width={225}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Rosto da Marca */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-pink-500">Rosto da Marca</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <h4 className="text-xl font-bold text-green-400 mb-3">Objetivo:</h4>
            <p className="text-white">
              Minha participação como entrevistadora nos vídeos teve como
              objetivo representar o clima leve e alto astral da empresa,
              comunicando campanhas, ações e acontecimentos internos de forma
              descontraída. Uma estratégia para reforçar os ideais da marca em
              relação à sua cultura e relação com as pessoas.
            </p>
          </div>
        </div>

        {/* Captação e edição - Title */}
        <div className="text-center py-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Captação e <span className="text-pink-500">edição</span>
          </h2>
        </div>

        {/* Storymaker */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-green-400">Storymaker</h3>

          {/* 4 vídeos em formato smartphone */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] w-48 bg-slate-700 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=225&text=Storymaker+${i}`}
                  alt={`Storymaker ${i}`}
                  width={225}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Objetivo */}
          <div className="border-2 border-green-400 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-400 mb-3">Objetivo:</h4>
            <p className="text-white">
              Proporcionei uma cobertura completa do almoço dos aniversariantes
              no Coco Bambu, registrando desde a saída até o encerramento do
              evento. O objetivo foi transportar o público, permitindo que
              acompanhassem e vivenciassem os momentos de forma imersiva e
              próxima.
            </p>
          </div>

          {/* Segundo conjunto de 4 vídeos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] w-48 bg-slate-700 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=225&text=Storymaker+${i}`}
                  alt={`Storymaker ${i}`}
                  width={225}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Segundo Objetivo */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-blue-400">
              Cobertura entrega mimo dia das mães
            </h4>

            <div className="border-2 border-green-400 rounded-lg p-6">
              <h5 className="text-xl font-bold text-green-400 mb-3">
                Objetivo:
              </h5>
              <p className="text-white">
                Cobertura da entrega de mimos com registros em foto e vídeo das
                mães presenteadas na empresa. A ação foi retratada de forma leve
                e afetiva, valorizando o momento e reforçando o cuidado da marca
                com as pessoas.
              </p>
            </div>
          </div>

          {/* Terceiro conjunto de 4 vídeos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[9, 10, 11, 12].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] w-48 bg-slate-700 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=225&text=Storymaker+${i}`}
                  alt={`Storymaker ${i}`}
                  width={225}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Terceiro Objetivo */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-blue-400">
              Cobertura Beto Carreiro "Leões no park"
            </h4>

            <div className="border-2 border-green-400 rounded-lg p-6">
              <h5 className="text-xl font-bold text-green-400 mb-3">
                Objetivo:
              </h5>
              <p className="text-white">
                Cobertura completa de todo o percurso de ida ao parque e dos
                momentos vivenciados, incluindo entrevistas com colaboradores,
                fotos, takes e boomerangs. O conteúdo foi pensado para
                representar de forma dinâmica a experiência vivida pelos
                ganhadores da campanha.
              </p>
            </div>
          </div>
        </div>

        {/* Videomaker Mobile */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-pink-500">
            Videomaker Mobile
          </h3>

          {/* 4 vídeos em formato smartphone */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] w-48 bg-slate-700 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=225&text=Video+Mobile+${i}`}
                  alt={`Videomaker Mobile ${i}`}
                  width={225}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Objetivo */}
          <div className="border-2 border-green-400 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-400 mb-3">Objetivo:</h4>
            <p className="text-white">
              Captação, edição e publicação de vídeos, destacando campanhas e
              ações da empresa de forma dinâmica e alinhada à identidade da
              marca para redes sociais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metricas Section Component
function MetricasSection() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="text-green-400">Métrica de</span>
          <span className="text-pink-500"> engajamento</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-slate-800 border-slate-700 p-6">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-green-400 mb-4">Dia da Mulher - Frida Kahlo</h3>
            <p className="text-white mb-4">
              O carrossel de Dia da Mulher apresentou alta taxa de engajamento (17,2%), desempenho acima da média para o
              formato.
            </p>
            <p className="text-sm text-slate-300">Métricas do carrossel Dia da Mulher</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 p-6">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-pink-500 mb-4">FS Movies</h3>
            <p className="text-white mb-4">
              O Reels FS Movies obteve excelente volume de interações, evidenciando forte identificação do público com a
              ação.
            </p>
            <p className="text-sm text-slate-300">Métricas do Reels FS Movies</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 p-6">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Aqui cada pessoa importa</h3>
            <p className="text-white mb-4">
              A sequência de Stories sobre vagas foi estruturada de forma estratégica, com o uso de caixinhas e reações
              para gerar proximidade e engajamento de forma leve e interativa.
            </p>
            <p className="text-sm text-slate-300">Métricas da sequência de Stories</p>
          </CardContent>
        </Card>
      </div>

      {/* Insights Estratégicos */}
      <div className="border-2 border-green-400 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <h4 className="text-2xl font-bold text-green-400">Insights Estratégicos</h4>
        </div>

        <div className="space-y-4 text-white">
          <p>
            O carrossel de Dia da Mulher apresentou alta taxa de engajamento (17,2%), desempenho acima da média para o
            formato.
          </p>
          <p>
            O Reels FS Movies obteve excelente volume de interações, evidenciando forte identificação do público com a
            ação.
          </p>
          <p>
            A sequência de Stories sobre vagas foi estruturada de forma estratégica, com o uso de caixinhas e reações
            para gerar proximidade e engajamento de forma leve e interativa.
          </p>
        </div>
      </div>
    </div>
  )
}

// Contato Section Component
function ContatoSection() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">Pronto para dar o 
          <span className="text-pink-500">primeiro passo</span>?
        </h1>
        <p className="text-xl text-white">Me chama e vamos tirar seu projeto do papel!</p>
        <button className="justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-pink-500 hover:bg-pink-600 text-white px-12 py-4 text-xl font-semibold border-2 border-pink-500 flex items-center gap-3 mx-auto">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          WHATSAPP
        </button>
      </div>
    </div>
  )
};