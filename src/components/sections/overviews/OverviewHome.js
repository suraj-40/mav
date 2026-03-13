"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OverviewUnit2 from "@/components/shared/overviews/OverviewsHomePage/OverviewUnit2";

const OverviewHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            Explore Our Campus
          </motion.span>

        </motion.div>

        {/* Content */}
        <div className="relative md:mx-20 mt-4" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="text-center bg-gradient-to-r from-orange-50 to-white py-5 px-6 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Maharshi Agasthya Vidyanikethan - Ullal Campus
              </h3>
              <p className="text-gray-500 text-sm">
                Established in 2024 • Premier Educational Institution
              </p>
              <p className="text-orange-700 text-base font-medium mt-1">
                Inspiring young minds to think bigger, grow deeper, and aim higher
              </p>
            </div>
            <div className="p-6 md:p-8"><OverviewUnit2 /></div>
          </motion.div>
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
