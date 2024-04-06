import InterestForm from "@/components/InterestForm/InterestForm";

export default function InterestFormPage() {
  return <InterestForm />;
}

export const getStaticProps = async () => {
  return {
    props: {
      layout: "signup",
    },
  };
};
