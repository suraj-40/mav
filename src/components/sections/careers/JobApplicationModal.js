import React, { useState } from "react";

export default function JobApplicationModal({ open, onClose, jobTitle }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const form = e.target;
    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("message", form.message.value);
    formData.append("jobTitle", jobTitle || "");
    formData.append("resumeUrl", form.resumeUrl.value);
    try {
      const res = await fetch("/api/ContactJobPostings", {
        method: "POST",
        body: formData
      });
      const result = await res.json();
      if (result.success) {
        setSuccess("Application submitted successfully!");
        setTimeout(() => {
          setSuccess("");
          onClose();
        }, 1500);
        form.reset();
      } else {
        setError(result.error || "Submission failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-xs sm:max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-3 text-center text-primary">Job Application Form</h2>
        {jobTitle && (
          <div className="mb-2 text-center text-base font-semibold text-gray-700">
            Applying for: <span className="text-orange-700">{jobTitle}</span>
          </div>
        )}
        <form className="space-y-3" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
            <input name="name" type="text" className="w-full border rounded px-2 py-1 text-sm" placeholder="Name" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
            <input name="email" type="email" className="w-full border rounded px-2 py-1 text-sm" placeholder="Email" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone No. <span className="text-red-500">*</span></label>
            <input name="phone" type="tel" className="w-full border rounded px-2 py-1 text-sm" placeholder="Phone No." required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Resume URL <span className="text-red-500">*</span></label>
            <input name="resumeUrl" type="url" className="w-full border rounded px-2 py-1 text-sm" placeholder="Paste your resume link here" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea name="message" className="w-full border rounded px-2 py-1 text-sm" rows={2} placeholder="Message" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1a237e] text-white font-semibold py-2 rounded mt-2 hover:bg-[#0d1333] transition-colors text-sm"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {success && <div className="text-green-600 text-center mt-2 text-sm">{success}</div>}
          {error && <div className="text-red-600 text-center mt-2 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
}
