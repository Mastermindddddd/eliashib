import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm";

import MapImage from "/map.jpg";
import PhoneIcon from "/phone-icon.png";
import LocationIcon from "/location-icon.png";
import EmailIcon from "/email-icon.png";

const ContactSupportPage = () => {
  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    firstName: e.target.firstname.value,
    lastName: e.target.lastname.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    purpose: e.target.purpose.value,
  };

  try {
    const res = await fetch("https://eliashib.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    alert("Message sent successfully");
    e.target.reset();
  } catch (error) {
    alert(error.message || "Something went wrong");
  }
};

  return (
    <section className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 pt-28 sm:pt-32 lg:pt-36">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px w-[80px] sm:w-[110px] bg-white/20" />
            <h1 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.9rem] font-poppins font-extrabold uppercase tracking-[-0.02em]">
              Contact &amp; Support
            </h1>
            <div className="h-px w-[80px] sm:w-[110px] bg-white/20" />
          </div>

          <p className="mt-4 text-[13px] sm:text-[15px] text-white/75 max-w-[610px] mx-auto leading-relaxed">
            We’re here to assist you. Whether it’s inquiries, consultations,
            or support, don’t hesitate to reach out.
          </p>
        </div>
      </div>

      {/* Contact card */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-18 lg:py-20">
        <div className="bg-[#efefef] rounded-[4px] px-6 sm:px-8 lg:px-10 py-7 sm:py-8 lg:py-9">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-10 items-stretch">
            {/* Left side */}
            <div className="text-black">
              <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold">
                Get In Touch
              </h2>

              <p className="mt-2 text-[11px] sm:text-[12px] text-black/70 font-medium">
                Tell us about yourself and we will be in touch shortly
              </p>

             <form
  onSubmit={handleSubmit}
  className="mt-7 space-y-4 max-w-[520px]"
>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    required
                    className="w-full h-[46px] rounded-[4px] border border-black/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-black/35 focus:border-black/40"
                  />

                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    required
                    className="w-full h-[46px] rounded-[4px] border border-black/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-black/35 focus:border-black/40"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full h-[46px] rounded-[4px] border border-black/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-black/35 focus:border-black/40"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full h-[46px] rounded-[4px] border border-black/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-black/35 focus:border-black/40"
                />

                <input
                  type="text"
                  name="purpose"
                  placeholder="Purpose of Contact"
                  required
                  className="w-full h-[46px] rounded-[4px] border border-black/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-black/35 focus:border-black/40"
                />

                <div className="pt-4 flex justify-center">
                  <button
  type="submit"
  className="h-[42px] min-w-[180px] px-6 rounded-[4px] bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 text-white text-[12px] font-semibold shadow-md transition duration-300 hover:opacity-95"
>
  Contact Us
</button>
                </div>
              </form>

              {/* Bottom contact info */}
              <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between text-black">
  {/* CALL */}
  <div className="flex items-center gap-3 min-w-[170px]">
    <img
      src={PhoneIcon}
      alt="Phone"
      className="w-[38px] h-[38px] object-contain shrink-0"
    />
    <p className="text-[12px] font-semibold tracking-[-0.01em]">
      (+010) 023 6588
    </p>
  </div>

  {/* LOCATION */}
  <div className="flex items-start gap-3 min-w-[320px] max-w-[360px]">
    <img
      src={LocationIcon}
      alt="Location"
      className="w-[38px] h-[38px] object-contain shrink-0 mt-[2px]"
    />
    <div className="leading-none">
      <p className="text-[12px] font-extrabold tracking-[-0.01em]">
        Location
      </p>
      <p className="mt-[4px] text-[10px] font-bold leading-[1.35] tracking-[-0.01em]">
        Cnr Northumberland &amp; Felstead Avenue,<br />
        Fancourt Office Park, Building 3, 1st Floor,<br />
        North Riding, 2188
      </p>
    </div>
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-3 min-w-[220px]">
    <img
      src={EmailIcon}
      alt="Email"
      className="w-[38px] h-[38px] object-contain shrink-0"
    />
    <div className="leading-none">
      <p className="text-[12px] font-extrabold tracking-[-0.01em]">
        Email
      </p>
      <p className="mt-[4px] text-[10px] font-bold leading-[1.2] tracking-[-0.01em]">
        Stanley@eliashibgroup.com
      </p>
    </div>
  </div>
</div>
            </div>

            {/* Right side map */}
            <div className="w-full flex justify-center lg:justify-end">
  <div className="overflow-hidden rounded-[4px] w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[400px] h-full border border-black/10 bg-[#d9d9d9]">
    <img
  src={MapImage}
  alt="Location Map"
  className="w-full h-full object-cover object-center block"
  loading="lazy"
/>
  </div>
</div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactSupportPage;