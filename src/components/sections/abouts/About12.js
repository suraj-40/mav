"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { motion } from "framer-motion";

const About12 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use a small delay to ensure consistent hydration
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const focusAreas = [
    {
      icon: "🎓",
      title: "Professional Education",
    },
    {
      icon: "👨‍🎓",
      title: "Adult Education & Lifelong Learning",
    },
    {
      icon: "🏛️",
      title: "Promotion of Indian languages, Arts, and Culture",
    },
    {
      icon: "💻",
      title: "Technology Use and Integration",
    },
    {
      icon: "🌐",
      title: "Online & Digital Education",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center bg-gradient-to-br from-white via-pink-50 to-orange-50 transition-colors duration-500 overflow-x-hidden" suppressHydrationWarning>
      {/* Hero Section - Matching Dinacharya styling */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative pt-10 px-4 md:px-10"
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 opacity-50 blur-3xl -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ transform: "translate(-50%, -50%)" }}
            />
            <motion.h1
              className="text-3xl md:text-7xl font-bold tracking-tight mb-6"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
                National Education Policy 2020
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The modern approach to holistic education & future-ready learning
            </motion.p>
            <motion.div
              className="flex justify-center mb-8"
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
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover how Agasthya Vidyanikethan implements NEP 2020 guidelines to create holistic, 
              future-ready learners through our innovative educational approach.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ButtonPrimary path="/schedule">Schedule a Visit</ButtonPrimary>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full px-4 py-16 md:py-20 overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-justify">
          
          {/* About NEP Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About <span className="text-[#FF5722]">NEP</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The National Education Policy 2020 represents a revolutionary shift from the colonial 
                Macaulay education system, focusing on holistic development & cultural preservation.
              </p>
              <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto mt-4"></div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  In many ways, the NEP system is a revolutionary difference from the Colonial Macaulay education system.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We all have got Independence in 1947 undoubtedly, but much of our education still has the remnants of the colonial past. No doubt many changes have happened in Education, and India as a Country has transformed with the same kind of education system.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We plan to be the third largest economy by 2025, it could not have happened, so definitely we have made those changes but the new National Education Policy, which has been in work since long time & definitely having made public after a public consultation in 2020 and hence its called the NEP 2020.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">NEP 2020</h3>
                  <p className="text-gray-600">
                    A wonderful draft which lays out what really Educational institutes all across the Country should be doing to ensure that our Education system comes out of the colonial past.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* School Information Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Agasthya Vidyanikethan
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Agasthya Vidyanikethan has emerged as one of the best schools in Bangalore, Nagarbhavi region. Started in 2012, it is one of the top schools in the vicinity, headed and micro-managed by a profound scholar, Mr. Manjunath Aradhya, who has been in the field of higher education for over 17 years.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#FF5722] rounded-full"></div>
                      <span className="text-gray-700 font-semibold">Established 2012</span>
                    </div>

                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                      <span className="text-gray-700">Best school in Bangalore, Nagarbhavi region</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                      <span className="text-gray-700">Profound scholar leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                      <span className="text-gray-700">NEP 2020 implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                      <span className="text-gray-700">Holistic education approach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Areas of Focus Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Other Key Areas of <span className="text-[#FF5722]">Focus</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                NEP focuses on ensuring universal access to education at all levels with a holistic, integrated, enjoyable, & engaging learning system.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 md:col-span-2 ${idx === 3 && focusAreas.length === 5 ? "md:col-start-2" : ""}`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FF5722] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-base text-center leading-tight">{area.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ancient Indian Education Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ancient Indian <span className="text-[#FF5722]">Education</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The rich heritage of ancient and eternal Indian knowledge & thought has been a guiding light for this policy.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">The Pursuit of Knowledge</h4>
                    <p className="text-gray-700">
                      The pursuit of knowledge (Jnan), wisdom (Pragyaa), and truth (Satya) was always considered in Indian thought and philosophy as the highest human goal.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Complete Realization</h4>
                    <p className="text-gray-700">
                      The aim of education in ancient India was not just the acquisition of knowledge as preparation for life in this world, or life beyond schooling, but for the complete realization and liberation of the self.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Ancient Institutions</h4>
                    <p className="text-gray-700">
                      Ancient institutions like Takshashila, Nalanda, and Vikramshila set the highest standards of multidisciplinary teaching, attracting scholars worldwide.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Great Scholars</h4>
                    <p className="text-gray-700">
                      India has produced great scholars such as Charaka, Aryabhata, Patanjali, and many others, making seminal contributions across fields like mathematics, astronomy, metallurgy, and medicine.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-[#FF5722] rounded-lg p-6 text-white">
                  <p className="text-lg font-semibold">
                    These rich legacies must be nurtured, preserved, and integrated into modern education,
                    <span className="block">ensuring their relevance and application in the future.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* NEP Activities Section */}
      <section className="w-full bg-[#202745] py-16 md:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              NEP Activities at <span className="text-avorange">Agasthya Vidyanikethan</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Developing Students&apos; Capabilities, To Create Solutions for Tomorrow&apos;s Challenges
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About12;
