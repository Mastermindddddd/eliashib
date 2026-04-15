import React from "react";
import HeroPerson from "/why-choose-person.png";
import CareerIllustration from "/3d-check-mark.png";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import TrainingOutcomeSection from "../components/TrainingOutcomeSection/TrainingOutcomeSection.jsx";

const WhyChooseAcademy = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-6">
        <Navbar />

        {/* Top hero section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-end gap-8 md:gap-6 lg:gap-10 min-h-[auto] md:h-[620px] lg:h-[800px]">
            {/* Left image */}
            <div className="flex justify-center md:justify-end items-end h-full order-1">
              <div className="flex justify-center md:justify-end items-end w-full h-full overflow-hidden">
                <img
                  src={HeroPerson}
                  alt="Why choose Eliashib Academy"
                  className="block w-[260px] xs:w-[300px] sm:w-[360px] md:w-[500px] lg:w-[640px] xl:w-[660px] max-h-[420px] sm:max-h-[520px] md:max-h-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="flex items-center h-full order-2 justify-center md:justify-start text-center md:text-left">
              <div className="max-w-[470px] md:pl-2 lg:pl-4">
                <h2 className="text-[1.8rem] sm:text-[2.1rem] lg:text-[2.8rem] leading-[1.08] font-poppins font-extrabold uppercase tracking-[-0.03em]">
                  Why Choose
                  <br />
                  Eliashib Academy
                </h2>

                <ul className="mt-5 sm:mt-7 text-[0.95rem] sm:text-[1.02rem] lg:text-[1.12rem] text-white/80 leading-[1.5] inline-block text-left">
                  <li>• SETA Accredited Training</li>
                  <li>• QCTO-Aligned Curriculum</li>
                  <li>• MQA Industry Alignment</li>
                  <li>• Practical, Job-Ready Skills</li>
                  <li>• Mentorship &amp; Career Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrainingOutcomeSection />

      <section id="contact" className="pt-12 sm:pt-16">
        <ContactForm />
      </section>
    </section>
  );
};

export default WhyChooseAcademy;