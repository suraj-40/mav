import { Hind, Inter, Montserrat } from "next/font/google";
import "@/assets/css/icofont.min.css";
import "@/assets/css/popup.css";
import "@/assets/css/video-modal.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./globals.css";
import FixedShadow from "@/components/shared/others/FixedShadow";
import PreloaderPrimary from "@/components/shared/others/PreloaderPrimary";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import PopupWrapper from "@/components/shared/wrappers/PopupWrapper";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Agasthya Vidhya",
  description: "Home description",
  icon: "../../public/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hind.variable} ${montserrat.variable}`}>
      <body
        className={`relative leading-[1.8] bg-bodyBg dark:bg-bodyBg-dark z-0 ${inter.className}`}
      >
        <PreloaderPrimary />
        <ToastContainer position="top-right" autoClose={3000} />
        <PopupWrapper/>
        {children}
        <div>
          <FixedShadow />
          <FixedShadow align={"right"} />

        </div>
      </body>
    </html>
  );
}