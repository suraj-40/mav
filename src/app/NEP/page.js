import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import About12 from "@/components/sections/abouts/About12";

export const metadata = {
    title: "ATOMS | Agasthya Vidhyanikethan",
    description: "ATOMS | Agasthya Vidhyanikethan",
    icon: "icon2.ico"
  };

  const nep=async () => {
    return (
        <PageWrapper>
            <main>
                <About12/>
            </main>
        </PageWrapper>
    );
  };

  export default nep;