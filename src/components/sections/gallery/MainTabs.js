"use client";

import React from "react";
import { motion } from "framer-motion";

const tabVariants = {
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  inactive: {
    scale: 1,
    transition: { duration: 0.3 }
  },
  tapped: {
    scale: 1.08,
    backgroundColor: "rgba(255, 87, 34, 0.1)",
    transition: { duration: 0.2 }
  }
};

const MainTabs = ({ mainTab, setMainTab, handleTabTap }) => {
  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="inline-flex bg-white rounded-full shadow-lg p-1.5 sm:p-2">
        <motion.button
          variants={tabVariants}
          animate={
            mainTab === "videos"
              ? "active"
              : mainTab === "tapped"
              ? "tapped"
              : "inactive"
          }
          onClick={() => {
            setMainTab("videos");
            handleTabTap("videos");
          }}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
            mainTab === "videos"
              ? "bg-avorange text-white"
              : "bg-transparent text-av hover:bg-gray-100"
          }`}
        >
          Videos
        </motion.button>
        <motion.button
          variants={tabVariants}
          animate={
            mainTab === "photos"
              ? "active"
              : mainTab === "tapped"
              ? "tapped"
              : "inactive"
          }
          onClick={() => {
            setMainTab("photos");
            handleTabTap("photos");
          }}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
            mainTab === "photos"
              ? "bg-avorange text-white"
              : "bg-transparent text-av hover:bg-gray-100"
          }`}
        >
          Photos
        </motion.button>
      </div>
    </div>
  );
};

export default MainTabs;