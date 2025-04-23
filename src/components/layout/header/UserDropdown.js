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

export default function UserDropdown() {
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
        <a
          href="#"
          className="loginButton login text-xs font-normal sm:text-sm md:text-md lg:text-md  bg-avorange text-white rounded px-1 md:px-3 py-2 hover:bg-white hover:text-avorange border-2 border-avorange "
        >
          {/* <Globe className="mr-2" size={18} /> */}
          ATOMS
        </a>
      </div>
      {/* <a href="#" className='postLogin goToAccountButton mx-3  bg-orange text-white rounded px-1 md:px-3  hover:bg-white hover:text-orange border-2 border-orange'  style={{display: 'none'}}>ATOMS</a> */}
      <div>
        <div className="relative group postLogin" style={{ display: "none" }}>
          <div className="flex items-center cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center bg-orange text-white rounded-full text-sm font-semibold transition-all duration-300 group-hover:scale-110 group-hover:orange group-hover:bg-white group-hover:text-orange border-2 border-orange">
              {initial}
              {/* || (<img prioriy="false" src={"/images/user.png"} alt="logo" /> ) */}
                  
            </div>
          </div>

          {/* Dropdown menu */}
          <div className="absolute right-0 hidden group-hover:block w-48 bg-white border-b transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
            <div className="p-4 text-sm text-gray-700 flex items-center space-x-4">
              {/* Circle with User Initial in Dropdown */}
              <div className="w-8 h-8 flex items-center justify-center bg-orange text-white rounded-full text-lg font-semibold">
                {initial}
              </div>
              <div>
                <p className="font-semibold">{username}</p>
              </div>
            </div>
            
            <hr />
            <div className="border-b ">
              {/* <a href="#" className="goToAccountButton cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200 flex items-center border-l-2 border-white hover:border-l-2 hover:border-orange">
                  <AiOutlineUser  className="mr-2 text-lg text-gray-600" /> ATOMS
              </a> */}
              <a
                href="#"
                className="flex postLogin logout cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200  items-center border-l-2 border-white hover:border-l-2 hover:border-orange "
              >
                <div className="flex cursor-pointer text-gray-700 items-center">
                  <MdOutlineLogout className="mr-2 text-lg text-gray-600" /> Log
                  Out
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}