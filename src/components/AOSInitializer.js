// components/AOSInitializer.js
"use client"; // Mark this as a Client Component

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1000ms duration
  }, []);

  return null; // This component doesn’t render anything visible
}