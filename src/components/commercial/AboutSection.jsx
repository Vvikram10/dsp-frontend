import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaTrophy, FaUsers, FaClock, FaAward } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-image', { x: -80, opacity: 0, scale: 0.95 }, {
        x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-image', start: 'top 80%' },
      });
      gsap.fromTo('.about-text > *', { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      });
      gsap.fromTo('.about-stat', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <FaTrophy />, number: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '10K+', label: 'Happy Customers' },
    { icon: <FaClock />, number: '24/7', label: 'Support Available' },
    { icon: <FaAward />, number: '100%', label: 'Satisfaction' },
  ];

  const features = [
    'Professional installation for homes & offices',
    'Premium quality films from top brands',
    'Up to 99% UV ray protection',
    'Energy-efficient window solutions',
    'Lifetime warranty on select films',
    'Competitive pricing with free consultations',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="about-image relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern Office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft-lg p-6 max-w-[210px] border border-slate-100">
              <div className="text-4xl font-heading font-bold text-primary">15+</div>
              <div className="text-sm text-slate-500 mt-1">Years of Excellence in Window Tinting</div>
            </div>
            {/* Accent border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-red-200 rounded-3xl" />
          </div>

          {/* Text */}
          <div className="about-text">
            <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">About DSP-Tints</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight text-slate-900">
              Professional Tinting for{' '}
              <span className="text-primary">Homes & Offices</span>
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8">
              At DSP-TINTS, we provide premium window tinting solutions for residential and
              commercial properties. Our professionally certified team delivers expert installation
              with top-tier films that reduce heat, block UV rays, enhance privacy, and save energy —
              for homes, offices, retail stores, restaurants, and clinics.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="gradient-red px-8 py-4 rounded-full font-semibold text-white inline-block hover:shadow-red transition-all duration-300 hover:scale-105"
            >
              Book Consultation →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div key={i} className="about-stat bg-slate-50 rounded-2xl p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-slate-100">
              <div className="text-primary text-3xl mb-3 flex justify-center">{stat.icon}</div>
              <div className="font-heading text-3xl font-bold text-slate-900">{stat.number}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;