import { CardType } from "@/pages";
import BookMark from "@/public/bookmark.svg";

import Image from "next/image";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

type Props = {
  data: CardType;
  index: number;
};

export default function Card(props: Props) {
  const { index, data } = props;

  return (
    <div key={index} className="flex flex-col justify-between">
      <div>
        <div className="relative aspect-square w-full  overflow-hidden rounded-lg bg-black-50">
          <Image
            alt="image"
            src={data.mainImage}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            priority
          />
          <CardHeader data={data} index={index} />
          <div className="absolute bottom-2 right-2">
            <Image alt="bookmark" src={BookMark} width={20} />
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-lg">{data.title}</h1>
        </div>
      </div>

      <CardFooter data={data} />
    </div>
  );
}
