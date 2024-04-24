import Card from "@/components/Card";
import InterestFilter from "@/components/InterestFilter/InterestFilter";
import { competitionMenu } from "@/constants/menu";
import { getMenuCrawling } from "@/services/crawling/getMenuCrawling";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { CardType } from "..";

export default function CompetitionPage() {
  const router = useRouter();
  const competitionId = router.query.competitionId as string;

  const res = useQuery({
    queryKey: ["competitionGetData"],
    queryFn: () => getMenuCrawling("competition", 1),
  }).data;

  return (
    <>
      <InterestFilter menuId={competitionId} menu={competitionMenu} />
      <ul className="col-span-12 grid grid-cols-4 gap-x-[24px] gap-y-[53px]">
        {res &&
          res.data.map((competitionData: CardType, index: number) => (
            <li key={competitionData.id}>
              <Card data={competitionData} index={index} />
            </li>
          ))}
      </ul>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["competitionGetData", "prefetch"],
    queryFn: () => getMenuCrawling("competition", 1),
  });

  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    },
  };
};
