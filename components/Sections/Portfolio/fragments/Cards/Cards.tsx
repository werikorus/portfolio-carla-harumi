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
    <div className={`bg-slate-800 rounded-lg p-4 ${styles.container}`}>
      <Image
        src={image}
        alt="Card Image"
        width={300}
        height={300}
        className="w-full h-full object-cover"
        loading="eager"
      />
      <br />
      <div className="border-2 border-green-400 rounded-lg p-6">
        <h4 className="text-xl font-bold text-green-400 mb-3 neon-text-green">
          {title}
        </h4>
        <p className="text-white">{subscription}</p>
      </div>
    </div>
  );
}

export default Cards;