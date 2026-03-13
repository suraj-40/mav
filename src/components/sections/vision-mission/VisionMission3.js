"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const qualityData = [
  {
    title: "Quality Learning",
    description:
      "At Maharshi Agasthya Vidyanikethan, we take immense pride in our exceptional team of educators who serve as the bedrock of your child's educational journey. We believe that quality learning begins with quality educators, and that's precisely what you'll find within our distinguished faculty.",
    icon: "🌟"
  },
  {
    title: "Dedicated Expertise",
    description:
      "Our educators are seasoned professionals, possessing a wealth of experience in their respective fields. They are not just teachers; they are mentors, dedicated to nurturing young minds and facilitating intellectual growth. Their commitment to excellence sets the stage for a dynamic learning environment.",
    icon: "👩‍🏫"
  },
  {
    title: "Academic Excellence",
    description:
      "With a deep-rooted passion for imparting knowledge, our educators ensure that the highest standards of academic excellence are met. They guide your child in their educational pursuits, promoting critical thinking, problem-solving, and a love for learning.",
    icon: "📚"
  },
  {
    title: "Innovative Pedagogy",
    description:
      "In an ever-evolving educational landscape, our educators remain at the forefront of innovative pedagogical practices. They adapt to modern teaching methods, harnessing technology and creative approaches to make learning engaging, relevant, and inspiring.",
    icon: "💡"
  },
  {
    title: "Personalized Support",
    description:
      "Each child is unique, and our educators understand this implicitly. They provide personalized support and guidance, recognizing and nurturing the individual strengths and needs of every student. Your child will receive the attention and encouragement required to reach their full potential.",
    icon: "🤝"
  },
  {
    title: "A Lifelong Impact",
    description:
      "The lessons taught by our experienced educators extend far beyond the classroom. They instill values, ignite curiosity, and nurture a lifelong passion for knowledge. Your child will not only be academically enriched but also empowered with skills and virtues that will serve them throughout life.",
    icon: "❤️"
  }
];

const conclusion =
  "Our team of seasoned educators embodies the spirit of commitment, excellence, and a dedication to the craft of education. With them, you can be assured that your child's learning journey will be guided by knowledge, experience, and a profound desire for quality education.";

const VisionMission3 = () => {
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
            Quality Education at Maharshi Agasthya Vidyanikethan
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-orange-600 mx-auto mt-4"></div>
        </motion.div> */}

        {/* Single Item per Row */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {qualityData.map((item, index) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Commitment to Quality Education</h2>
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

export default VisionMission3;