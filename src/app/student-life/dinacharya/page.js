import PageWrapper from "@/components/shared/wrappers/PageWrapper"
import DinacharyaPage from"@/components/sections/dinacharya/DinacharyaPage"

const NEPDinacharya  = () => {
    return (
        <>
        <PageWrapper>
        <DinacharyaPage/>
        </PageWrapper>
        </>
    );
  };

export const metadata = {
  title: "Daily Routine (Dinacharya) | Agasthya Vidyanikethan ",
  description: "Explore the structured daily routine at Agasthya Vidyanikethan. Our dinacharya includes academic schedules, activities, meals, and balanced learning experiences for students.",
  alternates: {
    canonical: "https://www.av.school/student-life/dinacharya"
  }
};

export default NEPDinacharya ;