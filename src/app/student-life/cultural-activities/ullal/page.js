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
  title: "Cultural Activities - Ullal Campus | Agasthya Vidyanikethan ",
  description: "Experience vibrant cultural activities at Agasthya Vidyanikethan's Ullal campus. From music and dance to arts and cultural events, discover our rich cultural programs.",
  alternates: {
    canonical: "https://www.av.school/student-life/cultural-activities/ullal"
  }
};

export default NEPCulturalActivities ;