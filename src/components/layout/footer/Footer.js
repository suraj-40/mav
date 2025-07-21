import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo/logo_31.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-av text-white pt-10  relative overflow-hidden"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-av  text-white opacity-80 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {/* School Info */}
          <div data-aos="fade-up">
            <Link
              href="/"
              className="inline-block w-[60%] md:w-full mb-6"
            >
              <Image
                src={logoImage}
                alt="Agasthya Vidyanikethan"
                placeholder="blur"
                className=""
              />
            </Link>
            <p className="mb-6 text-[16px] md:text-center leading-tight font-medium">
                Educating the Future and <br/>
                Nurturing our Culture at<br/>
              <span
                className="text-avorange text-2xl font-samarkan"
              >
                Agasthya Vidyanikethan
              </span>
            </p>
            <div className="flex space-x-4 md:justify-center md:mt-10">
              <a
                href="https://www.facebook.com/@AgasthyaVidyaniketan/"
                className="text-black bg-white hover:text-white p-[10px] rounded-md hover:bg-avorange transition-colors  duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/agasthyavidyanikethan/"
                className=" text-black bg-white hover:text-white p-[10px] rounded-md hover:bg-avorange transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/agasthya-vidyanikethan"
                className=" text-black bg-white hover:text-white p-[10px] rounded-md hover:bg-avorange transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667h-3.554v-11.5h3.414v1.571h.049c.476-.9 1.637-1.849 3.367-1.849 3.598 0 4.263 2.368 4.263 5.451v6.327zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.141.923-2.066 2.067-2.066s2.066.925 2.066 2.066c0 1.141-.922 2.067-2.066 2.067zm1.777 13.019h-3.554v-11.5h3.554v11.5zM22.225 0h-20.451c-.977 0-1.774.797-1.774 1.774v20.451c0 .978.797 1.775 1.774 1.775h20.451c.978 0 1.775-.797 1.775-1.775v-20.451c0-.977-.797-1.774-1.775-1.774z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@agasthyavidyanikethan6692"
                target="_blank"
                className="text-black bg-white hover:text-white p-[10px] rounded-md hover:bg-avorange transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-size-22 text-white  font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-avorange before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/schedule"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/our-Leaders/founder"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/NEP"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  NEP
                </Link>
              </li>

              {/* <li>
                <Link
                  href="#"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Help (FAQ)
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact-us"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Our Locations
                </Link>
              </li> */}
              <li>
                <Link
                  href="/policy/tnc"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/privacy"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-size-22 text-white  font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-avorange before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Reach Us
            </h3>
            <ul className="space-y-4">             
              <li className="flex items-start space-x-1">
              <div className=" p-2 rounded hover:bg-[#FF5722] cursor-pointer inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
              </div>
                <div>
                  <p className=" font-medium text-avorange font-bold">
                    Agasthya Vidyanikethan
                  </p>
                  <p className=" font-medium">Ullal Branch</p>
                  <p className=" ">7760776098 | 7760776046</p>
                  <p className="">info@av.school</p>
                </div>
              </li>
              <li className="flex items-start space-x-1">
              <div className=" p-2 rounded hover:bg-[#FF5722] cursor-pointer inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
              </div>

                <div>
                  <p className=" font-medium text-avorange font-bold">
                    Agasthya Vidyanikethan
                  </p>
                  <p className=" font-medium">
                    Srigandhakaval Branch
                  </p>
                  <p className="">9880906633 | 9972342144</p>
                  <p className="">info@av.school</p>
                </div>
              </li>
              <li className="flex items-start space-x-1">
              <div className=" p-2 rounded hover:bg-[#FF5722] cursor-pointer inline-block">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
                

                <div>
                  <p className=" font-medium">More Info:</p>
                  <a
                    className=" hover:text-avorange transition-colors duration-300"
                    href="mailto:admissions@av.school"
                  >
                    admissions@av.school
                  </a>
                  <a
                    className=" hover:text-avorange transition-colors duration-300"
                    href="mailto:career@av.school"
                  >
                    career@av.school
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-size-22 text-white  font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-avorange before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Locate Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-1">
              <div className=" p-2 rounded hover:bg-[#FF5722] cursor-pointer inline-block">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
                
                <a
                  href="https://maps.app.goo.gl/h7nNTso9x3Eag8oW8"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  # 1566, &apos;D&apos; Group Layout, 60 ft. Road, Near 2nd
                  Water Tank, Srigandhakaval, Bengaluru - 560091.
                  Landmark: Nagarabhavi Ring Road             
                </a>
              </li>
              <li className="flex items-start space-x-1">
              <div className=" p-2 rounded hover:bg-[#FF5722] cursor-pointer inline-block">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
                <a
                  href="https://maps.app.goo.gl/Xe6HM1q4uXFXi59J6"
                  className=" hover:text-avorange transition-colors duration-300"
                >
                  #170/3, 6th block, Sir M. Vishweshwaraiah Layout,
                  Ullal Ring road, Bengaluru-560110
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t text-gray-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between text-gray-400 items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Agasthya Vidyanikethan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/policy/tnc"
                className=" hover:text-white text-sm transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href="/policy/privacy"
                className=" hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      F
    </footer>
  );
};

export default Footer;
