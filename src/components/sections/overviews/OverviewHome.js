"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OverviewUnit2 from "@/components/shared/overviews/OverviewsHomePage/OverviewUnit2";
import OverviewUnit1 from "@/components/shared/overviews/OverviewsHomePage/OverviewUnit1";
import HeroName from "@/components/shared/section-names/HeroName";

const OverviewHome = () => {
  const [activeTab, setActiveTab] = useState("ullal");
  const [isLoaded, setIsLoaded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTabChange = (key, index) => {
    if (key !== activeTab && !animating) {
      setAnimating(true);
      setActiveTab(key);
      setActiveIndex(index);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  const tabs = [
    { name: "Agasthya Vidyanikethan - Ullal Branch", key: "ullal", content: <OverviewUnit2 /> },
    { name: "Agasthya Vidyanikethan - Srigandhakaval Branch", key: "srigandhakaval", content: <OverviewUnit1 /> },
  ];

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-orange-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-15 blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/6 w-3 h-3 bg-orange-400 rounded-full shadow-lg"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-blue-300 rounded-full shadow-md"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>

      <div className="px-4 md:px-6 w-full z-10" data-aos="fade-up">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <motion.span
            className="inline-block px-4 py-1.5 my-3 bg-orange-50 text-orange-600 font-medium text-sm rounded-full border border-orange-200 mb-4 shadow-md"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore Our Campuses
          </motion.span>
          <h2 className="text-4xl md:text-3xl lg:text-6xl py-2 md:py-3 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-av  via-orange-800 to-orange-600 font-samarkan"  data-aos="fade-up">
          Agasthya Vidyanikethan
          </h2>
          
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center my-4 md:m-30 md:my-12 px-2" data-aos="fade-up">
          <div className="flex w-full bg-white/95 rounded-lg shadow-md border border-gray-100 overflow-hidden gap-[2px]">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.key}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabChange(tab.key, index)}
                className={`relative z-10 w-1/2 px-2 py-1 md:px-4 md:py-3 text-center font-medium text-[13px] md:text-base rounded-md md:rounded-xl transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab.key ? "bg-avorange text-white" : "bg-white text-gray-800 hover:bg-orange-50 hover:text-orange-700"}
                  ${index === 0 ? "rounded-l-md md:rounded-l-xl" : ""} ${index === tabs.length - 1 ? "rounded-r-md md:rounded-r-xl" : ""}
                  ${index !== 0 ? "border-l-2 border-white" : ""}
                `}
                disabled={animating}
                aria-selected={activeTab === tab.key}
                role="tab"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="block md:hidden">{tab.key === 'ullal' ? 'AV Ullal' : 'AV Srigandhakaval'}</span>
                <span className="hidden md:block">{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative md:mx-20 mt-4" data-aos="fade-up">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.key && (
                  <motion.div
                    key={tab.key}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                    role="tabpanel"
                  >
                    <div className="text-center bg-gradient-to-r from-orange-50 to-white py-5 px-6 border-b border-gray-100">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {tab.name} Campus
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Established in {tab.key === "srigandhakaval" ? "2010" : "2024"} • Premier Educational Institution
                      </p>
                      {tab.key === "srigandhakaval" && (
                        <p className="text-orange-800 text-base font-semibold mt-1">
                          Years of academic strength and cultural depth
                        </p>
                      )}
                      {tab.key === "ullal" && (
                        <p className="text-orange-700 text-base font-medium mt-1">
                          Inspiring young minds to think bigger, grow deeper, and aim higher
                        </p>
                      )}
                    </div>
                    <div className="p-6 md:p-8">{tab.content}</div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.8, width: 128 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewHome;
