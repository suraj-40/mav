"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import registrationImage1 from "@/assets/images/register/register__1.png";
import registrationImage2 from "@/assets/images/register/register__2.png";
import registrationImage3 from "@/assets/images/register/register__3.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendarDate } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const ScheduleForm = () => {
  const [open, setOpen] = useState(false);
1.5
  const [value, setValue] = useState(null);
  const [scheduleDate, setScheduleDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    childName: "",
    parentEmail: "",
    fatherName: "",
    fatherContact: "",
    motherName: "",
    motherContact: "",
    dateOfBirth: "",
    nationality: "",
    branch: "AV Ullal",
    admissionClass: "",
    gender: "",
    lastSchool: "",
    acceptPolicy: false,
    date: "",
    selectedTime: "",
  });

  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleInputChange = (e) => {
    setScheduleDate(e.target.value);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
    const formatted = formatDate(newValue);
    setScheduleDate(formatted);
    setFormData((prev) => ({ ...prev, date: formatted }));
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        selectedTime,
      };

      const [response] = await Promise.all([
        axios.post("/api/registration", payload),
        axios.post("/api/ScheduleGoogleSheet", payload),
        axios.post("/api/WhatsappSchedule", payload)
      ]);

      if (response) {
        setFormData({
          childName: "",
          parentEmail: "",
          fatherName: "",
          fatherContact: "",
          motherName: "",
          motherContact: "",
          dateOfBirth: "",
          nationality: "",
          branch: "AV Ullal",
          admissionClass: "",
          gender: "",
          lastSchool: "",
          acceptPolicy: false,
          date: "",
          selectedTime: "",
        });
        setScheduleDate("");
        setSelectedTime("");
        setOpen(false);
        setLoading(false);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  const handlesubmitDate = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedTime) {
      alert("Please select a time slot.");
      setLoading(false);
      return;
    }

    if (/^\d{2}-\d{2}-\d{4}$/.test(scheduleDate)) {
      const [day, month, year] = scheduleDate.split("-");
      const newDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (!isNaN(newDate.getTime()) && newDate >= today) {
        setValue(newDate);
        setFormData((prev) => ({
          ...prev,
          date: formatDate(newDate),
          selectedTime: selectedTime,
        }));
        await registractionSubmit();
      } else {
        alert("Please enter a valid date.");
        setValue(null);
        setLoading(false);
      }
    } else {
      setValue(null);
      alert("Please enter a valid date in the format DD-MM-YYYY.");
      setLoading(false);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div
          className="flex flex-col items-center justify-center space-y-4 p-6"
          role="alert"
        >
          <FaCheckCircle className="text-green-600 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-green-600">
            Form Submitted Successfully!
          </h2>
          <p className="text-gray-700 text-center">
            Thank you for scheduling your visit to <span className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent font-bold font-samarkan text-xl"> Maharshi Agasthya Vidyanikethan. </span> We look
            forward to welcoming you!
          </p>
        </div>
      ) : !open ? (
        <form className="space-y-6" onSubmit={handleSubmit}>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Child&apos;s Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                placeholder="Full Name in CAPITAL"
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Date of Birth <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Nationality <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Father&apos;s Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Mother&apos;s Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Father&apos;s Contact <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fatherContact"
                value={formData.fatherContact}
                onChange={handleChange}
                required
                pattern="\d{10}"
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Mother&apos;s Contact
              </label>
              <input
                type="text"
                name="motherContact"
                value={formData.motherContact}
                onChange={handleChange}
                pattern="\d{10}"
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Parent&apos;s Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                required
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="space-y-2 hidden">
              <label className="text-sm font-medium text-blue-800">
                Branch <span className="text-red-600">*</span>
              </label>
              <input type="hidden" name="branch" value={formData.branch} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Admission for Class <span className="text-red-600">*</span>
              </label>
              <select
                name="admissionClass"
                value={formData.admissionClass}
                onChange={handleChange}
                required
                className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              >
                <option value="">Select Class</option>
                {[...Array(3)].map(
                  (_, i) => (
                    <option key={i} value={`Montessori ${i + 1}`}>
                      Montessori {i + 1}
                    </option>
                  )
                )}
                {[...Array(8)].map(
                  (_, i) => (
                    <option key={i} value={`Class ${i + 1}`}>
                      Class {i + 1}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">
                Last School Attended
              </label>
              <input
                type="text"
                name="lastSchool"
                value={formData.lastSchool}
                onChange={handleChange}
                className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800"
              />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="PrivacyPolicy"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              required
            />
            <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700 ">
              I accept the{" "}
              <Link href="/policy/privacy" className="text-blueDark underline">
                Privacy Policy
              </Link>{" "}
              for Maharshi Agasthya Vidyanikethan
            </label>
          </div>
          <div className="text-center">
            <ButtonPrimary
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Next
            </ButtonPrimary>
          </div>
        </form>
      ) : (
        <form
          className="space-y-6 px-4 md:px-0 flex flex-col items-center"
          onSubmit={handlesubmitDate}
        >
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
          <p className="text-lg font-medium text-center">
            Choose a date and time to schedule your visit to the school
          </p>
          <div className="md:flex justify-between">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={scheduleDate}
                  onChange={handleInputChange}
                  placeholder="dd-mm-yyyy"
                  className="border px-3 py-2 rounded-md w-48 text-center"
                  required
                />
                <button
                  type="button"
                  onClick={toggleCalendar}
                  className="p-2 border rounded-md bg-white"
                >
                  <CiCalendarDate className="w-5 h-5" />
                </button>
              </div>
              {isCalendarOpen && (
                <div className="mt-4 z-10">
                  <Calendar
                    onChange={(date) => {
                      handleDateChange(date);
                      toggleCalendar();
                    }}
                    value={value}
                    titleDisabled={({ date }) => date.getDay() === 0}
                  />
                </div>
              )}
            </div>
            <div className="mt-4 md:mt-0 md:ml-10">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="input w-full border border-1 p-[12px] rounded-md"
                required
              >
                <option value="" disabled>
                  Select a time slot
                </option>
                <option>9:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>12:00 PM - 1:00 PM</option>
                <option>1:00 PM - 2:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>3:00 PM - 4:00 PM</option>
                <option>4:00 PM - 4:30 PM</option>
              </select>
            </div>
          </div>
          <div className="w-full max-w-sm mt-4">
            <ButtonPrimary
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Please wait..." : "Submit"}
            </ButtonPrimary>
          </div>
        </form>
      )}
    </>
  );
};

