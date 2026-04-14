import React, { useState } from "react";
import Logo from "/main-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const desktopMenu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About us", link: "/Why-Choose-Academy" },
  { id: 3, name: "Services", link: "/services", hasDropdown: true },
  { id: 4, name: "Contact", link: "/contact-support" },
];

const mobileMenu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About us", link: "/Why-Choose-Academy" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Contact", link: "/contact-support" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    setIsOpen(false);

    if (!targetId.startsWith("#")) {
      window.location.href = targetId;
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
      const offsetTop = target.offsetTop - navbarHeight - 10;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-5 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0" data-aos="fade-down" data-aos-once="true">
            <img
              src={Logo}
              alt="Eliashib Group"
              className="w-[88px] sm:w-[108px] md:w-[118px] h-auto object-contain"
            />
          </a>

          {/* Desktop Floating Pill Navbar */}
          <div className="hidden md:flex items-center">
            <div
              className="relative flex items-center gap-3 lg:gap-5 px-5 lg:px-6 py-3 rounded-[18px] bg-[#0b1118]/90 backdrop-blur-md"
              style={{
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(rgba(11,17,24,0.92), rgba(11,17,24,0.92)), linear-gradient(90deg, rgba(148,233,255,0.8) 0%, rgba(201,84,255,0.75) 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04), 0 10px 35px rgba(0,0,0,0.35), inset 0 0 18px rgba(255,255,255,0.03)",
              }}
            >
              {desktopMenu.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.link}
                  onClick={(e) => handleScroll(e, menu.link)}
                  className="text-white/90 text-sm lg:text-[14px] font-medium px-3 py-2 rounded-full transition duration-300 hover:text-white inline-flex items-center gap-2"
                >
                  {menu.name}
                  {menu.hasDropdown && <FaChevronDown className="text-[10px] opacity-80" />}
                </a>
              ))}

              <a
                href="/apply"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-[#e9e9e9] text-black font-semibold text-sm lg:text-[14px] px-8 py-2.5 min-w-[140px] shadow-md transition duration-300 hover:scale-[1.03]"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-[#0b1118]/95 backdrop-blur-xl shadow-xl px-5 py-5">
            <ul className="flex flex-col gap-2">
              {mobileMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    onClick={(e) => handleScroll(e, menu.link)}
                    className="block text-white/90 py-3 px-2 text-base"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/apply"
                  className="block w-full text-center rounded-full bg-white text-black font-semibold py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

    </header>
  );
};

export default Navbar;