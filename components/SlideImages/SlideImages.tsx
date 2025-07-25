import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import { useMediaQuery } from "usehooks-ts";
import FullScreenImage from "../FullScreenImage/FullScreenImage";
interface SlideImagesProps {
  images: string[];
}

const SlideImages: React.FC<SlideImagesProps> = ({ images }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  if (isMobile) {
    return (
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl"
        placeholder="image"
        onResize={undefined}
        onResizeCapture={undefined}
        draggable={true}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {images.map((src, i) => (
          <div key={i} className="rounded-sm overflow-hidden">
            <Image
              src={`${src}?height=1350&width=1080&text=image`}
              alt={`image ${i}`}
              width={1350}
              height={1080}
              className="object-cover w-auto h-auto"
              placeholder="blur"
              blurDataURL={src}
            />
          </div>
        ))}
      </Carousel>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden">
          <FullScreenImage
            src={`${image}?height=1350&width=1080&text=full+image`}
            alt={`fullImage${image}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SlideImages;
