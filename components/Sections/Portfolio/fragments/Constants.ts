
interface cardProps {
  image: string;
  title?: string;
  subscription: string;
}

export const portFolioCards: cardProps[] = [
  {
    image:
      "/images/portfolio/posts/post-baile-leao.png?height=1350&width=1080&text=Baile+do+Leão",
    subscription: `
      Criado para incentivar a participação dos colaboradores, o
      post utilizou recursos atualizados do Instagram, como
      carrossel colaborativo, gerando engajamento orgânico por
      meio do envio de fotos e comentários, tudo planejado para
      ampliar o alcance e fortalecer a presença da marca.
    `,
  },
  {
    image:
      "/images/portfolio/posts/post-carta-mais-quatro.png?height=1350&width=1080&text=Carta+Uno",
    subscription: `
      Nesse post foi usada a carta +4 do Uno como metáfora de
      virada de jogo, apresentando o plano de saúde como a "carta
      na manga" ideal para mudar a situação. Uma estratégia visual
      direta com foco no objetivo de vendas.
    `,
  },
];
