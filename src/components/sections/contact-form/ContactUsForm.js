"use client";
import React from 'react';
import image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';

const ContactUs = () => {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [phone, setPhone] = useState("");
      const [query, setQuery] = useState("");
      const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        await e.preventDefault();
        const formData = {
            firstName,
            lastName,
            phone,
            query,
            message,
          };
          console.log("Form submitted:", formData);
          try {
            const response = await axios.post(`/api/ContactGoogleSheet`, formData);
            console.log("Response:", response.data);
            await axios.post(`/api/ContactMail`, formData); 
            if(response.status === 200) {
              alert("Form submitted successfully!");
            }
            else {
              alert("Form submission failed!");
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed!");
          }
    }
    
  return (
    <section className="contact-us-area m-4 md:my-10 md:mx-30 bg-white rounded-xl shadow-xl" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-wrap items-center gap-5">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 xl:w-1/3" data-aos="fade-up">
            <div className="mb-6">
              {/* <image
                src={contact}
                alt="Contact Us"
                className="w-full"
              /> */}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">We&apos;re Always Eager to Hear From You!</h3>

              <ul className="space-y-4">
                {/* Branch 1 */}
                <li>
                  <h6 className="font-semibold">Agasthya Vidyanikethan Srigandhakaval</h6>
                  <div className="flex text-sm mt-1 " style={{ color: "grey" }}>
                    <p className="pr-2 border-r border-black">
                      <a href="tel:+919880906633">+91 9880906633</a>
                    </p>
                    <p className="pl-2" >
                      <a href="tel:+919972342144">+91 9972342144</a>
                    </p>
                  </div>
                </li>

                {/* Branch 2 */}
                <li>
                  <h6 className="font-semibold">Agasthya Vidyanikethan Ullal</h6>
                  <div className="flex text-sm mt-1" style={{ color: "grey" }}>
                    <p className="pr-2 border-r border-black">
                      <a href="tel:+917760776098">+91 7760776098</a>
                    </p>
                    <p className="pl-2">
                      <a href="tel:+917760776046">+91 7760776046</a>
                    </p>
                  </div>
                </li>

                {/* Other Contacts */}
                <li>
                  <h6 className="font-semibold">For Enquiries</h6>
                  <p><a href="mailto:info@av.school" style={{ color: "grey" }}>info@av.school</a></p>
                </li>
                <li>
                  <h6 className="font-semibold">For Career Opportunities</h6>
                  <p><a href="mailto:career@av.school" style={{ color: "grey" }}>career@av.school</a></p>
                </li>
                <li>
                  <h6 className="font-semibold">For Admissions</h6>
                  <p><a href="mailto:admissions@av.school" style={{ color: "grey" }}>admissions@av.school</a></p>
                </li>
              </ul>

              {/* Social Links */}
              <ul className="flex space-x-4 mt-4 text-2xl">
                <li>
                    <a href="https://www.facebook.com/@AgasthyaVidyaniketan/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-avorange transition" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/agasthyavidyanikethan/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-avorange transition" />
                    </a>
                </li>
                <li>
                    <a href="https://in.linkedin.com/company/agasthya-vidyanikethan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-avorange transition" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="hover:text-avorange transition" />
                    </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 xl:w-2/5 lg:ml-auto py-5" data-aos="fade-up">
            <div className="bg-white dark:bg-gray-900 shadow-xl rounded-md p-6 border border-5 border-avorange">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Get In Touch</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fill out this form for any queries.</p>
              </div>

              <form  id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <input type="hidden"  />

                  <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="p-3 border border-gray-300 rounded-md"
                  />

                  <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="p-3 border border-gray-300 rounded-md"
                  />

                  <input
                    type="tel"
                    name="contactDetails"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="p-3 border border-gray-300 rounded-md"
                  />

                  <select
                    id="query"
                    name="query"
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-12 px-3 bg-white font-medium text-gray-500 border-b border-gray-400"
                  >
                    <option>Select Query</option>
                    <option value="Admissions">Admissions</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>

                  <textarea
                    name="enquiryMessage"
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    maxLength="500"
                    placeholder="Your message"
                    className="p-3 border border-gray-300 rounded-md"
                  ></textarea>
                  <div id="char-count" className="text-xs text-gray-500">500 characters remaining</div>

                  <ButtonPrimary
                    type="submit"
                    // onSubmit={handleSubmit}
                    className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition"
                  >
                    Submit Message <i className="icon-4"></i>
                  </ButtonPrimary>
                </div>
              </form>

              {/* Decorative Shapes (optional) */}
              {/* <div className="relative mt-6">
                <img
                  src="assets/images/about/shape-13.png"
                  alt="Shape 1"
                  className="absolute top-0 left-0 w-16 opacity-30"
                />
                <img
                  src="assets/images/counterup/shape-02.png"
                  alt="Shape 2"
                  className="absolute bottom-0 right-0 w-16 opacity-30"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;