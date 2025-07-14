"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/MyCourses.png";
import useIsTrue from "@/hooks/useIsTrue";
import { useState } from "react";

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
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">Track Academic Progress by Subject</h2>
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
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              The My Subjects section of <span className="font-semibold text-[#FF5722]">AV’s ATOMS Learning Management System</span> opens up a structured view into your child’s academic journey, one subject at a time. At Agasthya Vidyanikethan, this feature is more than just a content list—it’s a complete learning portal built to make learning consistent, enjoyable, and measurable.
            </p>
            <p className="mb-2">Each subject block is tailored to the student’s current class level and includes access to:</p>
            <Accordion />
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="school learning portal interface"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCourseContent;

// Modern compact accordion for features
function Accordion() {
  const [open, setOpen] = useState(null);
  const items = [
    {
      title: "Edutainment Videos",
      content:
        "Interactive educational videos that combine fun and focus, using simple visuals and real-life examples for better understanding and memory.",
    },
    {
      title: "E-books and Reading Materials",
      content:
        "Downloadable and view-only digital books for each subject, so parents can preview and help children revise without physical textbooks.",
    },
    {
      title: "Practice Questions",
      content: (
        <ul className="list-disc pl-5 space-y-0.5">
          <li>True or False to test quick clarity</li>
          <li>Multiple Choice Questions (MCQs) to improve exam-style thinking</li>
          <li>Fill in the Blanks to sharpen attention and contextual understanding</li>
        </ul>
      ),
    },
  ];
  return (
    <div className="divide-y divide-orange-200 bg-white/60 rounded-md border border-orange-100 mt-2">
      {items.map((item, idx) => (
        <div key={item.title}>
          <button
            className={`w-full flex justify-between items-center px-4 py-2 text-left font-medium text-[#FF5722] hover:bg-orange-50 focus:outline-none transition-colors ${open === idx ? "bg-orange-50" : ""}`}
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span>{item.title}</span>
            <span className={`ml-2 transition-transform ${open === idx ? "rotate-90" : "rotate-0"}`}>▶</span>
          </button>
          {open === idx && (
            <div className="px-4 pb-3 text-gray-700 text-sm animate-fade-in">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}