import { Card } from "@/components/ui/card";
import Image from "next/image";
import styles from './Cards.styles.module.css';

interface cardProps {
  image: string;
  title?: string;
  subscription: string;
}

const Cards: React.FC<cardProps> = ({ image, subscription, title = 'Objetivo'}) =>{
  return (
    <div className={`${styles.container} flex-col justify-center`}>
      <Image
        src={`${image}?height=1350&width=1080&text=card`}
        alt="Card Image"
        width={1350}
        height={1080}
        className="w-auto h-auto object-cover"
        placeholder="blur"
        blurDataURL={`${image}?height=1350&width=1080&text=card`}
      />
      <br />
      <div
        className={`${styles.footerText} border-2 border-green-400 rounded-lg p-6`}
      >
        <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
          {title}
        </h4>
        <p className="text-white space-y-6">{subscription}</p>
      </div>
    </div>
  );
}

export default Cards;