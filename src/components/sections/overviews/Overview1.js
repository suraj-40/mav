// Overview.js
"use client";

import TabButtonSecondary from "@/components/shared/buttons/TabButtonSecondary";
import DashboardContent from "@/components/shared/overviews/DashboardContent";
import AnnouncementContent from "@/components/shared/overviews/AnnouncementContent";
import MyCourseContent from "@/components/shared/overviews/MyCourseContent";
import CalendarContent from "@/components/shared/overviews/CalendarContent";
import ExamsContent from "@/components/shared/overviews/ExamsContent";
import ProfileContent from "@/components/shared/overviews/ProfileContent";
import SettingsContent from "@/components/shared/overviews/SettingsContent";
import HelpContent from "@/components/shared/overviews/HelpContent";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import useTab from "@/hooks/useTab";
import React from "react";
import Counter2 from "../sub-section/Counter2";
import useIsTrue from "@/hooks/useIsTrue";

const Overview = () => {
  const { currentIdx, handleTabClick } = useTab();
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  const tabButtons = [
    { name: "Dashboard", content: <DashboardContent /> },
    { name: "Announcements", content: <AnnouncementContent /> },
    { name: "My Courses", content: <MyCourseContent /> },
    { name: "Calendar", content: <CalendarContent /> },
    { name: "Exams", content: <ExamsContent /> },
    { name: "Profile", content: <ProfileContent /> },
    { name: "Settings", content: <SettingsContent /> },
    { name: "Help", content: <HelpContent /> },
  ];

  return (
    <section className="bg-white">
      <div
        className={` mx-auto px-4 ${
          isHome9 || isHome9Dark
            ? "pt-20 md:pt-24"
            : isAbout || isAboutDark
            ? "pb-5 md:pb-10 lg:pb-12"
            : "py-8 md:py-12"
        }`}
      >
        {/* ATOMS Heading with Curved Line */}
        {isAbout || isAboutDark ? null : (
         <div className="mt-16 mb-12 md:mt-16 md:mb-16 text-center" data-aos="fade-up">
         <h1 className="text-2xl md:text-6xl font-bold mb-4">ATOMS</h1>
         <div className="flex justify-center">
           <svg width={160} height={20} viewBox="0 0 160 20">
             <path
               d="M5,15 Q80,0 155,15"
               fill="none"
               stroke="#FF5722"
               strokeWidth="4"
               strokeLinecap="round"
             />
           </svg>
         </div>
       </div>
        )}

        {/* Tab Navigation */}
        <div data-aos="fade-up" className="tab w-full">
          <div className="flex flex-wrap md:flex-nowrap justify-between border-b relative gap-2">
            {tabButtons.map(({ name }, idx) => (
              <TabButtonSecondary
                key={idx}
                name={name}
                idx={idx}
                currentIdx={currentIdx}
                handleTabClick={handleTabClick}
                className="relative group"
              />
            ))}
          </div>

          {/* Active Tab Indicator */}
          <div className="relative">
            <div
              className="absolute h-[2px] md:h-[3px] bg-[#FF5722] transition-all duration-500 ease-in-out"
              style={{
                left: `${(100 / tabButtons.length) * currentIdx}%`,
                width: `${100 / tabButtons.length}%`,
                top: "-2px",
              }}
            />
          </div>

          {/* Tab Content */}
          <div className="mt-6 md:mt-8">
            {tabButtons.map(({ content }, idx) => (
              <TabContentWrapper
                key={idx}
                idx={idx}
                isShow={idx === currentIdx || false}
              >
                <div
                  className=""
                  style={{ transition: "opacity 300ms ease-in-out" }}
                >
                  {content}
                </div>
              </TabContentWrapper>
            ))}
          </div>
        </div>
      </div>

      {isAbout || isAboutDark ? null : <Counter2 />}
    </section>
  );
};

export default Overview;