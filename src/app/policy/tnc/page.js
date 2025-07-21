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
  alternates: {
    canonical: "https://www.av.school/policy/tnc"
  }
};