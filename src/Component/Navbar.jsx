
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", href: "#home" },
    { name: "Food Partners", href: "#food_partners" },
    { name: "Map", href: "#map" },
    { name: "How it Works", href: "#how_it_works" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#718C68] shadow-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4
                      flex items-center justify-between">

        {/* LOGO */}
        <div>
          <a href="#home" className="flex items-center">
            <img
              src="/images/ae5e619f-9be7-48d3-880c-90047da10686-removebg-preview.png"
              alt="ShareAPlate"
              className="w-40 h-15 object-contain"
            />
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-7">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                px-4 py-2
                text-1xl font-semibold
                text-white
                border-2 border-transparent
                rounded-lg
                hover:text-[#405B43]
                hover:border-[#B68C63]
                hover:bg-[#E8E3CF]/20
                hover:scale-105
                transition-all duration-300 ease-in-out
                inline-block
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* LANGUAGE BUTTON */}
          <button
            className="
              px-4 py-2 rounded-lg
              border border-[#E8E3CF]
              text-white font-semibold
              transition-all duration-300
              hover:bg-[#E8E3CF]
              hover:text-[#405B43]
            "
          >
            தமிழ்
          </button>

          {/* LOGIN BUTTON */}
          <button
            className="
              px-6 py-2 rounded-lg
              bg-[#405B43]
              text-white font-semibold
              shadow-sm
              transition-all duration-300
              hover:bg-[#B68C63]
              hover:text-white
              hover:shadow-lg
              hover:-translate-y-0.5
            "
          >
            Login
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="
            md:hidden text-white text-3xl
            font-semibold
            transition-transform duration-300
            hover:scale-110
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`
          md:hidden overflow-hidden
          bg-[#718C68]
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-5 px-6 pb-6 pt-3">

          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-white font-semibold text-base
                transition-all duration-300
                hover:text-[#E8E3CF]
                hover:scale-105
              "
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-4 pt-2">

            <button
              className="
                px-4 py-2 rounded-lg
                border border-[#E8E3CF]
                text-white font-semibold
                transition-all duration-300
                hover:bg-[#E8E3CF]
                hover:text-[#405B43]
              "
            >
              தமிழ்
            </button>

            <button
              className="
                px-5 py-2 rounded-lg
                bg-[#405B43]
                text-white font-semibold
                transition-all duration-300
                hover:bg-[#B68C63]
              "
            >
              Login
            </button>

          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
