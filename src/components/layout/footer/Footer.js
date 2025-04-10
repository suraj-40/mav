import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo/logo_2.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-school-grey text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F5] to-[#F0F4F5] opacity-80 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div data-aos="fade-up">
            <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <Image src={logoImage} alt="Agasthya Vidyanikethan" placeholder="blur" className="w-40 lg:w-48" />
            </Link>
            <p className="text-[#000008] mb-6 text-lg font-medium">
              Discover Your Limitless Potential at{" "}
              <span className="text-school-orange">Agasthya Vidyanikethan</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-school-orange transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-school-orange transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-school-orange transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-school-orange transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-6 text-school-orange">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/schedule" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Schedule</a>
              </li>
              <li>
                <a href="/aboutus" className="text-[#000008] hover:text-school-orange transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Help (FAQ)</a>
              </li>
              <li>
                <a href="/contactus" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Contact Us</a>
              </li>
              <li>
                <a href="/contactus" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Our Locations</a>
              </li>
              <li>
                <a href="#" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-[#000008] hover:text-school-orange transition-colors duration-300">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 text-school-orange">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-school-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-[#000008] font-medium">Unit-1:</p>
                  <p className="text-[#000008]">9880906633 | 9972342144</p>
                  <p className="text-[#000008]">info@av.school</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-school-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-[#000008] font-medium">Unit-2:</p>
                  <p className="text-[#000008] ">7760776098 | 7760776046</p>
                  <p className="text-[#000008]">info@av.school</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-school-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-[#000008] font-medium">More Info:</p>
                  <a className="text-[#000008] hover:text-school-orange transition-colors duration-300" href="mailto:admissions@av.school">admissions@av.school</a>
                  <a className="text-[#000008] hover:text-school-orange transition-colors duration-300" href="mailto:career@av.school">career@av.school</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6 text-school-orange">Locate Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-school-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <a href="https://maps.app.goo.gl/h7nNTso9x3Eag8oW8" className="text-[#000008] hover:text-school-orange transition-colors duration-300">
                  Unit-1, Srigandhakaval Branch, #1566, ‘D’ Group Layout, Bengaluru - 560091
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-school-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <a href="https://maps.app.goo.gl/Xe6HM1q4uXFXi59J6" className="text-[#000008] hover:text-school-orange transition-colors duration-300">
                  Unit-2, Ullal Branch, #170/3, 6th Block, Ullal Ring Road, Bengaluru – 560110
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#000008] text-sm mb-4 md:mb-0">
              © 2025 Agasthya Vidyanikethan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#000008] hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-[#000008] hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-[#000008] hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;