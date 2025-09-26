import AboutMain from "@/components/layout/main/AboutMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "About Us - Our Story & Mission | Agasthya Vidyanikethan ",
  description: "Learn about Agasthya Vidyanikethan's journey, mission, and commitment to providing quality education in Bangalore. Discover our values and educational approach.",
  alternates: {
    canonical: "https://www.av.school/about",
  },
};

const About = async () => {
  return (
    <PageWrapper>
      <main>
        <AboutMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default About;