export default ScheduleForm;



// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import registrationImage1 from "@/assets/images/register/register__1.png";
// import registrationImage2 from "@/assets/images/register/register__2.png";
// import registrationImage3 from "@/assets/images/register/register__3.png";
// import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { CiCalendarDate } from "react-icons/ci";
// import { toast } from 'react-toastify';
// import axios from "axios";

// const ScheduleForm = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [scheduleDate, setScheduleDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     childName: '',
//     parentEmail: '',
//     fatherName: '',
//     fatherContact: '',
//     motherName: '',
//     motherContact: '',
//     dateOfBirth: '',
//     nationality: '',
//     branch: '',
//     admissionClass: '',
//     gender: '',
//     lastSchool: '',
//     acceptPolicy: false,
//     date: '',
//     selectedTime: ''
//   });

//   const formatDate = (date) => {
//     if (!date) return '';
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };

//   const handleInputChange = (e) => {
//     setScheduleDate(e.target.value);
//   };

//   const handleDateChange = (newValue) => {
//     setValue(newValue);
//     const formatted = formatDate(newValue);
//     setScheduleDate(formatted);
//     setFormData(prev => ({ ...prev, date: formatted }));
//     setIsCalendarOpen(false);
//   };

//   const toggleCalendar = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOpen(true);
//   };

//   const registractionSubmit = async () => {
//     try {
//       const payload = {
//         ...formData,
//         selectedTime, // ensure selectedTime is up-to-date
//       };

//       const [response] = await Promise.all([
//         axios.post('/api/registration', payload),
//         axios.post('/api/ScheduleGoogleSheet', payload)
//       ]);

//       if (response) {
//         toast.success('Form submitted successfully.');
//         setFormData({
//           childName: '',
//           parentEmail: '',
//           fatherName: '',
//           fatherContact: '',
//           motherName: '',
//           motherContact: '',
//           dateOfBirth: '',
//           nationality: '',
//           branch: '',
//           admissionClass: '',
//           gender: '',
//           lastSchool: '',
//           acceptPolicy: false,
//           date: '',
//           selectedTime: ''
//         });
//         setScheduleDate('');
//         setSelectedTime('');
//         setOpen(false);
//         setLoading(false);
//       }
//     } catch (error) {
//       toast.error("Something went wrong, please try again.");
//       console.log("Error:", error);
//     }
//   };

//   const handlesubmitDate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!selectedTime) {
//       toast.error("Please select a time slot.");
//       setLoading(false);
//       return;
//     }

//     if (/^\d{2}-\d{2}-\d{4}$/.test(scheduleDate)) {
//       const [day, month, year] = scheduleDate.split('-');
//       const newDate = new Date(year, month - 1, day);
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);

