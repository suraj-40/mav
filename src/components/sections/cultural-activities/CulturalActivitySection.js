"use client";
import React from "react";
import { motion } from "framer-motion";
import CulturalActivityCard from "@/components/ui/CulturalActivityCard";

const CulturalActivitySection = ({ activeTab, sectionIndex, activities }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[600px]">
      {activities.map((activity, index) => (
        <motion.div
          key={`${activeTab}-${sectionIndex}-${activity.id}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <CulturalActivityCard
            {...activity}
            activityId={`${activeTab}-${sectionIndex}-${activity.id}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CulturalActivitySection;