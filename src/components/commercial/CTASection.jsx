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
import { useSubmitCommercialContactMutation } from "../../store/api/commercialContactApi";

gsap.registerPlugin(ScrollTrigger);

const CommercialCTASection = () => {
  const sectionRef = useRef(null);

  const [submitCommercialContact, { isLoading, isSuccess, isError, error, data }] =
    useSubmitCommercialContactMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceInterested: "",
    estimatedArea: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-left > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: ".cta-left", start: "top 80%" }
      });

      gsap.fromTo(".cta-form", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6,
        scrollTrigger: { trigger: ".cta-form", start: "top 85%" }
      });
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
        propertyType: "",
        serviceInterested: "",
        estimatedArea: "",
        message: "",
      });
      const timer = setTimeout(() => setShowSuccess(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitCommercialContact(formData).unwrap();
    } catch {}
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Call", detail: "+91 9876543210" },
    { icon: <FaEnvelope />, title: "Email", detail: "info@dsptints.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", detail: "Delhi, India" },
    { icon: <FaClock />, title: "Hours", detail: "Mon-Sat 8AM - 8PM" },
  ];

  return (
    <section ref={sectionRef} id="cta"  className="py-20 lg:py-28 bg-[#F5F5F5] relative">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="cta-left">

            <span className="text-[#E63946] text-xs font-semibold tracking-[3px] uppercase">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-4 mb-4">
              Get Your <span className="text-[#E63946]">Free Quote</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-8">
              Tell us about your project and we’ll get back within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#E63946]/10 text-[#E63946] flex items-center justify-center rounded-lg">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{c.title}</div>
                    <div className="text-sm font-semibold text-[#111]">{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

          {/* RIGHT FORM */}
          <div className="cta-form bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

            {showSuccess && (
              <div className="mb-4 flex gap-2 text-green-600 text-sm">
                <FaCheckCircle /> {data?.message || "Message sent successfully"}
              </div>
            )}

            {isError && (
              <div className="mb-4 text-red-600 text-sm">
                {error?.data?.message || "Something went wrong"}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="firstName" value={formData.firstName} onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none" />

                <input name="lastName" value={formData.lastName} onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none" />
              </div>

              <input name="email" value={formData.email} onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none" />

              <input name="phone" value={formData.phone} onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select name="propertyType" value={formData.propertyType} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none">
                  <option value="">Property Type</option>
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                </select>

                <select name="serviceInterested" value={formData.serviceInterested} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none">
                  <option value="">Service</option>
                  <option value="heat">Heat</option>
                  <option value="privacy">Privacy</option>
                </select>
              </div>

              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Your message..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none resize-none" />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#E63946] hover:bg-[#C92F3A] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommercialCTASection;