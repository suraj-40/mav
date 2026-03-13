"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { jobListings } from "@/components/sections/careers/CareerData";
import JobApplicationModal from "@/components/sections/careers/JobApplicationModal";
import HeaderTop from "@/components/layout/header/HeaderTop";
import MobileItems3 from '@/components/layout/header/MobileItems3';
import MobileMenuOpen from '@/components/shared/buttons/MobileMenuOpen';
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

export default function Careers() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalJobTitle, setModalJobTitle] = useState("");

  // Fade animation variants for heading
  const fadeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bodyBg dark:bg-bodyBg-dark">
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      <div className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 pt-12 md:pt-20 pb-16">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeVariants}
          className="mb-8 sm:mb-12 lg:mb-16 text-center relative"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent"
            variants={fadeVariants}
          >
            Career Opportunities
          </motion.h1>
          <p className="text-lg text-gray-700 mt-4">
            Join our team and make a difference in education
          </p>
        </motion.div>

        {/* Branch selection removed - Showing Ullal branch by default */}


        {/* Job Listings */}
        <div className="grid gap-6 mt-6 sm:gap-8 sm:mt-8">
          {jobListings['ullal'].length === 0 && (
            <div className="text-center text-gray-500 py-12">No job openings currently.</div>
          )}
          {jobListings['ullal'].map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-orange-100"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="w-full min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-primary">{job.position || job.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Qualification:</span> {job.qualification}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Job Description:</span> {job.jobDescription || (job.responsibilities ? job.responsibilities.join(' ') : '')}</p>
                  {job.subjectRequirement && (
                    <p className="text-gray-700 mb-4"><span className="font-semibold">Subject Requirement:</span> {job.subjectRequirement}</p>
                  )}
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 min-w-[120px] w-full md:w-auto">
                  {/* <span className={`px-4 py-1 rounded-full text-sm font-semibold self-start md:self-auto ${
                    job.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {job.status}
                  </span> */}
                  <a
                    href="https://forms.gle/Qbge2oy947za1t9f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto font-normal sm:text-sm md:text-md lg:text-md bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-lg px-2 md:px-3 py-2 hover:bg-white border-2 border-[#FF5722] shadow-md hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Apply
                  </a>
                </div>
              </div>
              {/* Removed bottom Apply Now button as per new placement */}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}