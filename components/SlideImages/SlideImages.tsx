import React from 'react';
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SlideImagesProps {
  images: string[];
}

const carrocelFrida = [
  "/images/portfolio/carrocel-frida/CARROSSEL1.png",
  "/images/portfolio/carrocel-frida/CARROSSEL2.png",
  "/images/portfolio/carrocel-frida/CARROSSEL3.png",
  "/images/portfolio/carrocel-frida/CARROSSEL4.png",
  "/images/portfolio/carrocel-frida/CARROSSEL5.png",
];


const SlideImages: React.FC<SlideImagesProps> = ({ images }) => {
  //const isMobile = useMediaQuery("(max-width:768px)");

  const isMobile = true;

  if (isMobile) {
    return (
      <Swiper spaceBetween={10} slidesPerView={1}>
        {carrocelFrida.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`imagem-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {carrocelFrida.map((src, i) => (
        <img key={i} src={src} alt={`imagem-${i}`} />
      ))}
    </div>
  );
  //return (
  //  <Swiper
  //    spaceBetween={1}
  //    slidesPerView={images.length}
  //    onSlideChange={() => console.log("slide change")}
  //    onSwiper={(swiper) => console.log(swiper)}
  //  >
  //    {images.map((i, idx) => (
  //      //console.log('WERIK imgs: ',i);
  //      <SwiperSlide>
  //        <div key={i} className="rounded-lg overflow-hidden">
  //          <Image
  //            src={`${i}?height=1350&width=1080&text=Frida+Kahlo`}
  //            alt={`Frida Kahlo ${i}`}
  //            width={135}
  //            height={135}
  //            className="w-full h-full object-cover"
  //            placeholder="blur"
  //            blurDataURL={i}
  //          />
  //        </div>
  //      </SwiperSlide>
  //    ))}
  //    ...
  //  </Swiper>
  //);
};

export default SlideImages;
