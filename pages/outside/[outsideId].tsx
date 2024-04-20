import { useRouter } from "next/router";
import { useEffect } from "react";

const outsideMenuNames = [
  "activity_field",
  "area_of_interest",
  "activity_benefits",
  "activity_duration",
  "location",
];

export default function OutsidePage() {
  const router = useRouter();

  useEffect(() => {
    const outsideId = router.query.outsideId as string;

    if (outsideId && !outsideMenuNames.includes(outsideId)) router.push("/");
  }, [router.query.outsideId]);

  return <>대외활동</>;
}
