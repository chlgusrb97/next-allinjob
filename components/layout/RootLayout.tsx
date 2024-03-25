import { FC } from "react";

type Props = {
  children: JSX.Element;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className="grid grid-cols-12 gap-[24px] justify-center min-h-screen">
        {children}
      </main>
    </>
  );
};

export default RootLayout;
