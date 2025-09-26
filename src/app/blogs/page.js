import BlogsMain from "@/components/layout/main/BlogsMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Blog & News | Agasthya Vidyanikethan ",
  description: "Stay updated with the latest news, educational insights, and school updates from Agasthya Vidyanikethan. Read our blog articles on education, student life, and school activities.",
  alternates: {
    canonical: "https://www.av.school/blogs",
  },
};

const Blogs = async () => {
  return (
    <PageWrapper>
      <main>
        <BlogsMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Blogs;
