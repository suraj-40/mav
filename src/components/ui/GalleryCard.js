"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const GalleryCard = ({
  id,
  title,
  image,
  description,
  videoUrl,
  isExpanded,
  toggleExpand,
  activityId,
  showVideo,
  videoDisabled = false // Add a prop to control button disabled state
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handleWatchClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle card click
  const handleCardClick = () => {
    toggleExpand(activityId);
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
        className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-56 sm:h-64 md:h-80 lg:h-96 transform transition-transform duration-700 ease-in-out group-hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpgNwD9TvpgAAAABJRU5ErkJggg=="
          />
        </div>

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-70"
          }`}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white transform transition-all duration-500 ease-in-out">
          <div className="flex items-center mb-2 sm:mb-3">
            <span className="bg-avorange text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium mr-2 sm:mr-3">
              {id < 10 ? `0${id}` : id}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              {title}
            </h3>
          </div>

          <AnimatePresence>
            {(isExpanded || isHovered) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6">
                  {description}
                </p>
                {showVideo && (
                  <button
                    onClick={handleWatchClick}
                    disabled={videoDisabled}
                    className={`inline-flex items-center text-sm sm:text-base font-medium rounded-lg px-4 sm:px-5 py-2 sm:py-3 transition-all duration-300 ${
                      videoDisabled
                        ? "text-white bg-avorange bg-opacity-50 cursor-not-allowed" 
                        : "text-white bg-avorange hover:bg-opacity-90"
                    }`}
                  >
                    <PlayCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                    Watch
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* YouTube Modal */}
      <AnimatePresence>
        {isModalOpen && showVideo && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative bg-white rounded-xl w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute -top-4 -right-4 bg-avorange text-white rounded-full p-2 hover:bg-avorange/90 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={`${videoUrl}?autoplay=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;