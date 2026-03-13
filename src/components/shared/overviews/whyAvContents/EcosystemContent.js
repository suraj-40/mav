"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Brain, Network, Leaf, Zap, ChevronRight, School, Sparkles } from "lucide-react";

const EcosystemContent = () => {
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
    { value: "100%", label: "Green Campus", icon: <Leaf className="w-4 h-4" /> },
    { value: "NEP", label: "Compliant", icon: <School className="w-4 h-4" /> },
    { value: "IoT", label: "Integrated", icon: <Sparkles className="w-4 h-4" /> }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-white to-green-50 rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent relative inline-block">
            A Futuristic & Nurturing Ecosystem
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-secondaryColor/20 rounded-full"></span>
          </h2>
          <p className="text-foreground leading-relaxed mb-3 text-base md:text-lg">
            At Maharshi Agasthya Vidyanikethan, we place a high value on education that is both futuristic and environmentally conscious. Our approach is rooted in a vision that merges innovation with sustainability to foster holistic student growth.
          </p>
          <p className="text-foreground leading-relaxed text-base md:text-lg">
            Experience learning in IoT-powered NEP-aligned classrooms, enriched with thoughtfully planned campuses designed for bagless learning. Our commitment goes beyond academics—ensuring a vibrant, inclusive, and empowering ecosystem for every learner.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
            
            {/* Icon with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Leaf className="w-16 h-16 text-green-500 relative z-10 transition-all duration-500 hover:rotate-12 hover:text-green-600" />
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Sustainable Campus</h3>
            <p className="text-muted-foreground text-center text-sm">Learning in harmony with nature</p>
            
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
                  <span className="p-1 bg-green-100 rounded-full text-green-600">{stat.icon}</span>
                  <div className="flex flex-wrap items-baseline">
                    <span className="font-bold text-green-600 mr-1">{stat.value}</span>
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
          {/* Smart Learning Infrastructure */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "infrastructure" ? null : "infrastructure")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-full mr-3 text-blue-600">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-blue-300 pb-1">Smart Learning Infrastructure</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "infrastructure" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "infrastructure" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Our learning spaces feature IoT-integrated, NEP-compliant classrooms that facilitate real-time feedback and adaptive teaching methodologies—preparing students to thrive in a digitally interconnected world.
              </p>
              
              {activeFeature === "infrastructure" && (
                <>
                  <p className="mt-3">
                    Every aspect of our environment is designed with intent—from collaborative project zones to quiet mindfulness areas—enhancing focus, creativity, and emotional well-being.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-700">Smart Campus Features</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">Interactive Boards</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">IoT Sensors</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">Adaptive Learning</span>
                      <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">Digital Libraries</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Holistic Development */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "holistic" ? null : "holistic")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-full mr-3 text-purple-600">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-purple-300 pb-1">Holistic Development</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "holistic" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "holistic" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Our educational framework emphasizes mental, emotional, and physical well-being. We encourage independent thought, inquiry-based learning, and character-building to shape resilient and socially conscious individuals.
              </p>
              
              {activeFeature === "holistic" && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="p-2 bg-purple-50 rounded-lg text-center">
                    <p className="text-purple-600 font-semibold">Mind</p>
                    <p className="text-xs text-gray-600">Critical thinking</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg text-center">
                    <p className="text-purple-600 font-semibold">Body</p>
                    <p className="text-xs text-gray-600">Physical fitness</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg text-center">
                    <p className="text-purple-600 font-semibold">Spirit</p>
                    <p className="text-xs text-gray-600">Emotional growth</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Inclusive & Collaborative Culture */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "inclusive" ? null : "inclusive")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-amber-50 rounded-full mr-3 text-amber-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-amber-300 pb-1">Inclusive & Collaborative Culture</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "inclusive" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "inclusive" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                We celebrate diversity and foster belonging through inclusive practices, mentorship programs, and collaborative initiatives that strengthen the school community and prepare students for global citizenship.
              </p>
              
              {activeFeature === "inclusive" && (
                <>
                  <p className="mt-3">
                    Our balanced approach nurtures every student&#39;s potential, equipping them to meet future challenges with confidence and compassion.
                  </p>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-700 mb-2 text-sm">Our Inclusive Initiatives</h4>
                    <ul className="list-disc ml-4 text-sm space-y-1 text-gray-700">
                      <li>Peer mentorship programs</li>
                      <li>Cross-cultural learning experiences</li>
                      <li>Community engagement projects</li>
                      <li>Student-led inclusion committees</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Sustainable Learning */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3, backgroundColor: "#FDFBFF" }}
            onClick={() => setActiveFeature(activeFeature === "sustainable" ? null : "sustainable")}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-full mr-3 text-green-600">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  <span className="border-b-2 border-green-300 pb-1">Sustainable Learning</span>
                </h3>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeature === "sustainable" ? "rotate-90" : ""}`} />
            </div>
            
            <div className={`mt-3 text-foreground leading-relaxed text-sm md:text-base overflow-hidden transition-all duration-300 ${activeFeature === "sustainable" ? "max-h-96" : "max-h-16 md:max-h-24 text-ellipsis overflow-hidden"}`}>
              <p>
                Our campus is designed to be a living laboratory of environmental stewardship, featuring renewable energy systems, water conservation measures, and organic gardens that serve as educational tools.
              </p>
              
              {activeFeature === "sustainable" && (
                <>
                  <p className="mt-3">
                    Students actively participate in sustainability initiatives, developing eco-consciousness and a deep connection to the natural world that surrounds them.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Solar Powered</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Rainwater Harvesting</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Waste Management</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Organic Gardens</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Plastic-free Campus</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Ecosystem Benefits - Mobile friendly */}
        <motion.div
          className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-center mb-4">Our Ecosystem Advantages</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Learning environments that inspire curiosity and wonder</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Technology integration that enhances rather than replaces human connection</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Balanced approach to academic excellence and personal growth</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
              <p className="text-sm text-gray-700">Community-centered spaces that nurture belonging and collaboration</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EcosystemContent;