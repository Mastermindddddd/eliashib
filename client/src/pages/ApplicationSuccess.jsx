import React from "react";
import Logo from "/main-logo.png";
import Navbar from "../components/Navbar/Navbar";

const ApplicationSuccess = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Purple strip */}
      <div className="mt-6 bg-gradient-to-r from-fuchsia-900 via-[#1a0530] to-[#020b2c] py-7 sm:py-8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-[30px] italic font-medium">
            🎉 Thank You for Applying!
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="relative min-h-[calc(100vh-145px)] overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-[45%] bg-fuchsia-900/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-[35%] bg-blue-950/30 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#45005e] via-[#170024] to-[#020614]" />
        </div>

        <div className="relative z-10 flex items-center justify-center px-6 py-20 sm:py-28">
          <div className="w-full max-w-[360px] sm:max-w-[420px] rounded-[28px] border border-white/35 px-8 sm:px-10 py-10 sm:py-12 text-center bg-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] leading-tight italic text-white">
              Your <span className="font-extrabold not-italic">application</span> has been
              <br />
              successfully <span className="font-extrabold not-italic">submitted.</span>
              <br />
              We&apos;re reviewing your details
              <br />
              and one of our <span className="font-extrabold not-italic">friendly</span>
              <br />
              <span className="font-extrabold not-italic">agents</span> will be in touch with
              <br />
              you shortly to finalize the
              <br />
              process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSuccess;