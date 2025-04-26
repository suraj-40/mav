import Registration1 from "@/components/sections/registrations/Registration1";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import  Schedule  from "@/components/sections/registrations/Schedule";
import ImageGallery from "@/components/sections/sub-section/ImageGallery";

export const metadata = {
  title: "ATOMS | Agasthya Vidhyanikethan",
  description: "ATOMS | Agasthya Vidhyanikethan",
  icon:"icon2.ico"
};


const application = async () => {
  return (
    <PageWrapper>
      <main>
        {/* <AboutMain /> */}
        {/* <Registration1/> */}
        <Schedule/>
        {/* <ThemeController /> */}
      </main>
    </PageWrapper>
  );
};

export default application;
