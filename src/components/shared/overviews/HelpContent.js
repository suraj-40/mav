"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Help.png";
import overviewKidImage from "@/assets/images/about/AV-1.png";
import useIsTrue from "@/hooks/useIsTrue";

const HelpContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  return (
    <div className="pt-10 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            He<span className="text-[#FF5722]">lp</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Support at your fingertips—reach out with any queries and receive assistance from our team.
          </p>
          <div className="mt-4">
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
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
            alt="Help Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpContent;