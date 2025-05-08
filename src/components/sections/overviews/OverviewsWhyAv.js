"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButtonSecondary from "@/components/shared/buttons/TabButtonSecondary";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import useTab from "@/hooks/useTab";
import useIsTrue from "@/hooks/useIsTrue";
import QualityEducationContent from "@/components/shared/overviews/whyAvContents/QualityEducationContent";
import FuturisticApproachContent from "@/components/shared/overviews/whyAvContents/FuturisticApproachContent";
import EcosystemContent from "@/components/shared/overviews/whyAvContents/EcosystemContent";
import OurMissionContent from "@/components/shared/overviews/whyAvContents/OurMissionContent";
import { GraduationCap, Rocket, Globe, Heart } from "lucide-react";

const OverviewsWhyAv = () => {
  const { currentIdx, handleTabClick } = useTab();
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");
  const tabRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);

  const tabButtons = [
    {
      name: "Quality of Education",
      content: <QualityEducationContent />,
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      name: "Futuristic Approach",
      content: <FuturisticApproachContent />,
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      name: "Ecosystem",
      content: <EcosystemContent />,
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Our Mission",
      content: <OurMissionContent />,
      icon: <Heart className="w-5 h-5" />,
    },
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

  // Animation control for tabs visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setTabsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-50 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        {/* Heading */}
        {!isAbout && !isAboutDark && (
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 opacity-50 blur-3xl -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ transform: "translate(-50%, -50%)" }}
            />
            <motion.h1
          className="text-3xl md:text-7xl font-bold  tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
           Why Agasthya Vidyanikethan?
          </span>
        </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover the unique advantages that make our institution the preferred choice for holistic education and future-ready learning.
            </motion.p>
            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <svg width={200} height={30} viewBox="0 0 200 30">
                <defs>
                  <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF5722" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF5722" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M5,20 Q100,0 195,20"
                  fill="none"
                  stroke="url(#underlineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values="M5,20 Q100,0 195,20; M5,15 Q100,25 195,15; M5,20 Q100,0 195,20"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                  />
                </path>
              </svg>
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Tabs (Hidden on Mobile) */}
        <motion.div
          className="hidden md:block max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: tabsVisible ? 1 : 0, y: tabsVisible ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-gray-100">
            <div className="flex justify-between gap-2 overflow-x-auto scrollbar-hide">
              {tabButtons.map(({ name, icon }, idx) => (
                <div key={name} ref={(el) => (tabRefs.current[idx] = el)} className="shrink-0">
                  <button
                    onClick={() => handleTabClick(idx)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                      currentIdx === idx
                        ? "text-white bg-gradient-to-r from-[#FF5722] to-orange-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#FF5722]"
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        currentIdx === idx ? "text-white" : "text-[#FF5722]"
                      }`}
                    >
                      {icon}
                    </span>
                    {name}
                  </button>
                </div>
              ))}
            </div>
            <div
              className=" absolute   bg-gradient-to-r from-[#FF5722] to-orange-600 rounded-full transition-all duration-300 ease-in-out"
              style={{ left: "0px", width: "0px" }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl mx-auto mt-8">
          {/* Mobile Carousel (Visible on Mobile) */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-gray-100 shadow-lg p-6"
              >
                <div className="mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="text-[#FF5722]">{tabButtons[currentIdx].icon}</span>
                  <h3 className="font-semibold text-lg">{tabButtons[currentIdx].name}</h3>
                </div>
                {tabButtons[currentIdx].content}
              </motion.div>
            </AnimatePresence>
            {/* Carousel Navigation Buttons */}
            <div className="flex justify-between mt-6 mb-2">
              <button
                onClick={() =>
                  handleTabClick(currentIdx > 0 ? currentIdx - 1 : tabButtons.length - 1)
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
                  />
                </svg>
              </button>
              <button
                onClick={() => handleTabClick((currentIdx + 1) % tabButtons.length)}
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
                  />
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

          {/* Desktop Tab Content */}
          <div className="hidden md:block">
            {tabButtons.map(({ content }, idx) => (
              <TabContentWrapper key={idx} idx={idx} isShow={idx === currentIdx}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="bg-white rounded-xl border border-gray-100 shadow-lg p-6"
                >
                  {content}
                </motion.div>
              </TabContentWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewsWhyAv;