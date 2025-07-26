// NavbarRight.jsx
"use client";
import React, { useState } from "react";
import DropdownCart from "./DropdownCart";
import Link from "next/link";
import MobileMenuOpen from "@/components/shared/buttons/MobileMenuOpen";
import useIsTrue from "@/hooks/useIsTrue";
import LoginButton from "./LoginButton";
import NavItems from "./NavItems";

const NavbarRight = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
  const isHome2Dark = useIsTrue("/home-2-dark");

  return (
    <div className="lg:col-start-8 lg:col-span-5 relative">
      <div className="flex items-center justify-end">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-end items-center whitespace-nowrap space-x-4">
          {/* {!isHome2Dark && (
            <li className="px-5 py-4 group transition-all duration-300 hover:bg-gray-100 rounded-lg">
              <DropdownCart />
            </li>
          )} */}
          <NavItems />
          {/* Removed user/profile icon button */}
        </ul>

        {/* Mobile Menu Button and Login Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#"
            className="loginButton login text-xs font-normal sm:text-sm md:text-md lg:text-md bg-gradient-to-r from-[#FF5722] to-orange-600 text-white rounded-lg px-3 py-1 shadow border border-[#FF5722] hover:bg-white hover:text-[#FF5722] transition-all duration-300"
          >
            Log In
          </a>
          <MobileMenuOpen onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
          <NavItems isMobile />
          {/* {!isHome2Dark && (
            <div className="mt-4">
              <DropdownCart />
            </div>
          )} */}
          {!(isHome4 || isHome4Dark || isHome5 || isHome5Dark) && (
            <div className="mt-4">
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarRight;