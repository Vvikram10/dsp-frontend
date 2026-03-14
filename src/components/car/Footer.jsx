import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaHeart,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-col',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.footer-grid', start: 'top 90%' },
        }
      );
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
    'Window Tint',
    'PPF',
    'Ceramic Coating',
    'Vehicle Wrap',
    'Car Detailing',
    'Custom Kits',
    'Office Signs',
    'House Tints',
  ];

  const socials = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTiktok />, href: '#', label: 'TikTok' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer ref={footerRef} className="bg-dark-800 relative overflow-hidden">
      {/* Top Red Line */}
      <div className="h-1 gradient-red" />

      {/* Newsletter Section */}
      <div className="bg-dark-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-bold">
                Subscribe to Our <span className="text-primary">Newsletter</span>
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Get exclusive deals, tips, and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 bg-white/5 border border-white/10 rounded-l-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary outline-none transition-all text-sm"
              />
              <button className="gradient-red px-8 py-3.5 rounded-r-xl font-semibold text-white text-sm hover:shadow-lg hover:shadow-primary/30 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 - Brand */}
            <div className="footer-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-red rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-white">DSP</span>
                </div>
                <div>
                  <h1 className="font-heading text-2xl font-bold leading-none">
                    DSP<span className="text-primary">-TINTS</span>
                  </h1>
                  <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">
                    Premium Auto Care
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your one-stop shop for premium automotive care, protection, and customization
                services. Quality you can trust, results you can see.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary" />
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((service, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="footer-col">
              <h3 className="font-heading text-lg font-bold mb-6 relative">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary" />
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">123 Auto Care Boulevard</p>
                    <p className="text-gray-500 text-xs">City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-xs">Mon-Sat 8AM-8PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">info@dsptints.com</p>
                    <p className="text-gray-500 text-xs">We reply within 24hrs</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 rounded-xl overflow-hidden h-32 bg-dark-600 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                  className="w-full h-full border-0 grayscale opacity-60"
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} DSP-TINTS. All rights reserved. Made with{' '}
              <FaHeart className="inline text-primary text-xs" /> for automotive excellence.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-xs hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-xs hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-xs hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
};

// Scroll to Top Component
const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full gradient-red flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-all duration-500 hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Footer;