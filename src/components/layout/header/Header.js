"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import MobileMenu1 from "./MobileMenu1";
import HeaderTop from "./HeaderTop";
import useIsTrue from "@/hooks/useIsTrue";
import Aos from "aos";
import stickyHeader from "@/libs/stickyHeader";
import smoothScroll from "@/libs/smoothScroll";

const Header = () => {
  const isHome2 = useIsTrue("/home-2");
  const isHome2Dark = useIsTrue("/home-2-dark");

  useEffect(() => {
    stickyHeader();
    smoothScroll();
    // AOS Scroll Animation
    Aos.init({
      offset: 1,
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <header>
      <div>
        {/* header top */}
        
          <div className="block">
            <HeaderTop />
          </div>
        
        {/* navbar */}
        <Navbar />
        {/* mobile menu */}
        <MobileMenu1/>
      </div>
    </header>
  );
};

export default Header;