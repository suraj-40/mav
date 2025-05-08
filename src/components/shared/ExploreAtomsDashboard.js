"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaChevronDown,
  FaRegNewspaper,
  FaUser,
  FaUserPlus
} from "react-icons/fa";
import {
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd
} from "react-icons/ai";
import {
  MdOutlineAssignment,
  MdOutlineLogout,
  MdOutlineQuiz,
  MdOutlineSubscriptions
} from "react-icons/md";
import { Globe } from "lucide-react";

export default function ExploreAtomsDashboard() {
  const [username, setUsername] = useState(null);
  const [initial, setInitial] = useState(null);

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      const onlyStringUsername = username.replace(/[0-9]/g, "");
      setUsername(onlyStringUsername);
      const initialval = getInitial(username);
      setInitial(initialval);
    }
  }, []);

  return (
    <div className="flex flex-row">
      <div className="md:flex justify-between space-x-1 md:space-x-4">
      <a href="#" className='loginButton login mt-8 px-6 py-3 bg-[#FF5722] text-white rounded-lg shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1'>Explore Dashboard</a>
      </div>
      <a href="#" className='postLogin goToAccountButton mt-8 px-6 py-3 bg-[#FF5722] text-white rounded-lg shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 transform hover:-translate-y-1'  style={{display: 'none'}}>ATOMS Dashboard</a>
      <div>
        
      </div>
    </div>
  );
}