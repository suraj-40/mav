"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img31 from "@/assets/images/life-skills/03. Chaduranga Siddhi/1.png";
import img32 from "@/assets/images/life-skills/03. Chaduranga Siddhi/2.png";

const chadurangaData = {
  school: "Agasthya Vidyaniketan",
  alignment_info: {
    title: "Alignment with NEP 2020",
    description:
      "Chaduranga Siddhi supports NEP 2020's focus on critical thinking and problem-solving. By engaging in strategic games like chess, students develop cognitive prowess and analytical skills, fostering intellectual growth and decision-making abilities.",
    icon: "♟️"
  },
  chaduranga_description:
    "Chaduranga Siddhi at Agasthya Vidyaniketan engages students in strategic games like chess to enhance cognitive abilities. This program fosters critical thinking, problem-solving, and decision-making, aligning with NEP 2020's goal of developing analytical and intellectual skills."
};

const LifeSkills3 = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-gradient-to-b overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Images Row - Side by Side */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img31}
                  alt="Chaduranga Siddhi Practice"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Strategic Games
                </h3>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img32}
                  alt="Chaduranga Siddhi Thinking"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Cognitive Development
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* NEP Alignment */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] text-white text-2xl shadow-md flex-shrink-0">
                {chadurangaData.alignment_info.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {chadurangaData.alignment_info.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {chadurangaData.alignment_info.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* About Chaduranga Siddhi */}
        <motion.div
          className="mt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#9C27B0] to-[#BA68C8]"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              About Chaduranga Siddhi
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              {chadurangaData.chaduranga_description}
            </p>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeSkills3;