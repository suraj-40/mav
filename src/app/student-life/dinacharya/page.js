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
  alternates: {
    canonical: "https://www.av.school/student-life/dinacharya"
  }
};

export default NEPDinacharya ;