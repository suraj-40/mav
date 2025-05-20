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
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import PopupVideo from "@/components/shared/popup/PopupVideo";
import chess from "@/assets/images/life-skills/03. Chaduranga Siddhi/2.jpg";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [scheduleDate, setScheduleDate] = useState('');
  const [selectedTime, setSelectedTime] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

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
    selectedTime: ''
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
      const payload = {
        ...formData,
        date: scheduleDate,
        selectedTime,
      };
      const [response] = await Promise.all([
        axios.post('/api/registration', payload),
        axios.post('/api/ScheduleGoogleSheet', payload),
        axios.post("/api/WhatsappSchedule", payload)
      ]);

      if (response) {
        setIsSubmitted(true); // Set submission status to true
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
          selectedTime: ''
        });
        setScheduleDate('');
        setSelectedTime('');
        setValue(null);
        setLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
          setOpen(false);
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.log("Error:", error);
      setIsSubmitted(false);
      setLoading(false);
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
        setFormData(prev => ({
          ...prev,
          date: formatDate(newDate),
          selectedTime: selectedTime
        }));
        await registractionSubmit();
      } else {
        setIsSubmitted(false);
        setLoading(false);
      }
    } else {
      setValue(null);
      setIsSubmitted(false);
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-av md:min-h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 pointer-events-none">
        <Image className="absolute top-10 left-10 lg:left-20 2xl:top-20 animate-pulse opacity-70" src={registrationImage1} alt="Decorative element 1" width={100} height={100} />
        <Image className="absolute top-1/3 right-20 lg:right-32 animate-spin-slow opacity-60" src={registrationImage2} alt="Decorative element 2" width={120} height={120} />
        <Image className="absolute bottom-20 left-16 lg:left-32 animate-bounce opacity-50" src={registrationImage3} alt="Decorative element 3" width={80} height={80} />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold text-whiteColor pb-25px">
              Register now and 
              Get access to{" "}
              <span className="text-secondaryColor">ATOMs </span>
              Features 
            </h3>
            <div className="mx-auto inline-block px-4 relative">
              <Image
                src={chess}
                alt="Chess Playing Image"
                width={300}
                height={200}
                className="object-contain"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <PopupVideo videoUrl="https://www.youtube.com/embed/u9mBCrTPOTo?autoplay=1&rel=0" />
              </div>  
            </div>               
            <div>
              <p className="text-size-15 text-justify md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-white">
                Join us on a journey where your <span className="text-secondaryColor">potential </span> becomes your strength and your dreams are at the forefront of your <span className="text-secondaryColor">success</span>.
              </p>
            </div>
          </div>
          <div className="bg-white/95 p-8 rounded-2xl shadow-xl transform lg:-translate-y-12 border border-gray-100/50 backdrop-blur-md" data-aos="fade-left">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center space-y-4 p-6" role="alert">
                <FaCheckCircle className="text-green-600 text-4xl mb-4" />
                <h2 className="text-2xl font-bold text-green-600">
                  Form Submitted Successfully!
                </h2>
                <p className="text-gray-700 text-center">
                  Thank you for scheduling your visit to <span className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent font-bold font-samarkan text-xl"> Agasthya Vidyaniketan. </span> We look forward to welcoming you!
                </p>
              </div>
            ) : !open ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Child&apos;s Full Name <span className="text-red-600">*</span></label>
                    <input type="text" name="childName" value={formData.childName} onChange={handleChange} required placeholder="Full Name in CAPITAL" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Date of Birth <span className="text-red-600">*</span></label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Nationality <span className="text-red-600">*</span></label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Father&apos;s Name <span className="text-red-600">*</span></label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Mother&apos;s Name <span className="text-red-600">*</span></label>
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Father&apos;s Contact <span className="text-red-600">*</span></label>
                    <input type="text" name="fatherContact" value={formData.fatherContact} onChange={handleChange} required pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Mother&apos;s Contact</label>
                    <input type="text" name="motherContact" value={formData.motherContact} onChange={handleChange} pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Parent&apos;s Email</label>
                    <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Branch <span className="text-red-600">*</span></label>
                    <select name="branch" value={formData.branch} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
                      <option value="">Select Branch</option>
                      <option value="AV Srigandhakavalu">AV Srigandhakavalu</option>
                      <option value="AV Ullal">AV Ullal</option>
                    </select>
                  </div>
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
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-800">Last School Attended</label>
                    <input type="text" name="lastSchool" value={formData.lastSchool} onChange={handleChange} className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="PrivacyPolicy" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} required />
                  <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700 text-center">
                    I accept the <a href="/policy/privacy" className="text-blueDark underline">Privacy Policy</a> for Agasthya Vidyanikethan
                  </label>
                </div>
                <div className="text-center">
                  <ButtonPrimary type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">Next</ButtonPrimary>
                </div>
              </form>
            ) : (
              <form className="space-y-6 px-4 md:px-0" onSubmit={handlesubmitDate}>
                <p className="text-lg font-medium">Choose a date and time to schedule your visit to the school</p>
                <div className="relative flex justify-center items-center">
                  <input type="text" value={scheduleDate} onChange={handleInputChange} placeholder="dd-mm-yyyy" className="input mr-2 border border-1 p-[9px] rounded-md" required />
                  <button onClick={(e) => { e.preventDefault(); toggleCalendar(); }} className="p-2 border rounded-md">
                    <CiCalendarDate className="w-5 h-5" />
                  </button>
                  {isCalendarOpen && (
                    <div className="absolute top-full left-0 mt-2 z-10 w-full max-w-md">
                      <Calendar onChange={handleDateChange} value={value} />
                    </div>
                  )}
                  <div className="mt-4 md:mt-0 md:ml-10">
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="input w-full border border-1 p-[12px] rounded-md"
                      required
                    >
                      <option value="" disabled>Select a time slot</option>
                      <option>9:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 1:00 PM</option>
                      <option>1:00 PM - 2:00 PM</option>
                      <option>2:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 5:00 PM</option>
                    </select>
                  </div>
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
    </section>
  );
};

export default Registration;