
  // TODO: mudar todos os vídeos para o google drive

import { source } from "framer-motion/client";

  const prefixVideosStorage = `${process.env.BASE_STORAGE_URL}/portifolio-videos`; 
  
  export const carrocelFrida = [
    "/images/portfolio/carrocel-frida/CARROSSEL1.webp",
    "/images/portfolio/carrocel-frida/CARROSSEL2.webp",
    "/images/portfolio/carrocel-frida/CARROSSEL3.webp",
    "/images/portfolio/carrocel-frida/CARROSSEL4.webp",
    "/images/portfolio/carrocel-frida/CARROSSEL5.webp",
  ];

  export const carrocelPosts = [
    // '/images/portfolio/posts/post-baile-leao.webp',
    // '/images/portfolio/posts/post-carta-mais-quatro.webp',
    '/images/portfolio/posts/bom-dia-07-07.webp',
    '/images/portfolio/posts/bom-dia-08-07.webp',
    '/images/portfolio/posts/bom-dia-09-07.webp',
    '/images/portfolio/posts/bom-dia-07-07.webp',
    '/images/portfolio/posts/template-avaliacao.webp',
  ]

  export const storiesVagas = [
    'SWBHRJiOVHo',
    'DyZMyL_hU3k', 
    'HrRfAf_w4Y4',
  ];

  
  export const storiesVendas = [
    '',
    'QCwZs-EIgZM',
    '',
    // `${prefixVideosStorage}/stories/vendas/story-andre.mp4`, 
    // `${prefixVideosStorage}/stories/vendas/story-felipe.mp4`,
    // `${prefixVideosStorage}/stories/vendas/story-kelly-na-vidal.mp4`,
  ];


  export const rostodamarca = [
    `HgEBAkpDxKo`,
    `kiWJT8T6bHU`,
    `RZhEBlBVVjk`,
  ];

  export const metricasVideos = [
    {
      title: "Dia da Mulher - Frida Kahlo",
      description: "O carrossel de Dia da Mulher apresentou alta taxa de engajamento (17,2%), desempenho acima da média para o formato.",
      source: `i60OOcG_lK0`,
    },
    {
      title: "FS Movies",
      description: "O Reels FS Movies obteve excelente volume de interações, evidenciando forte identificação do público com a ação.",
      source: `UD4-ePTPYv4`,
    },
    {
      title: "Cada pessoa importa",
      description: "A senquência de Stories sobre vagas foi estruturada de forma estratégica, com o uso de caixinhas e reações para gerar proximidade e engajamento de forma leve e interativa.",
      source: `-4NrZxxyq4g`,
    }
  ];

  export const captacaoEdicao = { 
    storymaker: [
      {
        title: 'Almoço coco Bambu',
        source: `${prefixVideosStorage}/storymaker/storymaker-almoco-coco-bambu.mp4`,
      },
      {
        title: 'Cobertura Beto Carreiro: "Leões no Park"',
        source: `${prefixVideosStorage}/storymaker/storymaker-beto-carreiro.mp4`,      
      },
      {
        title: 'Cobertura Entrega mimo dia das Mães',
        source: `${prefixVideosStorage}/storymaker/storymaker-dia-das-maes.mp4`,      
      },
    ],
    videomakerMobile: [
      {
        source: `${prefixVideosStorage}/videomaker-mobile/videomaker-mobile-1.mp4.mp4`,  
      },
      {
        source: `${prefixVideosStorage}/videomaker-mobile/videomaker-mobile-2.mp4.mp4`,  
      },
      {
        source: `${prefixVideosStorage}/videomaker-mobile/videomaker-mobile-3.mp4.mp4`,  
      },
      {
        source: `${prefixVideosStorage}/videomaker-mobile/videomaker-mobile-4.mp4.mp4`,  
      }
    ],
  };

  export const videomakerMobileVideos = [
    "https://portifolio-carla-harumi.b-cdn.net/videomaker-mobile/videomaker-mobile-1.mp4",
    "https://portifolio-carla-harumi.b-cdn.net/videomaker-mobile/videomaker-mobile-2.mp4",
    "https://portifolio-carla-harumi.b-cdn.net/videomaker-mobile/videomaker-mobile-3.mp4",
    "https://portifolio-carla-harumi.b-cdn.net/videomaker-mobile/videomaker-mobile-4.mp4",
  ];
