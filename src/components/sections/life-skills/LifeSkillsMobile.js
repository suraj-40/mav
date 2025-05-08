"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LifeSkills1 from "./LifeSkills1";
import LifeSkills2 from "./LifeSkills2";
import LifeSkills3 from "./LifeSkills3";
import LifeSkills4 from "./LifeSkills4";
import LifeSkills5 from "./LifeSkills5";
import LifeSkills6 from "./LifeSkills6";

const LifeSkillsMobile = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const tabButtons = [
    { name: "Yoga Siddhi", content: <LifeSkills1 /> },
    { name: "Kalaripayattu", content: <LifeSkills2 /> },
    { name: "Chaduranga Siddhi", content: <LifeSkills3 /> },
    { name: "Samskrita Siddhi", content: <LifeSkills4 /> },
    { name: "Naatya Siddhi", content: <LifeSkills5 /> },
    { name: "Sangeeta Siddhi", content: <LifeSkills6 /> },
  ];

  const handleTabClick = (idx) => setCurrentIdx(idx);

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-12 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 relative"
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
          <h1
            className="text-3xl font-bold text-avorange tracking-tight"
            style={{ fontFamily: "Samarkan, cursive" }}
          >
            Agasthya Vidyanikethan
          </h1>
          <motion.h2
            className="text-2xl font-bold mt-3 bg-gradient-to-r from-av to-avorange bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Six Mandatory Life Skills
          </motion.h2>
          <motion.p
            className="max-w-md mx-auto text-gray-600 text-base leading-relaxed mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Cultivating holistic development through our six foundational life skills program, empowering students for a balanced and successful future.
          </motion.p>
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabButtons.map(({ name }, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentIdx === idx
                  ? "bg-gradient-to-r from-[#FF5722] to-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {name}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {tabButtons[currentIdx].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LifeSkillsMobile;