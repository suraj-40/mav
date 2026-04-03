"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import checkProfile from "@/assets/images/registration-path/check-profile.png";
import apply from "@/assets/images/registration-path/apply.png";
import createFile from "@/assets/images/registration-path/create-file.png";
import handshake from "@/assets/images/registration-path/handshake.png";
import confirm from "@/assets/images/registration-path/confirm.png";

// ── Custom Premium SVG Icons ──────────────────────────────────────────────────

const IconRegister = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    {/* Person silhouette */}
    <circle cx="20" cy="13" r="5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.5 33c0-6.351 5.149-11.5 11.5-11.5s11.5 5.149 11.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Verified badge */}
    <circle cx="31" cy="10" r="6" fill="#EA5529" />
    <path d="M28.2 10l1.8 1.8 3-3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconApply = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    {/* Document */}
    <rect x="8" y="5" width="19" height="26" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M13 13h9M13 18h9M13 23h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Folded corner */}
    <path d="M22 5v5.5H27.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Coin / fee */}
    <circle cx="30" cy="30" r="7" fill="#EA5529" />
    <path d="M30 26.5v7M27.5 28.2c0-.94.9-1.7 2.5-1.7s2.5.76 2.5 1.7c0 1-.94 1.5-2.5 1.5s-2.5.56-2.5 1.6c0 .94.9 1.7 2.5 1.7s2.5-.76 2.5-1.7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconAssessment = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    {/* Easel / board */}
    <rect x="6" y="7" width="28" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    {/* Chart bars */}
    <rect x="12" y="18" width="4" height="6" rx="1" fill="currentColor" opacity="0.25" />
    <rect x="18" y="14" width="4" height="10" rx="1" fill="currentColor" opacity="0.45" />
    <rect x="24" y="11" width="4" height="13" rx="1" fill="#EA5529" />
    {/* Trend line */}
    <path d="M12 20l6-5 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.5 2" />
    {/* Legs */}
    <path d="M20 27v8M13 35l7-8 7 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconInteraction = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    {/* Left bubble */}
    <path d="M4 9a3 3 0 013-3h13a3 3 0 013 3v9a3 3 0 01-3 3H9l-5 4V9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    {/* Dots */}
    <circle cx="10.5" cy="13.5" r="1.3" fill="currentColor" />
    <circle cx="15.5" cy="13.5" r="1.3" fill="currentColor" />
    {/* Right accent bubble */}
    <path d="M22 19h7a3 3 0 013 3v7a3 3 0 01-3 3h-3l-4 3V22a3 3 0 013-3z" fill="#EA5529" opacity="0.15" stroke="#EA5529" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="27" cy="25.5" r="1.2" fill="#EA5529" />
    <circle cx="31" cy="25.5" r="1.2" fill="#EA5529" />
  </svg>
);

const IconConfirmation = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    {/* Ribbon / rosette */}
    <path d="M20 4l2.8 5.2 6 .6-4.2 4.3 1.1 5.9L20 17.3l-5.7 2.7 1.1-5.9L11.2 9.8l6-.6L20 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    {/* Big check fill */}
    <circle cx="20" cy="27" r="9" fill="#EA5529" />
    <path d="M15.5 27l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Steps Data ────────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Register & Verify",
    description: "Fill the form, verify your mobile & E-mail ID.",
    icon: (
      <Image
        src={checkProfile}
        alt="Register & Verify"
        width={100}
        height={100}
        className="w-full h-full object-contain scale-110"
      />
    ),
    step: "01",
    accent: "#182153"
  },
  {
    title: "Apply Now",
    description: "Submit the application form with the fee.",
    icon: (
      <Image
        src={apply}
        alt="Apply Now"
        width={100}
        height={100}
        className="w-full h-full object-contain scale-110"
      />
    ),
    step: "02",
    accent: "#EA5529"
  },
  {
    title: "Assessment",
    description: "Student Proficiency Assessment at campus.",
    icon: (
      <Image
        src={createFile}
        alt="Assessment"
        width={100}
        height={100}
        className="w-full h-full object-contain scale-110"
      />
    ),
    step: "03",
    accent: "#182153"
  },
  {
    title: "Interaction",
    description: "Scheduled meeting with the academic team.",
    icon: (
      <Image
        src={handshake}
        alt="Interaction"
        width={100}
        height={100}
        className="w-full h-full object-contain scale-110"
      />
    ),
    step: "04",
    accent: "#EA5529"
  },
  {
    title: "Confirmation",
    description: "Block the seat within 7 days of the letter.",
    icon: (
      <Image
        src={confirm}
        alt="Confirmation"
        width={100}
        height={100}
        className="w-full h-full object-contain scale-110"
      />
    ),
    step: "05",
    accent: "#182153"
  }
];

// ── Component ─────────────────────────────────────────────────────────────────

const AdmissionSteps = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0C0E2B] overflow-hidden">
      <div className="container px-4 mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.3em] text-[#EA5529] uppercase bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-100 dark:border-orange-900/30"
          >
            Admission Steps
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#182153] dark:text-white mb-6 lg:-mb-2 tracking-tight"
          >
            Your Child's <span className="text-[#EA5529]">Path to Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Simplified enrollment for Bengaluru's premier educational experience.
          </motion.p>
        </div>

        {/* ── Desktop Horizontal View ── */}
        <div className="hidden lg:flex items-start justify-between relative max-w-7xl mx-auto px-10 h-[320px]">

          {/* Static line track */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, ease: "easeOut" }}
              className="relative z-10 w-[18%] group"
            >
              {/* Animated connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  style={{ transformOrigin: "left center" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.18, ease: "easeInOut" }}
                  className="absolute top-[52px] left-1/2 w-full h-[2px] bg-gradient-to-r from-[#182153] to-[#EA5529] dark:from-[#EA5529] dark:to-[#182153] z-0"
                />
              )}

              <div className="flex flex-col items-center">
                <div className="relative mb-8">

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
                      w-[104px] h-[104px] rounded-[28px]
                      flex items-center justify-center
                      text-[#182153] dark:text-white
                      transition-colors duration-300
                      relative overflow-hidden
                    "
                  >
                    {/* Subtle radial glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_60%_40%,rgba(234,85,41,0.07),transparent_70%)]" />

                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Connector dot */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#EA5529] border-2 border-white dark:border-[#0C0E2B] shadow-md group-hover:scale-[1.6] transition-transform duration-300" />
                </div>

                <div className="text-center px-1">
                  <p className="text-[9px] font-black tracking-[0.25em] text-slate-300 dark:text-slate-600 uppercase mb-1.5">
                    Step {step.step}
                  </p>
                  <h3 className="text-[15px] font-bold text-[#182153] dark:text-white mb-2 group-hover:text-[#EA5529] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile View ── */}
        <div className="lg:hidden space-y-4 max-w-lg mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-[#182153]/20 border border-slate-100 dark:border-slate-800 hover:border-[#EA5529]/40 hover:bg-white dark:hover:bg-[#182153]/40 group transition-all duration-300"
            >
              {/* Icon tile */}
              <div className="flex-shrink-0 w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-[#182153] dark:text-white transition-all duration-300">
                {step.icon}
              </div>

              <div className="min-w-0">
                <span className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.22em]">
                  Step {step.step}
                </span>
                <h3 className="text-base font-bold text-[#182153] dark:text-white mb-0.5 group-hover:text-[#EA5529] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-snug">
                  {step.description}
                </p>
              </div>

              {/* Arrow hint */}
              <div className="flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#EA5529]">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionSteps;