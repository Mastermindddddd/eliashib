import React from "react";
import HeroBg from "/hero.webp";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-end sm:items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Strong darkness ONLY on top half */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent" />

      {/* Extra left shadow for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Bottom soft mist (unchanged) */}
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-white/40 via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-14 sm:pb-20 lg:pb-24 pt-32 sm:pt-36">
        <div className="max-w-[780px] mt-20">
          <h1 className="font-poppins text-white font-extrabold leading-[1.08] tracking-[-0.02em] text-[2.3rem] sm:text-[3rem] md:text-[3.8rem]">
            Empowering Africa
            <br />
            Through Digital, Artisanal
            <br />
            &amp; Industrial Skills
          </h1>

          <p className="mt-5 max-w-[680px] text-white/85 text-[15px] sm:text-[17px] md:text-[20px] leading-relaxed">
            Gain practical, industry-aligned training in technology, skilled trades,
            and engineering to unlock employment, entrepreneurship, and real economic
            opportunities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-w-[210px] rounded-[14px] bg-gradient-to-r from-fuchsia-700 to-pink-500 px-8 py-4 text-white text-base font-semibold shadow-[0_8px_24px_rgba(197,0,148,0.35)] transition duration-300 hover:scale-[1.02]"
            >
              Request a demo
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center min-w-[170px] rounded-full border border-cyan-300/40 px-7 py-3.5 text-white text-base font-medium transition duration-300 hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;