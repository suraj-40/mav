import React from "react";
import Image from "next/image";
import img11 from "@/assets/images/life-skills/01. Yoga Siddhi/1.png";
import img12 from "@/assets/images/life-skills/01. Yoga Siddhi/2.png";
import img21 from "@/assets/images/life-skills/02. Kalaripayattu/1.png";
import img22 from "@/assets/images/life-skills/02. Kalaripayattu/2.png";
import img31 from "@/assets/images/life-skills/03. Chaduranga Siddhi/1.png";
import img32 from "@/assets/images/life-skills/03. Chaduranga Siddhi/2.png";
import img41 from "@/assets/images/life-skills/04. Samskrita Siddhi/1.png";
import img42 from "@/assets/images/life-skills/04. Samskrita Siddhi/2.png";
import img51 from "@/assets/images/life-skills/05. Naatya Siddhi/1.png";
import img52 from "@/assets/images/life-skills/05. Naatya Siddhi/2.png";
import img61 from "@/assets/images/life-skills/06. Sangeeta Siddhi/1.png";
import img62 from "@/assets/images/life-skills/06. Sangeeta Siddhi/2.png";

const activities = [
    {
      id: 1,
      title: 'YOGA SIDDHI',
      description: 'Enhance overall wellness with comprehensive Yoga Siddhi.',
      image1: img11,
      image2: img12,
    },
    {
      id: 2,
      title: 'Kalaripayattu',
      description: 'Empower discipline, self defence, & physical strength through ancient Martial-arts.',
      image1: img21,
      image2: img22,
    },
    {
        id: 3,
        title: 'Chaduranga Siddhi',
        description: 'Build substantive cognitive prowess through Chaduranga Siddhi.',
        image1: img31,
        image2: img32,
    },
    {
        id: 4,
        title: 'Samskrita Siddhi',
        description: 'Embrace heritage language learning and the most appropriate language for Artificial Intelligence with Samskrita Siddhi.',
        image1: img41,
        image2: img42,
    },
    {
        id: 5,
        title: 'Naatya Siddhi',
        description: 'Perform with passion in Naatya Siddhi.',
        image1: img51,
        image2: img52,
    },
    {
        id: 6,
        title: 'Sangeeta Siddhi',
        description: 'Play Your way to Perfection with Sangeeta siddhi.',
        image1: img61,
        image2: img62,
    },
  ];

const LifeSkillsCard = ({ id, title, image1,image2,description }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up">
    <Image
      src={image1}
      alt={title}
      className="object-cover w-full h-30 md:h-[200px] transform group-hover:scale-105 transition-transform duration-300"
    />
    <Image
      src={image2}
      alt={title}
      className="object-cover w-full h-30 md:h-[200px] transform group-hover:scale-105 transition-transform duration-300"
    />
   

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300" />
    {/* Number and Title */}
    <div className="absolute left-2 md:left-4 bottom-4 text-white z-10 w-[calc(100%-1rem)] md:w-[calc(100%-1.5rem)]">
  {/* Hover group for title + description */}
  <div className="relative transition-all duration-300 group-hover:-translate-y-14">
    {/* Title (always visible, stays in same initial position) */}
    <span className="text-sm md:text-xl bg-white text-av px-2 py-1 rounded-full font-bold shadow inline-block">
      {title}
    </span>

    {/* Description (appears on hover, takes no space before that) */}
    <div className="absolute left-0 mt-2 w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-xs md:text-lg">
      {description}
    </div>
  </div>
</div>

  </div>
);

const LifeSkills = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12  md:mx-24">
      <header data-aos="fade-up" className="mb-8">
          <h1 className="text-avorange font-bold text-3xl md:text-5xl md:pb-2 text-center"  style={{fontFamily: 'Samarkan, cursive',}}>AGASTHYA VIDYANIKETHAN</h1>
          <h2 className="text-av text-2xl md:text-4xl font-bold text-center">SIX MANDATORY LIFE SKILLS</h2>
          <div className="w-200 h-1 bg-avorange mt-2 mx-auto"></div>
      </header>
      
      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <LifeSkillsCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default LifeSkills;
