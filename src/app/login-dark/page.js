import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login/Register - Dark Theme | Agasthya Vidyanikethan School",
  description: "Access your Agasthya Vidyanikethan School account with dark theme interface. Login or register to access student portal, course materials, and school resources.",
  alternates: {
    canonical: "https://www.av.school/login-dark"
  }
};
const Login_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <LoginMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Login_Dark;
