"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#0060AF]">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Image
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
              width={140}
              height={30}
              alt="Astral Paints Logo"
            />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              ref={menuRef}
              aria-label="Global"
              className={`fixed inset-0 bg-[#0060AF] transition-transform transform z-50 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:static md:translate-x-0 md:flex md:flex-row md:bg-transparent md:items-center md:gap-6`}
            >
              <ul className="flex flex-col items-center justify-center h-full gap-6 text-sm md:flex-row md:gap-6 md:h-auto md:items-center">
                {[
                  "About",
                  "Category",
                  "Services",
                  "Colours",
                  "Downloads",
                  "Become A Dealer",
                  "Blogs",
                  "Contact",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={closeMenu}
                      className="text-white transition hover:text-white/75"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                {isMenuOpen && (
                  <li>
                    <a
                      className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-400"
                      href="#"
                    >
                      Enquire Now
                    </a>
                  </li>
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <a
                    className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-400"
                    href="#"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
