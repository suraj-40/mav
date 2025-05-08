"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaChevronDown,
  FaRegNewspaper,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import {
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import {
  MdOutlineAssignment,
  MdOutlineLogout,
  MdOutlineQuiz,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { Globe, LogOut, User } from "lucide-react";

export default function UserDropdown() {
  const [username, setUsername] = useState(null);
  const [initial, setInitial] = useState(null);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : null;
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      const onlyStringUsername = storedUsername.replace(/[0-9]/g, "");
      setUsername(onlyStringUsername);
      setInitial(getInitial(onlyStringUsername));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setInitial(null);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <div className="flex flex-row items-center gap-4 sm:gap-6">
      <div className="relative">
        <AnimatePresence mode="wait">
          {!username ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className="loginButton login text-xs font-normal sm:text-sm md:text-md lg:text-md bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-lg px-1 md:px-3 py-2 hover:bg-white  border-2 border-[#FF5722] shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* <Globe className="mr-2" size={18} /> */}
                Log In
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="post-login"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className="postLogin goToAccountButton text-xs font-normal sm:text-sm md:text-md lg:text-md bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-lg px-1 md:px-3 py-2 hover:bg-white  border-2 border-[#FF5722] shadow-md hover:shadow-lg transition-all duration-300"
                style={{ display: "none" }}
              >
                ATOMS
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {username && (
        <div className="relative group">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-full text-sm sm:text-base font-semibold border-2 border-[#FF5722] shadow-md group-hover:bg-white  group-hover:shadow-lg transition-all duration-300">
              {initial}
            </div>
          </motion.div>

          <AnimatePresence>
            <motion.div
              className="absolute right-0 top-11 hidden group-hover:block w-56 sm:w-44 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="p-4 flex items-center space-x-4 bg-gradient-to-r from-[#FF5722]/5 to-orange-600/5">
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-full text-base font-semibold shadow-sm">
                  {initial}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">{username}</p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="border-b">
                <a
                  href="#"
                  className="goToAccountButton cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center border-l-2 border-white hover:border-l-2 hover:border-[#FF5722] text-sm sm:text-base transition-all duration-200"
                >
                  <AiOutlineUser className="mr-2 text-lg text-gray-600" /> ATOMS
                </a>
                <a
                  href="#"
                  className="postLogin logout cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center border-l-2 border-white hover:border-l-2 hover:border-[#FF5722] text-sm sm:text-base transition-all duration-200"
                  onClick={handleLogout}
                >
                  <div className="flex cursor-pointer text-gray-700 items-center">
                    <MdOutlineLogout className="mr-2 text-lg text-gray-600" /> Log Out
                  </div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}