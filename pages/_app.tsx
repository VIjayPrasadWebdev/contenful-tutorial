import type { AppProps } from "next/app";
import "./globals.css";
import Navbar from "@/components/general/navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
