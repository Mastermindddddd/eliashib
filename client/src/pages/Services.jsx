import React from "react";

// course images
import TechImg from "/technology-course.jpg";
import TradeImg from "/artisanal-course.jpg";
import EngineeringImg from "/engineering-course.jpg";
import IndustrialTraining from "../components/IndustrialTraining/IndustrialTraining";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";

const ServicesPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute left-0 top-0 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-fuchsia-800/20 blur-[90px] sm:blur-[120px]" />
        <div className="absolute left-[-80px] top-[160px] h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] rounded-full bg-purple-700/20 blur-[90px] sm:blur-[120px]" />
        <div className="absolute right-0 top-0 h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] rounded-full bg-blue-900/20 blur-[100px] sm:blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_22%),linear-gradient(to_bottom,rgba(10,10,10,0.15),rgba(0,0,0,0.92))]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Header area */}
        <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 lg:pb-14">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
              <div className="h-px w-10 sm:w-16 md:w-24 lg:w-28 bg-white/20" />
              <h1 className="text-center text-[1.5rem] sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.7rem] xl:text-[3rem] font-poppins font-extrabold uppercase leading-[1.1] tracking-[-0.02em]">
                Courses Page
                <br />
                (Updated With Credibility)
              </h1>
              <div className="h-px w-10 sm:w-16 md:w-24 lg:w-28 bg-white/20" />
            </div>
          </div>
        </div>

        {/* Course cards */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 sm:pb-16 lg:pb-20 space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Card 1 */}
          <div className="bg-[#efefef] text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 lg:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
              <div>
                <img
                  src={TechImg}
                  alt="Technology & Digital Courses"
                  className="w-full h-[190px] xs:h-[210px] sm:h-[240px] md:h-[250px] lg:h-[270px] xl:h-[290px] object-cover"
                />
              </div>

              <div>
                <h2 className="text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.55rem] font-bold mb-3 sm:mb-4">
                  Technology &amp; Digital Courses
                </h2>

                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/75 mb-3 sm:mb-4 leading-relaxed">
                  All courses are industry-aligned and structured to meet
                  national training standards.
                </p>

                <ul className="list-disc pl-5 space-y-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/80">
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
          <div className="bg-[#efefef] text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 lg:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.55rem] font-bold mb-3 sm:mb-4">
                  Artisanal &amp; Trade Skills
                </h2>

                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/75 mb-3 sm:mb-4 leading-relaxed">
                  SETA-aligned practical training for real-world application
                  and entrepreneurship.
                </p>

                <ul className="list-disc pl-5 space-y-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/80">
                  <li>Brick Making &amp; Construction Materials</li>
                  <li>Welding &amp; Fabrication</li>
                  <li>Electrical Installation</li>
                  <li>Plumbing</li>
                  <li>Carpentry &amp; Woodwork</li>
                  <li>Tiling &amp; Painting</li>
                  <li>Agricultural &amp; Agro-Processing</li>
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src={TradeImg}
                  alt="Artisanal & Trade Skills"
                  className="w-full h-[190px] xs:h-[210px] sm:h-[240px] md:h-[250px] lg:h-[270px] xl:h-[290px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#efefef] text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 lg:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
              <div>
                <img
                  src={EngineeringImg}
                  alt="Industrial & Engineering Skills"
                  className="w-full h-[190px] xs:h-[210px] sm:h-[240px] md:h-[250px] lg:h-[270px] xl:h-[290px] object-cover"
                />
              </div>

              <div>
                <h2 className="text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.55rem] font-bold mb-3 sm:mb-4">
                  Industrial &amp; Engineering Skills
                </h2>

                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/75 mb-4 sm:mb-5 leading-relaxed">
                  MQA-aligned programs designed for mining and industrial sectors.
                </p>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/80">
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
      </div>
    </section>
  );
};

export default ServicesPage;