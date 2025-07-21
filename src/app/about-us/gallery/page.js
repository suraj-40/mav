import OverviewsWhyAv from "@/components/sections/overviews/OverviewsWhyAv";
import GalleryMain from "@/components/sections/gallery/GalleryMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";


export const metadata = {
  title: "Gallery | Agasthya Vidhyanikethan",
  description: "Gallery | Agasthya Vidhyanikethan",
  icon: "icon2.ico",
  alternates: {
    canonical: "https://www.av.school/about-us/gallery"
  }
};

const gallery = async () => {
  return (
    <PageWrapper>
      <main>
      <GalleryMain/>
      </main>
    </PageWrapper>
  );
};

export default gallery;