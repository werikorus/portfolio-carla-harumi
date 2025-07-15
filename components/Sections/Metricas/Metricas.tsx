import { Card, CardContent } from "@/components/ui/card";
//import { Video } from '@/components';
import { Video } from "@/components/Video";

export default function Metricas() {
  const metricasVideos = [
    {
      source:
        "https://portifolio-carla-harumi.b-cdn.net/metricas/metrica-1-dia-das-mulheres.mp4",
    },
    {
      source:
        "https://portifolio-carla-harumi.b-cdn.net/metricas/metrica-2-fs-movies.mp4",
    },
    {
      source:
        "https://portifolio-carla-harumi.b-cdn.net/metricas/metrica-3-cada-pessoa-importa.mp4",
    },
  ];

  return (
    <section id="metricas" className="section-container">
      <div className="space-y-16 text-center">
        <div className="text-center">
          <h1 className="text-4xl lg:text-4xl font-bold text-pink-400 neon-text-pink text-center">
            <span className="text-green-400 neon-text-green bruno-ace-regular">Métrica de</span>
            <span className="text-pink-500 neon-text-pink bruno-ace-regular">engajamento</span>
          </h1>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[9/16] rounded-lg">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-green-400 neon-text-green mb-4">
                    Dia da Mulher - Frida Kahlo
                  </h3>
                  <p className="text-white mb-4">
                    O carrossel de Dia da Mulher apresentou alta taxa de
                    engajamento (17,2%), desempenho acima da média para o
                    formato.
                  </p>
                </CardContent>
              </Card>

              <br />
              <Video source={metricasVideos[0].source} />
            </div>

            <div className="aspect-[9/16] rounded-lg">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-pink-500 neon-text-pink mb-4">
                    FS Movies
                  </h3>
                  <p className="text-white mb-4">
                    O Reels FS Movies obteve excelente volume de interações,
                    evidenciando forte identificação do público com a ação.
                  </p>
                </CardContent>
              </Card>
              <br />

              <Video source={metricasVideos[0].source} />
            </div>

            <div className="aspect-[9/16]rounded-lg">
              <Card className="bg-slate-800 border-slate-700 p-5">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-blue-400 neon-text-blue mb-4">
                    Aqui cada pessoa importa
                  </h3>
                  <p className="text-white">
                    A sequência de Stories sobre vagas foi estruturada de forma
                    estratégica, com o uso de caixinhas e reações para gerar
                    proximidade e engajamento de forma leve e interativa.
                  </p>
                </CardContent>
              </Card>
              <br />

              <Video source={metricasVideos[2].source} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//export default Metricas;
