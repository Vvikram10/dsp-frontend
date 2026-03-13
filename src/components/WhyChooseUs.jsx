import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCertificate, FaClock, FaMoneyBillWave, FaAward, FaTools, FaHeadset } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: <FaCertificate />,
    title: 'Certified Experts',
    desc: 'Our team holds industry-leading certifications with years of hands-on experience.',
  },
  {
    icon: <FaAward />,
    title: 'Premium Products',
    desc: 'We use only top-tier brands and materials for lasting quality and protection.',
  },
  {
    icon: <FaClock />,
    title: 'Quick Turnaround',
    desc: 'Most services completed same-day so you get back on the road faster.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Competitive Pricing',
    desc: 'Transparent pricing with no hidden fees. Best value guaranteed.',
  },
  {
    icon: <FaTools />,
    title: 'State-of-the-Art Facility',
    desc: 'Clean, modern workspace equipped with the latest tools and technology.',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Support',
    desc: 'Always available to answer questions and provide after-service support.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-header > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.why-header', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.why-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.why-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background car image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=30"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="why-header text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
            Why DSP-Tints
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just provide services – we deliver an experience that keeps customers coming back.
          </p>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="why-card glass rounded-2xl p-8 group hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl gradient-red flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;