import { useRouter } from "next/router";
import { useEffect } from "react";

const communityMenuNames = [
  "all",
  "competitions_external_activities",
  "certifications_language_proficiency",
  "intern",
  "study",
  "job_senior_qa",
  "general_discussion_board",
];

export default function CommunityPage() {
  const router = useRouter();

  useEffect(() => {
    const communityId = router.query.communityId as string;

    if (communityId && !communityMenuNames.includes(communityId))
      router.push("/");
  }, [router.query.communityId]);

  return <>취준JOB담</>;
}
