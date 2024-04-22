import CardList, { getPosts } from "@/components/Card/CardList";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useCallback, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export type CardType = {
  id: string;
  Dday: number;
  scrap: number;
  mainImage: string;
  view: number;
  title: string;
  enterprise: string;
};

export const cardQueryFn = async (): Promise<CardType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/crawling/main/outside`,
  );
  const data = await res.json();
  return data.data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["card", "prefetch"],
    queryFn: () => getPosts(1),
  });

  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const slickRef = useRef<Slider>(null);
  const previous = useCallback(
    () => slickRef?.current && slickRef.current.slickPrev(),
    [],
  );
  const next = useCallback(
    () => slickRef?.current && slickRef.current.slickNext(),
    [],
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots",
    arrows: false,
    cursor: "pointer",
  };

  const images = [
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
  ];

  return (
    <>
      <div className="slider-container relative col-span-12">
        <Slider
          ref={slickRef}
          {...settings}
          dotsClass="slick-dots"
          className="relative"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[1200px] bg-orange-400"
            >
              <Image fill src={image} alt="carousel image" />
            </div>
          ))}
        </Slider>
        <div onClick={previous} className="absolute top-1/2">
          <ChevronLeft className="text-white" />
        </div>
        <div onClick={next} className="absolute right-0 top-1/2">
          <ChevronRight className="text-white" />
        </div>
      </div>
      <CardList />
    </>
  );
}
