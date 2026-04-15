import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    idType: "",
    idNumber: "",
    idCountry: "",
    gender: "",
    dob: "",
    mobile: "",
    familyMobile: "",
    email: "",
    postalCode: "",
    company: "",
    workDuration: "",
    helpMessage: "",
    communicationMethod: "",
    paymentMethod: "",
    salaryDate: "",
    commitment: false,
  });

  const [progress] = useState(35);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSingleCheckbox = (groupName, value) => {
    setFormData((prev) => ({
      ...prev,
      [groupName]: prev[groupName] === value ? "" : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://eliashib.vercel.app/api/applications/personal-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to save personal info");
    }

    localStorage.setItem("applicationId", data.applicationId);

    // if using react-router
    window.location.href = "/apply/documents";
  } catch (error) {
    alert(error.message || "Something went wrong");
  }
};

  return (
    <section className="min-h-screen bg-black text-white px-6 sm:px-10 lg:px-12 py-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Navbar */}
        <Navbar />

        <form onSubmit={handleSubmit} className="max-w-[560px] mt-40">
          {/* Basic personal information */}
          <div className="mb-12">
            <h2 className="text-[30px] font-poppins mb-8">Basic personal information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold mb-2">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none border-none"
                >
                  <option value="">Please select...</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Ms</option>
                  <option>Dr</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Identification Type</label>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.idType === "SA ID"}
                      onChange={() => handleSingleCheckbox("idType", "SA ID")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">SA ID</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.idType === "Passport"}
                      onChange={() => handleSingleCheckbox("idType", "Passport")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Passport</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">ID/ Passport Number</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">ID/ Passport Country</label>
                <select
                  name="idCountry"
                  value={formData.idCountry}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none border-none"
                >
                  <option value="">Please select...</option>
                  <option>South Africa</option>
                  <option>Botswana</option>
                  <option>Zimbabwe</option>
                  <option>Namibia</option>
                  <option>Mozambique</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Gender*</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.gender === "Female"}
                      onChange={() => handleSingleCheckbox("gender", "Female")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Female</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.gender === "Male"}
                      onChange={() => handleSingleCheckbox("gender", "Male")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Male</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  placeholder="DD/MM/YYYY"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white placeholder:text-white/60 px-3 text-xs outline-none"
                />
              </div>
            </div>
          </div>

          {/* Primary contact details */}
          <div className="mb-12">
            <h2 className="text-[30px] font-normal mb-8">Primary contact details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold mb-2">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  Mobile Number of a Friend/Family
                </label>
                <input
                  type="text"
                  name="familyMobile"
                  value={formData.familyMobile}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white px-3 text-xs outline-none"
                />
              </div>
            </div>
          </div>

          {/* Tell us a bit more */}
          <div className="mb-12">
            <h2 className="text-[30px] font-normal mb-8">Tell us a bit more</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Where do you work ?"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white placeholder:text-white/60 px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">How long have you worked?</label>
                <input
                  type="text"
                  name="workDuration"
                  placeholder="DD/MM/YYYY"
                  value={formData.workDuration}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white placeholder:text-white/60 px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  Please tell us how may we help you ?
                </label>
                <textarea
                  name="helpMessage"
                  value={formData.helpMessage}
                  onChange={handleChange}
                  className="w-full h-32 bg-[#666666] text-white px-3 py-3 text-xs outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  Preferred method of communication
                </label>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.communicationMethod === "Phone"}
                      onChange={() => handleSingleCheckbox("communicationMethod", "Phone")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Phone</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.communicationMethod === "Email"}
                      onChange={() => handleSingleCheckbox("communicationMethod", "Email")}
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Email</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Confirmation Details */}
          <div className="mb-10">
            <h2 className="text-[30px] font-normal mb-8">Payment Confirmation Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  Preferred method of Payment
                </label>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.paymentMethod === "Pick-up from my workplace"}
                      onChange={() =>
                        handleSingleCheckbox("paymentMethod", "Pick-up from my workplace")
                      }
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Pick-up from my workplace</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.paymentMethod === "Electronic Funds Transfer (EFT)"}
                      onChange={() =>
                        handleSingleCheckbox(
                          "paymentMethod",
                          "Electronic Funds Transfer (EFT)"
                        )
                      }
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">Electronic Funds Transfer (EFT)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.paymentMethod === "ATM Direct Deposit"}
                      onChange={() =>
                        handleSingleCheckbox("paymentMethod", "ATM Direct Deposit")
                      }
                      className="accent-white w-3 h-3"
                    />
                    <span className="text-xs">ATM Direct Deposit</span>
                  </label>
                </div>
              </div>

              <div className="max-w-[480px]">
                <label className="block text-[13px] font-semibold mb-2">Salary Date</label>
                <input
                  type="text"
                  name="salaryDate"
                  placeholder="DD/MM/YYYY"
                  value={formData.salaryDate}
                  onChange={handleChange}
                  className="w-full h-9 bg-[#666666] text-white placeholder:text-white/60 px-3 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-2">
                  I hereby commit to making all payments as per the scheduled dates above
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="commitment"
                    checked={formData.commitment}
                    onChange={handleChange}
                    className="accent-white w-3 h-3 mt-1"
                  />
                  <span className="text-xs text-white/80">
                    I confirm that I commit to making all the payments
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="pt-8 flex justify-end">
            <button
              type="submit"
              className="bg-[#8b0a7f] hover:bg-[#a10e91] transition-colors text-white text-[11px] font-semibold px-10 py-3 rounded-[4px] uppercase tracking-wide"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalInfoForm;