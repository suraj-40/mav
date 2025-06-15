"use client";
// import Image from 'next/image';
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaBell,
  FaChevronDown,
  FaRegNewspaper,
  FaUser,
  FaUserPlus
} from "react-icons/fa"; // Importing notification bell icon
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
import {
  IoIosNotificationsOutline,
  IoMdNotificationsOutline
} from "react-icons/io";

const SDKIntegration = ({ lmsDomain, subdomain }) => {
  const router = useRouter();

  useEffect(() => {
    // Load jQuery
    const jqueryScript = document.createElement("script");
    const sdkScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.integrity =
      "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
    jqueryScript.crossOrigin = "anonymous";
    document.body.appendChild(jqueryScript);

    const data = localStorage.getItem("https://atoms.av.school/");

    if (data) {
      console.log("..........");
      console.log(JSON.parse(data));
    }

    jqueryScript.onload = () => {
      // Load SDK script

      sdkScript.src = `${lmsDomain}/js-sdks/signup-sdk/signup-sdk.js?v=2.8`;
      document.body.appendChild(sdkScript);

      sdkScript.onload = () => {
        // Add custom styles
        if (typeof window.addStyles === "function") {
          window.addStyles(
            `body{ font-family: 'Intro' !important;} button{ margin-top:30px;}`
          );
        }

        // Load course bundle details
        // window.loadInstBundleDetails();
        if (typeof window.loadInstBundleDetails === "function") {
          window.loadInstBundleDetails();
          window.addStyles(
            `body{ font-family: 'Intro' !important;} button{ margin-top:30px;}`
          );
        } else {
          console.error("loadInstBundleDetails function not available.");
        }
      };
    };

    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(jqueryScript);
      //document.body.removeChild(sdkScript);
    };
  }, [router.pathname, lmsDomain]);

  return (
    <>
      <iframe
        className="iframe z-99"
        id="iframe"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10000,
          display: "none"
        }}
        src={`${lmsDomain}/js-sdks/signup-sdk/iframe.php?subdomain=${subdomain}`}
      ></iframe>
    </>
  );
};

export default SDKIntegration;
