import Section, { SectionData } from "@/components/sections/dinacharya/Dinacharya";

export default function DinacharyaPage() {
  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-8">
           <h1 className="text-orange font-bold text-3xl text-center">AGASTHYA VIDYANIKETHAN</h1>
           <h2 className="text-av text-5xl font-bold text-center">Dinacharya</h2>
           <div className="w-200 h-2 bg-orange mt-2 mx-auto"></div>
        </header>
      {SectionData.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
}
