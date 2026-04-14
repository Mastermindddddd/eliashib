import React, { useRef, useState } from "react";
import SelfieCardImg from "/selfie-card.png";
import IdPassportCardImg from "/id-passport-card.png";
import Navbar from "../components/Navbar/Navbar";

const DocumentUploadForm = () => {
  const selfieInputRef = useRef(null);
  const idInputRef = useRef(null);

  const [formData, setFormData] = useState({
  selfie: null,
  idPassport: null,
  marketingEmail: "",
  marketingSMS: "",
  marketingPhone: "",
  marketingWhatsapp: "",
  joinMore: false,
  acceptConsent: false,
});

  const handleFileChange = (e, field) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleYesNoChange = (name, value) => {
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const triggerFileInput = (ref) => {
  if (ref.current) {
    ref.current.click();
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const applicationId = localStorage.getItem("applicationId");

  if (!applicationId) {
    alert("Application session not found. Please complete the personal info form first.");
    return;
  }

  const payload = new FormData();

  if (formData.selfie) payload.append("selfie", formData.selfie);
  if (formData.idPassport) payload.append("idPassport", formData.idPassport);

  payload.append("marketingEmail", formData.marketingEmail || "");
  payload.append("marketingSMS", formData.marketingSMS || "");
  payload.append("marketingPhone", formData.marketingPhone || "");
  payload.append("marketingWhatsapp", formData.marketingWhatsapp || "");
  payload.append("joinMore", formData.joinMore);
  payload.append("acceptConsent", formData.acceptConsent);

  try {
    const res = await fetch(`https://eliashib.vercel.app/api/applications/${applicationId}/documents`, {
      method: "POST",
      body: payload,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to submit application");
    }

    localStorage.removeItem("applicationId");
    alert("Application submitted successfully");
    window.location.href = "/application-success";
  } catch (error) {
    alert(error.message || "Something went wrong");
  }
};
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="w-full px-6 sm:px-10 lg:px-14 pt-6">
        <Navbar />
      </div>

      <div className="mt-24 bg-gradient-to-r from-fuchsia-900 via-[#1a0530] to-[#020b2c] py-7 sm:py-8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 text-center">
          <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-light leading-tight">
            Start your application now &amp;
            <br />
            <span className="font-medium">Join Eliashib Academy</span>
          </h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-[1160px] mx-auto px-6 sm:px-10 lg:px-14 pt-14 sm:pt-16 pb-20"
      >
        <div className="max-w-[840px] mx-auto">
          <h2 className="text-[18px] sm:text-[20px] font-semibold">Documents</h2>
          <p className="mt-6 text-[12px] sm:text-[13px] text-white/80 leading-relaxed">
            Take a selfie and a picture of your ID or Passport by clicking on the icons below.
            To upload existing pictures select CHOOSE FILE
          </p>
        </div>

        {/* Upload cards */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12">
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => triggerFileInput(selfieInputRef)}
              className="rounded-[6px] overflow-hidden transition-transform hover:scale-[1.01]"
            >
              <img
                src={SelfieCardImg}
                alt="Upload Selfie"
                className="w-[250px] sm:w-[270px] md:w-[290px] lg:w-[300px] object-contain"
              />
            </button>

            <input
              ref={selfieInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "selfie")}
            />

            {formData.selfie && (
              <p className="mt-3 text-[11px] text-white/65 max-w-[220px] text-center break-words">
                {formData.selfie.name}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => triggerFileInput(idInputRef)}
              className="rounded-[6px] overflow-hidden transition-transform hover:scale-[1.01]"
            >
              <img
                src={IdPassportCardImg}
                alt="Upload ID or Passport"
                className="w-[250px] sm:w-[270px] md:w-[290px] lg:w-[300px] object-contain"
              />
            </button>

            <input
              ref={idInputRef}
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "idPassport")}
            />

            {formData.idPassport && (
              <p className="mt-3 text-[11px] text-white/65 max-w-[220px] text-center break-words">
                {formData.idPassport.name}
              </p>
            )}
          </div>
        </div>

        {/* Consent section */}
        <div className="mt-24 max-w-[860px] mx-auto text-[10px] sm:text-[11px] text-white/65 leading-relaxed">
  <p className="leading-[1.6]">
    I would like to receive communication from the FoneGuy Group of Companies and its
    business partners, as indicated in the FoneGuy Group of companies’
    <span className="text-fuchsia-400 underline"> External Privacy Statement</span>,
    to tell me about their promotions, products, and services via:
  </p>

  {/* communication options */}
  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 text-white/85">

  {[
    { label: 'Email', name: 'marketingEmail', multiline: false },
    { label: 'SMS', name: 'marketingSMS', multiline: false },
    { label: 'Phone', name: 'marketingPhone', multiline: false },
    { label: 'Instant Messaging\n(e.g. WhatsApp)', name: 'marketingWhatsapp', multiline: true },
  ].map(({ label, name, multiline }) => (
    <div key={name} className="flex items-center gap-3">
      <p className={`text-[11px] text-white/80 ${multiline ? 'w-[70px] leading-[1.35]' : 'w-[45px]'}`}>
        {multiline ? label.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        )) : label}
      </p>

      <div className="flex items-center gap-2">
        {/* YES box */}
        <label className="cursor-pointer relative w-[28px] h-[28px]">
          <input
            type="radio"
            name={name}
            value="yes"
            checked={formData[name] === "yes"}
            onChange={() => handleYesNoChange(name, "yes")}
            className="sr-only peer"
          />
          <div className="w-[28px] h-[28px] border border-white/40 flex items-center justify-center text-[13px] font-semibold text-white/50 peer-checked:text-white/20 transition-colors select-none">
            Y
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[18px] text-transparent peer-checked:text-cyan-400 transition-colors pointer-events-none">
            ✓
          </div>
        </label>

        {/* NO box */}
        <label className="cursor-pointer relative w-[28px] h-[28px]">
          <input
            type="radio"
            name={name}
            value="no"
            checked={formData[name] === "no"}
            onChange={() => handleYesNoChange(name, "no")}
            className="sr-only peer"
          />
          <div className="w-[28px] h-[28px] border border-white/40 flex items-center justify-center text-[13px] font-semibold text-white/50 peer-checked:text-white/20 transition-colors select-none">
            N
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[18px] text-transparent peer-checked:text-cyan-400 transition-colors pointer-events-none">
            ✓
          </div>
        </label>
      </div>
    </div>
  ))}

