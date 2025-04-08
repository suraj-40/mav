import Home1 from "@/components/layout/main/Home1";
import Home9 from "@/components/layout/main/Home9";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Home9 />
        <ThemeController />
      </main>
    </PageWrapper>
  );
}
