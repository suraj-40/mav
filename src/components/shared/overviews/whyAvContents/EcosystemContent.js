"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Brain, Network, Leaf } from "lucide-react";

const EcosystemContent = () => {
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
            A Futuristic & Nurturing Ecosystem
          </h2>
          <p className="text-foreground leading-relaxed mb-4 text-lg">
            At Agasthya Vidyanikethan, we place a high value on education that is both futuristic and environmentally conscious. Our approach is rooted in a vision that merges innovation with sustainability to foster holistic student growth.
          </p>
          <p className="text-foreground leading-relaxed text-lg">
            Experience learning in IoT-powered NEP-aligned classrooms, enriched with thoughtfully planned campuses designed for bagless learning. Our commitment goes beyond academics—ensuring a vibrant, inclusive, and empowering ecosystem for every learner.
          </p>
        </motion.div>
        <motion.div
          className="bg-green-50 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <Leaf className="w-16 h-16 text-green-500 mx-auto mb-4 transition-transform hover:rotate-12" />
            <h3 className="text-lg font-semibold text-foreground">Sustainable Campus</h3>
            <p className="text-muted-foreground text-sm mt-2">Learning in harmony with nature</p>
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
            <Network className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Smart Learning Infrastructure</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            Our learning spaces feature IoT-integrated, NEP-compliant classrooms that facilitate real-time feedback and adaptive teaching methodologies—preparing students to thrive in a digitally interconnected world.
          </p>
          <p className="text-foreground leading-relaxed mb-6 text-base">
            Every aspect of our environment is designed with intent—from collaborative project zones to quiet mindfulness areas—enhancing focus, creativity, and emotional well-being.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Brain className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Holistic Development</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            Our educational framework emphasizes mental, emotional, and physical well-being. We encourage independent thought, inquiry-based learning, and character-building to shape resilient and socially conscious individuals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Globe className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Inclusive & Collaborative Culture</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            We celebrate diversity and foster belonging through inclusive practices, mentorship programs, and collaborative initiatives that strengthen the school community and prepare students for global citizenship.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            Our balanced approach nurtures every student's potential, equipping them to meet future challenges with confidence and compassion.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EcosystemContent;
