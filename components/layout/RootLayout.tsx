import { FC } from "react";

type Props = {
  children: JSX.Element;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className="grid min-h-screen grid-cols-12 justify-center gap-[24px]">
        {children}
      </main>
    </>
  );
};

export default RootLayout;
