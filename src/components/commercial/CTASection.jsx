import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content > *', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
      });
      gsap.fromTo('.cta-form', { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-form', start: 'top 80%' },
      });
      gsap.fromTo('.contact-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cards', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const contactInfo = [
    { icon: <FaPhone />, title: 'Call Us', detail: '+91 9876 543 210', sub: 'Mon-Sat 8AM-8PM IST' },
    { icon: <FaEnvelope />, title: 'Email Us', detail: 'info@dsptints.com', sub: 'Reply within 24 hours' },
    { icon: <FaMapMarkerAlt />, title: 'Visit Us', detail: 'Delhi, India', sub: 'Multiple service locations' },
    { icon: <FaClock />, title: 'Working Hours', detail: 'Mon - Sat: 8AM - 8PM', sub: 'Sunday: By Appointment' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="cta-content">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
              <span className="text-red-600 font-semibold text-sm tracking-[3px] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-slate-900">
              Ready to <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Transform</span> Your Space?
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Get a free consultation and quote today! Whether it's your home, office, retail store,
              restaurant, or clinic — our team delivers premium window tinting results.
            </p>

            {/* Contact Cards */}
            <div className="contact-cards grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="contact-card bg-white rounded-2xl p-6 hover:bg-white hover:shadow-lg border-2 border-slate-200 hover:border-red-400 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">{info.title}</h4>
                      <p className="text-slate-900 font-semibold text-sm mt-2">{info.detail}</p>
                      <p className="text-slate-600 text-xs mt-1 font-medium">{info.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/30 shadow-md"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <div className="cta-form">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-slate-200 hover:border-red-300 transition-all duration-300">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Get Free Quote</h3>
              <p className="text-slate-600 text-sm mb-8 font-medium">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-slate-700 mb-2 block font-semibold">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-700 mb-2 block font-semibold">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Phone (WhatsApp)</label>
                  <input
                    type="tel"
                    placeholder="+91 9876 543 210"
                    className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Property Type</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium appearance-none cursor-pointer">
                    <option value="">Select property type</option>
                    <option value="home">Home / Residential</option>
                    <option value="office">Office</option>
                    <option value="retail">Retail Store</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="clinic">Clinic / Medical</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Service Interested In</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="heat">Heat Reduction Film</option>
                    <option value="uv">UV Protection Film</option>
                    <option value="privacy">Privacy Film</option>
                    <option value="security">Safety & Security Film</option>
                    <option value="decorative">Decorative / Frosted Film</option>
                    <option value="glare">Anti-Glare Film</option>
                    <option value="energy">Energy Saving Film</option>
                    <option value="full">Full Tinting Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Estimated Window Area</label>
                  <input
                    type="text"
                    placeholder="e.g. 200 sq ft"
                    className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 mb-2 block font-semibold">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-4 rounded-xl font-heading font-bold text-lg text-white hover:shadow-lg hover:shadow-red-300/50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                >
                  Send Message →
                </button>

                <p className="text-slate-600 text-xs text-center font-medium">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
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