import InterestFilter from "@/components/InterestFilter/InterestFilter";
import { useRouter } from "next/router";
import { useEffect } from "react";

const competitionMenuNames = [
  "competition_field",
  "award_scale",
  "award_benefits",
  "support_target",
];

export default function CompetitionPage() {
  const router = useRouter();

  useEffect(() => {
    const competitionId = router.query.competitionId as string;

    if (competitionId && !competitionMenuNames.includes(competitionId))
      router.push("/");
  }, [router.query.competitionId]);

  return (
    <>
      <InterestFilter />
    </>
  );
}
