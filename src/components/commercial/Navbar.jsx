import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    gsap.fromTo(
      ".com-nav-item",
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".com-nav-logo",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".com-mobile-link",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
        }
      );
    }
  }, [isOpen]);

  // ✅ Scroll
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
        <div
          className={`max-w-7xl w-full px-6 transition-all duration-500 rounded-full
          ${
            scrolled
              ? "bg-white shadow-md border border-gray-200"
              : "bg-white/80 backdrop-blur-md border border-gray-100"
          }`}
        >
          <div className="flex items-center justify-between py-2">

            {/* LOGO */}
            <a href="/" className="com-nav-logo">
              <img
                src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/dsp-tint/images/dsp-logo-1.png"
                alt="DSP Logo"
                className="h-12 sm:h-14 object-contain"
              />
            </a>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => handleScrollTo(link.href)}
                  className="com-nav-item text-sm font-medium text-gray-700 hover:text-[#E63946] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E63946] group-hover:w-full transition-all" />
                </button>
              ))}

              {/* CONTACT */}
              <a
                href="/contact"
                className="com-nav-item text-sm font-medium text-gray-700 hover:text-[#E63946]"
              >
                Contact
              </a>

              {/* CTA BUTTON */}
              <button
                onClick={() => handleScrollTo("#cta")}
                className="com-nav-item px-6 py-2 rounded-full text-sm font-semibold text-white bg-[#E63946] hover:bg-[#c92f3a] transition-all shadow hover:shadow-lg hover:scale-105"
              >
                Book Now
              </button>
            </div>

            {/* MOBILE ICON */}
            <button
              className="lg:hidden text-2xl text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">

          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScrollTo(link.href)}
              className="com-mobile-link text-3xl font-bold text-gray-800 hover:text-[#E63946]"
            >
              {link.name}
            </button>
          ))}

          {/* CONTACT */}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="com-mobile-link text-3xl font-bold text-gray-800 hover:text-[#E63946]"
          >
            Contact
          </a>

          {/* CTA */}
          <button
            onClick={() => handleScrollTo("#cta")}
            className="com-mobile-link px-10 py-4 rounded-full text-lg font-bold text-white bg-[#E63946] hover:bg-[#c92f3a] mt-4"
          >
            Book Now
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;