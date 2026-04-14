import React from "react";
import IndustrialPerson from "/industrial-person.png";

const industrialPrograms = [
  { id: "01", text: "Workshop-based training" },
  { id: "02", text: "Safety & compliance standards" },
  { id: "03", text: "Exposure to real equipment" },
  { id: "04", text: "Pathways to apprenticeships" },
];

const IndustrialTraining = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-20 sm:pt-24 lg:pt-28">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[280px] w-[460px] bg-fuchsia-800/45 blur-3xl" />
        <div className="absolute top-0 right-0 h-[220px] w-[340px] bg-blue-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-5">
            <div className="h-px w-[110px] bg-white/30" />
            <h2 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-[-0.02em]">
              All industrial programs include:
            </h2>
            <div className="h-px w-[110px] bg-white/30" />
          </div>
        </div>

        {/* Top features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {industrialPrograms.map((item, index) => (
            <div
              key={item.id}
              className={`relative px-4 ${
                index !== 3 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <p className="text-fuchsia-500 text-sm font-medium">{item.id}</p>
              <p className="mt-3 text-[14px] sm:text-[15px] text-white/85 leading-relaxed max-w-[180px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-8 grid md:grid-cols-[1.32fr_0.68fr] gap-6 lg:gap-10 items-end">
          {/* Left image column */}
          <div className="relative min-h-[520px] sm:min-h-[620px] md:min-h-[760px] lg:min-h-[860px] overflow-visible">
            <img
              src={IndustrialPerson}
              alt="Industry-aligned training"
              className="
                absolute bottom-0 left-1/2 -translate-x-[60%]
                w-[560px]
                sm:w-[680px]
                md:w-[860px]
                lg:w-[980px]
                xl:w-[1180px]
                max-w-none
                object-contain
              "
            />
          </div>

          {/* Right content */}
          <div className="relative z-10 max-w-[520px] md:ml-auto pb-8 lg:pb-20">
            <h3 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.55rem] font-extrabold uppercase leading-[1.06] tracking-[-0.03em]">
              Industry-Aligned
              <br />
              Training
            </h3>

            <div className="mt-10 text-white/78 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.45]">
              <p className="mb-2">Our programmes are aligned with:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>National qualification frameworks</li>
                <li>Industry standards</li>
                <li>Employer requirements</li>
              </ul>
            </div>

            <div className="mt-9 text-white/78 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.45]">
              <p className="mb-2">We prepare learners for:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Employment opportunities</li>
                <li>Apprenticeships &amp; learnerships</li>
                <li>Business and self-employment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
};

export default IndustrialTraining;