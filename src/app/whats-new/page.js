"use client";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Why Foundational Years Matter: Building Skills Beyond the Classroom",
    date: "July 2025",
    author: "Agasthya Vidyanikethan School",
    image: "/images/blogs/foundational-years.jpg",
    excerpt:
      "The early years of a child's life are not just about ABCs and numbers. These years form the bedrock for everything that follows. At Agasthya Vidyanikethan School, we recognise that the real impact of education begins before formal schooling does. That is why our focus on Early Childhood Development goes beyond books and routines. It is about shaping the way children think, feel, and connect with the world.",
    slug: "why-foundational-years-matter",
  },
  // Future posts can be added here
];

const WhatsNew = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageWrapper>
      <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-16 text-center relative pt-20 px-4 md:px-10"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 opacity-50 blur-3xl -z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
          <motion.h1
            className="text-3xl md:text-7xl font-bold tracking-tight"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
              What&#39;s New
            </span>
          </motion.h1>
          
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the latest insights, updates, & stories from Agasthya Vidyanikethan School. Stay informed about our educational innovations, student achievements, & community initiatives.
          </motion.p>
          
          <motion.div
            className="flex justify-center mt-4 sm:mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg width={180} height={30} viewBox="0 0 180 30">
              <defs>
                <linearGradient id="headingUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
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

        {/* Blog Posts Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 italic">
                        By {post.author}
                      </span>
                      <Link 
                        href={`/whats-new/${post.id}`}
                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 group/link"
                      >
                        Read More
                        <svg 
                          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
            </div>
              </div>
                </motion.div>
              ))}
            </div>
            

          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default WhatsNew; 