import PageWrapper from "@/components/shared/wrappers/PageWrapper"
import CulturalActivitiesMain from"@/components/sections/cultural-activities/CulturalActivitiesMain"
import CulturalActivitiesMainUllal from "@/components/sections/cultural-activities/CulturalActivitiesMainUllal";


const NEPCulturalActivities  = () => {
    return (
        <>
        <PageWrapper>
        <CulturalActivitiesMainUllal/>
        
        </PageWrapper>
        </>
    );
  };

export const metadata = {
  alternates: {
    canonical: "https://www.av.school/student-life/cultural-activities/ullal",
  },
};

export default NEPCulturalActivities ;