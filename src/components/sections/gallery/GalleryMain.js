"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCard from "@/components/ui/GalleryCard";
import img1 from "@/assets/images/cultural/01. Ramayanotsavam.png";
import img2 from "@/assets/images/cultural/02. Gita Jayanti.png";
import img3 from "@/assets/images/cultural/03. Guru Charana Pooja.png";
import img4 from "@/assets/images/cultural/04. Baala-kauthukam.png";
import img5 from "@/assets/images/cultural/05. Jnanatarang.png";
import img6 from "@/assets/images/cultural/06. Market Day.png";
import img7 from "@/assets/images/cultural/07. Bhashaavali.png";
import img8 from "@/assets/images/cultural/8. Montessori Observation.png";
import img9 from "@/assets/images/cultural/09. Guru Poornima.png";
import img10 from "@/assets/images/cultural/10. Ganeshostova.png";
import img11 from "@/assets/images/cultural/11. Yoga Day.png";
import img12 from "@/assets/images/cultural/12. Independence Day.png";
import img13 from "@/assets/images/cultural/13. Karnataka Rajyothsava.png";
import img14 from "@/assets/images/cultural/14. Investiture Ceremony.png";
import img15 from "@/assets/images/cultural/15. Deepothsavam.png";
import img16 from "@/assets/images/cultural/16. Environment Day.png";

const ullalActivities = [
  {
    id: 1,
    title: "Ramayanotsavam",
    image: img1,
    description:
      "A celebration of the epic Ramayana through cultural performances and storytelling.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Gita Jayanti",
    image: img2,
    description:
      "Commemorating the sacred Bhagavad Gita through recitations and spiritual discussions.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Guru Charana Pooja",
    image: img3,
    description:
      "A traditional ceremony honoring teachers and their invaluable guidance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Baala kauthukam",
    image: img4,
    description:
      "A joyful children's festival celebrating creativity and talent.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Jnanatarang",
    image: img5,
    description:
      "An intellectual event promoting knowledge sharing and academic excellence.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Market Day",
    image: img6,
    description:
      "Students learn entrepreneurship through organizing and participating in a market.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Bhashaavali",
    image: img7,
    description:
      "A celebration of languages promoting multilingual skills and cultural diversity.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Montessori Observation",
    image: img8,
    description:
      "Showcasing the Montessori methodology in practice for parents and educators.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const srigandhkavalActivities = [
  {
    id: 1,
    title: "Guru Poornima",
    image: img9,
    description:
      "A sacred day dedicated to honoring teachers and spiritual guides.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Ganeshostova",
    image: img10,
    description:
      "Celebrating Lord Ganesha through prayers, music, and cultural programs.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Yoga Day",
    image: img11,
    description:
      "Promoting holistic wellness through yoga practices and mindfulness.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Independence Day",
    image: img12,
    description:
      "Patriotic celebrations commemorating India's independence and heritage.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Karnataka Rajyothsava",
    image: img13,
    description: "Honoring the rich culture and formation of Karnataka state.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Investiture Ceremony",
    image: img14,
    description: "Formal installation of student leaders and representatives.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Deepothsavam",
    image: img15,
    description:
      "Festival of lights celebrating the triumph of good over evil.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Environment Day",
    image: img16,
    description: "Promoting environmental awareness and sustainable practices.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const videoActivities = [
  ...ullalActivities.map((activity) => ({ ...activity, branch: "ullal" })),
  ...srigandhkavalActivities.map((activity) => ({
    ...activity,
    branch: "srigandhkaval"
  }))
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tabVariants = {
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  inactive: {
    scale: 1,
    transition: { duration: 0.3 }
  },
  tapped: {
    scale: 1.08,
    backgroundColor: "rgba(255, 87, 34, 0.1)",
    transition: { duration: 0.2 }
  }
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const GalleryMain = () => {
  const [mainTab, setMainTab] = useState("videos");
  const [activeBranchTab, setActiveBranchTab] = useState("srigandhkaval");
  const [isLoaded, setIsLoaded] = useState(false);
  const [tappedTab, setTappedTab] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Reset expanded card and branch tab when switching main tabs
  useEffect(() => {
    setExpandedCardId(null);
    if (mainTab === "photos") {
      setActiveBranchTab("srigandhkaval");
    }
  }, [mainTab]);

  // Reset expanded card when switching branch tabs
  useEffect(() => {
    setExpandedCardId(null);
  }, [activeBranchTab]);

  const handleTabTap = (tab) => {
    setTappedTab(tab);
    setTimeout(() => setTappedTab(null), 300);
  };

  const toggleCardExpand = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeVariants}
        className="mb-8 sm:mb-12 lg:mb-16 text-center relative"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-bold  tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
            Gallery
          </span>
        </motion.h1>

        {/* <motion.h2
          className="text-av text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 bg-gradient-to-r from-av to-avorange bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Celebrating Our School&#39;s Vibrant Moments
        </motion.h2> */}
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover our vibrant events, achievements, and celebrations.
        </motion.p>
        <motion.div
          className="flex justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg width={180} height={30} viewBox="0 0 180 30">
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
      </motion.div>

      {/* Main Tabs (Videos/Photos) */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex bg-white rounded-full shadow-lg p-1.5 sm:p-2">
          <motion.button
            variants={tabVariants}
            animate={
              mainTab === "videos"
                ? "active"
                : tappedTab === "videos"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setMainTab("videos");
              handleTabTap("videos");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              mainTab === "videos"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Videos
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={
              mainTab === "photos"
                ? "active"
                : tappedTab === "photos"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setMainTab("photos");
              handleTabTap("photos");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              mainTab === "photos"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Photos
          </motion.button>
        </div>
      </div>

      {/* Branch Tabs (Only for Photos) */}
      <AnimatePresence>
        {mainTab === "photos" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-white/90 rounded-full shadow-md p-1.5">
              <motion.button
                variants={tabVariants}
                animate={
                  activeBranchTab === "srigandhkaval" ? "active" : "inactive"
                }
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveBranchTab("srigandhkaval")}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                  activeBranchTab === "srigandhkaval"
                    ? "bg-avorange text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Srigandhkaval Branch
              </motion.button>
              <motion.button
                variants={tabVariants}
                animate={activeBranchTab === "ullal" ? "active" : "inactive"}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveBranchTab("ullal")}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                  activeBranchTab === "ullal"
                    ? "bg-avorange text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Ullal Branch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mainTab}-${activeBranchTab}`}
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
            {mainTab === "photos"
              ? (activeBranchTab === "ullal"
                  ? ullalActivities
                  : srigandhkavalActivities
                ).map((activity) => (
                  <GalleryCard
                    key={activity.id}
                    {...activity}
                    activityId={`${activeBranchTab}-${activity.id}`}
                    isExpanded={
                      expandedCardId === `${activeBranchTab}-${activity.id}`
                    }
                    toggleExpand={toggleCardExpand}
                    showVideo={false}
                    videoDisabled={true}
                  />
                ))
              : videoActivities.map((activity) => (
                  <GalleryCard
                    key={`${activity.branch}-${activity.id}`}
                    {...activity}
                    activityId={`${activity.branch}-${activity.id}`}
                    isExpanded={
                      expandedCardId === `${activity.branch}-${activity.id}`
                    }
                    toggleExpand={toggleCardExpand}
                    showVideo={true}
                    videoDisabled={true}
                  />
                ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-avorange opacity-5 blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-av opacity-5 blur-xl -z-10"></div>
    </section>
  );
};

export default GalleryMain;
