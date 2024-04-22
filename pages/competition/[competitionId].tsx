import InterestFilter from "@/components/InterestFilter/InterestFilter";
import { competitionMenu } from "@/constants/menu";
import { useRouter } from "next/router";

export default function CompetitionPage() {
  const router = useRouter();
  const competitionId = router.query.competitionId as string;

  return (
    <>
      <InterestFilter menuId={competitionId} menu={competitionMenu} />
    </>
  );
}
