import ContactMain from "@/components/layout/main/ContactMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact | Agasthya Vidyanikethan",
  description: "Contact | Agasthya Vidyanikethan",
};

const Contact = async () => {
  return (
    <PageWrapper>
      <main>
        <ContactMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Contact;
