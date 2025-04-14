"use client";
import { motion } from "framer-motion";

const MobileMenuContainer = ({ children }) => {
  return (
    <motion.ul
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.ul>
  );
};

export default MobileMenuContainer;