"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowRightCircle
} from "lucide-react";
// import avecosystemImage1 from "@/assets/images/avecosystem/avecosystem1.jpg";
import avecosystemImage2 from "@/assets/images/avecosystem/01.jpg";
import avecosystemImage3 from "@/assets/images/avecosystem/03.jpg";
import avecosystemImage1 from "@/assets/images/avecosystem/02.jpg";
// import avecosystemImage5 from "@/assets/images/avecosystem/avecosystem6.jpg";
// import avecosystemImage6 from "@/assets/images/avecosystem/avecosystem8.jpg";
import useIsTrue from "@/hooks/useIsTrue";
import ReadyJourneySection from "./ReadyJourneySection";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const carouselVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const tabVariants = {
  inactive: { scale: 1 },
  active: { scale: 1.05, transition: { duration: 0.3 } },
  tapped: { scale: 0.95, transition: { duration: 0.1 } }
};

// Define image arrays outside the component to prevent recreation on each render
const ullalImages = [
  { src: avecosystemImage1, title: "Ullal 1" },
  { src: avecosystemImage2, title: "Ullal 2" },
  { src: avecosystemImage3, title: "Ullal 3" }
];



const ImageGallery = ({ gallary }) => {
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [currentImages, setCurrentImages] = useState(ullalImages);
  const [tappedButton, setTappedButton] = useState(false);

  // Handle image click for modal
  const handleImageClick = (index, images) => {
    setCurrentImageIndex(index);
    setCurrentImages(images);
    setIsModalOpen(true);
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleGoToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleButtonTap = () => {
    setTappedButton(true);
    setTimeout(() => setTappedButton(false), 200);
  };

  return (
    <div className="my-12 md:my-20">

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="relative bg-white rounded-xl w-full max-w-3xl shadow-2xl border border-gray-100" onClick={e => e.stopPropagation()}>
              <button
                onClick={handleCloseModal}
                className="absolute -top-4 -right-4 bg-avorange text-white rounded-full p-2 hover:bg-avorange/90 transition-colors duration-200 hover:scale-110 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative p-4">
                {/* Carousel Image */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      variants={carouselVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentImages[currentImageIndex].src}
                        alt={currentImages[currentImageIndex].title}
                        className="object-contain w-full h-full"
                        placeholder="blur"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-avorange/80 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-avorange/80 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 py-3">
                  {currentImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleGoToImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentImageIndex
                        ? "bg-avorange"
                        : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Display */}
      <div className="mx-4 sm:mx-6 md:mx-8 p-4 sm:p-6 mb-16 sm:mb-20 md:mb-24 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {ullalImages.map((image, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer bg-gray-50 mb-6 sm:mb-8"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              onHoverStart={() => setIsHovered(idx)}
              onHoverEnd={() => setIsHovered(null)}
              onClick={() => handleImageClick(idx, ullalImages)}
            >
              <div className="relative pt-[75%] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered === idx ? "opacity-90" : "opacity-70"
                }`} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isHovered === idx ? 1 : 0,
                    scale: isHovered === idx ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {!gallary && (
        <>
          <motion.div
            className="flex justify-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.6,
                type: "spring",
                bounce: 0.4
              }
            }}
          >
            <Link href="/about-us/gallery" passHref>
              <motion.button
                variants={tabVariants}
                animate={tappedButton ? "tapped" : "inactive"}
                whileHover="active"
                onClick={handleButtonTap}
                className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 flex items-center gap-2 bg-avorange text-white relative z-10"
              >
                <motion.span
                  initial={{ backgroundPosition: "100% 0" }}
                  whileHover={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 0",
                    transition: { duration: 0.6 }
                  }}
                >
                  View More
                </motion.span>
                <ArrowRightCircle className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
          <ReadyJourneySection />
        </>
      )}
    </div>
  );
};

export default ImageGallery;