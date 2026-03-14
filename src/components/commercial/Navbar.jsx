import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    // { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    // { name: 'Services', href: '#services' },
    // { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Navbar animation
    gsap.fromTo(
      '.nav-item',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(
      '.nav-logo',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-link',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg shadow-black/20 py-1'
          : 'bg-transparent py-1'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="nav-logo flex items-center rounded-lg"
            >
              <img
                src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/intopdigital_website/static-images/dsp-logo.png"
                alt="DSP Tints Logo"
                className="h-28 w-36 object-contain rounded-lg"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="nav-item text-sm font-medium text-white hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                className="nav-item gradient-red px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white text-3xl z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark-900/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link font-heading text-3xl font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mobile-link gradient-red px-10 py-4 rounded-full text-lg font-bold mt-4"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;