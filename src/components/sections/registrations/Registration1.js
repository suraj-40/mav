"use client";

import Image from "next/image";
import React, { useState } from "react";
import registrationImage1 from "@/assets/images/register/register__1.png";
import registrationImage2 from "@/assets/images/register/register__2.png";
import registrationImage3 from "@/assets/images/register/register__3.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
        name,
        email,
        parentsContact,
        admissionForClass,
        lastSchoolAttended,
        branch,
        gender
      };
        try {
          console.log('user:', user);
          const response = await fetch('http://localhost:8080/api/admission', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
          });

          if (response.ok) {
              const data = await response.json();
              console.log('success:', data);
              // Handle successful registration (e.g., redirect to login page)
          } else {
              console.error('failed:', response.statusText);
              // Handle registration failure
          }
      } catch (error) {
          console.error('Error:', error);
          // Handle error
      }
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [parentsContact, setParentsContact] = useState('');
    const [admissionForClass, setAdmissionForClass] = useState(''); 
    const [branch, setBranch] = useState('');
    const [gender, setGender] = useState('');
    const [lastSchoolAttended, setLastSchoolAttended] = useState('');

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/BookImg.png')" }} // Update with your image path
    >
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-0" /> {/* Adjust opacity if needed */}

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="absolute top-10 left-10 lg:left-20 2xl:top-20 animate-pulse opacity-70"
          src={registrationImage1}
          alt="Decorative element 1"
          width={100}
          height={100}
        />
        <Image
          className="absolute top-1/3 right-20 lg:right-32 animate-spin-slow opacity-60"
          src={registrationImage2}
          alt="Decorative element 2"
          width={120}
          height={120}
        />
        <Image
          className="absolute bottom-20 left-16 lg:left-32 animate-bounce opacity-50"
          src={registrationImage3}
          alt="Decorative element 3"
          width={80}
          height={80}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8" data-aos="fade-right">
            <span className="inline-block px-4 py-2 bg-[#FF5B00] text-blue-700 rounded-full text-sm font-medium shadow-md backdrop-blur-sm">
              Academic Year 2025 - 2026
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Begin Your Child’s Journey at
              <span className="block text-green-300 relative">
                Agasthya Vidyanikethan
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-400 rounded-full" />
              </span>
            </h3>
            <p className="text-lg text-white/90 max-w-xl drop-shadow-md">
              We’re thrilled to welcome your child to our community! Complete the form to start their educational adventure with us.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-white/95 p-8 rounded-2xl shadow-xl transform lg:-translate-y-12 border border-gray-100/50 backdrop-blur-md" data-aos="fade-up">
              <form className="space-y-6" onSubmit={handleSubmit} >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">Child&#39;s Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name In Capital Letters"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Parent&#39;s Email</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Parent&#39;s Contact</label>
                    <input
                      type="text"
                      placeholder="Enter 10 Digit Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                      id="parentsContact"
                      value={parentsContact}
                      onChange={(e) => setParentsContact(e.target.value)}
                    />

                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Branch</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                      id="branch"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}  
                    >
                      <option value="" className="text-gray-500">Select Branch</option>
                      <option value="Srigandhakavalu" className="text-gray-800">AV Srigandhakavalu</option>
                      <option value="Ullal" className="text-gray-800">AV Ullal</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Gender</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" className="text-gray-500">Select Gender</option>
                      <option value="male" className="text-gray-800">Male</option>
                      <option value="female" className="text-gray-800">Female</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">Last School Attended</label>
                  <input
                    type="text"
                    placeholder="Last School Attended (If Any)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                    id="lastSchoolAttended"
                    value={lastSchoolAttended}
                    onChange={(e) => setLastSchoolAttended(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">Admission for Class</label>
                  <input
                    type="text"
                    placeholder="Montessori 1, 2 or 3, Class 1, 2, 3..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 text-gray-800"
                    id="admissionForClass"
                    value={admissionForClass}
                    onChange={(e) => setAdmissionForClass(e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="PrivacyPolicy"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    onClick={openModal}
                  />
                  <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700">
                    I accept the{" "}
                    <button type="button" onClick={openModal} className="text-blue-600 hover:underline">
                      Privacy Policy
                    </button>{" "}
                    for Agasthya Vidyanikethan
                  </label>
                </div>

                <ButtonPrimary type="submit" arrow={true} className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white">
                  Next
                </ButtonPrimary>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="bg-white/95 max-w-2xl w-full mx-4 p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I understand that if any information provided in the Registration/Admission form or related documents is found to be false or incorrect, the admission may be cancelled. Fees paid are non-refundable in such cases.
              </p>
              <div>
                <h3 className="font-semibold text-blue-800">Required Documents:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Original Birth Certificate</li>
                  <li>Vaccine Record (Xerox + Original for verification)</li>
                  <li>Caste & Income Certificate (Xerox)</li>
                  <li>Student&#39;s Bank Account Pass Book (Xerox)</li>
                  <li>Aadhar Card of Child & Parents (Xerox)</li>
                  <li>4 Passport Size Photos of Child</li>
                  <li>2 Stamp Size Photos of Child</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Track Your Application:</h3>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>Create a Parent account at atoms.av.school</li>
                  <li>Check status under the application tab</li>
                  <li>Receive a call with details once accepted</li>
                </ol>
              </div>
            </div>
            <button
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Registration;