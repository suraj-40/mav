"use client";
import RegistrationForm from "@/components/sections/registrations/ScheduleForm";
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
              <div className="mb-4 mt-10 md:mt-5">
                <span className="text-av relative text-lg md:text-4xl leading-6">
                  Register to{" "}
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-av"></span>
                </span>
                <span className="text-avorange relative text-lg md:text-4xl">
                  Schedule Campus Visit
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-av via-avorange to-avorange"></span>
                </span>
              </div>

              <RegistrationForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
