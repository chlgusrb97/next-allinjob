import CardList, { getPosts } from "@/components/Card/CardList";
import FingerSlider from "@/components/FingerSlider";
import { menuKeysEnglish } from "@/components/Header/menus";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

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
    queryFn: () => getPosts(1, "competition"),
  });

  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      {menuKeysEnglish.map((menu) => (
        <FingerSlider key={menu} target={menu} visibleAmount={4} gap={10} />
      ))}
      <CardList target="competition" />
    </>
  );
}
