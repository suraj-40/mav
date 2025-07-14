import AboutMain from "@/components/layout/main/AboutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import AboutSecretary from "@/components/layout/main/AboutSecretary";

export const metadata = { 
  title: "About | Secretary",
  description: "About | Secretary",
  alternates: {
    canonical: "https://www.av.school/about-us/our-Leaders/secretary",
  },
};

const About = async () => {
  return (
    <PageWrapper>
      {/* <main> */}
        <AboutSecretary/>
        {/* <ThemeController /> */}
      {/* </main> */}
    </PageWrapper>
  );
};

export default About;