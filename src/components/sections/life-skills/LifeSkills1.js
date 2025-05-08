"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img11 from "@/assets/images/life-skills/01. Yoga Siddhi/1.png";
import img12 from "@/assets/images/life-skills/01. Yoga Siddhi/2.png";

const yogaData = {
  school: "Agasthya Vidyaniketan",
  alignment_info: {
    title: "Alignment with NEP 2020",
    description:
      "Yoga Siddhi supports NEP 2020's vision of holistic education by nurturing physical health, mental clarity, and emotional resilience through experiential yoga practices, empowering students to thrive in a balanced learning environment.",
    icon: "🧘"
  },
  yoga_description:
    "Yoga Siddhi at Agasthya Vidyaniketan transforms students by fostering physical vitality, mental focus, and inner peace. Through guided yoga practices, students cultivate discipline and mindfulness, aligning with NEP 2020's holistic learning goals."
};

const LifeSkills1 = () => {
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
    <section className="relative bg-gradient-to-b  overflow-hidden">
      {/* Background Decorations */}
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
                  src={img11}
                  alt="Yoga Siddhi Practice"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Physical Postures
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
                  src={img12}
                  alt="Yoga Mindfulness"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
                  Mental Balance
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
                {yogaData.alignment_info.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                About Yoga Siddhi
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10 mb-6">
              {yogaData.yoga_description}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {yogaData.alignment_info.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {yogaData.alignment_info.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeSkills1;
