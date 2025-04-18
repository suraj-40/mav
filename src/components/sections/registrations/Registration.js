"use client";


import Image from "next/image";
import React, { useState } from "react";
import registrationImage1 from "@/assets/images/register/register__1.png";
import registrationImage2 from "@/assets/images/register/register__2.png";
import registrationImage3 from "@/assets/images/register/register__3.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CiCalendarDate } from "react-icons/ci";
import { toast } from 'react-toastify';
import axios from "axios";
import PopupVideo from "@/components/shared/popup/PopupVideo";


const Registration = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [scheduleDate, setScheduleDate] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    childName: '',
    parentEmail: '',
    fatherName: '',
    fatherContact: '',
    motherName: '',
    motherContact: '',
    dateOfBirth: '',
    nationality: '',
    branch: '',
    admissionClass: '',
    gender: '',
    lastSchool: '',
    acceptPolicy: false,
    date: '',
  });

  const formatDate = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleInputChange = (e) => {
    setScheduleDate(e.target.value);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
    setScheduleDate(formatDate(newValue));
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const registractionSubmit = async () => {
    try {
      const [response] = await Promise.all([
        axios.post('/api/registration', formData),
        axios.post('/api/ScheduleGoogleSheet', formData)
      ]);

      if (response) {
        toast.success('Form submitted successfully.');
        setFormData({
          childName: '',
          parentEmail: '',
          fatherName: '',
          fatherContact: '',
          motherName: '',
          motherContact: '',
          dateOfBirth: '',
          nationality: '',
          branch: '',
          admissionClass: '',
          gender: '',
          lastSchool: '',
          acceptPolicy: false,
          date: '',
        });
        setScheduleDate('');
        setOpen(false);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.log("Error:", error);
    }
  };

  const handlesubmitDate = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (/^\d{2}-\d{2}-\d{4}$/.test(scheduleDate)) {
      const [day, month, year] = scheduleDate.split('-');
      const newDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (!isNaN(newDate.getTime()) && newDate >= today) {
        setValue(newDate);
        formData.date = formatDate(newDate);
        registractionSubmit();
      } else {
        toast.error('Please enter a valid date.');
        setValue(null);
      }
    } else {
      setValue(null);
      toast.error('Please enter a valid date in the format DD-MM-YYYY.');
    }
  };


  return (
    <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-150px">
      {/* registration overlay  */}
      <div className="overlay bg-[#202745] bg-opacity-90 py-20 lg:pt-[90px] lg:pb-0 relative z-0">
        {/* animate icons  */}
        <div>
          <Image
            className="absolute top-0 left-0 lg:left-[8%] 2xl:top-10 animate-move-hor block z--1"
            src={registrationImage1}
            alt=""
          />
          <Image
            className="absolute top-1/2 left-3/4 md:left-2/3 lg:left-1/2 2xl:left-[8%] md:top animate-spin-slow block z--1"
            src={registrationImage2}
            alt=""
          />
          <Image
            className="absolute top-20 lg:top-3/4 md:top-14 right-20 md:right-20 lg:right-[90%] animate-move-var block z--1"
            src={registrationImage3}
            alt=""
          />
        </div>
        <div className="container">
          {/* about section   */}
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-30px gap-x-30px">
            {/* about left  */}
            <div
              className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 lg:col-start-1 lg:col-span-7"
              data-aos="fade-up"
            >
              <div className="relative">
                {/* <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                  Registration
                </span> */}
                <h3 className="text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold text-whiteColor pb-25px">
                  Register now and 
                  
                  Get access to{" "}
                  <span className="text-secondaryColor">ATOMs </span>
                  Features 
                </h3> 
                <div className="flex gap-x-5 items-center"> 
                  <PopupVideo />

                  <div>
                    <p className="text-size-15 md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-white">
                    Join us on a journey where your <span className="text-secondaryColor">potential </span>  becomes your strength and your dreams are at the forefront of your <span className="text-secondaryColor">success</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* sbject right  */}
            <div className="overflow-visible lg:col-start-8 lg:col-span-5 relative z-1 lg:-mb-150px">
            <div className="relative" data-aos="fade-left">
            <div className="bg-white/95 p-8 rounded-2xl shadow-xl transform lg:-translate-y-12 border border-gray-100/50 backdrop-blur-md">
              {!open ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Child Name */}    
                  <div className="">
                    <label className="text-sm font-medium text-blue-800">Child&apos;s Full Name <span className="text-red-600">*</span></label>
                    <input type="text" name="childName" value={formData.childName} onChange={handleChange} required placeholder="Full Name in CAPITAL" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Date of Birth <span className="text-red-600">*</span></label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>

                  {/* Nationality */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Nationality <span className="text-red-600">*</span></label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  </div>

                  {/* Father's Name & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Father&apos;s Name <span className="text-red-600">*</span></label>
                      <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Father&apos;s Contact <span className="text-red-600">*</span></label>
                      <input type="text" name="fatherContact" value={formData.fatherContact} onChange={handleChange} required pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                    </div>
                  </div>

                  {/* Mother's Name & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Mother&apos;s Name <span className="text-red-600">*</span></label>
                      <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Mother&apos;s Contact <span className="text-red-600">*</span></label>
                      <input type="text" name="motherContact" value={formData.motherContact} onChange={handleChange} required pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                    </div>
                  </div>

                  {/* Parent Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Parent&apos;s Email <span className="text-red-600">*</span></label>
                      <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Gender <span className="text-red-600">*</span></label>
                      <select name="gender" value={formData.gender} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  {/* Branch and Gender */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-800">Branch <span className="text-red-600">*</span></label>
                      <select name="branch" value={formData.branch} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
                        <option value="">Select Branch</option>
                        <option value="AV Srigandhakavalu">AV Srigandhakavalu</option>
                        <option value="AV Ullal">AV Ullal</option>
                      </select>
                    </div>
                    {/* Admission Class */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Admission for Class <span className="text-red-600">*</span></label>
                    <select name="admissionClass" value={formData.admissionClass} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
                      <option value="">Select Class</option>
                      {[...Array(formData.branch === 'AV Srigandhakavalu' ? 3 : formData.branch === 'AV Ullal' ? 3 : 0)].map((_, i) => (
                        <option key={i} value={`Montessori ${i + 1}`}>Montessori {i + 1}</option>
                      ))}
                      
                      {[...Array(formData.branch === 'AV Srigandhakavalu' ? 10 : formData.branch === 'AV Ullal' ? 7 : 0)].map((_, i) => (
                        <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  </div>

                  {/* Last School */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Last School Attended</label>
                    <input type="text" name="lastSchool" value={formData.lastSchool} onChange={handleChange} className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>


                  {/* Accept Policy */}
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="PrivacyPolicy" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} required />
                    <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700">
                      I accept the <span className="text-blue-600 underline">Privacy Policy</span> for Agasthya Vidyanikethan
                    </label>
                  </div>

                  <ButtonPrimary type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">Next</ButtonPrimary>
                </form>
              ) : (
                <form className="space-y-6 px-4 md:px-0" onSubmit={handlesubmitDate}>
                  <p className="text-lg font-medium">Choose a date to schedule your visit to the school</p>
                  <div className="relative flex items-center">
                    <input type="text" value={scheduleDate} onChange={handleInputChange} placeholder="dd-mm-yyyy" className="input mr-2" />
                    <button onClick={(e) => { e.preventDefault(); toggleCalendar(); }} className="p-2 border rounded-md">
                      <CiCalendarDate className="w-5 h-5" />
                    </button>
                    {isCalendarOpen && (
                      <div className="absolute top-full left-0 mt-2 z-10 w-full max-w-md">
                        <Calendar onChange={handleDateChange} value={value} />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center mt-4 w-full">
                    <ButtonPrimary type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">
                      {loading ? "Please wait..." : "Submit"}
                    </ButtonPrimary>
                  </div>
                </form>
              )}
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
