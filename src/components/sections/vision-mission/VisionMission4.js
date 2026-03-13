"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lifelongSuccessData = [
  {
    title: "Lifelong Success",
    description:
      "At Maharshi Agasthya Vidyanikethan, we understand that a child's journey through education is not just about academics; it's about shaping a well-rounded individual ready to conquer life's challenges. Our commitment to holistic development ensures that your child is prepared for a successful and fulfilling life, both academically and personally.",
    icon: "🌟"
  },
  {
    title: "Nurturing Academic Excellence",
    description:
      "While academic achievement is essential, we go beyond rote learning. We foster critical thinking and problem-solving skills in our students. We encourage them to ask questions, explore ideas, and approach challenges with creativity and innovation. Our goal is to equip them with the intellectual tools they need to excel in an ever-evolving world.",
    icon: "📚"
  },
  {
    title: "Thriving in Sports, Arts, and Extracurricular Activities",
    description:
      "Education extends beyond the classroom. We offer a rich array of sports, arts, and extracurricular activities to help your child discover and develop their passions. Through these pursuits, they learn teamwork, discipline, time management, and the joy of self-expression.",
    icon: "⚽"
  },
  {
    title: "Values and Leadership",
    description:
      "Our school places a strong emphasis on instilling values in our students. We believe that character is as important as knowledge. Your child will learn the values of integrity, empathy, and responsibility, which will guide them in their personal and professional lives. Moreover, we foster leadership qualities, empowering students to become confident and capable leaders in various aspects of life.",
    icon: "❤️"
  },
  {
    title: "A Foundation for Lifelong Success",
    description:
      "Our holistic approach prepares your child for lifelong success. They leave Maharshi Agasthya Vidyanikethan not only with academic excellence but also with the life skills, ethics, and mindset needed to excel in any field they choose. We believe in nurturing individuals who are not just academically competent but also well-rounded and resilient.",
    icon: "🚀"
  }
];

const conclusion =
  "Our goal is to cultivate a love for learning, a spirit of inquiry, and a strong character in your child. We aim to prepare them to face the complexities of the modern world with confidence and the ability to think critically and adapt. This is the essence of our commitment to holistic development.";

const VisionMission4 = () => {
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
            Lifelong Success at Maharshi Agasthya Vidyanikethan
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-orange-600 mx-auto mt-4"></div>
        </motion.div> */}

        {/* Single Item per Row */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {lifelongSuccessData.map((item, index) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Commitment to Lifelong Success</h2>
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

export default VisionMission4;