"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/Settings.png";
import useIsTrue from "@/hooks/useIsTrue";

const SettingsContent = () => {
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
            Set<span className="text-[#FF5722]">tings</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF5722] mt-2 mb-4">Customize Your ATOMS Experience</h2>
          <div className="mt-6 text-[15px] md:text-base text-gray-700 bg-orange-50/70 rounded-md px-4 pr-8 py-3 border-l-4 border-[#FF5722] max-w-xl shadow-sm text-justify">
            <p className="mb-2">
              The Settings tab puts control into the hands of the parent. Update your contact information, manage login credentials, and set how you want to receive notifications—SMS, email, or in-app alerts.
            </p>
            <p className="mb-0">If more than one guardian uses the dashboard, each can set preferences separately. You can even configure notification types—such as announcements only or everything, including assignments and calendar updates. It’s a fully customizable experience that adapts to how your family stays informed.</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 self-center lg:mt-32"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={overviewImage}
            alt="Settings Image"
            className="w-full shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;