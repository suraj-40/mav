"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Calendar.png";
import useIsTrue from "@/hooks/useIsTrue";

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
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Calen<span className="text-[#FF5722]">dar</span>
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
          The ATOMS Calendar offers a bird&apos;s-eye view of all important dates, from exams and school events to special celebrations and parent-teacher meetings. See your child&apos;s schedule for the day, week, or month, all at one glance.
          </p>
          <p className="mt-3 text-md md:text-lg text-gray-600 leading-relaxed">
          No more last-minute rushes or forgotten days!
          </p>
          <p className="mt-3 text-md md:text-lg text-justify text-gray-600 leading-relaxed">
          Mark key dates, set reminders, and help your child stay prepared and confident, every step of the way. It&apos;s your personal school planner, keeping everything in order and easy to follow.
          </p>
        </div>
        <div
          className="w-full lg:w-1/2"
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