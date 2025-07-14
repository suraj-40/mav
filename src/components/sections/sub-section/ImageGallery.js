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
import avecosystemImage1 from "@/assets/images/avecosystem/avecosystem1.jpg";
import avecosystemImage2 from "@/assets/images/avecosystem/01.jpg";
import avecosystemImage3 from "@/assets/images/avecosystem/03.jpg";
import avecosystemImage4 from "@/assets/images/avecosystem/02.jpg";
import avecosystemImage5 from "@/assets/images/avecosystem/avecosystem6.jpg";
import avecosystemImage6 from "@/assets/images/avecosystem/avecosystem8.jpg";
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

const ImageGallery = ({ gallary }) => {
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null); // Track hover state for each card
  const [tappedButton, setTappedButton] = useState(false);

  const allImages = [
    { src: avecosystemImage1, title: "Ecosystem 1" },
    { src: avecosystemImage2, title: "Ecosystem 2" },
    { src: avecosystemImage3, title: "Ecosystem 3" },
    { src: avecosystemImage4, title: "Ecosystem 4" },
    { src: avecosystemImage5, title: "Ecosystem 5" },
    { src: avecosystemImage6, title: "Ecosystem 6" }
  ];
  const images = gallary ? allImages.slice(0, 6) : [...allImages];

  // Automatic image change
  useEffect(() => {
    if (isModalOpen && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval); // Clear interval on modal close or unmount
    }
  }, [isModalOpen, images.length]);

  const handleButtonTap = () => {
    setTappedButton(true);
    setTimeout(() => setTappedButton(false), 300);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleGoToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="my-12 md:my-20">
      <div className="text-center mb-8 md:mb-12">
        <motion.h1
          className="text-3xl md:text-7xl font-bold tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          {(!gallary && !isHome10 && !isHome10Dark) ? (
            <Link href="/about-us/gallery">
              <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent cursor-pointer hover:underline">
                Gallery
              </span>
            </Link>
          ) : (
            <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
              Gallery
            </span>
          )}
        </motion.h1>

        <motion.div
          className="flex justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg
            className="w-[120px] h-[20px] sm:w-[180px] sm:h-[30px]" // Adjust size for mobile and larger screens
            viewBox="0 0 180 30"
          >
            <defs>
              <linearGradient
                id="headingUnderline"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M5,20 Q90,5 175,20"
              fill="none"
              stroke="url(#headingUnderline)"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="M5,20 Q90,5 175,20; M5,15 Q90,25 175,15; M5,20 Q90,5 175,20"
                calcMode="spline"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              />
            </path>
          </svg>
        </motion.div>
      </div>

      <div
        className={`${gallary ? "" : "container-fluid-2"} ${
          isHome10 || isHome10Dark
            ? "md:pt-100px md:pb-30px lg:pb-10px"
            : gallary
            ? ""
            : "mb-10"
        }`}
      >
        <div className="gallary-container">
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
                <div
                  className="relative bg-white rounded-xl w-full max-w-3xl shadow-2xl border border-gray-100"
                  onClick={(e) => e.stopPropagation()}
                >
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
                            src={images[currentImageIndex].src}
                            alt={`Gallery Image ${currentImageIndex + 1}`}
                            className="object-contain w-full h-full"
                            placeholder="blur"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-avorange/80 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-avorange/80 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}

                    {/* Navigation Dots */}
                    {images.length > 1 && (
                      <div className="flex justify-center space-x-2 py-3">
                        {images.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleGoToImage(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                              index === currentImageIndex
                                ? "bg-avorange"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className={
              gallary
                ? "grid grid-cols-3 gap-6"
                : "grid grid-cols-1 md:grid-cols-3 gap-6 md:p-30px p-5 lg:p-5 2xl:p-30px"
            }
          >
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onHoverStart={() => setIsHovered(idx)}
                onHoverEnd={() => setIsHovered(null)}
                onClick={() => handleImageClick(idx)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-full h-56 sm:h-64 md:h-80 lg:h-96 transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    placeholder="blur"
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    isHovered === idx ? "opacity-90" : "opacity-70"
                  }`}
                />

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered === idx ? 1 : 0,
                      scale: isHovered === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced View More Button - Tab style with rich animations */}
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
                    {/* Arrow with Pulse and Rotate */}
                    <ArrowRightCircle className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
              <ReadyJourneySection />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;