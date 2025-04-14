"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import useIsTrue from "@/hooks/useIsTrue";
import { motion, AnimatePresence } from "framer-motion";
import MobileSubMenu from "./MobileSubMenu";
import { ChevronDown } from "lucide-react";

const MobileMenuItem = ({ item }) => {
  const pathname = usePathname();
  const isHome2Dark = useIsTrue("/home-2-dark");
  const isDarkMode = !!isHome2Dark;
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Check if the current path matches the item path or its submenu paths
  useEffect(() => {
    // Check direct path match
    if (item?.path && pathname === item.path) {
      setIsActive(true);
      return;
    }
    
    // Check if any dropdown items match the current path
    if (item?.dropdown?.props?.children?.props?.items) {
      const subItems = item.dropdown.props.children.props.items;
      const hasActiveChild = subItems.some(subItem => 
        subItem.path && pathname.includes(subItem.path)
      );
      setIsActive(hasActiveChild);
    }
  }, [pathname, item]);

  // Handle invalid item
  if (!item) {
    console.error("Invalid item prop:", item);
    return null;
  }

  // Define non-navigable items by name
  const isNonNavigable = ["NEP", "About Us"].includes(item.name);
  const hasDropdown = item.accordion && item.dropdown;

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  // Chevron animation variants
  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <motion.li
      className="w-full mb-3"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className={`
          relative overflow-hidden group
          ${isActive 
            ? "bg-gradient-to-r from-secondaryColor to-orange-500 text-white" 
            : isDarkMode 
              ? "bg-gray-800 text-gray-200" 
              : "bg-white text-gray-800"
          }
          ${hasDropdown ? "cursor-pointer" : ""}
          rounded-xl shadow-md hover:shadow-lg transition-all duration-300
        `}
        onClick={() => hasDropdown && setIsOpen(!isOpen)}
      >
        {/* Highlight effect */}
        <div 
          className={`
            absolute inset-0 w-full h-full transition-all duration-500 
            ${isActive 
              ? "opacity-0" 
              : isDarkMode 
                ? "bg-gray-700 opacity-0 group-hover:opacity-100" 
                : "bg-gray-50 opacity-0 group-hover:opacity-100"
            }
          `}
        />

        <div className="flex items-center justify-between p-4 relative z-10">
          {isNonNavigable || !item.path ? (
            <span className="text-lg font-medium w-full">
              {item.name}
              {isActive && !hasDropdown && (
                <div className="h-1 w-12 bg-white rounded-full mt-1 transition-all" />
              )}
            </span>
          ) : (
            <Link href={item.path} className="text-lg font-medium w-full block">
              {item.name}
              {isActive && !hasDropdown && (
                <div className="h-1 w-12 bg-white rounded-full mt-1 transition-all" />
              )}
            </Link>
          )}

          {hasDropdown && (
            <motion.div
              variants={chevronVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="text-xl flex items-center justify-center"
            >
              <ChevronDown size={20} />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {hasDropdown && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden ml-4 mt-2"
          >
            <MobileSubMenu items={item.dropdown} isDarkMode={isDarkMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default MobileMenuItem;