"use client";
import React, { useState } from "react";
import { 
  FileText, 
  Building2, 
  Shield, 
  Award, 
  Flame, 
  CheckCircle, 
  Droplets, 
  DollarSign, 
  Calendar, 
  Users, 
  TrendingUp,
  MapPin
} from "lucide-react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const documents = [
  {
    title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    icon: FileText,
    description: "Official affiliation documents & recent extension",
    image: "/images/gallery/affiliation.jpg" // Placeholder - you can add actual images
  },
  {
    title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE*",
    icon: Building2,
    description: "Legal registration & renewal certificate",
    image: "/images/gallery/trust.jpg"
  },
  {
    title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    icon: Shield,
    description: "Government issued No Objection certificate",
    image: "/images/gallery/noc.jpg"
  },
  {
    title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE*",
    icon: Award,
    description: "Right to Education Act recognition certificate",
    image: "/images/gallery/rte.jpg"
  },
  {
    title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE*",
    icon: Building2,
    description: "Building safety compliance certificate",
    image: "/images/gallery/building.jpg"
  },
  {
    title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY*",
    icon: Flame,
    description: "Fire safety compliance certificate",
    image: "/images/gallery/fire.jpg"
  },
  {
    title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION*",
    icon: CheckCircle,
    description: "Self-certification documents for affiliation",
    image: "/images/gallery/certification.jpg"
  },
  {
    title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    icon: Droplets,
    description: "Water, health & sanitation compliance",
    image: "/images/gallery/water.jpg"
  },
  {
    title: "FEE STRUCTURE OF THE SCHOOL*",
    icon: DollarSign,
    description: "Complete fee structure & payment details",
    image: "/images/gallery/fees.jpg"
  },
  {
    title: "ANNUAL ACADEMIC CALENDER*",
    icon: Calendar,
    description: "Academic calendar & important dates",
    image: "/images/gallery/calendar.jpg"
  },
  {
    title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)*",
    icon: Users,
    description: "School Management committee members",
    image: "/images/gallery/smc.jpg"
  },
  {
    title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS*",
    icon: Users,
    description: "PTA committee members & contacts",
    image: "/images/gallery/pta.jpg"
  },
  {
    title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    icon: TrendingUp,
    description: "Board examination results & performance",
    image: "/images/gallery/results.jpg"
  },
  {
    title: "SELF CERTIFICATION PROFORMA",
    icon: CheckCircle,
    description: "Self certification proforma for school compliance",
    image: "/images/gallery/self-cert.jpg"
  },
  {
    title: "MANDATORY DISCLOSURE DETAILS",
    icon: FileText,
    description: "Mandatory disclosure details",
    image: "/images/gallery/mandatory.jpg"
  }
];

const docFiles = {
  1: "Copy of affiliation_(Sl No. 1).pdf",
  2: "Trust deed (Sl No. 2).pdf",
  3: "AGGASTHYA NOC_(SL No. 3).pdf",
  4: "RTE RR (Sl No.4).pdf",
  5: "Building Safety Certificate (Sl No. 5).pdf",
  6: "Fire NOC (Sl No. 6).pdf",
  7: "Self Certification (Sl No. 7).pdf",
  8: "WHSC (SL No.8).pdf",
  9: "FEE STRUCTURE OF THE SCHOOL (Sl No. 9).pdf",
  10: "Annual Callendar (Sl No. 10).pdf",
  11: "School Management (Sl No. 11).pdf",
  12: "PTA (SL No.12).pdf",
  13: "Last 3 years 2_(SL No. 13).pdf",
  14: "AV-2_Self_Certification_Proforma_Scanned.pdf",
  15: "Mandatory Disclosure Details _ AV ULLA.pdf"
};

const branches = [
  {
    id: "ullal",
    name: "Agasthya Vidyanikethan - Ullal Branch Campus",
    shortName: "Ullal Branch",
    address: "#170/3, 6th block, Sir M. Vishweshwaraiah Layout, Ullal Ring road, Bengaluru-560110",
    phone: "7760776098 | 7760776046",
    email: "info@av.school",
    hasDocuments: true
  },
  {
    id: "srigandhakaval",
    name: "Agasthya Vidyanikethan - Srigandhakaval Branch Campus",
    shortName: "Srigandhakaval Branch",
    address: "# 1566, 'D' Group Layout, 60 ft. Road, Near 2nd Water Tank, Srigandhakaval, Bengaluru - 560091",
    phone: "9880906633 | 9972342144",
    email: "info@av.school",
    hasDocuments: false
  }
];

