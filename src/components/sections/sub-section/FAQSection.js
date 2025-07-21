'use client';

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Where is Agasthya Vidyanikethan located in Bangalore?",
    answer: (
      <>
        Agasthya Vidyanikethan is located in Nagarbhavi and Ullal, two well-connected localities in Bangalore. With calm surroundings and excellent infrastructure, the school is a top choice for parents looking for the best schools in Bangalore near me.<br />
        <Link href="/contact-us" className="text-orange-600 underline font-medium">Agasthya Vidyanikethan Nagarbhavi Bangalore location</Link>
      </>
    ),
  },
  {
    question: "What curriculum does Agasthya Vidyanikethan follow?",
    answer: (
      <>
        The Agasthya Vidyanikethan curriculum is thoughtfully designed to blend academics, Indian values, and real-world skills. With a strong focus on foundational years, it ranks among the best schools in Bangalore for child-centric learning and holistic education.<br />
        <Link href="/atoms-e-learning-portal" className="text-orange-600 underline font-medium">Curriculum at Agasthya Vidyanikethan</Link>
      </>
    ),
  },
  {
    question: "What classes are offered at Agasthya Vidyanikethan Unit 2?",
    answer: (
      <>
        Agasthya Vidyanikethan Unit 2 in Ullal offers classes from pre-primary to high school. It emphasizes personalized attention, hands-on learning, and values education, making it a leading name among schools in Bangalore committed to quality.<br />
        <Link href="/contact-us?branch=ullal" className="text-orange-600 underline font-medium">Agasthya Vidyanikethan Unit 2 admissions</Link>
      </>
    ),
  },
  {
    question: "How can I apply for admission at Agasthya Vidyanikethan?",
    answer: (
      <>
        Admissions are open for the current academic year. Parents seeking the best school in Bangalore can begin by submitting the enquiry form online or visiting the school campus to understand the process in detail.<br />
        <Link href="/contact-us#admissions" className="text-orange-600 underline font-medium">Apply for admission at Agasthya Vidyanikethan</Link>
      </>
    ),
  },
  {
    question: "What are the features of Agasthya Vidyanikethan’s campus?",
    answer: (
      <>
        The Nagarbhavi campus includes well-equipped classrooms, science and computer labs, a library, outdoor play areas, and a culture that encourages holistic development.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-8" id="faqs">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="mb-5 text-center">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">FAQs</h2>
          <p className="text-gray-500 text-sm md:text-base">Quick answers about Agasthya Vidyanikethan</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-orange-100 rounded-lg bg-white shadow-sm overflow-hidden flex">
              <div className="w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-l-lg" />
              <div className="flex-1">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-left focus:outline-none group"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-medium text-gray-800 text-base pr-2">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${openIndex === idx ? "rotate-180 text-orange-600" : "text-gray-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`px-4 pb-2 text-gray-700 text-base transition-all duration-200 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  {openIndex === idx && <div className="pt-1">{faq.answer}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 