</div>

  {/* consent checkboxes */}
  <div className="mt-10 space-y-6">
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="joinMore"
        checked={formData.joinMore}
        onChange={handleCheckboxChange}
        className="mt-1 w-4 h-4 accent-white"
      />
      <span className="text-[11px] sm:text-[12px] text-white/72 leading-[1.7]">
        Join <span className="font-semibold">+more</span>, the rewards programme that unlocks instant savings and great benefits at 15+ retailers.
        <br />
        Opt in and we will be in contact with next steps.
      </span>
    </label>

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name="acceptConsent"
        checked={formData.acceptConsent}
        onChange={handleCheckboxChange}
        className="mt-1 w-4 h-4 accent-white"
      />
      <span className="text-[11px] sm:text-[12px] text-white/72 leading-[1.8]">
        I accept and consent that:
        <div className="mt-2 pl-6 space-y-1">
          <div className="grid grid-cols-[24px_1fr] gap-2">
            <span>a)</span>
            <span>
              My personal information will be processed during the application and in future as set out in the FoneGuy Group of
              Companies <span className="text-fuchsia-400 underline">External Privacy Statement</span>
            </span>
          </div>

          <div className="grid grid-cols-[24px_1fr] gap-2">
            <span>b)</span>
            <span>
              A credit enquiry may be conducted on me for the purpose of setting a limit for my device rental agreement;
            </span>
          </div>

          <div className="grid grid-cols-[24px_1fr] gap-2">
            <span>c)</span>
            <span>
              My details may be confirmed with any credit bureau or third party; and
            </span>
          </div>

          <div className="grid grid-cols-[24px_1fr] gap-2">
            <span>d)</span>
            <span>
              My details, including the manner in which I conduct my rental payments, may be provided to credit bureaux and
              crime prevention organisations.
            </span>
          </div>
        </div>
      </span>
    </label>
  </div>
</div>

        {/* Bottom buttons */}
        <div className="mt-14 max-w-[760px] mx-auto flex justify-end gap-3">
          <button
            type="button"
            className="min-w-[130px] h-[42px] rounded-[4px] bg-[#7c0a73] text-white text-[11px] font-semibold uppercase tracking-wide hover:bg-[#911087] transition-colors"
          >
            Back
          </button>

          <button
            type="submit"
            className="min-w-[170px] h-[42px] rounded-[4px] bg-[#7c0a73] text-white text-[11px] font-semibold uppercase tracking-wide hover:bg-[#911087] transition-colors"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default DocumentUploadForm;