import { FC } from "react";
import styles from "./RootLayout.module.css";

type Props = {
  children: JSX.Element;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className={styles.main_layout}>{children}</main>
    </>
  );
};

export default RootLayout;
