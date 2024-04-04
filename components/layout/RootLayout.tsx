import { FC } from "react";
import Header from "../Header";

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
