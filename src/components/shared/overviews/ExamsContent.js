"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Exam.png";
import useIsTrue from "@/hooks/useIsTrue";

const ExamsContent = () => {
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
            Ex<span className="text-[#FF5722]">ams</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">Stay Ahead of the Academic Curve</h2>
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              In the <span className="font-semibold text-[#FF5722]">ATOMS ecosystem</span>, the Exams section is your personalized space for exam preparation and performance tracking. It provides timely access to:
            </p>
            <ul className="list-disc pl-5 mb-2 space-y-0.5">
              <li>Upcoming exam dates, organized by subject and format (written, oral, practical)</li>
              <li>Syllabus outlines for each test</li>
              <li>Revision suggestions and last-minute reminders from teachers</li>
              <li>Post-exam feedback and marks once results are uploaded</li>
            </ul>
            <p className="mb-2">For parents, this is a crucial part of the Learning Management System. It helps track your child’s academic preparedness, manage their revision schedules, and understand subject-wise performance trends over time.</p>
            <p className="mb-0">Instead of relying on secondhand updates or rushed conversations, everything is delivered cleanly and directly. And when results are published, they’re viewable from the same page—no need for separate apps or emails.</p>
          </div>
          
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="Exams Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ExamsContent;