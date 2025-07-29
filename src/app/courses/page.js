import CoursesMain from "@/components/layout/main/CoursesMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Courses & Programs | Agasthya Vidyanikethan School",
  description: "Explore our comprehensive range of courses and educational programs designed to provide holistic development and academic excellence at Agasthya Vidyanikethan.",
  alternates: {
    canonical: "https://www.av.school/courses",
  },
};

const Courses = async () => {
  return (
    <PageWrapper>
      <main>
        <CoursesMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Courses;
