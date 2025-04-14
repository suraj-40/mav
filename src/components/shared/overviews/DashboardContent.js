"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/images/about/DashboardImg.png";
import overviewKidImage from "@/assets/images/about/AV-1.png";
import useIsTrue from "@/hooks/useIsTrue";

const DashboardContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="py-10 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-16 w-32 h-32 bg-orange-50 rounded-full opacity-50 blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-40 blur-3xl z-0"></div>
        
        {/* Left side text */}
        <motion.div 
          className="w-full lg:w-1/2 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Dash<span className="text-[#FF5722]">boards</span>
          </h1>
          
          <div className="mt-2">
            <svg
              width={100}
              height={8}
              viewBox="0 0 100 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1,4 Q50,0 99,4"
                fill="none"
                stroke="#FF5722"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Get a clear overview of enrolled courses, track progress, and stay
            on top of course timelines. Stay organized and manage your learning
            journey with ease and efficiency.
          </p>
          
          {/* Stats section */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">95%</span>
              <p className="text-xs text-gray-500 mt-1">Completion Rate</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">12+</span>
              <p className="text-xs text-gray-500 mt-1">Active Courses</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">24/7</span>
              <p className="text-xs text-gray-500 mt-1">Learning Access</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 bg-[#FF5722] text-white rounded-lg shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1">
            Explore Dashboard
          </button>
        </motion.div>

        {/* Right side image */}
        <motion.div 
          className="w-full lg:w-1/2 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
            
            <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <Image
                src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
                alt="Dashboard Image"
                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                placeholder="blur"
              />
              
              {/* Floating features badges */}
              <div className="absolute top-6 -right-3 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transform rotate-3">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>
              
              <div className="absolute bottom-6 -left-3 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transform -rotate-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="text-sm font-medium">Interactive Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardContent;