import { useRouter } from "next/router";
import { useEffect } from "react";

const qnetMenuNames = ["technical", "professional"];

export default function QnetPage() {
  const router = useRouter();

  useEffect(() => {
    const qnetId = router.query.qnetId as string;

    if (qnetId && !qnetMenuNames.includes(qnetId)) router.push("/");
  }, [router.query.qnetId]);

  return <>자격증</>;
}
