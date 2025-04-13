import CallToAction from "@/components/CallToAction";
import About1 from "@/components/sections/abouts/About1";
import NewAbout from "@/components/sections/abouts/NewAbout";
import Blogs from "@/components/sections/blogs/Blogs";
import HomeBlog from "@/components/sections/blogs/HomeBlog";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import Hero9 from "@/components/sections/hero-banners/Hero9";
import Instructors from "@/components/sections/instructors/Instructors";
import Instructors2 from "@/components/sections/instructors/Instructors2";
import Overview from "@/components/sections/overviews/Overview";
import OverviewHome from "@/components/sections/overviews/OverviewHome";
import PopularSubjects from "@/components/sections/popular-subjects/PopularSubjects";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Programs from "@/components/sections/programs/Programs";
import Registration from "@/components/sections/registrations/Registration";
import ImageGallery from "@/components/sections/sub-section/ImageGallery";

const Home9 = () => {
  return (
    <>
      <Hero9 />
      {/* <About1 /> */}
      <NewAbout />
      {/* <Programs /> */}
      {/* <PopularSubjects /> */}
      <OverviewHome/>
      {/* <FeatureCourses title="Our online courses" course="2" /> */}
      <Registration />
      <ImageGallery />
      {/* <Blogs /> */}
      <HomeBlog/>
      <CallToAction/>
      {/* <PricingPlans /> */}
      {/* <Instructors2 /> */}
      {/* <Instructors /> */}
    </>
  );
};

export default Home9;
