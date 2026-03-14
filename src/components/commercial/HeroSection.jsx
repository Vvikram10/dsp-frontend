import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaSun, FaShieldAlt, FaEye, FaLeaf } from 'react-icons/fa';

const features = [
  { icon: <FaSun />, text: 'Heat Protection' },
  { icon: <FaShieldAlt />, text: 'UV Block 99%' },
  { icon: <FaEye />, text: 'Privacy' },
  { icon: <FaLeaf />, text: 'Energy Saving' },
];

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.3')
      .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-features .feat-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.2')
      .fromTo('.hero-scroll', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
      .fromTo('.hero-stats .stat-item', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(2)' }, '-=0.4');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wider">
              Residential & Commercial Solutions
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-title font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            DSP Window{' '}
            <span className="relative">
              <span className="text-red-500">Tinting</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 250 2 298 10" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{' '}
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Professional window tinting for homes, offices, retail stores, restaurants, and clinics.
            Premium films that protect, save energy, and enhance privacy.
          </p>

          {/* Feature Pills */}
          <div className="hero-features flex flex-wrap gap-3 mb-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="feat-item flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
              >
                <span className="text-red-400 text-sm">{f.icon}</span>
                <span className="text-white/90 text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="hero-cta gradient-red px-8 py-4 rounded-full font-semibold text-white text-lg hover:shadow-red transition-all duration-300 hover:scale-105"
            >
              Get Free Quote →
            </a>
            <a
              href="#services"
              className="hero-cta bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold text-white text-lg hover:bg-white/20 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap gap-8">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '10K+', label: 'Projects Done' },
              { num: '99%', label: 'UV Protection' },
            ].map((s, i) => (
              <div key={i} className="stat-item text-center">
                <div className="font-heading text-3xl font-bold text-white">{s.num}</div>
                <div className="text-white/60 text-xs tracking-wider uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-red-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;