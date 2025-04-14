"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Computer, Users } from "lucide-react";

const QualityEducationContent = () => {
  // Remove unused AOS effect if AOSInitializer is in layout.js
  useEffect(() => {}, []); // Empty dependency array to avoid warnings

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
            Excellence in Education
          </h2>
          <p className="text-foreground leading-relaxed mb-4 text-lg">
            The first topic we covered in the Thinktank management discussion was the quality of education. Our focus
            remains on ensuring an enriching and effective learning experience for all students.
          </p>
          <p className="text-foreground leading-relaxed text-lg">
            At Agasthya Vidyanikethan, we take immense pride in delivering quality education that goes beyond
            conventional teaching methods. Our commitment to academic excellence is reflected in our dedicated faculty,
            who serve not just as educators but as mentors guiding students on their journey of knowledge acquisition.
          </p>
        </motion.div>
        <motion.div
          className="bg-blue-light rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <GraduationCap className="w-16 h-16 text-primaryColor mx-auto mb-4 transition-transform hover:rotate-12" />
            <h3 className="text-lg font-semibold text-foreground">Holistic Learning</h3>
            <p className="text-muted-foreground text-sm mt-2">Nurturing minds, building character</p>
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
            <span className="border-b-2 border-primaryColor/50 pb-1">School Construction Project</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            Rather than waiting for students to enroll after the campus was built, we at Agasthya Vidyanikethan have
            proactively expanded and developed additional campuses to accommodate more students. This initiative
            addresses the challenge of limited seats in the existing campus, ensuring that quality education is
            accessible to a larger number of students.
          </p>
          <p className="text-foreground leading-relaxed mb-6 text-base">
            Even as the number of campuses and students increases, we remain committed to maintaining the highest
            standards of education without compromise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Computer className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Development of a Software Portal</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            To further enhance our educational framework, we are developing a Software Portal designed to uphold the
            quality of education. This portal, currently under development, aims to equip our students with the necessary
            skills and knowledge to navigate the evolving educational landscape with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Users className="w-6 h-6 text-primaryColor mr-2" />
            <span className="border-b-2 border-primaryColor/50 pb-1">Holistic Approach</span>
          </h3>
          <p className="text-foreground leading-relaxed mb-4 text-base">
            We prioritize a holistic approach to learning, blending traditional wisdom with contemporary teaching
            methodologies to foster a comprehensive understanding of subjects. Our classrooms are vibrant spaces where
            curiosity is nurtured, critical thinking is encouraged, and innovation is celebrated. We believe in
            empowering students to think independently, ask questions, and explore their intellectual boundaries.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            Our rigorous curriculum is designed to not only meet but exceed academic standards, ensuring that every
            student is well-prepared for the challenges of the future. Through these initiatives, Agasthya Vidyanikethan
            continues to pave the way for an advanced and progressive educational system.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityEducationContent;