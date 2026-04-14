import React from "react";
import Logo from "/main-logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#02030a] text-white border border-white/10"
    >
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* left purple wash */}
        <div className="absolute left-0 top-0 h-full w-[42%] bg-gradient-to-r from-fuchsia-950/70 via-purple-950/30 to-transparent" />

        {/* subtle right navy tone */}
        <div className="absolute right-0 top-0 h-full w-[55%] bg-gradient-to-l from-[#02103a]/35 via-[#020616]/10 to-transparent" />

        {/* faint vertical panel lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:255px_100%] opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1680px] mx-auto pl-4 sm:pl-6 lg:pl-8 pr-10 pt-8 sm:pt-10 lg:pt-12 pb-9 min-h-[490px]">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-0">
          {/* Left column */}
          <div className="max-w-[300px] pt-2">
            <img
              src={Logo}
              alt="Eliashib"
              className="w-[100px] sm:w-[102px] lg:w-[140px] h-auto object-contain"
            />

            <div className="space-y-2 text-[13px] leading-7 text-white/88">
              <p>010 023 6588</p>

              <p className="leading-7">
                Cnr Northumberland &amp; Felstead Avenue,
                <br />
                Fancourt Office Park, Building 3, 1st Floor,
                <br />
                North Riding, 2188
              </p>

              <a
                href="mailto:Stanley@eliashibgroup.com"
                className="inline-block underline underline-offset-2 text-white/90 hover:text-white"
              >
                Stanley@eliashibgroup.com
              </a>
            </div>

            <div className="flex items-center gap-3 mt-7">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaXTwitter />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-6 h-6 rounded-[3px] bg-white text-black flex items-center justify-center text-[11px] hover:scale-105 transition-transform"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right area */}
          {/* Right area */}
<div className="relative lg:pl-24 xl:pl-32">
  <div className="max-w-4xl ml-auto mr-0">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 text-[13px] pb-12">
      <div>
        <h3 className="text-white font-bold mb-5">Quick Links</h3>
        <ul className="space-y-3 text-white/82">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          <li><a href="/blog" className="hover:text-white">Our Blog</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-5">What We do</h3>
        <ul className="space-y-3 text-white/82">
          <li><a href="#" className="hover:text-white">Workforce Training</a></li>
          <li><a href="#" className="hover:text-white">Academy</a></li>
          <li><a href="#" className="hover:text-white">Creators</a></li>
          <li><a href="#" className="hover:text-white">Digital</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-5">Learn More</h3>
        <ul className="space-y-3 text-white/82">
          <li><a href="#" className="hover:text-white">Internship Guarantee</a></li>
          <li><a href="#" className="hover:text-white">Become a Mentor</a></li>
          <li><a href="#" className="hover:text-white">Hire Our Graduates</a></li>
        </ul>
      </div>
    </div>

    <div className="h-px w-full bg-white/10" />
  </div>
</div>
        </div>

        <div className="text-center text-[16px] text-white/55 mt-[220px] sm:mt-[210px]">
          Copyright © 2026 Eliashib Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;