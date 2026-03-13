"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import student from "@/assets/images/counter/student.png";
import teacher from "@/assets/images/counter/teacher.png";
import campus from "@/assets/images/counter/campus.png";

const NewAbout = () => {
  const statItems = [
    {
      icon: campus,
      label: "Premier Campus",
      description: "A world-class environment for contemporary learning.",
      delay: 0.1,
    },
    {
      icon: teacher,
      label: "Dedicated Educators",
      description: "Inspiring excellence through expert mentorship.",
      delay: 0.2,
    },
    {
      icon: student,
      label: "Bright Minds",
      description: "Empowering the leaders and thinkers of tomorrow.",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Shorter & Wider Banner */}
          <div className="bg-gradient-to-r from-[#1a1f3c] via-[#202745] to-[#1a1f3c] border border-white/10 backdrop-blur-md py-6 px-8 md:py-8 md:px-12 lg:px-16 shadow-2xl relative overflow-hidden group">
            
            {/* Glossy Overlay Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 items-start divide-y md:divide-y-0 md:divide-x divide-white/10">
              {statItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-start text-center md:text-left pt-8 md:pt-0 first:pt-0 md:px-8 first:pl-0 last:pr-0 group/item"
                >
                  <div className="relative mb-6">
                    {/* Icon Container with Glow */}
                    <div className="absolute inset-0 bg-avorange/20 blur-xl rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                    <div className="w-16 h-16 relative flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover/item:border-avorange/50 transition-colors duration-300">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={32}
                        height={32}
                        className="object-contain filter brightness-110"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-wide uppercase font-montserrat">
                    {item.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-[200px] md:max-w-full font-light">
                    {item.description}
                  </p>
                  
                  {/* Subtle Underline on hover */}
                  <div className="w-8 h-1 bg-avorange/0 group-hover/item:w-16 group-hover/item:bg-avorange transition-all duration-300 mt-4 rounded-full" />
                </motion.div>
              ))}
            </div>
            
            {/* Background Texture/Pattern (Optional) */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-avorange/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewAbout;