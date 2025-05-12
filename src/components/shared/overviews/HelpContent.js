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
    <div className="py-10 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            He<span className="text-[#FF5722]">lp</span>
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
          <p className="mt-6 text-md md:text-lg text-gray-600 leading-relaxed">
          Need a hand?
          </p>
          <p className="mt-3 text-md md:text-lg text-gray-600 leading-relaxed">
            The Help section is a go-to place whenever you have a question or face a problem while using the ATOMS portal. Whether it&apos;s about logging in, forgetting the password, checking courses, or finding exam details, our support team is just a click away. As a parent, you can rely on quick, friendly assistance to keep your ATOMS experience smooth, simple, and worry-free          
          </p>          
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