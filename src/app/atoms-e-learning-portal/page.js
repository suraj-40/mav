import Overview1 from "@/components/sections/overviews/Overview1";
import Registration1 from "@/components/sections/registrations/Registration1";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import AtomsNavCard from "@/components/sections/atomsNavCard/atomsNavCard";
import OverviewlandingonlineFullStack from '@/components/sections/overviews/OverviewlandingonlineFullStack';
import Script from "next/script";

export const metadata = {
  title: "AV-ATOMS | The modern learning platform for the atomic age of education",
  description: "AV-ATOMS: The modern learning platform for the atomic age of education. Dashboard, Announcements, My Subjects, Calendar, Exams, Profile, Settings, Help.",
  icon: "icon2.ico",
  alternates: {
    canonical: "https://www.av.school/atoms-e-learning-portal",
  },
};

const Atoms = async () => {
  return (
    <PageWrapper>
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is ATOMS available as an app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can access ATOMS through any mobile browser. App support for our Learning Management System is in development."
              }
            },
            {
              "@type": "Question",
              "name": "Can both parents log in to the same account?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Shared login access is available upon request through the Learning Portal dashboard."
              }
            },
            {
              "@type": "Question",
              "name": "What if I forget my password?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can reset your password directly on the login page of our e-learning portal or by contacting the school office."
              }
            },
            {
              "@type": "Question",
              "name": "Will I get exam results here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The online learning management system displays performance summaries, report cards, and teacher remarks."
              }
            },
            {
              "@type": "Question",
              "name": "How secure is this Learning Management System?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AV ATOMS is one of the best Learning Management Systems, built on a secure framework and aligned with current data protection standards."
              }
            }
          ]
        }
       `}
      </Script>
      <main>
        <Overview1 />
        <OverviewlandingonlineFullStack />
      </main>
    </PageWrapper>
  );
};

export default Atoms;