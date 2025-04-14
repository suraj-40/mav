"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SubMenuItem = ({ item, isDarkMode, level = 0 }) => {
  const pathname = usePathname();
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  
  const isActive = item.path && pathname === item.path;
  const isNonNavigable = ["Our Leaders"].includes(item.name) || !item.path;
  const hasDropdown = item.dropdown && Array.isArray(item.dropdown) && item.dropdown.length > 0;

  // Animation variants for nested submenus
  const nestedMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <li className="relative">
      {isNonNavigable ? (
        <div 
          className={`
            flex items-center justify-between p-2 rounded-lg
            ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}
            transition-all duration-300 cursor-pointer
          `}
          onClick={() => hasDropdown && setIsNestedOpen(!isNestedOpen)}
        >
          <span
            className={`
              text-md font-medium
              ${isActive
                ? "text-secondaryColor"
                : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-secondaryColor"
              }
              transition-colors duration-300
            `}
          >
            {item.name}
          </span>
          {hasDropdown && (
            <motion.div
              animate={{ rotate: isNestedOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} className={
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } />
            </motion.div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`
            block p-2 rounded-lg text-md relative group
            ${isActive
              ? "text-secondaryColor font-medium"
              : isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-secondaryColor"
            }
            transition-all duration-300
            ${isDarkMode ? "hover:bg-gray-700/50" : "hover:bg-gray-100/80"}
          `}
        >
          {item.name}
          {/* Active indicator */}
          {isActive && (
            <span className="absolute left-0 -ml-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondaryColor rounded-full"></span>
          )}
          {/* Hover indicator */}
          <span className={`
            absolute bottom-0 left-1/2 transform -translate-x-1/2
            w-0 h-0.5 bg-secondaryColor/70 rounded
            transition-all duration-300 group-hover:w-3/4
            ${isActive ? "opacity-0" : "opacity-100"}
          `}></span>
        </Link>
      )}
      
      {/* Render nested submenu if needed */}
      <AnimatePresence>
        {hasDropdown && isNestedOpen && (
          <motion.ul
            className={`pl-4 mt-2 space-y-2 overflow-hidden border-l-2 ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={nestedMenuVariants}
          >
            {item.dropdown.map((subItem, idx) => (
              <SubMenuItem 
                key={idx} 
                item={subItem} 
                isDarkMode={isDarkMode} 
                level={level + 1}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const MobileSubMenu = ({ items, isDarkMode }) => {
  const subMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1 
      } 
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  // Handle invalid items prop
  if (!Array.isArray(items)) {
    console.error("Invalid items prop in MobileSubMenu:", items);
    return null;
  }

  return (
    <motion.ul
      className="pl-4 mt-2 overflow-hidden space-y-2 border-l-2 border-gray-200 dark:border-gray-700"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={subMenuVariants}
    >
      {items.map((item, idx) => {
        // Skip invalid items
        if (!item || typeof item !== "object") {
          console.error("Invalid item in MobileSubMenu:", item);
          return null;
        }

        return (
          <motion.div key={idx} variants={itemVariants}>
            <SubMenuItem item={item} isDarkMode={isDarkMode} />
          </motion.div>
        );
      })}
    </motion.ul>
  );
};

export default MobileSubMenu;