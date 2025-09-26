const page = ()=>{
    return(
        <div className="h-screen w-full">
      <iframe
        src="/policy/privacy.pdf"
        className="w-full h-full"
      />
    </div>
    )
}

export default page;

export const metadata = {
  title: "Privacy Policy | Agasthya Vidyanikethan ",
  description: "Learn about Agasthya Vidyanikethan's privacy policy and data protection practices. Understand how we collect, use, and safeguard your personal information and data.",
  alternates: {
    canonical: "https://www.av.school/policy/privacy"
  }
};

