"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Computer, Users, Target, Globe, ChevronRight, Zap, Award, Sparkles } from "lucide-react";

const OurMissionContent = () => {
  useEffect(() => {}, []);
  
  const [activeFeature, setActiveFeature] = useState(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const missionStats = [
    { value: "4K+", label: "Students Empowered", icon: <GraduationCap className="w-4 h-4" /> },
    { value: "20+", label: "Programs Offered", icon: <Book className="w-4 h-4" /> },
    { value: "100%", label: "Value Integration", icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-white to-purple-50 rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent relative inline-block">
            Our Guiding Purpose
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-secondaryColor/20 rounded-full"></span>
          </h2>
          <p className="text-foreground leading-relaxed mb-3 text-base md:text-lg">
            We are at the dawn of something extraordinary — nurturing the future with vibrant knowledge and seeding world-class education.
            Our mission is to inspire, educate, and empower the next generation of leaders while deeply rooted in culture and ethics.
          </p>
          <p className="text-foreground leading-relaxed text-base md:text-lg">
            Agasthya Vidyanikethan is committed to a transformative educational journey — blending academic excellence with a holistic,
            value-driven approach. We don&apos;t just teach subjects; we shape purpose-filled lives.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
            
            {/* Icon with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Target className="w-16 h-16 text-purple-500 relative z-10 transition-all duration-500 hover:rotate-12 hover:text-purple-600" />
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Purposeful Education</h3>
            <p className="text-muted-foreground text-center text-sm">Learning with meaning and direction</p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 gap-2 w-full mt-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {missionStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-md"
                  variants={item}
                >
                  <span className="p-1 bg-purple-100 rounded-full text-purple-600">{stat.icon}</span>
                  <div className="flex flex-wrap items-baseline">
                    <span className="font-bold text-purple-600 mr-1">{stat.value}</span>
                    <span className="text-xs text-gray-600">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main content with grid layout for desktop and column for mobile */}
      <motion.div 
        className="border-t border-gray-100 pt-6 md:pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Academic Excellence */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "academic" ? null : "academic")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-full mr-3 text-blue-600">
                  <Book className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-blue-300 pb-1">Academic Excellence</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "academic" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "academic" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                We strive for more than grades — we cultivate curiosity, deep thinking, and lifelong learning. Our
                rigorous curriculum, innovative pedagogy, and dedicated educators empower students to unlock their full academic potential.
              </p>
              
              {activeFeature === "academic" && (
                <>
                  <p className="mt-3">
                    Our campuses are growing — not to fill space, but to expand opportunity. Every new classroom is a portal to a brighter future.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-700">Academic Achievements</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">98% Exam Success</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">National Recognition</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">Olympiad Winners</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">Research Initiatives</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Digital-First Thinking */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "digital" ? null : "digital")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-cyan-50 rounded-full mr-3 text-cyan-600">
                  <Computer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-cyan-300 pb-1">Digital-First Thinking</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "digital" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "digital" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Our custom-built software portal reflects our commitment to futuristic learning. Built with care, it equips our
                students with 21st-century skills while upholding timeless values.
              </p>
              
              {activeFeature === "digital" && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Sparkles className="w-4 h-4 text-cyan-600 mr-2" />
                      <span className="text-sm font-medium text-cyan-700">Digital Library</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      24/7 access to global resources and learning materials
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Sparkles className="w-4 h-4 text-cyan-600 mr-2" />
                      <span className="text-sm font-medium text-cyan-700">Smart Portfolio</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Digital record of achievements and personal growth
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Character & Culture */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "character" ? null : "character")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-amber-50 rounded-full mr-3 text-amber-600">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-amber-300 pb-1">Character & Culture</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "character" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "character" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                True education transcends books — it nurtures the heart and soul. Through cultural immersion, leadership
                initiatives, and ethical reflection, we empower students to live with integrity, compassion, and courage.
              </p>
              
              {activeFeature === "character" && (
                <>
                  <p className="mt-3">
                    Our mission is a blend of innovation and identity — planting a digital mandate on the grounds of culture, where each child grows
                    not just as a student but as a changemaker.
                  </p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-700 mb-2 text-sm">Character Development Programs</h4>
                    <ul className="list-disc ml-4 text-sm space-y-1 text-gray-700">
                      <li>Leadership retreats and workshops</li>
                      <li>Community service initiatives</li>
                      <li>Cultural festivals and celebrations</li>
                      <li>Ethical decision-making courses</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Global Citizenship */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "global" ? null : "global")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-full mr-3 text-green-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-green-300 pb-1">Global Citizenship</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "global" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "global" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                We instill a global perspective grounded in local values. Our students are prepared to lead with awareness of their role in a
                complex world — mindful of sustainability, equity, and humanity&apos;s shared future.
              </p>
              
              {activeFeature === "global" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Cultural Exchange</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Global Perspectives</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Sustainability Focus</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">World Languages</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">International Relations</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Mission Statement - Mobile friendly */}
        <motion.div
          className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-center mb-4">Our Mission in Action</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Cultivating ethical leadership for tomorrow&apos;s challenges</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Balancing technological advancement with cultural roots</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Nurturing compassionate hearts alongside brilliant minds</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Preparing global citizens who transform communities</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurMissionContent;