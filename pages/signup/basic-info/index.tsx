import BasicInformation from "@/components/BasicInformation/BasicInformation";

export default function BasicInfoPage() {
  return <BasicInformation />;
}

export const getStaticProps = async () => {
  return {
    props: {
      layout: "signup",
    },
  };
};
