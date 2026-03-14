import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSun, FaShieldAlt, FaEyeSlash, FaLeaf, FaThermometerHalf, FaLock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: <FaThermometerHalf />, text: 'Heat Reduction' },
  { icon: <FaSun />, text: '99% UV Block' },
  { icon: <FaEyeSlash />, text: 'Privacy' },
  { icon: <FaLeaf />, text: 'Energy Saving' },
  { icon: <FaShieldAlt />, text: 'Safety Films' },
  { icon: <FaLock />, text: 'Security' },
];

const BenefitsBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.benefit-pill', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: bannerRef.current, start: 'top 90%' },
      });
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="py-10 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-pill flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/25 transition-all duration-300"
            >
              <span className="text-white text-sm">{b.icon}</span>
              <span className="text-white text-sm font-semibold tracking-wide">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;