
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
  title: "Life Skills Development | Agasthya Vidyanikethan ",
  description: "Build essential life skills at Agasthya Vidyanikethan. Our comprehensive program focuses on communication, leadership, problem-solving, and character development for future success.",
  alternates: {
    canonical: "https://www.av.school/student-life/life-skills"
  }
};