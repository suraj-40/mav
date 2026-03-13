"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img31 from "@/assets/images/life-skills/09. Scouts & Guides/1.png";
import img32 from "@/assets/images/life-skills/09. Scouts & Guides/2.png";

const scoutsData = {
  school: "Maharshi Agasthya Vidyanikethan",
  alignment_info: {
    title: "Scouts & Guides' alignment with NEP 2020",
    description:
      "Scouts & Guides promote community service, leadership, and adventure, which align with NEP 2020's goals of developing social responsibility, ethical citizenship, and life skills beyond the classroom.",
    icon: "⚜️"
  },
  description:
    "Scouts & Guides at Maharshi Agasthya Vidyanikethan empower students with practical life skills, leadership qualities, and a spirit of service. Through outdoor activities and community engagement, students build character and resilience."
};

const LifeSkills9 = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100 opacity-20 blur-3xl"
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
                  alt="Scouts Activities"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Discipline and Honor
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
                  alt="Guides Community Service"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Teamwork and Patriotism
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
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF5722] to-orange-600"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF5722] to-orange-600 text-white text-2xl shadow-md flex-shrink-0">
                {scoutsData.alignment_info.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                About Scouts & Guides
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10 mb-6">
              {scoutsData.description}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {scoutsData.alignment_info.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {scoutsData.alignment_info.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeSkills9;
