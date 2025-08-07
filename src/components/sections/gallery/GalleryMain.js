"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainTabs from "./MainTabs";
import BranchTabs from "./BranchTabs";
import GalleryContent from "./GalleryContent";
import VideoGallery from "./VideoGallery";
import { academicYears } from "./GalleryData";
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const GalleryMain = () => {
  const [mainTab, setMainTab] = useState("videos");
  const [activeBranchTab, setActiveBranchTab] = useState("srigandhkaval");
  const [isLoaded, setIsLoaded] = useState(false);
  const [tappedTab, setTappedTab] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [selectedYear, setSelectedYear] = useState(academicYears[academicYears.length - 1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setExpandedCardId(null);
    if (mainTab === "photos") {
      setActiveBranchTab("srigandhkaval");
    }
  }, [mainTab]);

  useEffect(() => {
    setExpandedCardId(null);
  }, [activeBranchTab]);

  const handleTabTap = (tab) => {
    setTappedTab(tab);
    setTimeout(() => setTappedTab(null), 300);
  };

  const toggleCardExpand = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeVariants}
        className="mb-8 sm:mb-12 lg:mb-16 text-center relative"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-bold tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
            Gallery
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover our vibrant events, achievements, and celebrations.
        </motion.p>
        <motion.div
          className="flex justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg width={180} height={30} viewBox="0 0 180 30">
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
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
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

      <div className="flex flex-col items-center mb-8">
        <span className="mb-2 text-lg font-semibold text-gray-700">Please select an academic year:</span>
        <div className="flex items-center justify-center gap-2">
          {academicYears.map((year, idx) => (
            <React.Fragment key={year}>
              <button
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full border-2 font-semibold text-base shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-avorange
                  ${selectedYear === year ? 'bg-avorange text-white border-avorange' : 'bg-white text-gray-800 border-gray-200 hover:bg-orange-50 hover:border-avorange'}`}
              >
                {year}
              </button>
              {idx < academicYears.length - 1 && (
                <span className="h-0.5 w-6 bg-avorange opacity-60 mx-1 rounded-full"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <MainTabs mainTab={mainTab} setMainTab={setMainTab} handleTabTap={handleTabTap} />
      <BranchTabs mainTab={mainTab} activeBranchTab={activeBranchTab} setActiveBranchTab={setActiveBranchTab} />
      
      {mainTab === "photos" ? (
        <GalleryContent
          mainTab={mainTab}
          activeBranchTab={activeBranchTab}
          expandedCardId={expandedCardId}
          toggleCardExpand={toggleCardExpand}
          selectedYear={selectedYear}
        />
      ) : (
        <VideoGallery expandedCardId={expandedCardId} toggleCardExpand={toggleCardExpand} selectedYear={selectedYear} />
      )}

      <div className="absolute top-20 left-0 w-32 h-32 bg-avorange opacity-5 blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-av opacity-5 blur-xl -z-10"></div>
    </section>
  );
};

export default GalleryMain;