import React from "react";
import AboutImg from "/aboutUs.webp";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-black px-6 md:px-12 lg:px-20 pt-10 pb-10 lg:pt-20 lg:pb-0"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={AboutImg}
              loading="lazy"
              alt="About us"
              className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:w-[800px] lg:max-w-none object-contain lg:ml-20"
            />
          </div>

          {/* Right Content */}
          <div className="text-white w-full lg:max-w-[560px]">
            <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight">
              Recognised. Accredited.
              <br />
              Industry-Aligned.
            </h2>
            <p className="mt-4 lg:mt-6 text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              All our programs are designed to meet national standards and
              industry requirements:
            </p>
            <ul className="mt-4 lg:mt-6 space-y-3 text-white/85 text-sm sm:text-base leading-relaxed list-disc pl-5">
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