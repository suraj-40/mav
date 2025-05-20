"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabVariants = {
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  inactive: {
    scale: 1,
    transition: { duration: 0.3 }
  }
};

const BranchTabs = ({ mainTab, activeBranchTab, setActiveBranchTab }) => {
  return (
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
  );
};

export default BranchTabs;