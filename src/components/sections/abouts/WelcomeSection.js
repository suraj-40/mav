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
            <span className="block">Maharshi Agasthya Vidyanikethan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            A Leading School in Ullal, Bangalore
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mb-4 text-justify">
            Maharshi Agasthya Vidyanikethan is committed to nurturing young minds through quality education, strong values, and holistic development. With a student-centric approach and dedicated educators, we foster an environment where learners develop confidence, curiosity, and a passion for knowledge.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
            Our institution encourages creativity, critical thinking, and intellectual growth. We provide a safe, inclusive, and inspiring atmosphere where every child is supported to realize their full potential. At Maharshi Agasthya Vidyanikethan, we strive to shape responsible citizens and future leaders who contribute positively to society.
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
