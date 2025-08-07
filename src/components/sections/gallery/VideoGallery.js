"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCard from "@/components/ui/GalleryCard";
import { videoActivitiesByYear } from "./GalleryData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const VideoGallery = ({ expandedCardId, toggleCardExpand, selectedYear }) => {
  const videos = videoActivitiesByYear[selectedYear] || [];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="videos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((activity) => (
            <GalleryCard
              key={`${activity.branch}-${activity.id}`}
              {...activity}
              activityId={`${activity.branch}-${activity.id}`}
              isExpanded={expandedCardId === `${activity.branch}-${activity.id}`}
              toggleExpand={toggleCardExpand}
              showVideo={true}
              videoDisabled={activity.videoDisabled}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoGallery;