import Login from "@/components/Login/Login";

export default function LoginPage() {
  return <Login />;
}

export const getStaticProps = async () => {
  return {
    props: {
      layout: "login",
    },
  };
};
