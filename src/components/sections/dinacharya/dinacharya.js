import React from "react";
import Image from "next/image";
import dinacharyaimg1 from "@/assets/images/dinacharya/Asset 10.png";
import dinacharyaimg2 from "@/assets/images/dinacharya/Asset 11.png";
import dinacharyaimg3 from "@/assets/images/dinacharya/Asset 12.png";
import dinacharyaimg4 from "@/assets/images/dinacharya/Asset 13.png";

const Dinacharya = ({ image, alt, timelineData, imagePosition = "left" }) => {
  return (
    <div className="  p-6 mb-6 relative rounded-xl shadow-xl" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center" data-aos="fade-up">
        {imagePosition === "left" && (
          <div  className="md:col-span-1  relative group rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image src={image} alt={alt} className="rounded-xl w-[350px] h-[180px] object-cover mx-auto   transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}

        <div className="md:col-span-2 text-center font-bold">
          <div className="timeline-container flex flex-col justify-center items-around">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center justify-around mb-8">
                {item.map((block, i) => (
                  <div key={i}>
                    <div className="text-sm text-avorange font-bold">{block.time}</div>
                    <div className={`md:w-[200px] w-[150px] p-2 text-white rounded-xl ${block.bgClass}`}>{block.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {imagePosition === "right" && (
          <div className="md:col-span-1 relative group rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image src={image} alt={alt}  className="rounded-xl w-[350px] h-[180px] object-cover mx-auto transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export const SectionData = [
  {
    image: dinacharyaimg1,
    alt: "Students in assembly",
    imagePosition: "left",
    timelineData: [
      [
        { time: "8:40 AM to 9:00 AM", label: "GURU VANDANA", bgClass: "bg-avorange" },
        { time: "9:00 AM to 9:40 AM", label: "PERIOD 1", bgClass: "bg-av" },
      ],
      [
        { time: "9:40 AM to 10:20 AM", label: "PERIOD 2", bgClass: "bg-av" },
        { time: "10:20 AM to 10:40 AM", label: "SHORT BREAK", bgClass: "bg-avorange" },
      ]
    ]
  },
  {
    image: dinacharyaimg2,
    alt: "Students during lunch",
    imagePosition: "right",
    timelineData: [
      [
        { time: "10:40 AM to 11:20 AM", label: "PERIOD 3", bgClass: "bg-av" },
        { time: "11:20 AM to 12:00 PM", label: "PERIOD 4", bgClass: "bg-av" },
      ],
      [
        { time: "12:00 PM to 12:40 PM", label: "PERIOD 5", bgClass: "bg-av" },
        { time: "12:40 to 1:05 PM", label: "LUNCH BREAK", bgClass: "bg-avorange" },
      ]
    ]
  },
  {
    image: dinacharyaimg3,
    alt: "Students in classroom",
    imagePosition: "left",
    timelineData: [
      [
        { time: "1:05 PM to 1:45 PM", label: "PERIOD 6", bgClass: "bg-av" },
        { time: "1:45 PM to 2:25 PM", label: "PERIOD 7", bgClass: "bg-av" },
      ],
      [
        { time: "2:25 PM to 3:05 PM", label: "PERIOD 8", bgClass: "bg-av" },
        { time: "3:05 PM to 3:15 PM", label: "DIARY TIME", bgClass: "bg-av" },
      ]      
    ]
  },
  {
    image: dinacharyaimg4,
    alt: "Students in classroom",
    imagePosition: "right",
    timelineData: [
      [
          { time: "3:15 PM", label: "EXIT TIME", bgClass: "bg-avorange" }
      ]
    ]
  }
];

export default Dinacharya;

