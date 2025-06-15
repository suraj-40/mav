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
import SDKIntegration from "@/components/SDKIntegration";

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
  title: "Agasthya Vidyanikethan",
  description: "Home description",
  icons: {
    icon: "/favicon.ico", // path is relative to `public/`
  },
};

export default function RootLayout({ children }) {
  const lmsDomain = "https://atoms.av.school/";
  const subdomain = "av";

  return (
    <html lang="en" className={`${hind.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Analytics 4 - gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3ZQS3R5FHY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3ZQS3R5FHY');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HPJJP29');`,
          }}
        />
      </head>
      <body
        className={`relative leading-[1.8] bg-bodyBg dark:bg-bodyBg-dark z-0 ${inter.className}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HPJJP29"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PreloaderPrimary />
        <ToastContainer position="top-right" autoClose={3000} />
        <PopupWrapper />
        {children}
        <div>
          <FixedShadow />
          <FixedShadow align={"right"} />
        </div>

        <SDKIntegration lmsDomain={lmsDomain} subdomain={subdomain} />
      </body>
    </html>
  );
}
