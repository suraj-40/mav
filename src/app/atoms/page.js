import Overview1 from "@/components/sections/overviews/Overview1";
import Registration1 from "@/components/sections/registrations/Registration1";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import atomsNavCard from "@/components/sections/atomsNavCard/atomsNavCard";

export const metadata = {
  title: "ATOMS | Agasthya Vidhyanikethan",
  description: "ATOMS | Agasthya Vidhyanikethan",
  icon: "icon2.ico"
};

const atoms = async () => {
  return (
    <PageWrapper>
      <main>
        <Overview1 />
        <atomsNavCard />
      </main>
    </PageWrapper>
  );
};

export default atoms;
