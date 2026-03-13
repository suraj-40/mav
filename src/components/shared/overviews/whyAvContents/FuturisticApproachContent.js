"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Brain, Theater, LayoutDashboard, ChevronRight, Globe, Zap } from "lucide-react";

const FuturisticApproachContent = () => {
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

  const stats = [
    { value: "10+", label: "Years teaching Chess", icon: <Brain className="w-4 h-4" /> },
    { value: "100%", label: "Smart Classrooms", icon: <LayoutDashboard className="w-4 h-4" /> },
    { value: "Global", label: "Perspective", icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-white to-blue-50 rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent relative inline-block">
            Preparing for Tomorrow
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-secondaryColor/20 rounded-full"></span>
          </h2>
          <p className="text-foreground leading-relaxed mb-3 text-base md:text-lg">
            In a constantly evolving world, Maharshi Agasthya Vidyanikethan stands at the forefront of education with a futuristic approach.
            We recognize the necessity of preparing students for a rapidly changing global landscape.
          </p>
          <p className="text-foreground leading-relaxed text-base md:text-lg">
            Our curriculum is designed not just to impart knowledge but to instill essential skills for success in the 21st century.
            Technology is seamlessly integrated into our teaching methods, ensuring students are not just consumers but also creators and innovators.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            
            {/* Icon with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Lightbulb className="w-16 h-16 text-yellow-500 relative z-10 transition-all duration-500 hover:rotate-12 hover:text-yellow-600" />
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Innovation Hub</h3>
            <p className="text-muted-foreground text-center text-sm">Where ideas transform into reality</p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 gap-2 w-full mt-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-md"
                  variants={item}
                >
                  <span className="p-1 bg-amber-100 rounded-full text-amber-600">{stat.icon}</span>
                  <div className="flex flex-wrap items-baseline">
                    <span className="font-bold text-amber-600 mr-1">{stat.value}</span>
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
          {/* Communication Skills */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "communication" ? null : "communication")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-full mr-3 text-purple-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-purple-300 pb-1">Communication Skills</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "communication" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "communication" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                We at Maharshi Agasthya Vidyanikethan do not compromise on communication. All of our students are excellent communicators,
                fluent in English and deeply appreciative of their mother tongue. They are rooted in cultural traditions and values.
              </p>
              
              {activeFeature === "communication" && (
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-700 mb-2 text-sm">Our Approach</h4>
                  <ul className="list-disc ml-4 text-sm space-y-1 text-gray-700">
                    <li>Regular debates and public speaking activities</li>
                    <li>Bilingual education to preserve cultural heritage</li>
                    <li>Presentation skills development from early grades</li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Critical Thinking */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "thinking" ? null : "thinking")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-full mr-3 text-blue-600">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-blue-300 pb-1">Critical Thinking</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "thinking" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "thinking" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                As we advance into an era of AI, chatbots, and robotics, many jobs are being automated. The roles that will persist
                are those requiring critical thinking—an ability machines cannot replicate.
              </p>
              
              {activeFeature === "thinking" && (
                <>
                  <p className="mt-3">
                    To cultivate this, we&apos;ve made chess a compulsory subject for over 10 years, enabling strategic thinking and
                    problem-solving. Theatre classes help students overcome stage fear and gain confidence, while our Montessori
                    classroom setup encourages hands-on, experience-based learning.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-700">Did you know?</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">
                      Our chess program has produced 3 district-level champions in the last academic year alone.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Global Perspective */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "global" ? null : "global")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-full mr-3 text-green-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-green-300 pb-1">Global Perspective</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "global" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "global" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Through international exchange programs and global collaboration, our students develop the cultural awareness
                and mindset of global citizens—ready to make an impact beyond borders.
              </p>
              
              {activeFeature === "global" && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="p-2 bg-green-50 rounded-lg text-center">
                    <p className="text-green-600 font-semibold">USA</p>
                    <p className="text-xs text-gray-600">Partner School</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg text-center">
                    <p className="text-green-600 font-semibold">Singapore</p>
                    <p className="text-xs text-gray-600">Exchange Program</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg text-center">
                    <p className="text-green-600 font-semibold">UK</p>
                    <p className="text-xs text-gray-600">Cultural Program</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Technology Integration */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "technology" ? null : "technology")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-cyan-50 rounded-full mr-3 text-cyan-600">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-cyan-300 pb-1">Technology</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "technology" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "technology" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Our classrooms are equipped with smart technology—interactive boards, digital platforms, and seamless online access—
                ensuring every student is comfortable using tools that define modern workspaces.
              </p>
              
              {activeFeature === "technology" && (
                <>
                  <p className="mt-3">
                    We support in-person and remote learning through robust digital infrastructure, so learning never stops.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">Smart Boards</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">1:1 Devices</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">Online Library</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">Digital Lab</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">Virtual Tours</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Feature comparison - Mobile friendly */}
        <motion.div
          className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-center mb-4">Our Futuristic Edge</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Blending tradition with cutting-edge technology</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Curriculum designed for future workforce needs</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Focus on creativity alongside technical skills</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Teaching adaptability in a changing world</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticApproachContent;