import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitter,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaHeart,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-col', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-grid', start: 'top 90%' },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Heat Reduction',
    'UV Protection',
    'Privacy Films',
    'Safety Films',
    'Decorative Films',
    'Energy Saving',
    'Commercial Tinting',
    'Residential Tinting',
  ];

  const socials = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTiktok />, href: '#', label: 'TikTok' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer ref={footerRef} className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top Red Line */}
      <div className="h-1 gradient-red" />

      {/* Newsletter Section */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-bold">
                Subscribe to Our <span className="text-red-500">Newsletter</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Get exclusive deals, tips, and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 bg-slate-700 border border-slate-600 rounded-l-xl px-5 py-3.5 text-white placeholder-slate-400 focus:border-red-500 outline-none transition-all text-sm"
              />
              <button className="gradient-red px-8 py-3.5 rounded-r-xl font-semibold text-white text-sm hover:shadow-red transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — Brand */}
            <div className="footer-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-red rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-white">DSP</span>
                </div>
                <div>
                  <h1 className="font-heading text-2xl font-bold leading-none">
                    DSP<span className="text-red-500">-TINTS</span>
                  </h1>
                  <p className="text-[10px] text-slate-400 tracking-[3px] uppercase">
                    Window Tinting
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your trusted partner for premium window tinting solutions. From homes to commercial
                buildings — we deliver quality, comfort, and energy savings.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[10px] text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500" />
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((service, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-slate-400 text-sm hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[10px] text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500" />
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">123 Auto Care Boulevard</p>
                    <p className="text-slate-500 text-xs">City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-xs">Mon-Sat 8AM-8PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">info@dsptints.com</p>
                    <p className="text-slate-500 text-xs">We reply within 24hrs</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden h-32 bg-slate-800 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                  className="w-full h-full border-0 opacity-50"
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>

              {/* Property Types Served */}
              <div className="mt-6">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {['Homes', 'Offices', 'Retail', 'Restaurants', 'Clinics'].map((p, i) => (
                    <span key={i} className="text-[10px] bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              { label: '99% UV Block', icon: '☀️' },
              { label: 'Energy Star', icon: '⚡' },
              { label: 'Certified Install', icon: '✅' },
              { label: 'Lifetime Warranty', icon: '🛡️' },
              { label: 'Eco Friendly', icon: '🌿' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-slate-400 text-xs font-medium tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} DSP-TINTS. All rights reserved. Made with{' '}
              <FaHeart className="inline text-red-500 text-xs" /> for better spaces.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 text-xs hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 text-xs hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 text-xs hover:text-red-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </footer>
  );
};

// =====================
// Scroll to Top Button
// =====================
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full gradient-red flex items-center justify-center text-red-500 shadow-lg shadow-red-500/30 transition-all duration-500 hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Footer;