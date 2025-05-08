"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Fade animation for heading
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

// Tab animation variants
const tabVariants = {
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  inactive: { scale: 1, transition: { duration: 0.3 } },
  tapped: {
    scale: 1.08,
    backgroundColor: "rgba(255, 87, 34, 0.1)",
    transition: { duration: 0.2 }
  }
};

const CulturalActivitiesHeader = ({ activeTab, setActiveTab }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tappedTab, setTappedTab] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTabTap = (tab) => {
    setTappedTab(tab);
    setTimeout(() => setTappedTab(null), 300);
  };

  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-0 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeVariants}
        className="mb-8 sm:mb-12 lg:mb-16 text-center relative"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-bold  tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
          Cultural Activities
          </span>
        </motion.h1>
       
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Embracing heritage and fostering creativity through a vibrant tapestry
          of cultural events and traditions.
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

      {/* Tabs */}
      <div className="flex justify-center mb-1 sm:mb-12">
        <div className="inline-flex bg-white rounded-full shadow-lg p-1.5 sm:p-2">
          {/* Srigandhkaval Button */}
          <motion.button
            variants={tabVariants}
            animate={
              activeTab === "srigandhkaval"
                ? "active"
                : tappedTab === "srigandhkaval"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setActiveTab("srigandhkaval");
              handleTabTap("srigandhkaval");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              activeTab === "srigandhkaval"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Srigandhkaval Branch
          </motion.button>

          {/* Ullal Button */}
          <motion.button
            variants={tabVariants}
            animate={
              activeTab === "ullal"
                ? "active"
                : tappedTab === "ullal"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setActiveTab("ullal");
              handleTabTap("ullal");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              activeTab === "ullal"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Ullal Branch
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CulturalActivitiesHeader;
