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
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">All Student Details in One Place</h2>
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              The Profile page is your child’s school identity card in digital form. It stores their name, admission number, grade, section, roll number, and other academic credentials. It also reflects updates related to co-curricular participation, house group allocations, and subject electives.
            </p>
            <p className="mb-0">This section is especially useful during form submissions or while contacting school authorities. Rather than sifting through files, parents can access verified information instantly—accurate, organized, and always updated within the secure Learning Management System.</p>
          </div>
          
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
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