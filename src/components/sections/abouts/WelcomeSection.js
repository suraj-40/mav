"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../assets/images/logo/logo_1.png";

const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
      >
        <div className="md:col-span-7 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
            <span className="block">Welcome to</span>
            <span className="block">Agasthya Vidyanikethan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            Top School in Nagarbhavi, Bangalore
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6 italic">
            A place where children grow into curious learners, kind thinkers, and confident doers.
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Situated in the heart of Nagarbhavi, Agasthya Vidyanikethan has earned its place among the top schools in Bangalore for its balanced approach to academic excellence, cultural values, and student well-being. With two branches built on the foundation of quality education and student-first philosophy, we cater to a wide spectrum of learners and ambitions, ensuring every child is seen, heard, and guided with purpose.
          </p>
        </div>
        <div className="hidden md:flex md:col-span-5 justify-center">
          {/* School logo image */}
            <Image
              src={Logo}
              alt="Agasthya Vidyanikethan Logo"
            width={320}
            height={320}
              className="object-contain"
              priority
            />
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
