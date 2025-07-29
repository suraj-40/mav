import PageWrapper from "@/components/shared/wrappers/PageWrapper"
// import VisionMission from"@/components/sections/vision-mission/VisionMission"
import VisionMissionMobile from"@/components/sections/vision-mission/VisionMissionMobile"
import VisionMissionMain from "@/components/sections/vision-mission/VisionMissionMain";

const VisionAndMission  = () => {
    return (
        <>
        <PageWrapper>
        <div className="md:hidden block">
          <VisionMissionMobile/>
        </div>
        <div className="hidden md:block">
          {/* <VisionMission/> */}
          <VisionMissionMain/>
        </div>
        </PageWrapper>
        </>
    );
  };

export const metadata = {
  title: "Vision & Mission - Our Educational Philosophy | Agasthya Vidyanikethan School",
  description: "Discover Agasthya Vidyanikethan's vision and mission for excellence in education. Learn about our commitment to holistic development and academic achievement.",
  alternates: {
    canonical: "https://www.av.school/about-us/vision-mission"
  }
};

export default VisionAndMission ;