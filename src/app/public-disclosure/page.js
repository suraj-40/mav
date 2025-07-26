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
    description: "Official affiliation documents and recent extensions"
  },
  {
    title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE*",
    icon: Building2,
    description: "Legal registration and renewal certificates"
  },
  {
    title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    icon: Shield,
    description: "Government issued No Objection Certificate"
  },
  {
    title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE*",
    icon: Award,
    description: "Right to Education Act recognition certificates"
  },
  {
    title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE*",
    icon: Building2,
    description: "Building safety compliance certificate"
  },
  {
    title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY*",
    icon: Flame,
    description: "Fire safety compliance certificate"
  },
  {
    title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION*",
    icon: CheckCircle,
    description: "Self-certification documents for affiliation"
  },
  {
    title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    icon: Droplets,
    description: "Water, health and sanitation compliance"
  },
  {
    title: "FEE STRUCTURE OF THE SCHOOL*",
    icon: DollarSign,
    description: "Complete fee structure and payment details"
  },
  {
    title: "ANNUAL ACADEMIC CALENDER*",
    icon: Calendar,
    description: "Academic calendar and important dates"
  },
  {
    title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)*",
    icon: Users,
    description: "School Management Committee members"
  },
  {
    title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS*",
    icon: Users,
    description: "PTA committee members and contacts"
  },
  {
    title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    icon: TrendingUp,
    description: "Board examination results and performance"
  }
];

const headerColors = [
  "#1e40af", // 1. Blue
  "#15803d", // 2. Green
  "#7c3aed", // 3. Purple
  "#ea580c", // 4. Orange
  "#312e81", // 5. Indigo
  "#b91c1c", // 6. Red
  "#059669", // 7. Emerald
  "#0e7490", // 8. Cyan
  "#ca8a04", // 9. Yellow
  "#be185d", // 10. Pink
  "#6d28d9", // 11. Violet
  "#0f766e", // 12. Teal
  "#be123c"  // 13. Rose
];

const docFiles = {
  1: "Copy of affiliation_(Sl No. 1).pdf",
  2: "Trust deed (Sl No. 2).pdf",
  3: "AGGASTHYA NOC_(SL No. 3).pdf",
  4: "RTE RR (Sl No.4).pdf",
  5: "Building Safety Certificate (Sl No. 5).pdf",
  6: "Fire NOC (Sl No. 6).pdf",
  7: "Self Certification (Sl No. 7).pdf",
  8: "WATER, HEALTH AND SANITATION CERTIFICATES (SL No.8).pdf",
  9: "FEE STRUCTURE OF THE SCHOOL (Sl No. 9).pdf",
  10: "Annual Callendar (Sl No. 10).pdf",
  11: "School Management (Sl No. 11).pdf",
  12: "PTA (SL No.12).pdf",
  13: "Last 3 years 2_(SL No. 13).pdf"
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
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-12 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-5 shadow-md">
              <FileText className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide">
              Public Disclosure
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transparency and accountability are core values at Agasthya Vidyanikethan. 
              Access all important school documents and certificates here.
            </p>
          </div>

          {/* Branch Selector */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="flex w-full max-w-2xl bg-white/95 rounded-lg shadow-md border border-gray-100 overflow-hidden">
                {branches.map((branch, index) => (
                  <button
                    key={branch.id}
                    onClick={() => setActiveBranch(branch.id)}
                    className={`relative z-10 w-1/2 px-4 py-3 text-center font-medium text-sm md:text-base transition-all duration-300
                      ${activeBranch === branch.id 
                        ? "bg-avorange text-white" 
                        : "bg-white text-gray-800 hover:bg-orange-50 hover:text-orange-700"
                      }
                      ${index === 0 ? "rounded-l-lg" : ""} 
                      ${index === branches.length - 1 ? "rounded-r-lg" : ""}
                      ${index !== 0 ? "border-l border-gray-200" : ""}
                    `}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="hidden md:block">{branch.shortName}</span>
                      <span className="md:hidden">{branch.shortName.split(' ')[0]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Branch Info */}
            {branches.map(branch => (
              branch.id === activeBranch && (
                <div key={branch.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-semibold text-gray-700">Address:</span>
                          <p className="mt-1">{branch.address}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Phone:</span>
                          <p className="mt-1">{branch.phone}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Email:</span>
                          <p className="mt-1">{branch.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Documents Section */}
          {branches.find(b => b.id === activeBranch)?.hasDocuments ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Available Documents
                </h2>
                <p className="text-gray-600">
                  All documents are from {branches.find(b => b.id === activeBranch)?.name}
                </p>
              </div>

              {/* Documents Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {documents.map((doc, idx) => {
                  const IconComponent = doc.icon;
                  const slNo = idx + 1;
                  const fileName = docFiles[slNo];
                  const fileUrl = fileName ? `/docs/${fileName}` : null;
                  return (
                    <div 
                      key={idx} 
                      className="rounded-lg shadow-lg border border-gray-200 overflow-hidden bg-white flex flex-col transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
                      aria-label={doc.title}
                    >
                      {/* Card Header */}
                      <div style={{ backgroundColor: headerColors[idx] }} className="p-7 flex flex-col justify-center space-y-3 text-white">
                        <div className="flex items-center justify-between">
                          <IconComponent className="w-9 h-9" />
                          <span className="text-sm font-semibold bg-white/30 px-3 py-1 rounded-full text-white select-none">
                            {slNo}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold leading-tight tracking-wide">
                          {doc.title}
                        </h3>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                          {doc.description}
                        </p>
                        {/* Status Badge and Button */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap' }}>
                          {fileUrl ? (
                            <>
                              <a
                                href={fileUrl}
                                download
                                aria-label={`Download document ${doc.title}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  minWidth: 100,
                                  padding: '8px 16px',
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: '#fff',
                                  background: '#2563eb',
                                  border: '2px solid #1d4ed8',
                                  borderRadius: 8,
                                  cursor: 'pointer',
                                  textDecoration: 'none',
                                  justifyContent: 'center',
                                }}
                              >
                                <FileText style={{ width: 18, height: 18, marginRight: 8 }} />
                                Download
                              </a>
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View document ${doc.title}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  minWidth: 100,
                                  padding: '8px 16px',
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: '#2563eb',
                                  background: '#fff',
                                  border: '2px solid #2563eb',
                                  borderRadius: 8,
                                  cursor: 'pointer',
                                  textDecoration: 'none',
                                  justifyContent: 'center',
                                }}
                              >
                                <FileText style={{ width: 18, height: 18, marginRight: 8 }} />
                                View
                              </a>
                            </>
                          ) : (
                            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 select-none">
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documents Coming Soon
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
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
