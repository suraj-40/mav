"use client";
import React, { useState, useEffect, useRef } from "react";
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
import avecosystemImage4 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img2.png";
import avecosystemImage5 from "@/assets/images/gallery/srigandhakaval/GuruPurnima/img2.png";
import avecosystemImage6 from "@/assets/images/gallery/srigandhakaval/InternationalYogaDay/img4.png";
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

const srigandhakavalImages = [
  { src: avecosystemImage4, title: "Srigandhakaval 1" },
  { src: avecosystemImage5, title: "Srigandhakaval 2" },
  { src: avecosystemImage6, title: "Srigandhakaval 3" }
];

const allImages = [
  { src: avecosystemImage1, title: "Ecosystem 1" },
  { src: avecosystemImage2, title: "Ecosystem 2" },
  { src: avecosystemImage3, title: "Ecosystem 3" },
  { src: avecosystemImage4, title: "Ecosystem 4" },
  { src: avecosystemImage5, title: "Ecosystem 5" },
  { src: avecosystemImage6, title: "Ecosystem 6" }
];

const ImageGallery = ({ gallary }) => {
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [currentImages, setCurrentImages] = useState([]);
  const [tappedButton, setTappedButton] = useState(false);
  const [activeTab, setActiveTab] = useState("ullal");
  const [animating, setAnimating] = useState(false);
  const tabRefs = useRef([]);

  // Initialize current images
  useEffect(() => {
    const initialImages = gallary 
      ? allImages.slice(0, 6) 
      : activeTab === "ullal" 
        ? ullalImages 
        : srigandhakavalImages;
    setCurrentImages(initialImages);
  }, [gallary, activeTab]);

  // Handle image click for modal
  const handleImageClick = (index, images) => {
    setCurrentImageIndex(index);
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  // Tab change handler
  const handleTabChange = (key, idx) => {
    if (animating || activeTab === key) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(key);
      setCurrentImages(key === "ullal" ? ullalImages : srigandhakavalImages);
      setAnimating(false);
    }, 350);
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
      {/* Gallery header and controls here */}
      {(!gallary && !isHome10 && !isHome10Dark) && (
        <div className="flex justify-center my-4 md:m-30 md:my-12 px-2" data-aos="fade-up">
          <div className="flex w-full bg-white/95 rounded-lg shadow-md border border-gray-100 overflow-hidden gap-[2px]">
            {[
              { key: "ullal", title: "AV Ullal", name: "Agasthya Vidyanikethan - Ullal Branch" },
              { key: "srigandhakaval", title: "AV Srigandhakaval", name: "Agasthya Vidyanikethan - Srigandhakaval Branch" }
            ].map((tab, index) => (
              <motion.button
                key={tab.key}
                ref={el => (tabRefs.current[index] = el)}
                onClick={() => handleTabChange(tab.key, index)}
                className={`relative z-10 w-1/2 px-2 py-1 md:px-4 md:py-3 text-center font-medium text-[13px] md:text-base rounded-md md:rounded-xl transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab.key ? "bg-avorange text-white" : "bg-white text-gray-800 hover:bg-orange-50 hover:text-orange-700"}
                  ${index === 0 ? "rounded-l-md md:rounded-l-xl" : ""} ${index === 1 ? "rounded-r-md md:rounded-r-xl" : ""}
                  ${index !== 0 ? "border-l-2 border-white" : ""}`}
                disabled={animating}
                aria-selected={activeTab === tab.key}
                role="tab"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="block md:hidden">{tab.title}</span>
                <span className="hidden md:block">{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      )}

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
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex
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
        {activeTab === "ullal" ? (
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
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  isHovered === idx ? "opacity-90" : "opacity-70"
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {srigandhakavalImages.map((image, idx) => (
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
                onClick={() => handleImageClick(idx, srigandhakavalImages)}
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
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  isHovered === idx ? "opacity-90" : "opacity-70"
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
        )}
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