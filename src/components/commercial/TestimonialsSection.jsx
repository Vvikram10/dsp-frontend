import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Delhi',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Heat reduction is incredible. Our AC bills dropped significantly!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Office Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Perfect for office privacy and glare reduction. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Restaurant Owner',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    text: 'Comfort improved and energy costs reduced after installation.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          scrollTrigger: { trigger: '.test-header', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.testimonial-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [current]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative">

      {/* RED GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="test-header text-center mb-10 sm:mb-14">

          <span className="text-[#E63946] text-xs font-semibold tracking-[3px] uppercase">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-4 mb-4">
            What Our <span className="text-[#E63946]">Clients</span> Say
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            Real feedback from our happy customers.
          </p>
        </div>

        {/* CARD */}
        <div className="testimonial-card bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 text-center shadow-sm">

          {/* ICON */}
          <div className="w-12 h-12 mx-auto mb-6 bg-[#E63946]/10 rounded-lg flex items-center justify-center text-[#E63946]">
            <FaQuoteLeft />
          </div>

          {/* STARS */}
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(t.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-sm" />
            ))}
          </div>

          {/* TEXT */}
          <p className="text-gray-600 text-sm sm:text-base mb-6 italic">
            "{t.text}"
          </p>

          {/* USER */}
          <div className="flex items-center justify-center gap-3 border-t pt-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div className="text-left">
              <div className="font-semibold text-[#111] text-sm">{t.name}</div>
              <div className="text-gray-500 text-xs">{t.role}</div>
            </div>
          </div>

        </div>

        {/* NAV */}
        <div className="flex items-center justify-center gap-4 mt-8">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#E63946] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'bg-[#E63946] w-6'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#E63946] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;