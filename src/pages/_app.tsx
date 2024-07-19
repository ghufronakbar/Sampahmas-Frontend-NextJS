import NavBot from "@/components/NavBot";
import NavTop from "@/components/NavTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavTop />
      <NavBot />
      <Component {...pageProps} />;
    </>
  );
}
