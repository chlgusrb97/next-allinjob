import { useRouter } from "next/router";
import { useEffect } from "react";

const internMenuNames = ["company_type", "job_position", "work_location"];

export default function InternPage() {
  const router = useRouter();

  useEffect(() => {
    const internId = router.query.internId as string;

    if (internId && !internMenuNames.includes(internId)) router.push("/");
  }, [router.query.internId]);

  return <>인턴</>;
}
