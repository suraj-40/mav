const page = ()=>{
    return(
        <div className="h-screen w-full">
      <iframe
        src="/policy/tnc.pdf"
        className="w-full h-full"
      />
    </div>
    )
}

export default page;

export const metadata = {
  title: "Terms & Conditions | Agasthya Vidyanikethan School",
  description: "Read Agasthya Vidyanikethan's terms and conditions. Understand our school policies, rules, guidelines, and expectations for students, parents, and visitors.",
  alternates: {
    canonical: "https://www.av.school/policy/tnc"
  }
};