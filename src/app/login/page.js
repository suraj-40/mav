import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login/Register | Agasthya Vidyanikethan School",
  description: "Access your Agasthya Vidyanikethan School account. Login or register to access student portal, course materials, assignments, and school resources.",
  alternates: {
    canonical: "https://www.av.school/login"
  }
};
const Login = () => {
  return (
    <PageWrapper>
      <main>
        <LoginMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Login;
