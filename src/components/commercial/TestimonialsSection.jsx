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
    text: 'DSP Tints installed tinting on all our home windows. The heat reduction is incredible — our AC bills dropped by 30%! Highly recommend their residential service.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Office Manager, TechCorp',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'We had the entire office building done with their commercial film. Glare on our screens is gone, and the privacy is exactly what we needed for meeting rooms.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Restaurant Owner',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    text: 'Our restaurant used to get unbearably hot during summer. After DSP installed their ceramic film, it\'s comfortable and our energy costs are way down.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Clinic Director',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Patient privacy was our main concern. The frosted and privacy films DSP installed are perfect. Professional service from start to finish.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Retail Store Manager',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'The storefront tinting looks amazing and protects our merchandise from UV fading. DSP team was on time, clean, and very professional.',
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
      gsap.fromTo('.test-header > *', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.test-header', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.testimonial-card', { opacity: 0, y: 30, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
    });
  }, [current]);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="test-header text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <span className="text-red-600 font-semibold text-sm tracking-[3px] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-slate-900">
            What Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from homeowners, business owners, and property managers across India who trust DSP Tints for quality and professionalism.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="testimonial-card bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-slate-200 text-center relative hover:shadow-2xl transition-all duration-300">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <FaQuoteLeft className="text-white text-2xl" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xl" />
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 italic font-medium">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 py-4 border-t border-slate-200">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-3 border-red-200 shadow-md"
              />
              <div className="text-left">
                <div className="font-heading font-bold text-slate-900 text-lg">{t.name}</div>
                <div className="text-slate-600 text-sm font-medium">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-red-300 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current 
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 w-8 h-3 shadow-md' 
                      : 'bg-slate-300 w-3 h-3 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-red-300 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8">
            <p className="text-slate-600 font-medium">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold">{current + 1}</span>
              <span className="text-slate-400"> of </span>
              <span className="font-bold text-slate-900">{testimonials.length}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;