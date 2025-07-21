import AboutMain from "@/components/layout/main/AboutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import AboutVicePresident from "@/components/layout/main/AboutVicePresident";
 
export const metadata = {
  title: "About | Vice President",
  description: "About | Vice President",
  alternates: {
    canonical: "https://www.av.school/about-us/our-Leaders/vice-president"
  }
};

const About = async () => {
  return (
    <PageWrapper>
      {/* <main> */}
        <AboutVicePresident/>
        {/* <ThemeController /> */}
      {/* </main> */}
    </PageWrapper>
  );
};

export default About;