"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Help.png";
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            He<span className="text-[#FF5722]">lp</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">Quick Support for Every Parent</h2>
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              No need to feel stuck or confused. The Help section offers step-by-step guides, troubleshooting instructions, and easy explanations for the most common questions—such as how to reset your password, how to navigate subjects, or how to read performance summaries.
            </p>
            <p className="mb-0">If your issue isn’t solved through the FAQs, you can instantly reach the school’s technical support or admin team from this section. The goal is to make the Learning Management System feel like a helping hand, not a technical hurdle.</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
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