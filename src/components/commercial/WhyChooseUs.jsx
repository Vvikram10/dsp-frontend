import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaCertificate, FaHandshake, FaClock, FaStar,
  FaTools, FaDollarSign,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: <FaCertificate />,
    title: 'Certified Professionals',
    desc: 'Our installers are factory-trained and certified with years of hands-on experience in commercial and residential tinting.',
  },
  {
    icon: <FaStar />,
    title: 'Premium Film Brands',
    desc: 'We use only top-tier film brands known for durability, clarity, and performance — no cheap alternatives.',
  },
  {
    icon: <FaHandshake />,
    title: 'Lifetime Warranty',
    desc: 'Select films come with a lifetime warranty covering bubbling, peeling, fading, and discoloration.',
  },
  {
    icon: <FaClock />,
    title: 'Quick Turnaround',
    desc: 'Most residential jobs completed same day. Commercial projects on schedule with minimal business disruption.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Competitive Pricing',
    desc: 'Transparent, upfront pricing with no hidden fees. Free consultations and quotes for every project.',
  },
  {
    icon: <FaTools />,
    title: 'Full Service Solutions',
    desc: 'From consultation to installation and after-care — we handle everything so you don\'t have to worry.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-header > *', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-header', start: 'top 80%' },
      });
      gsap.fromTo('.why-card', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-grid', start: 'top 85%' },
      });
      gsap.fromTo('.why-image', { x: 60, opacity: 0, scale: 0.95 }, {
        x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.why-image', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="why-header text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <span className="text-red-600 font-semibold text-sm tracking-[3px] uppercase">
              Why DSP Tints
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-slate-900">
            Why <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine expertise, premium materials, and outstanding customer service to deliver
            window tinting results that exceed your expectations every single time.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Cards */}
          <div className="why-grid lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="why-card group bg-white rounded-2xl p-7 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-400 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {r.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Image with Testimonial */}
          <div className="why-image lg:col-span-2 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85&auto=format&fit=crop"
                alt="Residential Window Tinting"
                className="w-full h-[600px] object-cover"
              />
              {/* Darker overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Testimonial Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-slate-800 text-sm font-semibold leading-relaxed mb-2">
                    "DSP Tints completely transformed our home. The privacy, heat reduction, and UV protection are outstanding!"
                  </p>
                  <p className="text-slate-600 text-xs font-medium">— Rajesh Sharma, Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;