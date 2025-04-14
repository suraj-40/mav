"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Computer, Users, Target, Globe } from "lucide-react";

const OurMissionContent = () => {
  useEffect(() => {}, []);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-blue-light1 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">
            Our Guiding Purpose
          </h2>
          <p className="text-foreground leading-relaxed mb-4 text-lg">
            We are at the dawn of something extraordinary — nurturing the future with vibrant knowledge and seeding world-class education.
            Our mission is to inspire, educate, and empower the next generation of leaders while deeply rooted in culture and ethics.
          </p>
          <p className="text-foreground leading-relaxed text-lg">
            Agasthya Vidyanikethan is committed to a transformative educational journey — blending academic excellence with a holistic,
            value-driven approach. We don’t just teach subjects; we shape purpose-filled lives.
          </p>
        </motion.div>
        <motion.div
          className="bg-purple-50 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <Target className="w-16 h-16 text-purple-500 mx-auto mb-4 transition-transform hover:rotate-12" />
            <h3 className="text-lg font-semibold text-foreground">Purposeful Education</h3>
            <p className="text-muted-foreground text-sm mt-2">Learning with meaning and direction</p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Book className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Academic Excellence</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            We strive for more than grades — we cultivate curiosity, deep thinking, and lifelong learning. Our
            rigorous curriculum, innovative pedagogy, and dedicated educators empower students to unlock their full academic potential.
          </p>
          <p className="text-foreground leading-relaxed mb-6 text-base">
            Our campuses are growing — not to fill space, but to expand opportunity. Every new classroom is a portal to a brighter future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Computer className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Digital-First Thinking</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            Our custom-built software portal reflects our commitment to futuristic learning. Built with care, it equips our
            students with 21st-century skills while upholding timeless values.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Users className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Character & Culture</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            True education transcends books — it nurtures the heart and soul. Through cultural immersion, leadership
            initiatives, and ethical reflection, we empower students to live with integrity, compassion, and courage.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            Our mission is a blend of innovation and identity — planting a digital mandate on the grounds of culture, where each child grows
            not just as a student but as a changemaker.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Globe className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Global Citizenship</span>
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            We instill a global perspective grounded in local values. Our students are prepared to lead with awareness of their role in a
            complex world — mindful of sustainability, equity, and humanity’s shared future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMissionContent;
