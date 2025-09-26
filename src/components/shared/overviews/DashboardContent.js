"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/images/about/DashboardImg.png";
import useIsTrue from "@/hooks/useIsTrue";
import SDKIntegration from "@/components/SDKIntegration";
import ExploreAtomsDashboard from "../ExploreAtomsDashboard";

const DashboardContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");
  const lmsDomain = "https://atoms.av.school/";
  const subdomain = "av";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="py-10 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-16 w-32 h-32 bg-orange-50 rounded-full opacity-50 blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-40 blur-3xl z-0"></div>

        {/* Left side text */}
        <motion.div
          className="w-full lg:w-1/2 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Dash<span className="text-[#FF5722]">board</span>
          </h2>

          <div className="">
            <svg
              width={160}
              height={20}
              viewBox="0 0 160 20"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto lg:mx-0"
            >
              <path
                d="M5,15 Q80,0 155,15"
                fill="none"
                stroke="#FF5722"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-6 text-md md:text-lg text-gray-600 text-justify leading-relaxed">
          Think of the ATOMS Dashboard as your daily briefing room. It brings all the important updates and tasks related to your child. From daily assignments and announcements to events, everything will be right at your fingertips. As a parent, you can glance at today&apos;s tasks, check upcoming deadlines, monitor key activities, and track your child&apos;s progress easily in real time. No more wondering what&apos;s due tomorrow or missing out on important updates, you&apos;ll always be one step ahead, ready to support and encourage your child each day.
          </p>

          {/* Stats section */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">95%</span>
              <p className="text-xs text-gray-500 mt-1">Completion Rate</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">12+</span>
              <p className="text-xs text-gray-500 mt-1">Active Courses</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-50">
              <span className="text-[#FF5722] text-2xl font-bold">24/7</span>
              <p className="text-xs text-gray-500 mt-1">Learning Access</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="">
            <SDKIntegration lmsDomain={lmsDomain} subdomain={subdomain} />
            <ExploreAtomsDashboard />
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="w-full lg:w-1/2 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>

            <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <Image
                src={overviewImage}
                alt="ATOMS LMS dashboard view"
                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                placeholder="blur"
              />

              {/* Floating features badges */}
              <div className="absolute top-6 -right-3 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transform rotate-3">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>

              <div className="absolute bottom-6 -left-3 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transform -rotate-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="text-sm font-medium">
                  Interactive Learning
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* AV ATOMS Info Section - Modern Design */}
      <section className="relative w-full max-w-5xl mx-auto mt-12 px-4 md:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#4B2E05] tracking-tight relative inline-block">
            <span className="relative z-10">Your Complete Online Learning Management System and E-Learning Portal</span>
            <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-2 bg-gradient-to-r from-[#FF5722] to-orange-400 rounded-full blur-sm opacity-60 animate-pulse"></span>
          </h2>
          <p className="text-center text-[#4B4F5C] text-base md:text-lg font-medium max-w-2xl mx-auto mb-8 mt-4">
            ATOMS is a digital bridge between school and home, giving parents real-time access to assignments, attendance, events, and performance—all in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 1: Assignment Tracker */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,87,34,0.15)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Clipboard List Icon */}
                <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="4" y="6" width="16" height="16" rx="2"/><path d="M9 10h6M9 14h6"/></svg>
                <span className="text-lg font-bold text-[#FF5722]">Assignment Tracker</span>
              </div>
              <p className="text-[#4B4F5C] text-base">Check homework, due dates, and completed tasks—support your child without repeated reminders.</p>
            </motion.div>
            {/* Card 2: Real-Time Attendance */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,139,230,0.12)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Clock Check Icon */}
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span className="text-lg font-bold text-blue-600">Real-Time Attendance</span>
              </div>
              <p className="text-[#4B4F5C] text-base">Instantly know if your child was present or absent—no more guessing or waiting for updates.</p>
            </motion.div>
            {/* Card 3: Event & Exam Calendar */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,87,34,0.10)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Calendar Days Icon */}
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
                <span className="text-lg font-bold text-orange-500">Event & Exam Calendar</span>
              </div>
              <p className="text-[#4B4F5C] text-base">All school events, tests, and important days in one clear calendar—never miss a thing.</p>
            </motion.div>
            {/* Card 4: Performance Updates */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(76,175,80,0.10)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Trending Up Icon */}
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>
                <span className="text-lg font-bold text-green-700">Performance Updates</span>
              </div>
              <p className="text-[#4B4F5C] text-base">Track progress and feedback from teachers—see your child’s growth over time.</p>
            </motion.div>
            {/* Card 5: Instant Alerts */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,193,7,0.10)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Bell Icon */}
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                <span className="text-lg font-bold text-yellow-600">Instant Alerts</span>
              </div>
              <p className="text-[#4B4F5C] text-base">Get announcements and urgent updates right away—no more missed messages or last-minute surprises.</p>
            </motion.div>
            {/* Card 6: Unified Learning Portal */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(121,85,72,0.10)' }}
              className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {/* Layout Grid Icon */}
                <svg className="w-6 h-6 text-[#4B2E05]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
                <span className="text-lg font-bold text-[#4B2E05]">Unified Learning Portal</span>
              </div>
              <p className="text-[#4B4F5C] text-base">Everything you need, in one easy-to-use place—works beautifully on phone and desktop.</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-8"
          >
            {/* ATOMS Portal Steps Box */}
            <div className="w-full max-w-xl bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#FF5722] to-orange-400 bg-clip-text text-transparent tracking-tight">
                How to Access the ATOMS Learning Portal
              </h3>
              <ol className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">1</span>
                  <span className="text-base md:text-lg font-medium">Visit <a href="https://www.av.school/atoms-e-learning-portal/" className="text-[#FF5722] underline font-bold hover:text-orange-700 transition">https://www.av.school/atoms-e-learning-portal/</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">2</span>
                  <span className="text-base md:text-lg font-medium">Log in using the credentials shared by the school</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">3</span>
                  <span className="text-base md:text-lg font-medium">Explore the dashboard for learning content, check assignments, updates, events and many more.</span>
                </li>
              </ol>
              <div className="mt-2 text-center text-sm text-gray-600 bg-orange-50/60 rounded-lg px-4 py-2">
                <svg className="inline w-4 h-4 mr-1 text-[#FF5722] align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
                The portal works on any device, and no extra download is required.
              </div>
            </div>

            {/* App Download Steps Box */}
            <div className="w-full max-w-xl bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#FF5722] to-orange-400 bg-clip-text text-transparent tracking-tight">
                How to Download the AV-ATOMS App
              </h3>
              <ol className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">1</span>
                  <span className="text-base md:text-lg font-medium">Open the <span className="font-semibold text-orange-600">Google Play Store</span> (Android) or <span className="font-semibold text-orange-600">Apple App Store</span> (iOS) on your device</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">2</span>
                  <span className="text-base md:text-lg font-medium">
                    Search for <span className="font-semibold text-orange-600">&ldquo;AV ATOMS&rdquo;</span> in the search bar or{' '}
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                        window.location.href = isIOS 
                          ? 'https://apps.apple.com/in/app/av-atoms/id6747069636'
                          : 'https://play.google.com/store/apps/details?id=com.edmingle.avatoms';
                      }}
                      className="font-semibold text-[#FF5722] underline hover:text-orange-700 transition cursor-pointer"
                    >
                      Click here
                    </a>
                    {' '}to download directly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">3</span>
                  <span className="text-base md:text-lg font-medium">Tap <span className="font-semibold text-orange-600">Install</span> (Android) or <span className="font-semibold text-orange-600">Get</span> (iOS) to download and install the app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">4</span>
                  <span className="text-base md:text-lg font-medium">Open the app and log in using the credentials shared by the school</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-lg shadow-md">5</span>
                  <span className="text-base md:text-lg font-medium">Explore the dashboard for learning content, check assignments, updates, events and many more.</span>
                </li>
              </ol>
              <div className="mt-2 text-center text-sm text-gray-600 bg-orange-50/60 rounded-lg px-4 py-2">
                <svg className="inline w-4 h-4 mr-1 text-[#FF5722] align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
                The app is available for both Android and iOS devices. No extra charges apply.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default DashboardContent;
