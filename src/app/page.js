import Home1 from "@/components/layout/main/Home1";
import Home9 from "@/components/layout/main/Home9";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Script from "next/script";

export const metadata = {
  title: "Top School in Bangalore – Agasthya Vidyanikethan Nagarbhavi",
  description: "Ranked among Bangalore's best! Explore Agasthya Vidyanikethan, Nagarbhavi where holistic education, sports, and cultural growth come together.",
  alternates: {
    canonical: "https://www.av.school/",
  },
};

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Home9 />
        {/* <ThemeController /> */}
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Agasthya Vidyanikethan",
            "alternateName": "AV",
            "url": "https://www.av.school/",
            "logo": "https://www.av.school/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_1.bbc98d07.png&w=256&q=75",
            "sameAs": [
              "https://www.facebook.com/AgasthyaVidyanikethan/",
              "https://www.instagram.com/agasthyavidyanikethan/",
              "https://www.youtube.com/@agasthyavidyanikethan6492",
              "https://in.linkedin.com/company/agasthya-vidyanikethan"
            ]
          })}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Agasthya Vidyanikethan",
            "url": "https://www.av.school/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.av.school/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Script id="article-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.av.school/"
            },
            "headline": "Agasthya Vidyanikethan – Top School in Nagarbhavi, Bangalore",
            "description": "In 2024, Agasthya Vidyanikethan opened its Ullal branch with a clear mission to redefine education and create a space where students are justly taught but are inspired to grow into their finest version. While our Srigandhakaval branch continues to lead the way, the Ullal branch serves as a beacon for those ready to begin their journey of educational success, innovation, and limitless possibilities.",
            "publisher": {
              "@type": "Organization",
              "name": "",
              "logo": {
                "@type": "ImageObject",
                "url": ""
              }
            },
            "datePublished": ""
          })}
        </Script>
      </main>
    </PageWrapper>
  );
}
