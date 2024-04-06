import { cn } from "@/lib/utils";
import BookMark from "@/public/bookmark.svg";
import BookMarkIndicator from "@/public/bookmark_indicator.svg";
import Visibility from "@/public/visibility.svg";
import Image from "next/image";

type Props = {
  index: number;
};

export default function Card(props: Props) {
  const isSpecial = props.index < 4 ? "block" : "hidden";

  return (
    <div key={props.index}>
      <div className="relative aspect-square w-full rounded-lg bg-black-50">
        <div className="absolute left-2 top-2 flex gap-2">
          <div
            className={cn(
              isSpecial,
              "rounded-md bg-orange-500 px-2 py-1 text-white",
            )}
          >
            special
          </div>
          <div className="rounded-md border-2 border-orange-500 bg-orange-50 px-2 py-1 text-orange-500">
            d-day
          </div>
        </div>
        <div className="absolute bottom-2 right-2">
          <Image alt="bookmark" src={BookMark} width={20} />
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-lg">제목 오는 곳</h1>
        <p className="text-sm text-black-300">주최기관</p>
        <div className="float-right flex gap-2 text-sm">
          <div className="flex gap-1">
            <Image
              alt="bookmark_indicator"
              src={BookMarkIndicator}
              width={20}
            />
            <span>10</span>
          </div>
          <div className="flex gap-1">
            <Image alt="visibility" src={Visibility} width={20} />
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
