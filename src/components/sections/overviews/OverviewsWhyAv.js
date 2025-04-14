"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import TabButtonSecondary from "@/components/shared/buttons/TabButtonSecondary";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import useTab from "@/hooks/useTab";
import useIsTrue from "@/hooks/useIsTrue";
import QualityEducationContent from "@/components/shared/overviews/whyAvContents/QualityEducationContent";
import FuturisticApproachContent from "@/components/shared/overviews/whyAvContents/FuturisticApproachContent";
import EcosystemContent from "@/components/shared/overviews/whyAvContents/EcosystemContent";
import OurMissionContent from "@/components/shared/overviews/whyAvContents/OurMissionContent";

// Remove cn import if not using classnames; use template literals instead
// import { cn } from "@/lib/Utils"; // Commented out unless installed

const OverviewsWhyAv = () => {
  const { currentIdx, handleTabClick } = useTab();
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");
  const tabRefs = useRef([]);

  const tabButtons = [
    { name: "Quality of Education", content: <QualityEducationContent /> },
    { name: "Futuristic Approach", content: <FuturisticApproachContent /> },
    { name: "Ecosystem", content: <EcosystemContent /> },
    { name: "Our Mission", content: <OurMissionContent /> },
  ];

  // Update underline position based on active tab
  useEffect(() => {
    const currentTab = tabRefs.current[currentIdx];
    if (currentTab) {
      const underline = document.querySelector(".tab-underline");
      if (underline) {
        underline.style.left = `${currentTab.offsetLeft}px`;
        underline.style.width = `${currentTab.offsetWidth}px`;
      }
    }
  }, [currentIdx]);

  // Handle resize to update underline
  useEffect(() => {
    const handleResize = () => {
      const currentTab = tabRefs.current[currentIdx];
      if (currentTab) {
        const underline = document.querySelector(".tab-underline");
        if (underline) {
          underline.style.left = `${currentTab.offsetLeft}px`;
          underline.style.width = `${currentTab.offsetWidth}px`;
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIdx]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {!isAbout && !isAboutDark && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 tracking-tight">
              Why <span className="text-secondaryColor">Agasthya Vidhyanikethan?</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-8">
              Discover the unique advantages that make our institution the preferred choice for holistic education and
              future-ready learning.
            </p>
            <div className="flex justify-center">
              <svg width={180} height={20} viewBox="0 0 180 20" className="fill-none">
                <path
                  d="M5,15 Q90,0 175,15"
                  stroke="#FF5722"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        )}

        {/* Tabs section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-2">
            <div className="flex justify-between overflow-x-auto scrollbar-hide">
              {tabButtons.map((tab, index) => (
                <div key={tab.name} ref={(el) => (tabRefs.current[index] = el)} className="relative">
                  <TabButtonSecondary
                    name={tab.name}
                    idx={index}
                    currentIdx={currentIdx}
                    handleTabClick={handleTabClick}
                    button="icon" // Explicitly set to "icon" to show icons
                    // Remove conflicting className to rely on TabButtonSecondary's logic
                  />
                </div>
              ))}
            </div>

            {/* Animated underline */}
            <div
              className="tab-underline absolute bottom-0 h-1 bg-secondaryColor transition-all duration-300 ease-in-out rounded-full"
              style={{ left: "0px", width: "0px" }}
            />
            <div className="w-full h-px bg-gray-200 mt-3"></div>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {tabButtons.map((tab, index) => (
              <TabContentWrapper
                key={index}
                idx={index}
                isShow={index === currentIdx}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {tab.content}
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