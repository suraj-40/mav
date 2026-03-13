"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainTabs from "./MainTabs";
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
  const [mainTab, setMainTab] = useState("photos");
  const [activeBranchTab, setActiveBranchTab] = useState("ullal");
  const [isLoaded, setIsLoaded] = useState(false);
  const [tappedTab, setTappedTab] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2024-25");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setExpandedCardId(null);
  }, [mainTab]);



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
          Discover our cultural events, achievements, and celebrations.
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

      <div className="flex flex-col items-center mb-10 w-full max-w-xs mx-auto">
        <label className="mb-3 text-lg font-semibold text-gray-700">Please select an academic year:</label>
        <div className="w-full relative">
          <Listbox value={selectedYear} onChange={setSelectedYear}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white py-3 pl-4 pr-10 text-left border-2 border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-avorange focus:border-avorange transition-all duration-200">
                <span className="block truncate text-gray-800 font-medium text-lg">{selectedYear}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-xl border border-gray-100 focus:outline-none sm:text-lg">
                {academicYears.map((year) => (
                  <Listbox.Option
                    key={year}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors duration-150 ${
                        active ? 'bg-orange-50 text-avorange' : 'text-gray-900'
                      }`
                    }
                    value={year}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                          {year}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-avorange">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>

      <MainTabs mainTab={mainTab} setMainTab={setMainTab} handleTabTap={handleTabTap} />
      {/* BranchTabs removed as only Ullal is now shown */}


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