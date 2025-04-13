"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
import Counter2 from "../sub-section/Counter2";
import useIsTrue from "@/hooks/useIsTrue";

const Overview = () => {
  const { currentIdx, handleTabClick } = useTab();
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  const tabRefs = useRef([]);

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

  // Update underline position
  useEffect(() => {
    const tab = tabRefs.current[currentIdx];
    const underline = document.querySelector(".tab-underline");
    if (tab && underline) {
      underline.style.left = `${tab.offsetLeft}px`;
      underline.style.width = `${tab.offsetWidth}px`;
    }
  }, [currentIdx]);

  // Handle resize
  useEffect(() => {
    const updateUnderline = () => {
      const tab = tabRefs.current[currentIdx];
      const underline = document.querySelector(".tab-underline");
      if (tab && underline) {
        underline.style.left = `${tab.offsetLeft}px`;
        underline.style.width = `${tab.offsetWidth}px`;
      }
    };
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [currentIdx]);

  return (
    <section className="bg-white">
      <div
        className={`mx-auto px-4 ${
          isHome9 || isHome9Dark
            ? "pt-20 md:pt-24"
            : isAbout || isAboutDark
            ? "pb-5 md:pb-10 lg:pb-12"
            : "py-8 md:py-12"
        }`}
      >
        {/* Heading */}
        {!isAbout && !isAboutDark && (
          <div className="mt-16 mb-12 text-center" data-aos="fade-up">
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

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
          <div className="flex flex-nowrap gap overflow-x-auto whitespace-nowrap scrollbar-hide">

              {tabButtons.map(({ name }, idx) => (
                <div
                  key={name}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  className="shrink-0"
                >
                  <TabButtonSecondary
                    name={name}
                    idx={idx}
                    currentIdx={currentIdx}
                    handleTabClick={handleTabClick}
                    className="inline-flex px-4 py-2 font-medium hover:text-secondaryColor transition whitespace-nowrap"
                  />
                </div>
              ))}
            </div>

            {/* Underline */}
            <div
              className="tab-underline absolute bottom-0 h-[3px] bg-[#FF5722] rounded-full transition-all duration-300 ease-in-out"
              style={{ left: "0px", width: "0px" }}
            />
            <div className="w-full h-px bg-gray-200 "></div>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {tabButtons.map(({ content }, idx) => (
              <TabContentWrapper key={idx} idx={idx} isShow={idx === currentIdx}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                >
                  {content}
                </motion.div>
              </TabContentWrapper>
            ))}
          </div>
        </div>
      </div>

      {!isAbout && !isAboutDark && <Counter2 />}
    </section>
  );
};

export default Overview;
