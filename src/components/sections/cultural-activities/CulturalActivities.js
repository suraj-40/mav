import React from "react";
import Image from "next/image";
import img1 from "@/assets/images/cultural/01. Ramayanotsavam.png";
import img2 from "@/assets/images/cultural/02. Gita Jayanti.png";
import img3 from "@/assets/images/cultural/03. Guru Charana Pooja.png";
import img4 from "@/assets/images/cultural/04. Baala-kauthukam.png";
import img5 from "@/assets/images/cultural/05. Jnanatarang.png";
import img6 from "@/assets/images/cultural/06. Market Day.png";
import img7 from "@/assets/images/cultural/07. Bhashaavali.png";
import img8 from "@/assets/images/cultural/8. Montessori Observation.png";
import img9 from "@/assets/images/cultural/09. Guru Poornima.png";
import img10 from "@/assets/images/cultural/10. Ganeshostova.png";
import img11 from "@/assets/images/cultural/11. Yoga Day.png";
import img12 from "@/assets/images/cultural/12. Independence Day.png";
import img13 from "@/assets/images/cultural/13. Karnataka Rajyothsava.png";
import img14 from "@/assets/images/cultural/14. Investiture Ceremony.png";
import img15 from "@/assets/images/cultural/15. Deepothsavam.png";
import img16 from "@/assets/images/cultural/16. Environment Day.png";


const activities = [
    {
      id: 1,
      title: 'Ramayanotsavam',
      image: img1,
    },
    {
      id: 2,
      title: 'Gita Jayanti',
      image: img2,
    },
    {
      id: 3,
      title: 'Guru Charana Pooja',
      image: img3,
    },
    {
      id: 4,
      title: 'Baala kauthukam',
      image: img4,
    },
    {
      id: 5,
      title: 'Jnanatarang',
      image: img5,
    },
    {
      id: 6,
      title: 'Market Day',
      image: img6,
    },
    {
      id: 7,
      title: 'Bhashaavali',
      image: img7,
    },
    {
      id: 8,
      title: 'Montessori Observation',
      image: img8,
    },
    {
      id: 9,
      title: 'Guru Poornima',
      image: img9,
    },
    {
      id: 10,
      title: 'Ganeshostova',
      image: img10,
    },
    {
      id: 11,
      title: 'Yoga Day',
      image: img11,
    },
    {
      id: 12,
      title: 'Independence Day',
      image: img12,
    },
    {
      id: 13,
      title: 'Karnataka Rajyothsava',
      image: img13,
    },
    {
      id: 14,
      title: 'Investiture Ceremony',
      image: img14,
    },
    {
      id: 15,
      title: 'Deepothsavam',
      image: img15,
    },
    {
      id: 16,
      title: 'Environment Day',
      image: img16,
    },

  ];

const CulturalActivityCard = ({ id, title, image }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
    <Image
      src={image}
      alt={title}
      className="object-cover w-full h-40 md:h-80 transform group-hover:scale-105 transition-transform duration-300"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300" />
    {/* Number and Title */}
    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white z-10">
      <div className="text-sm md:text-xl bg-white text-av px-2 py-1 rounded-full font-bold md:mb-2 shadow">
        {/* {String(id).padStart(2, ' ')}.  */}
        {title}
      </div>
      
    </div>
  </div>
);

const CulturalActivity = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12  md:mx-24">
      <header data-aos="fade-up" className="mb-8">
          <h1 className="text-avorange font-bold text-3xl text-center">AGASTHYA VIDYANIKETHAN</h1>
          <h2 className="text-av text-5xl font-bold text-center">Regular Cultural Activities</h2>
          <div className="w-200 h-2 bg-avorange mt-2 mx-auto"></div>
      </header>

      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <CulturalActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default CulturalActivity;



