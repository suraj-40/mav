"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AtomsNavCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "home",
      title: "Active Tab",
      content: "Content for the Active tab goes here.",
    },
    {
      id: "profile",
      title: "Link Tab",
      content: "Content for the Link tab goes here.",
    },
    {
      id: "disabled",
      title: "Disabled Tab",
      content: "Content for the Disabled tab goes here.",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-24">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop Tabs (Hidden on Mobile) */}
        <div className="hidden md:block">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs flex justify-center" id="myTab" role="tablist">
                {tabs.map((tab, index) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === index ? "active" : ""}`}
                      onClick={() => handleTabClick(index)}
                      role="tab"
                      aria-selected={activeTab === index}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content" id="myTabContent">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${activeTab === index ? "show active" : ""}`}
                    role="tabpanel"
                  >
                    <h5 className="card-title">{tab.title}</h5>
                    <p className="card-text">{tab.content}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-primary mt-4 inline-block">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Carousel (Visible on Mobile) */}
        <div className="block md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="card text-center p-6 bg-white rounded-lg shadow-md"
              >
                <h5 className="card-title text-xl font-semibold mb-4">
                  {tabs[activeTab].title}
                </h5>
                <p className="card-text mb-6">{tabs[activeTab].content}</p>
                <a href="#" className="btn btn-primary inline-block">
                  Go somewhere
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`w-3 h-3 rounded-full ${
                  activeTab === index ? "bg-[#FF5722]" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtomsNavCard;