"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const CulturalActivityCard = ({ id, image, activityId }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl shadow-lg group"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          src={image}
          alt={`Cultural Activity ${id}`}
          className="object-cover w-full h-56 sm:h-64 md:h-80 lg:h-96 transform transition-transform duration-700 ease-in-out group-hover:scale-110"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpgNwD9TvpgAAAABJRU5ErkJggg=="
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70" />
    </motion.div>
  );
};

export default CulturalActivityCard;