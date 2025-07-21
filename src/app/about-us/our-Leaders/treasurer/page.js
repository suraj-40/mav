import AboutMain from "@/components/layout/main/AboutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import AboutTreasurer from "@/components/layout/main/AboutTreasurer";
 
export const metadata = {
  title: "About | Treasurer",
  description: "About | Treasurer",
  alternates: {
    canonical: "https://www.av.school/about-us/our-Leaders/treasurer"
  }
};

const About = async () => {
  return (
    <PageWrapper>
      {/* <main> */}
       <AboutTreasurer/>
        {/* <ThemeController /> */}
      {/* </main> */}
    </PageWrapper>
  );
};

export default About;