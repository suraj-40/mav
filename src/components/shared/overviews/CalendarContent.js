"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Calendar.png";
import useIsTrue from "@/hooks/useIsTrue";
import { useState } from "react";

const CalendarContent = () => {
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
            Calen<span className="text-[#FF5722]">dar</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">A Smart View of School Life</h2>
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              Our <span className="font-semibold text-[#FF5722]">AV’s ATOMS Calendar</span> feature is more than just a schedule; it’s a real-time academic planning tool, tailored to your child’s class level. It stays in sync with all school events and milestones, making it easier for students and parents to stay on track.
            </p>
            <CalendarAccordion />
            <p className="mb-2 mt-2">Each calendar entry includes brief descriptions, relevant documents (if any), and links to related dashboard sections like Assignments or Exams. The calendar auto-updates in response to changes made by school administrators, eliminating the risk of outdated information.</p>
            <p className="mb-0">For busy families, this tool becomes a reliable academic reference that supports planning, punctuality, and preparation—all within the Learning Management System.</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="Calendar Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarContent;

// Modern compact accordion for calendar features
function CalendarAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <button
        className={`w-full flex justify-between items-center px-4 py-2 text-left font-medium text-[#FF5722] bg-white/60 rounded-md border border-orange-100 hover:bg-orange-50 focus:outline-none transition-colors ${open ? "bg-orange-50" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>See What’s Included in Your Calendar</span>
        <span className={`ml-2 transition-transform ${open ? "rotate-90" : "rotate-0"}`}>▶</span>
      </button>
      {open && (
        <ul className="list-disc pl-8 py-2 text-gray-700 text-sm animate-fade-in">
          <li>Examination dates</li>
          <li>Assignment due dates</li>
          <li>Special event days</li>
          <li>Holidays and breaks</li>
          <li>Online class schedules (if applicable)</li>
          <li>Parent-teacher meeting slots</li>
        </ul>
      )}
    </div>
  );
}