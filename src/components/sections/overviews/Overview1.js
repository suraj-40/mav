"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);

  const tabButtons = [
    {
      name: "Dashboard",
      content: <DashboardContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path>
        </svg>
      )
    },
    {
      name: "Announcements",
      content: <AnnouncementContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          ></path>
        </svg>
      )
    },
    {
      name: "My Courses",
      content: <MyCourseContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      )
    },
    {
      name: "Calendar",
      content: <CalendarContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      )
    },
    {
      name: "Exams",
      content: <ExamsContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      )
    },
    {
      name: "Profile",
      content: <ProfileContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      )
    },
    {
      name: "Settings",
      content: <SettingsContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      )
    },
    {
      name: "Help",
      content: <HelpContent />,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      )
    }
  ];

  // Detect mobile on client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update underline position for desktop
  useEffect(() => {
    if (!isMobile) {
      const tab = tabRefs.current[currentIdx];
      const underline = document.querySelector(".tab-underline");
      if (tab && underline) {
        underline.style.left = `${tab.offsetLeft}px`;
        underline.style.width = `${tab.offsetWidth}px`;
      }
    }
  }, [currentIdx, isMobile]);

  // Animation control
  useEffect(() => {
    const timer = setTimeout(() => {
      setTabsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className=" relative overflow-hidden">
      {/* Background decoration
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full opacity-30 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/2"></div> */}

      <div
        className={`mx-auto px-4 ${
          isHome9 || isHome9Dark
            ? "pt-10 md:pt-14"
            : isAbout || isAboutDark
            ? "pb-5 md:pb-10 lg:pb-12"
            : "py-8 md:py-20"
        }`}
      >
        {/* Heading with animated entry and visual effects */}
        {!isAbout && !isAboutDark && (
          <motion.div
            className=" mb-10 text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            {/* Text content with staggered animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h1
                className="text-3xl md:text-7xl font-bold  tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
                  AV-ATOMS
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The modern learning platform for the atomic age of education
              </motion.p>

              <motion.div
                className="flex justify-center mt-4 sm:mt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <svg
                  className="w-[120px] h-[20px] sm:w-[180px] sm:h-[30px]" // Adjust size for mobile and larger screens
                  viewBox="0 0 180 30"
                >
                  <defs>
                    <linearGradient
                      id="headingUnderline"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#FF5722"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5,20 Q90,5 175,20"
                    fill="none"
                    stroke="url(#headingUnderline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      dur="6s"
                      repeatCount="indefinite"
                      values="M5,20 Q90,5 175,20; M5,15 Q90,25 175,15; M5,20 Q90,5 175,20"
                      calcMode="spline"
                      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    />
                  </path>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Tabs with Animation (Hidden on Mobile) */}
        <motion.div
          className="hidden md:block max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: tabsVisible ? 1 : 0,
            y: tabsVisible ? 0 : 20
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div
            className="relative bg-gray-50 rounded-xl p-2 shadow-md"
            data-aos="fade-up"
          >
            <div
              className="flex justify-between gap-2 whitespace-nowrap"
              data-aos="fade-up"
            >
              {tabButtons.map(({ name, icon }, idx) => (
                <div
                  key={name}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  className="shrink-0"
                >
                  <button
                    onClick={() => handleTabClick(idx)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                      currentIdx === idx
                        ? "text-white bg-[#FF5722] shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={
                        currentIdx === idx ? "text-white" : "text-[#FF5722]"
                      }
                    >
                      {icon}
                    </span>
                    {name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mt-8">
          {/* Mobile Carousel with Swipe (Visible on Mobile) */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-gray-100 shadow-lg p-4"
              >
                {/* Tab title for mobile */}
                <div className="mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="text-[#FF5722]">
                    {tabButtons[currentIdx].icon}
                  </span>
                  <h3 className="font-semibold text-lg">
                    {tabButtons[currentIdx].name}
                  </h3>
                </div>
                {tabButtons[currentIdx].content}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons */}
            <div className="flex justify-between mt-6 mb-2">
              <button
                onClick={() =>
                  handleTabClick(
                    currentIdx > 0 ? currentIdx - 1 : tabButtons.length - 1
                  )
                }
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#FF5722] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() =>
                  handleTabClick((currentIdx + 1) % tabButtons.length)
                }
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#FF5722] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {tabButtons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIdx === idx ? "bg-[#FF5722] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Tab Content with Animation */}
          <div className="hidden md:block" data-aos="fade-up">
            {tabButtons.map(({ content }, idx) => (
              <TabContentWrapper
                key={idx}
                idx={idx}
                isShow={idx === currentIdx}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-100 shadow-lg p-6"
                >
                  {content}
                </motion.div>
              </TabContentWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* {!isAbout && !isAboutDark && <Counter2 />} */}
    </section>
  );
};

export default Overview;
