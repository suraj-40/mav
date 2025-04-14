import PageWrapper from "@/components/shared/wrappers/PageWrapper"
import VisionMission from"@/components/sections/vision-mission/VisionMission"
import VisionMissionMobile from"@/components/sections/vision-mission/VisionMissionMobile"

const VisionAndMission  = () => {
    return (
        <>
        <PageWrapper>
        <div className="md:hidden block">
          <VisionMissionMobile/>
        </div>
        <div className="hidden md:block">
          <VisionMission/>
        </div>
        </PageWrapper>
        </>
    );
  };
  export default VisionAndMission ;