export default function PublicDisclosure() {
  const [activeBranch, setActiveBranch] = useState("ullal");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          {/* Header Section - Matching the theme */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
              Public Disclosure
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Transparency & accountability are core values at Agasthya Vidyanikethan. 
              Access all important school documents & certificates here.
            </p>
            {/* Animated underline */}
            <div className="flex justify-center">
              <svg width={180} height={30} viewBox="0 0 180 30">
                <defs>
                  <linearGradient id="headingUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M5,20 Q90,5 175,20"
                  fill="none"
                  stroke="url(#headingUnderline)"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="d"
                    dur="6s"
                    repeatCount="indefinite"
                    values="M5,20 Q90,5 175,20; M5,15 Q90,25 175,15; M5,20 Q90,5 175,20"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                  />
                </path>
              </svg>
            </div>
          </div>

          {/* Branch Selector - Clean white card */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="flex w-full max-w-5xl bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {branches.map((branch, index) => (
                  <button
                    key={branch.id}
                    onClick={() => setActiveBranch(branch.id)}
                    className={`relative z-10 w-1/2 px-6 py-4 text-center font-semibold text-sm transition-all duration-300
                      ${activeBranch === branch.id 
                        ? "bg-[#FF5722] text-white" 
                        : "bg-white text-gray-900 hover:bg-orange-50 hover:text-[#FF5722]"}
                    `}
                  >
                    <span className="block md:hidden">{branch.id === "ullal" ? "AV Ullal" : "AV Srigandhakaval"}</span>
                    <span className="hidden md:block whitespace-nowrap">{branch.name}</span>
                  </button>
                ))}
              </div>
            </div>
           </div>
          
           {/* Academic Year Selector - Future Implementation */}
            {/*
            <div className="mb-12">
              <div className="flex justify-center mb-8">
                <div className="flex w-full max-w-5xl bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button className="relative z-10 w-1/2 px-6 py-4 text-center font-semibold text-sm transition-all duration-300 bg-[#FF5722] text-white">
                    2024-25
                  </button>
                  <button className="relative z-10 w-1/2 px-6 py-4 text-center font-semibold text-sm transition-all duration-300 bg-white text-gray-900 hover:bg-orange-50 hover:text-[#FF5722]">
                    2025-26
                  </button>
                </div>
              </div>
            */}

            {/* Branch Info - White card with shadow */}
            {branches.map(branch => (
              branch.id === activeBranch && (
                <div key={branch.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#FF5722] rounded-xl flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{branch.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                        <div>
                          <span className="font-semibold text-gray-700 block mb-2">Address:</span>
                          <p className="leading-relaxed">{branch.address}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700 block mb-2">Phone:</span>
                          <p className="leading-relaxed">{branch.phone}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700 block mb-2">Email:</span>
                          <p className="leading-relaxed">{branch.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}

          {/* Documents Section */}
          {branches.find(b => b.id === activeBranch)?.hasDocuments ? (
            <>
              <div className="text-center pt-8 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Available <span className="text-[#FF5722]">Documents</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  All documents are from {branches.find(b => b.id === activeBranch)?.name}
                </p>
                <div className="w-25 h-1 bg-gradient-to-r from-av via-avorange to-avorange mx-auto mt-4"></div>
              </div>

              {/* Documents Grid - Gallery-style cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {documents.map((doc, idx) => {
                  const IconComponent = doc.icon;
                  const slNo = idx + 1;
                  const fileName = docFiles[slNo];
                  const fileUrl = fileName ? `/docs/${fileName}` : null;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                      aria-label={doc.title}
                    >
                      {/* Card Image Section - PDF Preview */}
                      <div className="relative h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        {fileUrl ? (
                          /* PDF Preview */
                          <div className="absolute inset-0 overflow-hidden md:static md:h-full" style={{ overflow: 'hidden' }}>
                            <iframe
                              src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&scrollbar=0&statusbar=0&messages=0&scrollbar=0`}
                              className="w-[130%] h-full md:w-full"
                              title={`PDF Preview - ${doc.title}`}
                              style={{ 
                                border: 'none',
                                overflow: 'hidden !important',
                                scrollbarWidth: 'none !important',
                                msOverflowStyle: 'none !important',
                                WebkitOverflowScrolling: 'none !important',
                                pointerEvents: 'none !important'
                              }}
                              scrolling="no"
                              frameBorder="0"
                            />
                          </div>
                        ) : (
                          /* Placeholder when no PDF available */
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-gray-400" />
                          </div>
                        )}
                        
                        {/* Dark overlay at bottom for text */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-20 md:h-24"></div>
                        
                        {/* Orange numbered circle */}
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {String(slNo).padStart(2, '0')}
                          </span>
                        </div>
                        
                        {/* Title removed as requested */}
                        </div>

                      {/* Card Body - Action buttons */}
                      <div className="p-6">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 font-bold">
                          {doc.description}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          {fileUrl ? (
                            <>
                              <a
                                href={fileUrl}
                                download
                                aria-label={`Download document ${doc.title}`}
                                className="inline-flex items-center justify-center px-4 py-2 bg-[#1B204C] text-white text-sm font-semibold rounded-lg hover:bg-[#141a35] transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                Download
                              </a>
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View document ${doc.title}`}
                                className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#1B204C] border-2 border-[#1B204C] text-sm font-semibold rounded-lg hover:bg-[#f2f3f8] transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                View
                              </a>
                            </>
                          ) : (
                            <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-yellow-100 text-yellow-800">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents Coming Soon
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-lg">
                Documents for {branches.find(b => b.id === activeBranch)?.name} will be available soon.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
