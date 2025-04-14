
import OverviewsWhyAv from "@/components/sections/overviews/OverviewsWhyAv";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";


export const metadata = {
  title: "Why AV | Agasthya Vidhyanikethan",
  description: "Why AV | Agasthya Vidhyanikethan",
  icon: "icon2.ico"
};

const whyAV = async () => {
  return (
    <PageWrapper>
      <main>
        <OverviewsWhyAv/>
      </main>
    </PageWrapper>
  );
};

export default whyAV;