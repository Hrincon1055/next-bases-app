import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";
// TYPES
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// INICIO
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // CONSTANTES
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
