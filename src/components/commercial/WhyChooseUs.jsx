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
    desc: 'Experienced and trained experts delivering high-quality installations.',
  },
  {
    icon: <FaStar />,
    title: 'Premium Film Brands',
    desc: 'Only top-quality films for durability, clarity, and performance.',
  },
  {
    icon: <FaHandshake />,
    title: 'Lifetime Warranty',
    desc: 'Warranty coverage on select films for long-term peace of mind.',
  },
  {
    icon: <FaClock />,
    title: 'Quick Turnaround',
    desc: 'Fast installations with minimal disruption to your schedule.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Honest pricing with free consultation.',
  },
  {
    icon: <FaTools />,
    title: 'Complete Solutions',
    desc: 'From consultation to installation — everything handled professionally.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.why-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          scrollTrigger: { trigger: '.why-header', start: 'top 80%' }
        }
      );

      gsap.fromTo('.why-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5,
          scrollTrigger: { trigger: '.why-grid', start: 'top 85%' }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F5F5F5] relative">

      {/* RED GLOW */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="why-header text-center mb-12 sm:mb-16">

          <span className="text-[#E63946] text-xs font-semibold tracking-[3px] uppercase">
            Why DSP Tints
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-[#111]">
            Why <span className="text-[#E63946]">Choose Us</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            We deliver premium tinting solutions with expert installation and trusted materials.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 why-grid">

          {reasons.map((r, i) => (
            <div
              key={i}
              className="why-card bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-all hover:shadow-md hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-lg bg-[#E63946]/10 flex items-center justify-center text-[#E63946] text-xl mb-4">
                {r.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold text-[#111] mb-2">
                {r.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;