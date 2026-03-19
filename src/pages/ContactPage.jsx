import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner, FaCheckCircle } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSubmitContactMutation } from "../store/api/contactApi";

const ContactPage = ({ mode = "car" }) => {
    const navigate = useNavigate();
    const [submitContact, { isLoading, isError, error, data }] = useSubmitContactMutation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const isDark = mode === "car";

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitContact(formData).unwrap();
            setShowSuccess(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (err) {
            console.error(err);
        }
    };

    const contactInfo = [
        { icon: <FaPhone />, label: "Phone", value: "+14373619794", href: "tel:+14373619794" },
        { icon: <FaEnvelope />, label: "Email", value: "Hello@intopdigital.com", href: "mailto:Hello@intopdigital.com" },
        { icon: <FaMapMarkerAlt />, label: "Location", value: "Canada", href: null },
    ];


    return (
        <div className={`min-h-screen ${isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f5f5f5] text-[#111]"}`}>

            {/* HERO */}
            <div className={`w-full py-14 px-6 text-center ${isDark ? "bg-gradient-to-b from-[#1a0000] to-[#0a0a0a]" : "bg-gradient-to-b from-white to-[#f5f5f5]"}`}>
                <p className="text-[#E63946] text-sm font-semibold uppercase tracking-widest mb-2">
                    Reach Out
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold">
                    Get In <span className="text-[#E63946]">Touch</span>
                </h1>
                <p className={`mt-4 max-w-xl mx-auto text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Have questions about our services? We are happy to help.
                </p>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl mx-auto px-4 pb-20 -mt-6">
                <div className="grid lg:grid-cols-5 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-4">

                        {contactInfo.map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-4 p-5 rounded-2xl border transition hover:scale-[1.01] ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 hover:shadow-md"}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center text-[#E63946] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a href={item.href} className="text-sm font-medium text-[#E63946] hover:underline">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT FORM */}
                    <div className={`lg:col-span-3 p-8 rounded-2xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"}`}>
                        <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                        <p className={`text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            We will get back to you within 24 hours.
                        </p>

                        {showSuccess && (
                            <div className="mb-5 flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-lg text-sm">
                                <FaCheckCircle />
                                {data?.message || "Message sent successfully!"}
                            </div>
                        )}

                        {isError && (
                            <div className="mb-5 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                                {error?.data?.message || "Something went wrong. Please try again."}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["name", "email"].map((field) => (
                                    <div key={field}>
                                        <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                            {field}
                                        </label>
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            placeholder={field === "name" ? "John Doe" : "john@email.com"}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl outline-none border transition focus:border-[#E63946] text-sm ${isDark ? "bg-white/10 border-white/10 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-black placeholder-gray-400 focus:bg-white"}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                    className={`w-full px-4 py-3 rounded-xl outline-none border transition focus:border-[#E63946] text-sm ${isDark ? "bg-white/10 border-white/10 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-black placeholder-gray-400 focus:bg-white"}`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your vehicle and what service you need..."
                                    required
                                    className={`w-full px-4 py-3 rounded-xl outline-none border transition focus:border-[#E63946] text-sm resize-none ${isDark ? "bg-white/10 border-white/10 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-black placeholder-gray-400 focus:bg-white"}`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || showSuccess}
                                className="w-full py-3.5 rounded-xl font-bold text-white bg-[#E63946] hover:bg-[#c92f3a] transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Sending...
                                    </>
                                ) : showSuccess ? (
                                    <>
                                        <FaCheckCircle />
                                        Sent!
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;