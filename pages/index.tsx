import CardList from "@/components/CardList";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

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
  console.log("queryFn", new Date());
  return data.data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["card", "prefetch"],
    queryFn: cardQueryFn,
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
      <CardList />
    </>
  );
}
