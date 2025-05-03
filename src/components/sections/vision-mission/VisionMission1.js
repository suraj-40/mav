"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const nepData = {
  school: "Agasthya Vidyaniketan",
  nep_alignment: [
    {
      title: "A Holistic Approach to Education",
      description:
        "At Agasthya Vidyaniketan, we have embraced the holistic approach outlined in NEP. We understand that education is not just about academic achievement but also about the overall development of your child. Our curriculum places equal emphasis on academic excellence, sports, arts, and extracurricular activities to ensure a well-rounded education.",
      icon: "🌟"
    },
    {
      title: "Emphasis on Critical Thinking and Creativity",
      description:
        "NEP emphasizes critical thinking and problem-solving skills. Our teaching methodology is designed to encourage students to think critically, analyze information, and develop creative solutions to real-world challenges. We nurture their ability to question, reason, and innovate.",
      icon: "💡"
    },
    {
      title: "Quality Learning with Experienced Educators",
      description:
        "Our team of educators is well-qualified and experienced, aligning with NEP's focus on the importance of a quality teaching workforce. They are committed to providing students with the highest standards of education and fostering a love for learning.",
      icon: "👩‍🏫"
    },
    {
      title: "Modern Facilities and Technology Integration",
      description:
        "Our school's infrastructure is equipped with modern facilities that support technology-enhanced learning, in line with NEP's emphasis on digital and online education. We provide an environment where students can access the latest technology resources to enhance their learning experience.",
      icon: "💻"
    },
    {
      title: "Multidisciplinary Learning",
      description:
        "NEP promotes multidisciplinary learning to encourage students to explore a variety of subjects and develop a broader understanding of the world. Our curriculum aligns with this approach, enabling students to choose subjects that cater to their interests and career aspirations.",
      icon: "📚"
    },
    {
      title: "Focus on Values and Ethical Education",
      description:
        "The policy places a strong emphasis on instilling values and ethics in students. At Agasthya Vidyaniketan, we share this commitment and ensure that values such as integrity, empathy, and responsibility are an integral part of the educational experience.",
      icon: "❤️"
    },
    {
      title: "Active Parent-Teacher Partnership",
      description:
        "NEP recognizes the importance of parent-teacher collaboration. We actively involve parents in their child's educational journey, ensuring that the partnership is an essential part of the learning process. We value your insights and contributions to your child's development.",
      icon: "🤝"
    },
    {
      title: "Inclusivity and Community Building",
      description:
        "We create a close-knit community within our school, celebrating diversity and fostering inclusivity, in line with NEP's values. We aim to create an environment where every student feels valued, safe, and respected.",
      icon: "🌍"
    },
    {
      title: "Research-Oriented Learning",
      description:
        "NEP encourages research and innovation. Our school is committed to nurturing research-oriented learning, providing opportunities for students to engage in research projects and develop their analytical and investigative skills.",
      icon: "🔬"
    },
    {
      title: "Career and Vocational Readiness",
      description:
        "The policy underscores the importance of preparing students for careers and vocational skills. Our curriculum offers a range of courses and activities that help students explore their interests and develop practical skills, aligning with NEP's vision of preparing students for life and work.",
      icon: "🛠️"
    }
  ],
  commitment_statement:
    "Agasthya Vidyaniketan is fully committed to implementing the features and principles outlined in NEP. We are dedicated to providing your child with a well-rounded education that prepares them for the demands of the 21st century, nurtures their creativity and critical thinking, and fosters their holistic development. Our alignment with NEP ensures that your child receives an education that is not just of the highest quality but also future-ready and in sync with the changing educational landscape."
};

const VisionMission1 = () => {
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
       

        {/* Single Item per Row */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {nepData.nep_alignment.map((item, index) => (
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

        {/* Commitment Statement */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF5722] to-orange-600"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Commitment to NEP</h2>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              {nepData.commitment_statement}
            </p>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full opacity-30 -mr-10 -mb-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission1;