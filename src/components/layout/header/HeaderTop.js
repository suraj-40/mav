"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import useIsTrue from "@/hooks/useIsTrue";
import "../../../assets/css/ticker.css";
import SDKIntegration from "@/components/SDKIntegration";
import UserDropdown from "./UserDropdown";
import { MdOutlineClose } from "react-icons/md";
import { CgMenuCheese } from "react-icons/cg";
import { useState } from "react";

// Improved ticker styles for better performance and responsiveness
const tickerStyles = `
  .ticker-wrap {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
  }
  .ticker {
    display: inline-block;
    animation: ticker 20s linear infinite;
    padding-left: 100%;
  }
  .ticker__item {
    display: inline-block;
    padding-right: 2rem;
  }
  @keyframes ticker {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .ticker:hover {
    animation-play-state: paused;
  }
  @media (max-width: 768px) {
    .ticker {
      animation: ticker 15s linear infinite;
    }
    .ticker__item {
      padding-right: 1rem;
    }
  }
`;

const HeaderTop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome1 = useIsTrue("/");
  const isHome1Dark = useIsTrue("/home-1-dark");
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
  const lmsDomain = "https://atoms.abc.courses/";
  const subdomain = "abc";

  const containerClass =
    isHome1 || isHome1Dark || isHome4 || isHome4Dark || isHome5 || isHome5Dark
      ? "lg:container 3xl:container2-lg"
      : "container 3xl:container-secondary-lg";

  return (
    <>
      {/* Inject ticker styles */}
      <style>{tickerStyles}</style>


      <div
        className="bg-gradient-to-r from-school-navy to-school-blue sticky top-0 z-50 border-b border-white/10"
        style={{ fontFamily: "var(--font-spartan), sans-serif" }}
      >
        <div className="4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-2 xl:py-3 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left Side - Ticker */}
            <div className="w-full md:w-2/6 overflow-hidden">
              <div className="ticker-wrap">
                <div className="ticker">
                  <div className="ticker__item">
                    <Link
                      href="https://av.school/application"
                      className="text-secondaryColor md:text-lg lg:text-xl hover:text-[#FF4F1E]/80 transition-colors duration-50"
                    >
                      Admissions Open for Academic Year 2025 - 2026
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Info & Social + Buttons */}
            <div className="w-full md:w-4/6 flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center gap-6 md:gap-10">
              {/* Contact Info */}
              <div className="hidden md:flex items-center flex-wrap gap-x-4 gap-y-2 text-sm md:text-base">
                <Link
                  href="tel:+91 7760776098"
                  className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                >
                  +91 7760776098
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href="tel:+91 7760776046"
                  className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                >
                  +91 7760776046
                </Link>
                <span className="text-gray-400">|</span>
                {/* <Link
                  href="mailto:info.sgk@av.school"
                  className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                >
                  info.sgk@av.school
                </Link> */}
              </div>
              
              {/* User Actions and Social Icons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full md:w-auto gap-4 sm:gap-6">
                {/* Buttons */}
                <div className="w-[120px] font-bold">
                  <SDKIntegration lmsDomain={lmsDomain} subdomain={subdomain} />
                  <UserDropdown />
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/@AgasthyaVidyaniketan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                  >
                    <Facebook size={18} className="md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/agasthyavidyanikethan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                  >
                    <Instagram size={18} className="md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="https://in.linkedin.com/company/agasthya-vidyanikethan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whiteColor hover:text-[#FF4F1E]/80 transition-colors duration-300"
                  >
                    <Linkedin size={18} className="md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;