import AboutMain from "@/components/layout/main/AboutMain";
import AboutFounder from "@/components/layout/main/AboutFounder";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = { 
  title: "About | Founder",
  description: "About | Founder",
  alternates: {
    canonical: "https://www.av.school/about-us/our-Leaders/founder",
  },
};

const About = async () => {
  return (
    <PageWrapper>
      {/* <main> */}
        <AboutFounder />
        {/* <ThemeController /> */}
      {/* </main> */}
    </PageWrapper>
  );
};

export default About;