import Dinacharya, { SectionData } from "@/components/sections/dinacharya/dinacharya";

export default function DinacharyaPage() {
  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-8" data-aos="fade-up">
           <h1 className="text-avorange font-bold text-3xl md:text-5xl md:pb-2 text-center font-samarkan">AGASTHYA VIDYANIKETHAN</h1>
           <h2 className="text-av text-2xl md:text-4xl font-bold text-center">Dinacharya</h2>
           <div className="w-200 h-1 bg-avorange mt-2 mx-auto"></div>
        </header>
      {SectionData.map((section, index) => (
        <Dinacharya key={index} {...section} />
      ))}
    </div>
  );
}
