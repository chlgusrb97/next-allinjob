import CardList, { cardQueryFn } from "@/components/CardList";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["card"], queryFn: cardQueryFn });

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
