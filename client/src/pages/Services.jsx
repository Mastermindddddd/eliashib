import React from "react";
import Logo from "/main-logo.png";

// course images
import TechImg from "/technology-course.jpg";
import TradeImg from "/artisanal-course.jpg";
import EngineeringImg from "/engineering-course.jpg";
import IndustrialTraining from "../components/IndustrialTraining/IndustrialTraining";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header area */}
      <div className="relative mt-8 bg-gradient-to-r from-fuchsia-900/80 via-[#10021d] to-[#020a2b] py-14 sm:py-16 lg:pt-40">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px w-14 sm:w-24 bg-white/30" />
            <h1 className="text-center text-2xl sm:text-3xl lg:text-[42px] font-extrabold uppercase leading-tight">
              Courses Page
              <br />
              (Updated With Credibility)
            </h1> 
            <div className="h-px w-14 sm:w-24 bg-white/30" />
          </div>
        </div>
      </div>

      {/* Course cards */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16 space-y-8 sm:space-y-10">
        {/* Card 1 */}
        <div className="bg-[#efefef] text-black px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <img
                src={TechImg}
                alt="Technology & Digital Courses"
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Technology &amp; Digital Courses
              </h2>

              <p className="text-sm sm:text-[15px] text-black/75 mb-4 leading-relaxed">
                All courses are industry-aligned and structured to meet
                national training standards.
              </p>

              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-[15px] text-black/80">
                <li>Software Engineering</li>
                <li>Artificial Intelligence (AI)</li>
                <li>Cybersecurity</li>
                <li>UI/UX Design</li>
                <li>Intro to Software Engineering</li>
                <li>Intro to AI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#efefef] text-black px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="md:order-1 order-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Artisanal &amp; Trade Skills
              </h2>

              <p className="text-sm sm:text-[15px] text-black/75 mb-4 leading-relaxed">
                SETA-aligned practical training for real-world application
                and entrepreneurship.
              </p>

              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-[15px] text-black/80">
                <li>Brick Making &amp; Construction Materials</li>
                <li>Welding &amp; Fabrication</li>
                <li>Electrical Installation</li>
                <li>Plumbing</li>
                <li>Carpentry &amp; Woodwork</li>
                <li>Tiling &amp; Painting</li>
                <li>Agricultural &amp; Agro-Processing</li>
              </ul>
            </div>

            <div className="md:order-2 order-1">
              <img
                src={TradeImg}
                alt="Artisanal & Trade Skills"
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#efefef] text-black px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <img
                src={EngineeringImg}
                alt="Industrial & Engineering Skills"
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Industrial &amp; Engineering Skills
              </h2>

              <p className="text-sm sm:text-[15px] text-black/75 mb-6 leading-relaxed">
                MQA-aligned programs designed for mining and industrial sectors.
              </p>

              <div className="space-y-5 text-sm sm:text-[15px] text-black/80">
                <div>
                  <h3 className="font-bold text-black mb-1">Boilermaking</h3>
                  <p>
                    Fabrication and maintenance of industrial metal structures.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-1">
                    Millwright (Electro-Mechanical)
                  </h3>
                  <p>
                    Installation, maintenance, and repair of industrial machinery.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-1">Fitting &amp; Turning</h3>
                  <p>
                    Precision engineering and mechanical component manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IndustrialTraining />
      <ContactForm />
    </section>
  );
};

export default ServicesPage;