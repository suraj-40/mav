"use client";
import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const particleVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-100 to-indigo-100 rounded-full opacity-25 blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full shadow-lg"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-md"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.8 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 p-6 md:p-8 overflow-hidden"
          >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* H1 Heading */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                  Welcome to Agasthya Vidyanikethan
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 text-lg md:text-xl lg:text-2xl">
                  Top School in Nagarbhavi, Bangalore
                </span>
              </motion.h1>

              {/* H2 Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-gray-700 leading-relaxed"
              >
                A place where children grow into{" "}
                <span className="text-orange-600 font-bold">curious learners</span>,{" "}
                <span className="text-orange-600 font-bold">kind thinkers</span>, and{" "}
                <span className="text-orange-600 font-bold">confident doers</span>.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
              >
                Situated in the heart of Nagarbhavi, Agasthya Vidyanikethan has earned its place among the top schools in Bangalore for its balanced approach to academic excellence, cultural values, and student well-being. With two branches built on the foundation of quality education and student-first philosophy, we cater to a wide spectrum of learners and ambitions, ensuring every child is seen, heard, and guided with purpose.
              </motion.p>

              {/* Decorative Bottom Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center mt-6"
              >
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 150 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="h-0.5 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 rounded-full shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection; 