//       if (!isNaN(newDate.getTime()) && newDate >= today) {
//         setValue(newDate);
//         setFormData(prev => ({
//           ...prev,
//           date: formatDate(newDate),
//           selectedTime: selectedTime
//         }));
//         await registractionSubmit();
//       } else {
//         toast.error('Please enter a valid date.');
//         setValue(null);
//         setLoading(false);
//       }
//     } else {
//       setValue(null);
//       toast.error('Please enter a valid date in the format DD-MM-YYYY.');
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {!open ? (
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {/* Child Name */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-blue-800">Child&apos;s Full Name <span className="text-red-600">*</span></label>
//                     <input type="text" name="childName" value={formData.childName} onChange={handleChange} required placeholder="Full Name in CAPITAL" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   {/* Date of Birth */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-blue-800">Date of Birth <span className="text-red-600">*</span></label>
//                     <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>

//                   {/* Nationality */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Nationality <span className="text-red-600">*</span></label>
//                     <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   {/* Father's Name & Contact */}
//                   <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Father&apos;s Name <span className="text-red-600">*</span></label>
//                       <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                   </div>
                 
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Mother&apos;s Name <span className="text-red-600">*</span></label>
//                       <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Father&apos;s Contact <span className="text-red-600">*</span></label>
//                       <input type="text" name="fatherContact" value={formData.fatherContact} onChange={handleChange} required pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Mother&apos;s Contact</label>
//                       <input type="text" name="motherContact" value={formData.motherContact} onChange={handleChange}  pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Parent&apos;s Email </label>
//                       <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange}  className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                   </div>

//                   {/* Parent Email & Gender */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">                  
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Gender <span className="text-red-600">*</span></label>
//                       <select name="gender" value={formData.gender} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </select>
//                     </div>
//                     {/* Branch*/}
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Branch <span className="text-red-600">*</span></label>
//                       <select name="branch" value={formData.branch} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                         <option value="">Select Branch</option>
//                         <option value="AV Srigandhakavalu">AV Srigandhakavalu</option>
//                         <option value="AV Ullal">AV Ullal</option>
//                       </select>
//                     </div>
//                     {/* Admission Class */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Admission for Class <span className="text-red-600">*</span></label>
//                     <select name="admissionClass" value={formData.admissionClass} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                       <option value="">Select Class</option>
//                       {[...Array(formData.branch === 'AV Srigandhakavalu' ? 3 : formData.branch === 'AV Ullal' ? 3 : 0)].map((_, i) => (
//                         <option key={i} value={`Montessori ${i + 1}`}>Montessori {i + 1}</option>
//                       ))}
                      
//                       {[...Array(formData.branch === 'AV Srigandhakavalu' ? 10 : formData.branch === 'AV Ullal' ? 8 : 0)].map((_, i) => (
//                         <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Last School */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Last School Attended</label>
//                     <input type="text" name="lastSchool" value={formData.lastSchool} onChange={handleChange} className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="PrivacyPolicy"
//               name="acceptPolicy"
//               checked={formData.acceptPolicy}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700">
//               I accept the  <a href="/policy/privacy" className="text-blueDark underline">Privacy Policy</a> for Maharshi Agasthya Vidyanikethan
//             </label>
//           </div>
//           <div className="text-center">
//             <ButtonPrimary type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">Next</ButtonPrimary>
//           </div>
//         </form>
//       ) : (
//         <form
//           className="space-y-6 px-4 md:px-0 flex flex-col items-center"
//           onSubmit={handlesubmitDate}
//         >
//           <p className="text-lg font-medium text-center">
//             Choose a date and time to schedule your visit to the school
//           </p>
//           <div className="md:flex justify-between">
//             <div className="flex flex-col items-center">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={scheduleDate}
//                   onChange={handleInputChange}
//                   placeholder="dd-mm-yyyy"
//                   className="border px-3 py-2 rounded-md w-48 text-center"
//                 />
//                 <button
//                   type="button"
//                   onClick={toggleCalendar}
//                   className="p-2 border rounded-md bg-white"
//                 >
//                   <CiCalendarDate className="w-5 h-5" />
//                 </button>
//               </div>
//               {isCalendarOpen && (
//                 <div className="mt-4 z-10">
//                   <Calendar
//                     onChange={(date) => {
//                       handleDateChange(date);
//                       toggleCalendar();
//                     }}
//                     value={value}
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="mt-4 md:mt-0 md:ml-10">
//               <select
//                 value={selectedTime}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 className="input w-full border border-1 p-[12px] rounded-md"
//                 required
//               >
//                 <option value="" disabled>Select a time slot</option>
//                 <option>9:00 AM - 10:00 AM</option>
//                 <option>10:00 AM - 11:00 AM</option>
//                 <option>11:00 AM - 12:00 PM</option>
//                 <option>12:00 PM - 1:00 PM</option>
//                 <option>1:00 PM - 2:00 PM</option>
//                 <option>2:00 PM - 3:00 PM</option>
//                 <option>3:00 PM - 4:00 PM</option>
//                 <option>4:00 PM - 4:30 PM</option>
//               </select>
//             </div>
//           </div>

//           <div className="w-full max-w-sm mt-4">
//             <ButtonPrimary
//               type="submit"
//               className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               {loading ? "Please wait..." : "Submit"}
//             </ButtonPrimary>
//           </div>
//         </form>
//       )}
//     </>
//   );
// };

// export default ScheduleForm;



// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import registrationImage1 from "@/assets/images/register/register__1.png";
// import registrationImage2 from "@/assets/images/register/register__2.png";
// import registrationImage3 from "@/assets/images/register/register__3.png";
// import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { CiCalendarDate } from "react-icons/ci";
// import { toast } from 'react-toastify';
// import axios from "axios";

// const ScheduleForm = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [scheduleDate, setScheduleDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState("");
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     childName: '',
//     parentEmail: '',
//     fatherName: '',
//     fatherContact: '',
//     motherName: '',
//     motherContact: '',
//     dateOfBirth: '',
//     nationality: '',
//     branch: '',
//     admissionClass: '',
//     gender: '',
//     lastSchool: '',   
//     acceptPolicy: false,
//     date: '',
//     selectedTime:''
//   });

//   const formatDate = (date) => {
//     if (!date) return '';
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };

//   const handleInputChange = (e) => {
//     setScheduleDate(e.target.value);
//   };

//   const handleDateChange = (newValue) => {
//     setValue(newValue);
//     setScheduleDate(formatDate(newValue));
//     setIsCalendarOpen(false);
//   };

//   const toggleCalendar = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOpen(true);
//   };

//   const registractionSubmit = async () => {
//     try {
//       const [response] = await Promise.all([
//         axios.post('/api/registration', formData),
//         axios.post('/api/ScheduleGoogleSheet', formData)
//       ]);

//       if (response) {
//         toast.success('Form submitted successfully.');
//         setFormData({
//           childName: '',
//           parentEmail: '',
//           fatherName: '',
//           fatherContact: '',
//           motherName: '',
//           motherContact: '',
//           dateOfBirth: '',
//           nationality: '',
//           branch: '',
//           admissionClass: '',
//           gender: '',
//           lastSchool: '',   
//           acceptPolicy: false,
//           date: '',
//           selectedTime:''
//         });
//         setScheduleDate('');
//         setOpen(false);
//         setLoading(false);
//       }
//     } catch (error) {
//       toast.error("Something went wrong, please try again.");
//       console.log("Error:", error);
//     }
//   };

//   const handlesubmitDate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (/^\d{2}-\d{2}-\d{4}$/.test(scheduleDate)) {
//       const [day, month, year] = scheduleDate.split('-');
//       const newDate = new Date(year, month - 1, day);
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);

//       if (!isNaN(newDate.getTime()) && newDate >= today) {
//         setValue(newDate);
//         formData.date = formatDate(newDate);
//         registractionSubmit();
//       } else {
//         toast.error('Please enter a valid date.');
//         setValue(null);
//       }
//     } else {
//       setValue(null);
//       toast.error('Please enter a valid date in the format DD-MM-YYYY.');
//     }
//   };

//   return (
//     <>
//               {!open ? (
//                 <form className="space-y-6" onSubmit={handleSubmit}>

//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {/* Child Name */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-blue-800">Child&apos;s Full Name <span className="text-red-600">*</span></label>
//                     <input type="text" name="childName" value={formData.childName} onChange={handleChange} required placeholder="Full Name in CAPITAL" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   {/* Date of Birth */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-blue-800">Date of Birth <span className="text-red-600">*</span></label>
//                     <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>

//                   {/* Nationality */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Nationality <span className="text-red-600">*</span></label>
//                     <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   {/* Father's Name & Contact */}
//                   <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Father&apos;s Name <span className="text-red-600">*</span></label>
//                       <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                   </div>
                 
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Mother&apos;s Name <span className="text-red-600">*</span></label>
//                       <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Father&apos;s Contact <span className="text-red-600">*</span></label>
//                       <input type="text" name="fatherContact" value={formData.fatherContact} onChange={handleChange} required pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Mother&apos;s Contact</label>
//                       <input type="text" name="motherContact" value={formData.motherContact} onChange={handleChange}  pattern="\d{10}" className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Parent&apos;s Email </label>
//                       <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange}  className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                     </div>
//                   </div>

//                   {/* Parent Email & Gender */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">                  
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Gender <span className="text-red-600">*</span></label>
//                       <select name="gender" value={formData.gender} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </select>
//                     </div>
//                     {/* Branch*/}
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-blue-800">Branch <span className="text-red-600">*</span></label>
//                       <select name="branch" value={formData.branch} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                         <option value="">Select Branch</option>
//                         <option value="AV Srigandhakavalu">AV Srigandhakavalu</option>
//                         <option value="AV Ullal">AV Ullal</option>
//                       </select>
//                     </div>
//                     {/* Admission Class */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Admission for Class <span className="text-red-600">*</span></label>
//                     <select name="admissionClass" value={formData.admissionClass} onChange={handleChange} required className="input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800">
//                       <option value="">Select Class</option>
//                       {[...Array(formData.branch === 'AV Srigandhakavalu' ? 3 : formData.branch === 'AV Ullal' ? 3 : 0)].map((_, i) => (
//                         <option key={i} value={`Montessori ${i + 1}`}>Montessori {i + 1}</option>
//                       ))}
                      
//                       {[...Array(formData.branch === 'AV Srigandhakavalu' ? 10 : formData.branch === 'AV Ullal' ? 8 : 0)].map((_, i) => (
//                         <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Last School */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-blue-800">Last School Attended</label>
//                     <input type="text" name="lastSchool" value={formData.lastSchool} onChange={handleChange} className="input w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-800" />
//                   </div>
//                   </div>

//                   {/* Accept Policy */}
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="PrivacyPolicy" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} required />
//                     <label htmlFor="PrivacyPolicy" className="text-sm text-gray-700">
//                       I accept the <span className="text-blue-600 underline">Privacy Policy</span> for Agasthya Vidyanikethan
//                     </label>
//                   </div>

