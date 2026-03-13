"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LifeSkillsTimeline } from "@/components/ui/LifeSkillsTimeline"; // Corrected import
import LifeSkills1 from "./LifeSkills1";
import LifeSkills2 from "./LifeSkills2";
import LifeSkills3 from "./LifeSkills3";
import LifeSkills4 from "./LifeSkills4";
import LifeSkills5 from "./LifeSkills5";
import LifeSkills6 from "./LifeSkills6";
import LifeSkills7 from "./LifeSkills7";
import LifeSkills8 from "./LifeSkills8";
import LifeSkills9 from "./LifeSkills9";

// Animation variants for header
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const LifeSkillsMain = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const data = [
    {
      title: "Yoga Siddhi",
      content: <LifeSkills1 />
    },
    {
      title: "Kalaripayattu",
      content: <LifeSkills2 />
    },
    {
      title: "Chaduranga Siddhi",
      content: <LifeSkills3 />
    },
    {
      title: "Samskrita Siddhi",
      content: <LifeSkills4 />
    },
    {
      title: "Naatya Siddhi",
      content: <LifeSkills5 />
    },
    {
      title: "Sangeeta Siddhi",
      content: <LifeSkills6 />
    },
    {
      title: "Bhagavad Gita",
      content: <LifeSkills7 />
    },
    {
      title: "Dhanur Vidya",
      content: <LifeSkills8 />
    },
    {
      title: "Scouts & Guides",
      content: <LifeSkills9 />
    }
  ];

  return (
    <section className="relative w-full overflow-clip">
      {/* Header (unchanged) */}
      <motion.div 
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mb-16 text-center relative pt-20 px-4 md:px-10"
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
          Nine Mandatory Life Skills
          </span>
        </motion.h1>
        
        
        
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Cultivating holistic development through our nine foundational life skills program, empowering students for a balanced and successful future.
        </motion.p>
        
        <motion.div
          className="flex justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg width={180} height={30} viewBox="0 0 180 30">
            <defs>
              <linearGradient id="headingUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
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
      
      {/* Timeline */}
      <LifeSkillsTimeline data={data} /> {/* Corrected component name */}
    </section>
  );
};

export default LifeSkillsMain;