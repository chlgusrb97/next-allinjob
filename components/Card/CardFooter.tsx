import { CardType } from "@/pages";
import BookMarkIndicator from "@/public/bookmark_indicator.svg";
import Visibility from "@/public/visibility.svg";
import Image from "next/image";

type Props = {
  data: CardType;
};

export default function CardFooter(props: Props) {
  const { data } = props;
  return (
    <div>
      <p className="text-sm text-black-300">{data.enterprise}</p>
      <div className="float-right flex gap-2 text-sm">
        <div className="flex gap-1">
          <Image alt="bookmark_indicator" src={BookMarkIndicator} width={20} />
          <span>{data.scrap}</span>
        </div>
        <div className="flex gap-1">
          <Image alt="visibility" src={Visibility} width={20} />
          <span>{data.view}</span>
        </div>
      </div>
    </div>
  );
}
