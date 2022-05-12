import { FC, ReactNode } from "react";
import Head from "next/head";
// MIS COMPONENTES
import { NavBar } from "../NavBar";
import styles from "./mainLayout.module.css";
// INTERFACES
interface Props {
  children?: ReactNode;
}
// INICIO
export const MainLayout: FC<Props> = ({ children }) => {
  // RENDER
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Henry</title>
        <meta name="description" content="Home App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
