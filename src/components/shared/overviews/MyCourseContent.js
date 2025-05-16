"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/MyCourses.png";
import overviewKidImage from "@/assets/images/about/AV-1.png";
import useIsTrue from "@/hooks/useIsTrue";

const MyCourseContent = () => {
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
            My <span className="text-[#FF5722]">Subjects</span>
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
          Keep track of all your child&apos;s subjects and lessons in the My Subject section. Here, you&apos;ll find your enrolled academic subjects, assignments, study materials, and progress reports. Whether you&apos;re checking what chapter to study next or seeing which tasks are pending, this is where your learning stays on track. Parents can also view their child&apos;s course status, making it easier to support learning at home. Everything you need for your studies, neatly organized in one spot!
          </p>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
            alt="My Courses Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCourseContent;