import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.cta-form',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-form', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.contact-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-cards', start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      sub: 'Mon-Sat 8AM-8PM',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      detail: 'info@dsptints.com',
      sub: 'We reply within 24hrs',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      detail: '123 Auto Care Blvd',
      sub: 'City, State 12345',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      detail: 'Mon - Sat: 8AM - 8PM',
      sub: 'Sunday: By Appointment',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=30"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-dark-900/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div className="cta-content">
            <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Ready to <span className="text-primary">Transform</span> Your Vehicle?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Get a free quote today! Whether it's window tinting, ceramic coating, PPF, or a
              complete vehicle wrap - our team is ready to deliver premium results.
            </p>

            {/* Contact Cards */}
            <div className="contact-cards grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="contact-card glass rounded-xl p-5 hover:bg-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-gray-300">
                        {info.title}
                      </h4>
                      <p className="text-white font-semibold text-sm mt-1">{info.detail}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-600/30"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="cta-form">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold mb-2">Get Free Quote</h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Service Interested In</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm appearance-none cursor-pointer">
                    <option value="" className="bg-dark-800">Select a service</option>
                    <option value="window-tint" className="bg-dark-800">Window Tint</option>
                    <option value="ppf" className="bg-dark-800">PPF</option>
                    <option value="ceramic" className="bg-dark-800">Ceramic Coating</option>
                    <option value="wrap" className="bg-dark-800">Vehicle Wrap</option>
                    <option value="signs" className="bg-dark-800">Office Signs & Vinyl</option>
                    <option value="tire" className="bg-dark-800">Tire Swap</option>
                    <option value="house-tint" className="bg-dark-800">Commercial/House Tints</option>
                    <option value="3d" className="bg-dark-800">3D Prints</option>
                    <option value="handyman" className="bg-dark-800">Handyman</option>
                    <option value="detailing" className="bg-dark-800">Car Detailing</option>
                    <option value="custom" className="bg-dark-800">Custom Kits Installation</option>
                  </select>
                </div>

                {/* Vehicle Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Vehicle Make</label>
                    <input
                      type="text"
                      placeholder="e.g. BMW"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Vehicle Model</label>
                    <input
                      type="text"
                      placeholder="e.g. M4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full gradient-red py-4 rounded-xl font-heading font-bold text-lg text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message →
                </button>

                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;