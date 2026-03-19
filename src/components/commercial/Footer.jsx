import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = ["Home", "About", "Services", "Packages", "Gallery", "Contact"];

const services = [
  "Heat Reduction",
  "UV Protection",
  "Privacy Films",
  "Decorative Films",
  "Commercial Tinting",
  "Residential Tinting",
];

const socials = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube, href: "#" },
  { Icon: FaTwitter, href: "#" },
];

const contactItems = [
  { Icon: FaMapMarkerAlt, text: "Canada", href: null },
  { Icon: FaPhone, text: "+1 437 361 9794", href: "tel:+14373619794" },
  { Icon: FaEnvelope, text: "Hello@intopdigital.com", href: "mailto:Hello@intopdigital.com" },
];

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-24 right-6 w-11 h-11 bg-[#E63946] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#c92f3a] hover:scale-110 z-50 " +
        (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")
      }
    >
      <FaArrowUp size={14} />
    </button>
  );
};

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          scrollTrigger: { trigger: ".footer-grid", start: "top 90%" },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const year = new Date().getFullYear();

  return (
    <div>
      {/* Newsletter */}
      <div className="bg-[#F5F5F5] py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111]">
              Join Our <span className="text-[#E63946]">Newsletter</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Get offers, tips and updates directly to your inbox.
            </p>
          </div>
          <div className="flex w-full sm:w-auto shadow-md rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-72 px-5 py-3 border-0 bg-white focus:outline-none text-sm text-gray-700"
            />
            <button className="bg-[#E63946] px-6 py-3 text-white font-semibold hover:bg-[#c92f3a] transition text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Wrapper */}
      <div className="bg-[#F5F5F5] px-4 sm:px-6 pb-8">
        <footer
          ref={footerRef}
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#E63946] via-[#ff6b6b] to-[#E63946]" />

          <div className="px-6 sm:px-10 py-14">
            <div className="footer-grid grid grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Brand */}
              <div className="footer-col col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <img
                    src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/dsp-tint/images/dsp-logo-1.png"
                    alt="DSP Logo"
                    className="h-10 object-contain"
                  />
                </div>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Premium window tinting solutions for homes, offices and businesses across Canada.
                </p>
                <div className="flex gap-2">
                  {socials.map(function(item, i) {
                    return (
                      <a
                        key={i}
                        href={item.href}
                        className="w-9 h-9 bg-gray-100 hover:bg-[#E63946] hover:text-white flex items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:scale-110"
                      >
                        <item.Icon size={13} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-col">
                <h3 className="font-bold text-sm text-[#111] mb-4 uppercase tracking-widest">
                  Quick Links
                </h3>
                <ul className="space-y-2.5">
                  {quickLinks.map(function(item, i) {
                    return (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-gray-500 hover:text-[#E63946] text-sm transition-all group"
                        >
                          <FaChevronRight size={8} className="group-hover:translate-x-1 transition-transform" />
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-col">
                <h3 className="font-bold text-sm text-[#111] mb-4 uppercase tracking-widest">
                  Services
                </h3>
                <ul className="space-y-2.5">
                  {services.map(function(item, i) {
                    return (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-gray-500 hover:text-[#E63946] text-sm transition-all group"
                        >
                          <FaChevronRight size={8} className="group-hover:translate-x-1 transition-transform" />
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact */}
              <div className="footer-col col-span-2 lg:col-span-1">
                <h3 className="font-bold text-sm text-[#111] mb-4 uppercase tracking-widest">
                  Contact
                </h3>
                <div className="space-y-4">
                  {contactItems.map(function(item, i) {
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0">
                          <item.Icon className="text-[#E63946]" size={12} />
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-gray-500 hover:text-[#E63946] transition mt-1"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-500 mt-1">{item.text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-100 px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-xs">
              {year} DSP Tints. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              Made with <FaHeart className="text-[#E63946] mx-1" size={10} /> in Canada
            </p>
          </div>

        </footer>
      </div>

      <ScrollTop />
    </div>
  );
};

export default Footer;