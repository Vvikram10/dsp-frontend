

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// DSP Tinting Services - Professional project gallery
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop',
    title: 'Office Building Tint',
    category: 'Commercial',
    benefit: 'Heat & Glare Reduction',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    benefit: 'Professional Privacy',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&auto=format&fit=crop',
    title: 'Residential Home Tint',
    category: 'Residential',
    benefit: 'UV Protection',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop',
    title: 'Modern Home Privacy Film',
    category: 'Residential',
    benefit: 'Daytime Privacy',
  },
  {
    src: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=85&auto=format&fit=crop',
    title: 'Retail Store Front',
    category: 'Commercial',
    benefit: 'Enhanced Visibility',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=85&auto=format&fit=crop',
    title: 'Conference Room Film',
    category: 'Office',
    benefit: 'Privacy & Professionalism',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85&auto=format&fit=crop',
    title: 'Frosted Decorative Film',
    category: 'Decorative',
    benefit: 'Design & Privacy',
  },
  {
    src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=85&auto=format&fit=crop',
    title: 'Restaurant Window Tint',
    category: 'Commercial',
    benefit: 'Comfort & Branding',
  },
];

const categories = ['All', 'Residential', 'Office', 'Commercial', 'Decorative'];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Scroll animation for header
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-header',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Gallery items animation on filter change
  useEffect(() => {
    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
      }
    );
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden bg-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="gallery-header text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <span className="text-red-600 font-semibold text-sm tracking-[3px] uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Project Gallery
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Transforming spaces with premium window tinting solutions. From heat reduction and UV protection
            to privacy and decorative films—see our professional installations across residential and commercial
            projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-200'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-red-300 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((img, i) => (
            <div
              key={`${activeFilter}-${i}`}
              className="gallery-item group relative rounded-xl overflow-hidden aspect-square cursor-pointer transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              }}
            >
              {/* Image Container */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                loading="lazy"
              />

              {/* Dark Overlay - Optimized for visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 group-hover:opacity-100 transition-all duration-300">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-red-300 text-xs font-bold uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold mb-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0" style={{ transitionDelay: '50ms' }}>
                  {img.title}
                </h3>

                {/* Benefit / Feature */}
                <p className="text-slate-100 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0" style={{ transitionDelay: '100ms' }}>
                  ✓ {img.benefit}
                </p>
              </div>

              {/* Hover Icon - Appears on hover */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform group-hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;