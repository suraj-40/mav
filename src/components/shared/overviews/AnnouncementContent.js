"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Announcement.png";
import overviewKidImage from "@/assets/images/about/AV-1.png";
import useIsTrue from "@/hooks/useIsTrue";

const AnnouncementContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  return (
    <div className="py-10 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side text */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Announce<span className="text-[#FF5722]">ments</span>
          </h1>
          <div className="">
            <svg
              width={160}
              height={20}
              viewBox="0 0 160 20"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto lg:mx-0"
            >
              <path
                d="M5,15 Q80,0 155,15"
                fill="none"
                stroke="#FF5722"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-6 text-md md:text-lg text-justify text-gray-600 leading-relaxed">
          Never miss a beat with the ATOMS Announcements section. From holiday notices and exam alerts to competition updates and new activity launches, every school communication reaches you instantly. Now, you can monitor your child&apos;s performance over time and spot areas where they may need a little extra help, all from the comfort of your home. As a parent, this means you&apos;re always informed and can prepare your child well in advance. It&apos;s your school&apos;s news board, modernized, simplified, and made for today&apos;s busy families.  
          </p>
          {/* Curved line below the paragraph */}
          
        </div>

        {/* Right side image */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
            alt="Announcement Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementContent;