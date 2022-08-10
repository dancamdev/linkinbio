import "../styles/globals.css";
import type { AppProps } from "next/app";
import {logPageView} from "../google-analytics";
import {useRouter} from "next/router";
import {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => logPageView(url);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
