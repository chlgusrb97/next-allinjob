import { useRouter } from "next/router";
import { useEffect } from "react";

const languageMenuNames = ["english", "japanese", "chinese"];

export default function LanguagePage() {
  const router = useRouter();

  useEffect(() => {
    const languageId = router.query.languageId as string;

    if (languageId && !languageMenuNames.includes(languageId)) router.push("/");
  }, [router.query.languageId]);

  return <>어학</>;
}
