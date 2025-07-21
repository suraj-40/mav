
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import LifeSkillsMobile from "@/components/sections/life-skills/LifeSkillsMobile";
import LifeSkillsMain from "@/components/sections/life-skills/LifeSkillsMain";

const NEPLifeSkills = () => {
  return (
    <>
      <PageWrapper>
        <div className="md:hidden block">
          <LifeSkillsMobile />
        </div>
        <div className="hidden md:block">
          <LifeSkillsMain />
        </div>
      </PageWrapper>
    </>
  );
};

export default NEPLifeSkills;

export const metadata = {
  alternates: {
    canonical: "https://www.av.school/student-life/life-skills"
  }
};