import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'James Wilson',
    role: 'BMW M4 Owner',
    rating: 5,
    text: 'DSP-TINTS did an incredible job on my ceramic coating. The car looks better than when I drove it off the lot. Highly recommend their premium service!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Tesla Model 3 Owner',
    rating: 5,
    text: 'The window tinting is flawless. No bubbles, perfect edges, and the heat reduction is amazing. Professional team that knows what they\'re doing.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Porsche 911 Owner',
    rating: 5,
    text: 'Had a full PPF wrap done. The attention to detail is unmatched. Every edge, every curve - perfectly covered. Worth every penny for peace of mind.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Mercedes C-Class Owner',
    rating: 5,
    text: 'Got a color change wrap and it\'s absolutely stunning. The team was professional, on time, and the quality is outstanding. Already planning my next project!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-header > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonial-header', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.testimonial-card-active',
      { opacity: 0, x: 50, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const autoPlay = setInterval(next, 4000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="testimonial-header text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 relative testimonial-card-active">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-primary/20 text-6xl absolute top-8 right-8" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-primary/30">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-heading text-xl font-bold text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Mini Avatars */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  i === current
                    ? 'border-primary scale-110 ring-2 ring-primary/30'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;