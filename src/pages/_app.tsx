import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { Lato } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // chọn các kiểu font bạn muốn
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian chạy animation
      once: true, // chỉ chạy 1 lần khi scroll
    });
  }, []);

  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
