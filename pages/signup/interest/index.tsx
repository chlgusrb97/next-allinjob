import InterestForm from "@/components/InterestForm/InterestForm";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const queryFn = async () => {
  const res = await fetch(
    `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${process.env.NEXT_PUBLIC_CAREER_KEY}&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&thisPage=${1}&perPage=3000`,
  );
  const data = await res.json();
  return data;
};

export default function InterestFormPage() {
  const { data } = useQuery({ queryKey: ["majors"], queryFn });
  console.log("Majors: ", data);
  return <InterestForm />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["majors"], queryFn });
  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
      layout: "signup",
    },
  };
};
