import React from "react";

// top small icons
import QualificationIcon from "/Icon-Bg.png";
import WorkplaceIcon from "/IconBg-1.png";
import PathwayIcon from "/IconBg-2.png";

// one full bottom cards image
import TrainingCardsImage from "/training-cards.png";

const topFeatures = [
  {
    id: 1,
    icon: QualificationIcon,
    text: "Recognised qualifications",
  },
  {
    id: 2,
    icon: WorkplaceIcon,
    text: "Workplace-relevant skills",
  },
  {
    id: 3,
    icon: PathwayIcon,
    text: "Pathways into employment, learnerships, and apprenticeships",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black text-white px-6 md:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28"
    >
      {/* Top-left purple background like screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-24 h-[480px] w-[1020px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(128,0,170,0.55) 0%, rgba(78,0,122,0.32) 38%, rgba(0,0,0,0) 75%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[220px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(128,0,170,0.55) 0%, rgba(78,0,122,0.32)45%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Top heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
  <div className="h-[1px] w-[110px] sm:w-[130px] md:w-[150px] bg-white/40" />

  <h2 className="text-[2rem] sm:text-[2.3rem] lg:text-[2.45rem] font-extrabold tracking-[-0.03em] leading-none">
    Designed for Your Success
  </h2>

  <div className="h-[1px] w-[110px] sm:w-[130px] md:w-[150px] bg-white/40" />
</div>

          <p className="mt-4 text-[0.95rem] sm:text-[1rem] text-white/72">
            This ensures that our learners receive:
          </p>
        </div>

        {/* Top icon features */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 lg:gap-x-16 max-w-[980px] mx-auto text-center">
          {topFeatures.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={item.text}
                className="w-[38px] h-[38px] object-contain mb-5"
                loading="lazy"
              />
              <p className="text-[0.98rem] sm:text-[1rem] text-white/90 leading-[1.3] max-w-[260px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Second heading */}
        <div className="text-center mt-28 sm:mt-32 lg:mt-36">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-[110px] sm:w-[130px] md:w-[150px] bg-white/40" />
            <h2 className="text-[2rem] sm:text-[2.35rem] lg:text-[2.45rem] font-extrabold uppercase tracking-[-0.03em] leading-none">
              Our Training Ecosystem
            </h2>
            <div className="h-[1px] w-[110px] sm:w-[130px] md:w-[150px] bg-white/40" />
          </div>

          <p className="mt-4 text-[0.95rem] sm:text-[1rem] text-white/72">
            We provide three integrated skill pathways:
          </p>
        </div>

        {/* One full cards image */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <img
            src={TrainingCardsImage}
            alt="Our Training Ecosystem"
            loading="lazy"
            className="w-full max-w-[1000px] lg:max-w-[1100px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;