//                   <div className="text-center">
//                     <ButtonPrimary type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">Next</ButtonPrimary>
//                   </div>
//                 </form>
//               ) : (
//                 <form
//         className="space-y-6 px-4 md:px-0 flex flex-col items-center"
//         onSubmit={handlesubmitDate}
//         >
//         <p className="text-lg font-medium text-center">
//             Choose a date and time to schedule your visit to the school
//         </p>
//         <div className="md:flex justify-between">
//         <div className="flex flex-col items-center">
//             <div className="flex items-center space-x-2">
//             <input
//                 type="text"
//                 value={scheduleDate}
//                 onChange={handleInputChange}
//                 placeholder="dd-mm-yyyy"
//                 className="border px-3 py-2 rounded-md w-48 text-center"
//             />
//             <button
//                 type="button"
//                 onClick={toggleCalendar}
//                 className="p-2 border rounded-md bg-white"
//             >
//                 <CiCalendarDate className="w-5 h-5" />
//             </button>
//             </div>

//             {isCalendarOpen && (
//             <div className="mt-4 z-10">
//                 <Calendar
//                 onChange={(date) => {
//                     handleDateChange(date);
//                     toggleCalendar(); // close calendar after selection
//                 }}
//                 value={value}
//                 />
//             </div>
//             )}
//         </div>
//         <div className="">
//                       <select
//                         value={selectedTime}
//                         onChange={(e) => setSelectedTime(e.target.value)}
//                         className="mt-3 md:mt-0 md:ml-10 input w-full border border-1 p-[12px] rounded-md"
//                         required
//                       >
//                         <option value=""  disabled>Select a time slot</option>
//                         <option>9:00 AM - 10:00 AM</option>
//                         <option>10:00 AM - 11:00 AM</option>
//                         <option>11:00 AM - 12:00 PM</option>
//                         <option>12:00 PM - 1:00 PM</option>
//                         <option>1:00 PM - 2:00 PM</option>
//                         <option>2:00 PM - 3:00 PM</option>
//                         <option>3:00 PM - 4:00 PM</option>
//                         <option>4:00 PM - 4:30 PM</option>
//                       </select>
//                     </div>
//                     </div>

//         <div className="w-full max-w-sm mt-4">
//             <ButtonPrimary
//             type="submit"
//             className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white"
//             >
//             {loading ? "Please wait..." : "Submit"}
//             </ButtonPrimary>
//         </div>
//         </form>


//               )}
//       </>
//   );
// };

// export default ScheduleForm;