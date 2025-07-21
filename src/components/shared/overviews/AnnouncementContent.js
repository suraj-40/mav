"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Announcement.png";
import useIsTrue from "@/hooks/useIsTrue";

const AnnouncementContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  return (
    <div className="py-10 relative">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
        {/* Left side text */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Announce<span className="text-[#FF5722]">ments</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">School Updates in Real Time</h2>
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
          <div className="mt-4 text-sm md:text-base text-gray-700 bg-orange-50/60 rounded-md px-3 pr-6 py-2 border-l-2 border-[#FF5722] max-w-xl text-justify">
            <p className="mb-2">
              The Announcements feature in the <span className="font-semibold text-[#FF5722]">AV ATOMS Learning Management System</span> acts as your school&apos;s official notice board, designed for digital convenience. Instead of relying on paper circulars or scattered messages across multiple apps, parents now receive real-time, organized updates straight from the school dashboard.
            </p>
            <p className="mb-2">Whether it&apos;s a holiday notice, exam schedule change, PTM reminder, or competition announcement, every message is:</p>
            <ul className="list-disc pl-5 mb-2 space-y-0.5">
              <li><span className="font-medium">Timestamped</span> for clarity</li>
              <li><span className="font-medium">Categorized</span> for easier access (exams, events, academics, administration)</li>
              <li><span className="font-medium">Delivered instantly</span> to your phone or desktop via smart notifications</li>
            </ul>
            <p className="mt-2">This level of transparency improves communication and strengthens parent-school alignment. As a parent, you no longer need to ask, <span className="italic">“Did I miss something?”</span> because our AV&apos;s Atoms dashboard ensures you&apos;re always informed and prepared.</p>
          </div>
          {/* Curved line below the paragraph */}
          
        </div>

        {/* Right side image */}
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="LMS dashboard for parents"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementContent;