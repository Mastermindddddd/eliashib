import React from "react";
import AboutImg from "/aboutUs.webp";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-black px-6 md:px-12 lg:px-20 pt-20"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Image (no background effects) */}
          <div className="flex justify-center lg:justify-start ">
            <img
              src={AboutImg}
              loading="lazy"
              alt="About us"
              className="w-[360px] sm:w-[420px] md:w-[460px] lg:w-[800px] object-contain ml-20"
            />
          </div>

          {/* Right Content */}
          <div className="text-white max-w-[560px] pb-16">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight">
              Recognised. Accredited.
              <br />
              Industry-Aligned.
            </h2>

            <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed">
              All our programs are designed to meet national standards and
              industry requirements:
            </p>

            <ul className="mt-6 space-y-3 text-white/85 text-sm sm:text-base leading-relaxed list-disc pl-5">
              <li>SETA Accredited Programmes</li>
              <li>
                Aligned with QCTO (Quality Council for Trades &amp; Occupations)
              </li>
              <li>
                Industry-relevant training aligned with MQA (Mining Qualifications)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;