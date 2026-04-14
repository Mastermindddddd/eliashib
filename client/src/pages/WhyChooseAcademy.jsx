import React from "react";
import HeroPerson from "/why-choose-person.png";
import CareerIllustration from "/3d-check-mark.png";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import TrainingOutcomeSection from "../components/TrainingOutcomeSection/TrainingOutcomeSection.jsx";

const WhyChooseAcademy = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-10">
        <Navbar />

        {/* Top hero section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 min-h-[620px] sm:min-h-[700px] lg:min-h-[800px]">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] items-end gap-6 lg:gap-10 h-full">
            {/* Left image */}
            <div className="flex justify-center md:justify-end items-end h-full">
              <div className="w-full flex justify-center md:justify-end mt-8 md:mt-12 lg:mt-20">
  <img
    src={HeroPerson}
    alt="Why choose Eliashib Academy"
    className="w-[360px] sm:w-[450px] md:w-[520px] lg:w-[640px] xl:w-[680px] object-contain"
  />
</div>
            </div>

            {/* Right content */}
            <div className="flex items-center md:items-center h-full">
              <div className="max-w-[470px] md:pl-2 lg:pl-4">
                <h2 className="text-[2.2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.08] font-extrabold uppercase tracking-[-0.03em]">
                  Why Choose
                  <br />
                  Eliashib Academy
                </h2>

                <ul className="mt-7 text-[1rem] sm:text-[1.12rem] lg:text-[1.12rem] text-white/80 leading-[1.45]">
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
      {/* Bottom section */}
        <TrainingOutcomeSection />

      <section id="contact" className="pt-18">
        <ContactForm />
      </section>
    </section>
  );
};

export default WhyChooseAcademy;