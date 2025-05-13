"use client";
import Dinacharya, { SectionData } from "@/components/sections/dinacharya/dinacharya";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Add these imports

const DinacharyaPage = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Define isLoaded state

  // Set isLoaded to true when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define fadeInUp variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mb-16 text-center relative pt-10 px-4 md:px-10"
      >
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 opacity-50 blur-3xl -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <motion.h1
          className="text-3xl md:text-7xl font-bold tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
            Dinacharya
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Dinacharya program nurtures essential life skills, fostering discipline, mindfulness, and resilience to prepare students for a fulfilling and balanced life.
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
      {SectionData.map((section, index) => (
        <Dinacharya key={index} {...section} />
      ))}
    </div>
  );
};

export default DinacharyaPage;