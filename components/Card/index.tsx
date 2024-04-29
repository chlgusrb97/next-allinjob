import { CardType } from "@/pages";
import BookMark from "@/public/bookmark.svg";

import { Breakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  data: CardType;
  index: number;
  breakpoint: Breakpoint;
}

const CardVariants = cva("", {
  variants: {
    variant: {
      competition: "flex flex-col justify-between",
      outside: "flex flex-col justify-between",
      qnet: "flex flex-col justify-between",
      language: "flex flex-col justify-between",
      intern: "flex flex-col justify-between",
    },
    shape: {
      square: "aspect-square",
      rectangle: "aspect-16:9",
    },
  },
});

export default function Card(props: CardProps) {
  const { index, data } = props;

  const getCardWidth = (breakpoint: Breakpoint) => {
    breakpoint.value - 10 * 3;
    if (breakpoint.key === "desktop") return "w-[292.5px]"; // (1200 - 30) / 4 = 292.5
    if (breakpoint.key === "tablet") {
      // 292.5px
      return "w-[374px]";
    } // (768 - 20) / 3 = 374
    if (breakpoint.key === "mobile") return "w-[182.5px]"; // (375 - 10) / 2 = 182.5
    return "w-full";
  };

  return (
    <div key={index} className={cn(CardVariants({ variant: props.variant }))}>
      <div>
        <div
          className={cn(
            "w-[292.5px]",
            // props.breakpoint ? getCardWidth(props.breakpoint) : "w-[292.5px]",
            "relative aspect-square overflow-hidden rounded-lg bg-black-50",
          )}
        >
          <Image
            alt="image"
            src={data.mainImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <CardHeader data={data} index={index} />
          <div className="absolute bottom-2 right-2">
            <Image alt="bookmark" src={BookMark} width={20} />
          </div>
        </div>

        <h1 className="text-ellipsis text-lg">{data.title}</h1>
      </div>

      <CardFooter data={data} />
    </div>
  );
}
