import CardList, { getPosts } from "@/components/Card/CardList";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Image from "next/image";
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
  ];

  return (
    <>
      {/* <VisibleArea height={"h-[400px]"}>
        <Carousel
          sliderRef={sliderRef}
          width={slideWidth}
          getImageElements={getImageElements}
        />
      </VisibleArea> */}
      <div className="slider-container col-span-12">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[1200px] bg-orange-400"
            >
              <Image fill src={image} alt="carousel image" />
            </div>
          ))}
        </Slider>
      </div>
      <CardList />
    </>
  );
}
