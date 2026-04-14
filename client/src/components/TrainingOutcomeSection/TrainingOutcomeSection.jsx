import React from "react";
import CareerIllustration from "/3d-check-mark.png";

const TrainingOutcomeSection = () => {
  return (
    <div className="relative mt-4 sm:mt-6 pt-10 sm:pt-12 lg:pt-14 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-10 left-0 h-[220px] w-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(128,0,170,0.45) 0%, rgba(72,0,120,0.2) 45%, rgba(0,0,0,0) 75%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[140px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(70,0,110,0.18) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <div className="h-px w-[74px] sm:w-[92px] md:w-[108px] bg-white/30" />

            <h3 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.75rem] font-extrabold leading-[1.12] tracking-[-0.03em]">
              From Training to Employment.
              <br />
              From Skills to Opportunity.
            </h3>

            <div className="h-px w-[74px] sm:w-[92px] md:w-[108px] bg-white/30" />
          </div>

          <p className="mt-4 text-[0.9rem] sm:text-[0.95rem] text-white/65">
            This ensures that our learners receive:
          </p>
        </div>

        {/* 3 columns */}
        <div className="mt-14 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-20 max-w-[760px] mx-auto">
          {[
            { no: "01", text: "Education and employment" },
            { no: "02", text: "Skills and income" },
            { no: "03", text: "Communities and industry" },
          ].map((item) => (
            <div key={item.no} className="text-center md:text-left">
              <div className="mx-auto md:mx-0 mb-3 h-16 w-px bg-white/12" />
              <p className="text-fuchsia-500 text-[14px] font-medium">{item.no}</p>
              <p className="mt-3 text-[1rem] text-white/88 leading-[1.35] max-w-[220px] mx-auto md:mx-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="mt-20 sm:mt-24 lg:mt-28 flex justify-center">
          <img
            src={CareerIllustration}
            alt="Career growth"
            className="w-[460px] sm:w-[520px] md:w-[680px] lg:w-[780px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingOutcomeSection;