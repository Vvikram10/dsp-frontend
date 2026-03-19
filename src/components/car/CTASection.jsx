import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import { useSubmitCarContactMutation } from "../../store/api/carContactApi";

gsap.registerPlugin(ScrollTrigger);

const CarCTASection = () => {
  const sectionRef = useRef(null);
  const [submitCarContact, { isLoading, isSuccess, isError, error, data }] =
    useSubmitCarContactMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterested: "",
    vehicleMake: "",
    vehicleModel: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".car-cta-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".car-cta-content", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".car-cta-form",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".car-cta-form", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".car-contact-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".car-contact-cards",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterested: "",
        vehicleMake: "",
        vehicleModel: "",
        message: "",
      });
      const timer = setTimeout(() => setShowSuccess(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitCarContact(formData).unwrap();
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      sub: "Mon-Sat 8AM-8PM",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "info@dsptints.com",
      sub: "We reply within 24hrs",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      detail: "123 Auto Care Blvd",
      sub: "City, State 12345",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      detail: "Mon - Sat: 8AM - 8PM",
      sub: "Sunday: By Appointment",
    },
  ];

  return (
    <section
      id="car-cta"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden"
    >
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
          {/* Left Side */}
          <div className="car-cta-content">
            <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Ready to{" "}
              <span className="text-primary">Transform</span> Your
              Vehicle?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Get a free quote today! Whether it's window tinting, ceramic
              coating, PPF, or a complete vehicle wrap — our team is ready
              to deliver premium results.
            </p>

            {/* Contact Cards */}
            <div className="car-contact-cards grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="car-contact-card glass rounded-xl p-5 hover:bg-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-gray-300">
                        {info.title}
                      </h4>
                      <p className="text-white font-semibold text-sm mt-1">
                        {info.detail}
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
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

          {/* Right Side — Form */}
          <div className="car-cta-form">
            <div className="glass rounded-3xl p-8 md:p-10">
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-xl p-5 flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-green-400 font-bold text-sm">
                      Message Sent Successfully! 🎉
                    </h4>
                    <p className="text-green-300/80 text-xs mt-1">
                      {data?.message ||
                        "We'll get back to you within 24 hours."}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {isError && (
                <div className="mb-6 bg-red-500/20 border border-red-500/50 rounded-xl p-5">
                  <p className="text-red-400 font-bold text-sm">
                    ❌{" "}
                    {error?.data?.message ||
                      "Something went wrong. Please try again."}
                  </p>
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold mb-2">
                Get Free Quote
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Service Interested In *
                  </label>
                  <select
                    name="serviceInterested"
                    value={formData.serviceInterested}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark-800">
                      Select a service
                    </option>
                    <option value="window-tint" className="bg-dark-800">
                      Window Tint
                    </option>
                    <option value="ppf" className="bg-dark-800">
                      PPF
                    </option>
                    <option value="ceramic" className="bg-dark-800">
                      Ceramic Coating
                    </option>
                    <option value="wrap" className="bg-dark-800">
                      Vehicle Wrap
                    </option>
                    <option value="signs" className="bg-dark-800">
                      Office Signs & Vinyl
                    </option>
                    <option value="tire" className="bg-dark-800">
                      Tire Swap
                    </option>
                    <option value="house-tint" className="bg-dark-800">
                      Commercial/House Tints
                    </option>
                    <option value="3d" className="bg-dark-800">
                      3D Prints
                    </option>
                    <option value="handyman" className="bg-dark-800">
                      Handyman
                    </option>
                    <option value="detailing" className="bg-dark-800">
                      Car Detailing
                    </option>
                    <option value="custom" className="bg-dark-800">
                      Custom Kits Installation
                    </option>
                  </select>
                </div>

                {/* Vehicle Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Vehicle Make
                    </label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      placeholder="e.g. BMW"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Vehicle Model
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g. M4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-red py-4 rounded-xl font-heading font-bold text-lg text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin text-xl" />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to our Privacy Policy
                  and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCTASection;
