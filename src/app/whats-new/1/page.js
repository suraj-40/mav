"use client";
import Link from 'next/link';
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function WhatsNewBlog1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageWrapper>
      <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50">
        {/* Back Button */}
        <div className="w-full px-4 pt-6 pb-4 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/whats-new" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 group"
            >
              <FaArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to What&apos;s New
            </Link>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-12 max-w-6xl text-justify">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header Section with Split Title */}
            <div className="p-8 md:p-12 border-b border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Left Side - "Why" */}
                <div className="flex-shrink-0">
                  <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none">
                    Why
                  </h1>
                                     <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mt-4"></div>
          </div>

                {/* Vertical Separator */}
                <div className="hidden md:block w-px h-24 bg-gray-300 mx-6"></div>

                {/* Right Side - Title Continuation */}
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight mb-2">
                    Foundational Years Matter
                  </h2>
                                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                     Building Skills Beyond the Classroom
                   </h3>
                </div>
              </div>
            </div>

            {/* Body Content - Two Column Layout */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The early years of a child&apos;s life are not just about ABCs and numbers. These years form the bedrock for everything that follows. At <span className="text-orange-600 font-semibold">Agasthya Vidyanikethan School</span>, we recognise that the real impact of education begins before formal schooling does. That is why our focus on Early Childhood Development goes beyond books and routines. It is about shaping the way children think, feel, and connect with the world.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our approach to foundational learning creates a strong base for cognitive development, emotional intelligence, and social skills that will serve children throughout their educational journey and beyond.
                  </p>
                </div>

                {/* Right Column - Image Placeholder */}
                <div className="relative">
                  <div className="relative h-80">
                    <Image src="/images/whats-new/1/Asset 1.png" alt="Young student with abacus" fill className="object-cover rounded-lg" />
                  </div>
                  
                  {/* Bottom Line */}
                  <div className="w-full h-px bg-gray-900 mt-6"></div>
                </div>
              </div>
                         </div>
           </motion.div>

                       {/* Second Section - Understanding ECCE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Understanding <span className="text-orange-600">ECCE</span> in the <span className="text-orange-600">Indian Education Landscape</span>
                </h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

              {/* Section Content - Two Column Layout */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Image */}
                  <div className="relative">
                    <div className="relative h-80">
                      <Image src="/images/whats-new/1/Asset 2.png" alt="Young student in school uniform" fill className="object-cover rounded-lg" />
                    </div>
                  </div>

                  {/* Right Column - Text Content */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-bold text-orange-600">ECCE</span> full form in education is <span className="bg-yellow-100 px-1 rounded">Early Childhood Care and Education</span>. This phase targets children between <span className="text-orange-700 font-semibold">3 and 8 years</span> of age and plays a crucial role in building <span className="underline decoration-orange-400">cognitive, emotional, and social strength</span>. At <span className="font-bold text-orange-600">Agasthya Vidyanikethan School</span>, ECCE is not treated as a mere transition to primary classes. It is a well-structured foundation that prepares learners to face future academic and personal challenges with confidence.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Government policies like the <span className="font-semibold text-orange-700">National Education Policy (NEP 2020)</span> have already recognised early childhood care and education as a key national priority. The foundation laid during these years determines how children absorb knowledge, approach problems, and develop their personalities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

           {/* Third Section - Going Beyond the Curriculum */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="mt-12"
           >
             {/* Section Header */}
                           <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Going Beyond the Curriculum
                </h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

             {/* Section Content */}
             <div className="mb-8">
               <p className="text-lg text-gray-700 leading-relaxed mb-8">
                 One of the biggest misconceptions is that foundational learning is only about teaching letters and numbers. In reality, these early years provide the perfect window for developing <span className="font-bold text-orange-600">life skills</span> that are difficult to build later.
               </p>

               {/* ECCE Model Section */}
               <div className="text-center mb-8">
                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                   Our ECCE model focuses on:
                 </h3>
                 <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
               </div>

               {/* Skills Grid - 3-2 Layout */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 {/* First Row - 3 Cards */}
                 <div className="md:col-span-1">
                                      {/* Language Development */}
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                     <div className="bg-[#F8571A] p-4 flex items-center">
                       <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                       </svg>
                       <h4 className="text-white font-bold">Language Development</h4>
                     </div>
                     <div className="p-4">
                       <p className="text-gray-700 text-sm">
                         Exposure to multiple languages through conversation, stories, and music.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div className="md:col-span-1">
                   {/* Logical Thinking */}
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                     <div className="bg-[#F8571A] p-4 flex items-center">
                       <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                       </svg>
                       <h4 className="text-white font-bold">Logical Thinking</h4>
                     </div>
                     <div className="p-4">
                       <p className="text-gray-700 text-sm">
                         Introduction to basic logic and reasoning through hands-on activities.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div className="md:col-span-1">
                   {/* Emotional Awareness */}
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                     <div className="bg-[#F8571A] p-4 flex items-center">
                       <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                       </svg>
                       <h4 className="text-white font-bold">Emotional Awareness</h4>
                     </div>
                     <div className="p-4">
                       <p className="text-gray-700 text-sm">
                         Encouraging children to identify, express, and manage their feelings.
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Second Row - 2 Cards + Text */}
                 <div className="md:col-span-1">
                   {/* Social Intelligence */}
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                     <div className="bg-[#F8571A] p-4 flex items-center">
                       <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                       </svg>
                       <h4 className="text-white font-bold">Social Intelligence</h4>
                     </div>
                     <div className="p-4">
                       <p className="text-gray-700 text-sm">
                         Promoting teamwork, sharing, and cooperation through group activities.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div className="md:col-span-1">
                   {/* Motor Skills */}
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                     <div className="bg-[#F8571A] p-4 flex items-center">
                       <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                       </svg>
                       <h4 className="text-white font-bold">Motor Skills</h4>
                     </div>
                     <div className="p-4">
                       <p className="text-gray-700 text-sm">
                         Fine and gross motor skill enhancement through art, movement & outdoor play.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div className="md:col-span-1 flex items-center">
                   <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg p-6">
                     <p className="text-lg text-gray-700 leading-relaxed">
                       These skills go far beyond academic success. They shape <span className="font-bold text-orange-600">independent thinkers</span> who can adapt, empathise, and thrive in any setting.
                     </p>
                     <div className="w-24 h-1 bg-[#F8571A] mt-4"></div>
                   </div>
                 </div>

               </div>

            </div>
            </motion.div>

            {/* Fourth Section - Why Parents Should Pay Attention */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why <span className="text-orange-600">Parents near Nagarbhavi & Ullal</span> Should Pay Attention
                </h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

              {/* Section Content - Two Column Layout */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Image */}
                  <div className="relative">
                    <div className="relative h-80">
                      <Image src="/images/whats-new/1/Asset 3.png" alt="Parents and children interaction" fill className="object-cover rounded-lg" />
                    </div>
                  </div>

                  {/* Right Column - Text Content */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Location is often the first filter when searching online for <span className="italic text-orange-700">schools near me</span>. But proximity should not be the only consideration. Parents looking for <span className="font-semibold text-orange-600">schools near Nagarbhavi</span> or <span className="font-semibold text-orange-600">schools near Ullal</span> need to ask deeper questions. Does the school offer structured early childhood development programs? Are trained ECCE educators in place? Is the environment child-centric?
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-bold text-orange-600">Agasthya Vidyanikethan School</span>, situated within convenient reach for families searching for schools near Nagarbhavi and schools near Ullal, stands out because of its personalised approach. Every child is seen as a unique learner. Our spaces are designed to support open-ended learning, movement, and self-expression. For parents seeking the best schools near me, the answer lies not just in good reviews but in visible, measurable child development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fifth Section - Role of Educators and Learning Ecosystem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              {/* Section Header */}
              <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
  Role of Educators & the <span className="text-orange-600">Learning Ecosystem</span>
</h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

              {/* Section Content - Two Column Layout */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Early Childhood Care and Education (ECCE) is led by trained educators who are not just teachers, but <span className="font-semibold text-blue-600">facilitators</span>. They observe learning patterns, encourage exploration, and create opportunities for <span className="font-semibold text-orange-600">independent discovery</span>. Every interaction is designed to nurture curiosity and build confidence.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At <span className="font-bold text-orange-600">Agasthya Vidyanikethan School</span>, learning takes place in thoughtfully designed environments that inspire curiosity. From nature-based projects to storytelling corners and sensory zones, we build learning ecosystems that encourage children to ask questions, make choices, and learn through doing - not just content delivery.
                    </p>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative">
                    <div className="relative h-80">
                      <Image src="/images/whats-new/1/Asset 4.png" alt="Teacher and students in classroom" fill className="object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sixth Section - Support at Home Makes a Difference */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Support at Home <span className="text-orange-600">Makes a Difference</span>
                </h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

              {/* Introductory Paragraph */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  While structured ECCE plays a big role, the home environment also contributes to early childhood development. That is why we engage parents through interactive sessions and regular feedback. Together, we help children transition smoothly from the protected space of home to the dynamic world of school.
                </p>
              </div>

              {/* Main Content Card */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Some of the ways parents can support <span className="text-orange-600 underline">foundational growth at home include:</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Bullet Points */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700">Reading with children every day and discussing stories.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700">Introducing simple chores to build responsibility.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700">Limiting screen time and encouraging physical play.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700">Allowing children to speak and make choices without fear.</p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative">
                    <div className="relative h-80">
                      <Image src="/images/whats-new/1/Asset 5.png" alt="Family activity at home" fill className="object-cover rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Concluding Statement */}
                <div className="text-center mt-8">
                  <p className="text-xl text-gray-700 font-semibold">
                    This consistent support builds confidence, independence, and trust - qualities every learner needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Seventh Section - What Sets Agasthya Vidyanikethan School Apart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Sets <span className="text-orange-600">Agasthya Vidyanikethan School Apart</span>
                </h2>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto"></div>
              </div>

              {/* Section Content - Two Column Layout */}
              <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our ECCE framework is built not just for preschoolers but for <span className="font-semibold text-orange-600">future-ready citizens</span>. For parents looking for the <span className="font-bold text-orange-600">top school in Nagarbhavi</span>, we offer a curriculum that aligns with international practices while keeping local values at its core. Small class sizes, age-appropriate teaching methods, regular progress tracking, and strong parent-teacher communication make us a natural choice.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Being among the <span className="font-semibold text-orange-600">best schools near me</span>, our school has become a preferred destination for families focused on quality early education. We are not a daycare with activities. We are a full-fledged early learning institution that builds skills to last a lifetime.
                    </p>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative">
                    <div className="relative h-80">
                      <Image src="/images/whats-new/1/Asset 7.png" alt="Teacher addressing group of parents and children" fill className="object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Eighth Section - Conclusion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12"
            >
              {/* Conclusion Section with Dark Blue Background */}
              <div className="bg-[#1B204C] rounded-2xl p-8 md:p-12 shadow-xl">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-orange-500">Conclusion:</span> <span className="text-white">Building More Than Just Students</span>
                  </h2>
                  <div className="flex justify-center items-center">
                    <div className="flex-1 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-orange-500 mx-2"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-white">
                  <p className="text-lg leading-relaxed">
                    Foundational education is not a phase to rush through. It is the most sensitive and powerful time in a child&#39;s life. The experiences, exposures, and environments children have during this time decide how they respond to challenges in the future.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    At <span className="font-bold text-orange-400">Agasthya Vidyanikethan School</span>, our vision is to create a generation of learners who are not just academically sound but emotionally and socially prepared for life. For families looking for meaningful education options among <span className="font-semibold text-orange-400">schools near Nagarbhavi</span>, <span className="font-semibold text-orange-400">schools near Ullal</span>, or the <span className="font-bold text-orange-400">top school in Nagarbhavi</span>, we invite you to explore how we&#39;re changing the narrative of early education.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
      </main>
    </PageWrapper>
  );
} 
