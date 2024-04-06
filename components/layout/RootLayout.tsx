import { FC } from "react";
import Header from "@/components/Header/Header";

type Props = {
  children: JSX.Element;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header className="grid-layout" />
      <main className="grid-layout">{children}</main>
    </>
  );
};

export default RootLayout;
