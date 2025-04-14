"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Brain, Theater, LayoutDashboard } from "lucide-react";

const FuturisticApproachContent = () => {
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
            Preparing for Tomorrow
          </h2>
          <p className="text-foreground leading-relaxed mb-4 text-lg">
            In a constantly evolving world, Agasthya Vidyanikethan stands at the forefront of education with a futuristic approach.
            We recognize the necessity of preparing students for a rapidly changing global landscape.
          </p>
          <p className="text-foreground leading-relaxed text-lg">
            Our curriculum is designed not just to impart knowledge but to instill essential skills for success in the 21st century.
            Technology is seamlessly integrated into our teaching methods, ensuring students are not just consumers but also creators and innovators.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-light rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <Lightbulb className="w-16 h-16 text-primaryColor mx-auto mb-4 transition-transform hover:rotate-12" />
            <h3 className="text-lg font-semibold text-foreground">Innovation Hub</h3>
            <p className="text-muted-foreground text-sm mt-2">Where ideas transform into reality</p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border pt-8 space-y-6">
        {/* Communication Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <MessageSquare className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Communication Skills</span>
            
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            We at Agasthya Vidyanikethan do not compromise on communication. All of our students are excellent communicators,
            fluent in English and deeply appreciative of their mother tongue. They are rooted in cultural traditions and values.
          </p>
        </motion.div>

        {/* Critical Thinking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Brain className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Critical Thinking</span>
            
          </h3>
          <p className="text-foreground leading-relaxed text-base mb-4">
            As we advance into an era of AI, chatbots, and robotics, many jobs are being automated. The roles that will persist
            are those requiring critical thinking—an ability machines cannot replicate.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            To cultivate this, we've made chess a compulsory subject for over 10 years, enabling strategic thinking and
            problem-solving. Theatre classes help students overcome stage fear and gain confidence, while our Montessori
            classroom setup encourages hands-on, experience-based learning.
          </p>
        </motion.div>

        {/* Global Perspective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Theater className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Global Perspective</span>
           
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Through international exchange programs and global collaboration, our students develop the cultural awareness
            and mindset of global citizens—ready to make an impact beyond borders.
          </p>
        </motion.div>

        {/* Technology Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <LayoutDashboard className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Technology Integration</span>
            
          </h3>
          <p className="text-foreground leading-relaxed text-base mb-4">
            Our classrooms are equipped with smart technology—interactive boards, digital platforms, and seamless online access—
            ensuring every student is comfortable using tools that define modern workspaces.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            We support in-person and remote learning through robust digital infrastructure, so learning never stops.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticApproachContent;
