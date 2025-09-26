import ContactMain from "@/components/layout/main/ContactMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact Us - Get in Touch | Agasthya Vidyanikethan ",
  description: "Contact Agasthya Vidyanikethan  for admissions, inquiries, or general information. Visit our campus in Bangalore or reach us via phone, email, or online form.",
  alternates: {
    canonical: "https://www.av.school/contact",
  },
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
