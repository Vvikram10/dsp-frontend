import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaShieldAlt, FaCar, FaPaintBrush, FaStar } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'WINDOW',
    titleAccent: 'TINTING',
    subtitle: 'Professional window tinting with premium films for maximum UV protection',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80',
    services: ['Ceramic Coating', 'Car Wrapping', 'Paint Protection'],
  },
  {
    id: 2,
    title: 'CAR',
    titleAccent: 'WRAPPING',
    subtitle: 'Transform your vehicle with stunning vinyl wraps and custom designs',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80',
    services: ['Full Wrap', 'Partial Wrap', 'Color Change'],
  },
  {
    id: 3,
    title: 'CERAMIC',
    titleAccent: 'COATING',
    subtitle: 'Long-lasting ceramic protection for a showroom-quality finish',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    services: ['9H Coating', 'Graphene Coating', 'Nano Coating'],
  },
  {
    id: 4,
    title: 'PAINT',
    titleAccent: 'PROTECTION',
    subtitle: 'PPF installation to guard your paint against chips and scratches',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=80',
    services: ['Full PPF', 'Partial PPF', 'Self-Healing Film'],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  const animateSlide = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-title',
      { y: 100, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: 'power4.out' }
    )
      .fromTo(
        '.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-service-tag',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );
  };

  useEffect(() => {
    animateSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    animateSlide();
  }, [current]);

  const goToSlide = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const slide = slides[current];

  return (
    <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover scale-110"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" ref={textRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {slide.services.map((service, i) => (
                <span
                  key={i}
                  className="hero-service-tag flex items-center gap-2 text-xs sm:text-sm text-gray-300 glass px-4 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {service}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="hero-title font-heading font-bold leading-none mb-6">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                {slide.title}
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary">
                {slide.titleAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="hero-btn gradient-red px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-base hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaCar />
                Explore Services
              </a>
              <a
                href="#contact"
                className="hero-btn glass px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <FaShieldAlt />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {/* Pause Button */}
        <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-10 h-3 bg-primary'
                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Side Stats */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-6">
        {[
          { icon: <FaStar />, label: '5-Star', sub: 'Rated' },
          { icon: <FaCar />, label: '10K+', sub: 'Cars Done' },
          { icon: <FaPaintBrush />, label: '15+', sub: 'Years Exp' },
        ].map((stat, i) => (
          <div
            key={i}
            className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 cursor-default"
          >
            <div className="text-primary text-xl mb-1">{stat.icon}</div>
            <div className="font-heading font-bold text-lg">{stat.label}</div>
            <div className="text-[10px] text-gray-400">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;