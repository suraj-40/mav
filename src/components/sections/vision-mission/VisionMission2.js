"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologyData = [
  {
    title: "Technology-Enhanced Learning",
    description:
      "At Agasthya Vidyaniketan, we are resolute in our commitment to providing your child with an unparalleled educational experience, deeply rooted in modernity and technology. Our state-of-the-art facilities and technology-enhanced learning environments are meticulously designed to foster excellence and innovation.",
    icon: "💻"
  },
  {
    title: "Cutting-Edge Infrastructure",
    description:
      "Our school boasts world-class infrastructure, equipped with the latest amenities to support your child's academic and extracurricular pursuits. From spacious, well-equipped classrooms to advanced laboratories, our facilities are a testament to our dedication to providing the very best for your child's educational journey.",
    icon: "🏫"
  },
  {
    title: "Technology at the Forefront",
    description:
      "We believe that embracing technology is key to empowering your child with the skills and knowledge needed for the 21st century. Our school is at the forefront of integrating technology into education, creating an environment where your child learns to navigate the digital landscape with confidence.",
    icon: "🌐"
  },
  {
    title: "Interactive Learning",
    description:
      "Our classrooms are dynamic spaces where technology merges seamlessly with traditional teaching. Interactive whiteboards, multimedia resources, and online platforms enrich the learning experience, making it engaging, interactive, and highly effective.",
    icon: "📊"
  },
  {
    title: "Digital Resources",
    description:
      "Your child will have access to an extensive digital library and resources, ensuring that they have information at their fingertips to support their research and academic growth. These digital resources empower them to become independent and resourceful learners.",
    icon: "📚"
  },
  {
    title: "Prepared for the Future",
    description:
      "We recognize that the world is rapidly evolving, and we are committed to preparing your child for an ever-changing landscape. Our technology-enhanced learning approach equips them with the skills to adapt, innovate, and excel in an increasingly digital world.",
    icon: "🚀"
  },
  {
    title: "Secure and Connected",
    description:
      "The safety and security of our students are paramount. Our technology infrastructure is not only robust but also meticulously secured, providing a safe and conducive environment for learning.",
    icon: "🔒"
  }
];

const conclusion =
  "Your child's educational journey at Agasthya Vidyaniketan is characterized by a modern and technology-driven approach that ensures they are well-prepared for the future. We believe that providing access to modern facilities and technology-enhanced learning is an investment in your child's success and a testament to our commitment to their growth and development.";

const VisionMission2 = () => {
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
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96  rounded-full opacity-20 blur-3xl"
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
        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Technology at Agasthya Vidyaniketan
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-orange-600 mx-auto mt-4"></div>
        </motion.div> */}

        {/* Single Item per Row */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {technologyData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF5722] to-orange-600 text-white text-xl shadow-md">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Conclusion Statement */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF5722] to-orange-600"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Commitment to Technology</h2>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              {conclusion}
            </p>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission2;