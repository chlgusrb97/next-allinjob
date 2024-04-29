import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";
import { CardType } from "@/pages";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import { menusPair } from "../Header/menus";

type Props = {
  target: "competition" | "outside" | "qnet" | "language" | "intern";
  visibleAmount: number;
  gap: number;
};

/*
  1. count 상태를 만들어 초기값을 1로 설정합니다.
  2. data를 가져옵니다.
  3. data가 없다면 null을 반환합니다.
  4. 컨테이너의 ref를 생성합니다.
  5. count가 1이 아닐 때만 왼쪽 화살표를 렌더링합니다.
  6. count가 cards.length / visibleAmount와 같을 때만 오른쪽 화살표를 렌더링합니다.
  7. count가 1일 때는 왼쪽 화살표를 렌더링하지 않습니다.
  8. count가 cards.length / visibleAmount와 같을 때는 오른쪽 화살표를 렌더링하지 않습니다.
  9. ArrowComp 컴포넌트를 생성합니다.
  10. ArrowComp 컴포넌트는 direction과 setCount를 props로 받습니다.
  11. handleArrowClick 함수를 생성합니다.
  12. direction이 left일 때 count를 1 감소시킵니다.
  13. direction이 right일 때 count를 1 증가시킵니다.
  14. ArrowComp 컴포넌트를 렌더링합니다.
  15. ArrowComp 컴포넌트를 클릭하면 handleArrowClick 함수가 실행됩니다.
*/

export default function FingerSlider({ target, visibleAmount, gap }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { breakpoint } = useBreakpoint();
  const [count, setCount] = useState(1);

  // 모바일 화면일때 touchX 값 관리
  const [touchX, setTouchX] = useState(0);

  // 화면 터치가 시작되면 X값을 설정함
  function onTouchStart(e: React.TouchEvent) {
    setTouchX(e.changedTouches[0].pageX);
  }

  // 화면 터치가 완료되면 해당 ul의 left값만 변경함
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    const distanceX = touchX - e.changedTouches[0].pageX;
    const targetUl = e.currentTarget;
    const targetUlWidth = targetUl.offsetWidth / 2;
    const newLeft = Math.abs(parseFloat(targetUl.style.left)) + distanceX;

    console.log(
      "newLeft",
      newLeft,
      targetUlWidth,
      distanceX,
      touchX,
      e.changedTouches[0].pageX,
    );

    if (newLeft < 0) {
      targetUl.style.left = "0px";
    } else if (newLeft < targetUlWidth) {
      targetUl.style.left = `-${newLeft}px`;
    } else {
      targetUl.style.left = `-${targetUlWidth}px`;
    }
  }

  const { data } = useQuery<CardType[]>({
    queryKey: ["posts", target],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/crawling/finde/${target}?page=${1}}`,
      );
      const data = await res.json();
      return data.data;
    },
  });

  console.log("isBreakpoint", breakpoint);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const movedWidth = container.clientWidth * (count - 1) + gap * (count - 1);
    console.log("movedWidth", movedWidth, count);
    container.style.transform = `translateX(-${movedWidth}px)`;
  }, [breakpoint, count]);

  if (!data) return null;
  return (
    <section className="col-span-12 bg-black-50 ">
      <div className="relative smallMobile:px-96 tablet:px-52 desktop:px-16 xl:px-0">
        <h1 className="mb-4 overflow-hidden text-2xl font-bold">
          {menusPair[target]}
        </h1>
        <div className="overflow-hidden ">
          <div
            ref={containerRef}
            className="flex gap-[10px] transition-transform"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {data.map((card, index) => (
              <Card
                data={card}
                key={index}
                index={index}
                variant={"competition"}
                breakpoint={breakpoint}
              />
            ))}
          </div>
        </div>

        {/*  count가 1이 아닐 때만 왼쪽 화살표를 렌더링합니다. */}
        {count === 1 ? null : (
          <ArrowComp direction="left" setCount={setCount} />
        )}
        {/*  count가 cards.length / visibleAmount와 같을 때만 오른쪽 화살표를 렌더링합니다. */}
        {count === data.length / visibleAmount ? null : (
          <ArrowComp direction="right" setCount={setCount} />
        )}
      </div>
    </section>
  );
}

type ArrowProps = {
  direction: "left" | "right";
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function ArrowComp({ direction, setCount }: ArrowProps) {
  const handleArrowClick = () => {
    if (direction === "left") setCount((prev) => prev - 1);
    else setCount((prev) => prev + 1);
  };

  // smallMobile:px-36 tablet:px-20 desktop:px-16 xl:px-0

  return (
    <div
      className={cn(
        direction === "left" ? "left-2 xl:-left-16" : "right-2 xl:-right-16",
        "s absolute top-1/2 z-10 grid aspect-square h-12 w-12 -translate-y-1/2 transform cursor-pointer place-items-center rounded-full bg-white shadow-black-200 drop-shadow-lg",
      )}
      onClick={handleArrowClick}
    >
      {direction === "left" ? (
        <ChevronLeft width={50} />
      ) : (
        <ChevronRight width={50} />
      )}
    </div>
  );
}
