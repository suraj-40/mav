"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Computer, Users, CheckCircle, Award } from "lucide-react";

const QualityEducationContent = () => {
  useEffect(() => {}, []); // Empty dependency array to avoid warnings

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

  const statsItems = [
    { value: "95%", label: "Student Satisfaction", icon: <CheckCircle className="w-5 h-5" /> },
    { value: "25+", label: "Experienced Educators", icon: <Award className="w-5 h-5" /> },
    { value: "100%", label: "Focus on Excellence", icon: <GraduationCap className="w-5 h-5" /> }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-blue-50 rounded-lg">
      {/* Header Section - Improved for mobile */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent relative inline-block">
            Excellence in Education
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-secondaryColor/20 rounded-full"></span>
          </h2>
          <p className="text-foreground leading-relaxed mb-3 text-base md:text-lg">
            The first topic we covered in the Thinktank management discussion was the quality of education. Our focus
            remains on ensuring an enriching and effective learning experience for all students.
          </p>
          <p className="text-foreground leading-relaxed text-base md:text-lg">
            At Agasthya Vidyanikethan, we take immense pride in delivering quality education that goes beyond
            conventional teaching methods. Our commitment to academic excellence is reflected in our dedicated faculty,
            who serve not just as educators but as mentors guiding students on their journey of knowledge acquisition.
          </p>
        </motion.div>
        
        {/* Stats Card - Mobile Optimized */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primaryColor to-secondaryColor"></div>
            
            <div className="flex items-center justify-center w-full mb-3">
              <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primaryColor transition-transform duration-500 hover:rotate-12" />
              <div className="ml-3 md:hidden">
                <h3 className="text-lg font-semibold text-foreground">Holistic Learning</h3>
                <p className="text-sm text-muted-foreground">Nurturing minds, building character</p>
              </div>
            </div>
            
            {/* Hide on mobile, show on md screens */}
            <div className="hidden md:block text-center mb-2">
              <h3 className="text-xl font-semibold text-foreground">Holistic Learning</h3>
              <p className="text-muted-foreground mt-1">Nurturing minds, building character</p>
            </div>
            
            {/* Stats display - Better on mobile */}
            <motion.div 
              className="grid grid-cols-1 gap-2 w-full mt-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {statsItems.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-md"
                  variants={item}
                >
                  <span className="text-primaryColor">{stat.icon}</span>
                  <div className="flex flex-wrap items-baseline">
                    <span className="font-bold text-primaryColor mr-1">{stat.value}</span>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Sections - Mobile Optimized */}
      <motion.div 
        className="border-t border-gray-100 pt-6 md:pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {/* School Construction Project - Mobile Optimized */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-50 rounded-full mr-3">
                <Book className="w-5 h-5 text-primaryColor" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                <span className="border-b-2 border-primaryColor/50 pb-1">School Construction</span>
              </h3>
            </div>
            <p className="text-foreground leading-relaxed mb-3 text-sm md:text-base">
              Rather than waiting for students to enroll after the campus was built, we at Agasthya Vidyanikethan have
              proactively expanded and developed additional campuses to accommodate more students.
            </p>
            <p className="text-foreground leading-relaxed text-sm md:text-base">
              Even as the number of campuses and students increases, we remain committed to maintaining the highest
              standards of education without compromise.
            </p>
          </motion.div>

          {/* Software Portal Development - Mobile Optimized */}
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-50 rounded-full mr-3">
                <Computer className="w-5 h-5 text-primaryColor" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                <span className="border-b-2 border-primaryColor/50 pb-1">Software Portal</span>
              </h3>
            </div>
            <p className="text-foreground leading-relaxed mb-3 text-sm md:text-base">
              To further enhance our educational framework, we are developing a Software Portal designed to uphold the
              quality of education and equip our students with necessary skills and knowledge.
            </p>
            <div className="flex items-center mt-4 bg-blue-50/50 p-2 sm:p-3 rounded-lg">
              <div className="w-7 h-7 bg-primaryColor/10 rounded-full flex items-center justify-center mr-2">
                <span className="text-primaryColor font-semibold text-xs">Q3</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Expected launch in Q3 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Holistic Approach - Mobile Optimized */}
        <motion.div
          className="bg-white mt-6 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-50 rounded-full mr-3">
              <Users className="w-5 h-5 text-primaryColor" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              <span className="border-b-2 border-primaryColor/50 pb-1">Holistic Approach</span>
            </h3>
          </div>
          
          {/* Stack on mobile, grid on larger screens */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
            <p className="text-foreground leading-relaxed text-sm md:text-base">
              We prioritize a holistic approach to learning, blending traditional wisdom with contemporary teaching
              methodologies to foster a comprehensive understanding of subjects. Our classrooms are vibrant spaces where
              curiosity is nurtured and critical thinking is encouraged.
            </p>
            <p className="text-foreground leading-relaxed text-sm md:text-base">
              Our rigorous curriculum is designed to not only meet but exceed academic standards, ensuring that every
              student is well-prepared for the challenges of the future.
            </p>
          </div>
          
          {/* Tags - Mobile Optimized with wrapping */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
            <span className="bg-blue-50 text-primaryColor px-2 py-1 rounded-full text-xs md:text-sm">Critical Thinking</span>
            <span className="bg-blue-50 text-primaryColor px-2 py-1 rounded-full text-xs md:text-sm">Character Development</span>
            <span className="bg-blue-50 text-primaryColor px-2 py-1 rounded-full text-xs md:text-sm">Innovation</span>
            <span className="bg-blue-50 text-primaryColor px-2 py-1 rounded-full text-xs md:text-sm">Traditional Wisdom</span>
            <span className="bg-blue-50 text-primaryColor px-2 py-1 rounded-full text-xs md:text-sm">Modern Techniques</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QualityEducationContent;