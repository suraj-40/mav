"use client";
import ScheduleForm from "@/components/sections/registrations/ScheduleForm";
import { useState, useEffect } from "react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-start md:items-center text-center justify-center p-2 sm:p-4 z-99 overflow-y-auto">
          <div className="w-full bg-white rounded-lg max-w-[95%] sm:max-w-4xl relative my-4 overflow-y-auto">
            <button
              className="absolute right-6 top-5 z-10 text-avorange"
              onClick={() => setIsOpen(false)}
            >
              ❌
            </button>

            <div className="p-4 sm:p-6">
              <ScheduleForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
