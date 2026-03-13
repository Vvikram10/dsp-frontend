import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaTrophy, FaUsers, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { x: -100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-text > *',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-stat',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <FaTrophy />, number: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '10K+', label: 'Happy Customers' },
    { icon: <FaClock />, number: '24/7', label: 'Support Available' },
    { icon: <FaCheckCircle />, number: '100%', label: 'Satisfaction' },
  ];

  const features = [
    'Premium quality materials & brands',
    'Certified & trained professionals',
    'Lifetime warranty on select services',
    'Competitive pricing with no hidden fees',
    'State-of-the-art facility',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="about-image relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80"
                alt="About DSP Tints"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-[200px]">
              <div className="text-4xl font-heading font-bold text-primary">15+</div>
              <div className="text-sm text-gray-300 mt-1">Years of Excellence in Auto Care</div>
            </div>

            {/* Red accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-2xl" />
          </div>

          {/* Text Side */}
          <div className="about-text">
            <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
              About DSP-Tints
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
              Expert Auto Care for a{' '}
              <span className="text-primary">Premium</span> Finish
            </h2>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
              At DSP-TINTS, we are a leading automotive care and customization shop. Our
              professionally qualified staff brings extensive certifications and training with
              top-of-the-range care products. From window tinting to full vehicle wraps, ceramic
              coatings to PPF, we deliver excellence in every project.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="gradient-red px-8 py-4 rounded-full font-semibold text-white inline-block hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Our Services →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="about-stat glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300"
            >
              <div className="text-primary text-3xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="font-heading text-3xl font-bold">{stat.number}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;