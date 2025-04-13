"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MobileItems3 from "./MobileItems3";
import useIsTrue from "@/hooks/useIsTrue";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome2Dark = useIsTrue("/home-2-dark");
  const isDarkMode = isHome2Dark;

  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0.8 },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-3 text-2xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
      >
        ☰
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 z-50 bg-gradient-to-br ${
              isDarkMode
                ? "from-gray-900 via-gray-800 to-black"
                : "from-white via-gray-50 to-gray-100"
            } backdrop-blur-md shadow-xl`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full p-6 text-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondaryColor to-orange-500">
                  Menu
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-4xl hover:text-secondaryColor transition-colors p-2 rounded-full"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <MobileItems3 />
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/contact"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-secondaryColor transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/support"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-secondaryColor transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;