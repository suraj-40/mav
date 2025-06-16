"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Profile.png";
import useIsTrue from "@/hooks/useIsTrue";

const ProfileContent = () => {
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
            Pro<span className="text-[#FF5722]">file</span>
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
          The Profile shows all your child&apos;s school-related information, from name and class to the contact details and admission number. Keep your child&apos;s details updated to make sure you never miss important school communication. It&apos;s simple to view and manage, giving parents an easy way to check and confirm personal records. A well-maintained profile means smoother coordination with your kid&apos;s teachers and the school office.
          </p>
          
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="Profile Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;