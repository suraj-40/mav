"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img51 from "@/assets/images/life-skills/05. Naatya Siddhi/1.jpg";
import img52 from "@/assets/images/life-skills/05. Naatya Siddhi/2.jpg";

const naatyaData = {
  school: "Agasthya Vidyaniketan",
  alignment_info: {
    title: "Naatya Siddhi's alignment with NEP 2020",
    description:
      "Naatya Siddhi aligns with NEP 2020's promotion of creativity and artistic expression. Through dance, students develop emotional intelligence and cultural awareness, supporting the policy's vision of holistic and experiential learning.",
    icon: "💃"
  },
  naatya_description:
    "Naatya Siddhi at Agasthya Vidyaniketan celebrates the art of dance, encouraging students to express themselves creatively. This program enhances emotional intelligence and cultural awareness, aligning with NEP 2020's focus on creativity and holistic development."
};

const LifeSkills5 = () => {
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
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-100 opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-rose-100 rounded-full opacity-20 blur-3xl"
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
                  src={img51}
                  alt="Naatya Siddhi Performance"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Artistic Expression
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
                  src={img52}
                  alt="Naatya Siddhi Dance"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Cultural Rhythm
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
  className="mt-8 max-w-4xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden">
    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#E91E63] to-[#F48FB1]"></div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] text-white text-2xl shadow-md flex-shrink-0">
      {naatyaData.alignment_info.icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      About Naatya Siddhi
      </h2>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed relative z-10 mb-6">
    {naatyaData.naatya_description}
    </p>
    <div className="bg-gray-50 rounded-lg p-6 shadow-inner border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {naatyaData.alignment_info.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
      {naatyaData.alignment_info.description}
      </p>
    </div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default LifeSkills5;